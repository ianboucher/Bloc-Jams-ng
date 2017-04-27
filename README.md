Bloc-Jams
=================

Application Link
----------------
http://bloc-jams-testss.herokuapp.com/

What is Bloc-jams?
------------------
Bloc Jams is a single-page music player application which features interactive scroll bars, volume controls and playlists using [AngularJS](https://angularjs.org/) and Sass on the front-end and Rails on the backend.

How does it work?
-----------------
Scroll through the landing page and view the random artwork that is presented. Afterword click on the Library button in the top right-hand side of the screen. It will take you to a different view instantly thanks to AngularJS and show you a myriad of albums. Click on a random album and play a song, but ensure that your volume is turned on.

Package Manager Definitions
------------------------------------------

**[Node.js](https://www.npmjs.com/)** - The directory into which Node installs its app-specific packages

**[Bower](http://bower.io/)** - is a package manager for Javascript libraries that allows you to define, version, and retrieve your dependencies


Languages Used
---------------
- [AngularJS](https://angularjs.org/)
- [Ruby on Rails](http://rubyonrails.org/)
- [HTML 5](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS3)
- [Sass](http://sass-lang.com/)




Installation Steps
-------------------

You need to have [Node.js](https://www.npmjs.com/), and [Bower](http://bower.io/) installed before cloning.

Start by cloning the repository.

`$ git clone https://github.com/ilitvak/bloc-jams.git`

Once that's complete, install the remaining dependencies by running

`$ npm install`

Running the Application
------------
Two tabs must be open in the terminal in order to run this application.

In one tab, run


`$ npm start`

In another tab,

`Use this terminal for git commands`

The application runs on port 3000. To change the port, modify the number highlighted below

```js
connect: {
  server: {
    options: {
      // Change this value here to the desired port number
      port: 3000,
      hostname: 'localhost',
      base: './dist',
      useAvailablePort: true
    }
  }
}
