import React from "react";
import { Outlet } from "react-router-dom";
import HeaderNav from "./header/nav";
// import SidemenuNav from "./sidemenu/SideMenu";
// import FooterNav from "./footer/nav";
import "./style.scss";
import {RoundBlurIcon} from "res/icons";


const NavHeightContext = React.createContext(0);

const PageLayout = () => {
    const [navHeight, setNavHeight] = React.useState(0);
    return (
        <React.Fragment>
            <div className="page_layout flex col min-w-full min-h-full relative z-index1">
                <HeaderNav setNavHeight={setNavHeight} />
                <div className="layout_body flex-1 scroll-y">
                    <NavHeightContext.Provider value={navHeight}>
                        <Outlet />
                    </NavHeightContext.Provider>
                </div>
                {/* <FooterNav /> */}
                {/* <span className="roundBlur absolute z-index-1">
                    <RoundBlurIcon />
                    <RoundBlurIcon />
                    <RoundBlurIcon />
                    <RoundBlurIcon />
                    <RoundBlurIcon />
                    <RoundBlurIcon />
                    <RoundBlurIcon />
                    <RoundBlurIcon />
                </span> */}
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
