import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
import GameGrid from "./components/GameGrid"
import GenreList from "./components/GenreList"
import { useState } from "react"
import PlatformSelector from "./components/PlatformSelector"
import SortSelector from "./components/SortSelector"
import GameHeading from "./components/GameHeading"

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  search: string;
}

const App = () => {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
  } as GameQuery)
  // setting an {} as GameQuery because we always want there to be a gameQuery object. 
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
          <Navbar onSearch={(search) => setGameQuery({ ...gameQuery, search })} /></GridItem>
        <Show above="lg">
          <GridItem area={"aside"} >
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genreId: genre.id })}
            />
          </GridItem>
        </Show>
        <GridItem area={"main"}>
          <>
            <GameHeading gameQuery={gameQuery} />
            <HStack>
              <PlatformSelector
                onSelectPlatform={platform => setGameQuery({ ...gameQuery, platformId: platform?.id })}
                selectedPlatformId={gameQuery.platformId} />
              <SortSelector
                onSelectSortOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
              />
            </HStack>
            <GameGrid gameQuery={gameQuery} />
          </>
        </GridItem>
      </Grid>
    </Box >
  )
}

export default App