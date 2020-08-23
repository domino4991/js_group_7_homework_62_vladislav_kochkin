import React from 'react';
import './About.css';
import {FaVk, FaTwitter, FaInstagram} from "react-icons/fa";

const About = props => {
    return (
        <div className="About">
            <div className="About-items">
                <div className="About-item">
                    <h4 className="About-title">Hiking Travel Group</h4>
                    <p className="About-desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consectetur cumque dolore doloribus earum exercitationem facilis fuga, fugiat iste iure laudantium maiores molestiae molestias nam non obcaecati officiis perferendis porro possimus provident quaerat quasi qui quia quis ratione recusandae, rem reprehenderit sit temporibus ullam. Aliquam aspernatur aut corporis, ducimus ex libero, perferendis quam qui quidem repellendus tenetur ut voluptatibus! Atque ducimus enim modi neque placeat quia quibusdam suscipit. Aliquam dolore dolorem, doloremque eligendi facere ipsum magnam magni pariatur provident ratione rem repellat reprehenderit, sunt, ut velit. Accusamus fugiat quis soluta.</p>
                </div>
                <div className="About-item">
                    <h4 className="About-title">Contacts</h4>
                    <ul className="Contact-list">
                        <li className="Contact-list__item">Email: example@mail.com</li>
                        <li className="Contact-list__item">Phone: 389283928</li>
                        <li className="Contact-list__item">Address: Spanch Bob street, 13</li>
                        <li className="Contact-list__item">
                            <ul className="Social-list">
                                <li className="Social-list__item">
                                    <a
                                        href="https://vk.com/"
                                        target="_blank"
                                        className="Social-list__link"
                                        rel="noopener noreferrer"
                                    >
                                        <FaVk />
                                    </a>
                                </li>
                                <li className="Social-list__item">
                                    <a
                                        href="https://twitter.com/"
                                        target="_blank"
                                        className="Social-list__link"
                                        rel="noopener noreferrer"
                                    >
                                        <FaTwitter />
                                    </a>
                                </li>
                                <li className="Social-list__item">
                                    <a
                                        href="https://www.instagram.com/?hl=ru"
                                        target="_blank"
                                        className="Social-list__link"
                                        rel="noopener noreferrer"
                                    >
                                        <FaInstagram />
                                    </a>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="Form-wrapper">
                <h4 className="About-title">Leave us a message</h4>
                <form className="Message-form" onSubmit={props.submit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name..."
                        className="Message-form__name-input"
                        required
                    />
                    <textarea
                        className="Message-form__message"
                        placeholder="Enter your message"
                        required
                    />
                    <button
                        type="submit"
                        className="Message-form__btn"
                    >Send</button>
                </form>
            </div>
        </div>
    );
};

export default About;