export const MAX_CELLAR = 270;
export const MAX_TABLE = 618;
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
export const ERR_MSG_CLAIMED = "Seems like you've already minted a goldlisted NFT! Try minting again at the regular price.";
export const ERR_MSG_UNKNOWN = 'Oops! An unknown error occured. Please try again later...';

export const CONTRACT_ADDR = (() => {
  switch (window.location.hostname) {
    // Mainnet (homestead)
    case 'thirstythirsty-nft.herokuapp.com':
    case 'thirstythirsty.xyz':
      return '0x9a1a77CF312DD43D6Da93c5Ed5D2b4ef592e8962';

    // Rinkeby (testnet)
    case 'thirstythirsty-nft-staging.herokuapp.com':
      return '0x68c0D7CdC7c5Bc028C66Ff933524F30C736fC8EC';

    // Localhost (development)
    case 'localhost':
      return '0x5FbDB2315678afecb367f032d93F642f64180aa3';

    default:
      return '';
  }
})();

export const FOOTER = [
  {
    name: 'Discord',
    description: 'Discord',
    target: '_blank',
    href: 'https://discord.gg/xZ2Ue8qKGp'
  },
  {
    name: 'Twitter',
    description: 'Twitter',
    target: '_blank',
    href: 'https://twitter.com/thirstythirsty8'
  },
  {
    name: 'Instagram',
    description: 'Instagram',
    target: '_blank',
    href: 'https://www.instagram.com/thirstythirsty/'
  },
  {
    name: 'Website',
    description: 'Website',
    target: '_blank',
    href: 'https://www.thirstythirsty.org/'
  },
  {
    name: 'Terms and Conditions',
    target: '_self',
    description: 'Terms and Conditions',
    href: '/terms'
  }
];
