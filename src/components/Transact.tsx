import { useAccount } from "wagmi";
import { useWriteContracts } from "wagmi/experimental";
import { useState } from "react";

import { myNFTABI, myNFTAddress } from "@/ABIs/myNFT";
import { ethers } from "ethers";

  let encodedBytes='0x0000000000000000000000008879318091671ba1274e751f8cdef76bb37eb3ed00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000d53756d6d657220436861696e2100000000000000000000000000000000000000'
// example batch transaction, making two mint NFT calls
export function Transact() {
  const account = useAccount();
  const [id, setId] = useState<string | undefined>(undefined);
  const { writeContracts } = useWriteContracts({
    mutation: { onSuccess: (id) => setId(id) },
  });



  const encodeData=async()=>{
    const mintArguments = {
      mintToAddress: "0x8879318091671ba1274e751f8cdef76bb37eb3ed",
      quantityToMint: 1,
      mintComment: "Summer Chain!",
    };
 
    // Define the types and values in the same order as the struct definition
    const types = ["address", "uint256", "string"];
    const values = [
      mintArguments.mintToAddress,
      mintArguments.quantityToMint,
      mintArguments.mintComment
    ];
    
    // Encode the parameters using ethers.js
    const encodedData = ethers.utils.defaultAbiCoder.encode(types, values);
    console.log(encodedData);
  }
  return (
    <div>
      <h2>Transact</h2>

      <button onClick={encodeData}>encodeData</button> 

      <div>
        <button
          id="mint-button"
          onClick={() => {
            writeContracts({
              contracts: [
                {
                  address: myNFTAddress,
                  abi: myNFTABI,
                  functionName: "mint",
                  args: ["0xeb334f3fbd826ce99f1e74d7d074fbe351f4157a", 12, 1, ["0x8879318091671ba1274e751f8cdef76bb37eb3ed"],encodedBytes ]
                }
              ],
            });
          }}
        >
          Mint
        </button>
      </div>
    </div>
  );
}