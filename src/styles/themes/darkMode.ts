import { DefaultTheme } from "styled-components";
import darkLogo from '../../assets/logo-dark.svg'

export const darkTheme: DefaultTheme = {
    colors: {
        'fillBackground': '#232323',
        'componentBackground': '#161616',
        'spanText': '#696969',
        'text': '#FFFFFF', 
        'switchBackground': '#C75E90',
        'firstAddressBackground': '#C75E90',
        'othersAddressBackground': '#8E345F',
        'firstIconAddressBackground': '#8E345F',
        'iconAddressBackground': '#C75E90',

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