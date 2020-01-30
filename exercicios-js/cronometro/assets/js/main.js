function clock() {
    function getTimeSeconds(seconds) {
        // multiplicar por mil, pois o JS retorna em milésimo de segundos
        const date = new Date(seconds * 1000);
        return date.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        });
    }

    const clock = document.querySelector('.relogio');
    let seconds = 0;
    let timer;
    
    function startWatch() {
        timer = setInterval(function() {
            seconds++;
            clock.innerHTML = getTimeSeconds(seconds);
        }, 1000);
    }
    
    document.addEventListener('click', function (e) {
        const element = e.target;
    
        if(element.classList.contains('zerar')){
            clearInterval(timer);
            clock.classList.remove('pausar');
            clock.innerHTML = '00:00:00';
            seconds = 0;
        }
    
        if(element.classList.contains('pausar')){
            clearInterval(timer);
            clock.classList.add('pausar'); 
        }
    
        if(element.classList.contains('iniciar')){
            clock.classList.remove('pausar');
            clearInterval(timer);
            startWatch();
        }
    });    
}
clock();
