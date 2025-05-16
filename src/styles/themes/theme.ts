import 'styled-components';
import { AppTheme } from './default';

declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}