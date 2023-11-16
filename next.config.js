module.exports = {
  images: {
    domains: ['share.icloud.com'],
    // path prefix for Image Optimization API, useful with `loader`
    path: '/_next/image',
    // loader can be 'default', 'imgix', 'cloudinary', 'akamai', or 'custom'
    loader: 'default',
    // disable static imports for image files
    disableStaticImages: false,
    // minimumCacheTTL is in seconds, must be integer 0 or more
    minimumCacheTTL: 60,
    // ordered list of acceptable optimized image formats (mime types)
    formats: ['image/webp'],
    // when true, every image will be unoptimized
    unoptimized: false,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        test: [/\.svg$/, /\.pdf$/],
        use: [
          '@svgr/webpack',
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
            },
          },
        ],
      })
    )

    // Important: return the modified config
    return config
  },
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}
