type ImageMap = {
  [key: string]: {
    [key: string]: any;
  };
};

const images: ImageMap = {
  logo: {
    Gold_Combi: require("./logo/Gold_Combi.png"),
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
};

export default images;
