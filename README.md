# patientDatabase Smart Contract

**Secure On-Chain Storage for Remote Patient Monitoring**

**Ethereum Solidity Contract v0.8.25**

---

## Overview

`patientDatabase` is a secure Ethereum smart contract designed for remote health monitoring systems. It enables authorized medical professionals to store and manage patient vital signs on the blockchain.

This contract is part of a multi-layer IoT and blockchain-based system integrating:

* IoT sensors (MAX30100, DS18B20, GSR)
* Arduino + NodeMCU for data transmission
* React.js frontend dashboard
* Ethereum blockchain storage
* Apache Cassandra (for performance comparison)

## Features

* **Role Restricted Access:** Only the assigned doctor can add, update, or fetch data.
* **Add Vital Signs:** Supports single and batch uploads.
* **Update Records:** Modify existing entries using an index ID.
* **Fetch Data:** Retrieve a specific range or all entries.
* **Ownership Transfer:** Change the doctor/manager address securely.

## VitalSigns Structure

```solidity
struct VitalSigns {
    uint timestamp;
    uint heartRate;
    uint spO2;
    uint temperature;
    uint gsrValue;
}
```

Each record stores:

* Unix timestamp
* Heart rate (BPM)
* SpO2 oxygen saturation (%)
* Temperature
* GSR skin conductance value

## Key Functions

### 1. Add a Single Entry

```solidity
function add(uint t, uint hr, uint spO2, uint temp, uint gsr) public restricted
```

### 2. Add Multiple Entries

```solidity
function addAll(uint[] memory t, uint[] memory hr, ...) public restricted
```

### 3. Update an Entry

```solidity
function update(uint id, uint t, uint hr, uint spO2, uint temp, uint gsr)
```

### 4. Fetch Range

```solidity
function fetch(uint start, uint end) public view returns(...)
```

### 5. Fetch All

```solidity
function fetchAll() public view returns(...)
```

### 6. Transfer Doctor Access

```solidity
function changeDoctor(address newDoctorAddress)
```

## Security

* Only authorized doctor can modify blockchain data.
* All entries stored immutably unless explicitly updated.
* Protected using Solidity `modifier restricted`.
* MIT Licensed contract.

## Tech Stack

| Layer          | Technology              |
| -------------- | ----------------------- |
| Smart Contract | Solidity 0.8.25         |
| Frontend       | React.js, Web3.js       |
| Blockchain     | Ethereum + MetaMask     |
| IoT Devices    | Arduino, NodeMCU        |
| Sensors        | MAX30100, DS18B20, GSR  |
| Cloud          | ThingSpeak IoT Platform |

## Deployment

**Using Remix IDE**

1. Open Remix: [https://remix.ethereum.org](https://remix.ethereum.org)
2. Paste the contract into a new file.
3. Compile using Solidity v0.8.25.
4. Deploy using Injected Provider (MetaMask).

**Using Hardhat/Truffle**

1. Place contract in `contracts/`
2. Run deployment scripts via CLI.

## Recommended GitHub Repository Names

### Frontend (React)

* `remote-patient-monitoring-frontend`
* `rpm-react-dashboard`

### Smart Contract

* `patient-monitoring-smart-contract`
* `rpm-ethereum-contract`

## License

This project is licensed under the **MIT License**.

## Contributors

* Raghul S
* Navaneeth Narayanan
* Isaac Shaju Varghese
