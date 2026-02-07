> 特别鸣谢：本项目前身 https://github.com/Jcanno/create-crx-app ，感谢该大佬，但该插件是v2版本，chrome和edge都不再提供支持，所以本次基于cursor做了升级，icon各方都保留原项目，所以我是站在巨人的肩膀上前进。


<h1 align="center"><img height="300" src="https://raw.githubusercontent.com/it235/images/master/create-crx-app-plus/create-crx-app-plus.png" /><br> </h1>

<h3 align="center">CLI for create Chrome extension V3 app</h3>

[English](https://github.com/it235/create-crx-app-plus)|简体中文

如果你的 npm 版本大于 5.2，推荐在终端这样使用 create-crx-app-plus：

```js
npx create-crx-app-plus my-crx-app
cd my-crx-app
npm run dev  or yarn dev
```

通过 create-crx-app-plus， 我们可以一步步生成Chrome插件项目(**适用于Edge**)

选择你的项目框架:

```bash
$ npx create-crx-app-plus transplugin
Need to install the following packages:
  create-crx-app-plus@0.2.2
Ok to proceed? (y) y
? Select your project framework » - Use arrow-keys. Return to submit.
>   React
    Vue

```

选择你的项目语言:

```bash
$ npx create-crx-app-plus transplugin
Need to install the following packages:
  create-crx-app-plus@0.2.2
Ok to proceed? (y) y
√ Select your project framework » Vue
? Select your project language » - Use arrow-keys. Return to submit.
>   TypeScript
    JavaScript

```

create-crx-app-plus 将会按照你的所有配置生成项目

## 启动插件

1. 运行 `yarn run dev(React)` 或者 `yarn run serve(Vue)` 来开发 Chrome 插件.
2. 在 Chrome 浏览器打开`chrome://extensions/` 扩展管理面板.
3. 在扩展管理面板右上角开启`开发者模式`.
4. 点击`加载已解压的扩展程序`，选择项目打包好的`dist`文件夹

## 插件样品

插件实例将会在每个页面的右下角生成一个可拖拽移动的紫色按钮.

<img src="https://raw.githubusercontent.com/it235/images/master/create-crx-app-plus/content.png" />

点击插件图标可以看到插件弹出页，在这里可以跳转到插件配置页.

<img src="https://raw.githubusercontent.com/it235/images/master/create-crx-app-plus/popup.png" />

配置页意味着你在这里可以做任何事.

<img src="https://raw.githubusercontent.com/it235/images/master/create-crx-app-plus/options.png" />

这就是样品插件所提供的功能.

如果你要修改本项目，clone下来后
```js
cd packages\create-crx-app-plus
npm install -g typescript
npm install
npm run build
```