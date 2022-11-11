/** @type {import('next').NextConfig} */
const withImages = require('next-images');
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});
const withFonts = require('nextjs-fonts');

module.exports = withPWA(
  withImages(
    withFonts({
      reactStrictMode: true,
      sassOptions: {
        cssModules: true,
        includePaths: ['./src'],
      },
      images: {
        domains: ['m.media-amazon.com'],
        deviceSizes: [360, 375, 768, 1024, 1440],
        disableStaticImages: true,
        formats: ['image/webp'],
      },
      pageExtensions: ['page.tsx'],
      fileExtensions: ['jpg', 'jpeg', 'png', 'webp'],
      webpack(config) {
        config.module.rules.push({
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ['@svgr/webpack'],
        });

        return config;
      },
      env: {
        STAGE: process.env.STAGE,
      },
    })
  )
);
