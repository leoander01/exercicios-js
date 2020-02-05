function createCalculator() {
    return {
        display: document.querySelector('.display'),
        init() {
            this.clickBottons();
            this.pressEnter();
        },
        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.makeAccount();
                }
            });
        },
        makeAccount() {
            let account = this.display.value;
            try { 
                account = eval(account);
                if (!account) {
                    alert('Conta inválida!');
                    return;
                }
                this.display.value = String(account);
            } catch(e) {
                alert('Conta inválida!');
                return;
            }
        },
        clearDisplay() {
            this.display.value = '';
        },
        delete() {
            this.display.value = this.display.value.slice(0, -1);
        },
        clickBottons() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnStopDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.delete();
                }

                if(el.classList.contains('btn-eq')) {
                    this.makeAccount();
                }
            });
        },
        btnStopDisplay(valor) {
            this.display.value += valor;
        }
    };
}

const calculator = createCalculator();
calculator.init();