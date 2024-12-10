import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const domain = 'https://swingersgolfapp.com';

  // Define the static URLs with their respective priorities
  const staticUrls = [
    { loc: `${domain}/`, priority: 1.0 }, // Highest priority for the base route
  ];

  // Combine static and dynamic URLs
  const urls = [...staticUrls];

  // Generate the sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls
        .map(({ loc, priority }) => {
          return `
            <url>
              <loc>${loc}</loc>
              <changefreq>daily</changefreq>
              <priority>${priority}</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
