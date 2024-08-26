import React from "react";
import Benefits from "@/components/LandingPage/Sections/Benefits/Benefits";
import Header from "@/components/LandingPage/Sections/Header/Header";
import Testimonials from "@/components/LandingPage/Sections/Testimonials/Testimonials";
import Projects from "@/components/LandingPage/Sections/Projects/Projects";

const index = () => {
	return (
		<main>
			<Header />
			<Benefits />
			<Testimonials />
			<Projects />
		</main>
	);
};

export default index;
