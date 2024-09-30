import { render } from "@testing-library/react";
import { Input } from "../Input";

describe("Input",()=>{
  it("renders a default input",()=>{
    const component = render(<Input />);
    // 返回一个渲染组件的DocumentFragment
    // 使用 snapshot 时，Vitest 将拍摄给定值的快照，然后将其与与测试一起存储的参考快照文件进行比较。如果两个快照不匹配，则测试将失败：更改是意外的，或者引用快照需要更新到结果的新版本。
    const tree = component.asFragment();
    expect(tree).toMatchSnapshot();
  })

  it("renders a small input",()=>{
    const smallComponent = render(<Input size="small" />);
    const tree = smallComponent.asFragment();
    expect(tree).toMatchSnapshot();
  })

  it("renders a medium input",()=>{
    const mediumComponent = render(<Input size="medium" />);
    const tree = mediumComponent.asFragment();
    expect(tree).toMatchSnapshot();
  })

  it("renders a large input",()=>{
    const largeComponent = render(<Input size="large" />);
    const tree = largeComponent.asFragment();
    expect(tree).toMatchSnapshot();
  })

  it("renders a disabled input",()=>{
    const disabledComponent = render(<Input disabled />);
    const tree = disabledComponent.asFragment();
    expect(tree).toMatchSnapshot();
  })

})