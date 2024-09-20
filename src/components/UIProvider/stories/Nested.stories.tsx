import { makeStyles } from '@griffel/react'
import { tokens, UIProvider } from 'craftex-ui'

const useStyles = makeStyles({
  example: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    border: `5px solid ${tokens.colorBrandStroke1}`,
    borderRadius: '5px',
    margin: '5px',
  },
  text: {
    padding: '5px',
    fontSize: '18px',
  },
})

const Nested = () => {
  const styles = useStyles()
  return (
    <UIProvider>
      <div className={styles.example}>
        <div className={styles.text}>Web Light Theme using brand tokens</div>
        <UIProvider
          theme={{
            colorBrandStroke1: 'red',
            colorBrandBackground2: 'green',
            colorBrandForeground2: 'yellow',
            // 更多的 theme 属性
          }}>
          <Child />
        </UIProvider>
        <Child />
      </div>
    </UIProvider>
  )
}

function Child() {
  const styles = useStyles()
  return (
    <div className={styles.example}>
      <div className={styles.text}>Child Nested UIProvider with partial theme</div>
    </div>
  )
}

export default Nested
