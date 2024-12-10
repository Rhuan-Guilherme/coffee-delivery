import 'styled-components';
import { lightTheme } from '../styles/themes/light';

type ThemeType = typeof lightTheme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface DefaultTheme extends ThemeType {}
}
