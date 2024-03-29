import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import { Platform } from "../hooks/usePlatforms"
import usePlatform from "../hooks/usePlatform";

interface Props {
    onSelectPlatform: (platform: Platform | null) => void;
    selectedPlatformId?: number; 
}

const PlatformSelector = ({onSelectPlatform, selectedPlatformId}: Props) => {
    
    const { data, error, isLoading } = usePlatforms()
    const selectedPlatform = usePlatform(selectedPlatformId)
    if (error) return null
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                {isLoading ? <Spinner /> :
                    selectedPlatform ? selectedPlatform.name : "Platforms"
                }
            </MenuButton>
            <MenuList >
                <MenuItem onClick={() => onSelectPlatform(null)}>All</MenuItem>
                {data?.results.map(platform => (
                    <MenuItem onClick={() => onSelectPlatform(platform)} key={platform.id}>{platform.name}</MenuItem>

                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector