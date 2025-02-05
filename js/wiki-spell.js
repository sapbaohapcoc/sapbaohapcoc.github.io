document.addEventListener('DOMContentLoaded', () => {
    const spellIcons = document.querySelector('#spell-area').querySelectorAll('.icon-block');
    const spellImgs = document.querySelector('#spell-area').querySelectorAll('.icon-img');
    
    spellIcons.forEach(icon => {
        icon.addEventListener('click', () => {
            const img = icon.querySelector('.icon-img');

            if (!img.classList.contains('selected')) {
                spellImgs.forEach(spellImg => {
                    spellImg.classList.remove('selected');
                });
                img.classList.add('selected');
            }
        })
    })
});