/** @type {import('next').NextConfig} */

const nextConfig = {
  optimizeFonts: true,
  reactStrictMode: true,
  images: { domains: ["image.tmdb.org"] },
  env: {
    imageUrl550: "https://image.tmdb.org/t/p/w500",
    imageUrl1280: "https://image.tmdb.org/t/p/w1280",
    apiUrl: "https://api.themoviedb.org/3",
  },
};

module.exports = nextConfig;
