// Connect to the Ethereum network (update with your provider)
const web3 = new Web3('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');

// ABI (Application Binary Interface) of your smart contract
const abi = [
    // Define your smart contract's ABI here
];

// Address of your smart contract
const contractAddress = '0x6D3FfC14bb34aa9Dc88045a3Daf3D621Bd2dd3A6';

// Create an instance of your smart contract
const contract = new web3.eth.Contract(abi, contractAddress);

// Function to get the balance from your smart contract
async function getBalance() {
    const account = '0xdEA8e90B07567CF462C5aCa25D053688E24777A2'; // Update with your Ethereum account address
    const balance = await contract.methods.getBalance(account).call();
    document.getElementById('balance').innerText = `Balance: ${balance}`;
}
