import React from "react";
import {Routes, Route} from 'react-router-dom';

import Navbar from "./Navbar";
import Home from "../../components/Home"

const UserLayout = () => {
    return(
        <div className="userlayout">
            <Navbar />
            <div>
                <Routes>
                    <Route path='/' exact  element={<Home/>} />
                </Routes>
            </div>
        </div>
    )
}

export default UserLayout