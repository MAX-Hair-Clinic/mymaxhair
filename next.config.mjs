/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' https://mymaxhair.com/; img-src 'self' https://mymaxhair.com/",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
