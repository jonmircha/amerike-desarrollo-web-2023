import { showUserInfo } from "./modulos/api-github.js";
import { showPokemons } from "./modulos/api-pokemons.js";
import { tvMazeSearch } from "./modulos/api-tv-maze.js";
import { lastPostsWP } from "./modulos/api-wordpress.js";

showUserInfo();
showPokemons();
tvMazeSearch("#search", ".shows");
lastPostsWP("#wp-site", ".wp-posts");
