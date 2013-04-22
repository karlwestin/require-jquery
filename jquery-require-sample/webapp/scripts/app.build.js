({
    appDir: "../",
    baseUrl: "scripts/",
    dir: "../../webapp-build",
    //Comment out the optimize line if you want
    //the code minified by UglifyJS
    optimize: "none",

    // point to the shim config we set up before
    mainConfigFile: "main.js",

    modules: [
        //Optimize the application files. jQuery is not 
        //included since it is already in require-jquery.js
        {
            name: "main"
        }
    ]
})
