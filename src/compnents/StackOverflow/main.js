import { FilterList } from "@mui/icons-material";
import React from "react";
import AllQuestions from "./AllQuestions";
import { Link } from 'react-router-dom';
import './CSS/main.css'


function Main(){
    return (
        <div className="main">
            <div className="main-container">
            <div className="main-top">
                <h2>All Question</h2>
                <Link>
                    <button>Ask Question</button>
                </Link>
            </div>
            <div className="main-desc">
                <p>All Question Stat</p>
                <div className="main-filter">
                    <div className="main-tabs">
                        <div className="main-tab">
                            <Link>
                                Newest
                            </Link>
                        </div>
                        <div className="main-tab">
                            <Link>
                                Active
                            </Link>
                        </div><div className="main-tab">
                            <Link>
                                More
                            </Link>
                        </div>
                        <div className="main-filter-item">
                            <FilterList />
                            <p>
                                Filter
                            </p>
                        </div>
                    </div>
                </div>
                <div className="questioins">
                <div className="question">
                            <AllQuestions />
                        </div>
                        </div>
            </div>
            </div>
        </div>

    )
}

export default Main