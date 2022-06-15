import './App.css';
import mintAbi from './mintAbi.json';
import { ethers, BigNumber } from "ethers"; // Allow us to connect
import { useEffect, useState } from "react";

const mintAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function App() {

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
    connectAccounts();
  }, []);

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
      } catch (error) {
        console.log(error);
      }
    }
  }


  return (
    <div className="App">
      {/* If the user is connected then we show the BTN */}
      {accounts.length && (
        <div>
          <button onClick={() => setMintAmount(mintAmount - 1)}>-</button>
          {mintAmount}
          <button onClick={() => setMintAmount(mintAmount + 1)}>+</button>
          <button onClick={handleMint}>Mint</button>
        </div>
      )}
    </div>
  );
}

export default App;
