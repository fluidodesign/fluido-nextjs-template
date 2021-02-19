import {} from 'react-icons/fa'
import { MdHome } from 'react-icons/md'

const iconList = {
  home: MdHome,
}

const Icon = ({ icon, ...props }) => {
  const IconComponent = iconList[icon]
  return <IconComponent {...props} />
}

export default Icon
