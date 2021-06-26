# gwentapi

This is a project serves the API for the GWENTcards site from the [Rowan-Paul/GWENTcards](https://github.com/Rowan-Paul/GWENTcards) repository. In the `/seeds` folder there are JSON files with all the GWENT cards ordered by deck, feel free to grab them for your own projects as long as you give credit here.

## Installation

To run the server locally, run `npm install` followed by `npm start` or `nodemon app` if you'd rather use nodemon. You can seed the files using ``node seeds/seed.js``, this fills the database with the cards and a dummy user.

## Environment variables

In order to run the application locally, you need the following env variables inside a ``.env`` or ``.env.local`` file in the project root.

| Name                 	| Description                                                                     	|
|----------------------	|---------------------------------------------------------------------------------	|
| ``PORT``             	| Optional variable that is used for the server port                              	|
| ``SECRET``           	| Secret for hashing and checking password/JWTs                                   	|
| ``NODE_ENV``         	| Optional variable to tell the app if it is in a production or local environment 	|
| ``SENDGRID_API_KEY`` 	| API key for Sendgrid to send emails with                                        	|

## Contribute

If you want to contribute, have a question or suggestion feel free to open an issue on the [Rowan-Paul/GWENTcards](https://github.com/Rowan-Paul/GWENTcards/issues) repository.
