/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
      return [
        {
          source: '/resume',
          destination: 'https://drive.google.com/file/d/1EtsEibcX6XdnCy-Uhb-eRHZZEMwYOl2E/view?usp=sharing',
          permanent: true,
        },
      ]
    },
  }
  
  module.exports = nextConfig
  