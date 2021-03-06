import React from "react";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
    Input,
    useDisclosure,
    Icon
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import Image from "next/image";
import styles from "../styles/Sidebar.module.scss";
import { useMediaQuery } from 'react-responsive'
import { GiHamburgerMenu } from "react-icons/gi";

const SmallScreenContent = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
    return (
        <div className={styles.bar}>
            <Icon as={GiHamburgerMenu} ref={btnRef} onClick={onOpen} />
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent backgroundColor="dodgerblue">
                        <DrawerCloseButton />
                        <DrawerBody>
                            <BigScreenContent />
                        </DrawerBody>
                        <DrawerFooter>
                            <Button variant="outline">Login</Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </div>
    );
}

const BigScreenContent = () => {
    return (
        <div className={styles.content}>
            <div className={styles.headshotContainer}>
                <Image src="/headshot.jpg" width={2312} height={2616} />
            </div>
            <h2>
                Conor Roberts
                     </h2>
            <p>
                Computer Science Student & Web Developer
                    </p>
            <ul className={styles.linkContainer}>
                <li>
                    <a href="mailto:conor@conorroberts.com">
                        <Icon as={MdEmail} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/conorjroberts/">
                        <i className="devicon-linkedin-plain"></i>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/conorroberts">
                        <i className="devicon-github-original"></i>
                    </a>
                </li>
            </ul>
        </div>
    );
}

const Sidebar = () => {

    const isSmallScreen = useMediaQuery({ query: "(max-width:1100px)" })

    return (
        <>
            {isSmallScreen ?
                <SmallScreenContent />
                :
                <div className={styles.container}>
                    <BigScreenContent />
                </div>}
        </>
    )
};

export default Sidebar;