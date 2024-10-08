import { Box, Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useScreenshots from "../hooks/useScreenshots";

interface Props {
    gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
    const { data, isLoading, error } = useScreenshots(gameId)
    if (isLoading) return <Spinner />
    if (error) throw error

    return (
        <Box marginTop={2}> 
            <Text>Screenshots: </Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
                {data?.results.map(file => (
                    <Image key={file.id} src={file.image} />
                ))}
            </SimpleGrid>
        </Box>
    )
}

export default GameScreenshots