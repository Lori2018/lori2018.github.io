const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: ['www.freepnglogos.com', 'images.pexels.com', 'i5.walmartimages.com', 'images.unsplash.com']
  }
}


module.exports = 
  // reactStrictMode: true,
  withPlugins([[withImages]], nextConfig)
