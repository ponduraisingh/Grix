import * as React from "react";
import LogoComponent from "component/logo"
import { ButtonPrimary } from "component/button";

// CSS
import "./style.scss";
import { Link, NavLink } from "react-router-dom";

interface HeaderNavProps {
  setNavHeight: (n:number)=> void;
}

const HeaderNav: React.FunctionComponent<HeaderNavProps> = ({setNavHeight}) => {
  // const navMenu = [
  //   {name: "Home", url: "/"},
  //   {name: "Programs", url: "#"},
  //   {name: "Workshops", url: "#"},
  //   {name: "Design Event", url: "#"},
  //   {name: "Our Story", url: "#"},
  // ]
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [headerHeight, setHeaderHeight] = React.useState(0);

  React.useEffect(()=>{
    if (typeof window === 'undefined' || ref === null) return;
    function winResize() {
      if(ref && ref.current) {
        const updateNavHeight = (n:number)=> setHeaderHeight(n);
        updateNavHeight(ref.current.clientHeight);
      }
    }
    window.addEventListener('resize', winResize);
    winResize();
    return () => window.removeEventListener('resize', winResize);
  },[ref]);

  React.useEffect(()=>{
    if (headerHeight !== 0)
      setNavHeight(headerHeight);
  },[headerHeight, setNavHeight])

  return (
    <div className={`header backdrop-blur-sm` } ref={ref}>
      <div className="flex gap-1 w-full middle header--menu">
        <div className="logo flex-0 header--menu--left">
          <NavLink to="/" rel="homepage"><LogoComponent nameShow height={60} /></NavLink>
        </div>
        
        <div className="flex-1">
          <div className="header--nav-item hide-xl">
            {/* <ul className="flex middle center gap-1">
              {navMenu.map((navItem, i)=>(
                <li key={`headerNavItem${i}`}><Link to={navItem.url}>{navItem.name}</Link></li>
              ))}
            </ul> */}
          </div>
        </div>
        <div className="flex-0 header--menu--right">
          <div className="flex gap-2 middle">
            <NavLink rel="demo request" to="https://forms.gle/uyTPTsDBsfb5nMhi6"><ButtonPrimary variant="contained">Free Demo</ButtonPrimary></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderNav;
