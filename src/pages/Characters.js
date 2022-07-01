import React, { useEffect, useState } from "react";

function Characters() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		async function fetchCharacters() {
			let res = await fetch("https://swapi.dev/api/people?format=json");
			let data = await res.json();
			setCharacters(data.results);
		}

		fetchCharacters();
	}, []);
	return <div>Characters</div>;
}

export default Characters;
