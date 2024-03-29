import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";
import React from "react";


interface Props {
    gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
    const { data, error, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } = useGames(gameQuery)
    const skeletons = [1, 2, 3, 4, 5, 6]
    if (error) return <Text>{error.message}</Text>
    return (
        <>

            <SimpleGrid columns={{
                sm: 1,
                md: 2,
                lg: 3,

            }} spacing={6} marginBlock={4}>
                {isLoading && skeletons.map((idx) => <GameCardContainer key={idx}><GameCardSkeleton /></GameCardContainer>)}
                {!isLoading && data?.pages.map((page, idx) =>
                    <React.Fragment key={idx}>
                        {page.results.map(game => <GameCardContainer key={game.id}>
                            <GameCard game={game} />
                        </GameCardContainer>)}
                    </React.Fragment>
                )}

            </SimpleGrid>
            {hasNextPage &&
                <Button onClick={() => fetchNextPage()}>{isFetchingNextPage ? "Loading..." : "Load More"}</Button>
            }
        </>
    )
}

export default GameGrid