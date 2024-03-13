module.exports = function (desktopLogo, mobileLogo) {
 
    var desktopSize = desktopLogo;
    var mobileSize = mobileLogo;
    
    document.addEventListener('DOMContentLoaded', function() {
    // function to update image
        function updateImageSource(){
            if(window.innerWidth <= 991){
                return mobileSize;
            } else {
                return desktopSize;
            }
        }

    // Run the function on window resize
        window.addEventListener('resize', updateImageSource);

        // Run the function on page load
        document.addEventListener('DOMContentLoaded', updateImageSource);

    });

};


