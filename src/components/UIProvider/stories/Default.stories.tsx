import { makeStyles } from '@griffel/react'
import {
  UIProvider,
  tokens,
  webLightTheme,
  teamsLightTheme,
  teamsDarkTheme,
  webDarkTheme,
  teamsHighContrastTheme,
} from 'craftex-ui'

const useStyles = makeStyles({
  provider: {
    border: '1px',
    borderRadius: '5px',
    padding: '5px',
  },
  text: {
    backgroundColor: tokens.colorBrandBackground2,
    color: tokens.colorBrandForeground2,
    fontSize: '20px',
    border: '1px',
    borderRadius: '5px',
    padding: '5px',
  },
})

const Default = () => {
  const styles = useStyles()
  return (
    <>
      <div>
        <UIProvider className={styles.provider} theme={webLightTheme}>
          <div className={styles.text}>Web Light Theme</div>
        </UIProvider>
      </div>
      <div>
        <UIProvider className={styles.provider} theme={teamsLightTheme}>
          <div className={styles.text}>Teams Light Theme</div>
        </UIProvider>
      </div>
      <div>
        <UIProvider className={styles.provider} theme={webDarkTheme}>
          <div className={styles.text}>webDarkTheme</div>
        </UIProvider>
      </div>
      <div>
        <UIProvider className={styles.provider} theme={teamsDarkTheme}>
          <div className={styles.text}>Teams Dark Theme</div>
        </UIProvider>
      </div>
      <div>
        <UIProvider className={styles.provider} theme={teamsHighContrastTheme}>
          <div className={styles.text}>teamsHighContrastTheme</div>
        </UIProvider>
      </div>
    </>
  )
}

export default Default
