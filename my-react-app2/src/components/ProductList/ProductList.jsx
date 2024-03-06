import {PIZZAS} from "../../consts/data.js";
import {ButtonAddToCart} from "../ButtonAddToCart.jsx";
import './style.css'
import {Product} from "./Product/Product.jsx";

export const ProductList = () => {
    return (
        <ul>
            {PIZZAS.map((el) => (
                <Product
                    key={el.id}
                    name={el.name}
                    ingredients={el.ingredients}
                    unitPrice={el.unitPrice}
                    soldOut={el.soldOut}
                />
            ))}
        </ul>
    );
};