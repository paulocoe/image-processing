# Image Pocessing API

Image Processing API is a study app that allows users to resize and store processed images, powered by node js, express and typescript.

### Tech

Image Processing API uses the following tech:

* [Node.js] - JavaScript runtime built on Chrome's V8 JavaScript engine.
* [Express] - Fast, unopinionated, minimalist web framework for Node.js.
* [Typescript] - Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.
* [Jasmine] - Behavior Driven Development testing framework for JavaScript.
* [Sharp] - High performance Node.js image processing

### Installation

Image Processing API requires [Node.js] to run.

Install the dependencies.
```sh
cd image-processing
npm install
```

Build the app.
```sh
npm run build
```

Run unit tests.
```sh
npm test 
```

Run in dev mode with nodemon
```sh
npm run dev
```

Finally, run the app

```sh
npm start
```

### Usage

Once the app runs, it should start listening on localhost port 3000.
You can test the app by hitting GET with the following route
```
http://localhost:3000/images/<IMAGE NAME>/<WIDTH>/<HEIGHT>
```
It currently only resizes pre-stored images. The available image names are the following:
- encenadaport
- fjord
- santamonica
- palmtunnel
- icelandwaterfall

### Issues/Questions
I Hope this project can help Software Engineers when implementing image resizing in their node js apps.
Feel free to create issues with problems or questions you may have with the app or send me a DM.

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [Node.js]: <https://nodejs.org/en/>
   [Express]: <https://expressjs.com/>
   [Typescript]: <https://www.typescriptlang.org/>
   [Jasmine]: <https://github.com/jasmine/jasmine>
   [Sharp]: <https://sharp.pixelplumbing.com/>
   

