import React, {useState} from "react";
import LargeUserIcon from "../Components/LargeUserIcon";
import Spacer from "../Components/Spacer";
import {useNavigate} from "react-router";
import more_menu from "../Data/more_menu.json";
import SelfProfileItem from "./SelfProfileItem";



const SelfProfileComponent = ({user}) => {
    return (
        <div className="f-profile-view">
            <SelfProfileItem user={user}/>
        </div>
    );
}

export default SelfProfileComponent;