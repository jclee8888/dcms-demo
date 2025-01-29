const fs = require("fs");
const path = require("path");


module.exports = function (eleventyConfig) {


    // allows 11ty to read and compile css file
    eleventyConfig.addPassthroughCopy({
        "./src/robots.txt": "robots.txt",
        "./src/assets/css": "assets/css",
        "./src/assets/js": "assets/js",
        "./src/assets/images": "assets/images",
        "./src/assets/fonts": "assets/fonts"
    })

    // component shortcodes
    eleventyConfig.addShortcode("socialMedia", function() {
        const filePath = path.join(__dirname, "src", "_includes", "components", "social.html");
        return fs.readFileSync(filePath, "utf8");
      });

      eleventyConfig.addShortcode("location", function() {
        const filePath = path.join(__dirname, "src", "_includes", "components", "location.html");
        return fs.readFileSync(filePath, "utf8");
      });

      eleventyConfig.addShortcode("email", function() {
        const filePath = path.join(__dirname, "src", "_includes", "components", "email.html");
        return fs.readFileSync(filePath, "utf8");
      });

      eleventyConfig.addShortcode("catering", function() {
        const filePath = path.join(__dirname, "src", "_includes", "components", "catering.html");
        return fs.readFileSync(filePath, "utf8");
      });

      eleventyConfig.addShortcode("blogcard", function() {
        const filePath = path.join(__dirname, "src", "_includes", "components", "blogcard.njk");
        return fs.readFileSync(filePath, "utf8");
      });

    // allows 11ty to look for auto updates to trigger hot-reload
    eleventyConfig.addWatchTarget("./src/assets/css");
    eleventyConfig.addWatchTarget("./src/assets/js");
    eleventyConfig.addWatchTarget("./src/_includes/layouts");
    eleventyConfig.addWatchTarget("./src/_includes/components");

    // debug filter
    eleventyConfig.addFilter("debugger", (...args) => {
        console.log(...args)
        debugger;
    });

    return {
        dir: {
            input: "src",
            includes: "_includes",
            output: "public",
            data: "_data",
        },
        markdownTemplateEngine: 'njk',
        htmltEmplateEngine: 'njk',
        dataTemplateEngine: 'njk',
        passthroughFileCopy: true,

    }
}