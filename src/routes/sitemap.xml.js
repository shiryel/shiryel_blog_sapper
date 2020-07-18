import posts from './blog/_posts.js';

const render = (posts) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://www.blog.shiryel.com</loc>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    </url>
  ${posts.map(post => `
    <url>
      <loc>https://www.blog.shiryel.com/post/${post.slug}/</loc>
      <lastmod>${new Date(post.date).toISOString()}</lastmod>
      <changefreq>mounth</changefreq>
      <priority>1</priority>
    </url>
  `).join('\n')}
</urlset>
`;

export function get(req, res, next) {
  res.setHeader('Cache-Control', `max-age=0, s-max-age=${300}`); // 5 minutes
  res.setHeader('Content-Type', 'application/xml');

  const xml = render(posts);
  res.end(xml);
}
