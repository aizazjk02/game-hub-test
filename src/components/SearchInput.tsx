import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"
import useGameQueryStore from "../store"

const SearchInput = () => {
    const searchInputRef = useRef<HTMLInputElement>(null)
    const setSearchText = useGameQueryStore(store => store.setSearchText)
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (searchInputRef.current) setSearchText(searchInputRef.current.value)
        }}>

            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={searchInputRef} borderRadius={20} placeholder="Search games..." variant={"filled"} />
            </InputGroup>
        </form>
    )
}

export default SearchInput