import { Link } from "react-router-dom";
import { currentPath } from "../utils/pathLocation";
import "../styles/navigation.css";

const Navigation = () => {
	window.onscroll = function () {
		const nav = document.getElementsByTagName("nav")[0];
		const navBody = document.getElementById("navigationBody");

		if (window.pageYOffset > nav.offsetTop) {
			navBody.classList.add("onscroll-active");
		} else {
			navBody.classList.remove("onscroll-active");
		}
	};

	const hamburgerToggle = () => {
		const hamburger = document.getElementById("hamburger");
		const link = document.getElementById("link");
		hamburger.classList.toggle("hamburger-active");
		link.classList.toggle("hidden");
		link.classList.toggle("flex");
	};

	// window.addEventListener("click", function (e) {
	// 	if (e.target != navMenu && e.target != hamburger) {
	// 		hamburger.classList.remove("hamburger-active");
	// 		navMenu.classList.add("hidden");
	// 	}
	// });

	return (
		<nav className={currentPath() === "" ? "hidden" : "active-nav"}>
			<div id="navigationBody">
				<Link to="">Invenient Me</Link>

				<div
					id="hamburger"
					onClick={hamburgerToggle}>
					<div className="transition-all duration-300"></div>
					<div className="transition-all duration-300"></div>
					<div className="transition-all duration-300"></div>
				</div>

				<div
					id="link"
					className="hidden">
					<Link
						to="/home"
						className={currentPath() === "home" ? "active-link" : "inactive-link"}>
						Home
					</Link>
					<Link
						to="/about"
						className={currentPath() === "about" ? "active-link" : "inactive-link"}>
						About
					</Link>
				</div>
			</div>
		</nav>
	);
};

export default Navigation;
