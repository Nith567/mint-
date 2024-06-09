import { useAccount } from "wagmi";
import { useWriteContracts } from "wagmi/experimental";
import { useState } from "react";

import { myNFTABI, myNFTAddress } from "@/ABIs/myNFT";
import { ethers } from "ethers";

  let encodedBytes='0x000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000600000000000000000000000008879318091671ba1274e751f8cdef76bb37eb3ed000000000000000000000000000000000000000000000000000000000000000d53756d6d657220436861696e2100000000000000000000000000000000000000'

export function Transact() {
  const account = useAccount();
  const [id, setId] = useState<string | undefined>(undefined);
  const { writeContracts } = useWriteContracts({
    mutation: { onSuccess: (id) => setId(id) },
  });

  const encodeData=async()=>{
    const mintArguments = {
      quantityToMint: 1,
      mintComment: "Summer Chain!",
      mintReferral: "0x8879318091671ba1274e751f8cdef76bb37eb3ed"
    };
 
 
    // Define the types and values in the same order as the struct definition
    const types = ["uint256", "string", "address"];
    const values = [
      mintArguments.quantityToMint,
      mintArguments.mintComment,
      mintArguments.mintReferral
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
                  // args: ["0xeb334f3fbd826ce99f1e74d7d074fbe351f4157a", 1, 1, ["0x8879318091671ba1274e751f8cdef76bb37eb3ed"],encodedBytes ]
                  args: [
                    "0xeb334f3fbd826ce99f1e74d7d074fbe351f4157a", // minter
                    1, // tokenId
                    1, // quantity
                    ["0x8879318091671ba1274e751f8cdef76bb37eb3ed"], // rewardsRecipients
                    encodedBytes // minterArguments
                  ],
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
