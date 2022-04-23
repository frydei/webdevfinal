
import React, {useEffect, useState} from "react";
import ProfileNav from "./profileNav";
import ProfileComponent from "./ProfileItem";
import ProfileEvent from "../Components/ProfileEvent";
import {useParams} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import HomeEvent from "../Components/HomeEvent";
import {month_num} from "../Components/Complaints";
import {getUsers} from "../BACKEND/Actions/UsersActions";

const ProfileScreen = () => {
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    useEffect(() => getUsers(dispatch), [])
    console.log(users)
    const param = useParams();
    const uname = param.username;
    const [tab, changeTab] = useState("UPCOMING_EVENTS");
    let user = users.find(u => u.first_name.toLowerCase().split("")[0] + u.last_name.toLowerCase() === uname)

    console.log(month_num)
    const getDate = (e) => {
        let m = month_num[e.date.month]
        console.log(m)
        m = m.split("")[0] === "0" ? m[1] : m;
        return new Date(e.date.year + "/" + m + "/" + e.date.day)
    }

    return (
        <div className='f-profile' style={{"paddingLeft": "175px", "paddingRight": "175px", "paddingTop": "25px"}}>
            <ProfileComponent user={user}/>
            <ProfileNav changeTab={changeTab}/>

            {tab === "PAST_EVENTS" &&
             user.past_events.map(event => <HomeEvent event={event} page="Past"/>)}

            {tab === "UPCOMING_EVENTS" &&
             user.upcoming_events.map(event => <HomeEvent event={event} page="Upcoming"/>)}

            {tab === "FAVORITED_EVENTS" &&
             user.favorited.map(event => <HomeEvent event={event} page="Favorited"/>)}

        </div>
    )
};

export default ProfileScreen;