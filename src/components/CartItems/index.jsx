import { useCart } from "../../hooks/CartContext";
import { formatPrice } from "../../utils/formatPrice";
import TrashIcon from "../../assets/trash.svg";
import { Table } from "../index";
import { ButtonGroup, EmptyCart, ProductImage, ProducTotalPrice, TrashImage } from "./styles";

export function CartItems() {
    const { cartProducts, decreaseProduct, increaseProduct, deleteProduct } = useCart();
    return (
        <Table.Root>
            <Table.Header>
                <Table.Tr>
                    <Table.Th></Table.Th>
                    <Table.Th>Itens</Table.Th>
                    <Table.Th>Preço</Table.Th>
                    <Table.Th>Quantidade</Table.Th>
                    <Table.Th>Total</Table.Th>
                    <Table.Th></Table.Th>
                </Table.Tr>
            </Table.Header>
            <Table.Body>
  {cartProducts?.length ? (
    cartProducts.map(product => (
      <Table.Tr key={product.id}>
        <Table.Td>
          <ProductImage src={product.url} />
        </Table.Td>
        <Table.Td>{product.name}</Table.Td>
        <Table.Td>{product.currencyValue}</Table.Td>
        <Table.Td>
          <ButtonGroup>
            <button onClick={() => decreaseProduct(product.id)}>-</button>
            {product.quantity}
            <button onClick={() => increaseProduct(product.id)}>+</button>
          </ButtonGroup>
        </Table.Td>
        <Table.Td>
          <ProducTotalPrice>
            {formatPrice(product.quantity * product.price)}
          </ProducTotalPrice>
        </Table.Td>
        <Table.Td>
          <TrashImage src={TrashIcon} alt="lixeira" onClick={() => deleteProduct(product.id)} />
        </Table.Td>
      </Table.Tr>
    ))
  ) : (
    <Table.Tr>
      <Table.Td colSpan={6}>
        <EmptyCart>Não há produtos no carrinho</EmptyCart>
      </Table.Td>
    </Table.Tr>
  )}
</Table.Body>

        </Table.Root>
    );
}