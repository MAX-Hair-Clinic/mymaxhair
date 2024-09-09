type ImageMap = {
  [key: string]: {
    [key: string]: any;
  };
};

const images: ImageMap = {
  logo: {
    Gold_Combi: require("./logo/Gold_Combi.png"),

    service: {
      logo1: require("./logo/service/logo1.webp"),
      logo2: require("./logo/service/logo2.webp"),
      logo3: require("./logo/service/logo3.webp"),
      logo4: require("./logo/service/logo4.webp"),
      logo5: require("./logo/service/logo5.webp"),
      logo6: require("./logo/service/logo6.webp"),
      logo7: require("./logo/service/logo7.webp"),
      logo8: require("./logo/service/logo8.webp"),
    },
  },

  icons: {
    dark: {
      social: {
        facebook: require("./icons/dark/social/facebook.png"),
        instagram: require("./icons/dark/social/instagram.png"),
        youtube: require("./icons/dark/social/youtube.png"),
      },
      phone: require("./icons/dark/phone.png"),
    },

    light: {
      social: {
        facebook: require("./icons/light/social/facebook.png"),
        instagram: require("./icons/light/social/instagram.png"),
        youtube: require("./icons/light/social/youtube.png"),
      },

      phone: require("./icons/light/phone.png"),
    },
  },

  others: {
    footer_bg: require("./others/footer_bg.jpg"),
  },

  home: {
    hero_bg: require("./page/home/hero2.jpg"),
  },

  blog: {
    blog: require("./others/footer_bg.jpg"),
    blog1: require("./page/blogs/blog1.webp"),
  },
};

export default images;
