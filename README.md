# flask-vue-app-bintray

## Status

[![Download](https://api.bintray.com/packages/zlig/debian/flask-vue-app-bintray/images/download.svg)](https://bintray.com/zlig/debian/flask-vue-app-bintray#files)
[![Build Status](https://travis-ci.org/zlig/flask-vue-app-bintray.svg?branch=master)](https://travis-ci.org/zlig/flask-vue-app-bintray)
[![License](https://img.shields.io/badge/License-LGPL%202.1-blue.svg)](https://opensource.org/licenses/LGPL-2.1)

## Description

Build a Python Flask web application combined with Vue.js in a Debian .deb package using Travis and upload to Bintray 


## Development

Use `local-dev.sh` script to build and run locally the Flask server with API and the Vue web application with DevTools enabled for [Firefox](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/) and [Chrome](https://chrome.google.com/webstore/detail/vuejs-devtools/):

```
$ ./local-dev.sh
```
Then, access the application locally using a browser at the address: [http://0.0.0.0:5000/](http://0.0.0.0:5000/).


## Usage

* Install the repository information and associated GPG key (to ensure authenticity):
```
$ echo "deb https://dl.bintray.com/zlig/debian /" | sudo tee -a /etc/apt/sources.list.d/zlig.list
$ sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com EA3E6BAEB37CF5E4
```

* Update repository list of available packages and clean already installed versions
```
$ sudo apt update
$ sudo apt clean
```

* Install package
```
$ sudo apt install flask-vue-app-bintray
```

* Reload services and start ours
```
$ sudo systemctl daemon-reload
$ sudo systemctl start flask-vue-app-bintray
$ sudo systemctl status flask-vue-app-bintray
```
