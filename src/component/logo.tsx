import * as React from "react";
import {LogoIcon, LogoName} from "res/icons";

interface LogoComponentProps {
    height? :string|number;
    vertical? : boolean;
    nameShow? : boolean;
    style? : React.CSSProperties;
}

const LogoComponent: React.FunctionComponent<LogoComponentProps> = ({ height, vertical = true, nameShow = true, style }) =>{
    return (
        <div className={`logo flex middle gap-1 ${vertical ? " col": ""}`}>
                <LogoIcon />
            {nameShow && (
                <LogoName />
            )}
        </div>
    )
}

export default LogoComponent;