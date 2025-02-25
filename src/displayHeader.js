require("colors");

function displayHeader() {
  process.stdout.write("\x1Bc");
  console.log("========================================".magenta);
  console.log("=          Monad Testnet Bot           =".magenta);
  console.log("=     Modified by Silentofsorrow       =".magenta);
  console.log("=    https://t.me/TC_Duitchat          =".magenta);
  console.log("========================================".magenta);
  console.log();
}

module.exports = displayHeader;
