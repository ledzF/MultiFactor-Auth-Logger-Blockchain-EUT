const hre = require("hardhat");

async function main() {
  const MFAAuthLogger = await hre.ethers.getContractFactory("MFAAuthLogger");
  const contract = await MFAAuthLogger.deploy();

  await contract.deployed();

  console.log("✅ MFAAuthLogger deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
