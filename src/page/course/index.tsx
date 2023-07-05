import React from "react";
import { motion } from 'framer-motion';
import CircularProgress from '@mui/material/CircularProgress';

import "./style.scss";
import { useNavHeightContext } from "page/laylout";
import { ButtonOutline, ButtonAction} from "component/button";
import { Animation3D } from "component/animation";
import {TicketIcon, StarOutlineIcon} from "res/icons";
import {useParams, useNavigate, Link} from 'react-router-dom';

interface sectionProps {
    title: string;
    topics: string[];
}
interface otherSectionProps {
    title: string;
    description: string;
    link: string;
    imgUrl: string;
}
interface courseProps {
    title: string;
    description: string;
    imgUrl: string;
    overview: string;
    overviewDescription: string;
    demo: string;
    courseLink : string;
    duration: string;
    lessonsCount: string;
    orginalPrice: string;
    sections: sectionProps[];
    others: otherSectionProps[];
}
const SectionCard = ({section, i, CardRef}: {section:sectionProps, i: number, CardRef: React.RefObject<HTMLAnchorElement>}) => {
    // const CardRef = React.useRef<HTMLAnchorElement>(null);
    return (
        <Animation3D className="showcard course-section">
            <div className="flex col gap-2 w-full h-full">
                <div className="flex-1 flex col">
                    <h6>{section.title}</h6>
                    {section.topics && section.topics.length > 0 && (
                        <ul key={`section${i}`}>
                            {section.topics.map((topic, j) => (
                                <li key={`section${i}-topic${j}`}>{topic}</li>
                            ))}
                        </ul>   
                    )}
                </div>
                <div className="count">{i+1}</div>
            </div>
        </Animation3D >
    );
};
const CoursePage = () => {
    const {id} = useParams();
    const [courseList, setCourseList] = React.useState<string[]>([])
    const [course, setCourse] = React.useState<courseProps | null>(null)
    const navHeight = useNavHeightContext();
    const CardRef = React.useRef<HTMLAnchorElement>(null);
    const navigate = useNavigate();
    const getCourseData = async (id: string)=>{
        await fetch(`/res/data/${id}.json`,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function(response){
            return response.json();
        })
        .then(function(myJson) {
            setCourse(myJson)
        }).catch(function(){
            return  null;
        });
    }
    const getCourselist = async ()=>{
        await fetch(`/res/data/course-list.json`,{
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        }).then(function(response){
            return response.json();
        })
        .then(function(myJson) {
            setCourseList(myJson && myJson.length > 0 ? myJson : [])
        }).catch(function(){
            return  null;
        });
    }
    React.useEffect(()=> {
        if(id && courseList.length > 0) {
            if(courseList.includes(id)) {
                getCourseData(id);
            }
            else navigate("/");
        }
    },[courseList, id]);
    React.useEffect(()=> {
        if(courseList && courseList.length === 0) {
            getCourselist();
        }
    },[courseList]);

    return (
        <>
            {course === null ? (
                <div className="flex w-full h-full center middle">
                    <CircularProgress />
                </div>
            ):(
            <div className="course-page">
                <section className="course-title section flex col relative py-10 pt-8">
                        <div className="header-space" style={{minHeight: navHeight+32}} />
                    <div className="container flex-1 flex col w-full gap-2">
                        {course && course.title && (<h1>{course.title}</h1>)}
                        {course && course.description && (<p>{course.description}</p>)}

                        <div className="my-4" />
                        <motion.div className="flex col gap-4 w-full text-left xl2-row">
                            <div className="flex-1">
                                <div className="course-image">
                                    {course && course.imgUrl && (<img src={course.imgUrl} alt={course && course.title ? course.title : "course"} />)}
                                </div>
                            </div>
                            <div className="flex-1 xl2-flex-2 flex col gap-2">
                                {course && course.overview && (<h2>{course.overview}</h2>)}
                                {course && course.overviewDescription && (<p>{course.overviewDescription}</p>)}
                                <div className="my-2 xl-my-4" />
                                <div className="flex w-full gap-4 col xl-row">
                                    <div className="offer flex-1 flex col gap-1">
                                        <ButtonOutline className="flex gap-1">Free <TicketIcon /> For Future Event</ButtonOutline>
                                        <ButtonOutline className="flex gap-1"><StarOutlineIcon /> Course Completion Certificate</ButtonOutline>
                                    </div>
                                    <div className="flex-1 relative">
                                        <div className="course-info w-full relative" style={{minHeight: 80}}>
                                            <div className="box flex col w-full gap-4 absolute">
                                                <div>
                                                    <h5>Duration</h5>
                                                    <p>
                                                        {course && course.duration && (<span>{course.duration}</span>)} &nbsp; - &nbsp; {course && course.lessonsCount && (<span>{course.lessonsCount}</span>)}
                                                    </p>
                                                </div>
                                                <div>
                                                    <h5>Price</h5>
                                                    <p>
                                                        {course && course.duration && (<span>{course.duration}</span>)} &nbsp; - &nbsp; {course && course.lessonsCount && (<span>{course.lessonsCount}</span>)}
                                                    </p>
                                                    <p>{course && course.orginalPrice && (<><span className="orginalPrice">{course.orginalPrice}</span> &nbsp; <span className="sub">+ Include GST</span></>)}</p>
                                                </div>
                                                <div>
                                                <Link to={course && course.courseLink ? course.courseLink : ""} className="flex"><ButtonAction fullWidth>Enroll Now</ButtonAction></Link>
                                                </div>
                                            </div>
                                            <img src="/res/course/discount.png" className="discount" alt="course discount" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                    <div className="background-img gradient"></div>
                </section>
                <section ref={CardRef} className="course-sections section flex col relative py-15">
                    <section className="py-8"></section>
                    <div className="container flex-1 flex col w-full gap-2">
                        <motion.div className="flex wrap center mx-auto">
                            <div className="showcard course-section-action">
                                <div className="flex col gap-3 w-full top center">
                                    <h6>Ready to level up your skills?</h6>
                                    <h3>Discover what you'll learn in this <span>course!</span></h3>
                                    <Link to={course && course.demo ? course.demo : ""}><ButtonAction>Free demo</ButtonAction></Link>
                                </div>
                            </div >
                            {course && course.sections && course.sections.length > 0 && course.sections.map((section:sectionProps, i:number) => (
                                <SectionCard key={`SectionCard${i}`} section={section} i={i} CardRef={CardRef} />
                            ))}
                        </motion.div>
                    </div>
                    <section className="py-10"></section>
                    <div className=" relative">
                        <div className="other-courses container flex-1 flex col w-full gap-2 text-center">
                            <p>Check other courses</p>
                            <h3>You may also like</h3>
                            <div className="py-8"/>
                            <div className="flex w-full gap-4 text-left">
                                <div className="flex w-full gap-8 text-left col xl-row xl-gap-4">
                                {course && course.others && course.others.length > 0 && course.others.map((others:otherSectionProps, i:number) => (
                                    <div key={`otherSection${i}`} className="flex-1">
                                        <div className="other-course w-full flex col sm-row gap-4 middle">
                                            <div className="flex-1 course-img">
                                                {others && others.imgUrl && (<img src={others.imgUrl} alt={others && others.title ? others.title : "course other-1"} />)}
                                            </div>
                                            <div className="flex-1 flex col w-full gap-2">
                                                {others && others.title && (<h5>{others.title}</h5>)}
                                                {others && others.description && (<p>{others.description}</p>)}
                                                <Link to={others && others.link ? others.link : ""}><ButtonAction>View Course</ButtonAction></Link>
                                            </div>
                                            <div className="shade"></div>
                                            <div className="shade one"></div>
                                            <div className="shade two"></div>
                                        </div>
                                    </div>
                                ))}
                                </div>
                            </div>
                        </div>
                        <div className="background-hightlight"></div>
                    </div>
                    <div className="background-confetti"></div>
                </section>
            </div>
            )}
        </>
    );
};
export default CoursePage;