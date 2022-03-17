// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.
import "../css/app.scss"

// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html"
import "babel-polyfill"
import * as web3 from '@solana/web3.js';

import { TokenListProvider, TokenInfo } from '@solana/spl-token-registry';
import * as SPLToken from "@solana/spl-token";
import { Socket } from "phoenix"
import bs58 from 'bs58';
import { LiveSocket } from "phoenix_live_view"
import { async } from "regenerator-runtime";


const SOLANA_MAINNET_USDC_PUBKEY = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
const ENDPOINT = 'https://solana-mainnet.phantom.tech';
// 'https://larix.rpcpool.com/b9f4f7c826357818e91fbd79bd85',
// 'https://solana-mainnet.phantom.tech',
// 'https://solana-api.projectserum.com',
// 'https://api.testnet.solana.com',
// web3.clusterApiUrl('devnet'),


let Hooks = {}

Hooks.phantomConnect = {
    mounted() {
        this.el.addEventListener("click", async e => {
            if ("solana" in window) {
                try {
                    const resp = await window.solana.connect({});
                    resp.publicKey.toString();
                    this.pushEvent("get_publicKey_solana", { publicKey: window.solana.publicKey });
                    /////////////// CONEXION A SOLANA ///////////
                    const connection = new web3.Connection(
                        ENDPOINT,
                        'confirmed',
                    );

                    /////// CONSULTO LISTADO DE TOKENS ////////
                    new TokenListProvider().resolve().then((tokens) => {
                        const tokenList = tokens.filterByClusterSlug('mainnet-beta').getList();
                        this.pushEvent("get_list_tokens", { data: tokenList });
                    });

                    ///////// CONSULTA TOKENS EN LA CUENTA DEL USUARIO ////////
                    // window.solana.publicKey, connection
                    let response = await connection.getTokenAccountsByOwner(
                        new web3.PublicKey(window.solana.publicKey), {
                            programId: SPLToken.TOKEN_PROGRAM_ID,
                        },
                    );
                    let stakeBalance = await connection.getBalance(window.solana.publicKey);
                    let list = [];
                    let data_usdc;
                    response.value.forEach((e) => {
                        const accountInfo = SPLToken.AccountLayout.decode(e.account.data);
                        console.log(accountInfo);
                        let address = new web3.PublicKey(accountInfo.mint);
                        if (address != "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v") {
                            if (parseFloat(SPLToken.u64.fromBuffer(accountInfo.amount)) > 0.0) {
                                list.push({
                                    'address': address,
                                    'amount': parseFloat(SPLToken.u64.fromBuffer(accountInfo.amount)) / 1000000
                                })
                            }
                        } else {
                            data_usdc = {
                                'address': address,
                                'amount': parseFloat(SPLToken.u64.fromBuffer(accountInfo.amount)) / 1000000
                            }
                        }
                    });
                    this.pushEvent("get_tokens_account", { data: list, usdc: data_usdc, solanas: stakeBalance / 1000000000 });
                } catch (err) {
                    this.pushEvent("process_connect", { step: "error", data: err });
                    console.warn(err);
                }
            } else {
                this.pushEvent("process_connect", { step: "no_phantom", data: "" });
            };

        });
    },
}

Hooks.phantomPreConnect = {
    async mounted() {
        if ("solana" in window) {
            try {
                await window.solana.connect({});
                this.pushEvent("get_publicKey_solana", { publicKey: window.solana.publicKey });
                /////////////// CONEXION A SOLANA ///////////
                const connection = new web3.Connection(
                    ENDPOINT,
                    'confirmed',
                );

                /////// CONSULTO LISTADO DE TOKENS ////////

                new TokenListProvider().resolve().then((tokens) => {
                    const tokenList = tokens.filterByClusterSlug('mainnet-beta').getList();
                    this.pushEvent("get_list_tokens", { data: tokenList });
                });

                ///////// CONSULTA TOKENS EN LA CUENTA DEL USUARIO ////////

                // window.solana.publicKey, connection
                let response = await connection.getTokenAccountsByOwner(
                    new web3.PublicKey(window.solana.publicKey), {
                        programId: SPLToken.TOKEN_PROGRAM_ID,
                    },
                );
                let stakeBalance = await connection.getBalance(window.solana.publicKey);
                let list = [];
                let data_usdc;
                response.value.forEach((e) => {
                    const accountInfo = SPLToken.AccountLayout.decode(e.account.data);
                    console.log(accountInfo);
                    let address = new web3.PublicKey(accountInfo.mint);
                    if (address != "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v") {
                        if (parseFloat(SPLToken.u64.fromBuffer(accountInfo.amount)) > 0.0) {
                            list.push({
                                'address': address,
                                'amount': parseFloat(SPLToken.u64.fromBuffer(accountInfo.amount)) / 1000000
                            })
                        }
                    } else {
                        data_usdc = {
                            'address': address,
                            'amount': parseFloat(SPLToken.u64.fromBuffer(accountInfo.amount)) / 1000000
                        }
                    }
                });
                this.pushEvent("get_tokens_account", { data: list, usdc: data_usdc, solanas: stakeBalance / 1000000000 });
            } catch (err) {
                this.pushEvent("process_connect", { step: "error", data: err });
                console.warn(err);
            }
        } else {
            this.pushEvent("process_connect", { step: "no_phantom", data: "" });
        };
    }
}

