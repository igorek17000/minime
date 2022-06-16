import type {NextPage} from 'next'
import {useEffect, useState} from "react"
import AOS from 'aos'
import "aos/dist/aos.css"
import {Drop, Faq, Goal, Footer, Team, Pro, Qst, Char, About} from '../components/modules/'
import Intro from "../components/modules/Intro";
import {useWallet} from "use-wallet";
import {mintNft, testContract} from "../blockchain/utils";
import {MerkleTree} from 'merkletreejs'
import keccak256 from 'keccak256'
import {getWhitelist} from "../api";


function getRandomInt(min: number, max: number) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min)) + min
}

const whitelistAddresses = [
    '0xa8e3b0a98474b4fcdb0a6e3f2551a8d033e1defa',
    '0aa8e3b0a98474b4fadb0a6e3f2551a8d033e1de1a',
    '02a8q3b0a98474b4fadb0a1e3f2151a8dq33q1de1a',
]

const Home: NextPage = () => {
    const wallet = useWallet()
    const [statusWallet, setStatusWallet] = useState('')
    const [statusTree, setStatusTree] = useState('')
    const [statusMint, setStatusMint] = useState('')
    const [valueAmountNft, setValueAmountNft] = useState('')

    useEffect(() => {
        void AOS.init()
        const colors = ['#921111', '#f9b112', '#209211', '#92115d'];
        const randomNumber = getRandomInt(0, 4)
        document.body.style.setProperty('--main-color', colors[randomNumber]);
    }, [])

    useEffect(() => {
        setStatusWallet(String(wallet.account))
    }, [wallet.account])

    const connectWallet = async (method: 'walletconnect' | 'injected') => {
        console.log('worked click')
        const result = await wallet.connect(method)
        console.log('result auth', result)
        console.log('wallet.account', wallet.account)
    }

    const checkAccess = async () => {
        setStatusTree('Loading...')
        if (!wallet.account) {
            return
        }
        const whitelist: { address: string, index: number }[] = await getWhitelist()
        const leaves = whitelist.map(item => item.address.toLowerCase()).map(x => keccak256(x))
        const tree = new MerkleTree(leaves, keccak256, {sortPairs: true})
        const root = tree.getRoot().toString('hex')
        // @ts-ignore
        const leaf: string | Buffer = keccak256(wallet.account.toLowerCase())
        const proof = tree.getProof(leaf)
        const verify = tree.verify(proof, leaf, root)
        setStatusTree(verify ? 'YES' : 'NO')

        return {proof, checked: verify}
    }

    const onMintNft = async () => {
        setStatusMint('')
        if (!wallet.account || +valueAmountNft === 0) {
            return
        }
        // @ts-ignore
        let {proof} = await checkAccess()

        console.log('proof', proof)

        if (proof?.length === 0) {
            setStatusMint('This address is not on the whitelist')
            return
        }

        proof = proof.map(({data}: any) => data)
        const result = await mintNft(wallet.account, wallet.ethereum, proof, +valueAmountNft)
        if (result?.hash) {
            setStatusMint('Success')
        } else {
            setStatusMint('Error')
        }
        console.log('result mint', result)
    }

    const onChangeAmountNft = (e: any) => {
        const value = e.target.value
        if (value >= 0 && value < 11) {
            setValueAmountNft(value)
        }
    }


    return (
        <>
            {/*<div className="statuses">*/}
            {/*    <span className="status">Wallet: <span className='status-value'>{statusWallet}</span></span>*/}
            {/*    <span className="status">Tree whitelist:  <span className='status-value'>{statusTree}</span></span>*/}
            {/*    <span className="status">Mint:  <span className='status-value'>{statusMint}</span></span>*/}
            {/*</div>*/}
            {/*<div className="temporary-wrapper">*/}
            {/*    <button className='temporary-button' onClick={() => connectWallet('injected')}>Metamask</button>*/}
            {/*    <button className='temporary-button' onClick={() => connectWallet('walletconnect')}>Wallet Connect</button>*/}
            {/*    <button className='temporary-button' onClick={checkAccess}>Check address on whitelist</button>*/}
            {/*    <button className='temporary-button' onClick={onMintNft}>Mint</button>*/}
            {/*    <input value={valueAmountNft} onChange={onChangeAmountNft} type="number"/>*/}
            {/*</div>*/}
            <div className="rootst"/>
            <div className="wrap">
                <Intro/>
                <Drop/>
                <About/>
                <Char/>
                <Pro/>
                <Team/>
                <Goal/>
                <Faq/>
                <Qst/>
                <Footer/>
            </div>
        </>
    )
}

export default Home
