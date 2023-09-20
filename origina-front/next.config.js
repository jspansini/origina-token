/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    BACKEND_API: "https://atitude.gneves.dev",
    SOCKET_API: "https://socket.gneves.dev:8443",
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