Hooks.deposit = {
    mounted() {
        this.el.addEventListener("click", async e => {
            try {
                var split_data = this.el.dataset.page.split("|")
                let value = parseFloat(split_data[0]);
                console.log(value)
                if (value < 0.1) {
                    value = 0.1;
                }
                // Connect to cluster
                this.pushEvent("process_deposit", { step: "loading", data: "" });
                var connection = new web3.Connection(ENDPOINT, 'confirmed');
                // Construct wallet keypairs
                console.log('--------');
                console.log(split_data[1]);
                console.log(split_data);

                var fromWallet = window.solana; //new web3.PublicKey(window.solana.publicKey);
                var toWallet = new web3.PublicKey(split_data[1]);
                // Construct my token class
                var USDC_pubkey = new web3.PublicKey(SOLANA_MAINNET_USDC_PUBKEY);
                var USDC_Token = new SPLToken.Token(
                    connection,
                    USDC_pubkey,
                    SPLToken.TOKEN_PROGRAM_ID,
                    toWallet
                );
                // Create associated token accounts for my token if they don't exist yet
                var fromTokenAccount = await USDC_Token.getOrCreateAssociatedAccountInfo(
                    fromWallet.publicKey
                );
                var toTokenAccount = await USDC_Token.getOrCreateAssociatedAccountInfo(
                    toWallet
                );
                // Add token transfer instructions to transaction
                var transaction = new web3.Transaction()
                    .add(
                        SPLToken.Token.createTransferInstruction(
                            SPLToken.TOKEN_PROGRAM_ID,
                            fromTokenAccount.address,
                            toTokenAccount.address,
                            fromWallet.publicKey, [],
                            Number(value) * 1000000
                        )
                    );
                const blockHash = await connection.getRecentBlockhash();
                transaction.feePayer = fromWallet.publicKey;
                transaction.recentBlockhash = blockHash.blockhash;
                const { signature } = await window.solana.signAndSendTransaction(transaction);
                console.log("Submitted transaction " + signature + ", awaiting confirmation");
                await connection.confirmTransaction(signature);
                console.log("Transaction " + signature + " confirmed");

                ///////// CONSULTA DE NUEVO TOKENS EN LA CUENTA DEL USUARIO PARA ACTUALIZAR INFO ////////
                let response = await connection.getTokenAccountsByOwner(
                    new web3.PublicKey(window.solana.publicKey), {
                        programId: SPLToken.TOKEN_PROGRAM_ID,
                    },
                );
                let stakeBalance = await connection.getBalance(window.solana.publicKey);
                let list = [];
                let data_usdc;
                response.value.forEach((e) => {
                    const accountInfo = SPLToken.AccountLayout.decode(e.account.data);
                    console.log(accountInfo);
                    let address = new web3.PublicKey(accountInfo.mint);
                    if (address != "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v") {
                        if (parseFloat(SPLToken.u64.fromBuffer(accountInfo.amount)) > 0.0) {
                            list.push({
                                'address': address,
                                'amount': parseFloat(SPLToken.u64.fromBuffer(accountInfo.amount)) / 1000000
                            })
                        }
                    } else {
                        data_usdc = {
                            'address': address,
                            'amount': parseFloat(SPLToken.u64.fromBuffer(accountInfo.amount)) / 1000000
                        }
                    }
                });
                this.pushEvent("get_tokens_account", { data: list, usdc: data_usdc, solanas: stakeBalance / 1000000000 });
                ///////// MUESTRA MODAL DE CONFIRMACION ////////
                this.pushEvent("process_deposit", { step: "confirmed", data: signature });
            } catch (err) {
                this.pushEvent("process_deposit", { step: "error", data: err });
                console.error(err);
            }
        })
    }
}

