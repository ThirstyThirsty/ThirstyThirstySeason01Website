# ThirstyThirsty Season 01 NFT

This is the landing page and minting website for TT's season 1 NFTs.

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

This will display the website if you go to [http://localhost](http://localhost).

> If you're having issue with "port forwarding", make sure you don't have Apache or nginx running on your computer.

For more details, refer to the [Sail](https://laravel.com/docs/9.x/sail) and [Mix](https://laravel.com/docs/9.x/mix) documentations.

### Using Vue

The current setup already makes use of Vue. To create a single-page component, you need to:

1. Create it in the `resources/js/components/`directory. You can use subdirectories, like you'd normally do in a Vue application.

2. Register the component in the `resources/js/app.js` file; e.g. for `ExampleComponent`, you'll add `Vue.component('example-component', require('./components/ExampleComponent.vue').default)`.

You'll also want to look at the `resources/views/index.blade.php` page. Line 25, there's a direct mention of the `ExampleComponent`. Any Vue component you put within the `div#app` node will be parsed.

> For better control over your code, I suggest you minimize the amount of components you put there, organizing your component tree into a hierarchy of subcomponents.

## Contributing
Please use pull requests to submit your progress.

## License
[MIT](https://choosealicense.com/licenses/mit/)
