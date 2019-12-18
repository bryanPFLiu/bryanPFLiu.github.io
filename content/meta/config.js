const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "PersonalBlog - a blog for DevOps and Test Automation", // <title>
  shortSiteTitle: "PersonalBlog DevOps & Automation", // <title> ending for posts and pages
  siteDescription: "PersonalBlog for DevOps and Test Automation.",
  siteUrl: "https://gatsby-starter-personal-blog.greglobinski.com",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Bryan Liu",
  authorTwitterAccount: "bryanliu0817",
  // info
  infoTitle: "bryan liu",
  infoTitleNote: "personal blog",
  // manifest.json
  manifestName: "PersonalBlog - a blog starter for GatsbyJS",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "bryan0817@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/bryanPFLiu" },
    { name: "twitter", url: "https://twitter.com/bryanliu0817" },
    { name: "facebook", url: "https://www.linkedin.com/in/bryan0817/" }
  ]
};
