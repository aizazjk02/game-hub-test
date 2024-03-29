import meh from "../assets/meh.webp"
import thumbsUp from "../assets/thumbs-up.webp"
import bullsEye from "../assets/bulls-eye.webp"
import { Image, ImageProps } from "@chakra-ui/react"

interface Props {
    rating: number;
}
const Emoji = ({ rating }: Props) => {
    const emojiMap: { [key: number]: ImageProps } = {
        3: { src: meh, alt: "meh" },
        4: { src: thumbsUp, alt: "recommended" },
        5: { src: bullsEye, alt: "exceptional" }
    }
    return (
        <>
            {rating >= 3 &&
                <Image {...emojiMap[rating]} boxSize={"25px"} marginTop={-1} />
            }
        </>
    )
}

export default Emoji