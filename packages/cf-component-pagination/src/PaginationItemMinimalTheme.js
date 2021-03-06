export default baseTheme => ({
  float: 'left',
  position: 'relative',
  backgroundColor: baseTheme.colorWhite,
  color: baseTheme.colorGray,
  backgroundColorActive: baseTheme.colorWhite,
  backgroundColorDisabled: baseTheme.colorWhite,
  borderColorActive: baseTheme.colorWhite,
  colorActive: baseTheme.colorOrange,
  colorDisabled: baseTheme.colorGrayLight,
  zIndexActive: 1,
  cursor: 'pointer',
  cursorDisabled: 'default',
  cursorActive: 'default',
  dot: {
    width: '.5em',
    height: '.5em',
    margin: '1em',
    borderRadius: '50%',
    border: '1px solid rgba(0, 0, 0, .15)'
  },
  next: {
    backgroundColor: baseTheme.colorWhite,
    color: baseTheme.colorGray,
    borderRadius: '3px'
  },
  prev: {
    backgroundColor: baseTheme.colorWhite,
    color: baseTheme.colorGray,
    borderRadius: '3px'
  },
  link: {
    userSelect: 'none',
    position: 'relative',
    display: 'block',
    paddingTop: '0',
    paddingBottom: '0',
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
    textDecoration: 'none',
    color: 'inherit',
    'zIndex:focus': 1
  }
});
