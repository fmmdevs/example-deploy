const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/scss/_variables.scss";`
      }
    }
  },
  // Por defecto carga /, como estamos en un hosting y el path no va a ser /
  // usamos una variable de entorno.
  // Si tenemos una variable de entorno llamado PUBLIC_HTML la usamos
  // Si no usamos "/"
  // En la raiz del proyecto creamos archivo .env, donde van a estar las variables de entorno

  publicPath: process.env.PUBLIC_HTML || "/"
})

