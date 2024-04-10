# Crowdfunding DApp with Zero-Knowledge Protocol
![Static Badge](https://img.shields.io/badge/-React-blue)
![Static Badge](https://img.shields.io/badge/-Solidity-gray)
![Static Badge](https://img.shields.io/badge/-HardHat-yellow)
![Static Badge](https://img.shields.io/badge/Vite.js-red)
![Static Badge](https://img.shields.io/badge/ZeroKnolage-darkblue)

## Overview

This project is a decentralized crowdfunding application (DApp) built on the Ethereum blockchain. It leverages the power of smart contracts written in **Solidity** and incorporates zero-knowledge proofs for enhanced privacy and security.

The proyect was develop for the EthGlobal hackathon were it gets to the semi-finals - https://ethglobal.com/showcase/crowdzero-qz1tw

My contribution was in the smart contranct and ZeroKnolage development 

### Features

- **Crowdfunding Campaigns**: Users can create and contribute to crowdfunding campaigns.
- **Privacy**: Zero-knowledge proofs ensure that sensitive data remains confidential.
- **Transparent**: All transactions are recorded on the Ethereum blockchain for transparency.

## Tech Stack

- **Frontend**:
  - **Vite**: A fast build tool for web development.
  - **React**: A popular JavaScript library for building user interfaces.
  - **Tailwind CSS**: A utility-first CSS framework.
  - **Web3.js**: A JavaScript library for interacting with Ethereum.
  - **Metamask**: Browser extension for Ethereum wallet management.

- **Smart Contracts**:
  - **Solidity**: The programming language for Ethereum smart contracts.
  - **Truffle**: Development framework for Ethereum.
  - **Hardhat**: Ethereum development environment.
  - **Zero-Knowledge Proofs**: Implement privacy features using zk-SNARKs or similar protocols.

## Getting Started

1. Clone this repository to your local machine:
   ```
   git clone https://github.com/your-username/crowdfunding-dapp.git
   cd crowdfunding-dapp
   ```

2. Install dependencies:
   ```
   yarn install
   ```

3. Configure your Ethereum wallet (e.g., Metamask) to connect to the desired network (Rinkeby, Mainnet, etc.).

4. Compile and deploy the smart contracts:
   ```
   truffle compile
   truffle migrate --network rinkeby
   ```

5. Start the frontend development server:
   ```
   yarn dev
   ```
6. Requirements for Initial hardhat
   
- Install [NodeJS](https://nodejs.org/en/)

## To run Hardhat locally

### 1. Install Dependencies:
`$ npm install` or `$ yarn`

### 2. Run tests
`$ npx hardhat test`

### 3. Start Hardhat node
`$ npx hardhat node`

### 4. Run deployment script
In a separate terminal execute:
`$ npx hardhat run ./scripts/deploy.js --network localhost`

### 5. Start frontend
`$ npm run start`

7. Access the DApp at [http://localhost:3000](http://localhost:3000).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
