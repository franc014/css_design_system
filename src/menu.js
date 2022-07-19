import hamb from './assets/hamb.svg'
import close from './assets/close.svg'
export function toggle() {
    const toggleBtn = document.querySelector('.mobile-nav-toggle');
    const navigation = document.querySelector('.primary-navigation');
    const btnAria = toggleBtn.firstElementChild;
    function onToggle() {
        console.log(toggleBtn.firstElementChild);

        if (btnAria.getAttribute('aria-expanded') === 'false') {
            btnAria.setAttribute('aria-expanded', "true");
            navigation.classList.add('is-open');
            this.style.backgroundImage = `url(${close})`;
        } else {
            navigation.classList.remove('is-open');
            btnAria.setAttribute('aria-expanded', "false");
            this.style.backgroundImage = `url(${hamb})`; 
        }
        
        /* if (!navigation.classList.contains('is-open')) {
            navigation.classList.add('is-open');
            e.currentTarget.style.backgroundImage = `none`;
            e.currentTarget.textContent = 'x'
        } else {
            navigation.classList.remove('is-open');
            e.currentTarget.textContent = ''
            e.currentTarget.style.backgroundImage = `url(${hamb})`;
        } */
    }

    toggleBtn.addEventListener('click',onToggle);
}
