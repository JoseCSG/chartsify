import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import TrackCard from "./TrackCard";
import { SpotifyContext } from "../context/SpotifyContext";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";
const TracksDisplay = ({ token }) => {
	const { topTracks } = useContext(SpotifyContext);
	let items = [];
	if (topTracks) {
		items = topTracks.items;
	}
	return !items ? (
		<h1>Loading...</h1>
	) : (
		<>
			<h3 className=""> These are your top 10 most listened songs</h3>
			<Row className="space-between-evenly align-items-center flex d-flex">
				{items.map((item) => {
					return <TrackCard track={item} key={item.id} />;
				})}
			</Row>
		</>
	);
};

export default TracksDisplay;
