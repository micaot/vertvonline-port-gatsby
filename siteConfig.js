module.exports = {
  siteUrl: "https://vertvonline.es", // Site domain. Do not include a trailing slash!

  postsPerPage: 50, // Number of posts shown on paginated pages (changes this requires sometimes to delete the cache)

  siteTitleMeta: "VerTvOnline", // This allows an alternative site title for meta data for pages.
  siteDescriptionMeta:
    "Canales de Tv online a través de internet de todos los paises y gratis!. Podrás ver Futbol online y todo tipo de deportes.", // This allows an alternative site description for meta data for pages.

  shareImageWidth: 600, // Change to the width of your default share image
  shareImageHeight: 300, // Change to the height of your default share image

  shortTitle: "VerTvOnline", // Used for App manifest e.g. Mobile Home Screen
  siteIcon: "favicon.png", // Logo in /static dir used for SEO, RSS, and App manifest
  backgroundColor: "#e9e9e9", // Used for Offline Manifest
  themeColor: "#15171A", // Used for Offline Manifest
  apiUrl: "https://wp.vertvonline.es",
  subscribeWidget: {
    visible: false,
    title: "Subscribe to Draftbox",
    helpText: "Get the latest posts delivered right to your inbox.",
    successMessage: "Thanks for subscribing to Draftbox.",
  },
  header: {
    navigation: [
      {
        label: "Inicio",
        url: "/",
      },
      {
        label: "Categorias",
        url: "/tags",
      },
    ],
  },
  footer: {
    copyright: "VerTvOnline.es",
    navigation: [
      {
        label: "Inicio",
        url: "/",
      },
      {
        label: "Sitemap",
        url: "/sitemap.xml",
      },
      {
        label: "RSS",
        url: "/rss.xml",
      },
      {
        label: "Categorias",
        url: "/tags",
      },
      {
        label: "Diseño Web",
        url: "https://micaot.com",
      },
    ],
  },
  socialLinks: {
    twitter: "https://twitter.com/draftboxhq",
    facebook: "https://facebook.com/",
    instagram: "https://www.instagram.com/",
    linkedin: "https://linkedin.com/",
    github: "https://github.com/draftbox-co",
    pinterest: "",
    youtube: "",
    dribbble: "",
    behance: "",
    externalLink: "",
    whatsapp: "",
  },
  contactWidget: {
    title: "Contact Built with Draftbox",
    successMessage: "We’ll get in touch with you soon.",
  },
  metadata: {
    title: "VerTvOnline",
    description:
      "Canales de Tv online a través de internet gratis de todos los paises",
  },
  twitterCard: {
    title: "VerTvOnline",
    description:
      "Canales de Tv online a través de internet gratis de todos los paises.",
    imageUrl: "twitterImage.png",
    username: "@vertvonline",
  },
  facebookCard: {
    title: "VerTvOnline",
    description:
      "Canales de Tv online a través de internet gratis de todos los paises.",
    imageUrl: "facebookImage.png",
    appId: "2391725224459953",
  },
  siteTitle: "VerTvOnline",
  siteDescription:
    "Canales de Tv online a través de internet gratis de todos los paises.",
  language: "es",
  logoUrl: "logo.png",
  iconUrl: "favicon.png",
  coverUrl: "cover.jpg",
  alternateLogoUrl: "logo.png",
  themeConfig: {
    variables: [
      {
        varName: "--primary-color",
        value: `#2b6cb0`,
      },
      {
        varName: "--primary-color-active",
        value: `#2a4365`,
      },
      {
        varName: "--primary-color-light",
        value: `#bee3f8`,
      },
      {
        varName: "--sans-font",
        value: `"Montserrat"`,
      },
      {
        varName: "--sans-font-normal",
        value: `400`,
      },
      {
        varName: "--sans-font-medium",
        value: `500`,
      },
      {
        varName: "--sans-font-semibold",
        value: `600`,
      },
      {
        varName: "--sans-font-bold",
        value: `700`,
      },
      {
        varName: "--serif-font",
        value: `Merriweather`,
      },
      { varName: "--serif-font-light", value: `300` },
      { varName: "--serif-font-normal", value: `400` },
      { varName: "--serif-font-medium", value: `400` },
      { varName: "--serif-font-bold", value: `700` },
    ],
    fonts: [
      {
        family: "Montserrat",
        variants: ["400", "500", "600", "700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
      {
        family: "Merriweather",
        variants: ["300", "400", "700"],
        //subsets: ['latin']
        //text: 'Hello'
        fontDisplay: "swap",
        strategy: "selfHosted", // 'base64' || 'cdn'
      },
    ],
  },
};
