import { PropsWithChildren, useMemo, isValidElement } from "react";
import { Dialog } from "./Dialog";
interface ModalProps extends PropsWithChildren {
  className: string
  title: string
  onClose: () => void
  onOk: () => void
  onCancel: () => void
  closeCb: () => void
  visible: boolean
}

export const Modal = ({ children, className, title, onClose, onOk, onCancel, closeCb, visible }: ModalProps) => {

  const topPart = useMemo(() => {
    return <div className="model_top">
      <span>{title}</span>
      <span className="model_top_close" onClick={() => onClose?.()}>X</span>
    </div>
  }, [title])

  const bottomPart = useMemo(() => {
    return <div className="model_bottom">
      <div className="model_btn_box">
        <button
          className="searchbtn"
          onClick={() => onOk?.()}
        >
          确定
        </button>
        <button
          className="concellbtn"
          onClick={() => onCancel?.()}
        >
          取消
        </button>
      </div>
    </div>
  }, [])

  const childrenPart = useMemo(() => {
    const isValid = isValidElement(children)
    const isString = !isValid && typeof children === 'string'
    if (isValid || isString) {
      return children
    }
    return null
  }, [children])

  return <Dialog className={className} closeCb={closeCb} onClose={onClose} visible={visible}>
    {topPart}
    {childrenPart}
    {bottomPart}
  </Dialog>
}

Modal.prototype.showDialog = ()=>{
  
}


Modal.displayName = 'Modal'

