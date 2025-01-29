const fetchBlogs = require('./src/_data/blogs');
const fetchGraphBlogs = require('./src/_data/graphBlogs');


(async () => {
    const blogs = await fetchGraphBlogs();
    console.log("Fetched Blogs:", blogs);

    if (blogs.length > 0) {
        console.log(`Successfully fetched ${blogs.length} blogs.`);
    } else {
        console.log("No blogs fetched");
    }
})();