import { CssBaseline } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { FC, useMemo, useState } from 'react'
import NavBar from './components/NavBar'
import useRoutes from './routes/routes'
import { MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import Box from "@mui/material/Box";

const App: FC = () => {
  const [mode, setMode] = useState<'light' | 'dark'>('light')
  const routes = useRoutes()

  const prefersDarkMode = useMediaQuery(`(prefers-color-scheme: ${mode})`)

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  )

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    [],
  )

  function Router(props: { children?: React.ReactNode }) {
    const { children } = props;
    if (typeof window === 'undefined') {
      return <StaticRouter location="/">{children}</StaticRouter>;
    }

    return <MemoryRouter>{children}</MemoryRouter>;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* Remove Box if you want to use the classic NavBar */}
      <Box sx={{ display: 'flex' }}>
        <Router>
          <NavBar mode={mode} colorMode={colorMode} />
          {routes}
        </Router>
      </Box>
    </ThemeProvider>
  )
}

export default App;
