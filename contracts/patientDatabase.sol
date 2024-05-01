
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

contract patientDatabase {
    struct VitalSigns {
        uint timestamp; 
        uint heartRate;
        uint spO2; 
        uint temperature; 
        uint gsrValue;
    }

    address public doctorAddress; 
    mapping (uint => VitalSigns) private v;
    uint public count;

    modifier restricted() {
        require(msg.sender == doctorAddress, "Only the doctor can perform this operation");
        _;
    }

    constructor() {
        doctorAddress = msg.sender;
        count=0;
    }

    function add(uint t, uint hr, uint spO2, uint temp, uint gsr) public restricted{
        v[count] = VitalSigns(t, hr, spO2, temp, gsr);
        count++;
    }
    function addAll(uint[] memory t, uint[] memory hr, uint[] memory spO2, uint[] memory temp, uint[] memory gsr) public restricted{
        uint len = t.length;

        for(uint i=0; i<len; i++)
                add(t[i], hr[i], spO2[i], temp[i], gsr[i]);
    }

    function update(uint id, uint t, uint hr, uint spO2, uint temp, uint gsr)public restricted{
        v[id] = VitalSigns(t, hr, spO2, temp, gsr);
    }

    function fetch(uint start, uint end) public restricted view returns (uint[] memory, uint[] memory, uint[] memory, uint[] memory, uint[] memory){

        if(end>count)
            end = count;

        uint len = end - start;

        uint[] memory t = new uint[](len);
        uint[] memory hr = new uint[](len);
        uint[] memory spO2 = new uint[](len);
        uint[] memory temp = new uint[](len);
        uint[] memory gsr = new uint[](len);


        for (uint i = uint(start); i < uint(end); i++) {
            t[i] = v[i].timestamp; 
            hr[i] = v[i].heartRate; 
            spO2[i] = v[i].spO2; 
            temp[i] = v[i].temperature; 
            gsr[i] = v[i].gsrValue; 
        }
        return (t, hr, spO2, temp, gsr);
    }

    function fetchAll() public restricted view returns (uint[] memory, uint[] memory, uint[] memory, uint[] memory, uint[] memory){
        return fetch(0, count);
    }

    function changeDoctor(address newDoctorAddress) public restricted {
        doctorAddress = newDoctorAddress;
    }
}
