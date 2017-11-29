module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = [
      './server/index.js',
      './server/client.js'
    ]
    return config
  }
}
