import React from "react";
import { motion } from "framer-motion";

const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			transition={{ duration: 1.5, ease: "linear" }}
			className="container py-20">
			<p>APi test - Andhika Rahmatullah.</p>
		</motion.div>
	);
};

export default About;
