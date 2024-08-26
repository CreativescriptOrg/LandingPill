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
						<Link href='/#benefits'>Benefits</Link>
					</li>
					<li>
						<Link href='/#testimonies'>Testimonies</Link>
					</li>
					<li>
						<Link href='/#works'>Works</Link>
					</li>
					<li>
						<Link href='/#howItWorks'>How it works</Link>
					</li>
					<li>
						<Link href='/welcome' className={styles.button}>
							Get Page Health Report <ArrowNextIcon />
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navigation;
