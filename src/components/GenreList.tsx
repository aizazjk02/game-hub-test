import useGenres, { Genre } from "../hooks/useGenres"
import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react"
import getCroppedImageUrl from "../image-url"
interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenreId?: number;
}
const GenreList = ({ onSelectGenre, selectedGenreId }: Props) => {
    const { data, isLoading, error } = useGenres()
    console.log(data)
    if (error) return null
    if (isLoading) return <Spinner />
    return (
        <List>
            <Heading fontSize={"2xl"} marginBottom={3}>Genres</Heading>
            {
                data?.results.map((genre) => <ListItem key={genre.id} paddingY={"5px"}>
                    <HStack>
                        <Image outline={genre.id === selectedGenreId ? "1px solid #fff" : "none"} boxSize={genre.id === selectedGenreId ? "38px" : "32px"} borderRadius={8} src={getCroppedImageUrl(genre.image_background)} objectFit={"cover"} />
                        <Button fontWeight={genre.id === selectedGenreId ? "bold" : "normal"} fontSize={"large"} variant={"link"} onClick={() => onSelectGenre(genre)} >{genre.name}</Button>
                    </HStack>
                </ListItem>)
            }
        </List>
    )
}

export default GenreList