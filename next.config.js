const path = require("path");

module.exports = {
  reactStrictMode: true,
  /*async redirects() {
    return [
      {
        source: "/",
        destination: "/blog/recent",
        permanent: true,
      },
    ];
  },*/
  /*env: {
    API_URL: "http://192.168.2.160",
  },*/
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};
