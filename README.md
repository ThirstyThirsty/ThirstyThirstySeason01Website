# ThirstyThirsty Season 01 NFT - Minting Website

This is the minting website for TT's season 1 NFTs. To be used in conjunction with the accompanying [smart contracts](https://github.com/ThirstyThirsty/ThirstyThirstySeason01NFTs).

Made with ❤️

## Installation

This is an AdonisJS project. Please refer to the [documentation](https://docs.adonisjs.com/guides/introduction) for further information on how to use Adonis.
Run `npm install` or `yarn install` inside the directory.

#### Set the environment variables
Just copy the `.env.example` file and rename it `.env` like so: `cp .env.example .env`.

## Usage

### Synopsis

There are 2 tiers of NFT, split in 4 types of different pricing.

- **Tier 1 “Cellar” (Type 1)** - `270 units at 0.4 ETH`

- **Tier 2 “Table”  (Type 2, 3, 4)** - `618 units`, including:

  - **Type 2** Regular `518 units at 0.2 ETH`

  - **Type 3** Goldlist for our Discord members - `50 at 0.1 ETH`

  - **Type 4** "Frens & Fam", airdropped to collaborators - `50 at 0.1 ETH`

### Running in development mode

Open a terminal window and run `npm run dev`. Open another console and run `npm run serve`.
The dev server is available on [http://localhost:3333](http://localhost:3333) (note: hot reload is not enabled!).

### Goldist

The "Table" tier's goldlist verification is based on a Merkle Tree (read full explanations in the [smart contracts repo](https://github.com/ThirstyThirsty/ThirstyThirstySeason01NFTs)).

The implementation on the minting site is straightforward:

- Goldlisted addresses must be listed in the `GOLDLIST` env variable.

- Upon connecting (or when connected user lands) on the mint page, the wallet's public address is sent to the `api/list` endpoint of the API. In the return payload, the value of field `goldlisted` is `true` or `false` depending on whether the address is in the list or not.

- The UI renders accordingly.

### Deployment

The current application is hosted on Heroku, with a staging and a production instance. Get in touch with **[@dheavy](https://github.com/dheavy)** for details.

**Staging** - [https://thirstythirsty-nft-staging.herokuapp.com/](https://thirstythirsty-nft-staging.herokuapp.com/)

**Production** - [https://thirstythirsty.xyz/](https://thirstythirsty.xyz/) | [https://thirstythirsty-nft.herokuapp.com/](https://thirstythirsty-nft-staging.herokuapp.com/)

## Contributing

Pull request are welcome.

## License
[MIT](https://choosealicense.com/licenses/mit/)
