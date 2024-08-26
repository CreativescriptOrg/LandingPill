import { ArrowNextIcon, LogoIcon } from "@/assets/vectors";
import Link from "next/link";
import styles from "./styles.module.css";

const Navigation = () => {
	return (
		<nav className={styles.container}>
			<div>
				<LogoIcon />

				<ul>
					<li>
						<Link href='/about'>Benefits</Link>
					</li>
					<li>
						<Link href='/contact'>Testimonies</Link>
					</li>
					<li>
						<Link href='/contact'>Works</Link>
					</li>
					<li>
						<Link href='/contact'>How it works</Link>
					</li>
					<li>
						<Link href='/contact' className={styles.button}>
							Get Page Health Report <ArrowNextIcon />
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
