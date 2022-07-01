import React, { useEffect, useState } from "react";
import { Link, useLocation} from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
	const [expandNavbar, setExpandNavbar] = useState(false);
  // to get information on which route you are in
  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false)
  }, [location])

	return (
    // if expandNavbar is true then id for navbar div is open
		<div className="navbar" id={expandNavbar ? "open" : "close"}>
			<div className="toggleButton">
				<button
					onClick={() => {
						setExpandNavbar((prev) => !prev);
					}}
				>
					<ReorderIcon />
				</button>
			</div>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/films">Films</Link>
				<Link to="/characters">Characters</Link>
			</div>
		</div>
	);
}

export default Navbar;
