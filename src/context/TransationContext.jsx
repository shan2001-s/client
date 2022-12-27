import React from "react";
import { useState } from "react";
import { ethers } from "ethers";
import { contractAddress, contractABI } from "../utils/constants";

export const TransationContext = React.createContext();
const { ethereum } = window;
const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum)
    const signer = provider.getSigner()
    const transationContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transationContract;


};

export const TransationsProvider = ({ children }) => {
    const [currentAccount, setcurrentAccount] = useState('');
    const creatShotAddress = currentAccount.substring(0, 5) + ` ........ ` + String(currentAccount).slice(-4);;

    const [formData, setformData] = useState({ addressTo: '', amount: '', message: '' });
    const [loading, setloading] = useState(false);

    const handleChange = (e, name) => {
        setformData((prev) => ({ ...prev, [name]: e.target.value }));
    }

    const getAllTransation = async () => {
        try {
            const transationContract = getEthereumContract();
            const getTransations = await transationContract.Gettransations();

            console.log(getTransations);
        } catch (error) {
            console.log(error)
        }

    }

    const ConnectWallet = async () => {

        if (!ethereum) {
            alert("Please install metamask")
        }
        else {
            const provider = new ethers.providers.Web3Provider(window.ethereum)

            const accounts = await provider.send("eth_requestAccounts", []);
            setcurrentAccount(accounts[0]);
            console.log(currentAccount);
            getAllTransation();



        }
    }

    const sendTransation = async () => {
        const { addressTo, amount, message } = formData;
        const transationContract = getEthereumContract();
        const parseAmount = ethers.utils.parseEther(amount);
        console.log('loading');

        console.log({ setloading })
        await ethereum.request({
            method: 'eth_sendTransaction',
            params: [{
                from: currentAccount,
                to: addressTo,
                // gas: '21000',
                value: parseAmount._hex
            }]
        })

        const transactionHash = await transationContract.Addtoblockchain(addressTo, parseAmount, message)
        setloading(true);
        console.log('loading' + transactionHash.hash)
        console.log({ loading })
        console.log({ setloading })
        await transactionHash.wait();

        setloading(false);
        console.log('success' + transactionHash.hash)
        console.log({ loading })
        console.log({ setloading })
    }



    return (
        <TransationContext.Provider value={{ ConnectWallet, currentAccount, creatShotAddress, handleChange, formData, setformData, sendTransation, setloading }}>
            {children}
        </TransationContext.Provider>
    )
}
