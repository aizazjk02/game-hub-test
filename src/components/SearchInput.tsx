import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { useRef } from "react"
import { BsSearch } from "react-icons/bs"
import useGameQueryStore from "../store"
import { useNavigate } from "react-router-dom"

const SearchInput = () => {
    const searchInputRef = useRef<HTMLInputElement>(null)
    const setSearchText = useGameQueryStore(store => store.setSearchText)
    const navigate = useNavigate()
    return (
        <form onSubmit={(event) => {
            event.preventDefault()
            if (searchInputRef.current) setSearchText(searchInputRef.current.value)
            navigate("/")
        }}>

            <InputGroup>
                <InputLeftElement children={<BsSearch />} />
                <Input ref={searchInputRef} borderRadius={20} placeholder="Search games..." variant={"filled"} />
            </InputGroup>
        </form>
    )
}

export default SearchInput