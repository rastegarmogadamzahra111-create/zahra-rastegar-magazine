import type { MetadataRoute } from "next";

const siteUrl = "https://rastegarmogadamzahra111-create.github.io";
const basePath = "/zahra-rastegar-magazine";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/articles",
    "/contact",
    "/library",
    "/meaning-sparks",
    "/media",
    "/nava-va-nayesh",
    "/psychology",
    "/research",
    "/shop",
  ];

  return paths.map((path) => ({
    url: `${siteUrl}${basePath}${path}/`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
