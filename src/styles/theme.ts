const size = {
  mobile: '375px',
  tablet: '744px',
  desktop: '1200px',
}

const theme = {
  mobile: `(min-width: ${size.mobile}) and (max-width: 743px)`,
  tablet: `(min-width: ${size.tablet}) and (max-width: 1199px)`,
  desktop: `(min-width: ${size.desktop})`,
}

export default theme
