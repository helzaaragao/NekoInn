import { DefaultTheme } from "styled-components/dist/types";

export const defaultTheme = {
    colors: {
        'main-color': '#C75E90', 
        'secundary/hover': '#8E345F', 
        'day-background': '#FBF5F8',
        'white': '#FFFFFF',
        'input/subtitles':'#D9D9D9', 

        'background/text': '#232323',
        'black-off': '#696969', 
        'black': '#181818', 
        'border-gray': '#B7B7B7',
        'night-background':'#1D1D1D'
    } as const
} as const;
// Crie um tipo para as cores
export type AppColors = typeof defaultTheme.colors;
export type AppTheme = typeof defaultTheme;

// Crie uma função utilitária para criar temas com tipagem segura

export const lightTheme: DefaultTheme = createTheme({
    ...defaultTheme
});

export const darkTheme: DefaultTheme = createTheme({
    ...defaultTheme,
    colors: {
        ...defaultTheme.colors,
        'day-background': defaultTheme.colors['black'], // Use uma cor existente
        'background/text': defaultTheme.colors['white'],
        // Outras sobreposições conforme necessário
    }
});