Hooks.phantomDisconnect = {
    mounted() {
        this.el.addEventListener("click", async e => {
            window.solana.disconnect();
            this.pushEvent("close_solana_conection", {})
        });
    },
}

Hooks.updateInputAmount = {
    mounted() {
        var split_data = this.el.dataset.page.split(";")
        var maxValue = parseFloat(split_data[0]);
        var minValue = parseFloat(split_data[1]);
        var value = document.getElementById(this.el.id).value;
        console.log(value);
        if (parseFloat(value) > maxValue) {
            value = maxValue;
        }
        if (parseFloat(value) < 0.0) {
            value = minValue;
        }
        document.getElementById("amount_range_hook").value = value;
        document.getElementById("amount_hook").value = value;
    },
    updated() {
        var split_data = this.el.dataset.page.split(";")
        var maxValue = parseFloat(split_data[0]);
        var minValue = parseFloat(split_data[1]);
        var value = document.getElementById(this.el.id).value;
        console.log(value);
        if (parseFloat(value) > maxValue) {
            value = maxValue;
        }
        if (parseFloat(value) < 0.0) {
            value = minValue;
        }
        document.getElementById("amount_range_hook").value = value;
        document.getElementById("amount_hook").value = value;
    },

}

Hooks.LineChartIndexCore = {
    mounted() {
        var data = this.el.dataset.page;
        var split_data = data.split("|")
        var id = split_data[0];
        var ctx = document.getElementById(id).getContext('2d');
        this.ChartFive = new Chart(ctx, LineChartIndexCore(split_data));
    }
}

Hooks.copyToClipboard = {
    mounted() {
        document.getElementById(this.el.id).addEventListener("click", e => {
            var data = this.el.dataset.page;
            const el = document.createElement('textarea');
            el.value = data;
            el.setAttribute('readonly', '');
            el.style.position = 'absolute';
            el.style.left = '-9999px';
            document.body.appendChild(el);
            el.select();
            document.execCommand('copy');
            document.body.removeChild(el);
            var icon_style = document.getElementById(this.el.id)
            icon_style.style.color = 'green!important'
        })

    }
}

function LineChartIndexCore(split_data, color) {
    console.log(split_data)
    const config = {
        type: 'line',
        data: {
            labels: split_data[5].split(";"),
            datasets: [{
                backgroundColor: '#FF420060',
                fill: true,
                borderWidth: 3,
                tension: 0.1,
                data: split_data[4].split(";"),
            }]
        },
        options: {
            plugins: {
                tooltip: {
                    callbacks: {
                        title: function(tooltipItem, data) {
                            console.log(split_data[4].split(";")[tooltipItem[0]['dataIndex']])
                            return "Total USDC " + split_data[4].split(";")[tooltipItem[0]['dataIndex']];
                        },
                        label: function(tooltipItem, data) {
                            return "Deposit USDC" + split_data[3].split(";")[tooltipItem['dataIndex']];
                        },
                        afterLabel: function(tooltipItem, data) {
                            return "Rewards USDC" + split_data[1].split(";")[tooltipItem['dataIndex']];
                        }
                    },
                    backgroundColor: '#EEEEEE',
                    titleColor: 'rgb(1, 27, 86)',
                    bodyColor: 'rgb(1, 27, 86)',
                    borderColor: '#EEEEEE',
                    borderWidth: 2,
                    cornerRadius: 20,
                    titleAlign: 'center',
                    usePointStyle: true,
                    boxWidth: 0,
                },
                align: 'center',
                responsive: true,
                maintainAspectRatio: false,
                legend: {
                    display: false,
                },
                title: {
                    display: false,
                },
            },
            scales: {
                y: {
                    min: 0,
                    max: split_data[6],
                    display: true,
                    scaleLabel: {
                        display: true,
                    },
                    ticks: {
                        maxTicksLimit: 10,
                        font: {
                            size: 8.5,
                        }
                    }
                },
                x: {
                    min: 0,
                    display: true,
                    grid: {
                        display: false
                    },
                    ticks: {
                        maxTicksLimit: 11,
                        font: {
                            size: 8.5,
                        }
                    }
                }
            },
            layout: {
                padding: 5,
            }
        },
    };
    return config;
}

let csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute("content");
let liveSocket = new LiveSocket("/live", Socket, {hooks: Hooks, params: {_csrf_token: csrfToken}});

liveSocket.connect()


// expose liveSocket on window for web console debug logs and latency simulation:
// >> liveSocket.enableDebug()
// >> liveSocket.enableLatencySim(1000)  // enabled for duration of browser session
// >> liveSocket.disableLatencySim()
window.liveSocket = liveSocket
