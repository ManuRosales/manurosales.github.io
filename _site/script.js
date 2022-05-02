/* MOBILE DROPDOWN ANIMATION */

let isNavClosed = true, isNavScrolled = false;

document.getElementById('dropdown-div-icon').onclick = () => {

    if (isNavClosed) {
        
        /* OPEN NAV */

        document.getElementById('nav-links').style.display = 'flex';
        document.getElementById('dropdown-icon').className = 'fa-solid fa-chevron-up';
        document.getElementById('nav').style.backgroundColor = 'black';

        isNavClosed = false;

    } else if (!isNavClosed) {

        /* CLOSE NAV */
        
        document.getElementById('nav-links').style.display = 'none';
        document.getElementById('dropdown-icon').className = 'fa-solid fa-chevron-down';
        
        if (!isNavScrolled) {
            document.getElementById('nav').style.backgroundColor = 'transparent';
        } else if (isNavScrolled) {
            document.getElementById('nav').style.backgroundColor = 'black';
        }
        
        isNavClosed = true;

    }

};

/* PROYECTOS DROPDOWN */

let isNavDropdownClosed = true;

document.getElementById('proyectos-link').onclick = () => {

    if (window.innerWidth >=768) {

        if (isNavDropdownClosed) {

            document.getElementById('proyectos-dropdown').style.display = 'flex';
            isNavDropdownClosed = false;

            if (isNavScrolled == false) {

                document.getElementById('nav-links').style.backgroundColor = 'black';
                document.getElementById('proyectos-dropdown').style.backgroundColor = 'black';

            } 
    
        } else if (!isNavDropdownClosed) {
    
            document.getElementById('proyectos-dropdown').style.display = 'none';
            isNavDropdownClosed = true;

            if (isNavScrolled == false) {

                document.getElementById('nav-links').style.backgroundColor = 'transparent';

            }

        }

    }

};

/* TRANSPARENCY ON SCROLL */

window.onscroll = () => {

    if (window.innerWidth < 768) {

        if (isNavClosed) {

            if (window.scrollY > window.innerHeight) {

                document.getElementById('nav').style.backgroundColor = 'black';
                isNavScrolled = true;

            } else if (window.scrollY < window.innerHeight) {

                document.getElementById('nav').style.backgroundColor = 'transparent';
                isNavScrolled = false;

            }

        }

    } else if (window.innerWidth >= 768) {

        if (isNavDropdownClosed) {

            if (window.scrollY > window.innerHeight) {

                document.getElementById('nav-links').style.backgroundColor = 'black';
                isNavScrolled = true;

            } else if (window.scrollY < window.innerHeight) {

                document.getElementById('nav-links').style.backgroundColor = 'transparent';
                isNavScrolled = false;
                
            }

        }

    }

};

/* IMAGE GALLERY JS */

let activeImage = 1;

document.getElementById('left-gallery-arrow').onclick = () => {

    console.log('Click');

    if (activeImage == 1) {

        console.log('IF funcionando');

        document.getElementById('foto-1').style.display = 'none';
        document.getElementById('foto-3').style.display = 'block';

        activeImage = 3;

    } else if (activeImage == 3) {

        document.getElementById('foto-3').style.display = 'none';
        document.getElementById('foto-2').style.display = 'block';

        activeImage = 2;

    } else if (activeImage == 2) {

        document.getElementById('foto-2').style.display = 'none';
        document.getElementById('foto-1').style.display = 'block';

        activeImage = 1;

    }

};

document.getElementById('right-gallery-arrow').onclick = () => {

    console.log('Click');

    if (activeImage == 1) {

        console.log('IF funcionando');

        document.getElementById('foto-1').style.display = 'none';
        document.getElementById('foto-2').style.display = 'block';

        activeImage = 2;

    } else if (activeImage == 2) {

        document.getElementById('foto-2').style.display = 'none';
        document.getElementById('foto-3').style.display = 'block';

        activeImage = 3;

    } else if (activeImage == 3) {

        document.getElementById('foto-3').style.display = 'none';
        document.getElementById('foto-1').style.display = 'block';

        activeImage = 1;

    }

};


