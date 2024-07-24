/** @type {import('next').NextConfig} */
const webpack = require("webpack");
const nextConfig = {
  reactStrictMode: false,
  images:{
    domains: ['res.cloudinary.com'],
  },
  env: {
    customKey: "https://app.us8.list-manage.com/subscribe/post?u=304b51a97f21fc8753deaf1e9&amp;id=2784cf393a",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
}

module.exports = nextConfig
