import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../utils/localstorage';
import { setInitialState } from '../redux/actions/userAction';

const NavbarContainer = styled.nav`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 1rem;
	z-index: 50;
`;

const NavbarLogo = styled.div`
	h2 {
		font-size: 1.4rem;
		cursor: pointer;
	}

	@media (max-width: 500px) {
		h2 {
			font-size: 1rem;
		}
	}
`;

const NavbarLinks = styled.ul`
	display: flex;
	list-style: none;
	align-items: center;

	@media (max-width: 960px) {
		display: none;
	}

	li {
		padding-left: 1.5rem;

		a {
			text-decoration: none;
			font-size: 1.2rem;
			display: flex;
			align-items: center;

			span {
				display: flex;
				align-items: center;
				margin-left: 8px;
			}
		}

		p {
			text-decoration: none;
			font-size: 1.2rem;
			display: flex;
			align-items: center;
			cursor: pointer;
		}
	}
`;

const CartLink = styled(Link)`
	padding: 10px;
	border-radius: 8px;

	&:hover {
		background: #dd219e;
		color: #f4f4f4;
	}
`;

const CartBadge = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 50%;
	margin-left: 8px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 1rem;
`;

const HamburgerMenu = styled.div`
	display: none;
	width: 30px;
	height: 30px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;

	&:hover > div {
		background: #dd219e;
	}

	div {
		width: 100%;
		height: 3px;
		background: #f4f4f4;
	}

	@media (max-width: 960px) {
		display: flex;
	}
`;

const Navbar = ({ click }) => {
	const cart = useSelector((state) => state.cart);
	const history = useHistory();
	const user = useSelector((state) => state.user);
	const dispatch = useDispatch();
	// console.log({user})

	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
	};

	const _handleLogout = () => {
		// console.log('click')
		dispatch(setInitialState());
		logout();
		history.push('/');
	};

	return (
		<NavbarContainer>
			<NavbarLogo>
				<h2>JSOM-E-COMERCE</h2>
			</NavbarLogo>

			<NavbarLinks>
				<li>
					<CartLink to='/cart'>
						<i className='fas fa-shopping-cart'></i>
						<span>
							Cart <CartBadge>{getCartCount()}</CartBadge>
						</span>
					</CartLink>
				</li>

				<li>
					<Link to='/'>Shop</Link>
				</li>

				{!user.userInfo.isLogin ? (
					<li>
						<Link to='/signin'>Login</Link>
					</li>
				) : (
					<li>
						<p onClick={_handleLogout}>Logout</p>
					</li>
				)}
			</NavbarLinks>

			<HamburgerMenu onClick={click}>
				<div></div>
				<div></div>
				<div></div>
			</HamburgerMenu>
		</NavbarContainer>
	);
};

export default Navbar;
