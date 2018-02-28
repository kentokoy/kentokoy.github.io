var fName = document.getElementById("fName");
var lName = document.getElementById("lName");
var bDay = document.getElementById("bDay");
var dDay = document.getElementById("dDay");
var stat = document.getElementById("status");
var garden8 = document.getElementById("garden8");
var garden4 = document.getElementById("garden4");
var twin = document.getElementById("twin");
var gardenEstate = document.getElementById("gardenEstate");
var family = document.getElementById("family");
var lawn1 = document.getElementById("lawn1");
var lawn2 = document.getElementById("lawn2");
var lawn3 = document.getElementById("lawn3");
var lawn4 = document.getElementById("lawn4");
var apartment = document.getElementById("apartment");
var lotType = document.getElementById("lotType");
var lotNum = document.getElementById("lotNum");
var ownerName = document.getElementById("OwnerName");
var search = document.getElementById("search");
var firstMod = document.getElementById("firstMod");
var lastMod = document.getElementById("lastMod");
var ddayMod = document.getElementById("ddayMod");
var bdayMod = document.getElementById("bdayMod");
var ownerMod = document.getElementById("ownerMod");
var statMod = document.getElementById("statMod");
var lottypemod = document.getElementById("lottypeMod");
var lotnummod = document.getElementById("lotnumMod");
var lotlevelmod = document.getElementById("lotlevelMod");
var modal = document.getElementById('myModal');
var level = document.getElementById('Level');
var username = document.getElementById('email_field');
var pass = document.getElementById('password_field');
var confirm = document.getElementById('confirm_password');
var changeUser = document.getElementById('change_email');
var changePassword = document.getElementById('change_password');
var submitBtn = document.getElementById("submitBtn");

//firebase.auth().onAuthStateChanged(function(user) {
 //if (user) {
    // User is signed in.
//document.getElementById("header").style.display = "block";
//   document.getElementById("user_div").style.display = "block";
//   document.getElementById("login_div").style.display = "none";

 // window.open('file:///C:/xampp/htdocs/thesis/map.html','_self');

//   var user = firebase.auth().currentUser;

// } else {
    // No user is signed in.
//   document.getElementById("header").style.display = "none";
//   document.getElementById("user_div").style.display = "none";
//   document.getElementById("login_div").style.display = "block";
//   document.getElementById("pass_div").style.display = "none";

// }
// });



function login(){

//  var userEmail = document.getElementById("email_field").value;
//  var userPass = document.getElementById("password_field").value;

 // firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
 //   var errorCode = error.code;
 //   var errorMessage = error.message;
//
  //  window.alert("Error : " + errorMessage);

    // ...
  //});
  var username1 = username.value;
  var password = pass.value;
  var loginref = firebase.database().ref("Login");
   loginref.on('value', function(datasnapshot){
		var cuser = datasnapshot.child("user").val()	 
		var cpass = datasnapshot.child("password").val()	
		if(username1 == cuser && password == cuser){
			//window.alert("login");
			  document.getElementById("header").style.display = "block";
		 	  document.getElementById("user_div").style.display = "block";
		 	  document.getElementById("login_div").style.display = "none";
			
		}else if(username1 == "" && password == ""){
			window.alert("Please fill any form");
		}else{
			window.alert("Username or Password is incorrect");
		}         	
	 		
	});
  //
  //login.child("user").set(username1);
 // login.child("password").set(password);
  //console.log(username1 + password);


}

function logout(){
  //firebase.auth().signOut();
   document.getElementById("header").style.display = "none";
   document.getElementById("user_div").style.display = "none";
   document.getElementById("login_div").style.display = "block";
   username.value = "";
   pass.value = "";
}

function password(){

  document.getElementById("header").style.display = "none";
   document.getElementById("user_div").style.display = "none";
   document.getElementById("login_div").style.display = "none";
   document.getElementById("pass_div").style.display = "block";
   username.value = "";
   pass.value = "";
  }  

