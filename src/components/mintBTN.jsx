import React from 'react';

const styles = {
  background: "linear-gradient(to bottom, #2dabf9 5%, #0688fa 100%)",
	backgroundColor: "#2dabf9",
	borderRadius: "28px",
	border: "1px solid #0b0e07",
	display: "inline-block",
	cursor: "pointer",
	color: "#ffffff",
	fontFamily: "Arial",
	fontSize: "17px",
	padding: "16px 31px",
	textDecoration: "none",
	textShadow: "0px 1px 0px #263666",
};

const MintBTN = () => {
  return (
    <a href="/" style={styles}>CONNECT WALLET</a>
  );
};

export default MintBTN;