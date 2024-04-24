/* eslint-disable @typescript-eslint/no-var-requires */
import withPWA from 'next-pwa'

module.exports = withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  scope: '/app',
  sw: 'service-worker.js',
  reactStrictMode: true
})
