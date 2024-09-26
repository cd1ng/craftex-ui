import { PropsWithChildren, useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface DialogProps extends PropsWithChildren {
  className?: string
  visible: boolean
  closeCb: () => void
  onClose: () => void
}

// @ts-ignore
const controlShow = (f1, f2, value, timer) => {
  f1(value)
  return setTimeout(() => {
    f2(value)
  }, timer)
}


export const Dialog = ({ visible, onClose, closeCb, children }: DialogProps) => {

  const [modelShow, setModelShow] = useState(visible)
  const [modelShowAync, setModelShowAync] = useState(visible)

  const renderChildren = useMemo(() => {
    return createPortal(<div style={{ display: modelShow ? 'block' : 'none' }}>
      <div className="model_container" style={{ opacity: modelShowAync ? 1 : 0 }}>
        <div className="model_wrap">
          <div style={{ width: '200px' }}> {children} </div>
        </div>
      </div>
      <div className="model_container mast" onClick={() => onClose && onClose()} style={{ opacity: modelShowAync ? 0.6 : 0 }} />
    </div>, document.body)
  }, [modelShow, modelShowAync])


  useEffect(() => {
    let timer
    if (visible) {
      timer = controlShow(setModelShow, setModelShowAync, true, 100)
    } else {
      timer = controlShow(setModelShow, setModelShowAync, false, 100)
    }
    return () => clearTimeout(timer)
  }, [visible])

  useEffect(() => {
    !modelShow && typeof closeCb === 'function' && closeCb()
  }, [modelShow])

  return renderChildren
} 