// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MFAAuthLogger {
    struct Log {
        string userId;
        string action;
        uint timestamp;
    }

    Log[] public logs;

    function addLog(string memory userId, string memory action) public {
        logs.push(Log(userId, action, block.timestamp));
    }

    function getLogs() public view returns (Log[] memory) {
        return logs;
    }
}
