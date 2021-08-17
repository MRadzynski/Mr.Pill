import React from "react";

import NavigationItem from '../navigationItem/navigationItem.component';
import { ReactComponent as Home } from '../../assets/home.svg';
import { ReactComponent as Calendar } from '../../assets/calendar.svg';
import { ReactComponent as Settings } from '../../assets/settings.svg';


import { NavigationContainer } from "./navigation.styles";

const Navigation = () => {

    return (
        <NavigationContainer>
            <NavigationItem destination="home">
                <Home/>
            </NavigationItem>
            <NavigationItem destination="calendar">
                <Calendar/>
            </NavigationItem>
            <NavigationItem destination="settings">
                <Settings/>
            </NavigationItem>
        </NavigationContainer>
    )
}

export default Navigation;