const BREAKPOINTS = {
  phoneMax: 37.5,
  tabletMax: 59.375,
  laptopMax: 81.25,
}
export const QUERIES = {
  'phoneAndDown': `(max-width: ${BREAKPOINTS.phoneMax}rem)`,
  'tabletAndDown': `(max-width: ${BREAKPOINTS.tabletMax}rem)`,
  'laptopAndDown': `(max-width: ${BREAKPOINTS.laptopMax}rem)`,
}

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};
