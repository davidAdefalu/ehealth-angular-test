# ehealth-angular





#### Prerequisites

You will need **git** to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

We also use a number of node.js tools to initialize and test angular-starter-bootstrap. You must have node.js and its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

#### ehealth-angular

To get you started you can simply clone `master` branch from the [ehealth-angular](git clone https://github.com/davidAdefalu/ehealth-angular.git) 

### change directory
 cd ehealth-angular



#### Install Dependencies

We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We need to install some global tools first:

```
npm install -g bower gulp
```

Then we will install local tools just for the project
```
run npm install from the root directory of the project.
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `src/vendor` - contains the angular framework files

*Note that `bower_components` folder would normally be used to install angular dependencies in the root folder but
angular-starter-bootstrap changes this location and folder through the `.bowerrc` file.  Putting it in the src folder makes it easier to serve the files by a webserver. Also calling it vendor makes it easier to know that content in that folder was not developed by us.*

*you can also run `bower install` normally from your project root.*


#### Updating Angular

You can update the tool dependencies by running:

```
npm update
```

This will find the latest versions that match the version ranges specified in the `package.json` file.

You can update the Angular dependencies by running:

```
bower update

```

This will find the latest versions that match the version ranges specified in the `bower.json` file.

## Running the code

#### Gulp

Gulp is a build system that can improve how we develop websites by automating common tasks, such as compiling preprocessed CSS, minifying JavaScript and reloading the browser. It makes our development workflow faster and more efficient.


#### Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files




#### Features included in the gulpfile
* *useref* : allow configuration of your files in comments of your HTML file
* *ngAnnotate* : convert simple injection to complete syntax to be minification proof
* *uglify* : optimize all your JavaScript
* *csso* : optimize all your CSS
* *rev* : add a hash in the file names to prevent browser cache problems
* *watch* : watch your source files and recompile them automatically
* *jshint* : JavaScript code linter
* *imagemin* : all your images will be optimized at build
* *Unit test (karma)* : out of the box unit test configuration with karma
* *e2e test (protractor)* : out of the box e2e test configuration with protractor
* *browser sync* : full-featured development web server with livereload and devices sync
* *angular-templatecache* : all HTML partials will be converted to JS to be bundled in the application
* **TODO** lazy : don't process files which haven't changed when possible

More information on gulp [here](http://www.smashingmagazine.com/2014/06/11/building-with-gulp/) and on the official website [here](http://gulpjs.com/).


# ehealth-angular 
