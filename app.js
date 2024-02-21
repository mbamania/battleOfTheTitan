window.addEventListener('load', async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
        window.web3 = new Web3(window.ethereum); // Initialize web3
    } else {
        console.log('MetaMask is not installed!');
        return;
    }
});

async function connect() {
    // Request account access
    try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        document.getElementById('account').innerText = `Account: ${account}`;

        // Ensure web3 is initialized
        if (typeof window.web3 === 'undefined') {
            console.error('Web3 is not initialized!');
            return;
        }

        // Get ETH balance
        const balance = await window.web3.eth.getBalance(account);
        document.getElementById('balance').innerText = `Balance: ${window.web3.utils.fromWei(balance)} ETH`;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function connect() {
    if (window.ethereum) {
    // Check if MetaMask is installed
    const ethereum = window.ethereum;

    // Check if MetaMask is connected
    if (ethereum.isConnected()) {
        // Disconnect MetaMask
        ethereum.disconnect()
            .then(() => {
                console.log('Disconnected from MetaMask');
            })
            .catch((error) => {
                console.error('Error disconnecting from MetaMask:', error);
            });
    } else {
        console.log('MetaMask is not connected');
    }
} else {
    console.log('MetaMask is not installed');
}
}
