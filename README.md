# Open Smart Environment Yoctopuce package

This package integrates some Yoctopuce sensor into
the OSE ecosystem.

## Status
- Pre-alpha stage (insecure and buggy)
- Unstable API
- Gaps in the documentation
- No test suite

This is not yet a piece of download-and-use software. Its important
to understand the basic principles covered by this documentation.

Use of this software is currently recommended only for users that
wish participate in the development process (see Contributions).

TODO: Make "Contributions" a link

## Getting started
To get started with OSE, refer to the [ose-bundle](http://opensmartenvironment.github.io/doc/modules/bundle.html) package and
[Media player example application](http://opensmartenvironment.github.io/doc/modules/bundle.media.html). You can read the entire OSE
documentation [here]( http://opensmartenvironment.github.io/doc).

## Modules
Open Smart Environment Yoctopuce package consists of the following modules:
- Yoctopuce meteo kind
- OSE yoctopuce core
- OSE yoctopuce content

### Yoctopuce meteo kind
[Entry kind](http://opensmartenvironment.github.io/doc/classes/ose.lib.kind.html) representing Yoctopuce meteo sensors.

Module [Yoctopuce meteo kind](http://opensmartenvironment.github.io/doc/classes/yoctopuce.lib.meteo.html) reference ... 

### OSE yoctopuce core
Core singleton of ose-yoctopuce npm package. Registers [entry kinds](http://opensmartenvironment.github.io/doc/classes/ose.lib.kind.html)
defined by this package to the `"control"` [scope](http://opensmartenvironment.github.io/doc/classes/ose.lib.scope.html).

Module [OSE yoctopuce core](http://opensmartenvironment.github.io/doc/classes/yoctopuce.lib.html) reference ... 

### OSE yoctopuce content
Provides files of OSE yoctopuce package to the browser.

Module [OSE yoctopuce content](http://opensmartenvironment.github.io/doc/classes/yoctopuce.content.html) reference ... 

## Contributions
To get started contributing or coding, it is good to read about the
two main npm packages [ose](http://opensmartenvironment.github.io/doc/modules/ose.html) and [ose-bb](http://opensmartenvironment.github.io/doc/modules/bb.html).

This software is in the pre-alpha stage. At the moment, it is
premature to file bugs. Input is, however, much welcome in the form
of ideas, comments and general suggestions.  Feel free to contact
us via
[github.com/opensmartenvironment](https://github.com/opensmartenvironment).

## Licence
This software is licensed under the terms of the [GNU GPL version
3](../LICENCE) or later
