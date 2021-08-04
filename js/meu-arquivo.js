//-------------------------------------------------------------------------//
//Tratamento de Erros
try {
    alert( 'Reconhecimento de erros' );
    if (confirm('Gostaria de verificar erros?')) Código_Ruim();
  } catch (Erro) {
    alert( 'Analisando erros...' );
  } finally {
    alert( 'Sem erros!' );
  }
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Definindo o canvas
var canvas = document.getElementById('canvas');

if (canvas.getContext){
    var context = canvas.getContext('2d');
    //Reconhecimento do Canvas
}
else {
    alert('Canvas não suportado')
    //Código para quando o Canvas não for aguentado
}
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Criando circulos

const circle = new Path2D();
    //Criando o formato
    circle.arc(270, 25, 25, 0, 2 * Math.PI);
    //Definindo a cor
    context.fillStyle = 'green';
    //Desenhando a forma
    context.fill(circle);
    //Adiciona event listener para o mouse
    canvas.addEventListener('mousemove', function(event) {
    //Verifica se o cursos do mouse está no circulo
    if (context.isPointInPath(circle, event.offsetX, event.offsetY)) {
        context.fillStyle = 'blue';
    }
    else {
        context.fillStyle = 'green';
    }
//Limpa o canvas e Desenha o circulo na tela
context.fill(circle);
});

const circle1 = new Path2D();
    //Criando o formato
    circle1.arc(425, 375, 24, 0, 2 * Math.PI);
    //Definindo a cor
    context.fillStyle = 'green';
    //Desenhando a forma
    context.fill(circle1);
    //Adiciona event listener para o mouse
    canvas.addEventListener('mousemove', function(event) {
    //Verifica se o cursos do mouse está no circulo
        if (context.isPointInPath(circle1, event.offsetX, event.offsetY)) {
            context.fillStyle = 'blue';
        }
        else {
            context.fillStyle = 'green';
        }
//Limpa o canvas e Desenha o circulo na tela
context.fill(circle1);
});

//-------------------------------------------------------------------------//
//Adicionando as imagens a tela

//[Adiciona o Esquilo]//
var Esquilo = new Image();
//[Adiciona a Noz]//
var Noz = new Image();
//[Adiciona o Fundo com resposta]//
var Fundo1 = new Image();
//[Adiciona o Fundo]//
var Fundo = new Image();

//-------------------------------------------------------------------------//
//Variaveis de posição

//Posição dos Fundos
var FX = 1000;
var FX1 = 1000;

//Posição da Noz
var NY = 420;

//Posição do Esquilo
var EX = -15;
var EY = -30;

//Definir a movimentação parada
var movimentacao = "nula";				
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Mostra o que vai acontecer ao iniciar o jogo	
function jogoIniciado(){

    //-------------------------------------------------------------------------//
	//Localiza a imagem e põe na tela
	//[Imagem do Esquilo]//
	Esquilo.src = "Esquilo.png";

    //[Imagem da Noz]//
    Noz.src = "Noz.png";

    //[Imagem do Fundo]//
    Fundo.src = "Fundo.png";

    //[Imagem do Fundo Falso]//
    Fundo1.src = "Fundo1.png";

    //-------------------------------------------------------------------------//
	//Cria um evento que reconhece a situação da tecla
	//Quando é apertada uma tecla
    window.addEventListener("keydown",pressionouTecla);
	
	//Quando é solta uma tecla
	window.addEventListener("keyup", despressionouTecla);

    //-------------------------------------------------------------------------//
	//Declara o objeto que põe as infomações na tela
	jogoDesenhado();
	//-------------------------------------------------------------------------//
}

