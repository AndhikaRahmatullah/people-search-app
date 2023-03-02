import { lazy, Suspense } from "react";
import Navigation from "../components/Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import { useStore } from "../context/useStore";
import { AnimatePresence } from "framer-motion";
import LoadingAnimation from "../components/LoadingAnimation";
const Landing = lazy(() => import("../pages/Landing"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const DetailPerson = lazy(() => import("../pages/DetailPerson"));
const NotFound = lazy(() => import("../pages/NotFound"));

const Router = () => {
	const { dataPerson } = useStore();

	return (
		<AnimatePresence>
			<Suspense
				fallback={
					<div className="flex h-screen items-center justify-center">
						<LoadingAnimation color={"#D01110"} />
					</div>
				}>
				<Navigation />
				<Routes>
					<Route
						path="/"
						element={<Landing />}
					/>
					<Route
						path="/home"
						element={<Home />}
					/>
					<Route
						path="/about"
						element={<About />}
					/>
					<Route
						path="/:selected"
						element={dataPerson.id ? <DetailPerson /> : <Navigate to="/home" />}
					/>
					<Route
						path="*"
						element={<NotFound />}
					/>
				</Routes>
			</Suspense>
		</AnimatePresence>
	);
};

export default Router;
