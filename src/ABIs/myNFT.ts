export const myNFTABI = [
  {
    "inputs": [
        {
            "internalType": "contract IMinter1155",
            "name": "minter",
            "type": "address"
        },
        {
            "internalType": "uint256",
            "name": "tokenId",
            "type": "uint256"
        },
        {
            "internalType": "uint256",
            "name": "quantity",
            "type": "uint256"
        },
        {
            "internalType": "address[]",
            "name": "rewardsRecipients",
            "type": "address[]"
        },
        {
            "internalType": "bytes",
            "name": "minterArguments",
            "type": "bytes"
        }
    ],
    "name": "mint",
    "stateMutability": "payable",
    "type": "function",
    outputs: [],

},
] as const;

export const myNFTAddress = "0xeb334f3fbd826ce99f1e74d7d074fbe351f4157a";
// export const myNFTABI = [
//     {
//       stateMutability: "nonpayable",
//       type: "function",
//       inputs: [{ name: "to", type: "address" }],
//       name: "safeMint",
//       outputs: [],
//     },
//   ] as const;
  
//   export const myNFTAddress = "0x119Ea671030FBf79AB93b436D2E20af6ea469a19";


// const handleMints=async()=>{
//     writeContract({
        
//           address: tokenAddress,
//           abi: {
//             //@ts-ignore
//             outputs: [], 
//             type: "function",
//             constant: false,
//             gas: 2000000,
//             inputs: [
//               {
//                 internalType: "contract IMinter1155",
//                 name: "minter",
//                 type: "address",
//               },
//               {
//                 internalType: "uint256",
//                 name: "tokenId",
//                 type: "uint256",
//               },
//               {
//                 internalType: "uint256",
//                 name: "quantity",
//                 type: "uint256",
//               },
//               {
//                 internalType: "bytes",
//                 name: "minterArguments",
//                 type: "bytes",
//               },
//               {
//                 "internalType": "address",
//                 "name": "mintReferral",
//                 "type": "address"
//             }
//             ],
//             name: "mintWithRewards",
//             payable: false,
//             stateMutability: "payable",
//           },
//           args: [
//             tokenAddress,
//             tokenId, // tokenId
//             minterAccount, // minter
//             quantityToMint, // quantity
// '0x0000000000000000000000008879318091671ba1274e751f8cdef76bb37eb3ed00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000000d53756d6d657220436861696e2100000000000000000000000000000000000000',
//             ['0x337272A8811Ad39aAa34662224AF0022DdE0165B']
//           ],

// })
// }