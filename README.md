# Travis CI Favicon

Show the last build result as a favicon on your page.

## Demo

[Here's a demo](http://manuel.manuelles.nl/travis-favicon/)

## Screens

![travis-favicon](http://manuel.manuelles.nl/travis-favicon/images/travis-favicon.png "travis favicon states")

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/manuelvanrijn/travis-favicon/master/dist/travis-favicon.min.js
[max]: https://raw.github.com/manuelvanrijn/travis-favicon/master/dist/travis-favicon.js

In your web page add the following lines:

```html
<script src="dist/travis-favicon.min.js"></script>
<script>
  TravisFavicon("username", "project-name");
</script>
```

## Changelog

A detailed overview of can be found in the [CHANGELOG](https://github.com/manuelvanrijn/travis-favicon/blob/master/CHANGELOG.md).

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [grunt](https://github.com/gruntjs/grunt).

_Also, please don't edit files in the "dist" subdirectory as they are generated via grunt. You'll find source code in the "src" subdirectory!_

## License
Copyright (c) 2012 Manuel van Rijn
Licensed under the MIT, GPL licenses.

[![githalytics.com alpha](https://cruel-carlota.pagodabox.com/68f44260d07c8f71003202bc5ce7a6c0 "githalytics.com")](http://githalytics.com/manuelvanrijn/travis-favicon)
