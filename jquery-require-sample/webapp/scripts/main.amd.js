require.config({
    "paths": {
        // this is the only place where you point to the actual location
        // of the jquery file. For the rest, only use the module name, which is "jquery"
        // the reason we need to do this is that jQuery loads as a named module:
        // define("jquery", [], function() { return jQuery; });
        "jquery": "//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min"
    }
});
  
define(["jquery", "libs/jquery.alpha.amd", "libs/jquery.beta.amd"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $('body').alpha().beta();
    });
});
