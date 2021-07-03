module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/WhatsNext/'
    : '/',
  devServer: {
    proxy: {
      "/api": {
        target: process.env.API_URL,
        pathRewrite: { "^/api": "" },
        changeOrigin: true,
        secure: false,
        headers: {
          Authorization: `Bearer ${process.env.API_KEY}`,
        },
      },
    },
  },
};
