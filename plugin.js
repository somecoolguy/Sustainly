//Number to represent the cost of energy per kWh used.
var ENERGY_COST = 0.15;

var ANNUAL_LOAD_COUNT = 392;

var WATER_COST = 0.002;

var reviewArray = [
    'Great Product',
    'This washing machine is of the upmost quality',
    'I quite enjoy the hum that this washer makes'
];

var personArray = [
    'John',
    'Scrabblefiend',
    'R. Coughlin'
];

var siteArray = [
    'overstock.com',
    'google shopper',
    'sears.com'
];

var starImages = [
                  'http://darktriadstudios.com/sustainly/2stars16.png',
                  'http://darktriadstudios.com/sustainly/3stars16.png',
                  'http://darktriadstudios.com/sustainly/4stars16.png',
                  'http://darktriadstudios.com/sustainly/5stars16.png',
                  'http://darktriadstudios.com/sustainly/5stars16.png'
];

var sustainlyBox = document.createElement("div");
sustainlyBox.setAttribute("id", "sustainly");
sustainlyBox.setAttribute("class", "st");

var product_bar_html =
    [
    '<div id="st-header">',
        '<div title="Sustainly Settings" id="product-header-left">',
            '<div class="st-contenth"><img src="http://darktriadstudios.com/sustainly/toolbar_logo_32.png" /></div>',
        '</div>',
        '<div id="product-header-center">',
            '<div class="st-content">Energy Details</div>',
        '</div>',
        '<div id="product-header-right">',
            '<div class="st-content">Reviews</div>',
        '</div>',
        '<div id="product-header-far-right">',
            '<div class="st-content"></div>',
        '</div>',
    '</div>',                                                             
    ].join('\n');

var result_bar_html =
    [
    '<div id="st-header">',
        '<div title="Sustainly Settings" id="result-header-left">',
            '<div class="st-contenth"><img src="http://darktriadstudios.com/sustainly/toolbar_logo_32.png" /></div>',
        '</div>',
        '<div id="result-header-center">',
            '<div class="st-content">Analyzer</div>',
        '</div>',
        '<div id="result-header-right">',
            '<div class="st-content"></div>',
        '</div>',
    '</div>',                                                             
    ].join('\n');

var analyzer_html =
    [
    '<div id="st-header">',
        '<div title="Sustainly Settings" id="result-header-left">',
            '<div class="st-contenth"><img src="http://darktriadstudios.com/sustainly/toolbar_logo_32.png" /></div>',
        '</div>',
        '<div id="result-header-center">',
            '<div class="st-content">Analyzer</div>',
        '</div>',
        '<div id="result-header-right">',
            '<div class="st-contenth"><img src="http://darktriadstudios.com/sustainly/close_button.png" /></div>',
        '</div>',
    '</div>',
    '<div id="st-body">',
        '<div id="st-body-left">',
            '<div class="st-content">',
			'<b>Products</b>',
		'<ul id="productlist">',
		'</ul>',
	    '</div>',
        '</div>',
        '<div id="st-body-right">',
            '<div class="st-content"><button id="graphButton1">Cost Over Time</button><br><button id="graphButton2">Annual Energy Use</button><br><button id="graphButton3">Annual Water Use</button></div>',
        '</div>',
        '<div id="st-body-center">',
            '<div class="st-content"><div id="graph"></div></div>',
        '</div>',
    '</div>',                                                             
    ].join('\n');
    
var review_html =
    [
    '<div id="st-header">',
        '<div title="Sustainly Settings" id="product-header-left">',
            '<div class="st-contenth"><img src="http://darktriadstudios.com/sustainly/toolbar_logo_32.png" /></div>',
        '</div>',
        '<div id="product-header-center">',
            '<div class="st-content">Energy Details</div>',
        '</div>',
        '<div id="product-header-right">',
            '<div class="st-content">Reviews</div>',
        '</div>',
        '<div id="product-header-far-right">',
            '<div class="st-contenth"><img src="http://darktriadstudios.com/sustainly/close_button.png" /></div>',
        '</div>',
    '</div>',
    '<div id="st-body">',
        '<div class="infoBar">',
            '<ul class="reviewBar">',
            '<li class="hori"><div id="productName"></div></li>',
            '<li class="hori"><div id="starRating"></div></li>',
            '<li class="hori"><div id="reviewCount"></div></li>',
            '</ul>',
        '</div>',
        '<div id="reviewList" class="reviewList">',
        '</div>',
/*        '<div id="st-body-left">',
            '<div class="st-content">Left Column</div>',
        '</div>',
        '<div id="st-body-center">',
            '<div class="st-content">Center Column</div>',
        '</div>',
        '<div id="st-body-right">',
            '<div class="st-content">Right Column</div>',
        '</div>',
*/    '</div>',                                                             
    ].join('\n');
    
var energy_html =
    [
    '<div id="st-header">',
        '<div title="Sustainly Settings" id="product-header-left">',
            '<div class="st-contenth"><img src="http://darktriadstudios.com/sustainly/toolbar_logo_32.png" /></div>',
        '</div>',
        '<div id="product-header-center">',
            '<div class="st-content">Energy Details</div>',
        '</div>',
        '<div id="product-header-right">',
            '<div class="st-content">Reviews</div>',
        '</div>',
        '<div id="product-header-far-right">',
            '<div class="st-contenth"><img src="http://darktriadstudios.com/sustainly/close_button.png" /></div>',
        '</div>',
    '</div>',
    '<div title="Based on ' + ANNUAL_LOAD_COUNT + ' loads per year, a cost of $' + ENERGY_COST + ' per kWh of energy, and a cost of $' + WATER_COST + ' per gallon of water." id="st-body">',
        '<div id="energy-div" class="energyContent">',
        '</div>',
/*        '<div id="st-body-left">',
            '<div class="st-content">Left Column</div>',
        '</div>',
        '<div id="st-body-center">',
            '<div class="st-content">Energy Details</div>',
        '</div>',
        '<div id="st-body-right">',
            '<div class="st-content">Reviews</div>',
        '</div>',
*/    '</div>',                                                             
    ].join('\n');
    
/*
var xmlhttp = new XMLHttpRequest();
var htmlURL = chrome.extension.getURL("pluginBox.html");
alert(htmlURL);
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4){
        alert(xmlhttp.status);
        var pluginHTML = xmlhttp.responseText;
    }
}
xmlhttp.open("GET", htmlURL, true);
xmlhttp.send();

*/

var reviewCount;
var productTitle;
var bodyhtml = document.body.innerHTML;
var start_result_zero = bodyhtml.indexOf("result_0");
var start_product_title = bodyhtml.indexOf("btAsinTitle");
var strong_start = bodyhtml.indexOf("<strong>");
init();

//alert(productExists("GE", "WCVH6800J.+"));
//Detect if this is a results page
if (/*window.location.indexOf("rh=") != -1*/ start_result_zero != -1){
    sustainlyBox.style.cssText = [
				  'position: fixed;',
				  'z-index: 10;'
				  ].join(' ');
    document.body.parentElement.insertBefore(sustainlyBox, document.body.nextSibling);

    setResultBar();
//    sustainlyBox.innerHTML = result_bar_html;
//    document.getElementById("result-header-center").onclick=openAnalyzer;
    
	//alert("Starting EnergyStar search");
    var resultsTitles = scrapeResultsPage();
    insertResultsData(resultsTitles);
	
	/*
	for (var i in resultsTitles){
		var title = resultsTitles[i].replace(/(\r\n|\n|\r|)/gm,"").replace(/(by.*)/gm, "").trim();
		alert("Title: " + title + ", Is EnergyStar: " + isEnergyStar(title));
	}
	*/
	//for(var i = 0, len = resultsTitles.length - 1; i < len; i++){
	//	alert("Title: " + resultsTitles[i] + ", Is EnergyStar: " + isEnergyStar(resultsTitles[i]));
	//}
	//alert("Finished EnergyStar search");
    //alert(p_information["B002UYSHMM"]);

/*   if (strong_start != -1){
        var category = bodyhtml.substring(strong_start + 8, bodyhtml.indexOf("</strong>"));
        alert(category);
    }
    else{
        alert("category not detected");
    }
*/
}
//Detect if this is a product page
else if (start_product_title != -1){
    sustainlyBox.innerHTML = product_bar_html;
    document.body.insertBefore(sustainlyBox, document.body.lastChild);
	
    //Get a random number between 14 and 264 to display as the reviewCount
    reviewCount = Math.floor(Math.random()*250) + 14;
    starImage = starImages[Math.floor(Math.random()*4)];
    
    //Parse the product title from the HTML
    productTitle = getProductTitle();
    
    document.getElementById("product-header-center").onclick=openEnergyDetails;
    document.getElementById("product-header-right").onclick=openReviews;
    document.getElementById("product-header-left").onclick=openSettings;
    
    insertReviewNumber();
}

