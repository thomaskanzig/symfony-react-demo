# Installation

## Requirements

- PHP: **8.0**
- MySQL: **>=5.7**
- HTTP Server: **nginx** or **apache**
- Node: **17.8.0**
- Composer: **2.***

## Instructions to install local

### 1 Clone the repository

```bash
git clone git@github.com:thomaskanzig/symfony-react-demo.git .
```

### 2 Config environment file

Make a copy from [.env.test](../.env.test) and rename to `.env.local` in the same path and adjust all values necessary.

See [here](https://symfony.com/blog/new-in-symfony-4-2-define-env-vars-per-environment) to explain more.

### 3 Config JWT token.

Don't forget to change your own secret string in `JWT_PASSPHRASE=<INSERT-YOUR-SECRET>` before generate the keypair with the command below:

```bash
bin/console lexik:jwt:generate-keypair
```
### 4 Install dependencies

```bash
composer install
```

### 5 Added database structure:
```bash
php bin/console doctrine:database:create
```

### 6 Added data fixtures:
```bash
php bin/console doctrine:fixtures:load
```

This data fixtures will be generate two sample products and one user with `admin` as username and `admin` as password.  

### 7 Install yarn package

```bash
yarn install
```

### 8 Build the assets files
```bash
yarn encore dev
```

### 9 Running server with Symfony

```bash
# start server and show logs. For stop with control+C. (Terminal tab will be unavaible).
symfony server:start
```

```bash
# start server in background and continue working and running other comands
symfony server:start -d
```

```bash
# show the latest log messages.
symfony server:log
```

```bash
# stop server.
symfony server:stop
```
