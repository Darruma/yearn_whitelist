const conditions = {
  cond1: {
    condition: "Badger staking and LP before Digg launch",
    tooltip: "Badger staked/LP on ALL 12/10, 12/29, 1/8, 1/18",
  }, 
  cond2: {
    condition: "Badger staking and LP after Digg launch",
    tooltip: "Badger staked/LP on ALL  1/26, 2/11, 2/28, 3/17",
  },
  cond3: {
    condition: "In a non-native Sett since Badger Launch",
    tooltip: "Non native sett balance > 0 on ALL 12/10, 1/8, 2/11, 3/17",
  },
  cond4: {
    condition: "Digg staker and LP after Digg Launch",
    tooltip: "Digg staked/LP > 0 on ALL 1/26, 2/11, 2/28, 3/17",
  },
  cond5: {
    condition: "Digg supporter below peg",
    tooltip: "Digg balance higher on 3/17 than 2/18",
  },
  cond6: {
    condition: "Badger governance participant",
    tooltip: "Voted on badger snapshot.page",
  },
  cond7: {
    condition: "Owns a Badger NFT",
    tooltip: "Owns any of the BadgerDAO NFTS",
  },
  cond8:{
    condition:"Vault Depositor",
    tooltip:"Balance is > 0 for either of: crvRenWBTC, crvRenWSBTC,tbtc/sbtcCRV, crvRenWBTC harvest, wbtcWethSLP,wBTC yearn Vault at 5/6/2021"
  }
};

export default conditions
