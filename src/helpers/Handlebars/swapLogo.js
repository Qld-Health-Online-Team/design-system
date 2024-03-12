module.exports = function(desktopLogo, mobileLogo) {
   
    if (typeof window !== 'undefined') { // Check if window exists

        let logo = window.innerWidth <= 991 ? mobileLogo : desktopLogo;
    
        // Function to update logo based on screen size
        const updateLogo = () => {
          logo = window.innerWidth <= 991 ? mobileLogo : desktopLogo;
        };
    
        // Add event listener for screen resize
        window.addEventListener('resize', updateLogo);
    
        return logo;
      } else {
        // Handle server-side rendering or non-browser environments
        return desktopLogo; // Or some default behavior
      }

}
