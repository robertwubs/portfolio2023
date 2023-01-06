import { icons } from "lib/icons"
import { IconType } from "react-icons"

import { IconBaseProps } from "react-icons/lib"

interface IconProps extends IconBaseProps {
    library: string,
    iconName: string
}

const DynamicIcon = ({ library, iconName, ...props }: IconProps) => {
    const Icon: IconType = icons[library as keyof IconType][iconName]

    return <Icon {...props} />
}

export default DynamicIcon