import React from 'react'

declare global {
  type ForwardRefComponent<Props> = React.ForwardRefExoticComponent<
    Props & React.RefAttributes<Element>
  >
}

// 确保这个文件被视为一个模块
export {}
