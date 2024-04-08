import { Genre } from "./Genre";
import { Platform } from "./Platform";
import { Publisher } from "./Publisher";

// Define the Game interface
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  genres: Genre[];
  publishers: Publisher[];
  rating: number;
  rating_top: number;
  slug: string;
  description_raw: string;
}
