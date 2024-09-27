import { FC } from "react";
import { useTimer } from "craftex-ui";

import type { MessageItemProps } from "craftex-ui";


export const MessageItem: FC<MessageItemProps> = (item) => {
  const { onMouseEnter, onMouseLeave } = useTimer({
    id: item.id!,
    duration: item.duration,
    remove: item.onClose!,
  });

  return <div className="message-item" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    {item.content}
  </div>
}
