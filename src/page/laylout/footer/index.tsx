import * as React from "react";
import { motion } from 'framer-motion';
import { showcase } from "res/img";
import { WaveShape, StarShape, LinkedinIcon, InstaIcon, EmailIcon} from "res/icons";

import LogoComponent from "component/logo"
import { ButtonPrimary } from "component/button";

// CSS
import "./style.scss";

interface FooterNavProps {}

const FooterNav: React.FunctionComponent<FooterNavProps> = () => {
    const courseList = [
        {
            title: "UI/UX Design Course From Scratch ",
            img: "res/01.png",
            lessonCount: 18,
            type: "Courses",
            mode: "Online Class",
            offer: "Hurry up 25% Off",
            link: "/course/ui-ux-design"
        }, {
            title: "Design Bootcamp - Learn Graphic Design Skills Fast",
            img: "res/02.jpg",
            lessonCount: 27,
            type: "Live",
            mode: "Online Class",
            offer: "Hurry up 25% Off",
            link: "/course/grapic-design"
        }, {
            title: "Zero to hero - Motion Graphics & Video Editing ",
            img: "res/03.png",
            lessonCount: 31,
            type: "Workshop",
            mode: "Online Class",
            offer: "Hurry up 25% Off",
            link: "/course/video-editing"
        }
    ];
  const loopTransition = {
      y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
      },
      x: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
      },
  }
  const bounceTransition = {
      rotate: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeIn",
      },
  }
  const rotateTransition = {
      rotate: {
          duration: 2,
          repeat: Infinity,
          ease: "linear",
      },
  }
  const marqueeVariants = {
      animate: {
          x: ["0%", "-75%"],
          transition: {
          x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 12,
              ease: "linear",
          },
          },
      },
  };
  return (
    <React.Fragment>
      <section className="section six relative py-15 overflow-hidden">
          <div className="container">
              <motion.div className="flex col gap-4 middle width-full text-center xl-gap-6 xl-row xl-text-left">
                  <motion.div className="flex-1 flex center middle">
                      <div className="showcase">
                          <div className="image">
                              <img src={showcase} alt="Ready to pursue a career in UX/UI design?" />
                          </div>
                          <motion.div
                              transition={loopTransition}
                              animate={{
                                  y: ["-8px", "-16px"],
                                  x: ["0px", "8px"],
                              }}
                              className="floatborder"
                          >
                          </motion.div>
                          <motion.div
                              transition={bounceTransition}
                              animate={{
                                  rotate: ["-15deg", "15deg"],
                              }}
                              className="floatwave"
                          >
                              <WaveShape />
                          </motion.div>
                          <motion.div
                              transition={rotateTransition}
                              animate={{
                                  rotate: [0, 360],
                              }}
                              className="rotateStar"
                          >
                              <StarShape />
                          </motion.div>
                      </div>
                  </motion.div>
                  <motion.div className="flex-1 flex col gap-4">
                      <h5>Ready to pursue a career in UX/UI design?</h5>
                      <p>You'll see that we're straightforward and honest, and we'd love for you to participate in our upcoming Bootcamp!</p>
                  </motion.div>
              </motion.div>
          </div>
          <div className="background-img light"></div>
          <motion.div className="background-img gradient"></motion.div>
      </section>
      <div className="ribbon-graxi">
          <motion.div className="content" variants={marqueeVariants} animate="animate">
              {[...Array(24)].map((e, i) => <React.Fragment key={`FooterNav${i}`}><span>Graxi</span><span className="dot"></span></React.Fragment>)}
          </motion.div>
      </div>
      <section className="section footer relative py-15">
          <div className="container">
              <div className="footer-menu flex gap-8 wrap width-full space-between pb-8">
                  <div className="menu-item flex-1 flex col gap-2">
                      <h6>Programs</h6>
                      <div></div>
                        {courseList && courseList.length > 0 && courseList.map((course, i)=>(
                            <div key={`courseList${i}`}>
                                <a href={course.link}>{course.title}</a>
                            </div>
                        ))}
                  </div>
                  <div className="menu-item flex-1 flex col gap-2">
                      <h6>Community</h6>
                      <div></div>
                      <div><a href="/">UX/UI Events</a><span className="badge">Coming soon</span></div>
                      <div><a>Collaboration</a></div>
                  </div>
                  <div className="menu-item flex-1 flex col gap-2">
                      <h6>Graxi Design</h6>
                      <div></div>
                      <div><a>Our Story</a></div>
                      <div><a>Program</a></div>
                      <div><a>Workshops</a></div>
                  </div>
                  <div className="menu-item flex-1 flex col gap-2">
                      <h6>Legal</h6>
                      <div></div>
                      <div><a href="/terms">Terms & Condition</a></div>
                      <div><a href="/privacy">Privacy Policy</a></div>
                  </div>
              </div>
              <div className="py-8"></div>
              <div className="logo-footer flex gap-4 middle pt-8 col xl-row">
                  <div className="logo flex left col" style={{marginLeft: "-16px"}}>
                      <LogoComponent nameShow height={72} />
                  </div>
                  <div className="info flex-2">
                      Everyone may learn live UX/UI with the help of Graxi Design Academy. In UX/UI Bootcamps, we instruct both product teams and career changers. Our online campus students offer a convenient setting to study, connect with others, and stretch out during weekly yoga classes! A team with positive energy and no outside funding, Graxi is on a mission to enable everyone to learn design in real time.
                  </div>
                  <div className="info flex-1 flex gap-2 center middle">
                      <div className="flex center middle">
                        <motion.a href="https://www.linkedin.com/company/graxi-design/" target="_blank" className="socialLink"><LinkedinIcon /></motion.a>
                      </div>
                      <div className="flex center middle">
                        <motion.a href="https://instagram.com/graxi_design?igshid=ZDdkNTZiNTM=" target="_blank" className="socialLink"><InstaIcon /></motion.a>
                      </div>
                      <div className="flex center middle">
                        <motion.a href="mailto:graxidesign@gmail.com" target="_blank" className="socialLink"><EmailIcon /></motion.a>
                      </div>
                  </div>
              </div>
          </div>
          <div className="background-img light"></div>
          <motion.div className="background-img gradient" style={{backgroundImage:"url('res/image/background-footer.png')"}}></motion.div>
      </section>
    </React.Fragment>
  );
};

export default FooterNav;
