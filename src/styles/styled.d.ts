// Tipagem do styled-components
import tailwindcss from '@tailwindcss/vite';
import {AppTheme} from './themes/default'



declare module 'styled-components'{
    export interface DefaultTheme extends AppTheme{}
}