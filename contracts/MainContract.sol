pragma solidity >=0.4.0 <0.9.0;

contract KYC{
    struct KYC_req{
        string customerId;
        string adminId;
        string ipfsHash;
        uint timestamp;
    }

    mapping(string=>KYC_req) public approvedKYCs;
    
    event KYC_recorded(string customerId,string adminId,string ipfsHash,uint timestamp);
   
    function storeApprovedKYC(string memory customerId,string memory adminId,string memory ipfsHash) public {
         approvedKYCs[customerId]=KYC_req({
            customerId:customerId,
            adminId:adminId,
            ipfsHash:ipfsHash,
            timestamp:block.timestamp
         });

         emit KYC_recorded(customerId,adminId,ipfsHash,block.timestamp);
    }

   modifier isPresent(string memory customerId){
      require(bytes(approvedKYCs[customerId].ipfsHash).length>0, "NO KYC is present for this User");
      _;
   }

    function getKYC(string memory customerId) public view isPresent(customerId) returns (string memory adminId,string memory ipfsHash,uint timestamp){
             KYC_req memory KYC=approvedKYCs[customerId];
             return (KYC.adminId,KYC.ipfsHash,KYC.timestamp);
    }
}