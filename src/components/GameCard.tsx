import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react"
import { Game } from "../hooks/useGames"
import PlatformIconsList from "./PlatformIconsList"
import CriticScore from "./CriticScore"
import getCroppedImageUrl from "../image-url"

interface Props {
    game: Game
}
const GameCard = ({ game }: Props) => {
    return (
        <Card minHeight={"320px"}>
            <Image src={getCroppedImageUrl(game.background_image)} objectFit={"cover"} />
            <CardBody>
                <HStack justifyContent={"space-between"} marginBottom={3}>
                    <PlatformIconsList platforms={game.parent_platforms.map(p => p.platform)} />
                    <CriticScore score={game.rating} rating={game.rating_top} />
                </HStack>
                <Heading fontSize={'lg'}>{game.name}</Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard