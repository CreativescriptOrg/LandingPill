import Hero from "@/components/LandingPage/Hero/Hero";
import Navigation from "@/components/LandingPage/Navigation/Navigation";
import TrustedBy from "@/components/LandingPage/TrustedBy/TrustedBy";

const Header = () => {
	return (
		<div>
			<Navigation />
			<Hero />
			<TrustedBy />
		</div>
	);
};

export default Header;
