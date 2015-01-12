# httpinspector
_A simple node js server printing out details about http requests and responding with a standard response._

This can be helpful if you want to inspect http requests that your app makes, but you don't have access to the server logs or detailed logging at the client side. Under these circumstances it can sometimes be difficult to troubleshoot failing requests. This simple tool aims to provide a complete log of your http request without having to install/configure a proxy or similar.

## Usage
To start the server simply server.js with node. You can optionally provide the port the server should listen to via a command line argument. The default port is 5000.

<pre><code>node server.js 5000</code></pre>

Then just configure your application to make web service calls against http://localhost:5000. This will print out debug details about the request to the console.

## Output
Requests are separated with a line of asterixs and the request method. The first line of each request shows the url path. Then all header parameters are printed out in JSON format. The entire raw body (payload) of the http request is displayed at the end of each request (if any). Here are some examples:

<pre><code>
* GET ************************************
/service/api/users
{ host: 'localhost:5000',
  accept: 'application/json',
  version: '1.0',
  'accept-language': 'en-us',
  'accept-encoding': 'gzip, deflate',
  'content-type': 'application/json; charset=utf-8',
  'user-agent': 'myapp/1 CFNetwork/720.1.1 Darwin/14.0.0 (x86_64)',
  connection: 'keep-alive' }

* POST ************************************
/service/api/times
{ host: 'localhost:5000',
  accept: 'application/json',
  version: '1.0',
  'accept-encoding': 'gzip, deflate',
  'accept-language': 'en-us',
  'content-type': 'application/json; charset=utf-8',
  'content-length': '152',
  'user-agent': 'myapp/1 CFNetwork/720.1.1 Darwin/14.0.0 (x86_64)',
  connection: 'keep-alive' }
{"activityId":"345","comment":"Just a test","date":"20150112","projectId":"USI00028"}
</code></pre>
