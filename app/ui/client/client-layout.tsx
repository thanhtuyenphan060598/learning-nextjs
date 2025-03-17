import { DefaultTheme, ThemeProvider } from 'styled-components';
import StyledComponentsRegistry from '../../lib/styled-components-registry';

const theme: DefaultTheme = {
  colors: {
    primary: '#111',
    secondary: '#0070f3',
  },
};

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log('ClientLayout');
  return (
    <ThemeProvider theme={theme}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </ThemeProvider>
  );
}
