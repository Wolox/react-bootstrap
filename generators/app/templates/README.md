This project was bootstrapped with [REACT-BOOTSTRAP-WOLOX](https://github.com/Wolox/react-bootstrap).

## Screens

This are the screens you can to choose for your app.

- [Login](docs/Login.md)

## Components

This are the components you can to choose for your app.

- [SearchBar](docs/SearchBar.md)
- [TextArea](docs/TextArea.md)
- [Field](docs/Field.md)
- [Spinner](docs/Spinner.md)
- [Checkbox](docs/Checkbox.md)
- [InputLabel](docs/InputLabel.md)
- [RadioGroup](docs/RadioGroup.md)

## Base Styles

[BaseStyles](docs/BaseStyles.md)

## Deploy

`npm run deploy environment`

Where _environment_ must match with the current branch and _environment_ must have a .env file and a property in the aws.js configuration.

Valid environments are _development_, _stage_ and _master_

#### Example

If you are in `development` branch:

- `.env.development` exists
- `aws.js` must have a `development` property with the keys for the corresponding bucket

Then, run `npm run deploy development`

#### Only building

To only build the application in a specific env, run:

`npm run build environment`

#### Starting

To start the server by default (development) run:

`npm run start`

To start a specific environment, run:

`npm run start-env environment`
