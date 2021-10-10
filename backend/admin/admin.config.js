module.exports = {
  webpack: (config, webpack) => {
    config.optimization = {
      splitChunks: {
        chunks: "all",
      },
    };
    return config;
  },
};
