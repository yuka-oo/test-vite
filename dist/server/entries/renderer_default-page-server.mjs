import { jsx, jsxs } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import * as React from "react";
import React__default from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar/index.js";
import Box from "@mui/material/Box/index.js";
import Toolbar from "@mui/material/Toolbar/index.js";
import IconButton from "@mui/material/IconButton/index.js";
import Typography from "@mui/material/Typography/index.js";
import Menu from "@mui/material/Menu/index.js";
import MenuIcon from "@mui/icons-material/Menu.js";
import Container from "@mui/material/Container/index.js";
import Button from "@mui/material/Button/index.js";
import MenuItem from "@mui/material/MenuItem/index.js";
import ViewInArIcon from "@mui/icons-material/ViewInAr.js";
import { createTheme } from "@mui/material/styles/index.js";
import { alpha, CssBaseline } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { escapeInject, dangerouslySkipEscape } from "vike/server";
const PageShell$1 = "";
let childrenPropType = PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired;
const Context = React__default.createContext(void 0);
PageContextProvider.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function PageContextProvider({ pageContext, children }) {
  return /* @__PURE__ */ jsx(Context.Provider, { value: pageContext, children });
}
let pages = ["各階層で", "メニュー内容", "変更予定"];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  React.useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  return /* @__PURE__ */ jsx(AppBar, { position: "static", children: /* @__PURE__ */ jsx(Container, { maxWidth: "xl", children: /* @__PURE__ */ jsxs(Toolbar, { disableGutters: true, children: [
    /* @__PURE__ */ jsx(ViewInArIcon, { sx: { display: { xs: "none", md: "flex" }, mr: 1 } }),
    /* @__PURE__ */ jsx(
      Typography,
      {
        variant: "h6",
        noWrap: true,
        component: "a",
        href: "#app-bar-with-responsive-menu",
        sx: {
          mr: 2,
          display: { xs: "none", md: "flex" },
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none"
        },
        children: "SYNCLAYER(ワイド)"
      }
    ),
    /* @__PURE__ */ jsx(Box, { sx: { flexGrow: 1, display: { xs: "flex", md: "none" } } }),
    /* @__PURE__ */ jsx(ViewInArIcon, { sx: { display: { xs: "flex", md: "none" }, mr: 1 } }),
    /* @__PURE__ */ jsx(
      Typography,
      {
        variant: "h5",
        noWrap: true,
        component: "a",
        href: "#app-bar-with-responsive-menu",
        sx: {
          mr: 2,
          display: { xs: "flex", md: "none" },
          flexGrow: 1,
          fontFamily: "monospace",
          fontWeight: 700,
          letterSpacing: ".3rem",
          color: "inherit",
          textDecoration: "none"
        },
        children: "SYNCLAYER"
      }
    ),
    /* @__PURE__ */ jsx(Box, { sx: { flexGrow: 1, display: { xs: "none", md: "flex" } }, children: pages.map((page) => /* @__PURE__ */ jsx(
      Button,
      {
        onClick: handleCloseNavMenu,
        sx: { my: 2, color: "white", display: "block" },
        children: page
      },
      page
    )) }),
    /* @__PURE__ */ jsxs(Box, { sx: { flexGrow: 0 }, children: [
      /* @__PURE__ */ jsx(
        IconButton,
        {
          size: "large",
          "aria-label": "account of current user",
          "aria-controls": "menu-appbar",
          "aria-haspopup": "true",
          onClick: handleOpenNavMenu,
          color: "inherit",
          children: /* @__PURE__ */ jsx(MenuIcon, {})
        }
      ),
      /* @__PURE__ */ jsx(
        Menu,
        {
          id: "menu-appbar",
          anchorEl: anchorElNav,
          anchorOrigin: {
            vertical: "bottom",
            horizontal: "left"
          },
          keepMounted: true,
          transformOrigin: {
            vertical: "top",
            horizontal: "left"
          },
          open: Boolean(anchorElNav),
          onClose: handleCloseNavMenu,
          sx: {
            display: { xs: "block", md: "none" }
          },
          children: pages.map((page) => /* @__PURE__ */ jsx(MenuItem, { onClick: handleCloseNavMenu, children: /* @__PURE__ */ jsx(Typography, { textAlign: "center", children: page }) }, page))
        }
      )
    ] })
  ] }) }) });
}
const customTheme = createTheme({
  palette: {
    primary: {
      main: alpha("#FAFAFA", 0.1),
      contrastText: "#E95504"
    },
    text: {
      primary: "#333333"
    },
    background: {
      default: "#FAFAFA"
    }
  }
});
PageShell.propTypes = {
  pageContext: PropTypes.any,
  children: childrenPropType
};
function PageShell({ pageContext, children }) {
  return /* @__PURE__ */ jsx(React__default.StrictMode, { children: /* @__PURE__ */ jsxs(ThemeProvider, { theme: customTheme, children: [
    /* @__PURE__ */ jsx(CssBaseline, {}),
    /* @__PURE__ */ jsx(ResponsiveAppBar, {}),
    /* @__PURE__ */ jsx(PageContextProvider, { pageContext, children: /* @__PURE__ */ jsx(Content, { children }) })
  ] }) });
}
Content.propTypes = {
  children: childrenPropType
};
function Content({ children }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        padding: 20,
        paddingBottom: 50,
        borderLeft: "2px solid #eee",
        minHeight: "100vh"
      },
      children
    }
  );
}
const logoUrl = "/assets/static/logo.bebe2e90.svg";
var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const passToClient = ["pageProps", "urlPathname"];
async function render(pageContext) {
  const { Page, pageProps } = pageContext;
  if (!Page)
    throw new Error("My render() hook expects pageContext.Page to be defined");
  const pageHtml = ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(PageShell, { pageContext, children: /* @__PURE__ */ jsx(Page, { ...pageProps }) })
  );
  const { documentProps } = pageContext.exports;
  const title = documentProps && documentProps.title || "Vite SSR app";
  const desc = documentProps && documentProps.description || "App using Vite + Vike";
  const documentHtml = escapeInject(_a || (_a = __template(['<!DOCTYPE html>\n    <html lang="en">\n      <head>\n        <meta charset="UTF-8" />\n        <link rel="icon" href="', '" />\n        <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n        <script type="module" src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"><\/script>\n        <meta name="description" content="', '" />\n        <title>', '</title>\n      </head>\n      <body>\n        <div id="react-root">', "</div>\n      </body>\n    </html>"])), logoUrl, desc, title, dangerouslySkipEscape(pageHtml));
  return {
    documentHtml,
    pageContext: {
      // We can add some `pageContext` here, which is useful if we want to do page redirection https://vike.dev/page-redirection
    }
  };
}
export {
  passToClient,
  render
};
