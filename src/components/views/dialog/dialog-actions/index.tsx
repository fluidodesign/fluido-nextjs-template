import { State } from '@hookstate/core'
import Button from 'app-components/inputs/button'
import { useTranslation } from 'react-i18next'

interface DialogActionsProps {
  actions: {
    [key: string]: VoidFunction
  }
  onClose?: VoidFunction
}

const DialogActions: React.FunctionComponent<DialogActionsProps> = ({
  actions,
  onClose,
}) => {
  const entries = Object.entries(actions || {})
  const { t } = useTranslation()

  return (
    <>
      {entries.map((entry) => (
        <Button
          onClick={() => {
            if (entry[1]) entry[1]()
            if (onClose) onClose()
          }}>
          {t(`button.${entry[0]}`)}
        </Button>
      ))}
    </>
  )
}

export default DialogActions
