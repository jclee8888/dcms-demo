require('dotenv').config();

const API_URL = 'https://demo.dotcms.com/api/v1/graphql';

const username = process.env.DOTCMS_USERNAME;
const password = process.env.DOTCMS_PASSWORD;

const AUTH_HEADER = 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64');
console.log('AUTH_HEADER');
// GraphQL Query
const QUERY = `
{
    BlogCollection {
        title
        urlTitle
        teaser
        publishDate
        tags
        author {
            firstName
            lastName
        }
        titleImage {
            versionPath
        }
    }
}`;


module.exports = async function () {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: AUTH_HEADER,
      },
      body: JSON.stringify({ query: QUERY })
    });

    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();

    // console.log('Fetched Blog Data:', JSON.stringify(data, null, 2));

    return data.data.BlogCollection || [];

  } catch (error) {
        console.error('Error fetching blog data from dotCMS:', error);
        return [];
  }
};


// DotCMS blog API call
// auth credentials stored in .env
// prod credentials will be stored in CF env variables

// require('dotenv').config();

// const API_URL = 'https://demo.dotcms.com/api/content/query/+contentType:Blog';

// const username = process.env.DOTCMS_USERNAME;
// const password = process.env.DOTCMS_PASSWORD;

// const HEADER = 'Basic' + Buffer.from(`${username}:${password}`).toString('base64');


// const fetchBlogs = async () => {

//     try {
//         const response = await fetch(API_URL, {
//             headers: {
//                 Authorization: HEADER,
//             },
//         });

//         if (!response.ok) {
//             throw new Error(`Failed to fetch blogs: ${response}`);
//         }

//         const data = await response.json();
//         return data.contentlets;
//     } catch (error) {
//         console.error("Error fetchnig blogs:", error);
//         return [];
//     }
// }

// module.exports = fetchBlogs;
