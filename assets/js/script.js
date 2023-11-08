//MENU FIXO
window.addEventListener("scroll", function rodar() {
    let header = this.document.querySelector('#fixo')
    header.classList.toggle('fixo', window.scrollY > 0)
})


//ANIMAÇÃO (PLUGIN SIMPLE ANIME)
if (window.SimpleAnime) {
    new SimpleAnime();
};



//ANIMAÇÃO AO SCROLL
//selecionando o elemento a ser manipulado
function startAnimacaoScroll() {
    const sections = document.querySelectorAll('.js-scroll');

    if(sections.length) {
        const windowMetade = window.innerHeight * 0.70;

        function animaScroll() {
            sections.forEach((section) => {
                const sectionTop = section.getBoundingClientRect().top;
                const isSectionVisible = (sectionTop - windowMetade) < 0;
                if (isSectionVisible) {
                    section.classList.add('ativo')
                }
            })
        }

        window.addEventListener('scroll', animaScroll);
    }
}
startAnimacaoScroll()




//BOTÃO MOBILE
const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector('.menu-mobile');
    nav.classList.toggle('active');


    //FECHAR O MENU AO CLICAR NO LINK
    const linkNav = document.querySelector('.link-nav1');
    linkNav.addEventListener('click', () => {
    nav.classList.remove('active');
    })

    const linkNav2 = document.querySelector('.link-nav2');
    linkNav2.addEventListener('click', () => {
    nav.classList.remove('active');
    })

    const linkNav3 = document.querySelector('.link-nav3');
    linkNav3.addEventListener('click', () => {
    nav.classList.remove('active');
    })

    const linkNav4 = document.querySelector('.link-nav4');
    linkNav4.addEventListener('click', () => {
    nav.classList.remove('active');
    })
    //FIM DO FECHAR O MENU AO CLICAR NO LINK


    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if(active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar menu');
    } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir menu');
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);




//CARROSSEL DE IMAGENS DOS PROJETOS
let radio = document.querySelector('.manual-btn');
let cont = 1; //contador para as imagens

document.getElementById('radio1').checked = true;

//temporizador para as imagens automáticas
setInterval(() => {
    proximaImg();
}, 5000)

function proximaImg() {
    cont++;

    if (cont > 3) {
        cont = 1;
    }

    document.getElementById('radio' + cont).checked = true;
}





//DARK MODE
const changeThemeBtn = document.querySelector('#change-theme');

//Toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('light-theme');
}

//Carrega light ou dark de acordo com a preferencia do usuário
function loadTheme() {
    const lightMode = localStorage.getItem("light-theme");

    if (lightMode) {
        toggleDarkMode();
    }
}
loadTheme();

changeThemeBtn.addEventListener("change", function() {
    toggleDarkMode();

    //salvar as preferencias
    localStorage.removeItem("light-theme");

    if (document.body.classList.contains("light-theme")) {
        localStorage.setItem("light-theme", 1);
    }
});