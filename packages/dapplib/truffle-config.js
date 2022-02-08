require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remember exchange hover knee tail snow'; 
let testAccounts = [
"0x49b9e2c553c7ece8799157a44d71b0454af8387428f9bba787f0586e94a5a7d0",
"0xcb2921b876097b3d16d33b086e4800c79cc6a2c32b3a475f68c7a2003b45888d",
"0x1adc464d851f4cb94ef04f9aafee0881ca8265e79d84b3448a0936b3c82bb853",
"0x461272635c82f1ab5c7dc3c328912613c46497dd0aa33011c2163def09bba6aa",
"0x0ee46e868b96f69afeeefd480b4c8deb939988e3c4a76784c987173f5cc2cf7d",
"0xe5eda724b216f2218f551a51461b9a1e2e04d917f7d640b23fc77671d6110ea3",
"0x1392a145031b9c3f03740e46be755356826380c5f4886c5352f1fc52b3945a87",
"0xdbac79c0b86f4e0b070a295b2b6837e565c72233e25198ef4ae82c7f05028e30",
"0x9ee053b38ad03966e4ddb7ae2c145c2565c417d9662e48366a64e77155276250",
"0x230e5170c4a069c4ab11b76100128639b24535078d583a21b5ff660dd7b71d45"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

