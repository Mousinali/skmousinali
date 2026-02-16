/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,   // 👈 disable double mount in dev
  reactCompiler: false,     // 👈 disable experimental compiler for now
};

export default nextConfig;
