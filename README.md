# **Multi-Factor Authentication Logger on Ethereum Blockchain**  

## **Project Overview**  
A decentralized, tamper-proof authentication logging system built on the Ethereum blockchain. This project leverages smart contracts to securely record authentication events (such as OTP validations and access attempts) in an immutable ledger while avoiding storage of sensitive user data on-chain.  

## **Key Features**  
- **Immutable Logging**: Authentication events are permanently recorded on the blockchain, preventing tampering.  
- **Decentralized Security**: No central authority controls the logs—smart contracts enforce trustless verification.  
- **MetaMask Integration**: Users authenticate via their Ethereum wallet, eliminating traditional credential storage risks.  
- **Sepolia Testnet Deployment**: Safe, cost-free testing using Ethereum’s official test network.  

---

## **Why Blockchain for Authentication Logs?**  
While blockchains are **not ideal for storing sensitive data** (passwords, OTPs, biometrics), they excel at **securely logging events** due to:  
1. **Immutability**: Once written, logs cannot be altered or deleted.  
2. **Transparency**: All transactions are publicly verifiable.  
3. **Trustless Operation**: No reliance on centralized databases or third-party auditors.  

### **Challenges with On-Chain Sensitive Data**  
- **Public Visibility**: All blockchain data is accessible to anyone.  
- **High Gas Costs**: Storing large data (e.g., biometric hashes) is prohibitively expensive.  
- **Latency**: Transaction confirmation delays (minutes) make real-time auth impractical.  
- **Regulatory Conflicts**: GDPR’s "right to be forgotten" clashes with blockchain immutability.  

**Solution**: Store only **authentication event hashes** (not raw credentials) on-chain, keeping sensitive data off-chain.  

---

## **Architecture & Workflow**  
1. **User Authentication**:  
   - Frontend connects to MetaMask (`eth_requestAccounts`).  
   - Smart contract verifies wallet ownership.  

2. **Event Logging**:  
   - Hashed authentication attempts (e.g., `SHA-3(OTP + timestamp)`) are recorded on-chain.  
   - Raw credentials remain off-chain.  

3. **Sepolia Testnet**:  
   - Uses test ETH (zero real-world cost).  
   - Fast, disposable transactions for development.  

---

## **Tech Stack**  
- **Smart Contracts**: Solidity (Ethereum)  
- **Frontend**: Ethers.js / Web3.js  
- **Wallet Integration**: MetaMask (browser extension)  
- **Test Network**: Sepolia (Ethereum testnet)  

---

## **Getting Started**  
### **Prerequisites**  
- MetaMask installed (configured for Sepolia).  
- Test ETH (obtain from a Sepolia faucet).  

### **Installation**  
```bash
git clone [repo-url]
cd MultiFactor-Auth-Logger-Blockchain-ETH
npm install
npm start
```

### **Deployment**  
1. Compile & deploy the smart contract:  
   ```bash
   npx hardhat compile
   npx hardhat run scripts/deploy.js --network sepolia
   ```  
2. Interact via the frontend: Connect MetaMask to confirm transactions.  

---

## **Why MetaMask?**  
- **User-Managed Keys**: Private keys never leave the user’s wallet.  
- **Transaction Signing**: Securely authorizes blockchain interactions.  
- **dApp Compatibility**: Native support for Ethereum-based applications.  

---

## **License**  
This project is licensed under the MIT License.  

--- 

**Note**: This implementation is for **authentication logging only**—sensitive data (e.g., passwords) must never be stored on-chain.
