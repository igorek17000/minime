import {Contract, ContractInterface, ethers, Signer} from "ethers"
import web3 from 'web3'

import testnetAi, {
    address as testnetAiAddress,
    productionAddress as productionAiAddress,
} from "../contracts/testnetAi"
import Web3 from "web3"
import {Account, AccountType, Status} from "use-wallet/dist/cjs/types";


export const isTestNet = false
const bscUrl = isTestNet
    ? "https://data-seed-prebsc-1-s1.binance.org:8545/"
    : "https://bsc-dataseed1.defibit.io/"
const bscChainId = isTestNet ? 97 : 56

const AIAddress = isTestNet ? testnetAiAddress : productionAiAddress

type TypeExternalProvider = any
type TypePropExternalProvider = TypeExternalProvider | null
type TypeContractInterface = ContractInterface
type TypeContract = Contract
type TypeProvider = any

export type TypeWallet = {
    account: Account | null;
    balance: string;
    chainId: number | undefined;
    connect: (connectorId: string) => Promise<void>;
    connector: string | null;
    connectors: object;
    error: Error | null;
    ethereum?: any;
    getBlockNumber?: () => number | null;
    isConnected: () => boolean;
    networkName: string | null;
    reset: () => void;
    status: Status;
    type: AccountType | null;
}

const createProvider = (provider: TypePropExternalProvider): TypeProvider => {
    return provider
        ? new ethers.providers.Web3Provider(provider)
        : new ethers.providers.JsonRpcProvider(bscUrl, bscChainId)
}

const createContract = (
    address: string,
    interfaceContract: TypeContractInterface,
    activeProvider: TypePropExternalProvider
): { contract: TypeContract, provider: TypeProvider } => {
    const provider = createProvider(activeProvider)
    const contract = new ethers.Contract(address, interfaceContract, provider)
    return {
        contract,
        provider
    }
}

const createSignerContract = (
    address: string,
    interfaceContract: TypeContractInterface,
    activeProvider: TypePropExternalProvider
): { signer: Signer, contract: TypeContract, signTransactions: TypeContract, provider: TypeProvider } => {
    const provider = createProvider(activeProvider)
    const signer = provider.getSigner()
    const contract = new ethers.Contract(address, interfaceContract, signer)
    const signTransactions = contract.connect(signer)
    return {signer, contract, signTransactions, provider}
}

export const getPepeAiPrice = async (
    address: string,
    activeProvider: TypePropExternalProvider
) => {
    try {
        // const {contract} = createSignerContract(PrisonAddress, testnetPrison, activeProvider)
        // const price = await contract.pepeAiPrice()
        // return ethers.utils.formatEther(price)
    } catch (e) {
        return e
    }
}