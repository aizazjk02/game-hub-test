import Platform  from "../entities/Platform";
import { Icon, HStack } from "@chakra-ui/react";
import { FaWindows, FaPlaystation, FaXbox, FaApple, FaAndroid, FaLinux } from "react-icons/fa"
import { MdPhoneIphone } from "react-icons/md"
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { IconType } from "react-icons";

interface Props {
    platforms: Platform[];
}
const PlatformIconsList = ({ platforms }: Props) => {
    const iconMap: { [key: string]: IconType } = { // [key: string] says that it can accept any number of string keys for this object. 
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid,
        web: BsGlobe
    }
    return (
        <HStack marginY={1}>
            {platforms.map((platform) => <Icon key={platform.id} as={iconMap[platform.slug]} color={'gray.500'}>{platform.name}</Icon>)}
        </HStack>
    )
}

export default PlatformIconsList