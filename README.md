# IDMChat
Made in ~1 day for Web3Jam

## [Dapp](https://idmchat.xyz)
## [Web3Jam Page](https://showcase.ethglobal.com/web3jam/idmchat)
## [Video](https://www.youtube.com/watch?v=4MBBrphTUWs)

## Description
A Chat app allowing users to easily send, cheap censorship resistant messages via Input Data Messaging. Allowing users to anonymously and openly interact with other blockchain users without worrying about data being stored on a server as everything is on chain.

The benefit of this dapp is that it utilisies existing technologies present in each EVM chain, and pushes the utility to be on par with trad-systems. Providing a somewhat easy way for users to view and interact with one another, without having to run to twitter, discord, telegram or other big-tech solutions as the chain provides them with the tooling they need!.

## How its Made

Covalent api was used to pull data from chain, which was filtered down to a set of idm messages and then converted into a suitable format. Filtering was done via web3js, first filtering out any transactions that use more than 66.6k gas, and then filtering out any transactions that do not contain utf8 characters or threw errors when using the web3 hecToUtf8 functionality.

All of the data handling happens on the fly, with no backend server functionality that the dapp uses, other than the rpc node that the users wallet provides, and the covalent api that is queried.

I had intended to add a group chat feature, which would have utilised a smart contract factory and data that would point to 'participants' in the conversation. The intention would be for users to be able to send an idm to the smart contract, and the ui would react by creating a group chat chain and informing all the users of the group chat messages.

## Contributing

Feel free to contribute improvements to the UX, performance or anything else you think the dApp needs. I'll test and merge all good, working requests!

## Donating

Feel free to donate to 0xe0a09b49721FBD8B23c67a3a9fdE44be4412B8fD if you find this work helpful or want to support it's future development

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
