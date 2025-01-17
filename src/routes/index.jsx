import { Route, Routes } from 'react-router-dom';

import {
    Cart,
    Checkout,
    CompletePayment,
    EditProduct,
    Home,
    Login,
    Menu,
    NewProduct,
    Orders,
    Products,
    Register,
} from '../containers';
import { UserLayout } from '../layouts/UserLayout';
import { AdminLayout } from '../layouts/AdminLayout';

export function Router() {
    return (
        <Routes>
            {/* Rotas para usuário comum */}
            <Route path="/" element={<UserLayout />}>
                <Route index element={<Home />} />
                <Route path="cardapio" element={<Menu />} />
                <Route path="carrinho" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="complete" element={<CompletePayment />} />
            </Route>

            {/* Rotas para administração */}
            <Route path="/admin" element={<AdminLayout />}>
                <Route path="/admin/pedidos" element={<Orders />} />
                <Route path="/admin/novo-produto" element={<NewProduct />} />
                <Route path="/admin/editar-produto" element={<EditProduct />} />
                <Route path="/admin/produtos" element={<Products />} />
            </Route>

            {/* Rotas de autenticação */}
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
        </Routes>
    );
}
