🏥 patientDatabase – Ethereum Smart Contract
Secure On-Chain Storage for Remote Patient Vital Signs

SPDX-License-Identifier: MIT
Solidity Version: ^0.8.25

📌 Overview

patientDatabase is a lightweight yet secure Ethereum smart contract designed for remote patient monitoring systems.

It stores real-time vital signs (Heart Rate, SpO₂, Temperature, GSR) on the blockchain through authorized access from a doctor (contract owner).

This smart contract is part of a larger capstone system integrating:

IoT sensors (MAX30100, DS18B20, GSR)

Arduino + NodeMCU for data transmission

React.js dashboard

Ethereum blockchain for immutable medical data

Big-data comparison with Apache Cassandra

🎯 Features
🔒 Access Control

Only the authorized doctor address (contract owner) can add, update, or fetch data.

📈 Add Vital Signs

Supports adding single entry (add) or multiple entries (addAll) at once.

🔄 Update Existing Records

Allows updating stored records via ID.

🔍 Fetch Data

fetch(start, end) — get a range of records

fetchAll() — get all patient records

👨‍⚕️ Change Doctor

Ownership can be transferred to another doctor securely.

🧱 Smart Contract Structure
VitalSigns Struct
struct VitalSigns {
    uint timestamp; 
    uint heartRate;
    uint spO2; 
    uint temperature; 
    uint gsrValue;
}


Each entry includes:

timestamp – Unix time sent from device

heartRate – BPM

spO2 – Oxygen saturation (%)

temperature – Body temperature

gsrValue – Stress/skin response reading

📜 Contract Functions
1. Add Data
function add(uint t, uint hr, uint spO2, uint temp, uint gsr) public restricted


Adds a single vital-sign record.

2. Add Multiple Data Points
function addAll(uint[] memory t, uint[] memory hr, ...)


Used when uploading multiple records collected over time.

3. Update an Entry
function update(uint id, uint t, uint hr, uint spO2, uint temp, uint gsr)


Updates an existing record by its ID.

4. Fetch a Range
function fetch(uint start, uint end) public view returns(...)


Returns arrays of:

timestamps

heart rate

spO₂

temperature

GSR values

5. Fetch All Records
function fetchAll() public view returns(...)


Convenience function to pull all patient data.

6. Change Doctor
function changeDoctor(address newDoctorAddress) public restricted


Transfers contract control to another doctor.

🔐 Security

Uses Solidity modifier restricted to limit write operations to doctor only.

Prevents unauthorized access to patient data.

All entries are immutable (besides direct update by doctor).

Follows MIT license and Solidity security best practices.

🛠️ Tech Stack
Layer	Technology
Smart Contract	Solidity ^0.8.25
Frontend	React.js + Web3.js
Blockchain	Ethereum (deploy via MetaMask)
IoT Layer	Arduino + NodeMCU
Sensors	MAX30100, DS18B20, GSR
Cloud	ThingSpeak (for visualization)
🚀 Deployment

You can deploy this contract using:

1. Remix IDE

Paste contract → Compile → Deploy using Injected Provider (MetaMask)

2. Hardhat / Truffle

Add the contract in contracts/ and deploy via scripts.

🔗 Project Integration

This contract is used in the Remote Patient Monitoring System, where:

IoT sensors collect health parameters

Data is transmitted via Wi-Fi

React UI displays live readings & analytics

Smart contract stores the data on-chain

Cassandra database used for performance comparison
