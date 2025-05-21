import 'styled-components';

// pegar as cores mais especificas que estão faltando do light e dark começando pelo light

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      'fillBackground': string;
      'componentBackground': string;
      'text': string;
      'spanText': string;
      'firstAddressBackground': string;
      'othersAddressBackground': string;
      'firstIconAddressBackground': string;
      'iconAddressBackground': string; 
      'main-color': string;
      'secundary/hover': string;
      'day-background': string;
      'white': string;
      'input/subtitles': string;
      'background/text': string;
      'black-off': string;
      'black': string;
      'border-gray': string;
      'night-background': string;
    }
     images: {
        logo: string;
    }
  }
}

export const defaultTheme = {
  colors: {
    'fillBackground': '#FFFFFF',
    'componentBackground': '#FFFFFF',
    'text': '#232323',
    'spanText': '#696969',
    'main-color': '#C75E90', 
    'secundary/hover': '#8E345F', 
    'day-background': '#FBF5F8',
    'white': '#FFFFFF',
    'input/subtitles': '#D9D9D9', 
    'background/text': '#232323',
    'black-off': '#696969', 
    'black': '#181818', 
    'border-gray': '#B7B7B7',
    'night-background': '#1D1D1D',
  }
};