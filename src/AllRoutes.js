import React from "react";
import { Route, Routes } from "react-router-dom";
import SpotifyProfile from "./components/SpotifyProfile";
import TracksDisplay from "./components/TracksDisplay";
import HomePage from "./components/HomePage";
import AppIndex from "./context/AppIndex";
const AllRoutes = () => {
	return (
		<AppIndex>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/profile" element={<SpotifyProfile />} />
				<Route path="/display" element={<TracksDisplay />} />
			</Routes>
		</AppIndex>
	);
};

export default AllRoutes;
