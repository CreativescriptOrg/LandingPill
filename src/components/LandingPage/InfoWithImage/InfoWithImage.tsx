import Image from "next/image";
import styles from "./styles.module.css";
import { CheckSuccessIcon } from "@/assets/vectors";

const InfoWithImage = ({
  label,
  title,
  list,
  image,
  imgDirection,
}: {
  label: string;
  title: string;
  list: string[];
  image: string;
  imgDirection: string;
}) => {
  return (
    <div className={`${styles.container} ${styles[imgDirection]}`}>
      <div>
        <div>
          <span className={styles.label}>{label}</span>
          <h3 className={styles.title}>{title}</h3>
        </div>
        <ul className={styles.list}>
          {list.map((el, i) => {
            return (
              <li key={i}>
                <CheckSuccessIcon />
                <span>{el}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={styles.image}>
        {/* <Image src={image} alt="" width={655} height={375} /> */}
        <div className={styles.imageContainer}>
          <div className={`${styles.imageRow} ${styles.leftToRight}`}>
            {Array.from({ length: 13 }).map((el, i) => {
              return (
                <div className={styles.imageDiv}>
                  <Image
                    src={`/hero${i + 1}.webp`}
                    alt={`Image ${i + 1}`}
                    width={300}
                    height={200}
                  />
                </div>
              );
            })}
            {/* <Image src="/hero1.webp" alt="Image 1" width={350} height={350} />
            <Image src="/hero2.webp" alt="Image 2" width={350} height={350} />
            <Image src="/hero3.webp" alt="Image 2" width={350} height={350} />
            <Image src="/hero4.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero5.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero6.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero7.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero8.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero9.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero10.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero11.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero12.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero13.webp" alt="Image 4" width={350} height={350} /> */}
          </div>
          <div className={`${styles.imageRow} ${styles.rightToLeft}`}>
            {Array.from({ length: 13 }).map((el, i) => {
              return (
                <div className={styles.imageDiv}>
                  <Image
                    src={`/hero${i}.webp`}
                    alt={`Image ${13 + i}`}
                    width={280}
                    height={200}
                  />
                </div>
              );
            })}
            {/* <Image src="/hero13.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero12.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero11.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero10.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero9.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero8.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero7.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero6.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero5.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero4.webp" alt="Image 4" width={350} height={350} />
            <Image src="/hero3.webp" alt="Image 3" width={350} height={350} />
            <Image src="/hero2.webp" alt="Image 3" width={350} height={350} />
            <Image src="/hero1.webp" alt="Image 3" width={350} height={350} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoWithImage;
