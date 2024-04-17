function gioca(sceltaGiocatore) {  
    const sceltePossibili = ['carta', 'forbice', 'sasso'];
    const sceltaComputer = sceltePossibili[Math.floor(Math.random() * sceltePossibili.length)];

    let risultato = '';

    if (sceltaGiocatore === sceltaComputer) {
        risultato = "Pareggio!";
    } else if (
        (sceltaGiocatore === 'carta' && sceltaComputer === 'sasso') ||
        (sceltaGiocatore === 'forbice' && sceltaComputer === 'carta') ||
        (sceltaGiocatore === 'sasso' && sceltaComputer === 'forbice')
    ) {
        risultato = "Hai vinto!";
    } else {
        risultato = "Hai perso!";
    }

    document.getElementById('risultato').innerText = `Hai scelto ${sceltaGiocatore}, il computer ha scelto ${sceltaComputer}. ${risultato}`;
}

