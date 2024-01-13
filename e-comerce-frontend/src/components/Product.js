import styled from 'styled-components';
import { Link } from 'react-router-dom';

const ProductContainer = styled.div`
	width: 300px;
	padding: 1rem;
	cursor: pointer;
	box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
	margin: 8px auto;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	@media (max-width: 1232px) {
		width: 360px;
	}
	@media (max-width: 1115px) {
		width: 330px;
	}
	@media (max-width: 1028px) {
		width: 300px;
	}
	@media (max-width: 950px) {
		width: 400px;
	}
	@media (max-width: 830px) {
		width: 330px;
	}
	@media (max-width: 700px) {
		width: 290px;
	}
	@media (max-width: 630px) {
		width: 450px;
	}
	@media (max-width: 500px) {
		width: 350px;
	}
	@media (max-width: 400px) {
		width: 300px;
	}
`;

const ProductImage = styled.img`
	width: 100%;
	height: 170px;
	object-fit: contain;
	border-radius: 8px;
`;

const ProductInfo = styled.div`
	p {
		margin-bottom: 8px;
	}
`;

const InfoName = styled.p`
	font-size: 1rem;
	overflow: hidden;
`;

const InfoDescription = styled.p`
	font-size: 0.8rem;
`;

const InfoPrice = styled.p`
	font-weight: bold;
`;

const ViewButton = styled(Link)`
	display: block;
	text-decoration: none;
	text-align: center;
	color: #171717;
	width: 100%;
	padding: 8px 16px;
	background-color: #f4f4f4;
	border: 1px solid #171717;
	font-size: 1rem;

	&:hover {
		background: #171717;
		color: #f4f4f4;
	}
`;

const Product = ({ imageUrl, description, price, name, productId }) => {
	return (
		<ProductContainer>
			<ProductImage src={imageUrl} alt={name} />

			<ProductInfo>
				<InfoName>{name}</InfoName>
				<InfoDescription>{description.substring(0, 100)}...</InfoDescription>
				<InfoPrice>${price}</InfoPrice>
				<ViewButton to={`/product/${productId}`}>View</ViewButton>
			</ProductInfo>
		</ProductContainer>
	);
};

export default Product;
