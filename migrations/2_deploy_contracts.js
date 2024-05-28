const MedicalRecord = artifacts.require("Medicalrecord");

module.exports = function (deployer) {
  deployer.deploy(MedicalRecord);
};