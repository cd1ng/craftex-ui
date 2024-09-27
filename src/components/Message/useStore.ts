import { useState } from 'react'
import { MessageProps, Position, MessageList } from '.'

const initialState: MessageList = {
  top: [],
  bottom: []
}

/**
 * 用于存储全局消息
 */
export function useStore(defaultPosition: Position) {
  const [messageList, setMessageList] = useState<MessageList>({ ...initialState })
  return {
    messageList,
    add: (messageProps: MessageProps) => {
      const id = getId(messageProps)
      setMessageList((preState) => {
        if (messageProps?.id) {
          const hasCurId = getMessagePosition(preState, messageProps.id)
          if (hasCurId) return preState
        }
        // 根据展示的位置将消息添加到消息列表的顶部或底部
        const position = messageProps.position || defaultPosition
        // 判断消息位置是否在顶部
        const isTop = position.includes('top')
        const messages = isTop ? [{ ...messageProps, id }, ...(preState[position] ?? [])] : [...(preState[position] ?? []), { ...messageProps, id }]
        return {
          ...preState,
          [position]: messages
        }
      })
      return id
    },
    update: (id: number, messageProps: MessageProps) => {
      if (!id) return
      setMessageList((preState) => {
        const nextState = { ...preState }
        const { position, index } = findMessage(nextState, id)
        if (position && index !== -1) {
          nextState[position][index] = {
            ...nextState[position][index],
            ...messageProps
          }
        }
        return nextState
      })
    },
    remove: (id: number) => {
      setMessageList((preState) => {
        const position = getMessagePosition(preState, id)
        if (!position) return preState
        return {
          ...preState,
          [position]: preState[position].filter((notice) => notice.id !== id)
        }
      })
    },
    clearAll: () => {
      setMessageList({ ...initialState })
    },
  }
}


let count = 0
export const getId = (messageProps: MessageProps) => {
  if (messageProps.id) return messageProps.id
  count++
  return count
}


/**
 * 根据Id查找消息位置
 * @param messageList 消息列表
 * @param id 消息Id
 * @returns 消息位置
 */
export function getMessagePosition(messageList: MessageList, id: number) {
  for (const [position, list] of Object.entries(messageList)) {
    if (list.find((item) => item.id === id)) {
      return position as Position;
    }
  }
}

/**
 * 根据Id查找消息位置
 * @param messageList 消息列表
 * @param id 消息Id
 * @returns 消息位置
 */
export function findMessage(messageList: MessageList, id: number) {
  const position = getMessagePosition(messageList, id);

  const index = position ? messageList[position].findIndex((message) => message.id === id) : -1;

  return {
    position,
    index,
  };
}
