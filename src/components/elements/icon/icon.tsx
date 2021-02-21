import {} from 'react-icons/fa'
import { MdHome } from 'react-icons/md'

interface IconProps {
  icon: string
  [key: string]: any
}

const iconList = {
  home: MdHome,
}

const Icon: React.FunctionComponent<IconProps> = ({ icon, ...props }) => {
  const IconComponent = iconList[icon]
  return <IconComponent {...props} />
}

export default Icon
