module.exports = {
    theme: {
      extend: {}
    },
    purge: {
        enabled: process.env.HUGO_ENVIRONMENT === "production",
        content: ["./themes/hugo-static-startpage/**/*.html", "./content/**/*.md", "./content/**/*.html"],
        safelist: ['flex-row-reverse']
    },    
    variants: {}
  }