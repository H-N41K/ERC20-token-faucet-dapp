# 🚰 ERC-20 Token Faucet dApp

A single page dApp that provides a faucet service, which dispenses FCT(ERC-20) tokens.

---

## ⏱ Instructions to run the dApp:

First, you'll need [NodeJS>=10](https://nodejs.org/en/download/) plus [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) and [Git](https://git-scm.com/downloads) installed.

💾 Clone/fork repo and then install:

```
git clone https://github.com/H-N41K/ERC20-token-faucet-dapp.git

cd ERC20-token-faucet-dapp

npm install
```

---

Start the React App ⚛️:

```
npm start
```

---

⛓ Start your local blockchain powered by 👷‍♀️[Hardhat](https://hardhat.org/):

```
npx hardhat node
```

**Note**: You'll need to run this command in a new terminal window

---

⚙️ Compile your contracts:

```
npx hardhat compile
```

---

🚢 Deploy your contracts to the frontend:

```
npx hardhat run scripts/deploy.js --network localhost
```

---

Here's how the UI looks when the page fully loads:
<kbd>
![Preview of UI](/img/UI.jpg)
</kbd>

## 📝 Credits

The code in this repo is from [@Richard Melkonian](https://github.com/rvmelkonian)'s article titled ["Ethereum Dapp Crash Course: Make an ERC20 token faucet + Frontend"](https://dev.to/richardmelko/ethereum-dapp-crash-course-make-an-erc20-token-faucet-frontend-2m43).
