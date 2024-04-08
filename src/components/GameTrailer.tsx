import { Spinner, Text } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers"

interface Props {
    gameId: number;
}
const GameTrailer = ({ gameId }: Props) => {
    const { data, isLoading, error } = useTrailers(gameId)
    if (isLoading) return <Spinner />
    if (error) throw error
    const stream = data?.results[0]
    return (
        <>
            <Text marginY={2}>Trailer: </Text>
            {stream ?
                <video src={stream?.data[480] || stream?.data["max"]} poster={stream?.preview} controls />
                : (<Text>There are no trailers available.</Text>)
            }
        </>
    )
}

export default GameTrailer