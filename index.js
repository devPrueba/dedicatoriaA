const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Te Amo...Alejandra\n O En el idioma de Marvel \nIron Man: Te amo 3 millones\nDoctor Strange: Te Amo en todos los universos\nThor: Tu me volviste digno\nSpider-Man: Tu eres mi Camino\nBruja Escarlata: Eres mi tristeza y mi esperanza pero sobre todo mi amor\nDeadpool: Tus locuras van con las mias\nMj: Aqui estoy no me voy a ningun lado')
    alert('Propuesta\nYo no vengo a ofrecerle la luna y las estrella eso se lo ofrece cualquiera.\nYo le ofrezco mis manos para sostenerla, mis labios para que descanse, mis sueños curiosos y perversos, unos brazos largos y honestos, un pecho que le sirve de almohada y un amor más allá de la esperanza.')
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})