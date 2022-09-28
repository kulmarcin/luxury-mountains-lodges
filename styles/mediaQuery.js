const sizes = {
  tablet: '768px',
  desktop: '1200px',
  hugeDesktop: '1400px'
};

const devices = {
  tablet: `(min-width: ${sizes.tablet})`,
  desktop: `(min-width: ${sizes.desktop})`,
  hugeDesktop: `(min-width: ${sizes.hugeDesktop})`
};

export default devices;
