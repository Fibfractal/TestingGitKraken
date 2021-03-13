// Remember to use the same port as we did in our backend.

export default {
    proxy: {
      '/rest': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      },
      '/api': {
        target: 'http://localhost:8000',
        changeOrigin: true,
      }
    }
  }