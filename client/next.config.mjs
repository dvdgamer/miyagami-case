/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {               //Grants permission to displays pictures from flickr
    domains: ['live.staticflickr.com', 'creativecommons.org'],
  },
};

export default nextConfig;
