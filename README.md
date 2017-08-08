# Race-condition-demo

A demonstration of a race condition bug.

The JS file contains two calls to Wikiquote's API, each to a different TV show. Both calls are set up so that they cancel the excecution of the other. Thus whichever call returns first "wins" the race condition and displays its quote upon the page.
