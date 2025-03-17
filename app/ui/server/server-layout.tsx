import { DefaultTheme, ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '../../lib/styled-components-registry';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

export default function ServerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('ServerLayout');
  return (
    <ThemeProvider theme={theme}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ThemeProvider>
  );
}
