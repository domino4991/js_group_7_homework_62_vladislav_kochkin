import React from 'react';
import './HomePage.css';
import Banner from "../../components/HomePageComponents/Banner/Banner";
import Adventages from "../../components/HomePageComponents/Adventages/Adventages";

const HomePage = () => {

    return (
        <main className="Home-page">
            <Banner
                clicked={() => window.alert('Who lives at the bottom of the ocean?')}
            />
            <Adventages />
        </main>
    );
};

export default HomePage;