function changepass(){
  var username1 = changeUser.value;
  var password = changePassword.value;
  var conpass = confirm.value;
  var loginref = firebase.database().ref("Login");
  
  		loginref.on('value', function(datasnapshot){
  			var cuser = datasnapshot.child("user").val()
  			var cpass = datasnapshot.child("password").val()
		if(username1 == cuser && password == conpass){
			
			loginref.child("password").set(conpass);
	 		document.getElementById("header").style.display = "none";
   			document.getElementById("user_div").style.display = "none";
   			document.getElementById("login_div").style.display = "block";
   			document.getElementById("pass_div").style.display = "none";
		
		  }else if(username1 !== cuser || password !== conpass){
		  	window.alert("Incorrect Information");
		  	username.value = "";
		   pass.value = "";
		  }else if(username1 == "" || password == "" || conpass == ""){
		  	window.alert("Please complete any form");
		  	username.value = "";
		   pass.value = "";
		  }
   });
   
}

function cancel(){
	document.getElementById("header").style.display = "block";
   document.getElementById("user_div").style.display = "block";
   document.getElementById("login_div").style.display = "none";
   document.getElementById("pass_div").style.display = "none";
}

function submitClick() {



	var lID = "";
	var numID = "";
	var lvlID = "";

	//////////////////////////////////////////////////////////////////////////////////

	var id = "";
  	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  	for (var i = 0; i < 5; i++)
   	id += possible.charAt(Math.floor(Math.random() * possible.length));
	
   	//////////////////////////////////////////////////////////////////////////////////

	var firebaseRef = firebase.database().ref("AssumptionGardens");
	var all = firebase.database().ref("allDeceased").child(id);

	
	if(document.getElementById('lawn1').selected){
			var frLotType = firebaseRef.child("Lawn1");
			var type = "Lawn 1";
			lID = "L1";	
	}else if(document.getElementById('lawn2').selected){
			var frLotType = firebaseRef.child("Lawn2");
			var type = "Lawn 2";
			lID = "L2";
	}else if(document.getElementById('lawn3').selected){
			var frLotType = firebaseRef.child("Lawn3");
			var type = "Lawn 3";
			lID = "L3";
	}else if(document.getElementById('lawn4').selected){
			var frLotType = firebaseRef.child("Lawn4");
			var type = "Lawn 4";
			lID = "L4";
	}else if(document.getElementById('l9').selected){
			var frLotType = firebaseRef.child("GardenLot4");
			var type = "Garden Lot 4";
			lID = "G4";
	}else if(document.getElementById('l0').selected){
			var frLotType = firebaseRef.child("GardenLot8");
			var type = "Garden Lot 8";
			lID = "G8";
	}else if(document.getElementById('l7').selected){		
			var frLotType = firebaseRef.child("GardenEstate");
			var type = "Garden Estate";
			lID = "GE";
	}else if(document.getElementById('l8').selected){
			var frLotType = firebaseRef.child("TwinLot");
			var type = "Twin Lot Double";
			lID = "TW";
	}else if(document.getElementById('l6').selected){
			var frLotType = firebaseRef.child("FamilyEstate");
			var type = "Family Estate";
			lID = "FE";
	}else if(document.getElementById('l5').selected){
			var frLotType = firebaseRef.child("Apartment");
			var type = "Apartment Units";
			lID = "A";	
	}


	if(document.getElementById('1').selected){
		var frLotNum = frLotType.child("1");
		var num = "1";
		numID = "1";
	}else if(document.getElementById('2').selected){
		var frLotNum = frLotType.child("2");
		var num = "2";
		numID = "2";
	}else if(document.getElementById('3').selected){
		var frLotNum = frLotType.child("3");
		var num = "3";
		numID = "3";
	}else if(document.getElementById('4').selected){
		var frLotNum = frLotType.child("4");
		var num = "4";
		numID = "4";
	}else if(document.getElementById('5').selected){
		var frLotNum = frLotType.child("5");
		var num = "5";
		numID = "5";
	}else if(document.getElementById('6').selected){
		var frLotNum = frLotType.child("6");
		var num = "6";
		numID = "6";
	}else if(document.getElementById('7').selected){
		var frLotNum = frLotType.child("7");
		var num = "7";
		numID = "7";
	}else if(document.getElementById('8').selected){
		var frLotNum = frLotType.child("8");
		var num = "8";
		numID = "8";
	}else if(document.getElementById('9').selected){
		var frLotNum = frLotType.child("9");
		var num = "9";
		numID = "9";
	}else if(document.getElementById('10').selected){
		var frLotNum = frLotType.child("10");
		var num = "10";
		numID = "10";
	}else if(document.getElementById('11').selected){
		var frLotNum = frLotType.child("11");
		var num = "11";
		numID = "11";
	}else if(document.getElementById('12').selected){
		var frLotNum = frLotType.child("12");
		var num = "12";
		numID = "12";
	}else if(document.getElementById('13').selected){
		var frLotNum = frLotType.child("13");
		var num = "13";
		numID = "13";
	}else if(document.getElementById('14').selected){
		var frLotNum = frLotType.child("14");
		var num = "14";
		numID = "14";
	}else if(document.getElementById('15').selected){
		var frLotNum = frLotType.child("15");
		var num = "15";
		numID = "15";
	}else if(document.getElementById('16').selected){
		var frLotNum = frLotType.child("16");
		var num = "16";
		numID = "16";
	}else if(document.getElementById('17').selected){
		var frLotNum = frLotType.child("17");
		var num = "17";
		numID = "17";
	}else if(document.getElementById('18').selected){
		var frLotNum = frLotType.child("18");
		var num = "18";
		numID = "18";
	}else if(document.getElementById('19').selected){
		var frLotNum = frLotType.child("19");
		var num = "19";
		numID = "19";
	}else if(document.getElementById('20').selected){
		var frLotNum = frLotType.child("20");
		var num = "20";
		numID = "20";
	}else if(document.getElementById('21').selected){
		var frLotNum = frLotType.child("21");
		var num = "21";
		numID = "21";
	}else if(document.getElementById('22').selected){
		var frLotNum = frLotType.child("22");
		var num = "22";
		numID = "22";
	}else if(document.getElementById('23').selected){
		var frLotNum = frLotType.child("23");
		var num = "23";
		numID = "23";
	}else if(document.getElementById('24').selected){
		var frLotNum = frLotType.child("24");
		var num = "24";
		numID = "24";
	}else if(document.getElementById('25').selected){
		var frLotNum = frLotType.child("25");
		var num = "25";
		numID = "25";
	}else if(document.getElementById('26').selected){
		var frLotNum = frLotType.child("26");
		var num = "26";
		numID = "26";
	}else if(document.getElementById('27').selected){
		var frLotNum = frLotType.child("27");
		var num = "27";
		numID = "27";
	}else if(document.getElementById('28').selected){
		var frLotNum = frLotType.child("28");
		var num = "28";
		numID = "28";
	}else if(document.getElementById('29').selected){
		var frLotNum = frLotType.child("29");
		var num = "29";
		numID = "29";
	}else if(document.getElementById('30').selected){
		var frLotNum = frLotType.child("30");
		var num = "30";
		numID = "30";
	}else if(document.getElementById('31').selected){
		var frLotNum = frLotType.child("31");
		var num = "31";
		numID = "31";
	}else if(document.getElementById('32').selected){
		var frLotNum = frLotType.child("32");
		var num = "32";
		numID = "32";
	}else if(document.getElementById('33').selected){
		var frLotNum = frLotType.child("33");
		var num = "33";
		numID = "33";
	}else if(document.getElementById('34').selected){
		var frLotNum = frLotType.child("34");
		var num = "34";
		numID = "34";
	}else if(document.getElementById('35').selected){
		var frLotNum = frLotType.child("35");
		var num = "35";
		numID = "35";
	}else if(document.getElementById('36').selected){
		var frLotNum = frLotType.child("36");
		var num = "36";
		numID = "36";
	}else if(document.getElementById('37').selected){
		var frLotNum = frLotType.child("37");
		var num = "37";
		numID = "37";
	}else if(document.getElementById('38').selected){
		var frLotNum = frLotType.child("38");
		var num = "38";
		numID = "38";
	}else if(document.getElementById('39').selected){
		var frLotNum = frLotType.child("39");
		var num = "39";
		numID = "39";
	}else if(document.getElementById('40').selected){
		var frLotNum = frLotType.child("40");
		var num = "40";
		numID = "40";
	}else if(document.getElementById('41').selected){
		var frLotNum = frLotType.child("41");
		var num = "41";
		numID = "41";
	}else if(document.getElementById('42').selected){
		var frLotNum = frLotType.child("42");
		var num = "42";
		numID = "42";
	}else if(document.getElementById('43').selected){
		var frLotNum = frLotType.child("43");
		var num = "43";
		numID = "43";
	}else if(document.getElementById('44').selected){
		var frLotNum = frLotType.child("44");
		var num = "44";
		numID = "44";
	}else if(document.getElementById('45').selected){
		var frLotNum = frLotType.child("45");
		var num = "45";
		numID = "45";
	}else if(document.getElementById('46').selected){
		var frLotNum = frLotType.child("46");
		var num = "46";
		numID = "46";
	}else if(document.getElementById('47').selected){
		var frLotNum = frLotType.child("47");
		var num = "47";
		numID = "47";
	}else if(document.getElementById('48').selected){
		var frLotNum = frLotType.child("48");
		var num = "48";
		numID = "48";
	}else if(document.getElementById('49').selected){
		var frLotNum = frLotType.child("49");
		var num = "49";
		numID = "49";
	}else if(document.getElementById('50').selected){
		var frLotNum = frLotType.child("50");
		var num = "50";
		numID = "50";
	}else if(document.getElementById('51').selected){
		var frLotNum = frLotType.child("51");
		var num = "51";
		numID = "51";
	}else if(document.getElementById('52').selected){
		var frLotNum = frLotType.child("52");
		var num = "52";
		numID = "52";
	}else if(document.getElementById('53').selected){
		var frLotNum = frLotType.child("53");
		var num = "53";
		numID = "53";
	}else if(document.getElementById('54').selected){
		var frLotNum = frLotType.child("54");
		var num = "54";
		numID = "54";
	}else if(document.getElementById('55').selected){
		var frLotNum = frLotType.child("55");
		var num = "55";
		numID = "55";
	}else if(document.getElementById('56').selected){
		var frLotNum = frLotType.child("56");
		var num = "56";
		numID = "56";
	}else if(document.getElementById('57').selected){
		var frLotNum = frLotType.child("57");
		var num = "57";
		numID = "57";
	}else if(document.getElementById('58').selected){
		var frLotNum = frLotType.child("58");
		var num = "58";
		numID = "58";
	}else if(document.getElementById('59').selected){
		var frLotNum = frLotType.child("59");
		var num = "59";
		numID = "59";
	}else if(document.getElementById('60').selected){
		var frLotNum = frLotType.child("60");
		var num = "60";
		numID = "60";
	}else if(document.getElementById('61').selected){
		var frLotNum = frLotType.child("61");
		var num = "61";
		numID = "61";
	}else if(document.getElementById('62').selected){
		var frLotNum = frLotType.child("62");
		var num = "62";
		numID = "62";
	}else if(document.getElementById('63').selected){
		var frLotNum = frLotType.child("63");
		var num = "63";
		numID = "63";
	}else if(document.getElementById('64').selected){
		var frLotNum = frLotType.child("64");
		var num = "64";
		numID = "64";
	}else if(document.getElementById('65').selected){
		var frLotNum = frLotType.child("65");
		var num = "65";
		numID = "65";
	}else if(document.getElementById('66').selected){
		var frLotNum = frLotType.child("66");
		var num = "66";
		numID = "66";
	}else if(document.getElementById('67').selected){
		var frLotNum = frLotType.child("67");
		var num = "67";
		numID = "67";
	}else if(document.getElementById('68').selected){
		var frLotNum = frLotType.child("68");
		var num = "68";
		numID = "68";
	}else if(document.getElementById('69').selected){
		var frLotNum = frLotType.child("69");
		var num = "69";
		numID = "69";
	}else if(document.getElementById('70').selected){
		var frLotNum = frLotType.child("70");
		var num = "70";
		numID = "70";
	}else if(document.getElementById('71').selected){
		var frLotNum = frLotType.child("71");
		var num = "71";
		numID = "71";
	}else if(document.getElementById('72').selected){
		var frLotNum = frLotType.child("72");
		var num = "72";
		numID = "72";
	}else if(document.getElementById('73').selected){
		var frLotNum = frLotType.child("73");
		var num = "73";
		numID = "73";
	}else if(document.getElementById('74').selected){
		var frLotNum = frLotType.child("74");
		var num = "74";
		numID = "74";
	}else if(document.getElementById('75').selected){
		var frLotNum = frLotType.child("75");
		var num = "75";
		numID = "75";
	}else if(document.getElementById('76').selected){
		var frLotNum = frLotType.child("76");
		var num = "76";
		numID = "76";
	}else if(document.getElementById('77').selected){
		var frLotNum = frLotType.child("77");
		var num = "77";
		numID = "77";
	}else if(document.getElementById('78').selected){
		var frLotNum = frLotType.child("78");
		var num = "78";
		numID = "78";
	}else if(document.getElementById('79').selected){
		var frLotNum = frLotType.child("79");
		var num = "79";
		numID = "79";
	}else if(document.getElementById('80').selected){
		var frLotNum = frLotType.child("80");
		var num = "80";
		numID = "80";
	}else if(document.getElementById('81').selected){
		var frLotNum = frLotType.child("81");
		var num = "81";
		numID = "81";
	}else if(document.getElementById('82').selected){
		var frLotNum = frLotType.child("82");
		var num = "82";
		numID = "82";
	}else if(document.getElementById('83').selected){
		var frLotNum = frLotType.child("83");
		var num = "83";
		numID = "83";
	}else if(document.getElementById('84').selected){
		var frLotNum = frLotType.child("84");
		var num = "84";
		numID = "84";
	}else if(document.getElementById('85').selected){
		var frLotNum = frLotType.child("85");
		var num = "85";
		numID = "85";
	}else if(document.getElementById('86').selected){
		var frLotNum = frLotType.child("86");
		var num = "86";
		numID = "86";
	}else if(document.getElementById('87').selected){
		var frLotNum = frLotType.child("87");
		var num = "87";
		numID = "87";
	}else if(document.getElementById('88').selected){
		var frLotNum = frLotType.child("88");
		var num = "88";
		numID = "88";
	}else if(document.getElementById('89').selected){
		var frLotNum = frLotType.child("89");
		var num = "89";
		numID = "89";
	}else if(document.getElementById('90').selected){
		var frLotNum = frLotType.child("90");
		var num = "90";
		numID = "90";
	}else if(document.getElementById('91').selected){
		var frLotNum = frLotType.child("91");
		var num = "91";
		numID = "91";
	}else if(document.getElementById('92').selected){
		var frLotNum = frLotType.child("92");
		var num = "92";
		numID = "92";
	}else if(document.getElementById('93').selected){
		var frLotNum = frLotType.child("93");
		var num = "93";
		numID = "93";
	}else if(document.getElementById('94').selected){
		var frLotNum = frLotType.child("94");
		var num = "94";
		numID = "94";
	}else if(document.getElementById('95').selected){
		var frLotNum = frLotType.child("95");
		var num = "95";
		numID = "95";
	}else if(document.getElementById('96').selected){
		var frLotNum = frLotType.child("96");
		var num = "96";
		numID = "96";
	}else if(document.getElementById('97').selected){
		var frLotNum = frLotType.child("97");
		var num = "97";
		numID = "97";
	}else if(document.getElementById('98').selected){
		var frLotNum = frLotType.child("98");
		var num = "98";
		numID = "98";
	}else if(document.getElementById('99').selected){
		var frLotNum = frLotType.child("99");
		var num = "99";
		numID = "99";
	}else if(document.getElementById('100').selected){
		var frLotNum = frLotType.child("100");
		var num = "100";
		numID = "100";
	}else if(document.getElementById('101').selected){
		var frLotNum = frLotType.child("101");
		var num = "101";
		numID = "101";
	}else if(document.getElementById('102').selected){
		var frLotNum = frLotType.child("102");
		var num = "102";
		numID = "102";
	}else if(document.getElementById('103').selected){
		var frLotNum = frLotType.child("103");
		var num = "103";
		numID = "103";
	}else if(document.getElementById('104').selected){
		var frLotNum = frLotType.child("104");
		var num = "104";
		numID = "104";
	}else if(document.getElementById('105').selected){
		var frLotNum = frLotType.child("105");
		var num = "105";
		numID = "105";
	}else if(document.getElementById('106').selected){
		var frLotNum = frLotType.child("106");
		var num = "106";
		numID = "106";
	}else if(document.getElementById('107').selected){
		var frLotNum = frLotType.child("107");
		var num = "107";
		numID = "107";
	}else if(document.getElementById('108').selected){
		var frLotNum = frLotType.child("108");
		var num = "108";
		numID = "108";
	}else if(document.getElementById('109').selected){
		var frLotNum = frLotType.child("109");
		var num = "109";
		numID = "109";
	}else if(document.getElementById('110').selected){
		var frLotNum = frLotType.child("110");
		var num = "110";
		numID = "110";
	}else if(document.getElementById('111').selected){
		var frLotNum = frLotType.child("111");
		var num = "111";
		numID = "111";
	}else if(document.getElementById('112').selected){
		var frLotNum = frLotType.child("112");
		var num = "112";
		numID = "112";
	}else if(document.getElementById('113').selected){
		var frLotNum = frLotType.child("113");
		var num = "113";
		numID = "113";
	}else if(document.getElementById('114').selected){
		var frLotNum = frLotType.child("114");
		var num = "114";
		numID = "114";
	}else if(document.getElementById('115').selected){
		var frLotNum = frLotType.child("115");
		var num = "115";
		numID = "115";
	}else if(document.getElementById('116').selected){
		var frLotNum = frLotType.child("116");
		var num = "116";
		numID = "116";
	}else if(document.getElementById('117').selected){
		var frLotNum = frLotType.child("117");
		var num = "117";
		numID = "117";
	}else if(document.getElementById('118').selected){
		var frLotNum = frLotType.child("118");
		var num = "118";
		numID = "118";
	}else if(document.getElementById('119').selected){
		var frLotNum = frLotType.child("119");
		var num = "119";
		numID = "119";
	}else if(document.getElementById('120').selected){
		var frLotNum = frLotType.child("120");
		var num = "120";
		numID = "120";
	}else if(document.getElementById('121').selected){
		var frLotNum = frLotType.child("121");
		var num = "121";
		numID = "121";
	}else if(document.getElementById('122').selected){
		var frLotNum = frLotType.child("122");
		var num = "122";
		numID = "122";
	}else if(document.getElementById('123').selected){
		var frLotNum = frLotType.child("123");
		var num = "123";
		numID = "123";
	}else if(document.getElementById('124').selected){
		var frLotNum = frLotType.child("124");
		var num = "124";
		numID = "124";
	}else if(document.getElementById('125').selected){
		var frLotNum = frLotType.child("125");
		var num = "125";
		numID = "125";
	}else if(document.getElementById('126').selected){
		var frLotNum = frLotType.child("126");
		var num = "126";
		numID = "126";
	}else if(document.getElementById('127').selected){
		var frLotNum = frLotType.child("127");
		var num = "127";
		numID = "127";
	}else if(document.getElementById('128').selected){
		var frLotNum = frLotType.child("128");
		var num = "128";
		numID = "128";
	}else if(document.getElementById('129').selected){
		var frLotNum = frLotType.child("129");
		var num = "129";
		numID = "129";
	}else if(document.getElementById('130').selected){
		var frLotNum = frLotType.child("130");
		var num = "130";
		numID = "130";
	}		



	if(document.getElementById('aA').selected){
			var frLotLevel = frLotNum.child("a");
			var level = "A";
			var lvlID = "A";	
	}else if(document.getElementById('aB').selected){
			var frLotLevel = frLotNum.child("b");
			var level = "B";
			var lvlID = "B";
	}else if(document.getElementById('aC').selected){
			var frLotLevel = frLotNum.child("c");
			var level = "C";
			var lvlID = "C";
	}else if(document.getElementById('aD').selected){
			var frLotLevel = frLotNum.child("d");
			var level = "D";
			var lvlID = "D";
	}else if(document.getElementById('aE').selected){
			var frLotLevel = frLotNum.child("e");
			var level = "E";
			var lvlID = "E";
	}else if(document.getElementById('aF').selected){
			var frLotLevel = frLotNum.child("f");
			var level = "F";
			var lvlID = "F";
	}else if(document.getElementById('aG').selected){
			var frLotLevel = frLotNum.child("g");
			var level = "G";
			var lvlID = "G";
	}else if(document.getElementById('aH').selected){
			var frLotLevel = frLotNum.child("h");
			var level = "H";
			var lvlID = "H";
	}else if(document.getElementById('aI').selected){
			var frLotLevel = frLotNum.child("i");
			var level = "I";
			var lvlID = "I";
	}else if(document.getElementById('aJ').selected){
			var frLotLevel = frLotNum.child("j");
			var level = "J";
			var lvlID = "J";
	}else if(document.getElementById('aK').selected){
			var frLotLevel = frLotNum.child("k");
			var level = "K";
			var lvlID = "K";
	}else if(document.getElementById('aL').selected){
			var frLotLevel = frLotNum.child("l");
			var level = "L";
			var lvlID = "L";
	}else if(document.getElementById('aM').selected){
			var frLotLevel = frLotNum.child("m");
			var level = "M";
			var lvlID = "M";
	}else if(document.getElementById('aN').selected){
			var frLotLevel = frLotNum.child("n");
			var level = "N";
			var lvlID = "N";
	}else if(document.getElementById('aO').selected){
			var frLotLevel = frLotNum.child("o");
			var level = "O";
			var lvlID = "O";
	}else if(document.getElementById('aP').selected){
			var frLotLevel = frLotNum.child("p");
			var level = "P";
			var lvlID = "P";
	}					


	var ONameVar = ownerName.value;
	var fNameVar = fName.value;
	var lNameVar = lName.value;
	var bDayVar = bDay.value;
	var dDayVar = dDay.value;
	var len = stat.length

	
	var nID = lID + numID;
	var mID = lID + numID + lvlID;
	

	//firebaseRef.push().set(messageText);      unique value
	//firebaseRef.child("Text").set(messageText);
	if(document.getElementById('l6').selected || document.getElementById('l7').selected){

	var deceased = firebase.database().ref("Deceased").child(nID);
	
	
	frLotNum.child("id").set(nID);
	frLotNum.child("dID").set(id);
	
				//////////////////////////////////
	deceased.child("id").set(nID);
	deceased.child("dID").set(id);
	deceased.child("Death").set(dDayVar);
	deceased.child("OwnerName").set(ONameVar);
	deceased.child("FirstName").set(fNameVar);
	deceased.child("LastName").set(lNameVar);
	deceased.child("Birth").set(bDayVar);
	deceased.child("lotType").set(type);
	deceased.child("lotNum").set(num);
	deceased.child("lotLevel").set("");	

	if(document.getElementById('occupied').checked) {
		frLotNum.child("Status").set("Occupied");
		//deceased.child("Status").set("Occupied");
			}else if(document.getElementById('empty').checked){		
				deceased.child("dID").set("");	
				frLotNum.child("id").set("");			
				frLotNum.child("dID").set("");			
				//deceased.child("Status").set("");	
					frLotNum.child("Status").set("");
							}else if(document.getElementById('reserved').checked) {	
								frLotNum.child("Status").set("Reserved");
								//deceased.child("Status").set("Reserved");	
								//all.set(null);
									}

	
	
	//all.child("FirstName").set(fNameVar);
	//all.child("LastName").set(lNameVar);
	//all.child("Birth").set(bDayVar);
	//all.child("Death").set(dDayVar);

			


	}else{

		var deceased = firebase.database().ref("Deceased").child(mID);

		frLotLevel.child("id").set(mID);
		frLotLevel.child("dID").set(id);
		//frLotLevel.child("OwnerName").set(ONameVar);
		//frLotLevel.child("FirstName").set(fNameVar);
		//frLotLevel.child("LastName").set(lNameVar);
		//frLotLevel.child("Birth").set(bDayVar);
		//frLotLevel.child("Death").set(dDayVar);

			deceased.child("id").set(mID);
			deceased.child("dID").set(id);
			deceased.child("OwnerName").set(ONameVar);
			deceased.child("FirstName").set(fNameVar);
			deceased.child("LastName").set(lNameVar);
			deceased.child("Birth").set(bDayVar);
			deceased.child("Death").set(dDayVar);
			deceased.child("lotType").set(type);
			deceased.child("lotNum").set(num);
			deceased.child("lotLevel").set(level);

	if(document.getElementById('occupied').checked) {
		frLotLevel.child("Status").set("Occupied");
		}else if(document.getElementById('empty').checked) {	
			deceased.child("dID").set("");
			frLotLevel.child("id").set("");
			frLotLevel.child("dID").set("");
			frLotLevel.child("Status").set("");
				}else if(document.getElementById('reserved').checked)
					frLotLevel.child("Status").set("Reserved");
					//all.set(null);	
					
					
					
	////////////////////////////////////////////////////
			

			//all.child("FirstName").set(fNameVar);
			//all.child("LastName").set(lNameVar);
			//all.child("Birth").set(bDayVar);
			//all.child("Death").set(dDayVar);

		//if(document.getElementById('occupied').checked) {
			//deceased.child("Status").set("Occupied");
			//}else if(document.getElementById('reserved').checked) {	
				//deceased.child("Status").set("Reserved");		
				//all.set(null);
					//}else if(document.getElementById('empty').checked)
					//deceased.set(null);
						
						
		}

		

	window.alert("Done")

}


function edit(){

		document.getElementById("lotType").value = lottypemod.innerHTML;

		document.getElementById("lotNum").value = lotnummod.innerHTML;
		document.getElementById("lotNum").disabled = false;
	
		document.getElementById("Level").value = lotlevelmod.innerHTML;
		document.getElementById("Level").disabled = false;

		document.getElementById("OwnerName").value = ownerMod.value;

		document.getElementById("fName").value = firstMod.value;

		document.getElementById("lName").value = lastMod.value;

		document.getElementById("bDay").value = bdayMod.value;

		document.getElementById("dDay").value = ddayMod.value;
		
		if(statMod.value == "Reserved"){			
			document.getElementById("reserved").checked = true;
			//document.getElementById("occupied").checked = false;
		}else if(statMod.value == "Occupied"){
			document.getElementById('occupied').checked = true;
			//document.getElementById("reserved").checked = false;
		}
		check();
		modal.style.display = "none";

}


