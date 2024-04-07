import { Heading } from "@chakra-ui/react"
import useGenre from "../hooks/useGenre"
import usePlatform from "../hooks/usePlatform"
import useGameQueryStore from "../store"

const GameHeading = () => {
    const genreId = useGameQueryStore(store => store.gameQuery.genreId)
    const selectedGenre = useGenre(genreId)

    const platformId = useGameQueryStore(store => store.gameQuery.platformId)
    const selectedPlatform = usePlatform(platformId)

    const heading = `${selectedPlatform?.name || ""} ${selectedGenre?.name || ""} Games`
    return (
        <Heading as={"h1"} marginBottom={3} fontSize={"4xl"}>{heading}</Heading>
    )
}

export default GameHeading