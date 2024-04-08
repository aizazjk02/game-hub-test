import { Platform } from "./Platform";

// Define the Game interface
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform; }[];
  rating: number;
  rating_top: number;
  slug: string;
  description_raw: string;
}
