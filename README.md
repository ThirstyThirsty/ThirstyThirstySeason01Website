# ThirstyThirsty Season 01 NFT - Minting Website

This is the minting website for TT's season 1 NFTs. To be used in conjunction with the accompanying [smart contracts](https://github.com/ThirstyThirsty/ThirstyThirstySeason01NFTs).

## Installation

The website is a [Laravel (9.x)](https://laravel.com/) + [Vue](https://vuejs.org/) application. It uses [Sail](https://laravel.com/docs/9.x/sail) to handle the application through a Docker environment, and [Mix](https://laravel.com/docs/9.x/mix#vue) to facilitate CSS/JS assets pipeline management (including Vue).

If you have not installed `composer` and `sail` yet, please do so.

```bash
php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
php -r "if (hash_file('sha384', 'composer-setup.php') === '906a84df04cea2aa72f40b5f787e49f22d4c2f19492ac310e8cba5b96ac8b64115ac402c8cd292b8a03482574915d1a8') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
php composer-setup.php
php -r "unlink('composer-setup.php');"
sudo mv composer.phar /usr/local/bin/composer

# Then in a new terminal window
composer require laravel/sail --dev
```

Clone the repository, change into it, then install the PHP and Node dependencies.

```bash
# Clone and install dependencies
git clone git@github.com:ThirstyThirsty/ThirstyThirstySeason01Website.git
cd ThirstyThirstySeason01Website

composer install
npm install
```

You need to do a few other things to be able to run the application you've just downloaded.

#### Set the environment variables
Just copy the `.env.example` file and rename it `.env` like so: `cp .env.example .env`.

#### Generate a key (mandatory to run a Laravel application

```bash
php artisan key:generate
php artisan config:cache
```

#### Run the following or you'll get a folder permission error
```bash
php artisan route:clear
php artisan config:clear
php artisan cache:clear
```

One your should be good to go.


## Usage

### Synopsis

> How many different tier and artworks are we planning to use, and how are they dispatched among NFTs?

There are 3 NFT tiers with different pricing, with the same artwork in 3 different colors to distinguish each other.

- **Tier 1 “Cellar”** - `270 units at $1,000 each` (ETH price TBD)

- **Tier 2 “Table”** - `518 units`, including:

  - Normal (mintable by anyone) - `418 units at $500 each` (ETH price TBD)

  - "Goldlist" (using a Merkle tree) for our Discord members - `100 at $200 each` (ETH price TBD)

- **Tier 3 “Frens & Fam”** - `50 units, free (airdropped)`

For the purpose of this collection, the same smart contract is deployed into 4 different instances:
https://github.com/ThirstyThirsty/ThirstyThirstySeason01NFTs
- one for the "Cellar" tier;
- one for the "Table" tier;
- one for the "Table" tier on a goldlist (at cheaper minting price);
- one for the "Friends & Fam" tier (airdropped).

This web application will provide a UI enabling minting the proper contract with the following behavior:

- Show and manage connection using MetaMask with a dedicated button.
- Show **Mint** buttons for targeting "Cellar" and "Table" contracts by default.
- Swap the "Table" for a special "Goldlist Table" **Mint** button targeting the relevant contract, if current connected address is in the Goldlist.
- Show a disabled mint button (with an updated indicative label) when NFTs of the linked contract have all been minted.
- Hide mint buttons and inform user instead when she has already minted the max number of NFTs per user (**set at 6 units**).

### Running in development mode

You run the application in development mode using Sail and Mix commands in the console.

```bash
# For the backend - you need it to work at all time
sail up
# or `sail up -d` to run in a detached terminal

# For the frontend
npm run dev
# or
npm run watch  # to compile assets and hot-reload as you work on them
```

This will display the website on [http://localhost](http://localhost).

> If you're having issue with "port forwarding", make sure you don't have Apache or nginx running on your computer.

For more details, refer to the [Sail](https://laravel.com/docs/9.x/sail) and [Mix](https://laravel.com/docs/9.x/mix) documentations.

### Developing Vue components

The current setup already makes use of Vue. To create a single-page component, you need to:

1. Create it in the `resources/js/components/`directory. You can use subdirectories, like you'd normally do in a Vue application.

2. Register the component in the `resources/js/app.js` file; e.g. for `ExampleComponent`, you'll add `Vue.component('example-component', require('./components/ExampleComponent.vue').default)`.

You'll also want to look at the `resources/views/index.blade.php` page. Line 25, there's a direct mention of the `ExampleComponent`. Any Vue component you put within the `div#app` node will be parsed.

> For better control over your code, I suggest you minimize the amount of components you put there, organizing your component tree into a hierarchy of subcomponents.

### Goldist

The "Table" tier's goldlist verification is based on a Merkle Tree (read full explanations in the [smart contracts repo](https://github.com/ThirstyThirsty/ThirstyThirstySeason01NFTs)).

The implementation on the minting site is straightforward:

- The Merkle root for the goldlist Merkle tree is stored as an environment variable (`MERKLE_ROOT`).
- Upon connecting (or when connected user lands) on the mint page, the wallet's public address is sent to the `api/check` endpoint of the API. In the return payload, the value of field `gold` is `true` or `false` depending on whether the address is in the list or not.
- The UI renders accordingly.

### Deployment

The current application is hosted on Heroku, with a staging and a production instance. Get in touch with **[@dheavy](https://github.com/dheavy)** for details.

**Staging** - [https://thirstythirsty-nft-staging.herokuapp.com/](https://thirstythirsty-nft-staging.herokuapp.com/)

**Production** - [https://thirstythirsty-nft.herokuapp.com/](https://thirstythirsty-nft-staging.herokuapp.com/)

## Contributing
Please use pull requests to submit your progress.

## License
[MIT](https://choosealicense.com/licenses/mit/)