//-------------------------------------------------------------------------//
//Função do objeto
function jogoDesenhado (){

    //-------------------------------------------------------------------------//
	//Definindo Fundo Falso
	//Definindo x
    Fundo1X = FX1;
    //-------------------------------------------------------------------------//

    //-------------------------------------------------------------------------//
	//Definindo Fundo 
	//Definindo x
    FundoX = FX;
    //-------------------------------------------------------------------------//

    //-------------------------------------------------------------------------//
	//Definindo Noz 
	//Definindo y
    NozY = NY;
    //-------------------------------------------------------------------------//

    //-------------------------------------------------------------------------//
	//Definindo Esquilo 
	//Definindo x
    EsquiloX = EX;
	//Definindo y
    EsquiloY = EY;


	//-------------------------------------------------------------------------//
	//Faz uma animação no navegador		
	requestAnimationFrame(jogoDesenhado);
	//-------------------------------------------------------------------------//
	
    //-------------------------------------------------------------------------//
	//Atualiza no navegador as propriedades do Fundo False
    context.drawImage(Fundo1,Fundo1X,0,500,450);
    if(movimentacao=="Resposta"){
		FX1 = 0;	
	}

	//Atualiza no navegador as propriedades do Fundo
    context.drawImage(Fundo,FundoX,0,500,450);
    if(movimentacao=="Surgir"){
		FX = 0;	
	} 

	//Atualiza no navegador as propriedades do Esquilo
    context.drawImage(Esquilo,EX, EY,100,100);
    //Move o esquilo para a esquerda
    if(movimentacao=="Esquerda"){
		EX = EX - 1;	
	}
    //Move o esquilo para a direita
    if(movimentacao=="Direita"){
		EX = EX + 1;	
	}
    //Move o esquilo para cima
    if(movimentacao=="Cima"){
		EY = EY - 1;	
	}
    //Move o esquilo para baixo
    if(movimentacao=="Baixo"){
		EY = EY + 1;	
	}

	//Atualiza no navegador as propriedades do Esquilo
    context.drawImage(Noz,465, NozY,25,25);
    //Move a noz para baixo
    if(movimentacao=="Baixo"){
		NY = NY + 0.06;	
	}
}
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//			
//Cria uma função que vai definir o que vai acontecer quando uma  tecla for apertada	
function pressionouTecla(teclaPressionada){
	
	
	//-------------------------------------------------------------------------//
	//Reconhecendo teclas para o movimento das imagens
	if(teclaPressionada.keyCode==32){
		movimentacao = "Surgir";//Espaço
	}
    if(teclaPressionada.keyCode==13){
		movimentacao = "Resposta";//Enter
	
	}
	if(teclaPressionada.keyCode==37){
		movimentacao = "Esquerda";
	}
	
	if(teclaPressionada.keyCode==38){
		movimentacao = "Cima";
	}
	if(teclaPressionada.keyCode==39){
		movimentacao = "Direita";
	}
	
	if(teclaPressionada.keyCode==40){
		movimentacao = "Baixo";
	}
}
//-------------------------------------------------------------------------//

