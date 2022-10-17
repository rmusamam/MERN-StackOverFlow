import React from "react";
import './CSS/index.css'
import Sidebar from './sidebar'
import Main from "./main";

function Index(){
    return (
        <div className="stack-index">
            <div className="stack-index-content">
                <Sidebar/> 
                <Main /> 
            </div>            
        </div>

    )
}
export default Index
