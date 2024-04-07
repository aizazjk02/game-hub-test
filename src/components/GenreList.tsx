import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import useGenres from "../hooks/useGenres"
import getCroppedImageUrl from "../image-url"
import useGameQueryStore from "../store"

const GenreList = () => {
    const { data, isLoading, error } = useGenres()
    const selectedGenreId = useGameQueryStore(store => store.gameQuery.genreId)
    const setSelectedGenreId = useGameQueryStore(store => store.setGenreId)

    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <List>
            <Heading fontSize={"2xl"} marginBottom={3}>Genres</Heading>
            {
                data?.results.map((genre) => <ListItem key={genre.id} paddingY={"5px"}>
                    <HStack>
                        <Image outline={genre.id === selectedGenreId ? "1px solid #fff" : "none"} boxSize={genre.id === selectedGenreId ? "38px" : "32px"} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} objectFit={"cover"} />
                        <Button fontWeight={genre.id === selectedGenreId ? "bold" : "normal"} fontSize={"large"} variant={"link"} onClick={() => setSelectedGenreId(genre.id)} >{genre.name}</Button>
                    </HStack>
                </ListItem>)
            }
        </List>
    )
}

export default GenreList