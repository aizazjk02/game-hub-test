import { Box, Grid, GridItem, Show, HStack } from "@chakra-ui/react"

import GameGrid from "../components/GameGrid"
import GameHeading from "../components/GameHeading"
import GenreList from "../components/GenreList"

import PlatformSelector from "../components/PlatformSelector"
import SortSelector from "../components/SortSelector"

const HomePage = () => {
    return (
        <Box maxWidth={"1140px"} marginX={"auto"} paddingX={2}>
            <Grid gridTemplateAreas={{
                base: `"main"`,
                lg: `"aside main"`
            }}
                templateColumns={{
                    base: '1fr',
                    lg: '250px 1fr'
                }}
            >
                <Show above="lg">
                    <GridItem area={"aside"} >
                        <GenreList
                        />
                    </GridItem>
                </Show>
                <GridItem area={"main"}>
                    <>
                        <GameHeading />
                        <HStack>
                            <PlatformSelector />
                            <SortSelector

                            />
                        </HStack>
                        <GameGrid />
                    </>
                </GridItem>
            </Grid>
        </Box >
    )
}

export default HomePage