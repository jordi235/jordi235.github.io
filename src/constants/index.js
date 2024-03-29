//Base URL
const base_url = "https://api.rawg.io/api/";

//API key
const apiKey = '62f7ea3b538041579578237c77262298';

//Getting the date to get the popular, upcoming and recent games
const getCurrentMonth = function () {
  const month = new Date().getMonth() + 1;
  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};
const getCurrentDay = function () {
  const day = new Date().getDate();
  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

const upcoming_games = `games?key=${apiKey}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;

const new_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

const query_games = `games?key=${apiKey}&search=`;

const genre_games = `games?key=${apiKey}&genres=`;

const platform_games = `games?key=${apiKey}&platforms=`;

const publisher_games = `games?key=${apiKey}&publishers=`;

const game_details = "games/";

const game_screenshots = "/screenshots";

const game_genres = `genres`

const game_platforms = `platforms`

const game_publishers = `publishers?key=${apiKey}&page_size=50`
const game_publishers_no_page = `publishers`

export const popularGamesGet = () => `${ base_url }${ popular_games }`;
export const upcomingGamesGet = () => `${ base_url }${ upcoming_games }`;
export const newGamesGet = () => `${ base_url }${ new_games }`;
export const searchGameGet = game_name => `${ base_url }${ query_games }${ game_name }&page_size=21`;
export const gameDetailsGet = game_id => `${ base_url }${ game_details }${ game_id }?key=${ apiKey }`;
export const gameScreenshotsGet = game_id => `${ base_url }${ game_details }${ game_id }${ game_screenshots }?key=${ apiKey }`;
export const gameGenresGet = () => `${ base_url }${ game_genres }?key=${apiKey}`;
export const specificGenreGet = genre_id => `${ base_url }${ game_genres }/${ genre_id }?key=${ apiKey }`;
export const sampleGenreGamesGet = genre_id => `${ base_url }${ genre_games }${ genre_id }&page_size=21`;
export const gamePlatformsGet = () => `${ base_url }${ game_platforms }?key=${apiKey}`;
export const specificPlatformGet = platform_id => `${ base_url }${ game_platforms }/${ platform_id }?key=${ apiKey }`;
export const samplePlatformGamesGet = platform_id => `${ base_url }${ platform_games }${platform_id}&page_size=21`;
export const publishersGet = () => `${ base_url }${ game_publishers }`;
export const specificPublisherGet = publisher_id => `${ base_url }${ game_publishers_no_page }/${ publisher_id }?key=${ apiKey }`;
export const samplePublisherGamesGet = publisher_id => `${ base_url }${ publisher_games }${publisher_id}&page_size=21`;


