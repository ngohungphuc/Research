# Angular i18n Example App
This project was built using the [Universal Starter](https://github.com/angular/universal-starter/) repo as a base. However, we deleted some code we didn't use for this example.

### About this repo
This repo is part of a tutorial where we explain how internationalize an Angular 6 application, also know as i18n.
Internationalizing our app means that it will be available in different languages, we will have a multi language angular website. The good news is that the new Angular CLI can help us with this task.

### Step by step tutorial
https://angular-templates.io/tutorials/about/angular-internationalization-i18n-multi-language-app

### Installation
* `npm install`

### Development (Client-side only rendering)
* run `npm run start` which will start `ng serve`

### Demo
https://i18n-demo-angular-templates.herokuapp.com/

### Build your app for a specific language
**`ng serve --configuration=es`**
or
**`ng serve --configuration=en`**

### Build your app for Production with i18n multi language
**`npm run build:i18n-ssr && npm run serve:ssr`** - Compiles your application and spins up a Node Express to serve your Universal application on `http://localhost:4000`.

# License
[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](/LICENSE)
