import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { FunctionComponent } from "react";
import Project from "../components/Project";
import Education from "../components/Education";
import Sidebar from "../components/Sidebar";
import { FiLink } from "react-icons/fi";
import { Icon } from "@chakra-ui/react";
import { useMediaQuery } from 'react-responsive'

// const lorem = "Quam vulputate dignissim suspendisse in est. Mauris a diam maecenas sed enim ut. Vulputate odio ut enim blandit volutpat maecenas. Nulla facilisi nullam vehicula ipsum a arcu cursus. Urna cursus eget nunc scelerisque viverra mauris in aliquam. Elementum facilisis leo vel fringilla. Pharetra sit amet aliquam id. Magna sit amet purus gravida quis blandit turpis cursus.";


const Home: FunctionComponent = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width:1100px)" })
  return (
    <div className={styles.container}>
      <Head>
        <title>Conor Roberts</title>
      </Head>


      <header className={styles.header}>
        <Image src="/toronto.jpg" height="810" width="1920" />
      </header>
      <Sidebar />
      <main className={isSmallScreen ? styles.big : styles.small}>
        <section className={styles.section}>
          <h1 className={styles.h1}>Conor Roberts</h1>
          <h2 className={styles.h2}>Computer Science Student & Web Developer</h2>
          <p className={styles.p}>I'm a current computer science student and web developer. Formerly professional Smite player. </p>
        </section>
        <section className={styles.section}>
          <h3>My Toolkit</h3>
          <p>These are some of my favourite technologies for web development</p>
          <ul className={styles.skills}>
            <li>
              <i className="devicon-javascript-plain colored"></i>
            </li>
            <li>
              <i className="devicon-react-original-wordmark colored"></i>
            </li>
            <li>
              <i className="devicon-mongodb-plain-wordmark colored"></i>
            </li>
            <li>
              <i className="devicon-css3-plain-wordmark colored"></i>
            </li>
            <li>
              <i className="devicon-html5-plain-wordmark colored"></i>
            </li>
            <li>
              <i className="devicon-redux-original colored"></i>
            </li>
            <li>
              <i className="devicon-git-plain-wordmark colored"></i>
            </li>
          </ul>
        </section>
        <section className={styles.section}>
          <h3>Projects</h3>
          <div className={styles.projectsContainer}>
            <Project
              name="Campus Connect"
              desc={"Chat app meant to connect students via course-specific group chats. Uses Firebase to store messages and authenticate users."}
              img={{ url: "/campusconnect.png", width: 1917, height: 931 }}
              link="https://karen-wright-blog.conorroberts.com/"
            />
            <Project
              name="Karen Wright Blog"
              desc={"This is a simple blog project. Stores posts in MongoDB. Made with NextJS."}
              img={{ url: "/kwblog.png", width: 1910, height: 931 }}
              link="https://gh.conorroberts.com/campus-connect/"
            />
          </div>
        </section>
        <section className={styles.section}>
          <h3>
            Resume
            <a
              className={styles.resumeLink}
              href="https://drive.google.com/file/d/1wKevEM4d4ocs_WL7tfgxHTLmtloEm9Ci/view?usp=sharing">
              <Icon as={FiLink} />
            </a>
          </h3>
          <div className={styles.educationContainer}>
            <Education
              img={{ url: "/guelph.jpg", width: 400, height: 400 }}
              name="University of Guelph"
              year={2021}
              desc="Bachelor's of Computer Science"
            />
            <Education
              img={{ url: "/juno.jpg", width: 400, height: 400 }}
              name="Juno College"
              desc="Full-Stack Masterclass"
              year={2021}
            />
            <Education
              img={{ url: "/juno.jpg", width: 400, height: 400 }}
              name="Juno College"
              desc="Web Development Bootcamp"
              year={2020} />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;