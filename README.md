# 🥗 Meallie

[![Netlify Status](https://api.netlify.com/api/v1/badges/447ff5f1-5483-4abc-acd7-026c17f9bb2c/deploy-status)](https://app.netlify.com/sites/meallie/deploys) [![gitmoji badge](https://img.shields.io/badge/gitmoji-%20😜%20😍-FFDD67.svg?style=flat-square)](https://github.com/carloscuesta/gitmoji)

Fresh meals everyday.

## What's this about?

This is a repository containing a SPA/Universal application using [TheMealDB](https://www.themealdb.com) to display a random meal on the dashboard page, enable serching the database and display all meal details in a nice way.

## Why?

Personal case study that could serve as a demo application for the following core tools.


* [Nuxt](https://nuxtjs.org/)
* [Bulma](https://bulma.io/)
* [Buefy](https://buefy.org/)
* [Vue Chimera](https://github.com/chimera-js/vue-chimera)

## Demo

[You can see the live demo here.](https://meallie.com)

## Architectural decisions

The application was architecturally built to be as encapsulated as possible within the context of the Meallie application.

The application is structured around Pages and Components.

### Directory structure

Global components are placed on the upmost `components` library and contextual components such as ones that are utilised by specific pages, are placed within a `components` directory within the parent component.

Other than this, the directory structure conforms the default Nuxt framework structure.

The interoperability of the components in external contexts is limited by the use of  Vue extension libraries such as VueFontawesome and Vue Chimera which require certain attributes to be accesible within the `this` scope of the coponents.

### Global styles

While in a component driven development manner it is desired to have scoped styles, in reality browsers themselves will bring global styles to the context of an application plus style-code duplication will occur frequently with larger applications.

This given, I took the decision to have a minimal set of global modifier components to utilise across components. This practice is the same applied by libraries such as Bulma and Tailwind.

In short, yes, the components require certain global styles to work but it's all functional styles that reduce duplication and development time.

### State management   

Being a simple application, there was no need for advanced state management practices.

Sophisticated state management is a tool best used sparingly as its benefits can quickly outweight its costs on simple applications that could have done without it.

### Tests

Having only a couple of hours to build the application, I quickly came to the conclusion that it was unrealistic to try to build what was my end-goal-user-experience while testing every bit of it, therefore tests are not available.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
