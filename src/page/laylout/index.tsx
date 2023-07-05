import React from "react";
import { Outlet } from "react-router-dom";
import { motion } from 'framer-motion';

import FooterNav from "./footer";
import HeaderNav from "./header/nav";
import {TwitterIcon} from "res/icons";
import "./style.scss";


const NavHeightContext = React.createContext(0);

const PageLayout = () => {
    const [navHeight, setNavHeight] = React.useState(0);
    const fabVariants = {
        initial: {
            // backgroundImage: "linear-gradient(180deg, rgba(15, 15, 15, 1.0) 0%, rgba(15, 15, 15, 1.0) 100%)",
            borderRadius: 8,
            rotate: 0,
            scale: 0.8,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 50 
        }},
        hover: {
            // backgroundImage: "linear-gradient(180deg, rgba(57, 57, 66, 1.0) 0%, rgba(57, 57, 66, 0.35) 100%)",
            borderRadius: 38,
            rotate: 360,
            scale: 1,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 50 
        }},
    }
    const fabSpanVariants = {
        initial: {
            rotate: 360,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 50 
        }},
        hover: {
            rotate: 0,
            transition: {
                duration: 0.6,
                type: "spring",
                stiffness: 50 
        }},
    }
    return (
        <React.Fragment>
            <div className="page_layout flex col min-w-full min-h-full relative z-index1">
                <HeaderNav setNavHeight={setNavHeight} />
                <div className="layout_body flex-1 scroll-y">
                    <NavHeightContext.Provider value={navHeight}>
                        <Outlet />
                    </NavHeightContext.Provider>
                    <motion.a href="https://api.whatsapp.com/send?phone=916381382770&text=Hi" target="_blank" variants={fabVariants} initial="initial" whileHover="hover" className="fabIcon twitter">
                        <motion.span variants={fabSpanVariants}><TwitterIcon /></motion.span></motion.a>
                    <FooterNav />
                </div>
            </div>
        </React.Fragment>
    );
};

const useNavHeightContext = () => {
  const context = React.useContext(NavHeightContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export {useNavHeightContext};
export default PageLayout;
