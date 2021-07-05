module.exports = {
  devServer: {
    proxy: {
      "/api": {
        target: process.env.VUE_APP_API_URL,
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
        secure: false,
        headers: {
          Authorization: `Bearer ${process.env.VUE_APP_API_KEY}`,
        },
      },
    },
  },
};
