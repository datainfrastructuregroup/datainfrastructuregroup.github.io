const path = require("path");
const { DateTime } = require("luxon");

module.exports = function(eleventyConfig) {
  // Passthrough assets
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets"
  });

  // Watch CSS
  eleventyConfig.addWatchTarget("src/assets/css/");

  // Collections: blog posts
  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("src/blog/posts/**/*.md").sort((a,b) => b.date - a.date);
  });

  // Collections: projects
  eleventyConfig.addCollection("projects", (collection) => {
    return collection.getFilteredByGlob("src/projects/**/*.md");
  });

  // Shortcode: year
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);

  // Filter: date formatting (Nunjucks/Liquid/11ty)
  eleventyConfig.addFilter("date", (dateObj, format = "yyyy-LL-dd") => {
    const d = (dateObj instanceof Date) ? dateObj : new Date(dateObj);
    return DateTime.fromJSDate(d).setZone("utc").toFormat(format);
  });

  // Data deep merge
  eleventyConfig.setDataDeepMerge(true);

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["md", "njk", "html"]
  }
}
