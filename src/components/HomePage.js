import React, { useContext, useEffect, useState } from "react";
import { SpotifyContext } from "../context/SpotifyContext";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Button from "react-bootstrap/Button";
const HomePage = () => {
	const { token, handleLogin } = useContext(SpotifyContext);
	const navigate = useNavigate();
	return (
		<div>
			{token ? (
				<>
				{/* Create a landing page after the succesfull login without the navbar*/}
				<p>Logged in</p>
				</>
			) : (
				<Button onClick={handleLogin}>Login with Spotify</Button>
			)}
		</div>
	);
};

export default HomePage;
