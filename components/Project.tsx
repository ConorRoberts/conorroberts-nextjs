import React, { FunctionComponent } from "react";
import Image from "next/image";
import styles from "../styles/Project.module.scss";

type ProjectProps = {
    img: ProjectImage;
    name?: string;
    desc?: string;
    link: string;
};

interface ProjectImage {
    url: string;
    width: number;
    height: number;
}

const Project: FunctionComponent<ProjectProps> = ({ img, name = "My Project", desc = "This is my project", link }) => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src={img.url} width={img.width} height={img.height} />
            </div>
            <div className={styles.textContainer}>
                <div>
                    <h4>{name}</h4>
                    <p>{desc}</p>
                </div>
                <a href={link}>
                    <i className="devicon-github-original colored"></i>
                    View on GitHub
                </a>
            </div>
        </div>
    );
};

export default Project;