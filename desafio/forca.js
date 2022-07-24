class Forca {

  caracteres = [];
  vidas = 6;
  letrasChutadas = [];
  palavra = [];

  constructor(palavra) {
    this.caracteres = palavra.split("");
    this.palavra = this.caracteres.map(char => { return "_"})
  }
  
  chutar(letra) {
    
    if (this.caracteres.includes(letra)) {
      this.caracteres.forEach((valor,pos) => {
        if(valor == letra) {
          this.palavra[pos] = letra;
        }
      })
    } else {
      this.vidas--;
    }
    
    this.letrasChutadas.push(letra);
   }

  buscarEstado() { 
    if (this.vidas == 0){
      return "perdeu";
    }
    if (!this.palavra.includes("_")){
      return "ganhou";
    }
    return "aguardando chute"; 
  }

  buscarDadosDoJogo() {
      return {
          letrasChutadas: this.letrasChutadas,
          vidas: this.vidas,
          palavra: this.palavra
      }
  }
}

module.exports = Forca;
