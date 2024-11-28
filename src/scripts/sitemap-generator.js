require("dotenv").config(); // Load environment variables from .env file
const fs = require("fs");
const blog = require("../components/data/blog.json");

async function generateSitemap() {
    try {
        const baseURL = process.env.REACT_APP_BASE_URL || "https://default-domain.com";
         // Access the environment variable

        const staticRoutes = [
            { path: "/", priority: 1.00 },
            { path: "/about/", priority: 0.80 },
            { path: "/portfolio/", priority: 0.80 },
            { path: "/contact/", priority: 0.80 },
        ];

        let dynamicRoutes = [];
        if (blog && blog.blogItems) {
            dynamicRoutes = blog.blogItems.map((post) => ({
                path: `/portfolio/${post.blogPost}/`,
                priority: 0.70,
            }));
        } else {
            console.error("No blogPosts found in blog data");
        }

        const sitemapRoutes = [...staticRoutes, ...dynamicRoutes];

        const sitemapHeader = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        <!-- Generated with Sitemap Generator Script -->`;
        const sitemapFooter = `</urlset>`;
        let sitemapContent = "";

        sitemapRoutes.forEach((route) => {
            sitemapContent += `
            <url>
                <loc>${baseURL}${route.path}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <priority>${route.priority.toFixed(2)}</priority>
            </url>`;
        });

        const sitemapXML = `${sitemapHeader}\n${sitemapContent}\n${sitemapFooter}`;
        fs.writeFileSync("./public/sitemap.xml", sitemapXML); // Save in the public folder

        console.log("Sitemap generated successfully.");
    } catch (error) {
        console.error("Error generating sitemap:", error);
    }
}

generateSitemap();
