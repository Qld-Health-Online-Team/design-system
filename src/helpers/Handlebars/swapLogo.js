module.exports = function (desktopLogo, mobileLogo) {
 
      function handleImageLogic() {
        if (typeof document !== 'undefined') {  
          var desktopSize = desktopLogo;
          var mobileSize = mobileLogo;
    
          function updateImageSource() {
            if (window.innerWidth <= 991) {
              return mobileSize;
            } else {
              return desktopSize;
            }
          }
    
          // Add event listeners within DOMContentLoaded for proper timing
          document.addEventListener('DOMContentLoaded', function() {
            window.addEventListener('resize', updateImageSource);
            updateImageSource();  // Call initially on page load
          });
        }
      };
      
    handleImageLogic();
};


