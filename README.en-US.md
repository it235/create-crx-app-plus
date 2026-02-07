> Special thanks: This project is based on [create-crx-app](https://github.com/Jcanno/create-crx-app). I'm grateful to the original creator, but that plugin is in version 2, and neither Chrome nor Edge provides support for it anymore. Therefore, this upgrade is based on cursor, while the icon remains from the original project. So, I am standing on the shoulders of giants.

<h1 align="center">Fast Build Your Chrome And Edge extension<br> </h1>


English|[简体中文](https://github.com/it235/create-crx-app-plus)

we recommend to type code below in terminal with npm 5.2+ and higher:

```js
npx create-crx-app-plus my-crx-app
cd my-crx-app
npm run dev
```

We can easily generate a Chrome extension project by using create-crx-app-plus step by step.

Select your project framework:

```bash
$ npx create-crx-app-plus transplugin
Need to install the following packages:
  create-crx-app-plus@0.2.5
Ok to proceed? (y) y
? Select your project framework » - Use arrow-keys. Return to submit.
>   React
    Vue

```

Select your project language:

```bash
$ npx create-crx-app-plus transplugin
Need to install the following packages:
  create-crx-app-plus@0.2.5
Ok to proceed? (y) y
√ Select your project framework » Vue
? Select your project language » - Use arrow-keys. Return to submit.
>   TypeScript
    JavaScript

```

After that, create-crx-app-plus will generate project by your setting.

## Start Extension

1. run `yarn run dev(React)` or `yarn run serve(Vue)` for developing Chrome Extension.
2. input and open `chrome://extensions/` in your Chrome search bar.
3. open `developer mode` in the top right corner in Extensions Page.
4. click `load unpacked extension project`, select the `dist` folder.

## Sample

Sample Extension will generate a purple button which can be moved in the bottom right corner in every page.


Click the extension icon and get the popup page, you can turn to options page here

[plugin](./popup.png)

Options page shows you can do everything here.


That's all Sample Extension do.
