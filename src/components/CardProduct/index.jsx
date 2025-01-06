import PropTypes from "prop-types";

import { CardImage, Container } from "./styles";
import { CartButton } from "../CartButton";



export function CardProduct({ product }) {
    
    return (
        <Container>
            <CardImage src={product.url} alt={product.name}/>
            <div>
                <p>{product.name}</p>
                <strong>{product.currencyValue}</strong>
            </div>
            <CartButton></CartButton>
        </Container>
    );
}

CardProduct.propTypes = {
    product: PropTypes.object,
};