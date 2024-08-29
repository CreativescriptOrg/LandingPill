import React, { useState } from "react";
import styles from "./AuditGuide.module.css";
import { Arrow1, Arrow2, Mark } from "./Icon";
import STRING from "./string";
import { useRouter } from "next/navigation";
import { CheckBlueIcon } from "@/assets/vectors";

const AuditGuide = ({ type }: { type: string }) => {
	const router = useRouter();
	let url = type === "AUDIT_GUIDE" ? "/self-audit/#" : "/self-redesign/#";
	const [active, setActive] = useState("");

	return (
		<div className={active !== "" ? styles.blur : ""}>
			<div className={styles.container1}>
				<div className={styles.flex1}>
					<div className={styles.flex}>
						<Mark />
						<div className={`subtitle_1_sb ${styles.text2}`}>
							Get on a call with our experts
						</div>
					</div>
					<div className={"button_neutral"}>Connect for Redesign</div>
				</div>
			</div>

			<main className='main_container center_content'>
				<div className={styles.container}>
					<div className={`title_content ${styles.title}`}>
						<h1 className='heading_1_sb'>{STRING[type]?.title}</h1>
						<span className='subtitle_1_sb'>{STRING[type]?.subtitle}</span>
					</div>
					<div className={styles.last}>
						{STRING[type]?.data.map((item: any, index: any) => {
							return (
								<div key={index}>
									{index % 2 === 0 ? (
										<>
											<div
												className={`${styles.relative}`}
												style={{
													marginBottom:
														STRING[type].data.length != index + 1
															? "86px"
															: "0px",
												}}
											>
												<button
													className={`heading_3_sb ${
														index === 0
															? styles.button1
															: `${styles.button} ${styles.btn1}`
													}`}
													onClick={() => setActive(item?.key)}
												>
													{index === 0 && (
														<div className={`label_1_b ${styles.tooltip}`}>
															Start
															<br /> Here!
														</div>
													)}
													{index === 0 && (
														<div className={styles.checkIcon}>
															<CheckBlueIcon />
														</div>
													)}
													<div
														className={
															index === 0
																? `${styles.button} ${styles.btn1}`
																: ""
														}
													>
														{STRING[type].data.length != index + 1 && (
															<div className={styles.arrow1}>
																<Arrow1 />
															</div>
														)}
														{item?.key}
													</div>
												</button>
												{active === item?.key && (
													<div
														className={`${styles.absolute} ${styles.absolute1}`}
													>
														<div>
															<span className='heading_3_sb'>{item.key}</span>
															<button
																className='button_neutral'
																onClick={() => router.push(`${url}${item?.id}`)}
															>
																Let's get started
															</button>
														</div>
													</div>
												)}
											</div>
										</>
									) : (
										<>
											<div
												className={styles.relative}
												style={{
													marginBottom:
														STRING[type].data.length != index + 1
															? "86px"
															: "0px",
												}}
											>
												<button
													className={`heading_3_sb ${styles.button} ${styles.btn2}`}
													onClick={() => setActive(item?.key)}
												>
													{STRING[type].data.length != index + 1 && (
														<div className={styles.arrow2}>
															<Arrow2 />
														</div>
													)}
													{item?.key}
												</button>

												{active === item?.key && (
													<div
														className={`${styles.absolute} ${styles.absolute2}`}
													>
														<div>
															<span className='heading_3_sb'>{item.key}</span>
															<button
																className='button_neutral'
																onClick={() => router.push(`${url}${item?.id}`)}
															>
																Let's get started
															</button>
														</div>
													</div>
												)}
											</div>
										</>
									)}
								</div>
							);
						})}
					</div>
				</div>
			</main>

			{active !== "" && (
				<div className={styles.absoluteBg} onClick={() => setActive("")}></div>
			)}
		</div>
	);
};

export default AuditGuide;
