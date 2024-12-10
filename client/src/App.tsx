import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light';
function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={lightTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
