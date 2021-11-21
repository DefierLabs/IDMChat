
export function getCovalentData() {

  var address = "0x456BC3aE1381eB994A2df1d9F7F7DA3e4cE879b0"
  var chain = "1"
  var key = "ckey_618a26bdd9a8408c9cf0ec43379"
  
  var request = "https://api.covalenthq.com/v1/" + chain + "/address/"+ address + "/transactions_v2/?quote-currency=USD&format=JSON&block-signed-at-asc=false&no-logs=true&key=" + key
  
  console.log(request)
}


