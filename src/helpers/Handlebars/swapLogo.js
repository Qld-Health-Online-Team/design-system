module.exports = function(desktopLogo, mobileLogo) {
   
    if (typeof window !== 'undefined') { // Check if window exists
        let logo = window.innerWidth <= 991 ? mobileLogo : desktopLogo;
        return logo;
      } else {
        // Handle server-side rendering or non-browser environments
        return desktopLogo; // Or some default behavior
      }

}
