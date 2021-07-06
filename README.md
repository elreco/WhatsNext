# WhatsNext app

WhatsNext is a [technical test](https://www.notion.so/Front-technical-test-3b5ad58b485344e4bb7a274232f77ac1) for Pongo.

## Demo

Demo is available [here](https://whats-next.elreco.fr).

## Installation

It's recommended to use [Yarn](https://yarnpkg.com/)

### First thing to do - install dependancies
```
yarn install
```

### Create env file
```
cp .env .env.local
```

- Get an api key on https://www.yelp.com/developers and fill the variables `VUE_APP_API_KEY` & `VUE_APP_API_URL`.
- Give a name to your app by setting the `VUE_APP_NAME` variable.
- Get a google API key and set the `VUE_APP_GOOGLE_API` variable.

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

## Todo

- Filter restaurant list
    - by rating
    - by price
    - by category
  Use [tailwind forms](https://tailwindcss.com/docs/plugins#forms)
- Internationalization
- Meta title & description

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
