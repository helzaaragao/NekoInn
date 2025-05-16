// src/styles/styled.d.ts
import 'styled-components';
import { AppTheme } from './themes/default'; // ou './default' se não usar pasta themes

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}