module.exports = function(desktopLogo, mobileLogo) {
  
  let logo = desktopLogo; // Default to desktop for wider screens

  // Employ a ternary operator for concise conditional return
  const isMobileScreen = window.innerWidth <= 991;
  logo = isMobileScreen ? mobileLogo : logo;

  return logo;

}
