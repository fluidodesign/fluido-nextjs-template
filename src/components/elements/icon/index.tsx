import { IconBaseProps } from 'react-icons'
import { MdHome } from 'react-icons/md'

interface IconProps extends IconBaseProps {
  icon: string
}

const iconList = {
  home: MdHome,
}

const Icon: React.FunctionComponent<IconProps> = ({ icon, ...props }) => {
  const IconComponent = iconList[icon]
  return <IconComponent {...props} />
}

export default Icon
