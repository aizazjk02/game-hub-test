import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import GameGrid from "./components/GameGrid"
import GameHeading from "./components/GameHeading"
import GenreList from "./components/GenreList"
import Navbar from "./components/Navbar"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  search: string;
}

const App = () => {

  return (
    <Box maxWidth={"1140px"} marginX={"auto"} paddingX={2}>
      <Grid gridTemplateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`
      }}
        templateColumns={{
          base: '1fr',
          lg: '250px 1fr'
        }}
      >
        <GridItem area={"nav"} >
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem area={"aside"} >
            <GenreList
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <>
            <GameHeading/>
            <HStack>
              <PlatformSelector/>
              <SortSelector
                
              />
            </HStack>
            <GameGrid/>
          </>
        </GridItem>
      </Grid>
    </Box >
  )
}

export default App