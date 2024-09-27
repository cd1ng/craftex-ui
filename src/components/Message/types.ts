import { CSSProperties, ReactNode } from "react"

export type Position = 'top' | 'bottom'

export interface MessageProps {
  style?: CSSProperties;
  className?: string | string[];
  content: ReactNode | string;
  duration?: number;
  onClose?: (...args: any) => void;
  id?: number;
  position?: Position;
}

export type MessageList = {
  top: MessageProps[],
  bottom: MessageProps[]
}

export interface MessageTimerProps {
  /**
   * 消息id
   */
  id: number
  /**
   * 消息显示时间
   */
  duration?: number
  /**
   * 移除消息
   */
  remove: (id: number) => void
}

export interface MessageItemProps {
  style?: CSSProperties;
  className?: string | string[];
  content: ReactNode | string;
  duration?: number;
  onClose?: (...args: any) => void;
  id?: number;
  position?: Position;
}


export interface MessageRef {
  add: (messageProps: MessageProps) => number;
  remove: (id: number) => void;
  update: (id: number, messageProps: MessageProps) => void;
  clearAll: () => void;
}
