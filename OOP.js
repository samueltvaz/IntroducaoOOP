function Pessoa(nomeCompleto, equipa){
	this.nome = nomeCompleto;
	this.equipaFormula = equipa;
	this.saudacao = function(){
		document.write("Ola o meu nome e " + this.nome + " e a minha equipa de formula 1 e " + this.equipaFormula + ".		");
		
		console.log("Ola o meu nome e " + this.nome + " e a minha de formula 1 e " + this.equipaFormula + ".");
	}
}

var pedro = new Pessoa("Samuel Vaz", "Mercedes");
pedro.saudacao();

var ana = new Pessoa("Ayrton Senna", "McLaren");
ana.saudacao();

