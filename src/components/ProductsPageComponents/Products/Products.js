import React from 'react';
import './Products.css';
import Product from "../Product/Product";

const Products = props => {
    let duration = 0.3;
    return (
        <section className="Products">
            <h2 className="Products-title">Our Tours</h2>
            <div className="Products-items">
                {props.products.map(item => <Product
                    key={item.id}
                    name={item.name}
                    pathImage={item.pathImage}
                    desc={item.desc}
                    duration={duration += 0.5}
                />)}
            </div>
            <div className="Products-info">
                <p className="Products-info__txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium blanditiis consectetur cupiditate dicta dignissimos est itaque, neque nisi perferendis voluptatem?</p>
            </div>
        </section>
    );
};

export default Products;