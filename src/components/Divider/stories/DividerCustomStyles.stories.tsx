import { makeStyles, shorthands } from "@griffel/react";
import { Divider, tokens } from "craftex-ui";

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
  customHeightExample: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    minHeight: "192px",
  },
  customWidth: {
    width: "200px",
  },
  customHeight: {
    maxHeight: "50px",
  },
  customFont: {
    fontSize: "14px",
    fontWeight: "bold",
  },
  customLineColor: {
    "::before": {
      ...shorthands.borderColor("blue"),
    },
    "::after": {
      ...shorthands.borderColor(tokens.colorPaletteRedBorder2),
    },
  },
  customLineStyle: {
    ...shorthands.borderWidth("2px"),
    "::before": {
      borderTopStyle: "dashed",
      borderTopWidth: "2px",
    },
    "::after": {
      borderTopStyle: "dashed",
      borderTopWidth: "2px",
    },
  },
});

const CustomStyles = () => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <div className={styles.example}>
        <Divider className={styles.customWidth}>Custom width (200px)</Divider>
      </div>
      <div className={styles.customHeightExample}>
        <Divider vertical className={styles.customHeight}>
          Custom height (50px)
        </Divider>
      </div>
      <div className={styles.example}>
        <Divider className={styles.customFont}>Custom font (14px bold)</Divider>
      </div>
      <div className={styles.example}>
        <Divider className={styles.customLineColor}>
          Custom line color (<code>tokens.colorPaletteRedBorder2</code>)
        </Divider>
      </div>
      <div className={styles.example}>
        <Divider className={styles.customLineStyle}>
          Custom line style (2px dashed)
        </Divider>
      </div>
    </div>
  );
};

export default CustomStyles;
