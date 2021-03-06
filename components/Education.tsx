import React, { FunctionComponent } from "react";
import Image from "next/image";
import styles from "../styles/Education.module.scss";

type EducationProps = {
    img: EducationImage;
    name?: string;
    desc?: string;
    year: number;
};

interface EducationImage {
    url: string;
    width: number;
    height: number;
}

const Education: FunctionComponent<EducationProps> = ({ img, name = "School", desc = "This is where I learned something", year }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={img.url} width={img.width} height={img.height} />
            </div>
            <div className={styles.textContainer}>
                <h3>{name} ({year})</h3>
                <p>{desc}</p>
            </div>
        </div>
    );
};

export default Education;