import 'styled-components/native';
import {ThemeType} from './types/themeType';

declare module 'styled-components/native' {
  export interface DefaultTheme {
    color: ThemeType;
  }
}
