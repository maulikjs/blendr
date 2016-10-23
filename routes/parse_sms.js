
//Return json object with this structure:
// {
//    fruit1: boolean,
//    fruit2: boolean,
//    fruit3: boolean,
//    ice: boolean,
//    juice: boolean,
//    name: string,
//    phone: number
//
// }

function getOrder(text){

	var fruit1 = false;
	var fruit2 = false;
	var fruit3 = false;
	var ice = false;
	var juice = false;

	var flag=1;
	var txt= text;
	txt = txt.toUpperCase();
	var flag= 0;

	var parser = txt.split(" ");

	for(i=0; i< parser.length ; i++)
	{
		switch(parser[i])
		{
			case "ORANGES":
			case "ORANGE":
				fruit1 = true;
				flag=1;
				break;
			case "APPLE":
			case "APPLES":
				fruit2 = true;
				flag=1;
				break;
			case "BANANA":
			case "BANANAS":
				fruit3 = true;
				flag=1;
				break;
			case "ICE":
				ice = true;
				flag=1;
				break;
			case "JUICE":
				juice=true;
				flag=1;
				break;
			default:
		}
	}
	if(flag=1)
	{
	var myObj = {};
	myObj["fruit1"] = fruit1;
	myObj["fruit2"] = fruit2;
	myObj["fruit3"] = fruit3;
	myObj["ice"] = ice;
	myObj["juice"] = juice;
	}

	else
	{var myObj = {}
	myObj["error"] = "error";}

	return myObj;

}

module.exports.getOrder = getOrder;
