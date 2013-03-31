/* Autor: Jose Carlos Sosa Mejia.
 * Creacion: 27 de marzo de 2013.
 * Funciones para calculo de ingenieria economica.
*/

function convertirTasa(i)
{
	var tasa = i/100;
	var operando = 1 + tasa;
	return operando.toFixed(4);
}

function potenciacion(base,exponente)
{
	resultado=Math.pow(base,exponente); 
	return resultado;
}

function presenteDadoFuturo(n,i)
{
	var tasa = convertirTasa(i);
	var valorPresente = 1/(potenciacion(tasa , n));
	return valorPresente.toFixed(4);
}

function futuroDadoPresente(n,i)
{
	var tasa = convertirTasa(i);
	var valorFuturo = potenciacion(tasa, n);
	return valorFuturo.toFixed(4);
}

function serieDadoPresente(n,i)
{
	var tasa = convertirTasa(i);
	var seriePresente = ( (i*0.01) * potenciacion(tasa, n))/(potenciacion(tasa, n)-1);
	return seriePresente.toFixed(4);	
}

function presenteDadoSerie(n,i)
{
	var tasa = convertirTasa(i);
	var presenteSerie = 0.0000;
	var auxiliar1 = potenciacion(tasa,n);
	presenteSerie = ((auxiliar1 - 1)/((i*0.01)*(auxiliar1)));
	return presenteSerie.toFixed(4);
}

function futuroDadoSerie(n,i)
{
	var tasa = convertirTasa(i);
	var futuroSerie = (potenciacion(tasa,n) -1)/(i*0.01);
	return futuroSerie.toFixed(4);
}

function serieDadoFuturo(n,i)
{
	var tasa = convertirTasa(i);
	var serieFuturo = (i*0.01)/(potenciacion(tasa,n) -1);
	return serieFuturo.toFixed(4);
}