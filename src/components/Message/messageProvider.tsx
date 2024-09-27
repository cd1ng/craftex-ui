import { useStore, MessageItem } from "craftex-ui";
import { forwardRef, useEffect, useMemo, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import type { MessageProps, Position } from "craftex-ui"

import './index.less';

export interface MessageRef {
  add: (messageProps: MessageProps) => number;
  remove: (id: number) => void;
  update: (id: number, messageProps: MessageProps) => void;
  clearAll: () => void;
}

/**
 * MessageProvider 负责管理消息的添加、更新、删除等操作。
 * 通过 useImperativeHandle 将消息提供者的方法暴露给外部使用
 */
export const MessageProvider = forwardRef<MessageRef, {}>((props, ref) => {
  const { messageList, add, update, remove, clearAll } = useStore('top');

  useImperativeHandle(ref, () => {
    return {
      add,
      update,
      remove,
      clearAll
    }
  }, [])

  // 获取所有位置的数组
  const positions = Object.keys(messageList) as Position[];

  const messageWrapper = <div className="message-wrapper">
    {
      positions.map(direction => {
        return <TransitionGroup className={`message-wrapper-${direction}`} key={direction}>
          {
            messageList[direction].map(item => {
              return <CSSTransition key={item.id} timeout={1000} classNames='message'>
                <MessageItem onClose={remove} {...item}></MessageItem>
              </CSSTransition>
            })
          }
        </TransitionGroup>
      })
    }
  </div>

  // 创建一个div，将messageWrapper挂载到div上，然后通过createPortal将div挂载到body上
  // 这样，messageWrapper就可以脱离react组件树，从而不会因为react组件的卸载而卸载
  // 依赖数组为空，只会创建一次
  const el = useMemo(() => {
    const el = document.createElement('div')
    el.className = 'wrapper'
    document.body.appendChild(el)
    return el
  }, [])

  return createPortal(messageWrapper, el)
})

// export const MessageProvider: FC<MessageProps> = (props) => {
//   const { position = 'top', content } = props
//   const { messageList, add, update, remove, clearAll } = useStore(position);

//   useEffect(() => {
//     setInterval(() => {
//       add({
//         content: Math.random().toString().slice(2, 8)
//       })
//     }, 2000);
//   }, []);

//   // 获取所有位置的数组
//   const positions = Object.keys(messageList) as Position[];

//   const messageWrapper = <div className="message-wrapper">
//     {
//       positions.map(direction => {
//         return <TransitionGroup className={`message-wrapper-${direction}`} key={direction}>
//           {
//             messageList[direction].map(item => {
//               return <CSSTransition key={item.id} timeout={1000} classNames='message'>
//                 <MessageItem onClose={remove} {...item}></MessageItem>
//               </CSSTransition>
//             })
//           }
//         </TransitionGroup>
//       })
//     }
//   </div>

//   // 创建一个div，将messageWrapper挂载到div上，然后通过createPortal将div挂载到body上
//   // 这样，messageWrapper就可以脱离react组件树，从而不会因为react组件的卸载而卸载
//   // 依赖数组为空，只会创建一次
//   const el = useMemo(() => {
//     const el = document.createElement('div')
//     el.className = 'wrapper'
//     document.body.appendChild(el)
//     return el
//   }, [])

//   return createPortal(messageWrapper, el)
// }