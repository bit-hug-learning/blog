import Layout from 'components/Layout/index';
import { GlobalStateProvider } from 'context/index';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/globalStyles';
import theme from 'styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <GlobalStateProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </GlobalStateProvider>
  );
}

export default MyApp;
