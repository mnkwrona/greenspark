# Solution of the frontend app task
I created a Vue 3 application with Composition API, Pinia store, Vite build tool, and a simple service responsible for fetching the initial state of the application from the mocked API. API url is stored in an environment variable, as the app should be production-ready.

The app fetches the initial state from API on the `onBeforeMount` hook in the main component of the app (`GSProductWidgetsManager.vue`) and then passes widgets' data down to children components (array of `GSProductWidget.vue` components) through their prop. `GSProductWidget.vue` passes mutable settings values (`color`, `active` and `linked`) down to its children components (aka input-like components: `GSCheckbox.vue`, `GSToggle.vue` and `GSColorSelect.vue`). This way the initial state of the app is reflected at the mount.

When the user changes a widget's setting, each input-like component emits an event with the name of the changed property and its new value, which is next handled by `GSProductWidget.vue`, which then sends this event data and widget details up to `GSProductWidgetsManager.vue`. The last component updates the widget with new value in the store. This approach ensures that there is a single source of truth for the application state. I didn't persist the state in the browser, as there was no requirement defined for this, so with each page reload all the changes will be gone.

The application is styled with *Tailwind CSS* to speed up the custom styling of the components. I created a set of semantic color variables in the `base.css` file, so i.e. applying different color themes in the future would be easy. Some components, like 'GSToggle.vue', 'GSCheckbox.vue', and 'GSTooltip.vue' have transition effects for a nicer visual effect. I achieved it using the Vue.js Transition feature and effects provided by Tailwind CSS.

All the components can be tested in the implemented Storybook.


## Run the app locally
Add `.env` file with mock API endpoint:
```sh
VITE_API_URL=https://api.mocki.io/v2/016d11e8/product-widgets
```
I provided an `.env.example` file, so you can just use this file renamed.

Run:
```sh
yarn
yarn dev
```

## Run Storybook
```sh
yarn storybook
```
