const path = require("path");
const fs = require("fs");
const solc = require("solc");

const contractPath = path.resolve(__dirname, "contracts", "patientDatabase.sol");
const source = fs.readFileSync(contractPath, "utf8");

var input = {
    language: 'Solidity',
    sources: {
      'patientDatabase.sol' : {
          content: source
      }
  },
  settings: {
      outputSelection: {
          '*': {
              '*': [ '*' ]
          }
      }
  }
  };
  
  var output = JSON.parse(solc.compile(JSON.stringify(input)));
  
  exports.abi = output.contracts['patientDatabase.sol']['patientDatabase'].abi;
  exports.bytecode = output.contracts['patientDatabase.sol'] ['patientDatabase'].evm.bytecode.object;