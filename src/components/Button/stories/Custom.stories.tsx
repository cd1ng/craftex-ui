import { Button } from 'cding-ui'
import { makeStyles } from '@griffel/react'

const useClasses = makeStyles({
  root: {
    backgroundColor: 'red',
    padding: '100px',
  },
})

export const Custom = () => {
  const style = useClasses()
  return (
    <div className={style.root}>
      <Button primary label="Custom label" />
    </div>
  )
}
