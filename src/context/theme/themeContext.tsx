import React from "react";

type ThemeContextType = { theme: string; setTheme: React.Dispatch<React.SetStateAction<string>> } | null;
type ThemeProps = {children : React.ReactNode}

export const ThemeContext = React.createContext<ThemeContextType>(null);

export const ThemeProvider: React.FC<ThemeProps> = ({ children }) => {
    const defaulTheme = "dark";
    const getLocalTheme = () => {
        try {
            const localTheme = localStorage.getItem('thememode');
            console.log(localTheme)
            if(localTheme && (localTheme ===  "dark" || localTheme ===  "light")) {
                return localTheme;
            } else {
                return defaulTheme;
            }
        } catch(e:any) {
            return defaulTheme;
        };
    }
    const setLocalTheme = (str: string) => {
        try {
            localStorage.setItem("thememode", str)
        } catch(e:any) {
            return null;
        };
    }
    const [theme, setTheme] = React.useState<string>("");
    const [singleRender, setSingleRender] = React.useState(false);
    React.useEffect(()=>{
        if(singleRender) {
            const localTheme = getLocalTheme();
            console.log(`${localTheme} !== ${theme}`)
            if(theme === "") {
                setTheme(localTheme);
                setLocalTheme(localTheme);
            } else if(localTheme !== theme) {
                setLocalTheme(theme);
            }
            document.body.className = (`${theme}-mode`);
        } else {
            setSingleRender(true)
        }
    },[theme, singleRender]);
    return (
    <ThemeContext.Provider value={{theme, setTheme}}>
        <div className={`flex col w-full h-full themeContext`}>
            { children }
        </div>
    </ThemeContext.Provider>
    );
};

export const useThemeContext = () => React.useContext(ThemeContext);
