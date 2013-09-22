function drawWaterGraph(products) {
	$(function () {
	    var chart;
	    $(document).ready(function() {
		var brands = [];
		var costs = [];
				for(var i = 0, len = products.length; i < len; i++){
					var tempBrand = products[i].brand_name;
					var tempModel = products[i].model_number;
					var tempCost = calculateWaterUse(tempBrand, tempModel);
					var pName = tempBrand + "-" + tempModel;
					brands.push(pName);
					costs.push(tempCost);
				}
	        chart = new Highcharts.Chart({
	            chart: {
	                renderTo: 'graph',
	                type: 'bar'
	            },
				colors: ['#33ADFF'],
	            title: {
	                text: 'Data View'
	            },
	            subtitle: {
	                text: 'Annual Water Use'
	            },
	            xAxis: {
	                categories: brands,
	                title: {
	                    text: null
	                }
	            },
	            yAxis: {
	                min: 0,
	                title: {
	                    text: 'Annual Water Use',
	                    align: 'high'
	                }
	            },
	            tooltip: {
	                formatter: function() {
	                    return ''+
	                        this.series.name +': ' + this.y;
	                }
	            },
	            plotOptions: {
	                bar: {
	                    dataLabels: {
	                        enabled: true
	                    }
	                }
	            },
	            legend: {
	                layout: 'vertical',
	                align: 'right',
	                verticalAlign: 'top',
	                x: -100,
	                y: 100,
	                floating: true,
	                borderWidth: 1,
	                backgroundColor: '#FFFFFF',
	                shadow: true
	            },
	            credits: {
	                enabled: false
	            },
	            series: [{
	                name: 'gal',
	                data: costs
	            }]
	        });
	    });

	});
}

function drawEnergyGraph(products) {
	$(function () {
	    var chart;
	    $(document).ready(function() {
			var brands = [];
			var costs = [];
					for(var i = 0, len = products.length; i < len; i++){
						var tempBrand = products[i].brand_name;
						var tempModel = products[i].model_number;
						var tempCost = calculateWaterUse(tempBrand, tempModel);
						var pName = tempBrand + "-" + tempModel;
						brands.push(pName);
						costs.push(tempCost);
					}
	        chart = new Highcharts.Chart({
	            chart: {
	                renderTo: 'graph',
	                type: 'bar'
	            },
				colors: ['#EEEE4D'],
	            title: {
	                text: 'Data View'
	            },
	            subtitle: {
	                text: 'Annual Energy Use'
	            },
	            xAxis: {
	                categories: brands,
	                title: {
	                    text: null
	                }
	            },
	            yAxis: {
	                min: 0,
	                title: {
	                    text: 'Annual Energy Use',
	                    align: 'high'
	                }
	            },
	            tooltip: {
	                formatter: function() {
	                    return ''+
	                        this.series.name +': ' + this.y;
	                }
	            },
	            plotOptions: {
	                bar: {
	                    dataLabels: {
	                        enabled: true
	                    }
	                }
	            },
	            legend: {
	                layout: 'vertical',
	                align: 'right',
	                verticalAlign: 'top',
	                x: -100,
	                y: 100,
	                floating: true,
	                borderWidth: 1,
	                backgroundColor: '#FFFFFF',
	                shadow: true
	            },
	            credits: {
	                enabled: false
	            },
	            series: [{
	                name: 'kWh',
	                data: costs
	            }]
	        });
	    });

	});
}

function calculateAnnualCost(eBrand, eModel, initialCost, year) {
	var total = 0;
	var energyCost = 1 * ((getAnnualEnergyUse(eBrand, eModel) / ANNUAL_LOAD_COUNT) * getAnnualLoadCount() * getEnergyCost()) * year;
	var waterCost = 1 * ((getAnnualWaterUser(eBrand, eModel) / ANNUAL_LOAD_COUNT) * getAnnualLoadCount() * getWaterCost()) * year;
	total = initialCost + energyCost + waterCost;
	return total;
}

function calculateEnergyUse(eBrand, eModel) {
	var total = 0;
	total += (getAnnualEnergyUse(eBrand, eModel) / ANNUAL_LOAD_COUNT) * getAnnualLoadCount();
	return total;
}

function calculateWaterUse(eBrand, eModel) {
	var total = 0;
	total += (getAnnualWaterUser(eBrand, eModel) / ANNUAL_LOAD_COUNT) * getAnnualLoadCount();
	return total;
}


function drawCostGraph(products) {
$(function () {
    var chart;
    $(document).ready(function() {
		
		var dataSet = [];
		// first build the data
		for(var i = 0, len = products.length; i < len; i++){
			var tempBrand = products[i].brand_name;
			var tempModel = products[i].model_number;
			var tempCost = products[i].cost;
			tempCost = tempCost.substring(1, tempCost.length - 3);
			tempCost = tempCost.replace(/\,/g,"");
			tempCost = parseFloat(tempCost) + 1;
			var pName = tempBrand + "-" + tempModel;
			var costData = [];
			for(var j = 0; j < 10; j++) {
				costData.push(calculateAnnualCost(tempBrand, tempModel, tempCost, j));
			}
			dataSet.push({name: pName, data: costData});
		}
        chart = new Highcharts.Chart({
            chart: {
                renderTo: 'graph',
                type: 'line'
            },
            title: {
                text: 'Data View',
                x: -20 //center
            },
            subtitle: {
                text: 'Cost Over Time',
                x: -20
            },
            xAxis: {
                categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
            },
            yAxis: {
                title: {
                    text: 'Yearly Cost ($)'
                },
                plotLines: [{
                    value: 0,
                    width: 1,
                    color: '#808080'
                }]
            },
            tooltip: {
                formatter: function() {
                        return '<b>'+ this.series.name +'</b><br/>'+
                        this.x +': '+ '$' + this.y;
                }
            },
            legend: {
                layout: 'vertical',
                align: 'right',
                verticalAlign: 'top',
                x: -10,
                y: 100,
                borderWidth: 0
            },
            series: dataSet
        });
    });
    
});

}