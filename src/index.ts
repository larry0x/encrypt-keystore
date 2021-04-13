import { validatePhrase, encryptToKeyStore } from "@xchainjs/xchain-crypto";

let mnemonic = "";
let password = "";

if (!validatePhrase(mnemonic)) {
  console.log("Invalid mnemonic!");
}

if (password.length < 1) {
  console.log("Invalid password!");
}

encryptToKeyStore(mnemonic, password).then((keystore) => {
  console.log(keystore);
});
