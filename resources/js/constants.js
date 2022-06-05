export const MAX_CELLAR = 270;
export const MAX_TABLE = 518;
export const MAX_FRENS = 50;

export const PRICE_CELLAR = 0.4;
export const PRICE_TABLE = 0.2;
export const PRICE_TABLE_GOLD = 0.1;

export const TIER_CELLAR = 'cellar';
export const TIER_TABLE = 'table';
export const TIER_TABLE_GOLD = 'tableGold';
export const TIER_FRENS = 'frens';

export const ERR_MSG_FUND = 'You have insufficient funds to mint.';
export const ERR_MSG_MINT = "Seems like you've already minted the maximum number per wallet.";
export const ERR_MSG_CLAIMED = "Seems like you've already minted an NFT!";
export const ERR_MSG_UNKNOWN = 'Oops! An unknown error occured. Please try again later...';

export const CONTRACT_ADDR = (() => {
  switch (window.location.hostname) {
    // Mainnet (homestead)
    case 'thirstythirsty-nft.herokuapp.com':
    case 'thirstythirsty.xyz':
      return '';

    // Rinkeby (testnet)
    case 'thirstythirsty-nft-staging.herokuapp.com':
      return '0x59D6DcD48313d28cbe4F60E80eb5F88B99bc81A2';

    // Localhost (development)
    case 'localhost':
      return '0x5FbDB2315678afecb367f032d93F642f64180aa3';

    default:
      return '';
  }
})();
