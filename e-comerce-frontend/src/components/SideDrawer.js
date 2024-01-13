import styled, { css } from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setInitialState } from '../redux/actions/userAction';
import { logout } from '../utils/localstorage';

const StyledSideDrawer = styled.div`
	width: 70%;
	background: #fff;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 200;
	transform: translateX(-100%);
	transition: all 0.3s ease-out;
	display: flex;
	flex-direction: column;
	justify-content: center;

	${(props) =>
		props.show &&
		css`
			transform: translateX(0);
		`}

	@media (min-width: 960px) {
		display: none;
	}
`;

const LinksList = styled.ul`
	display: flex;
	flex-direction: column;
	list-style: none;
`;

const ListItem = styled.li`
	display: flex;
	align-items: center;

	a {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		flex: 1;
		padding: 1rem;
		text-decoration: none;
		color: #171717;
		font-size: 1.6rem;

		&:hover {
			background: #333;
			color: #f4f4f4;
		}

		span {
			display: flex;
			align-items: center;
			margin-left: 8px;
		}
	}

	p {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		flex: 1;
		padding: 1rem;
		text-decoration: none;
		color: #171717;
		font-size: 1.6rem;
	}
`;

const CartBadge = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	background-color: #171717;
	border-radius: 50%;
	margin-left: 8px;
	color: #fff;
	font-size: 1rem;

	a:hover & {
		background-color: #fff;
		color: #171717;
	}
`;

const SideDrawer = ({ show, click }) => {
	const sideDrawerClass = ['sidedrawer'];
	const user = useSelector((state) => state.user);
	const history = useHistory();

	const dispatch = useDispatch();

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
	};

	if (show) {
		sideDrawerClass.push('show');
	}
	const _handleLogout = () => {
		// console.log('click')
		dispatch(setInitialState());
		logout();
		history.push('/');
	};

	return (
		<StyledSideDrawer className={sideDrawerClass.join(' ')}>
			<LinksList onClick={click}>
				<ListItem>
					<Link to='/cart'>
						<i className='fas fa-shopping-cart'></i>
						<span>
							Cart <CartBadge>{getCartCount()}</CartBadge>
						</span>
					</Link>
				</ListItem>

				<ListItem>
					<Link to='/'>Shop</Link>
				</ListItem>

				{!user.userInfo.isLogin ? (
					<ListItem>
						<Link to='/signin'>Login</Link>
					</ListItem>
				) : (
					<ListItem>
						<p onClick={_handleLogout}>Logout</p>
					</ListItem>
				)}
			</LinksList>
		</StyledSideDrawer>
	);
};

export default SideDrawer;
