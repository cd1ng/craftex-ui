import { mergeClasses } from "@griffel/react";
import { forwardRef } from "react"
import { dividerClassNames, useBaseStyles, useHorizontalStyles, useVerticalStyles } from "./useDividerStyles.styles";

export type DividerProps = React.HTMLAttributes<HTMLDivElement> & {
  /**
   * 分隔线内内容的对齐方式。
   * @default 'center'
   */
  alignContent?: "start" | "center" | "end"
  /**
   * 默认外观。
   *
   * @default 'default'
   */
  appearance?: "brand" | "default" | "strong" | "subtle"
  /**
   * 在divider的开头和结尾添加padding。
   *
   * @default false
   */
  inset?: boolean
  /**
   * 分隔线可以是水平的（默认）或垂直的
   *
   * @default false
   */
  vertical?: boolean
};

export const Divider: ForwardRefComponent<DividerProps> = forwardRef((
  {
    alignContent = "center",
    appearance = "default",
    inset = false,
    vertical = false,
    children,
    className,
    style,
    ...restProps
  },
  ref
) => {
  // 获取对应样式的类名
  const baseStyles = useBaseStyles()
  const horizontalStyles = useHorizontalStyles()
  const verticalStyles = useVerticalStyles()
  // 判断是否有子节点
  let hasChildren = children !== undefined && children !== null;
  if (hasChildren && typeof children === "string") {
    hasChildren = children.trim() !== ""
  }
  return <div {...restProps} ref={ref as React.Ref<HTMLDivElement>} className={
    mergeClasses(
      dividerClassNames.root,

      // 基础样式
      baseStyles.base,
      baseStyles[alignContent],
      baseStyles[appearance],

      // 横线
      !vertical && horizontalStyles.base,
      !vertical && inset && horizontalStyles.inset,
      !vertical && horizontalStyles[alignContent],

      // 竖线
      vertical && verticalStyles.base,
      vertical && inset && verticalStyles.inset,
      vertical && verticalStyles[alignContent],
      vertical && hasChildren && verticalStyles.withChildren,

      // 没有子节点
      hasChildren === false && baseStyles.childless,

      className
    )}
    role="separator"
    aria-orientation={vertical ? "vertical" : "horizontal"}
    style={style}
  >
    {hasChildren && (
      <span className={dividerClassNames.wrapper}>{children}</span>
    )}
  </div >
})