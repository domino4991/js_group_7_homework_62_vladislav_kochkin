import React from 'react';
import './Product.css';

const Product = props => {
    return (
        <div className="Product" style={{animationDuration: `${props.duration}s`}}>
            <div className="Product-img">
                <img src={props.pathImage} alt={props.name} />
            </div>
            <div className="Product-body">
                <h5 className="Product-title">{props.name}</h5>
                <p className="Product-desc">{props.desc}</p>
                <button type="button" className="Product-btn" onClick={props.clicked}>More</button>
            </div>
        </div>
    );
};

export default Product;