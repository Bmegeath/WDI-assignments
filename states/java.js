var allStates = ["AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","GU","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MH","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","PR","PW","RI","SC","SD","TN","TX","UT","VA","VI","VT","WA","WI","WV","WY"];

for (var key in allStates) {

	if (allStates[key] == "UT") {
		document.getElementById("states").innerHTML += '<option selected>' + allStates[key] + '</option>';


	}
	if (allStates[key] != "UT") { 
		document.getElementById("states").innerHTML += '<option>' + allStates[key] + '</option>';
	}


}





