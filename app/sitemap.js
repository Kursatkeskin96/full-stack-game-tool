
const URL = "https://www.albionjourney.com";

export default async function sitemap() {
  // Fetch all posts

  const routes = [
    "",
    "/guides",
    "/guides/posts/how-to-use-albion-craft-calculator",
    "/guides/posts/how-to-use-albion-refine-profit-calculator",
    "/guides/posts/maximizing-profits-in-albion-online-transmutation",
    "/guides/posts/how-to-start-albion-online-eu-server",
    "/market",
    "/profit-calculator/item-calculator",
    "/profit-calculator/refine-calculator",
    "/market/sell-item",
  ].map((route) => ({
    url: `${URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  return [...routes];
}
