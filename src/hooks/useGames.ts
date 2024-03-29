import { useInfiniteQuery } from "@tanstack/react-query"; // Import useInfiniteQuery hook from @tanstack/react-query library
import { GameQuery } from "../App"; // Import GameQuery type from ../App
import { FetchResponse } from "../services/api-client"; // Import FetchResponse type from ../services/api-client
import APIClient from "../services/api-client"; // Import APIClient class from ../services/api-client
import { Platform } from "./usePlatforms"; // Import Platform type from ./usePlatforms

const apiClient = new APIClient<Game>("/games"); // Create an instance of APIClient for fetching games

// Define the Game interface
export interface Game {
 id: number;
 name: string;
 background_image: string;
 parent_platforms: { platform: Platform }[];
 rating: number;
 rating_top: number;
}

// Custom hook for fetching games
const useGames = (gameQuery: GameQuery) => {
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    // The unique key for this query. It includes the string "games" and the gameQuery object.
    // This key is used to cache and manage the query data.
    queryKey: ["games", gameQuery],

    // The function that fetches the data from the API.
    // It receives a pageParam object, which contains the current page number (or 1 if undefined).
    queryFn: ({ pageParam = 1 }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId, // Filter by genre id
          parent_platforms: gameQuery.platformId, // Filter by platform id
          ordering: gameQuery.sortOrder, // Sorting order
          search: gameQuery.search, // Search query
          page: pageParam, // Current page number
        },
      }),

    // A function that determines if there is a next page to fetch.
    // It receives the last fetched page (lastPage) and an array of all fetched pages (allPages).
    getNextPageParam: (lastPage, allPages) => {
      // If the lastPage has a 'next' property, return the next page number (allPages.length + 1).
      // Otherwise, return undefined to signal that there are no more pages to fetch.
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

export default useGames;