//Cria uma função que vai definir o que vai acontecer quando uma  tecla deixar de ser apertada			
function despressionouTecla(){
		
	//-------------------------------------------------------------------------//
	//Para o movimento
	movimentacao = "nula";	
	//-------------------------------------------------------------------------//	
		
}
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Inicia o script		
jogoIniciado();
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Cria o Gradiente (x0, y0, r0, x1, y1, r1);
var grd = context.createRadialGradient(250, 200, 200, 250, 225, 2);
    //Escala de cores
    grd.addColorStop(0, "green");
    grd.addColorStop(1, "white");
    //Define o estilo com o gradiente
    context.fillStyle = grd;
    //Desenha a forma
    context.fillRect(50, 0, 450, 450);
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Cria um elemento de Gradiente ( x0, y0, x1, y1)
var grd = context.createLinearGradient(0, 400, 0, 450);
//Cor escala de 0(inicio) a 1(fim)
//Pode ter cores intermediárias
grd.addColorStop(0, "green");
grd.addColorStop(1, "white");
//Preenche com o estilo do gradiente
context.fillStyle = grd;
//Desenha a forma com o gradiente
context.fillRect(450, 0, 450, 450);
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Cria um elemento de Gradiente ( x0, y0, x1, y1)
var grd = context.createLinearGradient(0, 50, 0, 0);
//Cor escala de 0(inicio) a 1(fim)
//Pode ter cores intermediárias
grd.addColorStop(0, "green");
grd.addColorStop(1, "white");
// preenche com o estilo do gradiente
context.fillStyle = grd;
//desenha a forma com o gradiente
context.fillRect(0, 0, 50, 450);
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Criação de linhas
//Posição inicial (x,y)
context.moveTo(50, 50);
//Posição de parada, podem ser adicionadas quantas forem necessárias
context.lineTo(100, 50);
context.lineTo(100, 100);//estilo de preenchimento do traço
context.lineTo(150, 100);
context.lineTo(150, 50);
context.lineTo(250, 50);
context.lineTo(150, 50);
context.lineTo(150, 100);
context.lineTo(100, 100);
context.lineTo(100, 50);
context.lineTo(50, 50);
context.lineTo(50, 400);
context.lineTo(100, 400);
context.lineTo(100, 350);
context.lineTo(200, 350);
context.lineTo(100, 350);
context.lineTo(100, 400);
context.lineTo(300, 400);
context.lineTo(300, 350);
context.lineTo(250, 350);
context.lineTo(250, 300);
context.lineTo(100, 300);
context.lineTo(100, 150);
context.lineTo(100, 250);
context.lineTo(150, 250);
context.lineTo(150, 150);
context.lineTo(150, 250);
context.lineTo(300, 250);
context.lineTo(300, 300);
context.lineTo(300, 250);
context.lineTo(150, 250);
context.lineTo(100, 250);
context.lineTo(100, 300);
context.lineTo(250, 300);
context.lineTo(250, 350);
context.lineTo(300, 350);
context.lineTo(300, 400);
context.lineTo(450, 400);
context.moveTo(300, 0);
context.lineTo(300, 50);
context.lineTo(450, 50);
context.lineTo(450, 200);
context.lineTo(400, 200);
context.lineTo(400, 100);
context.lineTo(200, 100);
context.lineTo(200, 200);
context.lineTo(350, 200);
context.lineTo(350, 150);
context.lineTo(250, 150);
context.lineTo(350, 150);
context.lineTo(350, 200);
context.lineTo(350, 350);
context.lineTo(400, 350);
context.lineTo(400, 250);
context.moveTo(50, 50);
context.lineTo(50, 400);
context.lineTo(450, 400);
context.lineTo(450, 450);
context.lineTo(450, 400);
context.moveTo(300, 0);
context.lineTo(300, 50);
context.lineTo(450, 50);
context.lineTo(450, 200);
context.lineTo(400, 200);
context.lineTo(400, 100);
context.lineTo(200, 100);
context.lineTo(200, 200);
context.lineTo(350, 200);
context.lineTo(350, 150);
context.lineTo(350, 350);
context.lineTo(400, 350);
context.lineTo(400, 250);
context.moveTo(450, 200);
context.lineTo(450, 350);
context.lineTo(450, 200);

context.strokeStyle = "000000";
//Desenha o traço
context.stroke();
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Inicia o desenho do caminho
context.beginPath();
//Define o arco da circunferência
//(x, y, raio, anguloInicial, anguloFinal [, anti-horário-> true/false])
// PI = 180, 2*PI = 360
context.arc(25, 0, 24, 0, 2 * Math.PI);
//Stroke desenha a forma vazia, fill preenche a forma
context.stroke();
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Inicia o desenho do caminho
context.beginPath();
//Define o arco da circunferência
// (x, y, raio, anguloInicial, anguloFinal [, anti-horário-> true/false])
// PI = 180, 2*PI = 360
context.arc(476, 451, 24, 0, 2 * Math.PI);
//Stroke desenha a forma vazia, fill preenche a forma
context.stroke();
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Criação de Gráfico(Foi inutilizado pois foi colocado uma foto por cima)
//void ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
//cp = control point (ponto de controle)
/*context.beginPath();
//posição de inicio

context.moveTo(50, 25);
context.bezierCurveTo(150,30, 10,30, 275, 25);
context.bezierCurveTo(250,120, 190,10, 180,140);
context.bezierCurveTo(200,350, 380,120, 325,375);
context.bezierCurveTo(300,420, 475,280, 475,430);

context.Style= "#fff";
context.stroke();
context.closePath();*/
//-------------------------------------------------------------------------//


//-------------------------------------------------------------------------//
//Define a fonte e o tamanho da fonte
context.font = "15px Arial";
context.fillStyle = "#000";
//Define ( texto, x, y [, largura máxima])

context.strokeText("Fim", 463, 445);
context.fillStyle = "#000";
context.fillText("Início", 8, 15);
//-------------------------------------------------------------------------//