window.addEventListener('load', async () => {
    // Check if MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        console.log('MetaMask is installed!');
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

        // Get ETH balance
        const balance = await web3.eth.getBalance(account);
        document.getElementById('balance').innerText = `Balance: ${web3.utils.fromWei(balance)} ETH`;
    } catch (error) {
        console.error('Error:', error);
    }
}
