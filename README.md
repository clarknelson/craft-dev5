# Clark Adlai Company Craft build

This is the boilerplate repo for our craft5 projects.

This boilerplate uses [DDEV](https://ddev.com/) to manage the setup of the php dev environment (which craft5 is built on). 

DDEV is docker based and provides php and db management. We use mysql DBs. 

We run ddev using [OrbStack](https://orbstack.dev/) which runs a dockercontainer that ddev is on.

To get started:

* install docker ddev and orbstack
* go to the root dir
  * composer install
* make sure that the db is set up
  * check that all .env variables are set up right (`CRAFT_DB_*` env vars)
  * run ddev import-db --src=path/to/your_db.sql
* `ddev craft setup`
  * Make sure that all of the prompts match the .env and you should be set up 

