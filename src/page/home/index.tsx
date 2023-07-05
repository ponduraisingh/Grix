import React from "react";
import { motion, useTransform, useScroll, easeOut, easeInOut, easeIn  } from 'framer-motion';

import "./style.scss";
import { Ai, Ae, Fi, Me, Pr, Ps, Xd } from "res/img";
import { ButtonPrimary } from "component/button";
import { useNavHeightContext } from "page/laylout";
import { useThemeContext } from "context/theme/themeContext";
import { SheenAnimation, ScrollYAnimation } from "component/animation";
import {DotIcon, GetCerifiedIcon, LearnIcon, MentorIcon, CareerIcon, SupportIcon, AccessIcon} from "res/icons";
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
    const [menuGoTo, setMenuGoTo] = React.useState("");
    const scrollRef = React.useRef<HTMLDivElement | null>(null)
    
    const courseList = [
        {
            title: "UI/UX Design Course From Scratch",
            img: "/res/course/01.jpg",
            lessonCount: 18,
            type: "Courses",
            mode: "Online Class",
            offer: "Hurry up 25% Off",
            link: "/course/ui-ux-design"
        }, {
            title: "Design Bootcamp-Learn Graphic Design Skills",
            img: "/res/course/02.jpg",
            lessonCount: 27,
            type: "Courses",
            mode: "Online Class",
            offer: "Hurry up 25% Off",
            link: "/course/grapic-design"
        }, {
            title: "Zero to hero-Motion Graphics & Video Editing",
            img: "/res/course/03.jpg",
            lessonCount: 31,
            type: "Courses",
            mode: "Online Class",
            offer: "Hurry up 25% Off",
            link: "/course/video-editing"
        }
    ];
    const { scrollYProgress } = useScroll();
    
    const ref1 = React.useRef<HTMLDivElement>(null);
    const [start1, middel1, end1] = ScrollYAnimation(ref1);
    const animation1_1 = useTransform(scrollYProgress, [start1, end1], ["0.01%", "50%"], { ease: easeIn });
    const animation1_2 = useTransform(scrollYProgress, [start1, middel1, end1], [1.01, 1.01, 0.4], { ease: easeOut });

    const ref2 = React.useRef<HTMLDivElement>(null);
    const [start2, middel2, end2] = ScrollYAnimation(ref2);
    const animation2_1 = useTransform(scrollYProgress, [start2, middel2, end2], ["20%", 0, "20%"], { ease: easeInOut });
    const animation2_3 = useTransform(scrollYProgress, [start2, end2], ["-20%", "20%"], { ease: easeInOut });
    const animation2_4 = useTransform(scrollYProgress, [start2, end2], ["20%", "-20%"], { ease: easeInOut });

    const zoomVariants = {
        initialLeft: {
            scale: 1,
            translateY: 0,
            rotate: -360,
            opacity: 0.4,
            transition: {
                duration: 1.2,
                type: "spring",
                stiffness: 50 
        }},
        initialRight: {
            scale: 1.5,
            translateY: 0,
            rotate: 0,
            opacity: 0.4,
            transition: {
                duration: 1.2,
                type: "spring",
                stiffness: 50,
                delay: 0.4
        }},
        visible: { opacity: 1, scale: 1, translateY: "0%", rotate:0, transition: {
            duration: 1.2,
            type: "spring",
            stiffness: 50 
        }},
        hover: {
            scale: 1.06,
        }
    }
    // const loopTransition = {
    //     y: {
    //         duration: 2,
    //         repeat: Infinity,
    //         repeatType: "reverse",
    //         ease: "easeInOut",
    //     },
    //     x: {
    //         duration: 2,
    //         repeat: Infinity,
    //         repeatType: "reverse",
    //         ease: "easeInOut",
    //     },
    // }
    // const bounceTransition = {
    //     rotate: {
    //         duration: 2,
    //         repeat: Infinity,
    //         repeatType: "reverse",
    //         ease: "easeIn",
    //     },
    // }
    // const rotateTransition = {
    //     rotate: {
    //         duration: 2,
    //         repeat: Infinity,
    //         ease: "linear",
    //     },
    // }
    const flexCardVariants = {
        initial: {
            backgroundImage: "linear-gradient(180deg, rgba(15, 15, 15, 1.0) 0%, rgba(15, 15, 15, 1.0) 100%)",
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 50 
        }},
        hover: {
            backgroundImage: "linear-gradient(180deg, rgba(57, 57, 66, 1.0) 0%, rgba(57, 57, 66, 0.35) 100%)",
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 50 
        }},
    }
    const showVariant = {
        hidden: { opacity: 0, translateY: 5, transition: {
            duration: 1,
        }},
        visible: { opacity: 1, translateY: 0, transition: {
            duration: 1,
        }},
    }
    const fromBottomVariant = {
        hidden: { opacity: 0, translateY: 50, },
        visible: { opacity: 1, translateY: 0, transition: {
            duration: 0.4,
            type: "spring",
            stiffness: 100 
        }},
    }
    React.useEffect(()=>{
        if(menuGoTo !== ""){
            const elePosition = scrollRef.current?.offsetTop;
                console.log(elePosition)
            if (elePosition && window){
                window.scrollTo({
                    top: elePosition + navHeight,
                    behavior: "smooth",
                });
            }
            setMenuGoTo("")
        }
    },[menuGoTo])
    return (
        <React.Fragment>
            <section className="section one flex col relative py-15" ref={ref1}>
                <div className="container flex-1 flex col center middle">
                    <motion.div className="flex col gap-4 height-full xl-gap-6 text-center" style={{scale: animation1_2}}>
                        <div className="header-space" style={{minHeight: navHeight}} />
                        <h1>Learn UX/UI Design Live courses & more programs</h1>
                        <p>Trusted by 3000+ Designers in 50+ countries</p>
                        <motion.div className="text-center">
                            <ButtonPrimary variant="contained" onClick={()=>setMenuGoTo("SectionCourseLists")}>View Course</ButtonPrimary>
                        </motion.div>
                    </motion.div>
                </div>
                <div className="background-img light"></div>
                <motion.div className="background-img dark" style={{translateY: animation1_1, ...themeContext?.theme === "dark" ? {backgroundImage:"url('res/image/dark-bg-1.png')"} : {backgroundImage:"url('res/image/light-bg-1.png')"} }}></motion.div>
            </section>
            <section className="section two flex col primary relative  overflow-hidden" ref={ref2}>
                <div className="container flex-1 flex col center middle">
                    <div className="flex width-full gap-2 py-15 middle">
                        <div className="flex-1 xl-flex-3 relative z-index1">
                            <motion.div variants={fromBottomVariant} initial="hidden" whileInView="visible" className="flex col gap-2 xl-gap-4 center">
                                <motion.h3>Change your life  become a UX/UI Designer.</motion.h3>
                                <p>An online digital campus called Graxi Design trains product teams and career changers in UX/UI design.</p>
                                <div className="text-left">
                                    <motion.span>
                                    <ButtonPrimary variant="contained" onClick={()=>setMenuGoTo("SectionCourseLists")}>View Course</ButtonPrimary>
                                    </motion.span>
                                </div>
                            </motion.div>
                        </div>
                        <div className="flex-0 xl-flex-1 absolute xl-relative xl-right-middle">
                            <div className="flex gap-2 middle opacity-50 xl-opacity-100" style={{margin: "-71.25% 0"}}>
                                <motion.div style={{translateY: animation2_1}} className="flex col gap-2">
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
                                </motion.div>
                                <motion.div style={{translateY: animation2_3}} className="flex col gap-2">
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
                                </motion.div>
                                <motion.div style={{translateY: animation2_4}} className="flex col gap-2">
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
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-img light"></div>
                <motion.div className="background-pattern background"></motion.div>
            </section>
            <section className="section three flex col  relative py-15 overflow-hidden">
                <div className="container flex-1 flex col center middle">
                    <motion.div variants={showVariant} initial="hidden" whileInView="visible" className="flex col gap-2 xl-gap-4 center text-center">
                        <h2>Educating Product Teams and <span className="primary-text">Job Changer</span></h2>
                        <div className="w-xl mx-auto">
                            <p>We take great pride in upskilling teams in the sector and educating everyone to migrate into technological vocations.</p>
                        </div>
                        <div className="text-center">
                            <ButtonPrimary variant="contained" onClick={()=>setMenuGoTo("SectionCourseLists")}>View Course</ButtonPrimary>
                        </div>
                    </motion.div>
                </div>
                <div className="background-img light"></div>
            </section>
            <section ref={scrollRef} className="section four relative py-15 overflow-hidden">
                <div className="container">
                    <div className="flex col gap-4 middle w-full">
                        <h4 className="text-center">"Join the UI/UX revolution with our expert courses"</h4>
                    </div>
                    <div className="flex wrap center w-full pt-10">
                    {courseList && courseList.length > 0 && courseList.map((course, i:number)=>(
                        <div key={`coursecard${i}`} className="p-4 three-row">
                            <CourseCard course={course} />
                        </div>
                    ))}
                    </div>
                </div>
                <div className="background-img light"></div>
                <div className="background-pattern background"></div>
            </section>
            <section className="section five relative py-15 overflow-hidden">
                <div className="container">
                    <div className="flex col py-4 pb-8 middle w-full">
                        <motion.h4 variants={fromBottomVariant} initial="hidden" whileInView="visible" className="text-center">Tools Training</motion.h4>
                    </div>
                    <div className="flex wrap w-full center pt-10 gap-2 bubble-section">
                        <div className="flex-1 flex col gap-2">
                            <div className="flex">
                                <motion.a 
                                    variants={zoomVariants} initial="initialLeft" whileInView='visible' whileHover="hover"
                                    className="bubble flex center middle">
                                    <motion.div className="circle" />
                                    <motion.span variants={zoomVariants} initial="initialRight" whileInView='visible'><img src={Pr} alt="Premiere pro" /></motion.span>
                                </motion.a>
                            </div>
                        </div>
                        <div className="flex-1 flex col gap-2">
                            <div className="flex">
                                <motion.a
                                    variants={zoomVariants} initial="initialLeft" whileInView='visible' whileHover="hover"
                                    className="bubble flex center middle">
                                    <motion.div className="circle" />
                                    <motion.span variants={zoomVariants} initial="initialRight" whileInView='visible'><img src={Ae} alt="After effect" /></motion.span>
                                </motion.a>
                            </div>
                        </div>
                        <div className="flex-1 flex col gap-2">
                            <div className="flex">
                                <motion.a
                                    variants={zoomVariants} initial="initialLeft" whileInView='visible' whileHover="hover"
                                    className="bubble flex center middle">
                                    <motion.div className="circle" />
                                    <motion.span variants={zoomVariants} initial="initialRight" whileInView='visible'><img src={Ps} alt="photoshop" /></motion.span>
                                </motion.a>
                            </div>
                        </div>
                        <div className="flex-1 flex col gap-2">
                            <div className="flex">
                                <motion.a
                                    variants={zoomVariants} initial="initialLeft" whileInView="visible" whileHover="hover"
                                    className="bubble flex center middle">
                                    <motion.div className="circle" />
                                    <motion.span variants={zoomVariants} initial="initialRight" whileInView='visible'><img src={Fi} alt="Figma" /></motion.span>
                                </motion.a>
                            </div>
                        </div>
                        <div className="flex-1 flex col gap-2">
                            <div className="flex">
                                <motion.a
                                    variants={zoomVariants} initial="initialLeft" whileInView='visible' whileHover="hover"
                                    className="bubble flex center middle">
                                    <motion.div className="circle" />
                                    <motion.span variants={zoomVariants} initial="initialRight" whileInView='visible'><img src={Me} alt="media encoder" /></motion.span>
                                </motion.a>
                            </div>
                        </div>
                        <div className="flex-1 flex col gap-2">
                            <div className="flex">
                                <motion.a
                                    variants={zoomVariants} initial="initialLeft" whileInView='visible' whileHover="hover"
                                    className="bubble flex center middle">
                                    <motion.div className="circle" />
                                    <motion.span variants={zoomVariants} initial="initialRight" whileInView='visible'><img src={Ai} alt="Adobe illustator" /></motion.span>
                                </motion.a>
                            </div>
                        </div>
                        <div className="flex-1 flex col gap-2">
                            <div className="flex">
                                <motion.a
                                    variants={zoomVariants} initial="initialLeft" whileInView='visible' whileHover="hover"
                                    className="bubble flex center middle">
                                    <motion.div className="circle" />
                                    <motion.span variants={zoomVariants} initial="initialRight" whileInView='visible'><img src={Xd} alt="Adobe XD" /></motion.span>
                                </motion.a>
                            </div>
                        </div>
                    </div>
                    <div className="flex col py-10 middle w-full">
                    </div>
                    <div className="flex col pb-8 middle w-full text-center mx-auto w-xl">
                        <motion.h5 variants={fromBottomVariant} initial="hidden" whileInView="visible" className="pb-8 text-center">What you will get in this <span className="primary-text">Graxi</span></motion.h5>
                        <motion.p variants={showVariant} initial="hidden" whileInView="visible">Raising goals for design thinking and creative talents is now more important than ever, regardless of where you work or what job title you occupy. As a result, we created a bridge that would allow you to become a designer.</motion.p>
                    </div>
                    <div className="flex row gap-8 wrap py-10 middle w-full mx-auto w-2xl center middle">
                        <div className="flex-card flex center middle">
                            <motion.div className="card-list" variants={flexCardVariants} initial="initial" whileHover="hover">
                                <div className="icons">
                                    <div className="icon">
                                        <LearnIcon />
                                    </div>
                                </div>
                                <p>Learn UX/UI Design</p>
                            </motion.div>
                        </div>
                        <div className="flex-card flex center middle">
                            <motion.div className="card-list" variants={flexCardVariants} initial="initial" whileHover="hover">
                                <div className="icons">
                                    <div className="icon">
                                        <GetCerifiedIcon />
                                    </div>
                                </div>
                                <p>Get Certified</p>
                            </motion.div>
                        </div>
                        <div className="flex-card flex center middle">
                            <motion.div className="card-list" variants={flexCardVariants} initial="initial" whileHover="hover">
                                <div className="icons">
                                    <div className="icon">
                                        <MentorIcon />
                                    </div>
                                </div>
                                <p>1-on-1 Mentorship</p>
                            </motion.div>
                        </div>
                        <div className="flex-card flex center middle">
                            <motion.div className="card-list" variants={flexCardVariants} initial="initial" whileHover="hover">
                                <div className="icons">
                                    <div className="icon">
                                        <CareerIcon />
                                    </div>
                                </div>
                                <p>Career Guidance</p>
                            </motion.div>
                        </div>
                        <div className="flex-card flex center middle">
                            <motion.div className="card-list" variants={flexCardVariants} initial="initial" whileHover="hover">
                                <div className="icons">
                                    <div className="icon">
                                        <SupportIcon />
                                    </div>
                                </div>
                                <p>Lifetime Support</p>
                            </motion.div>
                        </div>
                        <div className="flex-card flex center middle">
                            <motion.div className="card-list" variants={flexCardVariants} initial="initial" whileHover="hover">
                                <div className="icons">
                                    <div className="icon">
                                        <AccessIcon />
                                    </div>
                                </div>
                                <p>Community Access</p>
                            </motion.div>
                        </div>
                    </div>
                </div>
                <div className="background-img light"></div>
            </section>
        </React.Fragment>
    );
};
export default HomePage;