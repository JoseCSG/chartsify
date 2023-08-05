import { Link, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

const navStyles = {
	backgroundColor: "black",
};

const NavBar = () => {
	const navigate = useNavigate();

	return (
		<Nav style={{ backgroundColor: "black" }} defaultActiveKey="/home" variant="underline" className="p-2">
			<Nav.Item>
				<Nav.Link
					onClick={() => navigate("/")}
					style={{ color: "white" }}
				>
					Home
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link
					onClick={() => navigate("/profile")}
					style={{ color: "white" }}
				>
					Profile
				</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link
					onClick={() => navigate("/display")}
					style={{ color: "white" }}
				>
					Tracks
				</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default NavBar;
