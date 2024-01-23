# API Create Ethereum Wallet Address
This is API is a NodeJS project that use EtherJS (https://docs.ethers.org/)

Description:
This is API project use express and morgan npm packages

Getting Started
First, download npm package:
npm install

Run the development server:
npm run dev

Open http://localhost:3000 with your browser to see the result.

You can start editing the page by modifying src/routes/wallet.js The page auto-updates as you edit the file (morgan).

Test
API routes can be accessed on http://localhost:3000/test. This endpoint can be edited in src/routes/index.js.

The pages/api directory is mapped to /api/*.

Create Wallet
API routes can be accessed on http://localhost:3000/api/wallet. This endpoint can be edited in src/routes/wallet.js.
This http://localhost:3000/api/wallet create a Random Wallet and return these Json body
Example:
{
    "privateKey": "0x",
    "address": "0x",
    "mnemonic": "abcde abcde abcde...,
    "etherscan": "https://etherscan.io/address/0x..."
}

This route call "ethers.Wallet.createRandom( [ options = {} ] ) ⇒ Walletsource" function from EtherJS
"Returns a new Wallet with a random private key, generated from cryptographically secure entropy sources. 
If the current environment does not have a secure entropy source, an error is thrown" 

Wallets created using this method will have a mnemonic.

To learn more about Ether.js, take a look at the following resources:

Ethers.js Documentation - https://docs.ethers.org/
