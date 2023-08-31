function palavrasDistintas(string) {

    const palavras = string.split(" ");
  
    const palavrasDistintas = {};
  
    for (const palavra of palavras) {
      palavrasDistintas[palavra] = true;
    }
    const resultado = Object.keys(palavrasDistintas);
  
    return resultado;
  }
  
  const texto = "Comer chocolate é bom demais";
  const palavrasUnicas = palavrasDistintas(texto);
  console.log(palavrasUnicas); 
  