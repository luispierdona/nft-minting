import React from 'react';
import mintAbi from '../mintAbi.json';
import { ethers, BigNumber } from "ethers"; // Allow us to connect
import { useEffect, useState } from "react";

const styles = {
	connect: {
		background: "linear-gradient(to right, #2dabf9 5%, #0688fa 100%)",
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
	},
	mint: {
		background: "linear-gradient(to bottom, #32CD32 5%, #32CD32 80%)",
		backgroundColor: "#32CD32",
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
		marginLeft: "16px",
	},
	disconnect: {
		background: "linear-gradient(to right, #B22222 5%, #CD5C5C 100%)",
		backgroundColor: "#B22222",
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
	}
};

const btnAddMinus = {
	borderRadius: "50%",
	backgroundColor: "transparent",
	borderColor: "white",
  color: "white",
	fontSize: "16px",
  textAlign: "center",
  textDecoration: "none",
	width: "40px",
	height: "40px",
	border: "1px solid white",
	cursor: "pointer",
	marginRight: "24px",
}

const mintAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const MintBTN = () => {

	/* CONNECTING PART */
	const [accounts, setAccounts] = useState([]);

	// Fn to call our MetaMask wallet
	async function connectAccounts() {
		if (window.ethereum) { // this checks if you are running MetaMask
			const accounts = await window.ethereum.request({
				method: "eth_requestAccounts"
			});
			setAccounts(accounts);
		}
	}

	useEffect(() => {
		console.log(accounts);
	}, [accounts]);

	/* MINTING PART */
	const [mintAmount, setMintAmount] = useState(1);

	async function handleMint() {
		if (window.ethereum) {
			/* Provider to connec to MetaMask (blockchain) */
			const provider = new ethers.providers.Web3Provider(window.ethereum);

			/*
				Every time a call requires money, or exchange of a token
				or something that has financial value,
				we have to SIGN that particular call.

				The signer will gave us confirmation that the call was successful.
			*/
			const signer = provider.getSigner();
			const contract = new ethers.Contract(mintAddress, mintAbi.abi, signer);

			try {
				const response = await contract.mint(BigNumber.from(mintAmount));
				console.log(response);
				alert('Transaction successful!');
			} catch (error) {
				console.log(error);
			}
		}
	}

	return (
		<>
			{accounts.length === 0 ?
				<a style={styles.connect} onClick={connectAccounts}>CONNECT WALLET</a>
				:
				<div>
					<p>How Many?</p>
					<button style={btnAddMinus} onClick={() => mintAmount === 0 ? null : setMintAmount(mintAmount - 1)}>-</button>
					<span style={{ marginRight: "16px" }}>{mintAmount}</span>
					<button style={btnAddMinus} onClick={() => mintAmount === 4 ? null : setMintAmount(mintAmount + 1)}>+</button>
					<button style={styles.mint} onClick={handleMint}>Mint</button>
					<p>* Max limit 4</p>
					<button style={styles.disconnect} onClick={ () => setAccounts([])}>Disconnect</button>
				</div>
			}
		</>
	);
};

export default MintBTN;