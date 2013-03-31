<h1>Ti.WebWorkerWrapper</h1>

Wrapper for Web Workers in Titanium


<h2>Features</h2>
* Execute multi threaded jobs using Web Workers inside of a Ti.UI.WebView
* Multiple jobs can be run at once
* A single simple CommonJS file allowing for easy modification

<h2>How to install</h2>

Installing Ti.WebWorkerWrapper is straightforward, simply copy the Ti.WebWorkerWrapper.js file into your Titanium project.

Since Ti.WebWorkerWrapper is a CommonJS module, can you import the module anywhere in your app by simply using the require method.

For example:
```javascript
var mod = require('Ti.WebWorkerWrapper');
```

<h2>Example</h2>
Web Workers can provide a multi threaded approach to handling compute jobs.  A good test of this is to create a small iOS app that calculates the Fibonacci sequence for 5 random seeds in parallel.  All of the JavaScript files needed to run this sample projects are included with this repo.  Please see the below instructions on how install this example into your Titanium project.

<h3>Installing the example</h3>
1. First create a Titanium iOS project
2. Next copy the app.js from the repo into your project
3. Then copy the fibonacci.js from the repo into your project
4. Finally copy the Ti.WebWorkerWrapper.js from the repo into your project

You are now ready to run the example project.

<h3>Running the example</h3>
1. Run the project either in the iOS simulator or on an iOS device ( Android not supported )
2. Press the button labeled "Run Web Worker Test" and wait for the test to complete.

<h2>FAQ</h2>

* Can I use Titanium features in the worker file? 
Unfortunately no. You can only run JavaScript.  You can update the Ti.WebWorkerWrapper.js to post back events to help expose Ti APIs as needed.

* Android Support?
This should be coming as soon as the Ti.UI.WebView supports Web Workers.

<h2>Licensing & Support</h2>

This project is licensed under the OSI approved Apache Public License (version 2). For details please see the license associated with each project.

Developed by [Ben Bahrenburg](http://bahrenburgs.com) available on twitter [@benCoding](http://twitter.com/benCoding)

<h2>Learn More</h2>

<h3>Twitter</h3>

Please consider following the [@benCoding Twitter](http://www.twitter.com/benCoding) for updates 
and more about Titanium.

<h3>Blog</h3>

For module updates, Titanium tutorials and more please check out my blog at [benCoding.Com](http://benCoding.com). 
