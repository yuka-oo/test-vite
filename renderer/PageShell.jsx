import React from 'react'
import PropTypes from 'prop-types'
// import logo from './logo.svg'
import './PageShell.css'
import { PageContextProvider } from './usePageContext'
import { childrenPropType } from './PropTypeValues'
// mui layout
import ApplicationBar from '../src/components/ApplicationBar'
// テーマ
import theme from '../src/theme/theme'
import { ThemeProvider } from '@emotion/react';
import {CssBaseline } from '@mui/material';

export { PageShell }

PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
}
function PageShell({ pageContext, children }) {
  return (
    <React.StrictMode>
      <ThemeProvider theme={ theme }>
        <CssBaseline />
        <ApplicationBar />
        <PageContextProvider pageContext={pageContext}>
          <Content>{children}</Content>
        </PageContextProvider>
      </ThemeProvider>
    </React.StrictMode>
  )
}

Content.propTypes = {
  children: childrenPropType
}
function Content({ children }) {
  return (
    <div
      style={{
        padding: 20,
        paddingBottom: 50,
        borderLeft: '2px solid #eee',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  )
}

// function Logo() {
//   return (
//     <div
//       style={{
//         marginTop: 20,
//         marginBottom: 10
//       }}
//     >
//       <a href="/">
//         <img src={logo} height={64} width={64} alt="logo" />
//       </a>
//     </div>
//   )
// }
