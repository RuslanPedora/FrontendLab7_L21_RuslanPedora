let app;
//--------------------------------------------------------------------------------
class App {
    private buttonEl: any;
    private captionEl: any;
    //--------------------------------------------------------------------------------
    constructor() {
        this.buttonEl = document.getElementById('main-button');
        this.captionEl = document.getElementById('information');
    }
    //--------------------------------------------------------------------------------
    apply(): void {
        this.buttonEl.onclick = () => this.done();
    }
    //--------------------------------------------------------------------------------
    done(): void {
        let liSelection = document.getElementsByTagName('li');

        this.captionEl.style.fontWeight = 'bold';

        for (let i = 0; i < liSelection.length; i++) {
            if (liSelection[ i ].innerText.indexOf(' - done.') >= 0) {
                continue;
            }
            liSelection[ i ].innerText = liSelection[ i ].innerText + ' - done.';
            liSelection[ i ].style.color = 'blue';
        }
    }
}
//--------------------------------------------------------------------------------
window.onload = () => { 
    app = new App(); 
    app.apply();
}
//--------------------------------------------------------------------------------