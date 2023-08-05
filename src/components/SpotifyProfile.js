import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { SpotifyContext } from "../context/SpotifyContext";

function SpotifyProfile() {
	const { profile, token } = useContext(SpotifyContext);
	useEffect(() => {
		console.log(profile);
	}, [profile]);
	return !profile ? (
		<h1>Loading...</h1>
	) : (
		<div className="container mx-auto mt-10">
			<div className="flex bg-white shadow-md rounded-md overflow-hidden max-w-lg p-4">
				<div className="w-32 flex-none">
					<img
						src={
							profile?.images[1]?.url ||
							"https://via.placeholder.com/150"
						}
						alt="User Photo"
						className="object-cover h-32 w-full rounded-full border border-gray-200"
					></img>
				</div>
				<div className="w-full pl-4">
					<h3 className="text-xl font-semibold mb-2">
						{profile.display_name}
					</h3>
					<p className="text-gray-700 mb-2">
						Email: {profile.email || "No email provided"}
					</p>
					<p className="text-gray-700 mb-2">Id: {profile.id}</p>
					<p className="text-gray-700">URI: {profile.uri}</p>
				</div>
			</div>
		</div>
	);
}
export default SpotifyProfile;
