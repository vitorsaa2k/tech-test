const data = require("./dados.json");
console.log(data);

const valoresArray = data
	.filter(data => data.valor !== 0)
	.map(data => data.valor);
console.log(valoresArray);
const media =
	valoresArray.reduce((prevNum, num) => prevNum + num, 0) / valoresArray.length;

const menorDiaFaturamento = Math.min(...valoresArray);
const maiorDiaFaturamento = Math.max(...valoresArray);
console.log(menorDiaFaturamento);
console.log(maiorDiaFaturamento);
console.log(media);
