import React from "react";
import { makeStyles } from "@griffel/react";
import { ConfigProvider, tokens, useMessage } from "craftex-ui";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    rowGap: "5px",
  },
  example: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyItems: "center",
    minHeight: "96px",
    backgroundColor: tokens.colorNeutralBackground1,
  },
});

function Aaa() {
  const message = useMessage();
  return <button onClick={() =>{
    message.add({
      content:'请求成功'
    })
  }}>成功</button>
}

export const Default = () => {
  return (
    <ConfigProvider>
      <div>
        <Aaa></Aaa>
      </div>
    </ConfigProvider>
  );
};

export default Default;
