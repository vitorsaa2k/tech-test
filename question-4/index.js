const statesRevenue = [
	{
		state: "SP",
		revenue: 67836.43,
	},
	{
		state: "RJ",
		revenue: 36678.66,
	},
	{
		state: "MG",
		revenue: 29229.88,
	},
	{
		state: "ES",
		revenue: 27165.48,
	},
	{
		state: "OUTROS",
		revenue: 19849.53,
	},
];
const totalValue = statesRevenue
	.map(state => state.revenue)
	.reduce((prevNum, num) => prevNum + num, 0);
console.log(totalValue);
function percentageEach() {
	statesRevenue.forEach(state => {
		console.log(
			`Estado: ${state.state}, Porcentagem: ${(
				(state.revenue / totalValue) *
				100
			).toFixed(2)}`
		);
	});
}
percentageEach();
