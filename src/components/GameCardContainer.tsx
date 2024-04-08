import { Box, useColorMode } from "@chakra-ui/react"
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
    const {colorMode} = useColorMode()
    return (
        <Box width={"100%"} borderRadius={10} borderWidth={colorMode === "dark" ? "none": "1px"} overflow={"hidden"} _hover={{
            transform: 'scale(1.03)',
            transition: 'transform 150ms ease-in',
        }}>
            {children}
        </Box>
    )
}

export default GameCardContainer