https://sepolia.etherscan.io/address/0x6c176eedd0325d6ddfcdcf2cb1e6fe440f26115a

FarmerRole: 0xC5A29C5608041A2A94417E85358FB8bf61A036A1

DistributorRole: 0xd5Ac2A08562ca9B28cfAE81B7D99819A3f6345cc

RetailerRole: 0xde45B08968262c75B44AF980a349cC8b24AFf86D

ConsumerRole: 0xb81D2c84f2F80cb39Bc650eC7414AD9DD30A7243

SupplyChain: 0x580D057BFf421494615dA26547a0e773578e41d2


## Contract Address & Transaction Details
Contract has been deployed on sepolia test network:
[0x61f6e2cca26d016272f56525d20ea6740558265c](https://sepolia.etherscan.io/address/0x6c176eedd0325d6ddfcdcf2cb1e6fe440f26115a)
Transaction Details:
[0x1195c69cfe27ebdf4d8aba99603a8d6b808d53677fdbf84202e6fb1772b119cc](https://sepolia.etherscan.io/tx/0x7572f75ce797288f233184b4a069dcb611c0e0df1b77a98f45503b9dfb751de9)


## Libraries
* Truffle : `v5.2.5`: A development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM), aiming to make life as a developer easier
* Web3.js: `v1.2.1`: A collection of libraries that allow you to interact with a local or remote ethereum node using HTTP, IPC or WebSocket.
* IPFS Not used!

## UML Diagrams
### Activity Diagram
![Activity diagram.](/uml-pictures/activity.png)

### Sequence Diagram
![Sequence diagram.](/uml-pictures/sequence.png)

### State Diagram
![State diagram.](/uml-pictures/state.png?raw=true)

### Class (Data Model) Diagram
![Model diagram.](/uml-pictures/model.png?raw=true)


## Docs
### Requirements
1. ganache-cli
2. truffle
3. metamask
4. infura account

## How to Run Project
```sh
npm i -g ganache && cd project-6 && npm i
```

Finally, update `infuraKey` and `mnemonic` constants inside the `truffle.js` config file according to your own values.
1. `mnemonic` is is the recovery text that metamask gave you on your initial metamask setup.
2. `infuraKey` can be obtained from infura.io site by creating a new project.

If you run in network development, pay attetion with ganache info connections (Host and port)


### Usage
To start developing and making changes on the contract, run:
```sh
npx truffle compile
```
and:
```sh
npx truffle test
```
to test your changes.

A user interface is also available and can be accessed at `http://localhost:3000` after you initiated the local server:
```sh
npm run dev
```

When you are done and ready to deploy, deploy to the sepolia test network:
```sh
npx truffle migrate --network sepolia
```


