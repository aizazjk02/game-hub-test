import { Badge, HStack } from "@chakra-ui/react";
import Emoji from "./Emoji";
interface Props {
    score: number; 
    rating: number;
}

const CriticScore = ({score, rating} : Props) => {
    const color = score > 4 ? 'green' : score > 3 ? 'yellow' : ""
  return (
    <HStack>
    <Badge fontSize={"14px"} paddingX={"10px"} borderRadius={"4px"} colorScheme={color}>{score}</Badge>
    <Emoji rating={rating}/>
    </HStack>
  )
}

export default CriticScore