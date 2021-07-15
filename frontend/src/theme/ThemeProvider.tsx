import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalStyles from './GlobalStyles';

const ThemeProvider: React.FunctionComponent = ({ children }) => {
  return (
    <StyledComponentsThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </StyledComponentsThemeProvider>
  );
};

export default ThemeProvider;
