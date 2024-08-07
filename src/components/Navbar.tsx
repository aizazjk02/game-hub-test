import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/logo.webp"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
      <HStack
        maxWidth={"1140px"}
        marginX={"auto"}
        justifyContent={"space-between"}
        paddingY={2}
      >
        <Link to={"/"}>
          <Image src={logo} boxSize={"60px"} objectFit={"cover"} />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    );
}

export default Navbar