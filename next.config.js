/** @type {import('next').NextConfig} */

const nextConfig = {
  optimizeFonts: true,
  reactStrictMode: true,
  images: { domains: ["image.tmdb.org"] },
  env: {
    imageUrl: "https://image.tmdb.org/t/p/w500",
    apiUrl: "https://api.themoviedb.org/3",
  },
};

module.exports = nextConfig;
