//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

/* OpenZeppelin Contracts */
import '@openzeppelin/contracts/access/Ownable.sol';
import '@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol';
import '@openzeppelin/contracts/utils/math/SafeMath.sol';

// ERC721Enumerable is a usefull standard contract to manage tokens
contract MintExample is ERC721Enumerable, Ownable{
    // this mapping will TRACK the balances I have
    // using an object that will be a map of address => balance and store the number associated with the address
    mapping(address => uint256) public balances;

    constructor(
        string memory name,
        string memory symbol
    ) ERC721(name, symbol) { }

    // Fn to create tokens
    /* payable allows a function to receive ether while being called */
    function mint(uint256 numberOfMints) public payable {
        uint256 supply = totalSupply();
        // Loop through the number of mints
        for (uint256 i = 0; i < numberOfMints; i++) {
            // Mint a token
            _safeMint(msg.sender, supply + i); // msg.sender is the address of the caller
            balances[msg.sender]++; // Add one to the balance of the caller
        }
    }
 }
