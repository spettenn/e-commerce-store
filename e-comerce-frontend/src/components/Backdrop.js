import styled from 'styled-components';

const BackDrop = styled.div`
	width: 100%;
	height: 100vh;
	background: rgba(0, 0, 0, 0.5);
	z-index: 100;
	position: fixed;
	top: 0;
	left: 0;
`;

const Backdrop = ({ click, show }) => {
	return show && <BackDrop onClick={click}></BackDrop>;
};

export default Backdrop;
