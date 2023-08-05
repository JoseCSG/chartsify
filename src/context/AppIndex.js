import React, { useEffect, useState } from "react";
import { SpotifyContext } from "./SpotifyContext";
import axios from "axios";
import NavBar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import { CLIENT_ID, REDIRECT_URI } from "../Constants";
const SPOTIFY_AUTH = "https://accounts.spotify.com/authorize";
const SCOPES = ["user-read-private", "user-read-email", "user-top-read", "user-read-recently-played"];
const SCOPES_URL = SCOPES.join("%20");

const AppIndex = ({ children }) => {
	const [token, setToken] = useState(null);
	const [profile, setProfile] = useState(null);
	const [topTracks, setTopTracks] = useState(null);
	const handleLogin = () => {
		window.location = `${SPOTIFY_AUTH}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&scope=${SCOPES_URL}&response_type=token&show_dialog=true`;
	};
	const value = { token, handleLogin, profile, topTracks };
	const getAccessToken = () => {
		const token = localStorage.getItem("token");
		if(token){
			setToken(token);
			return;
		}

		const hash = window.location.hash
			.substring(1)
			.split("&")
			.reduce(function (initial, item) {
				if (item) {
					let parts = item.split("=");
					initial[parts[0]] = decodeURIComponent(parts[1]);
				}
				return initial;
			}, {});
		let _token = hash.access_token;
		if (_token) {
			localStorage.setItem("token", _token);
			setToken(_token);
		}
	};
	const getProfile = async () => {
		const headers = {
			Authorization: `Bearer ${token}`,
		};
		await axios
			.get("https://api.spotify.com/v1/me", { headers })
			.then((response) => {
				setProfile(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const getTopTracks = async () => {
		const headers = {
			Authorization: `Bearer ${token}`,
		};
		const params = {
			limit: 10,
			time_range: "medium_term",
		};
		await axios
			.get("https://api.spotify.com/v1/me/top/tracks", {
				headers,
				params,
			})
			.then((response) => {
				setTopTracks(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	};
	const getListeningHistory = async () => {
		const headers = {
			Authorization: `Bearer ${token}`,
		};
		const params = {
			limit: 50,
		};
		await axios
			.get("https://api.spotify.com/v1/me/player/recently-played", {
				headers,
				params,
			})
			.then((response) => {
				console.log(response.data);
			})
			.catch((error) => {
				console.error(error);
			});
	}
	useEffect(() => {
		getAccessToken();
	}, []);
	useEffect(() => {
		if (token) {
			getProfile();
			getTopTracks();
			getListeningHistory();
		}
	}, [token]);
	console.log(value);
	return (
		<SpotifyContext.Provider value={value}>
			<section id="page-content">
				<div className="header">{token ? <NavBar /> : null}</div>
				<div className={`container-fluid ${"p-4"}`}>
					{children}
					<Outlet />
				</div>
			</section>
		</SpotifyContext.Provider>
	);
};

export default AppIndex;
