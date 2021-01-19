/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { StakedRewardsPoolTimedRate } from "./StakedRewardsPoolTimedRate";

export class StakedRewardsPoolTimedRateFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    rewardsToken: string,
    stakingToken: string,
    stakingTokenDecimals: BigNumberish,
    periodStartTime: BigNumberish,
    periodEndTime: BigNumberish,
    overrides?: Overrides
  ): Promise<StakedRewardsPoolTimedRate> {
    return super.deploy(
      rewardsToken,
      stakingToken,
      stakingTokenDecimals,
      periodStartTime,
      periodEndTime,
      overrides || {}
    ) as Promise<StakedRewardsPoolTimedRate>;
  }
  getDeployTransaction(
    rewardsToken: string,
    stakingToken: string,
    stakingTokenDecimals: BigNumberish,
    periodStartTime: BigNumberish,
    periodEndTime: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      rewardsToken,
      stakingToken,
      stakingTokenDecimals,
      periodStartTime,
      periodEndTime,
      overrides || {}
    );
  }
  attach(address: string): StakedRewardsPoolTimedRate {
    return super.attach(address) as StakedRewardsPoolTimedRate;
  }
  connect(signer: Signer): StakedRewardsPoolTimedRateFactory {
    return super.connect(signer) as StakedRewardsPoolTimedRateFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StakedRewardsPoolTimedRate {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as StakedRewardsPoolTimedRate;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "rewardsToken",
        type: "address"
      },
      {
        internalType: "contract IERC20",
        name: "stakingToken",
        type: "address"
      },
      {
        internalType: "uint8",
        name: "stakingTokenDecimals",
        type: "uint8"
      },
      {
        internalType: "uint256",
        name: "periodStartTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "periodEndTime",
        type: "uint256"
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "startTIme",
        type: "uint256"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256"
      }
    ],
    name: "NewPeriodSet",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "OwnershipTransferred",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Paused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Recovered",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "RewardAdded",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "RewardPaid",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Staked",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "Unpaused",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "Withdrawn",
    type: "event"
  },
  {
    inputs: [],
    name: "accruedRewardPerToken",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "addToRewardsAllocation",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "earned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "getReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "getRewardExact",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "hasEnded",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "hasStarted",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "lastTimeRewardApplicable",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "periodDuration",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "periodEndTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "periodStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "recoverUnsupportedERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardRate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "rewardsToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startTime",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256"
      }
    ],
    name: "setNewPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "stakingToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "stakingTokenDecimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "timeRemainingInPeriod",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "updateReward",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address"
      }
    ],
    name: "updateRewardFor",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256"
      }
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5060405161208f38038061208f833981810160405260a081101561003357600080fd5b5080516020820151604083015160608401516080909401516001600090815593949293919291859085908590610067610166565b600180546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001805460ff60a01b19169055604d60ff8216106101045760405162461bcd60e51b815260040180806020018281038252603a815260200180612055603a913960400191505060405180910390fd5b60038054600480546001600160a01b0319166001600160a01b03958616179055610100600160a81b03191661010094909316939093029190911760ff191660ff91909116908117909155600a0a600555600c91909155600b555061016a915050565b3390565b611edc806101796000396000f3fe608060405234801561001057600080fd5b50600436106101e45760003560e01c806380faa57d1161010f578063b9f7a7b5116100a2578063ecb70fb711610071578063ecb70fb714610412578063f2fde38b1461041a578063f36c0a7214610440578063f469519914610448576101e4565b8063b9f7a7b5146103dc578063bdf7acce146103fa578063d1af0c7d14610402578063e9fad8ee1461040a576101e4565b80638da5cb5b116100de5780638da5cb5b146103a7578063996f0932146103af578063a694fc3a146103b7578063b470aade146103d4576101e4565b806380faa57d1461033b57806381b72684146103435780638456cb591461036957806386a86d4114610371576101e4565b80633f4ba83a11610187578063715018a611610156578063715018a6146102ff57806372f702f314610307578063736d7c231461032b5780637b0a47ee14610333576101e4565b80633f4ba83a146102ad57806344691f7e146102b55780635c975abb146102d157806370a08231146102d9576101e4565b806318160ddd116101c357806318160ddd146102635780631d8df8f91461026b5780632e1a7d4d146102885780633d18b912146102a5576101e4565b80628cc262146101e957806306032dec146102215780630c2d27ac14610240575b600080fd5b61020f600480360360208110156101ff57600080fd5b50356001600160a01b0316610450565b60408051918252519081900360200190f35b61023e6004803603602081101561023757600080fd5b50356104c8565b005b61023e6004803603604081101561025657600080fd5b5080359060200135610524565b61020f6106e3565b61023e6004803603602081101561028157600080fd5b50356106ea565b61023e6004803603602081101561029e57600080fd5b5035610796565b61023e6107ea565b61023e610844565b6102bd6108a6565b604080519115158252519081900360200190f35b6102bd6108af565b61020f600480360360208110156102ef57600080fd5b50356001600160a01b03166108bf565b61023e6108da565b61030f61097c565b604080516001600160a01b039092168252519081900360200190f35b61020f61098b565b61020f6109f7565b61020f6109fd565b61023e6004803603602081101561035957600080fd5b50356001600160a01b0316610a20565b61023e610a74565b61023e6004803603606081101561038757600080fd5b506001600160a01b03813581169160208101359091169060400135610ad4565b61030f610b3c565b61020f610b4b565b61023e600480360360208110156103cd57600080fd5b5035610b51565b61020f610bff565b6103e4610c18565b6040805160ff9092168252519081900360200190f35b61020f610c21565b61030f610c27565b61023e610c3b565b6102bd610c8e565b61023e6004803603602081101561043057600080fd5b50356001600160a01b0316610c97565b61023e610d90565b61020f610deb565b6001600160a01b0381166000908152600260205260408120546104c2906104bc610478610e9c565b6001600160a01b0386166000908152600960205260409020546104b6906104a7906104a1610deb565b90610ea2565b6104b0886108bf565b90610eeb565b90610f44565b90610f86565b92915050565b6002600054141561050e576040805162461bcd60e51b815260206004820152601f6024820152600080516020611bd8833981519152604482015290519081900360640190fd5b600260005561051c81610fe0565b506001600055565b61052c6110fa565b6001546001600160a01b0390811691161461057c576040805162461bcd60e51b81526020600482018190526024820152600080516020611dd7833981519152604482015290519081900360640190fd5b6105846108a6565b15806105935750610593610c8e565b6105ce5760405162461bcd60e51b8152600401808060200182810382526043815260200180611bf86043913960600191505060405180910390fd5b81811161060c5760405162461bcd60e51b8152600401808060200182810382526042815260200180611cb96042913960600191505060405180910390fd5b42821161064a5760405162461bcd60e51b8152600401808060200182810382526051815260200180611d656051913960600191505060405180910390fd5b6106526110fe565b61065a610c8e565b15610669576000600d5561069a565b600061067f610676610bff565b600d5490610eeb565b905061069561068e8385610ea2565b8290610f44565b600d55505b600c829055600b819055604080518381526020810183905281517fa6b56f4ff0798bc2816f31bd924541079dbadafce7eaf7f72fe7127d5d0d8be1929181900390910190a15050565b6007545b90565b60026000541415610730576040805162461bcd60e51b815260206004820152601f6024820152600080516020611bd8833981519152604482015290519081900360640190fd5b600260005561073d6110fa565b6001546001600160a01b0390811691161461078d576040805162461bcd60e51b81526020600482018190526024820152600080516020611dd7833981519152604482015290519081900360640190fd5b61051c81611116565b600260005414156107dc576040805162461bcd60e51b815260206004820152601f6024820152600080516020611bd8833981519152604482015290519081900360640190fd5b600260005561051c816111a6565b60026000541415610830576040805162461bcd60e51b815260206004820152601f6024820152600080516020611bd8833981519152604482015290519081900360640190fd5b600260005561083d6112bf565b6001600055565b61084c6110fa565b6001546001600160a01b0390811691161461089c576040805162461bcd60e51b81526020600482018190526024820152600080516020611dd7833981519152604482015290519081900360640190fd5b6108a4611391565b565b600c5442101590565b600154600160a01b900460ff1690565b6001600160a01b031660009081526006602052604090205490565b6108e26110fa565b6001546001600160a01b03908116911614610932576040805162461bcd60e51b81526020600482018190526024820152600080516020611dd7833981519152604482015290519081900360640190fd5b6001546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600180546001600160a01b0319169055565b6004546001600160a01b031690565b60006109956108a6565b6109d05760405162461bcd60e51b8152600401808060200182810382526051815260200180611df76051913960600191505060405180910390fd5b6109d8610c8e565b156109e5575060006106e7565b600b546109f29042610ea2565b905090565b600d5490565b6000610a076108a6565b610a145750600a546106e7565b6109f242600b54611439565b60026000541415610a66576040805162461bcd60e51b815260206004820152601f6024820152600080516020611bd8833981519152604482015290519081900360640190fd5b600260005561051c8161144f565b610a7c6110fa565b6001546001600160a01b03908116911614610acc576040805162461bcd60e51b81526020600482018190526024820152600080516020611dd7833981519152604482015290519081900360640190fd5b6108a461148e565b610adc6110fa565b6001546001600160a01b03908116911614610b2c576040805162461bcd60e51b81526020600482018190526024820152600080516020611dd7833981519152604482015290519081900360640190fd5b610b3783838361151c565b505050565b6001546001600160a01b031690565b600b5490565b60026000541415610b97576040805162461bcd60e51b815260206004820152601f6024820152600080516020611bd8833981519152604482015290519081900360640190fd5b6002600055600154600160a01b900460ff1615610bee576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b61051c610bf96110fa565b8261161a565b60006109f2600c54600b54610ea290919063ffffffff16565b60035460ff1690565b600c5490565b60035461010090046001600160a01b031690565b60026000541415610c81576040805162461bcd60e51b815260206004820152601f6024820152600080516020611bd8833981519152604482015290519081900360640190fd5b600260005561083d61174a565b600b5442101590565b610c9f6110fa565b6001546001600160a01b03908116911614610cef576040805162461bcd60e51b81526020600482018190526024820152600080516020611dd7833981519152604482015290519081900360640190fd5b6001600160a01b038116610d345760405162461bcd60e51b8152600401808060200182810382526026815260200180611c3b6026913960400191505060405180910390fd5b6001546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b60026000541415610dd6576040805162461bcd60e51b815260206004820152601f6024820152600080516020611bd8833981519152604482015290519081900360640190fd5b600260005561083d610de66110fa565b61144f565b600080610df66106e3565b905080610e075750506008546106e7565b600a546000610e146109fd565b905081600c541115610e3d5780600c541115610e375760085493505050506106e7565b600c5491505b6000610e498284610ea2565b905080610e5e576008549450505050506106e7565b600d54600090610e6e9083610eeb565b9050610e92610e89866104b6610e82610e9c565b8590610eeb565b60085490610f86565b9550505050505090565b60055490565b6000610ee483836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f770000815250611787565b9392505050565b600082610efa575060006104c2565b82820282848281610f0757fe5b0414610ee45760405162461bcd60e51b8152600401808060200182810382526021815260200180611db66021913960400191505060405180910390fd5b6000610ee483836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f00000000000081525061181e565b600082820183811015610ee4576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b610feb610de66110fa565b600060026000610ff96110fa565b6001600160a01b03166001600160a01b031681526020019081526020016000205490508082111561105b5760405162461bcd60e51b8152600401808060200182810382526043815260200180611cfb6043913960600191505060405180910390fd5b6110658183610ea2565b600260006110716110fa565b6001600160a01b031681526020810191909152604001600020556110ae6110966110fa565b60035461010090046001600160a01b03169084611883565b6110b66110fa565b6001600160a01b03167fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486836040518082815260200191505060405180910390a25050565b3390565b611106610deb565b6008556111116109fd565b600a55565b61111e6110fe565b60006111286108a6565b15806111375750611137610c8e565b1561114b57611144610bff565b9050611156565b61115361098b565b90505b61116c6111638383610f44565b600d5490610f86565b600d556040805183815290517fde88a922e0d3b88b24e9623efeb464919c6bf9f66857a65e2bfcf2ce87a9433d9181900360200190a15050565b600081116111e55760405162461bcd60e51b8152600401808060200182810382526027815260200180611d3e6027913960400191505060405180910390fd5b6111f0610de66110fa565b6007546111fd9082610ea2565b60075561123081600660006112106110fa565b6001600160a01b0316815260208101919091526040016000205490610ea2565b6006600061123c6110fa565b6001600160a01b031681526020810191909152604001600020556112746112616110fa565b6004546001600160a01b03169083611883565b61127c6110fa565b6001600160a01b03167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5826040518082815260200191505060405180910390a250565b6112ca610de66110fa565b6000600260006112d86110fa565b6001600160a01b031681526020810191909152604001600020549050801561138e576000600260006113086110fa565b6001600160a01b0316815260208101919091526040016000205561134561132d6110fa565b60035461010090046001600160a01b03169083611883565b61134d6110fa565b6001600160a01b03167fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486826040518082815260200191505060405180910390a25b50565b600154600160a01b900460ff166113e6576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b6001805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa61141c6110fa565b604080516001600160a01b039092168252519081900360200190a1565b60008183106114485781610ee4565b5090919050565b6114576110fe565b61146081610450565b6001600160a01b03909116600090815260026020908152604080832093909355600854600990915291902055565b600154600160a01b900460ff16156114e0576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6001805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861141c6110fa565b6004546001600160a01b03848116911614156115695760405162461bcd60e51b8152600401808060200182810382526034815260200180611ba46034913960400191505060405180910390fd5b6003546001600160a01b038481166101009092041614156115bb5760405162461bcd60e51b8152600401808060200182810382526034815260200180611c856034913960400191505060405180910390fd5b6115cf6001600160a01b0384168383611883565b604080516001600160a01b038581168252602082018490528251908516927ffff3b3844276f57024e0b42afec1a37f75db36511e43819a4f2a63ab7862b648928290030190a2505050565b6001600160a01b03821661165f5760405162461bcd60e51b8152600401808060200182810382526035815260200180611e486035913960400191505060405180910390fd5b6000811161169e5760405162461bcd60e51b8152600401808060200182810382526024815260200180611c616024913960400191505060405180910390fd5b6116a78261144f565b6007546116b49082610f86565b6007556001600160a01b0382166000908152600660205260409020546116da9082610f86565b6001600160a01b0380841660009081526006602052604090209190915560045461170791168330846118d5565b6040805182815290516001600160a01b038416917f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d919081900360200190a25050565b61177f600660006117596110fa565b6001600160a01b03166001600160a01b03168152602001908152602001600020546111a6565b6108a46112bf565b600081848411156118165760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156117db5781810151838201526020016117c3565b50505050905090810190601f1680156118085780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b6000818361186d5760405162461bcd60e51b81526020600482018181528351602484015283519092839260449091019190850190808383600083156117db5781810151838201526020016117c3565b50600083858161187957fe5b0495945050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052610b37908490611935565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b17905261192f908590611935565b50505050565b606061198a826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166119e69092919063ffffffff16565b805190915015610b37578080602001905160208110156119a957600080fd5b5051610b375760405162461bcd60e51b815260040180806020018281038252602a815260200180611e7d602a913960400191505060405180910390fd5b60606119f584846000856119fd565b949350505050565b6060611a0885611b6a565b611a59576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611a985780518252601f199092019160209182019101611a79565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611afa576040519150601f19603f3d011682016040523d82523d6000602084013e611aff565b606091505b50915091508115611b135791506119f59050565b805115611b235780518082602001fd5b60405162461bcd60e51b81526020600482018181528651602484015286518793919283926044019190850190808383600083156117db5781810151838201526020016117c3565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906119f557505015159291505056fe5374616b656452657761726473506f6f6c3a2063616e6e6f7420776974686472617720746865207374616b696e6720746f6b656e5265656e7472616e637947756172643a207265656e7472616e742063616c6c005374616b656452657761726473506f6f6c54696d6564526174653a2063616e6e6f74206368616e676520616e206f6e676f696e67207374616b696e6720706572696f644f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573735374616b656452657761726473506f6f6c3a2063616e6e6f74207374616b65207a65726f5374616b656452657761726473506f6f6c3a2063616e6e6f7420776974686472617720746865207265776172647320746f6b656e5374616b656452657761726473506f6f6c54696d6564526174653a20656e6454696d65206d7573742062652067726561746572207468616e20737461727454696d655374616b656452657761726473506f6f6c3a2063616e206e6f742072656465656d206d6f72652072657761726473207468616e20796f752068617665206561726e65645374616b656452657761726473506f6f6c3a2063616e6e6f74207769746864726177207a65726f5374616b656452657761726473506f6f6c54696d6564526174653a20737461727454696d65206d7573742062652067726561746572207468616e207468652063757272656e7420626c6f636b2074696d65536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725374616b656452657761726473506f6f6c54696d6564526174653a2063757272656e74207265776172647320646973747269627574696f6e20706572696f6420686173206e6f742079657420626567756e5374616b656452657761726473506f6f6c3a2063616e6e6f74207374616b652066726f6d20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a26469706673582212204bc4b567aba50ed8ab0e4759e4c3e2e7b9b9fc1c1ac05b863ebb673a590c219864736f6c634300070300335374616b656452657761726473506f6f6c3a207374616b696e6720746f6b656e206861732066617220746f6f206d616e7920646563696d616c73";