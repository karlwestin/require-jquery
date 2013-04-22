({
    appDir: "../",
    baseUrl: "scripts",
    dir: "../../webapp-build",
    // comment out to minify the built JS
    optimize: "none",

    // point to path config in main.amd
    mainConfigFile: "main.amd.js",
    modules: [
        //Optimize the application files. jQuery is not 
        //included since it is already in require-jquery.js
        {
            exclude: ["jquery"],
            name: "main.amd"
        }
    ]
})
