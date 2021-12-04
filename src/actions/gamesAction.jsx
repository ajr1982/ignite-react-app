import axios from "axios";
import { popularGamesURL } from "../api";
import { upcomingGamesURL } from "../api";
import { newGamesURL } from "../api";
import { searchGameURL } from "../api";

//Action Creator

export const loadGames = () => async (dispatch) => {
	//Fetch Axios
	const popularGamesData = await axios.get(popularGamesURL());
	const newGamesData = await axios.get(newGamesURL());
	const upcomingGamesData = await axios.get(upcomingGamesURL());

	dispatch({
		type: "FETCH_GAMES",
		payload: {
			popularGames: popularGamesData.data.results,
			newGames: newGamesData.data.results,
			upcomingGames: upcomingGamesData.data.results,
		},
	});
};

export const fetchSearch = (game_name) => async (dispatch) => {
	const searchGameData = await axios.get(searchGameURL(game_name));

	dispatch({
		type: "FETCH_SEARCHED",
		payload: {
			searched: searchGameData.data.results,
		},
	});
};
