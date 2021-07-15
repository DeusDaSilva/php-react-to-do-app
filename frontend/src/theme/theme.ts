export interface AppTheme {
  colors: {
    TEXT: string;
    PRIMARY: string;
    SECONDARY: string;
    DANGER: string;
    WARNING: string;
    SUCCESS: string;
    BLUE: string;
    LIGHT_BACKGROUND: string;
    TRANSPARENT: string;
    WHITE: string;
    BLACK: string;


  };
  fonts: {
    family: {
      medium: string;
      regular: string;
      semiBold: string;
    };
    sizes: {
      small: number;
      body: number;
      h1: number;
      h2: number;
      h3: number;
      h4: number;
      h5: number;
      h6: number;
      caption: number;
    };
  };
  spacing: {
    [key: string]: number;
  };
}

const themeVariables: AppTheme = {
  colors: {
    TEXT: '#4c4947',
    PRIMARY: '#2565cb',
    SECONDARY: '#FF007D',
    DANGER: '#BF1975',
    WARNING: '#fffc93',
    SUCCESS: '#48A3A4',
    BLUE: '#c7dcff',
    LIGHT_BACKGROUND: '#fafafa',
    TRANSPARENT: 'transparent',
    WHITE: '#fdfdfd',
    BLACK: '#333333',
  },
  fonts: {
    family: {
      medium: 'GoldplayMedium',
      regular: 'GoldplayRegular',
      semiBold: 'GoldplaySemiBold',
    },
    sizes: {
      h1: 2.25,
      h2: 2,
      h3: 1.75,
      h4: 1.5,
      h5: 1.25,
      h6: 1.125,
      caption: 1.125,
      body: 1,
      small: 0.75,
    },
  },
  spacing: {
    xs: 0.25,
    sm: 0.5,
    md: 1,
    lg: 1.5,
    xl: 2,
    xxl: 3,
    xxxl: 4.5,
  }
};

export default themeVariables;
