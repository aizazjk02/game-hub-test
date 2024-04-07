import { Button, Menu, MenuButton, MenuItem, MenuList, Spinner } from "@chakra-ui/react"
import { BsChevronDown } from "react-icons/bs"
import usePlatforms from "../hooks/usePlatforms"
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";



const PlatformSelector = () => {
    
    const { data, error, isLoading } = usePlatforms()
    const selectedPlatformId = useGameQueryStore(store => store.gameQuery.platformId)
    const setSelectedPlatformId = useGameQueryStore(store => store.setPlatformId)
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
                <MenuItem onClick={() => setSelectedPlatformId(0)}>All</MenuItem>
                {data?.results.map(platform => (
                    <MenuItem onClick={() => setSelectedPlatformId(platform.id)} key={platform.id}>{platform.name}</MenuItem>

                ))}
            </MenuList>
        </Menu>
    )
}

export default PlatformSelector