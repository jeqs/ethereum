const ethers = require('ethers');
const { Router } = require('express');
const router = new Router();

router.get('/', (req, res) => {

    let mnemonic = "bundle puzzle cute unlock purse garden nut novel heart solid artist way zoo apology step glare unhappy promote become various sausage enter behave wish";
    let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic)
    let path = "m/44'/60'/0'/0/0"; // m/44'/60'/0'/0/0
    let wallet = ethers.Wallet.fromMnemonic(mnemonic, path);
    
    // Load using a non-english locale wordlist (the path "null" will use the default)
    //let secondMnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic, null, ethers.wordlists.ko);

    //const wallet = ethers.Wallet.createRandom();
    const response = {
        privateKey: wallet.privateKey,
        address: wallet.address,
        mnemonic: wallet._mnemonic().phrase,
        etherscan : `https://etherscan.io/address/${wallet.address}`  
    };
    res.json(response);

    // const wallet = ethers.Wallet.createRandom();
    // const response = {
    //     privateKey: wallet.privateKey,
    //     address: wallet.address,
    //     mnemonic: wallet._mnemonic().phrase,
    //     etherscan : `https://etherscan.io/address/${wallet.address}`  
    // };
    // res.json(response);
});  

router.post('/', (req, res) => {
    console.log(req.body);
    res.send('received');
});  

module.exports = router;