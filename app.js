new Vue ({
    el: '#app',
    data: {
        vidaJogador: 100,
        vidaMonstro: 100,
        ataqueJogador: 0,
        ataqueMonstro: 0,
        cura: 0,
        turno: 0,
        resultado: "",
        vitoria: false,
        jogoAtivo: false,
        movimentos: []
    },
    watch: {
        vidaJogador(novo, antigo) {
            if (novo <= 0)
            {
                this.resultado = "O monstro venceu :(";
                this.jogoAtivo = false;
            }
        },
        vidaMonstro(novo, antigo) {
            if (novo <= 0)
            {
                this.resultado = "O jogador venceu!! :)";
                this.vitoria = true;
                this.jogoAtivo = false;
            }
        },
        turno() {
            this.ataqueMonstro = Math.floor(Math.random() * 13);
            this.movimentos.unshift(`O monstro atingiu o jogador com ${this.ataqueMonstro}`);
            this.vidaJogador -= this.ataqueMonstro; 
            if (this.vidaJogador <= 0 )
            {
                this.vidaJogador = 0;
            }
        }

    },
    methods: {
        iniciarJogo() {
            this.jogoAtivo = true;
            this.vidaJogador = 100;
            this.vidaMonstro = 100;
            this.movimentos = [];
        }, 
        atacarMonstro(){
            this.ataqueJogador = Math.floor(Math.random() * 11);
            this.movimentos.unshift(`O jogador atingiu o monstro com ${this.ataqueJogador}`);
            this.vidaMonstro -= this.ataqueJogador; 
            if (this.vidaMonstro <= 0 )
            {
                this.vidaMonstro = 0;
            }
            this.turno++;
        },
        especialMonstro() {
            this.ataqueJogador = Math.floor(Math.random() * 20);
            this.movimentos.unshift(`O jogador usou um Especial no monstro batendo ${this.ataqueJogador}`);
            this.vidaMonstro -= this.ataqueJogador; 
            if (this.vidaMonstro <= 0 )
            {
                this.vidaMonstro = 0;
            }
            this.turno++;
        },
        curarJogador() {
            this.cura = Math.floor(Math.random() * 11); 
            this.vidaJogador += this.cura;
            this.movimentos.unshift(`O jogador se curou em ${this.cura}`);
            this.turno++;

        },
        desistirJogo() {
            this.jogoAtivo = false;
            this.vidaJogador = 100;
            this.vidaMonstro = 100;
            this.movimentos = [];
        }

    }
})