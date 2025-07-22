const hre = require("hardhat");

async function main() {
const MFAAuthLogger = await hre.ethers.getContractFactory("MFAAuthLogger");
const contract = await MFAAuthLogger.deploy();

await contract.waitForDeployment(); // 🔄 replaces .deployed()

const address = await contract.getAddress(); // ✅ Ethers v6 way to get address
console.log("✅ MFAAuthLogger deployed to:", address);
}

main().catch((error) => {
console.error(error);
process.exitCode = 1;
});