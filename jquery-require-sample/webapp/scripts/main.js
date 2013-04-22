require.config({
    "paths": {
        "jquery":  "libs/jquery"
    },
    "shim": {
        "libs/jquery.alpha": ["jquery"],
        "libs/jquery.beta": ["jquery"]
    }
});

define(["jquery", "libs/jquery.alpha", "libs/jquery.beta"], function($) {
    //the jquery.alpha.js and jquery.beta.js plugins have been loaded.
    $(function() {
        $('body').alpha().beta();
    });
});
