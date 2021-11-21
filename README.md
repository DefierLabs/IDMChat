# IDMChat
Made in ~1 day for Web3Jam

[https://idmchat.xyz]Dapp Here

## Description
A Chat app allowing users to easily send, cheap censorship resistant messages via Input Data Messaging. Allowing users to anonymously and openly interact with other blockchain users without worrying about data being stored on a server as everything is on chain.

The benefit of this dapp is that it utilisies existing technologies present in each EVM chain, and pushes the utility to be on par with trad-systems. Providing a somewhat easy way for users to view and interact with one another, without having to run to twitter, discord, telegram or other big-tech solutions as the chain provides them with the tooling they need!.

## How its Made

Covalent api was used to pull data from chain, which was filtered down to a set of idm messages and then converted into a suitable format. Filtering was done via web3js, first filtering out any transactions that use more than 66.6k gas, and then filtering out any transactions that do not contain utf8 characters or threw errors when using the web3 hecToUtf8 functionality.

All of the data handling happens on the fly, with no backend server functionality that the dapp uses, other than the rpc node that the users wallet provides, and the covalent api that is queried.

I had intended to add a group chat feature, which would have utilised a smart contract factory and data that would point to 'participants' in the conversation. The intention would be for users to be able to send an idm to the smart contract, and the ui would react by creating a group chat chain and informing all the users of the group chat messages.

