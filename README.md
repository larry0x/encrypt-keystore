# encrypt-keystore

Convert mnemonic phrases to JSON keystore files compatible with [THORSwap](https://thorswap.finance/) and [Asgardex](https://app.asgard.exchange/).

## How to use

Clone this repository

```bash
git clone https://github.com/0xlarry/encrypt-keystore.git
```

Install [parcel](https://www.npmjs.com/package/parcel-bundler) and [ts-node](https://www.npmjs.com/package/ts-node).

```bash
npm install -g parcel-bundler ts-node
```

Now, **disconnect from internet** (important for your security!) then run

```bash
parcel index.html
```

The webapp should now be accessible at [http://localhost:1234](http://localhost:1234). Once you're done generating the keystore, hit `Ctrl + C` to exit.
