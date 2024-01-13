import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer.js';
import SideDrawer from './components/SideDrawer';
import Backdrop from './components/Backdrop';
/* import styled from 'styled-components'; */
import { ThemeProvider } from 'styled-components';

import ToggleButton from './components/theme/ToggleButton';
import DarkModeTheme from './components/theme/DarkModeTheme';

// Screens
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SignUp from './screens/SignUp';
import SignIn from './screens/SignIn';
import { useDispatch } from 'react-redux';
import { fetchCart } from './redux/actions/cartActions';
import { setUserDeatils } from './redux/actions/userAction';

function App() {
	const [sideToggle, setSideToggle] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	const handleToggle = () => {
		setIsDarkMode((prevState) => !prevState);
	};

	// Use ThemeProvider to apply dark mode theme
	const theme = isDarkMode ? darkTheme : lightTheme;

	// fetchCart
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCart());
		dispatch(setUserDeatils());
	}, [dispatch]);

	return (
		<Router>
			<ThemeProvider theme={theme}>
				<div className='App'>
					<ToggleButton onClick={handleToggle}>
						{isDarkMode ? 'Light Mode' : 'Dark Mode'}
					</ToggleButton>

					<Navbar click={() => setSideToggle(true)} />

					<SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
					<Backdrop show={sideToggle} click={() => setSideToggle(false)} />

					<main className='app'>
						<Switch>
							<Route exact path='/' component={HomeScreen} />
							<Route exact path='/product/:id' component={ProductScreen} />
							<Route exact path='/cart' component={CartScreen} />
							<Route exact path='/signup' component={SignUp} />
							<Route exact path='/signin' component={SignIn} />
						</Switch>
					</main>

					<Footer />
				</div>
			</ThemeProvider>
		</Router>
	);
}

const lightTheme = {
	background: '#FFFFFF',
	text: '#2196F3',
};

const darkTheme = {
	background: '#1F1F1F',
	text: '#FFFFFF',
};

export default App;
