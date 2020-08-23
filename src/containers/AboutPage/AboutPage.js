import React from 'react';
import './AboutPage.css';
import About from "../../components/AboutPageComponents/About/About";

const AboutPage = () => {
    const onSubmitForm = e => {
        e.preventDefault();
        window.alert('Message send. Thanks! =) ');
    }
    return (
        <section className="About-section">
            <h3 className="About-section__title">About us</h3>
            <About
                submit={(e) => onSubmitForm(e)}
            />
        </section>
    );
};

export default AboutPage;