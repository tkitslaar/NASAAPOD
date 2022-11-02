# Customer Portal SPA Template: Vue 3

## Table of Contents
* [Getting Started](#getting-started)
* [Contributing to the template](#contribute)
* Get to work on your app!
    * [Set up this template as the basis for your project](#use-this-template-to-start-a-new-project)
        * [In an existing repo](#in-an-existing-repo)
        * [In a new repo](#in-a-new-repo)
    * [SPAship deployment](#spaship-deployment)
        * [Install SPAship](#step-one-access--install-spaship)
        * [Akamai SPA path setup](#step-two-publish-spa-path-to-akamai)
        * [Akamai SPA assets path setup](#step-three-publish-spa-assets-path-to-akamai)
        * [Building SPA assets](#build-code-for-app-with-image--media-assets)
        * [Routing and handling urls](#routing-and-handling-urls)
        * [Deployment workflow](#deployment-workflow)
    * [Lighthouse CI/CD](#lighthouse-cicd)
    * [External Resources](#external-resources)

***
## Getting Started
you need node, nvm (or any other node version manager) and mkcert all locally installed 

0. [install mkcert for your OS](https://github.com/FiloSottile/mkcert#installation)
1. `npm install`
2. `npm run mkcert`
    - **Windows** users: See [mkcert - Windows](https://github.com/FiloSottile/mkcert#windows) for install instructions. You must run the command in `windows terminal` or `powershell`.
3. `npm start`
4. change the routes to reflect your project's path   
    in `vite.config.ts`: on line 8   
    in `spandx.config.ts`: on lines 21, 40 and 42

[back to top](#table-of-contents)
***
## Contribute

### Feel free to make changes directly in this branch. You will be resetting any commits you make when you finally push up your changes, using the following commands:
### To maintain one commit per branch, use these commands after you commit all your changes:
    git reset $(git commit-tree HEAD^{tree} -m "initial commit")   
    git push --force origin vue-template
***
## Use this template to start a new project
### In an existing repo
1. `git remote add fork https://gitlab.cee.redhat.com/customer-platform/spa-template.git`
2. `git fetch fork vue-template `
3. ` git checkout -b <fork-branch> fork/vue-template `
4. `git remote rm fork`
### In a new repo
1. set up a new repo with a `<new-repo-url>`
2. ` git clone https://gitlab.cee.redhat.com/customer-platform/spa-template.git <new-repo-name> `
3. ` git checkout vue-template `
4. ` git remote rm origin `
5. `git remote add origin <new-repo-url> `
6. `git branch -M main`
7. optional - remove all prior commits: `git reset $(git commit-tree HEAD^{tree} -m "initial commit")` 
8. `git push -u origin main`

[back to top](#table-of-contents)
***
## SPAship Deployment

### **STEP ONE**: Access + Install SPAship
* [Follow the instructions here](https://docs.google.com/document/d/18UkX3KtiC-tqm381qARBm0DSWjK0aMbQxfBya94QQ0U/edit?skip_itp2_check=true#heading=h.g3tsvxdc2yr3) to:      
    * gain access to the `spaship-users` rover group  
    * log into the SPA manager
    * create unique API keys  
    * install the SPAship CLI
    * set up a `spaship.yaml` file for your project
 
### **STEP TWO**: Publish SPA Path to Akamai

* [Follow the instructions here to run the Jenkins pipeline for publishing routes to Akamai.](https://docs.google.com/document/d/1hxzmSx6dde35Ei-FNHnoaUoUfdo2OVNEfkveDTV_u_Y/edit#heading=h.xlzonryqy8r6)
    * Please note, if there are other apps that exist as subpaths of the SPA, deselect the `SPA_PATH_CATCHALL` in the [Jenkins Pipeline](https://jenkins.dxp.redhat.com/job/SPAship/job/SPAPublish_accessPortal/) Build Form.
    * An example of a SPA with other apps that exist on its subpaths is `/security`. CVE-Details lives at `/security/cve` and Security Search lives at `/security/security-updates` but we want to keep those paths separate.
    * For CVE Details or Security Search, you can keep the `SPA_PATH_CATCHALL` selected, because there are no apps that live on their subpaths.

### **STEP THREE**: Publish SPA Assets Path to Akamai

* Please note the following will only work if you have set up the appropriate akamai route in step three above and your app is set up using Vite.
* Return to the [Jenkins Pipeline](https://jenkins.dxp.redhat.com/job/SPAship/job/SPAPublish_accessPortal/) Build Form and set up your asset path with the following parameters:  
    * ``SPA_PATH`` set to `{nameOfSPA}/spa-assets/*`  
    * keep `SPA_PATH_CATCHALL` selected
### **Build code for app with image + media assets:**
* The vite config file at `vite.config.ts` is set up to output assets in a `dist/spa-assets/` folder, with all assets as top-level children.
    * If your app is a larger app with image and media assets, consider using the following code to organize your build with sub-folders named after their respective asset types.
```
// vite.config.ts

export default defineConfig({
    plugins: [
        ...
    ],
    ...
    build: {
        rollupOptions: {
            output: {
            assetFileNames: (assetInfo) => {
                let extType = assetInfo.name.split(".").pop();
                if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
                extType = "img";
                }
                return `spa-assets/${extType}/[name].[hash][extname]`;
            },
            chunkFileNames: "spa-assets/js/[name].[hash].js",
            entryFileNames: "spa-assets/js/[name].[hash].js"
            }
        }
    },
    base: "yourAppPath",
        ...
})
```

## Routing and handling urls

 Our SPAs that live on the Portal need to be conscious of routing and how assets that don't exist (as pages or valid routes) co-exist with Drupal in serving the appropriate experience for our end users.

 ### **404s**

In single page apps, typically the directory served up by a server contains a html file as a starting point, typically `index.html`. All sub-routes are then either routed to other directories or internally re-routed back to the parent directory. These behaviors can be configured server-side, or with a proxy/cdn. The Portal heavily takes advantage of Akamai to proxy to different servers/origins based on special rules.

There are two outcomes for 404 pages given the configuration we have for SPAs on the Portal.

<ul>
<li>A path that doesn't match an Akamai rule skips over the server/origin and is proxied to the next matching rule. (e.g. /start/foo)</li>
<li>A path that does match is directed to the appropriate directory and then needs to be handled by a SPA. (e.g. /security/security-updates/#/notfound)</li>
</ul>

SPAs that don't know anything about sub routes or resources outside the directory can typically assume a "happy path" with routing assuming the user landed on the directory directly. There are of course exceptions with query params and ids.

SPAs that should be conscious of sub-paths should match the appropriate url with components that correspond to those paths. Failing to make a match should show the appropriate experience, typically a 404. 

 ### **Routing Libraries**
React and Vue both have excellent libraries to assist with url matching. At the time of writing two libraries are essentially the default choice for routing in their respective frameworks:

[React - React Router](https://reactrouter.com/en/main)
[Vue - Vue Router](https://router.vuejs.org/)

[back to top](#table-of-contents)
***

 ## Deployment workflow

 The `.gitlab-ci.yml` file sets up a pipeline that automatically runs unit and end-to-end testing suites when a Merge Request is made. 

 ### **Pre-prod**

The pipeline allows you to manually deploy to SPAship `Stage` and `QA` environments after merging to a branch called `pre-prod`. 

 ### **Prod**
Once your changes look good in pre-production environments, you can make a Merge Request from your feature branch to `main`. After merging, create a tag based on your merge commit and go to `Pipelines` under `CI/CD` in the Gitlab sidebar menu. You will see the option to manually deploy the committed code to production.

After merging any code to main, merge your code to `pre-prod` so you can keep those environments aligned.

[back to top](#table-of-contents)
***

## Lighthouse CICD

The Lighthouse CICD is set up in the [/security](https://gitlab.cee.redhat.com/customer-platform/security/) repo as of October 27, 2022. Use it as a reference while you go through the following steps.

### Step 1: Get Lighthouse running locally
- Set up a `.lighthouserc.js` config file at the root of your application with your dev server's application URL, start command and LHCI server address - which should be `https://lighthouse.one.redhat.com/`.
- Run `npm install -g @lhci/cli@^0.9.0` to install the Lighthouse CLI.
- [Read the docs here](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/getting-started.md#project-creation) and set up your project using the `lhci wizard` command.
- Once you have your build and admin tokens, save your build token as a Gitlab CICD variable. In /security it is set up as `LHCI_BUILD_TOKEN`. Save your admin token locally in a .env file.
- Run the `lhci autorun` command with any additional flags you may need ([see docs here](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md)). Before using autorun, you may need to set the following variable to avoid a certificate related error: `export NODE_TLS_REJECT_UNAUTHORIZED='0'`.
- Add any artifacts or file names created after tests have completed to your `.gitignore`.
### Step 2: Get Lighthouse running in Gitlab
- Create a folder, `lighthouseci` containing a `manifest.json` file. The file can contain an empty object - it doesn't matter, it is just a placeholder for lighthouse to place artifacts and it will be overwritten.
- Copy the code found in the `.gitlab-ci.yml` file in /security, under the Lighthouse-Test section and paste it to your app's gitlab yml file.
- Copy the spandx-ci.config.js file in /security to your own app's root folder.
- Set up a start command for your ci that uses the spandx-ci config. See the `start:ci` script in /security's `package.json` for reference.
- Push up your changes to gitlab and make an MR! The Lighthouse tests should run and give you appropriate feedback.
- Please update these docs if your process was different from what is described above!

## External Resources
### Offical Vite Docs for Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

### Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

### Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

[back to top](#table-of-contents)