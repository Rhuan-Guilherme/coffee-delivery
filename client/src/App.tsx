import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from './styles/themes/light';
import { DarkTheme } from './styles/themes/dark';
import { useState } from 'react';
function App() {
  const [theme, setTheme] = useState(lightTheme);

  const tootleTheme = () => {
    setTheme(theme.title === 'light' ? DarkTheme : lightTheme);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
        <button onClick={tootleTheme}>trocar</button>
        <GlobalStyle />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
