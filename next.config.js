const withInterceptStdout = require("next-intercept-stdout");

/** @type {import('next').NextConfig} */
const nextConfig = withInterceptStdout(
  {
    reactStrictMode: true,
    swcMinify: true,
  },
  (text) => (text.includes("Duplicate atom key") ? "" : text)
);

module.exports = nextConfig;

// Delete "Duplicate atom key" Error of Recoil
// with 『next-intercept-stdout』
