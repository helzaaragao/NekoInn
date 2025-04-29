export const defaultTheme = {
    colors: {
        'main-color': '#C75E90', 
        'secundary/hover': '#8E345F', 
        'day-background': '#FBF5F8',
        'white': '#FFFFFF',
        'input/subtitles':'#D9D9D9', 

        'background/text': '#232323',
        'black-off': '#696969', 
        'black': '#181818'
    } as const
}
export type AppTheme = typeof defaultTheme; 

