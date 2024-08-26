import React from "react";
import Benefits from "@/components/LandingPage/Sections/Benefits/Benefits";
import Header from "@/components/LandingPage/Sections/Header/Header";
import Testimonials from "@/components/LandingPage/Sections/Testimonials/Testimonials";
import Projects from "@/components/LandingPage/Sections/Projects/Projects";
import Solution from "@/components/LandingPage/Sections/Solution/Solution";

const index = () => {
	return (
		<main>
			<Header />
			<Benefits />
			<Testimonials />
			<Projects />
			<Solution />
		</main>
	);
};

export default index;
