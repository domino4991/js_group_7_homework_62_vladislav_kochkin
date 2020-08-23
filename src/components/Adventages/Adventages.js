import React from 'react';
import './Adventages.css';
import {FcCamcorderPro, FcCollaboration, FcLike} from "react-icons/fc";

const Adventages = () => {
    return (
        <section className="Adventage-section">
            <h3 className="Adventage-section__title">Our adventage</h3>
            <p className="Adventage-section__subtitle">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur exercitationem fugiat id illum nesciunt, repellendus sapiente. Architecto corporis laudantium natus. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam atque cumque saepe velit voluptatibus. Error hic iusto perferendis vitae voluptates! Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias animi, aperiam architecto beatae commodi consequatur consequuntur culpa illo minus nulla odit optio porro quos rem rerum sapiente sequi velit.</p>
            <div className="Adventages">
                <div className="Adventages__item">
                        <span className="Adventages__icon">
                            <FcCamcorderPro />
                        </span>
                    <h4 className="Adventages__title">Lorem ipsum</h4>
                    <p className="Adventages__desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda expedita laborum minus. Ab, eaque voluptate.
                    </p>
                </div>
                <div className="Adventages__item">
                        <span className="Adventages__icon">
                            <FcLike />
                        </span>
                    <h4 className="Adventages__title">Lorem ipsum</h4>
                    <p className="Adventages__desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda expedita laborum minus. Ab, eaque voluptate.
                    </p>
                </div>
                <div className="Adventages__item">
                        <span className="Adventages__icon">
                            <FcCollaboration />
                        </span>
                    <h4 className="Adventages__title">Lorem ipsum</h4>
                    <p className="Adventages__desc">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda expedita laborum minus. Ab, eaque voluptate.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Adventages;