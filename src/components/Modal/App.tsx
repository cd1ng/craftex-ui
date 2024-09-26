import { useMemo, useState } from 'react'
import './App.css'
import "./components/modal/modal.less"
import { Modal } from './components/modal'

function App() {
  const [ visible , setVisible ] = useState(false)
  const [ nameShow , setNameShow ] = useState(false)
  const handleClick = () => {
      console.log('点击')
      setVisible(!visible)
      setNameShow(!nameShow)
  }
  /* 防止 Model 的 PureComponent 失去作用 */
  const [ handleClose ,handleOk, handleCancel ] = useMemo(()=>{
      const Ok = () =>  console.log('点击确定按钮')
      const Close = () => setVisible(false)
      const Cancel = () => console.log('点击取消按钮')
      return [ Close , Ok , Cancel  ]
  },[])

  return <div>
      <Modal
      className='xxxx'
          closeCb={handleClose}
          onCancel={handleCancel}
          onClose={handleClose}
          onOk={handleOk}
          title={'《React进阶实践指南》'}
          visible={visible}
      >
         <div className="feel" >
            小册阅读感受： <input placeholder="写下你的感受" />
            {nameShow && <p>作者： 我不是外星人</p>}
         </div>
      </Modal>
      <button onClick={() => {
          setVisible(!visible)
          setNameShow(false)
      }}
      > model show </button>
      <button onClick={handleClick} > model show ( 显示作者 ) </button>
  </div>
}

export default App
