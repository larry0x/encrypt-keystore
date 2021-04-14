import { validatePhrase, encryptToKeyStore } from "@xchainjs/xchain-crypto";
import { delay } from "@xchainjs/xchain-util";

/**
 * @dev Forked from
 * https://github.com/thorswap/thorswap-finance-app/blob/main/src/helpers/download.ts
 */
export const downloadAsFile = async (filename: string, text: string) => {
  const element = document.createElement("a");
  element.setAttribute(
    "href",
    `data:text/plain;charset=utf-8,${encodeURIComponent(text)}`
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);

  await delay(100);
};

/**
 * @dev Modified from
 * https://github.com/thorswap/thorswap-finance-app/blob/main/src/components/WalletModal/CreateKeystore/Keystore.tsx
 */
$("#submitBtn").click(() => {
  const mnemonic = $("#mnemonicInput").val();
  const password = $("#passwordInput").val();

  if (!mnemonic || !validatePhrase(mnemonic.toString())) {
    $("#mnemonicInput").addClass("is-invalid");
    return console.log("Invalid mnemonic:", mnemonic);
  } else {
    $("#mnemonicInput").removeClass("is-invalid");
    console.log("Valid mnemonic:", mnemonic);
  }

  if (!password || password.toString().length < 1) {
    $("#passwordInput").addClass("is-invalid");
    return console.log("Invalid password:", password);
  } else {
    $("#passwordInput").removeClass("is-invalid");
    console.log("Valid password:", password);
  }

  encryptToKeyStore(mnemonic.toString(), password.toString()).then(
    (keystore) => {
      downloadAsFile(
        "asgardex-keystore.json",
        JSON.stringify(keystore, null, 2)
      );
      console.log("Keystore generated:", keystore);
    }
  );
});
