/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Signer, BigNumberish } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import { MockStakedRewardsPool } from "./MockStakedRewardsPool";

export class MockStakedRewardsPoolFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    rewardsToken: string,
    stakingToken: string,
    stakingTokenDecimals: BigNumberish,
    overrides?: Overrides
  ): Promise<MockStakedRewardsPool> {
    return super.deploy(
      rewardsToken,
      stakingToken,
      stakingTokenDecimals,
      overrides || {}
    ) as Promise<MockStakedRewardsPool>;
  }
  getDeployTransaction(
    rewardsToken: string,
    stakingToken: string,
    stakingTokenDecimals: BigNumberish,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      rewardsToken,
      stakingToken,
      stakingTokenDecimals,
      overrides || {}
    );
  }
  attach(address: string): MockStakedRewardsPool {
    return super.attach(address) as MockStakedRewardsPool;
  }
  connect(signer: Signer): MockStakedRewardsPoolFactory {
    return super.connect(signer) as MockStakedRewardsPoolFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockStakedRewardsPool {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockStakedRewardsPool;
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
      }
    ],
    stateMutability: "nonpayable",
    type: "constructor"
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
        name: "",
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
    stateMutability: "pure",
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
  "0x608060405234801561001057600080fd5b506040516117913803806117918339818101604052606081101561003357600080fd5b50805160208201516040909201516001600090815591929183908390839061005961014f565b600180546001600160a01b0319166001600160a01b038316908117909155604051919250906000907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a3506001805460ff60a01b19169055604d60ff8216106100f65760405162461bcd60e51b815260040180806020018281038252603a815260200180611757603a913960400191505060405180910390fd5b60038054600480546001600160a01b039586166001600160a01b031990911617905560ff90921660ff199390941661010002610100600160a81b0319909216919091179190911682179055600a0a600555505050610153565b3390565b6115f5806101626000396000f3fe608060405234801561001057600080fd5b506004361061012b5760003560e01c806381b72684116100ad578063b9f7a7b511610071578063b9f7a7b5146102b3578063d1af0c7d146102d1578063e9fad8ee146102d9578063f2fde38b146102e1578063f36c0a72146103075761012b565b806381b726841461022a5780638456cb591461025057806386a86d41146102585780638da5cb5b1461028e578063a694fc3a146102965761012b565b80633f4ba83a116100f45780633f4ba83a146101b45780635c975abb146101bc57806370a08231146101d8578063715018a6146101fe57806372f702f3146102065761012b565b80628cc2621461013057806306032dec1461016857806318160ddd146101875780632e1a7d4d1461018f5780633d18b912146101ac575b600080fd5b6101566004803603602081101561014657600080fd5b50356001600160a01b031661030f565b60408051918252519081900360200190f35b6101856004803603602081101561017e57600080fd5b5035610315565b005b610156610371565b610185600480360360208110156101a557600080fd5b5035610377565b6101856103cb565b610185610425565b6101c4610487565b604080519115158252519081900360200190f35b610156600480360360208110156101ee57600080fd5b50356001600160a01b0316610497565b6101856104b2565b61020e610554565b604080516001600160a01b039092168252519081900360200190f35b6101856004803603602081101561024057600080fd5b50356001600160a01b0316610563565b6101856105b7565b6101856004803603606081101561026e57600080fd5b506001600160a01b03813581169160208101359091169060400135610617565b61020e61067f565b610185600480360360208110156102ac57600080fd5b503561068e565b6102bb61073c565b6040805160ff9092168252519081900360200190f35b61020e610745565b610185610759565b610185600480360360208110156102f757600080fd5b50356001600160a01b03166107ac565b6101856108a5565b50600090565b6002600054141561035b576040805162461bcd60e51b815260206004820152601f6024820152600080516020611439833981519152604482015290519081900360640190fd5b600260005561036981610900565b506001600055565b60075490565b600260005414156103bd576040805162461bcd60e51b815260206004820152601f6024820152600080516020611439833981519152604482015290519081900360640190fd5b600260005561036981610a1a565b60026000541415610411576040805162461bcd60e51b815260206004820152601f6024820152600080516020611439833981519152604482015290519081900360640190fd5b600260005561041e610b33565b6001600055565b61042d610c05565b6001546001600160a01b0390811691161461047d576040805162461bcd60e51b81526020600482018190526024820152600080516020611541833981519152604482015290519081900360640190fd5b610485610c09565b565b600154600160a01b900460ff1690565b6001600160a01b031660009081526006602052604090205490565b6104ba610c05565b6001546001600160a01b0390811691161461050a576040805162461bcd60e51b81526020600482018190526024820152600080516020611541833981519152604482015290519081900360640190fd5b6001546040516000916001600160a01b0316907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600180546001600160a01b0319169055565b6004546001600160a01b031690565b600260005414156105a9576040805162461bcd60e51b815260206004820152601f6024820152600080516020611439833981519152604482015290519081900360640190fd5b600260005561036981610c02565b6105bf610c05565b6001546001600160a01b0390811691161461060f576040805162461bcd60e51b81526020600482018190526024820152600080516020611541833981519152604482015290519081900360640190fd5b610485610cb1565b61061f610c05565b6001546001600160a01b0390811691161461066f576040805162461bcd60e51b81526020600482018190526024820152600080516020611541833981519152604482015290519081900360640190fd5b61067a838383610d3f565b505050565b6001546001600160a01b031690565b600260005414156106d4576040805162461bcd60e51b815260206004820152601f6024820152600080516020611439833981519152604482015290519081900360640190fd5b6002600055600154600160a01b900460ff161561072b576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b610369610736610c05565b82610e3d565b60035460ff1690565b60035461010090046001600160a01b031690565b6002600054141561079f576040805162461bcd60e51b815260206004820152601f6024820152600080516020611439833981519152604482015290519081900360640190fd5b600260005561041e610f6d565b6107b4610c05565b6001546001600160a01b03908116911614610804576040805162461bcd60e51b81526020600482018190526024820152600080516020611541833981519152604482015290519081900360640190fd5b6001600160a01b0381166108495760405162461bcd60e51b81526004018080602001828103825260268152602001806114596026913960400191505060405180910390fd5b6001546040516001600160a01b038084169216907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a3600180546001600160a01b0319166001600160a01b0392909216919091179055565b600260005414156108eb576040805162461bcd60e51b815260206004820152601f6024820152600080516020611439833981519152604482015290519081900360640190fd5b600260005561041e6108fb610c05565b610c02565b61090b6108fb610c05565b600060026000610919610c05565b6001600160a01b03166001600160a01b031681526020019081526020016000205490508082111561097b5760405162461bcd60e51b81526004018080602001828103825260438152602001806114d76043913960600191505060405180910390fd5b6109858183610faa565b60026000610991610c05565b6001600160a01b031681526020810191909152604001600020556109ce6109b6610c05565b60035461010090046001600160a01b03169084610ff3565b6109d6610c05565b6001600160a01b03167fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486836040518082815260200191505060405180910390a25050565b60008111610a595760405162461bcd60e51b815260040180806020018281038252602781526020018061151a6027913960400191505060405180910390fd5b610a646108fb610c05565b600754610a719082610faa565b600755610aa48160066000610a84610c05565b6001600160a01b0316815260208101919091526040016000205490610faa565b60066000610ab0610c05565b6001600160a01b03168152602081019190915260400160002055610ae8610ad5610c05565b6004546001600160a01b03169083610ff3565b610af0610c05565b6001600160a01b03167f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d5826040518082815260200191505060405180910390a250565b610b3e6108fb610c05565b600060026000610b4c610c05565b6001600160a01b0316815260208101919091526040016000205490508015610c0257600060026000610b7c610c05565b6001600160a01b03168152602081019190915260400160002055610bb9610ba1610c05565b60035461010090046001600160a01b03169083610ff3565b610bc1610c05565b6001600160a01b03167fe2403640ba68fed3a2f88b7557551d1993f84b99bb10ff833f0cf8db0c5e0486826040518082815260200191505060405180910390a25b50565b3390565b600154600160a01b900460ff16610c5e576040805162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b604482015290519081900360640190fd5b6001805460ff60a01b191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa610c94610c05565b604080516001600160a01b039092168252519081900360200190a1565b600154600160a01b900460ff1615610d03576040805162461bcd60e51b815260206004820152601060248201526f14185d5cd8589b194e881c185d5cd95960821b604482015290519081900360640190fd5b6001805460ff60a01b1916600160a01b1790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610c94610c05565b6004546001600160a01b0384811691161415610d8c5760405162461bcd60e51b81526004018080602001828103825260348152602001806114056034913960400191505060405180910390fd5b6003546001600160a01b03848116610100909204161415610dde5760405162461bcd60e51b81526004018080602001828103825260348152602001806114a36034913960400191505060405180910390fd5b610df26001600160a01b0384168383610ff3565b604080516001600160a01b038581168252602082018490528251908516927ffff3b3844276f57024e0b42afec1a37f75db36511e43819a4f2a63ab7862b648928290030190a2505050565b6001600160a01b038216610e825760405162461bcd60e51b81526004018080602001828103825260358152602001806115616035913960400191505060405180910390fd5b60008111610ec15760405162461bcd60e51b815260040180806020018281038252602481526020018061147f6024913960400191505060405180910390fd5b610eca82610c02565b600754610ed79082611045565b6007556001600160a01b038216600090815260066020526040902054610efd9082611045565b6001600160a01b03808416600090815260066020526040902091909155600454610f2a911683308461109f565b6040805182815290516001600160a01b038416917f9e71bc8eea02a63969f509818f2dafb9254532904319f9dbda79b67bd34a5f3d919081900360200190a25050565b610fa260066000610f7c610c05565b6001600160a01b03166001600160a01b0316815260200190815260200160002054610a1a565b610485610b33565b6000610fec83836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f7700008152506110ff565b9392505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261067a908490611196565b600082820183811015610fec576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03166323b872dd60e01b1790526110f9908590611196565b50505050565b6000818484111561118e5760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561115357818101518382015260200161113b565b50505050905090810190601f1680156111805780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050900390565b60606111eb826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166112479092919063ffffffff16565b80519091501561067a5780806020019051602081101561120a57600080fd5b505161067a5760405162461bcd60e51b815260040180806020018281038252602a815260200180611596602a913960400191505060405180910390fd5b6060611256848460008561125e565b949350505050565b6060611269856113cb565b6112ba576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b602083106112f95780518252601f1990920191602091820191016112da565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461135b576040519150601f19603f3d011682016040523d82523d6000602084013e611360565b606091505b509150915081156113745791506112569050565b8051156113845780518082602001fd5b60405162461bcd60e51b815260206004820181815286516024840152865187939192839260440191908501908083836000831561115357818101518382015260200161113b565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a47081811480159061125657505015159291505056fe5374616b656452657761726473506f6f6c3a2063616e6e6f7420776974686472617720746865207374616b696e6720746f6b656e5265656e7472616e637947756172643a207265656e7472616e742063616c6c004f776e61626c653a206e6577206f776e657220697320746865207a65726f20616464726573735374616b656452657761726473506f6f6c3a2063616e6e6f74207374616b65207a65726f5374616b656452657761726473506f6f6c3a2063616e6e6f7420776974686472617720746865207265776172647320746f6b656e5374616b656452657761726473506f6f6c3a2063616e206e6f742072656465656d206d6f72652072657761726473207468616e20796f752068617665206561726e65645374616b656452657761726473506f6f6c3a2063616e6e6f74207769746864726177207a65726f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65725374616b656452657761726473506f6f6c3a2063616e6e6f74207374616b652066726f6d20746865207a65726f20616464726573735361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a2646970667358221220772e5825f12d8076f5be58f3f1817f7bc894df0d9816d78a451f7f75e5d56a7c64736f6c634300070300335374616b656452657761726473506f6f6c3a207374616b696e6720746f6b656e206861732066617220746f6f206d616e7920646563696d616c73";