const ganache = require('ganache');
const Web3 = require('web3');

const assert =  require('assert');

const web3 = new Web3(ganache.provider());

const {abi, bytecode} = require('../compile');

let patientDatabase;
let accounts;

beforeEach(async () => {
    accounts =  await web3.eth.getAccounts();

    patientDatabase = await new web3.eth.Contract((abi))
    .deploy({data: bytecode})
    .send({from: accounts[0], gas: '3000000'});
});

describe('Patient Records Contract', () => {
    it('deploys a contract', () => {
        assert.ok(patientDatabase.options.address);
    });

    it("stores the doctor's address", async () => {
    const doctor =  await patientDatabase.methods.doctorAddress().call({
        from: accounts[0]
    });

    assert.equal(accounts[0], doctor);;
    });

    it("should add and retrieve vital signs", async () => {/*
        const timestamps = [1623219200, 16232195, 16232198, 16232201, 16232204];
        const heartRates = [70, 72, 68, 75, 71];
        const spO2Values = [98, 97, 99, 96, 98];
        const temperatures = [37, 37, 37, 36, 37];
        const gsrValues = [500, 490, 505, 510, 495];

        await patientDatabase.methods.addAll(timestamps, heartRates, spO2Values, temperatures, gsrValues).call({
            from: accounts[0],
        // }); */
        
        await patientDatabase.methods.add(1 , 2, 3, 4, 5).send({
            from: accounts[0],
            value: web3.utils.toWei('0.1', 'ether')
        });

        const patientRecords = await patientDatabase.methods.fetchAll().call({
            from: accounts[0],

        });

        console.log(patientRecords[1]);
        console.log(patientRecords.length);

        assert.equal(patientRecords.length, 5);
    });


});



