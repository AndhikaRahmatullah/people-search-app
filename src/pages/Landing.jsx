import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import "../styles/landing.css";

const Landing = () => {
	const greetingByHours = useRef("");
	const redirect = useNavigate();

	// get current hour
	const d = new Date();
	let hour = d.getHours();

	// set greeting
	if (hour >= 3 && hour <= 10) {
		greetingByHours.current = "Good Morning";
	} else if (hour >= 11 && hour <= 18) {
		greetingByHours.current = "Good Afternoon";
	} else if ((hour >= 0 && hour <= 2) || (hour >= 19 && hour <= 23)) {
		greetingByHours.current = "Good Evening";
	}
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5, ease: "linear" }}
			className="landing">
			<motion.p
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2, delay: 23 }}>
				Invenient Me
			</motion.p>

			<motion.div
				initial={{ opacity: 1 }}
				animate={{ opacity: 0 }}
				transition={{ duration: 2, delay: 21 }}>
				<TypeAnimation
					sequence={[`Hello, ${greetingByHours.current}.`, 1000, "Get the latest and most complete information about a person with the best people search application.", 1000, ""]}
					speed={20}
					wrapper="p"
					repeat={0}
				/>
			</motion.div>

			<motion.button
				onClick={() => redirect("/home")}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 2, delay: 24 }}>
				Get Started
			</motion.button>
		</motion.div>
	);
};

export default Landing;
