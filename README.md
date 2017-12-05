# Poptart

A play application for trying out new patterns and tools

### Status
[![Build Status](https://travis-ci.org/flyiniggle/Poptart.svg?branch=master)](https://travis-ci.org/flyiniggle/Poptart)


### Installing

Install Python 2.7, NodeJS > 6.11, MySQL

Installing dependencies

```
pip install -r requirements.txt
npm install -g grunt-cli
npm install
```

### Building
```
manage.py syncdb
grunt //build, lint, and test
grunt build-static //build all static files - js, css, pre-compile templates, etc
grunt watch //run build-static tasks for static file changes
```

## Demo Data
Run any of the three batch files in ROOT/data: demodata.bat, demodatascale.bat, or demodatabigmclargehuge.bat.

### Running
```
manage.py runserver
node presentation/app.js
```