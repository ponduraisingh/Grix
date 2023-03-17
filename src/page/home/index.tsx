import React from "react";
import { motion } from 'framer-motion';

import "./style.scss";
import { Ai, Ae, Fi, Me, Pr, Ps, Xd } from "res/img";
import { ButtonPrimary } from "component/button";
import { useNavHeightContext } from "page/laylout";
import { useThemeContext } from "context/theme/themeContext";
import { SheenAnimation } from "component/animation";
import {StarTailRight, TwinkleStarIcon, StarIcon, LineRightIcon, DotIcon, LayerIcon, CertifiedIcon, MemberIcon, UpIcon, LifeIcon, CommunityIcon, QuoteIcon} from "res/icons";
interface courseProps {
    title: string;
    img: string;
    lessonCount: number;
    type: string;
    mode: string;
    offer: string;
    link: string;
}
const CourseCard = ({course}: {course:courseProps}) => {
    const CardRef = React.useRef<HTMLAnchorElement>(null);
    return (
        <React.Fragment>
            <motion.a className="card" ref={CardRef} href={course.link} whileHover={{ scale: 0.97 }}>
                <SheenAnimation animationRef={CardRef} className="sheen" />
                <div className="flex col gap-2">
                    <div className="card-image relative">
                        <div className="absolute w-full h-full top-0 left-0 overflow-hidden image">
                            <img src={course.img} alt="fd" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                    <div className="card-details flex col gap-2">
                        <div className="flex gap-1 middle w-full">
                            <div className="flex-0">
                                <div className={`badge flex gap-1 middle ${course.type === "Live" ? "color3" : course.type === "Workshop" ? "color2" : "color1"}`}><DotIcon /><span>{course.type}</span></div>
                            </div>
                            <div className="flex-1"></div>
                            <div className="flex-0 info">{course.mode}</div>
                        </div>
                        <h3>{course.title}</h3>
                        <div className="flex gap-1 middle w-full">
                            <div className="flex-0 info">{course.lessonCount}x Lesson</div>
                            <div className="flex-1"></div>
                        </div>
                        <div className="br"></div>
                        <div className="footer flex gap-1 middle w-full">
                            <div className="flex-0 offer">{course.offer}</div>
                            <div className="flex-1"></div>
                            <div className="flex-0 link">Enroll now</div>
                        </div>
                    </div>
                </div>
            </motion.a>
        </React.Fragment>
    );
};
const HomePage = () => {
    const navHeight = useNavHeightContext();
    const themeContext = useThemeContext();
    const toolsRef = React.useRef(null);
    const courseList = [
        {
            title: "UI/UX Design Course From Scratch ",
            img: "res/01.png",
            lessonCount: 18,
            type: "Courses",
            mode: "Online Class",
            offer: "Hurry up 25% Off",
            link: ""
        }, {
            title: "Design Bootcamp - Learn Graphic Design Skills Fast",
            img: "res/02.jpg",
            lessonCount: 27,
            type: "Live",
            mode: "Online Class",
            offer: "Hurry up 25% Off",
            link: ""
        }, {
            title: "Zero to hero - Motion Graphics & Video Editing ",
            img: "res/03.png",
            lessonCount: 31,
            type: "Workshop",
            mode: "Online Class",
            offer: "Hurry up 25% Off",
            link: ""
        }
    ]
    const PrMotion = {
        PrInit: { scale: 0.9 },
        PrHover: { scale: 1.0 },
    };
    const PrCircle = {
        PrInit: {  },
        PrHover: { style: { background: "linear-gradient(136.12deg, rgba(255, 255, 255, 0.8) 30.98%, rgba(0, 255, 209, 0.8) 92.73%), #1DFAE5" } },
    };
    const AeMotion = {
        PrInit: { scale: 0.9 },
        PrHover: { scale: 1.0 },
    };
    const AeCircle = {
        PrInit: {  },
        PrHover: { style: { background: "linear-gradient(136.12deg, rgba(255, 255, 255, 0.8) 30.98%, rgba(0, 255, 209, 0.8) 92.73%), #1DFAE5" } },
    };
    const PsMotion = {
        PrInit: { scale: 0.9 },
        PrHover: { scale: 1.0 },
    };
    const PsCircle = {
        PrInit: {  },
        PrHover: { style: { background: "linear-gradient(136.12deg, rgba(255, 255, 255, 0.8) 30.98%, rgba(0, 255, 209, 0.8) 92.73%), #1DFAE5" } },
    };
    const FiMotion = {
        PrInit: { scale: 0.9 },
        PrHover: { scale: 1.0 },
    };
    const FiCircle = {
        PrInit: {  },
        PrHover: { style: { background: "linear-gradient(136.12deg, rgba(255, 255, 255, 0.8) 30.98%, rgba(0, 255, 209, 0.8) 92.73%), #1DFAE5" } },
    };
    const MeMotion = {
        PrInit: { scale: 0.9 },
        PrHover: { scale: 1.0 },
    };
    const MeCircle = {
        PrInit: {  },
        PrHover: { style: { background: "linear-gradient(136.12deg, rgba(255, 255, 255, 0.8) 30.98%, rgba(0, 255, 209, 0.8) 92.73%), #1DFAE5" } },
    };
    const AiMotion = {
        PrInit: { scale: 0.9 },
        PrHover: { scale: 1.0 },
    };
    const AiCircle = {
        PrInit: {  },
        PrHover: { style: { background: "linear-gradient(136.12deg, rgba(255, 255, 255, 0.8) 30.98%, rgba(0, 255, 209, 0.8) 92.73%), #1DFAE5" } },
    };
    const XdMotion = {
        PrInit: { scale: 0.9 },
        PrHover: { scale: 1.0 },
    };
    const XdCircle = {
        PrInit: {  },
        PrHover: { style: { background: "linear-gradient(136.12deg, rgba(255, 255, 255, 0.8) 30.98%, rgba(0, 255, 209, 0.8) 92.73%), #1DFAE5" } },
    };
    return (
        <React.Fragment>
            <section className="section one relative py-15">
                <div className="header-space" style={{minHeight: navHeight}} />
                <div className="container">
                    <div className="flex col gap-4 xl-gap-6 text-center">
                        <h1>Learn UX/UI Design Live courses & more programs</h1>
                        <br />
                        <div className="text-center">
                            <ButtonPrimary variant="contained">View Course</ButtonPrimary>
                        </div>
                    </div>
                </div>
                <div className="background-img light"></div>
                <div className="background-img dark" style={themeContext?.theme === "dark" ? {backgroundImage:"url('res/image/dark-bg-1.png')"} : {backgroundImage:"url('res/image/light-bg-1.png')"}}></div>
            </section>
            <section className="section two primary relative  overflow-hidden">
                <div className="container">
                    <div className="flex gap-2 py-15 middle">
                        <div className="flex-1 xl-flex-3 relative z-index1">
                            <div className="flex col gap-2 xl-gap-4 center min-height-420">
                                <h3>Change your life  become a UX/UI Designer.</h3>
                                <p>An online digital campus called Graxi Design trains product teams and career changers in UX/UI design.</p>
                                <div className="text-left">
                                    <ButtonPrimary variant="contained">View Course</ButtonPrimary>
                                </div>
                            </div>
                        </div>
                        <div className="flex-0 xl-flex-1 absolute xl-relative xl-right-middle">
                            <div className="flex gap-2 middle opacity-50 xl-opacity-100" style={{margin: "-71.25% 0"}}>
                                <div className="flex col gap-2">
                                    <motion.div 
                                        className="big-pill img1"
                                        animate={{ y: [64, 0, 64] }}
                                        transition={{ duration: 8, repeat: Infinity }}
                                    />
                                    <motion.div 
                                        className="big-pill img2"
                                        animate={{ y: [64, 0, 64] }}
                                        transition={{ duration: 8, repeat: Infinity }}
                                    />
                                </div>
                                <div className="flex col gap-2">
                                    <motion.div 
                                        className="big-pill img3"
                                        animate={{ y: [0, -48, 48, 0] }}
                                        transition={{ duration: 8, repeat: Infinity }}
                                    />
                                    <motion.div 
                                        className="big-pill img4"
                                        animate={{ y: [0, -48, 48, 0] }}
                                        transition={{ duration: 8, repeat: Infinity }}
                                    />
                                    <motion.div 
                                        className="big-pill img5"
                                        animate={{ y: [0, -48, 48, 0] }}
                                        transition={{ duration: 8, repeat: Infinity }}
                                    />
                                </div>
                                <div className="flex col gap-2">
                                    <motion.div 
                                        className="big-pill img6"
                                        animate={{ y: [-64, 0, -64] }}
                                        transition={{ duration: 8, repeat: Infinity }}
                                    />
                                    <motion.div 
                                        className="big-pill img7"
                                        animate={{ y: [-64, 0, -64] }}
                                        transition={{ duration: 8, repeat: Infinity }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-img light"></div>
                <div className="background-pattern background"></div>
            </section>
            <section className="section three relative py-15 overflow-hidden">
                <div className="container">
                    <div className="flex gap-2 middle">
                        <div className="flex-1 relative z-index1">
                            <div className="flex col gap-2 xl-gap-4 center min-height-420 text-center">
                                <h2>Educating Product Teams and <span className="primary-text">Job Changer</span></h2>
                                <div className="w-xl mx-auto">
                                    <p>We take great pride in upskilling teams in the sector and educating everyone to migrate into technological vocations.</p>
                                </div>
                                <div className="text-center">
                                    <ButtonPrimary variant="contained">View Course</ButtonPrimary>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-img light"></div>
            </section>
            <section className="section four relative py-15 overflow-hidden">
                <div className="container">
                    <div className="flex col gap-4 middle w-full">
                        <h4 className="text-center">"Join the UI/UX revolution with our expert courses"</h4>
                    </div>
                    <div className="flex wrap center w-full pt-10">
                    {courseList && courseList.length > 0 && courseList.map((course, i)=>(
                        <div key={`coursecard${i}`} className="p-4 three-row">
                            <CourseCard course={course} />
                        </div>
                    ))}
                    </div>
                </div>
                <div className="background-img light"></div>
                <div className="background-pattern background"></div>
            </section>
            <section ref={toolsRef} className="section five relative py-15 overflow-hidden">
                <div className="container">
                    <div className="flex col gap-4 middle w-full">
                        <h4 className="text-center">Tools Training</h4>
                    </div>
                    <div className="flex w-full space-between pt-10 gap-2 bubble-section">
                        <div className="flex-1 flex col gap-2">
                            <div className="flex">
                                <motion.a 
                                    variants={PrMotion}
                                    initial= "PrInit"
                                    whileHover= "PrHover"
                                    className="bubble flex center middle">
                                    <motion.div className="circle" variants={PrCircle} />
                                    <img src={Pr} alt="Premiere pro" />
                                </motion.a>
                            </div>
                            <div className="bubble-space">
                                <br />
                            </div>
                        </div>
                        <div className="flex-1 flex col gap-2">
                            <div className="bubble-space">
                                <br />
                            </div>
                            <div className="flex">
                                <motion.a 
                                    variants={AeMotion}
                                    initial= "AeInit"
                                    whileHover= "AeHover"
                                    className="bubble flex center middle">
                                    <motion.div className="circle" variants={AeCircle} />
                                    <img src={Ae} alt="After effect" />
                                </motion.a>
                            </div>
                        </div>
                        <div className="flex-1 flex col gap-2">
                            <div className="flex">
                                <motion.a 
                                    variants={PsMotion}
                                    initial= "PsInit"
                                    whileHover= "PsHover"
                                    className="bubble flex center middle">
                                    <motion.div className="circle" variants={PsCircle} />
                                    <img src={Ps} alt="photoshop" />
                                </motion.a>
                            </div>
                            <div className="bubble-space">
                                <br />
                            </div>
                        </div>
                        <div className="flex-1 flex col gap-2">
                            <div className="bubble-space">
                                <br />
                            </div>
                            <div className="flex">
                                <motion.a 
                                    variants={FiMotion}
                                    initial= "FiInit"
                                    whileHover= "FiHover"
                                    className="bubble flex center middle">
                                    <motion.div className="circle" variants={FiCircle} />
                                    <img src={Fi} alt="Figma" />
                                </motion.a>
                            </div>
                        </div>
                        <div className="flex-1 flex col gap-2">
                            <div className="flex">
                                <motion.a 
                                    variants={MeMotion}
                                    initial= "MeInit"
                                    whileHover= "MeHover"
                                    className="bubble flex center middle">
                                    <motion.div className="circle" variants={MeCircle} />
                                    <img src={Me} alt="media encoder" />
                                </motion.a>
                            </div>
                            <div className="bubble-space">
                                <br />
                            </div>
                        </div>
                        <div className="flex-1 flex col gap-2">
                            <div className="bubble-space">
                                <br />
                            </div>
                            <div className="flex">
                                <motion.a 
                                    variants={AiMotion}
                                    initial= "AiInit"
                                    whileHover= "AiHover"
                                    className="bubble flex center middle">
                                    <motion.div className="circle" variants={AiCircle} />
                                    <img src={Ai} alt="Adobe illustator" />
                                </motion.a>
                            </div>
                        </div>
                        <div className="flex-1 flex col gap-2">
                            <div className="flex">
                                <motion.a 
                                    variants={XdMotion}
                                    initial= "XdInit"
                                    whileHover= "XdHover"
                                    className="bubble flex center middle">
                                    <motion.div className="circle" variants={XdCircle} />
                                    <img src={Xd} alt="Adobe XD" />
                                </motion.a>
                            </div>
                            <div className="bubble-space">
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-img light"></div>
            </section>
        </React.Fragment>
    );
};
export default HomePage;