// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

contract MedicalRecord {
    struct Record {
        string ipfsHash;
        address owner;
    }

    mapping(uint256 => Record) public records;
    uint256 public recordCount;

    event RecordAdded(uint256 indexed id, string ipfsHash, address owner);

    function addRecord(string memory _ipfsHash) public {
        records[recordCount] = Record(_ipfsHash, msg.sender);
        emit RecordAdded(recordCount, _ipfsHash, msg.sender);
        recordCount++;
    }
}
