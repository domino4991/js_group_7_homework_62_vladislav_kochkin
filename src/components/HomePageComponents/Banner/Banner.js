import React from 'react';
import './Banner.css';

const Banner = ({clicked}) => {
    return (
        <section className="Banner">
            <h1 className="Banner__title">Lorem ipsum dolor sit amet.</h1>
            <p className="Banner__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti et impedit, itaque optio ratione similique.</p>
            <button type="button" className="Banner__btn" onClick={clicked}>More info</button>
        </section>
    );
};

export default Banner;