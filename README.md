# Clark Adlai Company Craft build

This is the boilerplate repo for our craft5 projects.

This boilerplate uses [DDEV](https://ddev.com/) to manage the setup of the php dev environment (which craft5 is built on). 

DDEV is docker based and provides php and db management. We use mysql DBs. 

We run ddev using [OrbStack](https://orbstack.dev/) which runs a dockercontainer that ddev is on.

To get started:

* Install docker ddev and orbstack
* run `composer install` to install all php packages
* Import the db with `ddev import-db --src=path/to/your_db.sql`
  * check that all .env variables are set up right (`CRAFT_DB_*` env vars)
* run `ddev craft setup` in the root dir
  * Make sure that all of the prompts match the .env 
* run `ddev start` in the root dir