//Initializes local storage DB
function init() {
	
	var sustainly = new localStorageDB("Sustainly");
	
	if( sustainly.isNew() ) {
		
		sustainly.createTable("analyzer", ["analyzer_id", "model_number", "brand_name", "cost"]);
		
		sustainly.createTable("settings", ["load_count", "energy_cost", "water_cost"]);
		sustainly.insert("settings", {load_count: "392", energy_cost: ".15", water_cost: ".002"});
	
	
		sustainly.createTable("washing_machine", ["model_number", "brand_name", "load_config", "volume", "annual_energy_use", "modified_energy_factor" , "federal_standard", "percent_better", "annual_water_use", "water_factor"]);
		
		sustainly.insert("washing_machine", {model_number: "WCVH6800J.+", brand_name: "GE", load_config: "Front Load", volume: "3.47000002861023", annual_energy_use: "144.0", modified_energy_factor: "2.20000004768372", federal_standard: "1.25999999046326", percent_better: "75", annual_water_use: "5713", water_factor: "4.19999980926514"});
		sustainly.insert("washing_machine", {model_number: "WCVH4800.+", brand_name: "General Electric", load_config: "Front Load", volume: "2.22000002861023", annual_energy_use: "122.0", modified_energy_factor: "2.29999995231628", federal_standard: "1.25999999046326", percent_better: "83", annual_water_use: "3742", water_factor: "4.30000019073486"});
		sustainly.insert("washing_machine", {model_number: "WCVH4815.+", brand_name: "General Electric", load_config: "Front Load", volume: "2.22000002861023", annual_energy_use: "122.0", modified_energy_factor: "2.29999995231628", federal_standard: "1.25999999046326", percent_better: "83", annual_water_use: "3742", water_factor: "4.30000019073486"});
		sustainly.insert("washing_machine", {model_number: "PFWS4600L.+", brand_name: "GE Profile", load_config: "Front Load", volume: "4.32999992370606", annual_energy_use: "201.0", modified_energy_factor: "2.69000005722046", federal_standard: "1.25999999046326", percent_better: "113", annual_water_use: "6614", water_factor: "3.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "PFWS4605L.+", brand_name: "GE Profile", load_config: "Front Load", volume: "4.32999992370606", annual_energy_use: "201.0", modified_energy_factor: "2.69000005722046", federal_standard: "1.25999999046326", percent_better: "113", annual_water_use: "6614", water_factor: "3.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "PTWN6050M.+", brand_name: "GE Profile", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "160.0", modified_energy_factor: "2.20000004768372", federal_standard: "1.25999999046326", percent_better: "75", annual_water_use: "6350", water_factor: "4.5"});
		sustainly.insert("washing_machine", {model_number: "PTWN6250M.+", brand_name: "GE Profile", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "160.0", modified_energy_factor: "2.20000004768372", federal_standard: "1.25999999046326", percent_better: "75", annual_water_use: "6350", water_factor: "4.5"});
		sustainly.insert("washing_machine", {model_number: "WPDH8800J.+", brand_name: "GE Profile", load_config: "Front Load", volume: "3.59999990463257", annual_energy_use: "191.0", modified_energy_factor: "2.23000001907349", federal_standard: "1.25999999046326", percent_better: "77", annual_water_use: "5786", water_factor: "4.09999990463257"});
		sustainly.insert("washing_machine", {model_number: "WPDH8900J.+", brand_name: "GE Profile", load_config: "Front Load", volume: "3.59999990463257", annual_energy_use: "191.0", modified_energy_factor: "2.23000001907349", federal_standard: "1.25999999046326", percent_better: "77", annual_water_use: "5786", water_factor: "4.09999990463257"});
		sustainly.insert("washing_machine", {model_number: "WPDH8910K.+", brand_name: "GE Profile", load_config: "Front Load", volume: "3.59999990463257", annual_energy_use: "191.0", modified_energy_factor: "2.23000001907349", federal_standard: "1.25999999046326", percent_better: "77", annual_water_use: "5786", water_factor: "4.09999990463257"});
		sustainly.insert("washing_machine", {model_number: "WPRE6150K.+", brand_name: "GE Profile", load_config: "Top Load", volume: "3.5699999332428", annual_energy_use: "199.0", modified_energy_factor: "2.01999998092651", federal_standard: "1.25999999046326", percent_better: "60", annual_water_use: "7557", water_factor: "5.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "WPRE8150K.+", brand_name: "GE Profile", load_config: "Top Load", volume: "3.5699999332428", annual_energy_use: "199.0", modified_energy_factor: "2.01999998092651", federal_standard: "1.25999999046326", percent_better: "60", annual_water_use: "7557", water_factor: "5.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "GWT460AW", brand_name: "Haier", load_config: "Top Load", volume: "3.16000008583069", annual_energy_use: "200.0", modified_energy_factor: "2.0", federal_standard: "1.25999999046326", percent_better: "59", annual_water_use: "7432", water_factor: "6.0"});
		sustainly.insert("washing_machine", {model_number: "GWT460BW", brand_name: "Haier", load_config: "Top Load", volume: "3.16000008583069", annual_energy_use: "200.0", modified_energy_factor: "2.0", federal_standard: "1.25999999046326", percent_better: "59", annual_water_use: "7432", water_factor: "6.0"});
		sustainly.insert("washing_machine", {model_number: "HWF5000.+", brand_name: "Haier", load_config: "Front Load", volume: "3.5", annual_energy_use: "173.0", modified_energy_factor: "2.40000009536743", federal_standard: "1.25999999046326", percent_better: "90", annual_water_use: "5351", water_factor: "3.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "HWF5000AW", brand_name: "Haier", load_config: "Front Load", volume: "3.70000004768372", annual_energy_use: "171.0", modified_energy_factor: "2.20000004768372", federal_standard: "1.25999999046326", percent_better: "75", annual_water_use: "6962", water_factor: "4.80000019073486"});
		sustainly.insert("washing_machine", {model_number: "HWF5300.+", brand_name: "Haier", load_config: "Front Load", volume: "3.5", annual_energy_use: "173.0", modified_energy_factor: "2.42000007629395", federal_standard: "1.25999999046326", percent_better: "92", annual_water_use: "5351", water_factor: "3.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "HWF5300AW", brand_name: "Haier", load_config: "Front Load", volume: "3.70000004768372", annual_energy_use: "173.0", modified_energy_factor: "2.40000009536743", federal_standard: "1.25999999046326", percent_better: "90", annual_water_use: "6672", water_factor: "4.59999990463257"});
		sustainly.insert("washing_machine", {model_number: "IFW7300W.+", brand_name: "Inglis", load_config: "Front Load", volume: "3.46000003814697", annual_energy_use: "162.0", modified_energy_factor: "2.39000010490417", federal_standard: "1.25999999046326", percent_better: "90", annual_water_use: "5425", water_factor: "4.0"});
		sustainly.insert("washing_machine", {model_number: "2125.10.+", brand_name: "Kenmore", load_config: "Top Load", volume: "3.34999990463257", annual_energy_use: "150.0", modified_energy_factor: "2.03999996185303", federal_standard: "1.25999999046326", percent_better: "62", annual_water_use: "7774", water_factor: "5.92000007629395"});
		sustainly.insert("washing_machine", {model_number: "2130.+", brand_name: "Kenmore", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "123.0", modified_energy_factor: "2.48000001907349", federal_standard: "1.25999999046326", percent_better: "97", annual_water_use: "5137", water_factor: "3.64000010490417"});
		sustainly.insert("washing_machine", {model_number: "2135.10.+", brand_name: "Kenmore", load_config: "Top Load", volume: "3.34999990463257", annual_energy_use: "150.0", modified_energy_factor: "2.03500008583069", federal_standard: "1.25999999046326", percent_better: "62", annual_water_use: "7768", water_factor: "5.91499996185303"});
		sustainly.insert("washing_machine", {model_number: "2139.+", brand_name: "Kenmore", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "123.0", modified_energy_factor: "2.48000001907349", federal_standard: "1.25999999046326", percent_better: "97", annual_water_use: "5137", water_factor: "3.64000010490417"});
		sustainly.insert("washing_machine", {model_number: "2600.+10.+", brand_name: "Kenmore", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "123.0", modified_energy_factor: "2.45000004768372", federal_standard: "1.25999999046326", percent_better: "94", annual_water_use: "5052", water_factor: "3.57999992370605"});
		sustainly.insert("washing_machine", {model_number: "2601.+10.+", brand_name: "Kenmore", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "123.0", modified_energy_factor: "2.45000004768372", federal_standard: "1.25999999046326", percent_better: "94", annual_water_use: "5052", water_factor: "3.57999992370605"});
		sustainly.insert("washing_machine", {model_number: "2800.+10.+", brand_name: "Kenmore", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "123.0", modified_energy_factor: "2.45000004768372", federal_standard: "1.25999999046326", percent_better: "94", annual_water_use: "5052", water_factor: "3.57999992370605"});
		sustainly.insert("washing_machine", {model_number: "2801.+10.+", brand_name: "Kenmore", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "123.0", modified_energy_factor: "2.45000004768372", federal_standard: "1.25999999046326", percent_better: "94", annual_water_use: "5052", water_factor: "3.57999992370605"});
		sustainly.insert("washing_machine", {model_number: "2806.+80.+", brand_name: "Kenmore", load_config: "Top Load", volume: "4.07999992370606", annual_energy_use: "252.0", modified_energy_factor: "2.23000001907349", federal_standard: "1.25999999046326", percent_better: "77", annual_water_use: "7037", water_factor: "4.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "2807.+80.+", brand_name: "Kenmore", load_config: "Top Load", volume: "4.07999992370606", annual_energy_use: "252.0", modified_energy_factor: "2.23000001907349", federal_standard: "1.25999999046326", percent_better: "77", annual_water_use: "7037", water_factor: "4.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "2808170.+", brand_name: "Kenmore", load_config: "Top Load", volume: "4.07999992370606", annual_energy_use: "259.0", modified_energy_factor: "2.25999999046326", federal_standard: "1.25999999046326", percent_better: "79", annual_water_use: "7197", water_factor: "4.5"});
		sustainly.insert("washing_machine", {model_number: "2808770.+", brand_name: "Kenmore", load_config: "Top Load", volume: "4.07999992370606", annual_energy_use: "259.0", modified_energy_factor: "2.25999999046326", federal_standard: "1.25999999046326", percent_better: "79", annual_water_use: "7197", water_factor: "4.5"});
		sustainly.insert("washing_machine", {model_number: "2809170.+", brand_name: "Kenmore", load_config: "Top Load", volume: "4.07999992370606", annual_energy_use: "259.0", modified_energy_factor: "2.25999999046326", federal_standard: "1.25999999046326", percent_better: "79", annual_water_use: "7197", water_factor: "4.5"});
		sustainly.insert("washing_machine", {model_number: "2809770.+", brand_name: "Kenmore", load_config: "Top Load", volume: "4.07999992370606", annual_energy_use: "259.0", modified_energy_factor: "2.25999999046326", federal_standard: "1.25999999046326", percent_better: "79", annual_water_use: "7197", water_factor: "4.5"});
		sustainly.insert("washing_machine", {model_number: "2900.+00.+", brand_name: "Kenmore", load_config: "Top Load", volume: "4.32000017166138", annual_energy_use: "273.0", modified_energy_factor: "2.41000008583069", federal_standard: "1.25999999046326", percent_better: "91", annual_water_use: "6774", water_factor: "4.0"});
		sustainly.insert("washing_machine", {model_number: "2927.+00.+", brand_name: "Kenmore", load_config: "Top Load", volume: "4.48000001907349", annual_energy_use: "250.0", modified_energy_factor: "2.41000008583069", federal_standard: "1.25999999046326", percent_better: "91", annual_water_use: "7025", water_factor: "4.0"});
		sustainly.insert("washing_machine", {model_number: "2947.+00.+", brand_name: "Kenmore", load_config: "Top load", volume: "4.48000001907349", annual_energy_use: "250.0", modified_energy_factor: "2.41000008583069", federal_standard: "1.25999999046326", percent_better: "91", annual_water_use: "7025", water_factor: "4.0"});
		sustainly.insert("washing_machine", {model_number: "402.+4903.+01.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.45000004768372", annual_energy_use: "144.0", modified_energy_factor: "2.5", federal_standard: "1.25999999046326", percent_better: "98", annual_water_use: "4463", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "4027.+90.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.51999998092651", annual_energy_use: "126.0", modified_energy_factor: "2.75", federal_standard: "1.25999999046326", percent_better: "118", annual_water_use: "4967", water_factor: "3.59999990463257"});
		sustainly.insert("washing_machine", {model_number: "4031.+90.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.63000011444092", annual_energy_use: "119.0", modified_energy_factor: "2.88000011444092", federal_standard: "1.25999999046326", percent_better: "129", annual_water_use: "4838", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "4041.+", brand_name: "Kenmore", load_config: "Front Load", volume: "2.65000009536743", annual_energy_use: "160.0", modified_energy_factor: "2.00999999046326", federal_standard: "1.25999999046326", percent_better: "60", annual_water_use: "5921", water_factor: "5.69999980926514"});
		sustainly.insert("washing_machine", {model_number: "4044.+90.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.63000011444092", annual_energy_use: "119.0", modified_energy_factor: "2.88000011444092", federal_standard: "1.25999999046326", percent_better: "129", annual_water_use: "4838", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "4051.+90.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.86999988555908", annual_energy_use: "112.0", modified_energy_factor: "2.84999990463257", federal_standard: "1.25999999046326", percent_better: "126", annual_water_use: "5158", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "4102.+90.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.86999988555908", annual_energy_use: "110.0", modified_energy_factor: "2.90000009536743", federal_standard: "1.25999999046326", percent_better: "130", annual_water_use: "5158", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "4137.+21.+", brand_name: "Kenmore", load_config: "Front load", volume: "3.73000001907349", annual_energy_use: "111.0", modified_energy_factor: "3.04999995231628", federal_standard: "1.25999999046326", percent_better: "142", annual_water_use: "4825", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "4147.+21.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.96000003814697", annual_energy_use: "116.0", modified_energy_factor: "3.20000004768372", federal_standard: "1.25999999046326", percent_better: "154", annual_water_use: "5123", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "4153.+21.+", brand_name: "Kenmore", load_config: "Front Load", volume: "4.26000022888184", annual_energy_use: "95.0", modified_energy_factor: "3.40000009536743", federal_standard: "1.25999999046326", percent_better: "170", annual_water_use: "4843", water_factor: "2.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "4154.+21.+", brand_name: "Kenmore", load_config: "Front Load", volume: "4.26000022888184", annual_energy_use: "95.0", modified_energy_factor: "3.40000009536743", federal_standard: "1.25999999046326", percent_better: "170", annual_water_use: "4676", water_factor: "2.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "4172.+00.+", brand_name: "Kenmore", load_config: "Front Load", volume: "4.17000007629395", annual_energy_use: "108.0", modified_energy_factor: "2.99000000953674", federal_standard: "1.25999999046326", percent_better: "137", annual_water_use: "5558", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "417.+4110.+", brand_name: "Kenmore", load_config: "Front Load", volume: "4.34000015258789", annual_energy_use: "104.0", modified_energy_factor: "3.15000009536743", federal_standard: "1.25999999046326", percent_better: "150", annual_water_use: "4764", water_factor: "2.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "417.+4413.+", brand_name: "Kenmore", load_config: "Front Load", volume: "4.40000009536743", annual_energy_use: "109.0", modified_energy_factor: "3.15000009536743", federal_standard: "1.25999999046326", percent_better: "150", annual_water_use: "4829", water_factor: "2.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "4650.+70.+", brand_name: "Kenmore", load_config: "Front Load", volume: "2.99000000953674", annual_energy_use: "165.0", modified_energy_factor: "2.22000002861023", federal_standard: "1.25999999046326", percent_better: "76", annual_water_use: "5509", water_factor: "4.69999980926514"});
		sustainly.insert("washing_machine", {model_number: "4651.+70.+", brand_name: "Kenmore", load_config: "Front Load", volume: "2.99000000953674", annual_energy_use: "165.0", modified_energy_factor: "2.22000002861023", federal_standard: "1.25999999046326", percent_better: "76", annual_water_use: "5509", water_factor: "4.69999980926514"});
		sustainly.insert("washing_machine", {model_number: "4674.+70.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "140.0", modified_energy_factor: "2.38000011444092", federal_standard: "1.25999999046326", percent_better: "89", annual_water_use: "5228", water_factor: "3.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "4674.+80.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "133.0", modified_energy_factor: "2.27999997138977", federal_standard: "1.25999999046326", percent_better: "81", annual_water_use: "5228", water_factor: "3.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "4675.+70.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "140.0", modified_energy_factor: "2.38000011444092", federal_standard: "1.25999999046326", percent_better: "89", annual_water_use: "5228", water_factor: "3.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "4708.+60.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "202.0", modified_energy_factor: "2.35999989509583", federal_standard: "1.25999999046326", percent_better: "87", annual_water_use: "5504", water_factor: "4.0"});
		sustainly.insert("washing_machine", {model_number: "4709.+60.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "202.0", modified_energy_factor: "2.35999989509583", federal_standard: "1.25999999046326", percent_better: "87", annual_water_use: "5504", water_factor: "4.0"});
		sustainly.insert("washing_machine", {model_number: "4751.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.1800000667572", annual_energy_use: "150.0", modified_energy_factor: "2.57999992370605", federal_standard: "1.25999999046326", percent_better: "105", annual_water_use: "4986", water_factor: "4.0"});
		sustainly.insert("washing_machine", {model_number: "4753.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.1800000667572", annual_energy_use: "150.0", modified_energy_factor: "2.57999992370605", federal_standard: "1.25999999046326", percent_better: "105", annual_water_use: "4986", water_factor: "4.0"});
		sustainly.insert("washing_machine", {model_number: "4754.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.1800000667572", annual_energy_use: "150.0", modified_energy_factor: "2.57999992370605", federal_standard: "1.25999999046326", percent_better: "105", annual_water_use: "4986", water_factor: "4.0"});
		sustainly.insert("washing_machine", {model_number: "4756.+70.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.25999999046326", annual_energy_use: "145.0", modified_energy_factor: "2.59999990463257", federal_standard: "1.25999999046326", percent_better: "106", annual_water_use: "4728", water_factor: "3.70000004768372"});
		sustainly.insert("washing_machine", {model_number: "4757.+70.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.25999999046326", annual_energy_use: "145.0", modified_energy_factor: "2.59999990463257", federal_standard: "1.25999999046326", percent_better: "106", annual_water_use: "4728", water_factor: "3.70000004768372"});
		sustainly.insert("washing_machine", {model_number: "4758.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.25999999046326", annual_energy_use: "145.0", modified_energy_factor: "2.59999990463257", federal_standard: "1.25999999046326", percent_better: "106", annual_water_use: "4728", water_factor: "3.70000004768372"});
		sustainly.insert("washing_machine", {model_number: "4770.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.78999996185303", annual_energy_use: "136.0", modified_energy_factor: "2.64000010490417", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "5051", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "4771.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.78999996185303", annual_energy_use: "136.0", modified_energy_factor: "2.64000010490417", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "5051", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "4775.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.78999996185303", annual_energy_use: "136.0", modified_energy_factor: "2.64000010490417", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "5051", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "4776.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.78999996185303", annual_energy_use: "136.0", modified_energy_factor: "2.64000010490417", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "5051", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "4778.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "151.0", modified_energy_factor: "2.58999991416931", federal_standard: "1.25999999046326", percent_better: "106", annual_water_use: "5228", water_factor: "3.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "47781702", brand_name: "Kenmore", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "132.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "5228", water_factor: "3.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "4778.+80.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.78999996185303", annual_energy_use: "136.0", modified_energy_factor: "2.64000010490417", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "5051", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "4779.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "151.0", modified_energy_factor: "2.58999991416931", federal_standard: "1.25999999046326", percent_better: "106", annual_water_use: "5228", water_factor: "3.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "4779.+80.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.78999996185303", annual_energy_use: "136.0", modified_energy_factor: "2.64000010490417", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "5051", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "4785.+60.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "187.0", modified_energy_factor: "2.22000002861023", federal_standard: "1.25999999046326", percent_better: "76", annual_water_use: "5779", water_factor: "4.19999980926514"});
		sustainly.insert("washing_machine", {model_number: "4788.+60.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "187.0", modified_energy_factor: "2.22000002861023", federal_standard: "1.25999999046326", percent_better: "76", annual_water_use: "5779", water_factor: "4.19999980926514"});
		sustainly.insert("washing_machine", {model_number: "4789.+60.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "187.0", modified_energy_factor: "2.22000002861023", federal_standard: "1.25999999046326", percent_better: "76", annual_water_use: "5779", water_factor: "4.19999980926514"});
		sustainly.insert("washing_machine", {model_number: "4996.+60.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "187.0", modified_energy_factor: "2.22000002861023", federal_standard: "1.25999999046326", percent_better: "76", annual_water_use: "5779", water_factor: "4.19999980926514"});
		sustainly.insert("washing_machine", {model_number: "4997.+60.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "187.0", modified_energy_factor: "2.22000002861023", federal_standard: "1.25999999046326", percent_better: "76", annual_water_use: "5779", water_factor: "4.19999980926514"});
		sustainly.insert("washing_machine", {model_number: "592-4900.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.85999989509583", annual_energy_use: "138.0", modified_energy_factor: "2.57999992370605", federal_standard: "1.25999999046326", percent_better: "105", annual_water_use: "5008", water_factor: "3.30999994277954"});
		sustainly.insert("washing_machine", {model_number: "592-4903.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.45000004768372", annual_energy_use: "144.0", modified_energy_factor: "2.5", federal_standard: "1.25999999046326", percent_better: "98", annual_water_use: "4449", water_factor: "3.28999996185303"});
		sustainly.insert("washing_machine", {model_number: "592-4904.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.4300000667572", annual_energy_use: "165.0", modified_energy_factor: "2.41000008583069", federal_standard: "1.25999999046326", percent_better: "91", annual_water_use: "4840", water_factor: "3.59999990463257"});
		sustainly.insert("washing_machine", {model_number: "592-49042", brand_name: "Kenmore", load_config: "Front Load", volume: "3.45000004768372", annual_energy_use: "165.0", modified_energy_factor: "2.4300000667572", federal_standard: "1.25999999046326", percent_better: "93", annual_water_use: "4760", water_factor: "3.51999998092651"});
		sustainly.insert("washing_machine", {model_number: "592-4905.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.4300000667572", annual_energy_use: "165.0", modified_energy_factor: "2.45000004768372", federal_standard: "1.25999999046326", percent_better: "94", annual_water_use: "4840", water_factor: "3.59999990463257"});
		sustainly.insert("washing_machine", {model_number: "592-4906.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "149.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "4773", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "592-4907.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "149.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "4773", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "592-4908.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "145.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "4773", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "592-4912.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "149.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "4773", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "592-4914.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "149.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "4773", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "592-4915.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "149.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "4773", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "592-4918.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "145.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "4773", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "592-4919.+", brand_name: "Kenmore", load_config: "Front Load", volume: "3.85999989509583", annual_energy_use: "160.0", modified_energy_factor: "2.57999992370605", federal_standard: "1.25999999046326", percent_better: "105", annual_water_use: "5145", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "6154.+", brand_name: "Kenmore", load_config: "Top Load", volume: "3.4300000667572", annual_energy_use: "157.0", modified_energy_factor: "2.01999998092651", federal_standard: "1.25999999046326", percent_better: "60", annual_water_use: "7597", water_factor: "5.65000009536743"});
		sustainly.insert("washing_machine", {model_number: "7154.+", brand_name: "Kenmore", load_config: "Top Load", volume: "3.4300000667572", annual_energy_use: "157.0", modified_energy_factor: "2.01999998092651", federal_standard: "1.25999999046326", percent_better: "60", annual_water_use: "7597", water_factor: "5.65000009536743"});
		sustainly.insert("washing_machine", {model_number: "LSWF388H.+", brand_name: "LG", load_config: "Front Load", volume: "4.17000007629395", annual_energy_use: "108.0", modified_energy_factor: "2.99000000953674", federal_standard: "1.25999999046326", percent_better: "137", annual_water_use: "5558", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "WM1355H.+", brand_name: "LG", load_config: "Front Load", volume: "2.33999991416931", annual_energy_use: "108.0", modified_energy_factor: "2.40000009536743", federal_standard: "1.25999999046326", percent_better: "90", annual_water_use: "4036", water_factor: "4.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "WM2101H.+", brand_name: "LG", load_config: "Front Load", volume: "3.51999998092651", annual_energy_use: "160.0", modified_energy_factor: "2.21000003814697", federal_standard: "1.25999999046326", percent_better: "75", annual_water_use: "5174", water_factor: "3.75"});
		sustainly.insert("washing_machine", {model_number: "WM2140C.+", brand_name: "LG", load_config: "Front Load", volume: "3.47000002861023", annual_energy_use: "97.0", modified_energy_factor: "2.99000000953674", federal_standard: "1.25999999046326", percent_better: "137", annual_water_use: "4761", water_factor: "3.5"});
		sustainly.insert("washing_machine", {model_number: "WM2240C.+", brand_name: "LG", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "110.0", modified_energy_factor: "2.74000000953674", federal_standard: "1.25999999046326", percent_better: "117", annual_water_use: "5352", water_factor: "3.70000004768372"});
		sustainly.insert("washing_machine", {model_number: "WM2250C.+", brand_name: "LG", load_config: "Front Load", volume: "3.59999990463257", annual_energy_use: "97.0", modified_energy_factor: "3.0", federal_standard: "1.25999999046326", percent_better: "138", annual_water_use: "4657", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "WM2350H.+", brand_name: "LG", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "102.0", modified_energy_factor: "2.79999995231628", federal_standard: "1.25999999046326", percent_better: "122", annual_water_use: "4918", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "WM2450H.+", brand_name: "LG", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "105.0", modified_energy_factor: "3.0", federal_standard: "1.25999999046326", percent_better: "138", annual_water_use: "5121", water_factor: "3.53999996185303"});
		sustainly.insert("washing_machine", {model_number: "WM2550H.+", brand_name: "LG", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "105.0", modified_energy_factor: "3.0", federal_standard: "1.25999999046326", percent_better: "138", annual_water_use: "5121", water_factor: "3.53999996185303"});
		sustainly.insert("washing_machine", {model_number: "WM2650H.+", brand_name: "LG", load_config: "Front Load", volume: "3.59999990463257", annual_energy_use: "97.0", modified_energy_factor: "3.0", federal_standard: "1.25999999046326", percent_better: "138", annual_water_use: "4657", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "WM3070H.+", brand_name: "LG", load_config: "Front load", volume: "3.73000001907349", annual_energy_use: "111.0", modified_energy_factor: "3.04999995231628", federal_standard: "1.25999999046326", percent_better: "142", annual_water_use: "4825", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "WM3150H.+", brand_name: "LG", load_config: "Front Load", volume: "4.26000022888184", annual_energy_use: "95.0", modified_energy_factor: "3.40000009536743", federal_standard: "1.25999999046326", percent_better: "170", annual_water_use: "4843", water_factor: "2.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "WM3360H.+", brand_name: "LG", load_config: "Front Load", volume: "3.86999988555908", annual_energy_use: "100.0", modified_energy_factor: "3.14000010490417", federal_standard: "1.25999999046326", percent_better: "149", annual_water_use: "5006", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "WM3470H.+", brand_name: "LG", load_config: "Front Load", volume: "3.96000003814697", annual_energy_use: "116.0", modified_energy_factor: "3.20000004768372", federal_standard: "1.25999999046326", percent_better: "154", annual_water_use: "5123", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "WM3550H.+", brand_name: "LG", load_config: "Front Load", volume: "4.26000022888184", annual_energy_use: "95.0", modified_energy_factor: "3.40000009536743", federal_standard: "1.25999999046326", percent_better: "170", annual_water_use: "4676", water_factor: "2.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "WM3875H.+", brand_name: "LG", load_config: "Front Load", volume: "4.17000007629395", annual_energy_use: "108.0", modified_energy_factor: "2.99000000953674", federal_standard: "1.25999999046326", percent_better: "137", annual_water_use: "5558", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "WM3885H.+", brand_name: "LG", load_config: "Front Load", volume: "4.17000007629395", annual_energy_use: "108.0", modified_energy_factor: "2.99000000953674", federal_standard: "1.25999999046326", percent_better: "137", annual_water_use: "5558", water_factor: "3.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "WT4801C.+", brand_name: "LG", load_config: "Top Load", volume: "3.73000001907349", annual_energy_use: "175.0", modified_energy_factor: "2.41000008583069", federal_standard: "1.25999999046326", percent_better: "91", annual_water_use: "5761", water_factor: "3.94000005722046"});
		sustainly.insert("washing_machine", {model_number: "WT5001C.+", brand_name: "LG", load_config: "Top Load", volume: "4.48000001907349", annual_energy_use: "250.0", modified_energy_factor: "2.41000008583069", federal_standard: "1.25999999046326", percent_better: "91", annual_water_use: "7025", water_factor: "4.0"});
		sustainly.insert("washing_machine", {model_number: "WT5070C.+", brand_name: "LG", load_config: "Top Load", volume: "4.67000007629395", annual_energy_use: "170.0", modified_energy_factor: "2.75", federal_standard: "1.25999999046326", percent_better: "118", annual_water_use: "6773", water_factor: "3.70000004768372"});
		sustainly.insert("washing_machine", {model_number: "WT5101H.+", brand_name: "LG", load_config: "Top Load", volume: "4.48000001907349", annual_energy_use: "250.0", modified_energy_factor: "2.41000008583069", federal_standard: "1.25999999046326", percent_better: "91", annual_water_use: "7025", water_factor: "4.0"});
		sustainly.insert("washing_machine", {model_number: "WT5170H.+", brand_name: "LG", load_config: "Top Load", volume: "4.67000007629395", annual_energy_use: "170.0", modified_energy_factor: "2.75", federal_standard: "1.25999999046326", percent_better: "118", annual_water_use: "6773", water_factor: "3.70000004768372"});
		sustainly.insert("washing_machine", {model_number: "WT6001H.+", brand_name: "LG", load_config: "Top Load", volume: "4.67000007629395", annual_energy_use: "182.0", modified_energy_factor: "2.69000005722046", federal_standard: "1.25999999046326", percent_better: "113", annual_water_use: "6590", water_factor: "3.59999990463257"});
		sustainly.insert("washing_machine", {model_number: "MHW6000X.+", brand_name: "Maytag", load_config: "Front Load", volume: "4.32999992370606", annual_energy_use: "168.0", modified_energy_factor: "3.0", federal_standard: "1.25999999046326", percent_better: "138", annual_water_use: "4549", water_factor: "2.6800000667572"});
		sustainly.insert("washing_machine", {model_number: "MHW7000X.+", brand_name: "Maytag", load_config: "Front Load", volume: "4.32999992370606", annual_energy_use: "169.0", modified_energy_factor: "3.0", federal_standard: "1.25999999046326", percent_better: "138", annual_water_use: "4719", water_factor: "2.77999997138977"});
		sustainly.insert("washing_machine", {model_number: "MHW9000Y.+", brand_name: "Maytag", load_config: "Front Load", volume: "4.32999992370606", annual_energy_use: "160.0", modified_energy_factor: "3.0", federal_standard: "1.25999999046326", percent_better: "138", annual_water_use: "4617", water_factor: "2.72000002861023"});
		sustainly.insert("washing_machine", {model_number: "MHWC7500Y.+", brand_name: "Maytag", load_config: "Front Load", volume: "1.97000002861023", annual_energy_use: "151.0", modified_energy_factor: "2.07999992370605", federal_standard: "1.25999999046326", percent_better: "65", annual_water_use: "4031", water_factor: "5.21999979019165"});
		sustainly.insert("washing_machine", {model_number: "MHWE200X.+", brand_name: "Maytag", load_config: "Front Load", volume: "3.46000003814697", annual_energy_use: "161.0", modified_energy_factor: "2.34999990463257", federal_standard: "1.25999999046326", percent_better: "87", annual_water_use: "5154", water_factor: "3.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "MHWE201Y.+", brand_name: "Maytag", load_config: "Front Load", volume: "3.46000003814697", annual_energy_use: "154.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "5005", water_factor: "3.69000005722046"});
		sustainly.insert("washing_machine", {model_number: "MHWE250X.+", brand_name: "Maytag", load_config: "Front Load", volume: "3.46000003814697", annual_energy_use: "161.0", modified_energy_factor: "2.34999990463257", federal_standard: "1.25999999046326", percent_better: "87", annual_water_use: "5154", water_factor: "3.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "MHWE251Y.+", brand_name: "Maytag", load_config: "Front Load", volume: "3.46000003814697", annual_energy_use: "154.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "5005", water_factor: "3.69000005722046"});
		sustainly.insert("washing_machine", {model_number: "MHWE300V.+", brand_name: "Maytag", load_config: "Front Load", volume: "3.47000002861023", annual_energy_use: "160.0", modified_energy_factor: "2.1800000667572", federal_standard: "1.25999999046326", percent_better: "73", annual_water_use: "5849", water_factor: "4.30000019073486"});
		sustainly.insert("washing_machine", {model_number: "MHWE300W.+", brand_name: "Maytag", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "161.0", modified_energy_factor: "2.30999994277954", federal_standard: "1.25999999046326", percent_better: "83", annual_water_use: "5641", water_factor: "4.09999990463257"});
		sustainly.insert("washing_machine", {model_number: "MHWE301Y.+", brand_name: "Maytag", load_config: "Front Load", volume: "3.46000003814697", annual_energy_use: "154.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "5005", water_factor: "3.69000005722046"});
		sustainly.insert("washing_machine", {model_number: "MHWE400W.+", brand_name: "Maytag", load_config: "Front Load", volume: "3.85999989509583", annual_energy_use: "174.0", modified_energy_factor: "2.66000008583069", federal_standard: "1.25999999046326", percent_better: "111", annual_water_use: "4600", water_factor: "3.03999996185303"});
		sustainly.insert("washing_machine", {model_number: "MHWE450W.+", brand_name: "Maytag", load_config: "Front Load", volume: "3.85999989509583", annual_energy_use: "174.0", modified_energy_factor: "2.66000008583069", federal_standard: "1.25999999046326", percent_better: "111", annual_water_use: "4600", water_factor: "3.03999996185303"});
		sustainly.insert("washing_machine", {model_number: "MHWE500V.+", brand_name: "Maytag", load_config: "Front Load", volume: "3.47000002861023", annual_energy_use: "138.0", modified_energy_factor: "2.34999990463257", federal_standard: "1.25999999046326", percent_better: "87", annual_water_use: "5169", water_factor: "3.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "MHWE550W.+", brand_name: "Maytag", load_config: "Front Load", volume: "3.85999989509583", annual_energy_use: "147.0", modified_energy_factor: "2.66000008583069", federal_standard: "1.25999999046326", percent_better: "111", annual_water_use: "5447", water_factor: "3.59999990463257"});
		sustainly.insert("washing_machine", {model_number: "MHWE900V.+", brand_name: "Maytag", load_config: "Front Load", volume: "3.78999996185303", annual_energy_use: "141.0", modified_energy_factor: "2.57999992370605", federal_standard: "1.25999999046326", percent_better: "105", annual_water_use: "5348", water_factor: "3.59999990463257"});
		sustainly.insert("washing_machine", {model_number: "MHWE950W.+", brand_name: "Maytag", load_config: "Top Load", volume: "3.85999989509583", annual_energy_use: "147.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "4449", water_factor: "2.94000005722046"});
		sustainly.insert("washing_machine", {model_number: "MHWZ400T.+", brand_name: "Maytag", load_config: "Front Load", volume: "3.46000003814697", annual_energy_use: "139.0", modified_energy_factor: "2.45000004768372", federal_standard: "1.25999999046326", percent_better: "94", annual_water_use: "5290", water_factor: "3.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "MHWZ600T.+", brand_name: "Maytag", load_config: "Front Load", volume: "3.46000003814697", annual_energy_use: "139.0", modified_energy_factor: "2.45000004768372", federal_standard: "1.25999999046326", percent_better: "94", annual_water_use: "5290", water_factor: "3.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "MHWZ600W.+", brand_name: "Maytag", load_config: "Front Load", volume: "3.46000003814697", annual_energy_use: "139.0", modified_energy_factor: "2.45000004768372", federal_standard: "1.25999999046326", percent_better: "94", annual_water_use: "5290", water_factor: "3.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "MVWB300W.+", brand_name: "Maytag", load_config: "Top Load", volume: "3.95000004768372", annual_energy_use: "257.0", modified_energy_factor: "2.27999997138977", federal_standard: "1.25999999046326", percent_better: "81", annual_water_use: "6813", water_factor: "4.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "MVWB400V.+", brand_name: "Maytag", load_config: "Top Load", volume: "4.07999992370606", annual_energy_use: "252.0", modified_energy_factor: "2.23000001907349", federal_standard: "1.25999999046326", percent_better: "77", annual_water_use: "7037", water_factor: "4.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "MVWB450W.+", brand_name: "Maytag", load_config: "Top Load", volume: "3.95000004768372", annual_energy_use: "258.0", modified_energy_factor: "2.22000002861023", federal_standard: "1.25999999046326", percent_better: "76", annual_water_use: "6828", water_factor: "4.40999984741211"});
		sustainly.insert("washing_machine", {model_number: "MVWB455Y.+", brand_name: "Maytag", load_config: "Top Load", volume: "3.95000004768372", annual_energy_use: "146.0", modified_energy_factor: "2.60999989509583", federal_standard: "1.25999999046326", percent_better: "107", annual_water_use: "5017", water_factor: "3.24000000953674"});
		sustainly.insert("washing_machine", {model_number: "MVWB700V.+", brand_name: "Maytag", load_config: "Top Load", volume: "4.07999992370606", annual_energy_use: "252.0", modified_energy_factor: "2.23000001907349", federal_standard: "1.25999999046326", percent_better: "77", annual_water_use: "7037", water_factor: "4.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "MVWB750W.+", brand_name: "Maytag", load_config: "Top Load", volume: "3.95000004768372", annual_energy_use: "258.0", modified_energy_factor: "2.22000002861023", federal_standard: "1.25999999046326", percent_better: "76", annual_water_use: "6828", water_factor: "4.40999984741211"});
		sustainly.insert("washing_machine", {model_number: "MVWB750Y.+", brand_name: "Maytag", load_config: "Top Load", volume: "4.59999990463257", annual_energy_use: "190.0", modified_energy_factor: "2.60999989509583", federal_standard: "1.25999999046326", percent_better: "107", annual_water_use: "6654", water_factor: "3.69000005722046"});
		sustainly.insert("washing_machine", {model_number: "MVWB755Y.+", brand_name: "Maytag", load_config: "Top Load", volume: "3.95000004768372", annual_energy_use: "146.0", modified_energy_factor: "2.60999989509583", federal_standard: "1.25999999046326", percent_better: "107", annual_water_use: "5017", water_factor: "3.24000000953674"});
		sustainly.insert("washing_machine", {model_number: "MVWB800V.+", brand_name: "Maytag", load_config: "Top Load", volume: "4.07999992370606", annual_energy_use: "249.0", modified_energy_factor: "2.25", federal_standard: "1.25999999046326", percent_better: "79", annual_water_use: "7197", water_factor: "4.5"});
		sustainly.insert("washing_machine", {model_number: "MVWB800Y.+", brand_name: "Maytag", load_config: "Top Load", volume: "4.59999990463257", annual_energy_use: "190.0", modified_energy_factor: "2.60999989509583", federal_standard: "1.25999999046326", percent_better: "107", annual_water_use: "6654", water_factor: "3.69000005722046"});
		sustainly.insert("washing_machine", {model_number: "MVWB850W.+", brand_name: "Maytag", load_config: "Top Load", volume: "3.95000004768372", annual_energy_use: "258.0", modified_energy_factor: "2.22000002861023", federal_standard: "1.25999999046326", percent_better: "76", annual_water_use: "6828", water_factor: "4.40999984741211"});
		sustainly.insert("washing_machine", {model_number: "MVWB850Y.+", brand_name: "Maytag", load_config: "Top Load", volume: "4.59999990463257", annual_energy_use: "198.0", modified_energy_factor: "2.5699999332428", federal_standard: "1.25999999046326", percent_better: "104", annual_water_use: "6996", water_factor: "3.88000011444092"});
		sustainly.insert("washing_machine", {model_number: "MVWB950Y.+", brand_name: "Maytag", load_config: "Top Load", volume: "4.59999990463257", annual_energy_use: "198.0", modified_energy_factor: "2.5699999332428", federal_standard: "1.25999999046326", percent_better: "104", annual_water_use: "6996", water_factor: "3.88000011444092"});
		sustainly.insert("washing_machine", {model_number: "MVWC300X.+", brand_name: "Maytag", load_config: "Top Load", volume: "3.34999990463257", annual_energy_use: "144.0", modified_energy_factor: "2.01999998092651", federal_standard: "1.25999999046326", percent_better: "60", annual_water_use: "7735", water_factor: "5.8899998664856"});
		sustainly.insert("washing_machine", {model_number: "MVWC400X.+", brand_name: "Maytag", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "123.0", modified_energy_factor: "2.48000001907349", federal_standard: "1.25999999046326", percent_better: "97", annual_water_use: "5137", water_factor: "3.64000010490417"});
		sustainly.insert("washing_machine", {model_number: "MVWC450X.+", brand_name: "Maytag", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "123.0", modified_energy_factor: "2.48000001907349", federal_standard: "1.25999999046326", percent_better: "97", annual_water_use: "5137", water_factor: "3.64000010490417"});
		sustainly.insert("washing_machine", {model_number: "MVWX500X.+", brand_name: "Maytag", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "122.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "5109", water_factor: "3.61999988555908"});
		sustainly.insert("washing_machine", {model_number: "MVWX550X.+", brand_name: "Maytag", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "122.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "5109", water_factor: "3.61999988555908"});
		sustainly.insert("washing_machine", {model_number: "MVWX600X.+", brand_name: "Maytag", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "122.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "5109", water_factor: "3.61999988555908"});
		sustainly.insert("washing_machine", {model_number: "MVWX700X.+", brand_name: "Maytag", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "122.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "5109", water_factor: "3.61999988555908"});
		sustainly.insert("washing_machine", {model_number: "PW6065", brand_name: "Miele", load_config: "Front Load", volume: "2.07999992370605", annual_energy_use: "133.0", modified_energy_factor: "2.23000001907349", federal_standard: "1.25999999046326", percent_better: "77", annual_water_use: "3718", water_factor: "4.55999994277954"});
		sustainly.insert("washing_machine", {model_number: "W3033", brand_name: "Miele", load_config: "Front Load", volume: "1.98000001907349", annual_energy_use: "139.0", modified_energy_factor: "2.3199999332428", federal_standard: "1.25999999046326", percent_better: "84", annual_water_use: "3431", water_factor: "4.42000007629395"});
		sustainly.insert("washing_machine", {model_number: "W3035", brand_name: "Miele", load_config: "Front Load", volume: "1.98000001907349", annual_energy_use: "139.0", modified_energy_factor: "2.3199999332428", federal_standard: "1.25999999046326", percent_better: "84", annual_water_use: "3431", water_factor: "4.42000007629395"});
		sustainly.insert("washing_machine", {model_number: "W3039", brand_name: "Miele", load_config: "Front Load", volume: "1.76999998092651", annual_energy_use: "128.0", modified_energy_factor: "2.25", federal_standard: "1.25999999046326", percent_better: "79", annual_water_use: "3060", water_factor: "4.40999984741211"});
		sustainly.insert("washing_machine", {model_number: "W4802", brand_name: "Miele", load_config: "Front Load", volume: "3.0699999332428", annual_energy_use: "186.0", modified_energy_factor: "2.40000009536743", federal_standard: "1.25999999046326", percent_better: "90", annual_water_use: "5103", water_factor: "4.23999977111816"});
		sustainly.insert("washing_machine", {model_number: "W4842", brand_name: "Miele", load_config: "Front Load", volume: "3.0699999332428", annual_energy_use: "186.0", modified_energy_factor: "2.40000009536743", federal_standard: "1.25999999046326", percent_better: "90", annual_water_use: "5103", water_factor: "4.23999977111816"});
		sustainly.insert("washing_machine", {model_number: "WA400P.HD.+", brand_name: "Samsung", load_config: "Top Load", volume: "4.11999988555908", annual_energy_use: "163.0", modified_energy_factor: "2.41000008583069", federal_standard: "1.25999999046326", percent_better: "91", annual_water_use: "5992", water_factor: "3.71000003814697"});
		sustainly.insert("washing_machine", {model_number: "WA422P.HD.+", brand_name: "Samsung", load_config: "Top Load", volume: "4.23999977111816", annual_energy_use: "169.0", modified_energy_factor: "2.45000004768372", federal_standard: "1.25999999046326", percent_better: "94", annual_water_use: "5900", water_factor: "3.54999995231628"});
		sustainly.insert("washing_machine", {model_number: "WA456D.HD.+", brand_name: "Samsung", load_config: "Top Load", volume: "4.46999979019165", annual_energy_use: "169.0", modified_energy_factor: "2.45000004768372", federal_standard: "1.25999999046326", percent_better: "94", annual_water_use: "6220", water_factor: "3.54999995231628"});
		sustainly.insert("washing_machine", {model_number: "WA5451.+", brand_name: "Samsung", load_config: "Top Load", volume: "4.65000009536743", annual_energy_use: "247.0", modified_energy_factor: "2.41000008583069", federal_standard: "1.25999999046326", percent_better: "91", annual_water_use: "7291", water_factor: "4.0"});
		sustainly.insert("washing_machine", {model_number: "WA5471.+", brand_name: "Samsung", load_config: "Top Load", volume: "4.65000009536743", annual_energy_use: "199.0", modified_energy_factor: "2.5699999332428", federal_standard: "1.25999999046326", percent_better: "104", annual_water_use: "6927", water_factor: "3.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "WF203.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.10999989509583", annual_energy_use: "216.0", modified_energy_factor: "2.03999996185303", federal_standard: "1.25999999046326", percent_better: "62", annual_water_use: "4876", water_factor: "4.0"});
		sustainly.insert("washing_machine", {model_number: "WF209.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.47000002861023", annual_energy_use: "146.0", modified_energy_factor: "2.60999989509583", federal_standard: "1.25999999046326", percent_better: "107", annual_water_use: "5169", water_factor: "3.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "WF210.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.45000004768372", annual_energy_use: "141.0", modified_energy_factor: "2.5", federal_standard: "1.25999999046326", percent_better: "98", annual_water_use: "4463", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "WF218.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.4300000667572", annual_energy_use: "165.0", modified_energy_factor: "2.47000002861023", federal_standard: "1.25999999046326", percent_better: "96", annual_water_use: "4437", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "WF219.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.4300000667572", annual_energy_use: "130.0", modified_energy_factor: "2.65000009536743", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "4303", water_factor: "3.20000004768372"});
		sustainly.insert("washing_machine", {model_number: "WF220.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.45000004768372", annual_energy_use: "141.0", modified_energy_factor: "2.5", federal_standard: "1.25999999046326", percent_better: "98", annual_water_use: "4463", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "WF221.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.45000004768372", annual_energy_use: "141.0", modified_energy_factor: "2.47000002861023", federal_standard: "1.25999999046326", percent_better: "96", annual_water_use: "4476", water_factor: "3.30999994277954"});
		sustainly.insert("washing_machine", {model_number: "WF229.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.4300000667572", annual_energy_use: "165.0", modified_energy_factor: "2.47000002861023", federal_standard: "1.25999999046326", percent_better: "96", annual_water_use: "4437", water_factor: "3.29999995231628"});
		sustainly.insert("washing_machine", {model_number: "WF231.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.45000004768372", annual_energy_use: "100.0", modified_energy_factor: "2.79999995231628", federal_standard: "1.25999999046326", percent_better: "122", annual_water_use: "4328", water_factor: "3.20000004768372"});
		sustainly.insert("washing_machine", {model_number: "WF241.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.45000004768372", annual_energy_use: "100.0", modified_energy_factor: "2.79999995231628", federal_standard: "1.25999999046326", percent_better: "122", annual_water_use: "4328", water_factor: "3.20000004768372"});
		sustainly.insert("washing_machine", {model_number: "WF328.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.4300000667572", annual_energy_use: "161.0", modified_energy_factor: "2.29999995231628", federal_standard: "1.25999999046326", percent_better: "83", annual_water_use: "4975", water_factor: "3.70000004768372"});
		sustainly.insert("washing_machine", {model_number: "WF330.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "116.0", modified_energy_factor: "2.75999999046326", federal_standard: "1.25999999046326", percent_better: "119", annual_water_use: "4484", water_factor: "3.09999990463257"});
		sustainly.insert("washing_machine", {model_number: "WF331.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "116.0", modified_energy_factor: "2.75999999046326", federal_standard: "1.25999999046326", percent_better: "119", annual_water_use: "4484", water_factor: "3.09999990463257"});
		sustainly.insert("washing_machine", {model_number: "WF337.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.4300000667572", annual_energy_use: "210.0", modified_energy_factor: "2.40000009536743", federal_standard: "1.25999999046326", percent_better: "90", annual_water_use: "4840", water_factor: "3.59999990463257"});
		sustainly.insert("washing_machine", {model_number: "WF338.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.4300000667572", annual_energy_use: "153.0", modified_energy_factor: "2.58999991416931", federal_standard: "1.25999999046326", percent_better: "106", annual_water_use: "4840", water_factor: "3.59999990463257"});
		sustainly.insert("washing_machine", {model_number: "WF340.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "116.0", modified_energy_factor: "2.75999999046326", federal_standard: "1.25999999046326", percent_better: "119", annual_water_use: "4484", water_factor: "3.09999990463257"});
		sustainly.insert("washing_machine", {model_number: "WF350.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "116.0", modified_energy_factor: "2.75999999046326", federal_standard: "1.25999999046326", percent_better: "119", annual_water_use: "4484", water_factor: "3.09999990463257"});
		sustainly.insert("washing_machine", {model_number: "WF405A.PA.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.96000003814697", annual_energy_use: "93.0", modified_energy_factor: "3.34999990463257", federal_standard: "1.25999999046326", percent_better: "166", annual_water_use: "4502", water_factor: "2.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "WF407.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.47000002861023", annual_energy_use: "114.0", modified_energy_factor: "2.8199999332428", federal_standard: "1.25999999046326", percent_better: "124", annual_water_use: "4353", water_factor: "3.20000004768372"});
		sustainly.insert("washing_machine", {model_number: "WF409.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "118.0", modified_energy_factor: "2.73000001907349", federal_standard: "1.25999999046326", percent_better: "117", annual_water_use: "4499", water_factor: "3.10999989509583"});
		sustainly.insert("washing_machine", {model_number: "WF410.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "118.0", modified_energy_factor: "2.73000001907349", federal_standard: "1.25999999046326", percent_better: "117", annual_water_use: "4484", water_factor: "3.09999990463257"});
		sustainly.insert("washing_machine", {model_number: "WF419.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.69000005722046", annual_energy_use: "118.0", modified_energy_factor: "2.73000001907349", federal_standard: "1.25999999046326", percent_better: "117", annual_water_use: "4484", water_factor: "3.09999990463257"});
		sustainly.insert("washing_machine", {model_number: "WF428.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.85999989509583", annual_energy_use: "120.0", modified_energy_factor: "2.8199999332428", federal_standard: "1.25999999046326", percent_better: "124", annual_water_use: "4842", water_factor: "3.20000004768372"});
		sustainly.insert("washing_machine", {model_number: "WF431.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.85999989509583", annual_energy_use: "95.0", modified_energy_factor: "3.20000004768372", federal_standard: "1.25999999046326", percent_better: "154", annual_water_use: "4524", water_factor: "2.99000000953674"});
		sustainly.insert("washing_machine", {model_number: "WF448.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.85999989509583", annual_energy_use: "120.0", modified_energy_factor: "2.75999999046326", federal_standard: "1.25999999046326", percent_better: "119", annual_water_use: "4842", water_factor: "3.20000004768372"});
		sustainly.insert("washing_machine", {model_number: "WF455A.GS.+", brand_name: "Samsung", load_config: "Front Load", volume: "4.46999979019165", annual_energy_use: "90.0", modified_energy_factor: "3.42000007629395", federal_standard: "1.25999999046326", percent_better: "171", annual_water_use: "4714", water_factor: "2.69000005722046"});
		sustainly.insert("washing_machine", {model_number: "WF457A.GS.+", brand_name: "Samsung", load_config: "Front Load", volume: "4.46999979019165", annual_energy_use: "90.0", modified_energy_factor: "3.42000007629395", federal_standard: "1.25999999046326", percent_better: "171", annual_water_use: "4696", water_factor: "2.6800000667572"});
		sustainly.insert("washing_machine", {model_number: "WF461.+", brand_name: "Samsung", load_config: "Front Load", volume: "3.85999989509583", annual_energy_use: "94.0", modified_energy_factor: "3.25", federal_standard: "1.25999999046326", percent_better: "158", annual_water_use: "4388", water_factor: "2.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "WF501.+", brand_name: "Samsung", load_config: "Front Load", volume: "4.28999996185303", annual_energy_use: "100.0", modified_energy_factor: "3.01999998092651", federal_standard: "1.25999999046326", percent_better: "140", annual_water_use: "5415", water_factor: "3.22000002861023"});
		sustainly.insert("washing_machine", {model_number: "WF511.+", brand_name: "Samsung", load_config: "Front Load", volume: "4.28999996185303", annual_energy_use: "93.0", modified_energy_factor: "3.3199999332428", federal_standard: "1.25999999046326", percent_better: "163", annual_water_use: "4877", water_factor: "2.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "WF520.+", brand_name: "Samsung", load_config: "Front Load", volume: "4.28999996185303", annual_energy_use: "96.0", modified_energy_factor: "3.09999990463257", federal_standard: "1.25999999046326", percent_better: "146", annual_water_use: "4877", water_factor: "2.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "AFN50.+", brand_name: "Speed Queen", load_config: "Front Load", volume: "2.83999991416931", annual_energy_use: "184.0", modified_energy_factor: "2.03999996185303", federal_standard: "1.25999999046326", percent_better: "62", annual_water_use: "5455", water_factor: "4.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "AFN51.+", brand_name: "Speed Queen", load_config: "Front Load", volume: "2.83999991416931", annual_energy_use: "184.0", modified_energy_factor: "2.03999996185303", federal_standard: "1.25999999046326", percent_better: "62", annual_water_use: "5455", water_factor: "4.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "ATE50.+", brand_name: "Speed Queen", load_config: "Front Load", volume: "2.83999991416931", annual_energy_use: "184.0", modified_energy_factor: "2.03999996185303", federal_standard: "1.25999999046326", percent_better: "62", annual_water_use: "5455", water_factor: "4.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "ATG50.+", brand_name: "Speed Queen", load_config: "Front Load", volume: "2.83999991416931", annual_energy_use: "184.0", modified_energy_factor: "2.03999996185303", federal_standard: "1.25999999046326", percent_better: "62", annual_water_use: "5455", water_factor: "4.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "AWNA1.+", brand_name: "Speed Queen", load_config: "Top Load", volume: "3.13000011444092", annual_energy_use: "130.0", modified_energy_factor: "2.04999995231628", federal_standard: "1.25999999046326", percent_better: "63", annual_water_use: "7116", water_factor: "5.80000019073486"});
		sustainly.insert("washing_machine", {model_number: "LWNA1.+", brand_name: "Speed Queen", load_config: "Top Load", volume: "3.13000011444092", annual_energy_use: "130.0", modified_energy_factor: "2.04999995231628", federal_standard: "1.25999999046326", percent_better: "63", annual_water_use: "7116", water_factor: "5.80000019073486"});
		sustainly.insert("washing_machine", {model_number: "WFC7500V.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "1.97000002861023", annual_energy_use: "151.0", modified_energy_factor: "2.07999992370605", federal_standard: "1.25999999046326", percent_better: "65", annual_water_use: "4031", water_factor: "5.21999979019165"});
		sustainly.insert("washing_machine", {model_number: "WFW8300S.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "2.99000000953674", annual_energy_use: "169.0", modified_energy_factor: "2.24000000953674", federal_standard: "1.25999999046326", percent_better: "78", annual_water_use: "5274", water_factor: "4.5"});
		sustainly.insert("washing_machine", {model_number: "WFW8400T.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.25999999046326", annual_energy_use: "156.0", modified_energy_factor: "2.44000005722046", federal_standard: "1.25999999046326", percent_better: "94", annual_water_use: "5112", water_factor: "4.0"});
		sustainly.insert("washing_machine", {model_number: "WFW8410S.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.25999999046326", annual_energy_use: "185.0", modified_energy_factor: "2.36999988555908", federal_standard: "1.25999999046326", percent_better: "88", annual_water_use: "5751", water_factor: "4.5"});
		sustainly.insert("washing_machine", {model_number: "WFW9050X.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.46000003814697", annual_energy_use: "125.0", modified_energy_factor: "2.54999995231628", federal_standard: "1.25999999046326", percent_better: "102", annual_water_use: "4883", water_factor: "3.59999990463257"});
		sustainly.insert("washing_machine", {model_number: "WFW9150W.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.46000003814697", annual_energy_use: "139.0", modified_energy_factor: "2.45000004768372", federal_standard: "1.25999999046326", percent_better: "94", annual_water_use: "5290", water_factor: "3.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "WFW9151Y.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.46000003814697", annual_energy_use: "154.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "5005", water_factor: "3.69000005722046"});
		sustainly.insert("washing_machine", {model_number: "WFW9200S.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "186.0", modified_energy_factor: "2.16000008583069", federal_standard: "1.25999999046326", percent_better: "71", annual_water_use: "5641", water_factor: "4.09999990463257"});
		sustainly.insert("washing_machine", {model_number: "WFW9250W.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.46000003814697", annual_energy_use: "139.0", modified_energy_factor: "2.45000004768372", federal_standard: "1.25999999046326", percent_better: "94", annual_water_use: "5290", water_factor: "3.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "WFW9300V.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "186.0", modified_energy_factor: "2.28999996185303", federal_standard: "1.25999999046326", percent_better: "82", annual_water_use: "5366", water_factor: "3.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "WFW9351Y.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.46000003814697", annual_energy_use: "154.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "5005", water_factor: "3.69000005722046"});
		sustainly.insert("washing_machine", {model_number: "WFW9400S.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "186.0", modified_energy_factor: "2.28999996185303", federal_standard: "1.25999999046326", percent_better: "82", annual_water_use: "5366", water_factor: "3.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "WFW9400V.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "186.0", modified_energy_factor: "2.28999996185303", federal_standard: "1.25999999046326", percent_better: "82", annual_water_use: "5366", water_factor: "3.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "WFW9450W.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.78999996185303", annual_energy_use: "150.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "5646", water_factor: "3.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "WFW9451X.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.90000009536743", annual_energy_use: "169.0", modified_energy_factor: "2.40000009536743", federal_standard: "1.25999999046326", percent_better: "90", annual_water_use: "5962", water_factor: "3.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "WFW9470W.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.85999989509583", annual_energy_use: "177.0", modified_energy_factor: "2.34999990463257", federal_standard: "1.25999999046326", percent_better: "87", annual_water_use: "6204", water_factor: "4.09999990463257"});
		sustainly.insert("washing_machine", {model_number: "WFW94HEX.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "4.32999992370606", annual_energy_use: "168.0", modified_energy_factor: "3.0", federal_standard: "1.25999999046326", percent_better: "138", annual_water_use: "4209", water_factor: "2.48000001907349"});
		sustainly.insert("washing_machine", {model_number: "WFW9500T.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "119.0", modified_energy_factor: "2.25999999046326", federal_standard: "1.25999999046326", percent_better: "79", annual_water_use: "4953", water_factor: "3.59999990463257"});
		sustainly.insert("washing_machine", {model_number: "WFW9550W.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.78999996185303", annual_energy_use: "144.0", modified_energy_factor: "2.4300000667572", federal_standard: "1.25999999046326", percent_better: "93", annual_water_use: "5096", water_factor: "3.4300000667572"});
		sustainly.insert("washing_machine", {model_number: "WFW95HEX.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "4.32999992370606", annual_energy_use: "169.0", modified_energy_factor: "3.0", federal_standard: "1.25999999046326", percent_better: "138", annual_water_use: "4719", water_factor: "2.77999997138977"});
		sustainly.insert("washing_machine", {model_number: "WFW9600S.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "186.0", modified_energy_factor: "2.28999996185303", federal_standard: "1.25999999046326", percent_better: "82", annual_water_use: "5366", water_factor: "3.90000009536743"});
		sustainly.insert("washing_machine", {model_number: "WFW9600T.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.50999999046326", annual_energy_use: "122.0", modified_energy_factor: "2.42000007629395", federal_standard: "1.25999999046326", percent_better: "92", annual_water_use: "5091", water_factor: "3.70000004768372"});
		sustainly.insert("washing_machine", {model_number: "WFW9640X.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.85999989509583", annual_energy_use: "136.0", modified_energy_factor: "2.65000009536743", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "4206", water_factor: "2.77999997138977"});
		sustainly.insert("washing_machine", {model_number: "WFW9700V.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.78999996185303", annual_energy_use: "144.0", modified_energy_factor: "2.41000008583069", federal_standard: "1.25999999046326", percent_better: "91", annual_water_use: "5646", water_factor: "3.79999995231628"});
		sustainly.insert("washing_machine", {model_number: "WFW9750W.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "3.85999989509583", annual_energy_use: "149.0", modified_energy_factor: "2.51999998092651", federal_standard: "1.25999999046326", percent_better: "100", annual_water_use: "4222", water_factor: "2.78999996185303"});
		sustainly.insert("washing_machine", {model_number: "WFW97HEX.+", brand_name: "Whirlpool", load_config: "Front Load", volume: "4.32999992370606", annual_energy_use: "155.0", modified_energy_factor: "3.0", federal_standard: "1.25999999046326", percent_better: "138", annual_water_use: "4804", water_factor: "2.82999992370605"});
		sustainly.insert("washing_machine", {model_number: "WTW4850X.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "3.34999990463257", annual_energy_use: "144.0", modified_energy_factor: "2.01999998092651", federal_standard: "1.25999999046326", percent_better: "60", annual_water_use: "7735", water_factor: "5.8899998664856"});
		sustainly.insert("washing_machine", {model_number: "WTW4880A.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "3.34999990463257", annual_energy_use: "144.0", modified_energy_factor: "2.0239999294281", federal_standard: "1.25999999046326", percent_better: "61", annual_water_use: "7743", water_factor: "5.89599990844727"});
		sustainly.insert("washing_machine", {model_number: "WTW4950X.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "123.0", modified_energy_factor: "2.48000001907349", federal_standard: "1.25999999046326", percent_better: "97", annual_water_use: "5137", water_factor: "3.64000010490417"});
		sustainly.insert("washing_machine", {model_number: "WTW5500X.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "125.0", modified_energy_factor: "2.49000000953674", federal_standard: "1.25999999046326", percent_better: "98", annual_water_use: "5518", water_factor: "3.91000008583069"});
		sustainly.insert("washing_machine", {model_number: "WTW5550X.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "125.0", modified_energy_factor: "2.49000000953674", federal_standard: "1.25999999046326", percent_better: "98", annual_water_use: "5518", water_factor: "3.91000008583069"});
		sustainly.insert("washing_machine", {model_number: "WTW5600X.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "123.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "5419", water_factor: "3.83999991416931"});
		sustainly.insert("washing_machine", {model_number: "WTW5610X.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "123.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "5419", water_factor: "3.83999991416931"});
		sustainly.insert("washing_machine", {model_number: "WTW5640X.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "123.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "5419", water_factor: "3.83999991416931"});
		sustainly.insert("washing_machine", {model_number: "WTW5700X.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "3.59999990463257", annual_energy_use: "123.0", modified_energy_factor: "2.46000003814697", federal_standard: "1.25999999046326", percent_better: "95", annual_water_use: "5419", water_factor: "3.83999991416931"});
		sustainly.insert("washing_machine", {model_number: "WTW6300W.+", brand_name: "Whirlpool", load_config: "Top load", volume: "4.07999992370606", annual_energy_use: "264.0", modified_energy_factor: "2.22000002861023", federal_standard: "1.25999999046326", percent_better: "76", annual_water_use: "6877", water_factor: "4.30000019073486"});
		sustainly.insert("washing_machine", {model_number: "WTW6340W.+", brand_name: "Whirlpool", load_config: "Top load", volume: "4.07999992370606", annual_energy_use: "264.0", modified_energy_factor: "2.22000002861023", federal_standard: "1.25999999046326", percent_better: "76", annual_water_use: "6877", water_factor: "4.30000019073486"});
		sustainly.insert("washing_machine", {model_number: "WTW6500V.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "4.30999994277954", annual_energy_use: "252.0", modified_energy_factor: "2.28999996185303", federal_standard: "1.25999999046326", percent_better: "82", annual_water_use: "7096", water_factor: "4.19999980926514"});
		sustainly.insert("washing_machine", {model_number: "WTW6500W.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "4.30999994277954", annual_energy_use: "252.0", modified_energy_factor: "2.28999996185303", federal_standard: "1.25999999046326", percent_better: "82", annual_water_use: "7096", water_factor: "4.19999980926514"});
		sustainly.insert("washing_machine", {model_number: "WTW6700T.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "4.07999992370606", annual_energy_use: "252.0", modified_energy_factor: "2.23000001907349", federal_standard: "1.25999999046326", percent_better: "77", annual_water_use: "7037", water_factor: "4.40000009536743"});
		sustainly.insert("washing_machine", {model_number: "WTW6800W.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "4.30999994277954", annual_energy_use: "252.0", modified_energy_factor: "2.28999996185303", federal_standard: "1.25999999046326", percent_better: "82", annual_water_use: "7096", water_factor: "4.19999980926514"});
		sustainly.insert("washing_machine", {model_number: "WTW7300X.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "3.95000004768372", annual_energy_use: "163.0", modified_energy_factor: "2.61999988555908", federal_standard: "1.25999999046326", percent_better: "108", annual_water_use: "5497", water_factor: "3.54999995231628"});
		sustainly.insert("washing_machine", {model_number: "WTW7320Y.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "3.95000004768372", annual_energy_use: "163.0", modified_energy_factor: "2.63000011444092", federal_standard: "1.25999999046326", percent_better: "109", annual_water_use: "5497", water_factor: "3.54999995231628"});
		sustainly.insert("washing_machine", {model_number: "WTW7340X.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "3.95000004768372", annual_energy_use: "191.0", modified_energy_factor: "2.48000001907349", federal_standard: "1.25999999046326", percent_better: "97", annual_water_use: "5559", water_factor: "3.58999991416931"});
		sustainly.insert("washing_machine", {model_number: "WTW7600X.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "3.95000004768372", annual_energy_use: "191.0", modified_energy_factor: "2.48000001907349", federal_standard: "1.25999999046326", percent_better: "97", annual_water_use: "5559", water_factor: "3.58999991416931"});
		sustainly.insert("washing_machine", {model_number: "WTW7800X.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "3.95000004768372", annual_energy_use: "191.0", modified_energy_factor: "2.48000001907349", federal_standard: "1.25999999046326", percent_better: "97", annual_water_use: "5559", water_factor: "3.58999991416931"});
		sustainly.insert("washing_machine", {model_number: "WTW7990X.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "3.95000004768372", annual_energy_use: "205.0", modified_energy_factor: "2.44000005722046", federal_standard: "1.25999999046326", percent_better: "94", annual_water_use: "5667", water_factor: "3.66000008583069"});
		sustainly.insert("washing_machine", {model_number: "WTW8200Y.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "4.59999990463257", annual_energy_use: "183.0", modified_energy_factor: "2.65000009536743", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "6690", water_factor: "3.71000003814697"});
		sustainly.insert("washing_machine", {model_number: "WTW8240Y.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "4.59999990463257", annual_energy_use: "183.0", modified_energy_factor: "2.65000009536743", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "6690", water_factor: "3.71000003814697"});
		sustainly.insert("washing_machine", {model_number: "WTW8400Y.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "4.59999990463257", annual_energy_use: "183.0", modified_energy_factor: "2.65000009536743", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "6690", water_factor: "3.71000003814697"});
		sustainly.insert("washing_machine", {model_number: "WTW8440Y.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "4.59999990463257", annual_energy_use: "183.0", modified_energy_factor: "2.65000009536743", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "6690", water_factor: "3.71000003814697"});
		sustainly.insert("washing_machine", {model_number: "WTW8600Y.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "4.59999990463257", annual_energy_use: "183.0", modified_energy_factor: "2.65000009536743", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "6690", water_factor: "3.71000003814697"});
		sustainly.insert("washing_machine", {model_number: "WTW8800Y.+", brand_name: "Whirlpool", load_config: "Top Load", volume: "4.59999990463257", annual_energy_use: "183.0", modified_energy_factor: "2.65000009536743", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "6690", water_factor: "3.71000003814697"});
		sustainly.insert("washing_machine", {model_number: "FRFW3700.+", brand_name: "White Westinghouse", load_config: "Front Load", volume: "3.23000001907349", annual_energy_use: "77.0", modified_energy_factor: "2.64000010490417", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "4052", water_factor: "3.20000004768372"});
		sustainly.insert("washing_machine", {model_number: "WWFW3700M.+", brand_name: "White Westinghouse", load_config: "Front Load", volume: "3.23000001907349", annual_energy_use: "77.0", modified_energy_factor: "2.64000010490417", federal_standard: "1.25999999046326", percent_better: "110", annual_water_use: "4052", water_factor: "3.20000004768372"});



		sustainly.commit();
	}
}

/* scrapes the search result page passed in and returns a list in the format of (ASIN, Name) for each result */
function scrapeResultsPage(){
	/*
    var titles = [];  
    var i = 0;    
    var res = document.getElementById("result_"+i);
    while (res){
		id = res.getAttribute("name");
		title = jQuery(res).find("h3:first").text();
		titles[id] = title;
		i++;
		res = document.getElementById("result_"+i);
    }
    return titles;
	*/
	// now returns [id, brand, model]
	var titles = [];  
    var i = 0;    
    var res = document.getElementById("result_"+i);
    while (res){
	
		var id = res.getAttribute("name");
		var title = jQuery(res).find("h3:first").text();
		var cost = jQuery(res).find(".price.addon").text();
		cost = $.trim(cost); // in the form of a string: $dd.cc
		title = $.trim(title);
                var brandModel = parseTitle(title);
                if (brandModel != null){
                    titles[id] = [brandModel["brand"], brandModel["model"], cost];
                }
//		var dataArray = title.split(' ');
//		var brand = dataArray[0];
//		var model = dataArray[1];
//		titles[id] = [brand, model, cost];
		i++;
		res = document.getElementById("result_"+i);
    }
    return titles;
}

//Get the product title on a product page
function getProductTitle(){
    return document.getElementById("btAsinTitle").innerHTML;
}

//Open the Analyzer box
function openAnalyzer(){
    sustainlyBox.innerHTML = analyzer_html;
    document.getElementById("result-header-right").onclick=setResultBar;
    updateProductsPane(0);
    document.getElementById("result-header-left").onclick=openSettings;
}

//Close Analyzer box
function setResultBar(){
    sustainlyBox.innerHTML = result_bar_html;
    document.getElementById("result-header-center").onclick=openAnalyzer;
    document.getElementById("result-header-left").onclick=openSettings;
}

//Open the Reviews box
function openReviews(){
    sustainlyBox.innerHTML = review_html;
    document.getElementById("productName").innerHTML = "<b>" + productTitle + "</b>";
    document.getElementById("starRating").innerHTML = '<img src="' + starImage +'" />';
    document.getElementById("reviewCount").innerHTML = reviewCount + " Reviews";
    
    document.getElementById("product-header-left").onclick=openSettings;
    document.getElementById("product-header-far-right").onclick=setProductBar;
    document.getElementById("product-header-center").style.cssText = [
                                                                            '-moz-box-shadow: 0px 0px 2px #888;',
                                                                            '-webkit-box-shadow: 0px 0px 2px #888;',
                                                                            'box-shadow: 0px 0px 2px #888;'
                                                                     //   'border-bottom: 1px solid #000000;'
                                                                    ].join(' ');
    document.getElementById("product-header-center").onclick=openEnergyDetails;
    
    for (var j = 0; j < reviewArray.length; j++){
        document.getElementById("reviewList").innerHTML = document.getElementById("reviewList").innerHTML + "<div class='reviewDivCollapsed'><b>" + personArray[j] + " from " + siteArray[j] + "</b><br />" + reviewArray[j] + "</div>";
    }
}

// Inserts Energy star info and analyzer buttons
function insertResultsData(titles){
    for(var index in titles){
		if(productExists(titles[index][0], titles[index][1])){
	    	var d = $('div[name='+index+']').find('[class=data]');
	    	d.append('<div class="sustainly"><span>Energy Star Certified</span></div>');
	    	if(existsInAnalyzer(index)) {
				d.append('<div class="sustainly" id="removeButton'+index+'"><span class="buttonr"><img src="http://darktriadstudios.com/sustainly/red_minus_button.png">Remove from Sustainly Analyzer</span></div>');
				var indexRef = index;
				document.getElementById('removeButton'+index).onclick = (function(index, indexRef, titles){
                                    return function(){
                                        remove_from_analyzer(indexRef, titles[indexRef][0], titles[indexRef][1], titles[indexRef][2]);
                                    }
				})(index, indexRef, titles);
	    	} else {
				d.append('<div class="sustainly" id="addButton'+index+'"><span class="buttong"><img src="http://darktriadstudios.com/sustainly/green_plus_button.png">Add to Sustainly Analyzer</span></div>');
				var indexRef = index;
				document.getElementById('addButton'+index).onclick = (function(index, indexRef, titles){
                                    return function(){
 //                                       alert("index: "+ index + " & indexRef: " + indexRef);
                                        add_to_analyzer(indexRef, titles[indexRef][0], titles[indexRef][1], titles[indexRef][2]);
                                    }
				})(index, indexRef, titles);
	    	}
		}
    }
}

function add_to_analyzer(inda, brand, model, cost){
	
	if(!existsInAnalyzer(inda)) {
		analyzerInsert(inda, brand, model, cost);
	}
    $('#addButton'+inda).remove();
    var d = $('div[name='+inda+']').find('[class=data]');
    d.append('<div class="sustainly" id="removeButton'+inda+'"><span class="buttonr"><img src="http://darktriadstudios.com/sustainly/red_minus_button.png">Remove from Sustainly Analyzer</span></div>');
    document.getElementById('removeButton'+inda).onclick = function(){
	remove_from_analyzer(inda, brand, model, cost);
    }
    updateProductsPane(0);

}

function remove_from_analyzer(indr, brand, model, cost){
	analyzerDelete(indr);

    $('#removeButton'+indr).remove();
    var d = $('div[name='+indr+']').find('[class=data]');
    d.append('<div class="sustainly" id="addButton'+indr+'"><span class="buttong"><img src="http://darktriadstudios.com/sustainly/green_plus_button.png">Add to Sustainly Analyzer</span></div>');
    document.getElementById('addButton'+indr).onclick = function(){
	add_to_analyzer(indr, brand, model, cost);
    }
    updateProductsPane(0);
    
}

// updates product pane in analyzer pane
function updateProductsPane(option){
	// load the data currently in the analyzer
    if (document.getElementById("productlist")){
	document.getElementById("productlist").innerHTML="";
	/*
        var plist = scrapeResultsPage();
		for (var elem in analyzer_elements){
	    $('#productlist').append('<li class="pnameli">'+plist[analyzer_elements[elem[0]]] + '</li>');
        }
    */
		var dataSet = analyzerGetAll();
		if(dataSet.length > 0) {
			for(var i = 0, len = dataSet.length; i < len; i++){
				$('#productlist').append('<li class="pnameli">'+ dataSet[i].brand_name + ' - ' + dataSet[i].model_number + '</li>');
			}
			switch(option)
			{
				case 1:
		  			drawEnergyGraph(dataSet);
		  			break;
				case 2:
		  			drawWaterGraph(dataSet);
		  			break;
				default:
		  			drawCostGraph(dataSet);
					break;
			}
		} else {
			$('#graph').html(function() {
			  return '<b>Please Add a Product</b>';
			});
		}
    }
    
}

// Now add the graph button listeners
$('#graphButton1').live('click',function(){
	updateProductsPane(0);
});

$('#graphButton2').live('click',function(){
	updateProductsPane(1);
});

$('#graphButton3').live('click',function(){
	updateProductsPane(2);
});

function insertReviewNumber(){
/*    if (bodyhtml.indexOf("Be the first") != -1){
        var revLink = document.createElement("a");
        revLink.setAttribute("id", "reviewLink");
        revLink.setAttribute("class", "sustainLink");
        revLink.setAttribute("href", "#");
        revLink.innerHTML = reviewCount + " from Sustainly";
        document.getElementById("likeAndShareBar").innerHTML = "(<a href='#' class='sustainLink' id='reviewLink'>" + reviewCount + " from Sustainly</a>)";
    }
    var spans = getElementsByClassName('crAvgStars');
    var first_span = spans[0];
    first_span.innerHTML = first_span.innerHTML + "(<a href='#' class='sustainLink' id='reviewLink'>" + reviewCount + " from Sustainly</a>)";
*/    document.getElementById("likeAndShareBar").innerHTML = "(<a href='#' class='sustainLink' id='reviewLink'>" + reviewCount + " from Sustainly</a>)";
    document.getElementById('reviewLink').onclick = openReviews;
//    alert(first_span.innerHTML);
}

//Open the Energy Details box
function openEnergyDetails(){
    sustainlyBox.innerHTML = energy_html;
    document.getElementById("product-header-left").onclick=openSettings;
    document.getElementById("product-header-far-right").onclick=setProductBar;
    document.getElementById("product-header-right").style.cssText = [
                                                                            '-moz-box-shadow: 0px 0px 2px #888;',
                                                                            '-webkit-box-shadow: 0px 0px 2px #888;',
                                                                            'box-shadow: 0px 0px 2px #888;'
                                                                     //   'border-bottom: 1px solid #000000;'
                                                                    ].join(' ');
    document.getElementById("product-header-right").onclick=openReviews;
    
    var brandModel = parseTitle(productTitle);
    if (brandModel == null){
        document.getElementById("energy-div").innerHTML = "<br /><br /><br /><br /><center>No data found for <b>" + productTitle + "</b></center>";
    }
    else {
        var annualEnergyUse = getAnnualEnergyUse(brandModel["brand"],brandModel["model"]);
        var annualEnergyCost = annualEnergyUse * ENERGY_COST;
        var annualWaterUse = getAnnualWaterUser(brandModel["brand"],brandModel["model"]);
        var annualWaterCost = annualWaterUse * WATER_COST;
        var percentBetterThanStandard = getPercentBetter(brandModel["brand"],brandModel["model"]);
        document.getElementById("energy-div").innerHTML = document.getElementById("energy-div").innerHTML + "Annual Energy Use: <b>" + annualEnergyUse + "kWh</b>";
        document.getElementById("energy-div").innerHTML = document.getElementById("energy-div").innerHTML + "<br />Annual Energy Cost: <b>$" + annualEnergyCost + "</b>";
        document.getElementById("energy-div").innerHTML = document.getElementById("energy-div").innerHTML + "<br />Annual Water Use: <b>" + annualWaterUse + " gallons</b>";
        document.getElementById("energy-div").innerHTML = document.getElementById("energy-div").innerHTML + "<br />Annual Water Cost: <b>$" + annualWaterCost + "</b>";
        document.getElementById("energy-div").innerHTML = document.getElementById("energy-div").innerHTML + "<br />Total Annual Costs: <b>$" + (annualWaterCost + annualEnergyCost) + "</b>";
    }
}

function openSettings(){
    if (document.getElementById("st-body") == null){
        sustainlyBox.innerHTML = sustainlyBox.innerHTML + "<div id='st-body'></div>";
    }
    if (document.getElementById("product-header-center") != null){
        document.getElementById("product-header-far-right").innerHTML = '<div class="st-contenth"><img src="http://darktriadstudios.com/sustainly/close_button.png" /></div>';
        document.getElementById("product-header-far-right").onclick = setProductBar;
        document.getElementById("product-header-center").onclick=openEnergyDetails;
        document.getElementById("product-header-right").onclick=openReviews;
        document.getElementById("product-header-right").style.cssText = [
                                                                            '-moz-box-shadow: 0px 0px 2px #888;',
                                                                            '-webkit-box-shadow: 0px 0px 2px #888;',
                                                                            'box-shadow: 0px 0px 2px #888;'
                                                                     //   'border-bottom: 1px solid #000000;'
                                                                    ].join(' ');
        document.getElementById("product-header-center").style.cssText = [
                                                                            '-moz-box-shadow: 0px 0px 2px #888;',
                                                                            '-webkit-box-shadow: 0px 0px 2px #888;',
                                                                            'box-shadow: 0px 0px 2px #888;'
                                                                     //   'border-bottom: 1px solid #000000;'
                                                                    ].join(' ');
    }
    if (document.getElementById("result-header-center") != null){
        document.getElementById("result-header-right").innerHTML = '<div class="st-contenth"><img src="http://darktriadstudios.com/sustainly/close_button.png" /></div>';
        document.getElementById("result-header-right").onclick = setResultBar;
        document.getElementById("result-header-center").onclick=openAnalyzer;
        document.getElementById("result-header-center").style.cssText = [
                                                                            '-moz-box-shadow: 0px 0px 2px #888;',
                                                                            '-webkit-box-shadow: 0px 0px 2px #888;',
                                                                            'box-shadow: 0px 0px 2px #888;'
                                                                     //   'border-bottom: 1px solid #000000;'
                                                                    ].join(' ');
    }
    document.getElementById("st-body").innerHTML = '<div id="energy-div" class="energyContent"></div>';
    document.getElementById("energy-div").innerHTML = "<fieldset><legend>Washer Settings</legend>";
    document.getElementById("energy-div").innerHTML = [
                                                        "<form><fieldset><legend>Washer Settings</legend><ol>",
                                                        "<li><label for='loads'>Average Number of Laundry Loads per Year: </label><input type='number' id='loads' name='loads' value='" + getAnnualLoadCount() + "'/></li>",
                                                         "<li><label for='energyCost'>Average Energy Cost per kWh: </label><input type='number' id='energyCost' name='energyCost' value='" + getEnergyCost() + "'/></li>",
                                                         "<li><label for='waterCost'>Average Water Cost per Gallon: </label><input type='number' id='waterCost' name='waterCost' value='" + getWaterCost() + "'/></li>",
                                                         "<li><label for='saveButton'><button onclick='resetSettings' type='button' id='resetButton'>Reset to Defaults</button></label><button onclick='saveSettings' type='button' id='saveButton'>Save</button></li>",
                                                         "</ol></fieldset></form>"   
                                                        ].join("\n");
    document.getElementById("saveButton").onclick = saveSettings;
    document.getElementById("resetButton").onclick = resetSettings;
/*    document.getElementById("energy-div").innerHTML = document.getElementById("energy-div").innerHTML + "<ol>";
    document.getElementById("energy-div").innerHTML = document.getElementById("energy-div").innerHTML + "<li><label for='loads'>Average Number of Laundry Loads per Year: </label><input type='number' id='loads' name='loads' value='" + getAnnualLoadCount() + "'/></li>";
    document.getElementById("energy-div").innerHTML = document.getElementById("energy-div").innerHTML + "<li><label for='energyCost'>Average Energy Cost per kWh: </label><input type='number' id='energyCost' name='energyCost' value='" + getEnergyCost() + "'/></li>";
    document.getElementById("energy-div").innerHTML = document.getElementById("energy-div").innerHTML + "<li><label for='waterCost'>Average Water Cost per Gallon: </label><input type='number' id='waterCost' name='waterCost' value='" + getWaterCost() + "'/></li>";
    document.getElementById("energy-div").innerHTML = document.getElementById("energy-div").innerHTML + "<li><button onclick='saveSettings' type='button'>Save</button></li>";
    document.getElementById("energy-div").innerHTML = document.getElementById("energy-div").innerHTML + "</ol></fieldset>";
*/

}

function resetSettings(){
    document.getElementById("loads").value = "392";
    document.getElementById("energyCost").value = "0.15";
    document.getElementById("waterCost").value = "0.002";
}

function saveSettings(){
    setAnnualLoadCount(document.getElementById("loads").value);
    setEnergyCost(document.getElementById("energyCost").value);
    setWaterCost(document.getElementById("waterCost").value);
}

//Open product page bottom bar
function setProductBar(){
    sustainlyBox.innerHTML = product_bar_html;
    document.getElementById("product-header-center").onclick=openEnergyDetails;
    document.getElementById("product-header-right").onclick=openReviews;
    document.getElementById("product-header-left").onclick=openSettings;
}

//Function to get elements by class name
function getElementsByClassName(className){
    var hasClassName = new RegExp("(?:^|\\s)" + className + "(?:$|\\s)");
    var allElements = document.getElementsByTagName("*");
    var results = [];

    var element;
    for (var i = 0; (element = allElements[i]) != null; i++) {
        var elementClass = element.className;
        if (elementClass && elementClass.indexOf(className) != -1 && hasClassName.test(elementClass))
        results.push(element);
    }

    return results;
}

/* Returns the price of the item on the page with ASIN = id */ 
function getPrice(id){
    var d = $('div[name='+id+']');
    var f = (d.find('[class="price addon"]').text()).substr(2);
    var i = parseFloat(f);
    return i;
}

//Takes in a product title and searches through it to see if we have it in our DB
function parseTitle(title) {
	var splitTitle = title.split(' ');
	for(var i = 0, len = splitTitle.length; i < len; i++){

            var model = splitTitle[i];
            if (productExists(null, model)) {
                var brand = getBrand(model);
                return {"brand": brand, "model": model};
            }
	}
	return null;
}

//Returns true if product exists in DB. No longer actually uses brand.
function productExists(brand, model) {
    
	var sustainlyDB = new localStorageDB("Sustainly");
        
	var washingMachines = sustainlyDB.query("washing_machine");
	for(var i = 0, len = washingMachines.length; i < len; i++){
		var currModel = washingMachines[i].model_number;
		
		var patt = new RegExp(currModel, "i");
		if (patt.test(model)) {
			return true;
		}
	} 
	return false;
}


function getBrand(model) {
    
    var sustainlyDB = new localStorageDB("Sustainly");
    var washingMachines = sustainlyDB.query("washing_machine");
    for(var i = 0, len = washingMachines.length; i < len; i++){
        var currModel = washingMachines[i].model_number;
        
        var patt = new RegExp(currModel, "i");
        if (patt.test(model)) {
            return washingMachines[i].brand_name;
        }
    } 
    return null;
    
}

		
function getLoadConfig(brand, model) {
    
    var sustainlyDB = new localStorageDB("Sustainly");
    var washingMachines = sustainlyDB.query("washing_machine");
    for(var i = 0, len = washingMachines.length; i < len; i++){
        var currModel = washingMachines[i].model_number;
        
        var patt = new RegExp(currModel, "i");
        if (patt.test(model)) {
            return washingMachines[i].load_config;
        }
    } 
    return null;
}


function getVolume(brand, model) {

    var sustainlyDB = new localStorageDB("Sustainly");
    var washingMachines = sustainlyDB.query("washing_machine");
    for(var i = 0, len = washingMachines.length; i < len; i++){
        var currModel = washingMachines[i].model_number;
        
        var patt = new RegExp(currModel, "i");
        if (patt.test(model)) {
            return washingMachines[i].volume;
        }
    } 
    return null;
}


function getAnnualEnergyUse(brand, model) {

    var sustainlyDB = new localStorageDB("Sustainly");
    var washingMachines = sustainlyDB.query("washing_machine");
    for(var i = 0, len = washingMachines.length; i < len; i++){
        var currModel = washingMachines[i].model_number;
        
        var patt = new RegExp(currModel, "i");
        if (patt.test(model)) {
            return washingMachines[i].annual_energy_use;
        }
    } 
    return null;
}


function getModifiedEnergyFactor(brand, model) {

    var sustainlyDB = new localStorageDB("Sustainly");
    var washingMachines = sustainlyDB.query("washing_machine");
    for(var i = 0, len = washingMachines.length; i < len; i++){
        var currModel = washingMachines[i].model_number;
        
        var patt = new RegExp(currModel, "i");
        if (patt.test(model)) {
            return washingMachines[i].modified_energy_factor;
        }
    } 
    return null;

}


function getFederalStandard(brand, model) {

    var sustainlyDB = new localStorageDB("Sustainly");
    var washingMachines = sustainlyDB.query("washing_machine");
    for(var i = 0, len = washingMachines.length; i < len; i++){
        var currModel = washingMachines[i].model_number;
        
        var patt = new RegExp(currModel, "i");
        if (patt.test(model)) {
            return washingMachines[i].modified_federal_standard;
        }
    } 
    return null;

}


function getPercentBetter(brand, model) {
    
    var sustainlyDB = new localStorageDB("Sustainly");
    var washingMachines = sustainlyDB.query("washing_machine");
    for(var i = 0, len = washingMachines.length; i < len; i++){
        var currModel = washingMachines[i].model_number;
        
        var patt = new RegExp(currModel, "i");
        if (patt.test(model)) {
            return washingMachines[i].percent_better;
        }
    } 
    return null;

}


function getAnnualWaterUser(brand, model) {

    var sustainlyDB = new localStorageDB("Sustainly");
    var washingMachines = sustainlyDB.query("washing_machine");
    for(var i = 0, len = washingMachines.length; i < len; i++){
        var currModel = washingMachines[i].model_number;
        
        var patt = new RegExp(currModel, "i");
        if (patt.test(model)) {
            return washingMachines[i].annual_water_use;
        }
    } 
    return null;

}


function getWaterFactor(brand, model) {

    var sustainlyDB = new localStorageDB("Sustainly");
    var washingMachines = sustainlyDB.query("washing_machine");
    for(var i = 0, len = washingMachines.length; i < len; i++){
        var currModel = washingMachines[i].model_number;
        
        var patt = new RegExp(currModel, "i");
        if (patt.test(model)) {
            return washingMachines[i].water_factor;
        }
    } 
    return null;
}




//annualLoadCount, energyCost, waterCost

function getAnnualLoadCount() {
	var sustainlyDB = new localStorageDB("Sustainly");
	var currSettings = sustainlyDB.query("settings")[0];
	return currSettings.load_count;
}

function setAnnualLoadCount(loadCount) {
	var sustainlyDB = new localStorageDB("Sustainly");
	var currSettings = sustainlyDB.query("settings")[0];	
		
	sustainlyDB.update("settings", {ID: currSettings.ID}, function(row) {
		row.load_count = loadCount;
		return row;
	});
	sustainlyDB.commit();
}

function getEnergyCost() {
	var sustainlyDB = new localStorageDB("Sustainly");
	var currSettings = sustainlyDB.query("settings")[0];
	return currSettings.energy_cost;
}

function setEnergyCost(energyCost) {
	var sustainlyDB = new localStorageDB("Sustainly");
	var currSettings = sustainlyDB.query("settings")[0];	
		
	sustainlyDB.update("settings", {ID: currSettings.ID}, function(row) {
		row.energy_cost = energyCost;
		return row;
	});
	sustainlyDB.commit();
}


function getWaterCost() {
	var sustainlyDB = new localStorageDB("Sustainly");
	var currSettings = sustainlyDB.query("settings")[0];
	return currSettings.water_cost;
}

function setWaterCost(waterCost) {
	var sustainlyDB = new localStorageDB("Sustainly");
	var currSettings = sustainlyDB.query("settings")[0];	

	sustainlyDB.update("settings", {ID: currSettings.ID}, function(row) {
		row.water_cost = waterCost;
		return row;
	});
	sustainlyDB.commit();
}
		
function analyzerInsert(id, brand, model, cost) {
	var sustainlyDB = new localStorageDB("Sustainly");
	sustainlyDB.insert("analyzer", {analyzer_id: id, model_number: model, brand_name: brand, cost: cost});
	sustainlyDB.commit();
}


function analyzerGetCost(id) {
	var sustainlyDB = new localStorageDB("Sustainly");
	var analyzerProducts = sustainlyDB.query("analyzer");
	for(var i = 0, len = analyzerProducts.length; i < len; i++){
		if(analyzerProducts[i].analyzer_id === id) {
			return analyzerProducts[i].cost;
		}
	}
	return null;
}

function analyzerGetAll() {
	var sustainlyDB = new localStorageDB("Sustainly");
	var analyzerProducts = sustainlyDB.query("analyzer");
	return analyzerProducts;
}

function analyzerGetBrandModel(id) {
	var sustainlyDB = new localStorageDB("Sustainly");
	var analyzerProducts = sustainlyDB.query("analyzer");
	for(var i = 0, len = analyzerProducts.length; i < len; i++){
		if(analyzerProducts[i].analyzer_id === id) {
			return {"brand": analyzerProducts[i].brand_name, "model": analyzerProducts[i].model_number};
		}
	}
	return null;
}


function analyzerDelete(id) {
	var sustainlyDB = new localStorageDB("Sustainly");
	sustainlyDB.deleteRows("analyzer", {analyzer_id: id});
	sustainlyDB.commit();
}

function existsInAnalyzer(id) {
	
	var sustainlyDB = new localStorageDB("Sustainly");
	var analyzerProducts = sustainlyDB.query("analyzer");
	for(var i = 0, len = analyzerProducts.length; i < len; i++){
		if(analyzerProducts[i].analyzer_id === id) {
			return true;
		}
	}
	return false;
}































//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
	Kailash Nadh (http://kailashnadh.name)
	
	localStorageDB
	September 2011
	A simple database layer for localStorage

	License	:	MIT License
*/

function localStorageDB(db_name) {

	var db_prefix = 'db_',
		db_id = db_prefix + db_name,
		db_new = false,	// this flag determines whether a new database was created during an object initialisation
		db = null;

	// if the database doesn't exist, create it
	db = localStorage[ db_id ];
	if( !( db && (db = JSON.parse(db)) && db.tables && db.data ) ) {
		if(!validateName(db_name)) {
			error("The name '" + db_name + "'" + " contains invalid characters.");
		} else {
			db = {tables: {}, data: {}};
			commit();
			db_new = true;
		}
	}
	
	
	// ______________________ private methods
	
	// _________ database functions
	// drop the database
	function drop() {
		delete localStorage[db_id];
		db = null;
	}
			
	// number of tables in the database
	function tableCount() {
		var count = 0;
		for(var table in db.tables) {
			if( db.tables.hasOwnProperty(table) ) {
				count++;
			}
		}
		return count;
	}

	// _________ table functions
	
	// check whether a table exists
	function tableExists(table_name) {
		return db.tables[table_name] ? true : false;
	}
	
	// check whether a table exists, and if not, throw an error
	function tableExistsWarn(table_name) {
		if(!tableExists(table_name)) {
                        alert("Error: table doesn't exist");
			error("The table '" + table_name + "' does not exist.");
		}
	}
		
	// create a table
	function createTable(table_name, fields) {
		db.tables[table_name] = {fields: fields, auto_increment: 1};
		db.data[table_name] = {};
	}
	
	// drop a table
	function dropTable(table_name) {
		delete db.tables[table_name];
		delete db.data[table_name];
	}
	
	// empty a table
	function truncate(table_name) {
		db.tables[table_name].auto_increment = 1;
		db.data[table_name] = {};
	}
	
	// number of rows in a table
	function rowCount(table_name) {
		var count = 0;
		for(var ID in db.data[table_name]) {
			if( db.data[table_name].hasOwnProperty(ID) ) {
				count++;
			}
		}
		return count;
	}
	
	// insert a new row
	function insert(table_name, data) {
		data.ID = db.tables[table_name].auto_increment;
		db.data[table_name][ db.tables[table_name].auto_increment ] = data;
		db.tables[table_name].auto_increment++;
		return data.ID;
	}
	
	// select rows, given a list of IDs of rows in a table
	function select(table_name, ids) {
		var ID = null, results = [], row = null;
		for(var i=0; i<ids.length; i++) {
			ID = ids[i];
			row = db.data[table_name][ID];
			results.push( clone(row) );
		}
		return results;
	}
	
	// select rows in a table by field-value pairs, returns the IDs of matches
	function queryByValues(table_name, data, limit) {
		var result_ids = [],
			exists = false,
			row = null;

		// loop through all the records in the table, looking for matches
		for(var ID in db.data[table_name]) {
			if( !db.data[table_name].hasOwnProperty(ID) ) {
				continue;
			}
			
			row = db.data[table_name][ID];
			exists = false;

			for(var field in data) {
				if( !data.hasOwnProperty(field) ) {
					continue;
				}

				if(typeof data[field] == 'string') {	// if the field is a string, do a case insensitive comparison
					if( row[field].toString().toLowerCase() == data[field].toString().toLowerCase() ) {
						exists = true;
						break;
					}
				} else {
					if( row[field] == data[field] ) {
						exists = true;
						break;
					}
				}
			}
			if(exists) {
				result_ids.push(ID);
			}
			if(result_ids.length == limit) {
				break;
			}
		}
		return result_ids;
	}
	
	// select rows in a table by a function, returns the IDs of matches
	function queryByFunction(table_name, query_function, limit) {
		var result_ids = [],
			exists = false,
			row = null;

		// loop through all the records in the table, looking for matches
		for(var ID in db.data[table_name]) {
			if( !db.data[table_name].hasOwnProperty(ID) ) {
				continue;
			}

			row = db.data[table_name][ID];

			if( query_function( clone(row) ) == true ) {	// it's a match if the supplied conditional function is satisfied
				result_ids.push(ID);
			}
			if(result_ids.length == limit) {
				break;
			}
		}
		return result_ids;
	}
	
	// return all the IDs in a table
	function getIDs(table_name, limit) {
		var result_ids = [];
		for(var ID in db.data[table_name]) {
			if( db.data[table_name].hasOwnProperty(ID) ) {
				result_ids.push(ID);

				if(result_ids.length == limit) {
					break;
				}
			}
		}
		return result_ids;
	}
	
	// delete rows, given a list of their IDs in a table
	function deleteRows(table_name, ids) {
		for(var i=0; i<ids.length; i++) {
			if( db.data[table_name].hasOwnProperty(ids[i]) ) {
				delete db.data[table_name][ ids[i] ];
			}
		}
		return ids.length;
	}
	
	// update rows
	function update(table_name, ids, update_function) {
		var ID = '', num = 0;

		for(var i=0; i<ids.length; i++) {
			ID = ids[i];

			var updated_data = update_function( clone(db.data[table_name][ID]) );

			if(updated_data) {
				delete updated_data['ID']; // no updates possible to ID

				var new_data = db.data[table_name][ID];				
				// merge updated data with existing data
				for(var field in updated_data) {
					if( updated_data.hasOwnProperty(field) ) {
						new_data[field] = updated_data[field];
					}
				}

				db.data[table_name][ID] = validFields(table_name, new_data);
				num++;
			}
		}
		return num;
	}
	


	// commit the database to localStorage
	function commit() {
		localStorage[db_id] = JSON.stringify(db);
	}
	
	// serialize the database
	function serialize() {
		return JSON.stringify(db);
	}
	
	// throw an error
	function error(msg) {
		throw new Error(msg);
	}
	
	// clone an object
	function clone(obj) {
		var new_obj = {};
		for(var key in obj) {
			if( obj.hasOwnProperty(key) ) {
				new_obj[key] = obj[key];
			}
		}
		return new_obj;
	}
	
	// validate db, table, field names (alpha-numeric only)
	function validateName(name) {
		return name.match(/[^a-z_0-9]/ig) ? false : true;
	}
	
	// given a data list, only retain valid fields in a table
	function validFields(table_name, data) {
		var field = '', new_data = {};

		for(var i=0; i<db.tables[table_name].fields.length; i++) {
			field = db.tables[table_name].fields[i];
			
			if(data[field]) {
				new_data[field] = data[field];
			}
		}
		return new_data;
	}
	
	// given a data list, populate with valid field names of a table
	function validateData(table_name, data) {
		var field = '', new_data = {};
		for(var i=0; i<db.tables[table_name].fields.length; i++) {
			field = db.tables[table_name].fields[i];
			new_data[field] = data[field] ? data[field] : null;
		}
		return new_data;
	}
	


	// ______________________ public methods

	return {
		// commit the database to localStorage
		commit: function() {
			commit();
		},
		
		// is this instance a newly created database?
		isNew: function() {
			return db_new;
		},
		
		// delete the database
		drop: function() {
			drop();
		},
		
		// serialize the database
		serialize: function() {
			return serialize();
		},
		
		// check whether a table exists
		tableExists: function(table_name) {
			return tableExists(table_name);
		},
		
		// number of tables in the database
		tableCount: function() {
			return tableCount();
		},
		
		// create a table
		createTable: function(table_name, fields) {
			var result = false;
			if(!validateName(table_name)) {
				error("The database name '" + table_name + "'" + " contains invalid characters.");
			} else if(this.tableExists(table_name)) {
				error("The table name '" + table_name + "' already exists.");
			} else {
				// make sure field names are valid
				var is_valid = true;
				for(var i=0; i<fields.length; i++) {
					if(!validateName(fields[i])) {
						is_valid = false;
						break;
					}
				}
				
				if(is_valid) {
					// cannot use indexOf due to <IE9 incompatibility
					// de-duplicate the field list
					var fields_literal = {};
					for(var i=0; i<fields.length; i++) {
						fields_literal[ fields[i] ] = true;
					}
					delete fields_literal['ID']; // ID is a reserved field name

					fields = ['ID'];
					for(var field in fields_literal) {
						if( fields_literal.hasOwnProperty(field) ) {
							fields.push(field);
						}
					}

					createTable(table_name, fields);
					result = true;
				} else {
					error("One or more field names in the table definition contains invalid characters.");
				}
			}

			return result;
		},
		
		// drop a table
		dropTable: function(table_name) {
			tableExistsWarn(table_name);
			dropTable(table_name);
		},
		
		// empty a table
		truncate: function(table_name) {
			tableExistsWarn(table_name);
			truncate(table_name);
		},
		
		// number of rows in a table
		rowCount: function(table_name) {
			tableExistsWarn(table_name);
			return rowCount(table_name);
		},
		
		// insert a row
		insert: function(table_name, data) {
			tableExistsWarn(table_name);
			return insert(table_name, validateData(table_name, data) );
		},
		
		// update rows
		update: function(table_name, query, update_function) {
			tableExistsWarn(table_name);

			var result_ids = [];
			if(!query) {
				result_ids = getIDs(table_name);				// there is no query. applies to all records
			} else if(typeof query == 'object') {				// the query has key-value pairs provided
				result_ids = queryByValues(table_name, validFields(table_name, query));
			} else if(typeof query == 'function') {				// the query has a conditional map function provided
				result_ids = queryByFunction(table_name, query);
			}
			return update(table_name, result_ids, update_function);
		},

		// select rows
		query: function(table_name, query, limit) {
			tableExistsWarn(table_name);
			var result_ids = [];
			if(!query) {
				result_ids = getIDs(table_name, limit); // no conditions given, return all records
			} else if(typeof query == 'object') {			// the query has key-value pairs provided
				result_ids = queryByValues(table_name, validFields(table_name, query), limit);
			} else if(typeof query == 'function') {		// the query has a conditional map function provided
				result_ids = queryByFunction(table_name, query, limit);
			}
			return select(table_name, result_ids, limit);
		},

		// delete rows
		deleteRows: function(table_name, query) {
			tableExistsWarn(table_name);

			var result_ids = [];
			if(!query) {
				result_ids = getIDs(table_name);
			} else if(typeof query == 'object') {
				result_ids = queryByValues(table_name, validFields(table_name, query));
			} else if(typeof query == 'function') {
				result_ids = queryByFunction(table_name, query);
			}
			return deleteRows(table_name, result_ids);
		}
	}
}

