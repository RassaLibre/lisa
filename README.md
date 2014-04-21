#Lisa Dev-Stack
Lisa Dev-Stack is a complex stack for creating advanced applications with AngularJS. The following technologies are more or less integrated:

 - **AngularJS** (for client-side)
 - **NodeJS** + **ExpressJS** (for the server side)
 - **CoffeeScript** (For better JS syntax)
 - **CoffeeLint** (For style checking)
 - **Google Closure Compiler** (for compiling your AngularJS code)
 - **Stylus** (for CSS stylesheets)
 - **GruntJS** (for automate all the tasks)
 - **KarmaJS** (for running unit tests and end-to-end tests)

##Installation
To install the dev-stack just clone the repo to a folder and run following command: 

    npm install

This will install all the dependencies that are needed.

##Testing
###Development
Unfortunately i have some problems with grunt-karma plugin together with other plugins so my temporary solution for running unit and e2e tests is via Karma-cli. The one and only dependency is that you have Karma installed globally. In the root folder simply run for e2e tests:

	karma start karma/karma-e2e.conf.js

and for unit tests:

	karma start karma/karma-unit.conf.js

The disadvantage of this is that you end up with at least four terminal windows. One for running server, one for Grunt and two for the tests.

###Production
Lisa also supports production testing. Once you have created your build and you followed the manual above to have a fully functional build, you can run your e2e and unit tests on the compiled and production-ready application. This is done with two commands in the terminal:

    karma start karma/prod/karma-e2e.conf.js

and:

    karma start karma/prod/karma-unit.conf.js

##Usage

###Tasks
First of all, you have to start the server. Go to the root directory and simply run the following command in your terminal:
    
    node server.js

There are two main tasks you might want to use:

 1. **default** (for linging your coffeescript, creating a .JS file, compiling stylesheets and watching for changes)
 2. **build** (for compiling all your .JS files with Google Closure Compiler and build the whole project in the build folder)

To run this tasks, simply go to the root folder and run following command in your terminal:

    grunt default|compile

####Default task
The main task. To run this, simply go to the root directory in your terminal and write:

    grunt

This task will:

1. Generate a minified CSS file from all .styl files in your application
2. Lint all your .coffee files in order to write a standartized coffeescript code
3. Generate a .js file from all of your CoffeeScript files
4. Starts a watcher so if you do any changes in your code, the whole procedure starts all over again

####build task
This task simply runs the dist.js file through Google Closure Compiler so the file is minified and compiled. The file is placed in the build/ folder. After this, other files (assets/, index.html, partials/) are moved to the folder in order to have a ready-to deploy application. 

#####Before deployment
Deployment is a bit of a problem, but i am working on it. The build task compiles all the JavaScript code and moves all the important files to the build folder. This folder contains almost everything that is necessary for running the application. There are several steps that have to be made so everything is ready for the deployment. First of all remove the following script from the index.html file in the build folder:

    <script src="http://localhost:35729/livereload.js"></script>

This script takes care of live reload during the development and it is no longer needed in production. The second adjustment is that you have to change the path to the compiled.js file. This is done by changing the following line in the index.html file in the build folder:

    <script src="js/dist/dist.js"></script>

Change this line to this:

    <script src="js/compiled.js"></script>

In this moment everything is ready for the production. Run the following command in the terminal to start your production server:

    node server-prod.js

Do not forget to run the production tests described above before the deployment!

##Recommendations
###Sublime Text settings
I highly recommend to use Sublime Text but it is not required. If you do, you might want to set transforming tabs to 4 spaces if you want your code to pass checking with CoffeeLint. This can be done by opening *Preferences.sublime-settings* file and adding two more attributes:

    {
        "tab_size": 4,
        "translate_tabs_to_spaces": false
    }
###Terminal madness
I am using 5 windows in terminal:

![terminal screen devided to 5 windows](http://distilleryimage6.ak.instagram.com/b6d56bf8c28511e3baf70002c99cd98e_8.jpg)

One for running the grunt command, one for node command, one for karma-unit and karma-e2e and one for git and other stuff.   