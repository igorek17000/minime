import '../styles/globals.scss'
import 'swiper/scss'
import type {AppProps} from 'next/app'
import Head from "next/head"

import {
    BscConnector,
    UserRejectedRequestError,
} from "@binance-chain/bsc-connector"
import {UseWalletProvider, ConnectionRejectedError} from "use-wallet"
import {isTestNet} from '../blockchain/utils'
import {Provider} from "react-redux";
import store from '../redux/store'
import { createWrapper } from 'next-redux-wrapper'


const bscUrl = isTestNet
    ? "https://data-seed-prebsc-1-s1.binance.org:8545/"
    : "https://bsc-dataseed1.defibit.io/"
const bscChainId = isTestNet ? 97 : 56

function App({Component, pageProps}: AppProps) {
    return <>
        <Head>
            <meta charSet="utf-8"/>
            <title>mini me</title>
            <meta content="width=device-width, initial-scale=1" name="viewport"/>
            <link href="/favicon/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180"/>
            <link href="/favicon/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png"/>
            <link href="/favicon/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png"/>
            <link href="/favicon/site.webmanifest" rel="manifest"/>
            <link color="#5bbad5" href="/favicon/safari-pinned-tab.svg" rel="mask-icon"/>
            <meta name="msapplication-TileColor" content="#da532c"/>
            <meta name="theme-color" content="#ffffff"/>
        </Head>

        <UseWalletProvider
            connectors={{
                walletconnect: {
                    rpc: {
                        [bscChainId]: bscUrl,
                    },
                },
                injected: {
                    chainId: [bscChainId],
                },
                bsc: () => {
                    return {
                        web3ReactConnector: () => {
                            return new BscConnector({supportedChainIds: [bscChainId]});
                        },
                        handleActivationError: (err: any) => {
                            if (err instanceof UserRejectedRequestError) {
                                return new ConnectionRejectedError();
                            }
                            return null;
                        },
                    };
                }
            }}

            autoConnect={false}
            pollBalanceInterval={2000}
            pollBlockNumberInterval={5000}
        >
            <Provider store={store}>
                <Component {...pageProps} />
            </Provider>
        </UseWalletProvider>
    </>
}

const makeStore = () => store
const wrapper = createWrapper(makeStore)

export default wrapper.withRedux(App)