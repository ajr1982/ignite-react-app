//Base URL
const base_url = "https://api.rawg.io/api/";
const api_key = "473485e508e74d87999d22475c315930";
//Get Date
const getCurrentMonth = () => {
	const month = new Date().getMonth() + 1;
	if (month < 10) {
		return `0${month}`;
	} else {
		return month;
	}
};

const getCurrentDay = () => {
	const day = new Date().getDate();
	if (day < 10) {
		return `0${day}`;
	} else {
		return day;
	}
};

//Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games
const popular_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?key=${api_key}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const new_games = `games?key=${api_key}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${new_games}`;

//GAME DETAIL REQUEST
export const gameDetailsURL = (game_id) =>
	`${base_url}games/${game_id}?key=${api_key}`;

//GAME SCREENSHOTS
export const gameScreenshotURL = (game_id) =>
	`${base_url}games/${game_id}/screenshots?key=${api_key}`;

//SEARCHED GAME
export const searchGameURL = (game_name) =>
	`${base_url}games?key=${api_key}&search=${game_name}&page_size=9`;
