import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

import { Button } from '../index';
import { Container } from './styles';
import { formatPrice } from '../../utils/formatPrice';
import { useCart } from '../../hooks/CartContext';

export const CartResume = () => {
    const navigate = useNavigate();

    const { cartProducts } = useCart();

    const [finalPrice, setFinalPrice] = useState(0);
    const deliveryTax = 500;

    useEffect(() => {
        const sumAllItems = cartProducts.reduce((acc, prd) => {
            return acc + prd.price * prd.quantity;
        }, 0);
        setFinalPrice(sumAllItems);
    }, [cartProducts]);

    const submitOrder = async () => {
        const products = cartProducts.map((prd) => {
            return { id: prd.id, quantity: prd.quantity, price: prd.price };
        });

        try {
            const { data } = await api.post('/create-payment-intent', {
                products,
            });
            navigate('/checkout', {
                state: data,
            });
        } catch (err) {
            toast.error('Erro, tente novamente!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'light',
            });
        }
    };

    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-tax-price">{formatPrice(deliveryTax)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button onClick={submitOrder}>Continuar para o pagamento</Button>
        </div>
    );
};