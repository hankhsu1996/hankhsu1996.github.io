const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

const hostname = "https://hankhsu1996.github.io/";
const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/projects", changefreq: "daily", priority: 0.8 },
  { url: "/apps", changefreq: "daily", priority: 0.8 },
  { url: "/contact", changefreq: "daily", priority: 0.5 },
  { url: "/tag/robot", changefreq: "daily", priority: 0.5 },
  { url: "/tag/digital", changefreq: "daily", priority: 0.5 },
  { url: "/tag/analog", changefreq: "daily", priority: 0.5 },
  { url: "/tag/software", changefreq: "daily", priority: 0.5 },
];

// create sitemap stream
const smStream = new SitemapStream({ hostname: hostname });

// write each route to the stream
routes.forEach((route) => {
  smStream.write(route);
});

// end the stream
smStream.end();

// convert sitemap stream to string and write to file
streamToPromise(smStream)
  .then((data) => {
    fs.writeFileSync("dist/sitemap.xml", data.toString());
  })
  .catch((err) => {
    console.error(err);
  });
