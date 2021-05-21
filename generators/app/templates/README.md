This project was bootstrapped with [REACT-BOOTSTRAP-WOLOX](https://github.com/Wolox/react-bootstrap).

## Starting

To start the server by default (development) run:

`npm run start`

To start a specific environment, run:

`npm run start-env environment`

## Generators

You can use `npm run generate` to add different components to your app like:
* Components
* Screens

## Using react-i18next

Remember to use `useTranslation` hook from `react-i18next`;

`import { useTranslation } from 'react-i18next';`
`const { t } = useTranslation()`
 
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

## Google Analytics

If you chose to add Google Analytics script to your project, then you need to configure the tracking ID. Set it adding `REACT_APP_GA_TRACK_ID` environment variable and the corresponding ID as value.

```
// .env.development
REACT_APP_GA_TRACK_ID=AU-9999999-1
```
