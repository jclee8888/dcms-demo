require('dotenv').config();

const API_URL = "https://demo.dotcms.com/api/v1/graphql";

const username = process.env.DOTCMS_USERNAME;
const password = process.env.DOTCMS_PASSWORD;

const AUTH_HEADER = "Basic " + Buffer.from(`${username}:${password}`).toString("base64");

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
    }
}`;


module.exports = async function () {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: AUTH_HEADER,
            },
            body: JSON.stringify({ query: QUERY })
        });

        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }

        const data = await response.json();
        return data.data.BlogCollection;
        
    } catch (error) {
        console.error("Error fetching blog data from dotCMS:", error);
        return [];
    }
};