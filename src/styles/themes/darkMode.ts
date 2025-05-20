import { DefaultTheme } from "styled-components";
import darkLogo from '../../assets/logo-dark.svg'

export const darkTheme: DefaultTheme = {
    colors: {
        'fillBackground': '#161616',
        'componentBackground': '#161616',
        'spanText': '#696969',
        'text': '#FFFFFF', 
        'firstAddressBackground': '#C75E90',
        'othersAddressBackground': '#8E345F',
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
    images: {
        logo: darkLogo,
    }
}