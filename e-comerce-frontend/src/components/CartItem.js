import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CartItemContainer = styled.div`
	width: 100%;
	padding: 1rem;
	display: grid;
	grid-template-columns: 1fr 4fr 1fr 1fr 1fr;
	gap: 8px;
	background: #fff;
	border-radius: 2px;
	place-items: center;
	margin-bottom: 8px;
`;

const ItemName = styled(Link)`
	text-decoration: none;
	color: #171717;

	&:hover {
		color: #dd219e;
	}

	@media (max-width: 700px) {
		font-size: 0.8rem;
	}

	@media (max-width: 500px) {
		font-size: 0.6rem;
	}
`;

const Select = styled.select`
	padding: 10px 17px;

	@media (max-width: 700px) {
		padding: 8px 13px;
	}

	@media (max-width: 500px) {
		padding: 5px 8px;
	}
`;

const DeleteButton = styled.button`
	padding: 10px 17px;
	color: red;
	background: #f4f4f4;
	border: 1px solid #171717;
	cursor: pointer;
	transition: all 0.3s ease-out;

	&:hover,
	&:active,
	&:focus {
		background: #171717;
		transform: scale(1.2);
	}

	@media (max-width: 700px) {
		padding: 8px 13px;
	}

	@media (max-width: 500px) {
		padding: 5px 8px;
	}
`;

const CartItem = ({ item, qtyChangeHandler, removeHandler }) => {
	return (
		<CartItemContainer>
			<div className='cartitem__image'>
				<img src={item.imageUrl} alt={item.name} />
			</div>
			<ItemName to={`/product/${item.product}`}>
				<p>{item.name}</p>
			</ItemName>
			<p className='cartitem__price'>${item.price}</p>
			<Select
				value={item.qty}
				onChange={(e) => qtyChangeHandler(item.product, e.target.value)}>
				{[...Array(item.countInStock).keys()].map((x) => (
					<option key={x + 1} value={x + 1}>
						{x + 1}
					</option>
				))}
			</Select>
			<DeleteButton onClick={() => removeHandler(item.product)}>
				<i className='fas fa-trash'></i>
			</DeleteButton>
		</CartItemContainer>
	);
};

export default CartItem;
