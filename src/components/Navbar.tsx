import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface Props {
    onSearch: (search: string) => void;
}
const Navbar = ({onSearch}: Props) => {
    return (
        <HStack justifyContent={"space-between"} paddingY={2}>
            <Image src={logo} boxSize={"60px"}/>
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default Navbar