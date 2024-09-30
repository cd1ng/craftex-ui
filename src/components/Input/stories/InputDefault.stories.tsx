import * as React from "react";
import { makeStyles } from "@griffel/react";
import { Input, tokens } from "craftex-ui";

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

const Default = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div>
        <span>默认</span>
        <Input />
      </div>
      <div>
        <span>小号</span>
        <Input size="small" />
      </div>
      <div>
        <span>中号</span>
        <Input size="medium" />
      </div>
      <div>
        <span>大号</span>
        <Input size="large" />
      </div>
      <div>
        <span>大号</span>
        <Input disabled />
      </div>
    </div>
  );
};

export default Default;
