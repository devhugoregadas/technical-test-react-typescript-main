<p align="center">
  <a href="https://goldavenue.com">
    <img src="https://www.goldavenue.com/packs/media/src/images/logos/logo_main-dfe6c41ac4008916aee56a271fccfafd.svg" height="128">
    <h1 align="center">Technical Test - React and typescript</h1>
  </a>
</p>

<p align="center">
  <a aria-label="Node version" href="https://nodejs.org/en/">
    <img src="https://img.shields.io/badge/node->=%20v16-red">
  </a>
  <a aria-label="NPM version" href="https://www.npmjs.com/">
    <img alt="" src="https://img.shields.io/badge/npm->=%20v8-blue">
  </a>
  <a aria-label="Typescript version" href="https://www.typescriptlang.org/">
    <img alt="" src="https://img.shields.io/badge/typescript-4.7.2-yellow">
  </a>
  <a aria-label="React version" href="https://reactjs.org/">
    <img alt="" src="https://img.shields.io/badge/react-18.2.0-green">
  </a>
</p>

## Introduce

It's a pokemon list.

#### Pokemon List

- We want to see all the pokemon on the page by default.
- We can search by name every pokemon and you must show every pokemon matched with the searched string.
- Threshold Power field: When you put a value (pokemon power), you must update the count value and count every pokemon with the power threshold. Example: if you put 319, you must return every pokemon with power strictly above 319.
- Count: must show the current count of pokemon returned by your search input and/or power threshold.
- Min: you must return the minium pokemon power of the list. It must be worked with search
- Max: you must return the maximum pokemon power of the list. It must be worked with search
  Example : [Search part](with-search.png) [Power threshold part](with-threshold.png).

#### Pokemon view

- When you click on a row (pokemon in table), you must show this pokemon on the right side, a pokemon view with this image. (Use getImageById in API.ts). The selected pokemon must be show on the list (ex: change color for selected pokemon on list). When search value change and the pokemon showed is not present in list searched, the view must be disappear. And when the search return only one pokemon, you must show the pokemon view directly on the right side.
  Example : [View pokemon](with-view-pokemon.png).

#### 3: Unit test

- Make unit test on every component and feature.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Install the dependencies

```bash
@user:~$ npm install
```

Run the project

```bash
@user:~$ npm run start
```

Test the project

```bash
@user:~$ npm run test
```
