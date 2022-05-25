/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  env: {
    imageUrl: "https://image.tmdb.org/t/p/w500",
    apiUrl: "https://api.themoviedb.org/3",
  },
};

module.exports = nextConfig;
