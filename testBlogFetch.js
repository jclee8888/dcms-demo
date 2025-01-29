const fetchBlogs = require('./src/_data/blogs'); // Adjust the path if your blogs.js is elsewhere
const fetchGraphBlogs = require('./src/_data/graphBlogs');

// Call the function and log the output
(async () => {
    const blogs = await fetchGraphBlogs();
    console.log("Fetched Blogs:", blogs);

    // Optional: Check if blogs were successfully fetched
    if (blogs.length > 0) {
        console.log(`Successfully fetched ${blogs.length} blogs.`);
    } else {
        console.log("No blogs fetched or an error occurred.");
    }
})();