import React from 'react';
import styled from 'styled-components';

const Outer = styled.footer`
	width: 100%;
	height: 100px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f5f5f5;
	color: #333;
	gap: 10px;
	flex-direction: row;
`;

function Footer() {
	return <Outer>Footer</Outer>;
}

export default Footer;
