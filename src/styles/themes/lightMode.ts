import { DefaultTheme } from "styled-components";
import lightLogo from '../../assets/logo.svg'

export const lightTheme: DefaultTheme = {
    colors:{
        'fillBackground': '#FBF5F8',
        'componentBackground': '#FFFFFF',
        'text': '#232323', 
        'spanText': '#696969',
        'firstAddressBackground': '#232323',
        'othersAddressBackground': '#C75E90',

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
    },
    images:{
        logo: lightLogo,
    }
}