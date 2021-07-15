import 'styled-components';
import type { AppTheme } from './theme';

/**
 * Overrides the default theme properties with out custom theme properties.
 * For more information please read:
 *
 * https://styled-components.com/docs/api#typescript
 */
declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme { }
}
