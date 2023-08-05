import React from "react";
import { Card, Col, Image, Row } from "react-bootstrap";

const TrackCard = ({ track }) => {
	return (
		<Card
			className="mt-3"
			style={{ backgroundColor: "lightgreen", maxWidth: "35rem"}}
		>
			<Row className="g-0">
				<Col className="">
					<Card.Img
						variant="top"
						src={track.album.images[0].url}
						alt="Image"
						className="img-fluid cursor-pointer mx-0"
						onClick={() => {
							window.open(track.album.external_urls.spotify);
						}}
					/>
					{/* 					<Image
						fluid
						src={track.album.images[1].url}
						alt="Image"
						className="img-fluid cursor-pointer mx-0"
						onClick={() => {
							window.open(track.album.external_urls.spotify);
						}} 
					/> */}
				</Col>
				<Col>
					<Card.Body>
						<Card.Title className="h6 mb-1">
							{track.name}
						</Card.Title>
						<Card.Text className="text-gray-700">
							Artists:{" "}
							{track.artists.length > 1
								? track.artists
										.map((artist) => artist.name)
										.join(", ")
								: track.artists[0].name}
						</Card.Text>
						<a
							href={track.external_urls.spotify}
							className="text-success text-decoration-none d-block mt-1"
						>
							Go to song
						</a>
					</Card.Body>
				</Col>
			</Row>
		</Card>
	);
};

export default TrackCard;
