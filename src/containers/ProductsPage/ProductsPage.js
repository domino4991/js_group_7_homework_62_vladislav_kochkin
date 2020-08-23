import React, {useState} from 'react';
import './ProductsPage.css';
import Products from "../../components/ProductsPageComponents/Products/Products";
import {nanoid} from "nanoid";
import canyon from "../../assets/img/grand-canyon.jpg";
import niagaraFalls from "../../assets/img/niagara-falls.jpg";
import everest from "../../assets/img/everest.jpg";
import aplineLake from "../../assets/img/apline-lake.jpg";

const ProductsPage = () => {
    const [product] = useState([
        {
            name: 'Grand Canyon',
            pathImage: canyon,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ipsam nulla repellat suscipit.',
            id: nanoid()
        },
        {
            name: 'Niagara Falls',
            pathImage: niagaraFalls,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ipsam nulla repellat suscipit.',
            id: nanoid()
        },
        {
            name: 'Everest',
            pathImage: everest,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ipsam nulla repellat suscipit.',
            id: nanoid()
        },
        {
            name: 'Apline Lake',
            pathImage: aplineLake,
            desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ipsam nulla repellat suscipit.',
            id: nanoid()
        }
    ]);

    const getMoreInfoAboutTour = () => {
        window.alert('Information will be added some time');
    }

    return (
        <div className="Products-page">
            <Products
                products={product}
                getMoreInfoAboutTour={getMoreInfoAboutTour}
            />
        </div>
    );
};

export default ProductsPage;