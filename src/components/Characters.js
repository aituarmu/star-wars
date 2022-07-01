import React from "react";
import { Card, Grid } from "@mui/material";

function Characters({ data }) {
	return (
		<div>
			<Grid container spacing={2}>
				{data.map((people, i) => {
					return (
						<Grid key={i}>
							<Card>{people.name}</Card>
							</Grid>
						);
					})}
				</Grid>
			</div>
	);
}

export default Characters;
