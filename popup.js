var modal = document.getElementById('myModal');
var firstMod = document.getElementById("firstMod");
var lastMod = document.getElementById("lastMod");
var ddayMod = document.getElementById("ddayMod");
var bdayMod = document.getElementById("bdayMod");
var ownerMod = document.getElementById("ownerMod");
var statMod = document.getElementById("statMod");
var lottypemod = document.getElementById("lottypeMod");
var lotnummod = document.getElementById("lotnumMod");
var lotlevelmod = document.getElementById("lotlevelMod");
var owner = document.getElementById("owner");
var chosenfile = document.getElementById("chosenfile");





//L A W N 1//
	// 1 //
		function popup1a()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}


			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			

			
			 

			var ref = firebase.database().ref("Deceased").child("L11A");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
				          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("1").child("a");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});

				          	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
							  
							
			                		
			             });

			}
			}
		function popup1b()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("L11B");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("1").child("b");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                     	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;	
			             });

			}
				}
		function popup1c()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("L11C");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("1").child("c");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                  	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}			
		function popup1d()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L11D");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("1").child("d");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                    var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;		
			             });

			}
				}					
		function popup1k()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("L11K");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("1").child("k");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                   		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}			
		function popup1l()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("L11L");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("1").child("l");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
	// 2 //
		function popup2a()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("L12A");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("a");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}
		function popup2b()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L12B");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("b");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
		function popup2c()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("L12C");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("c");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}			
		function popup2d()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L12D");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("d");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
		function popup2e()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L12E");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("e");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});  
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;		
			             });

			}
				}
		function popup2f()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L12F");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("f");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                  		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
		function popup2g()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L12G");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("g");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			               	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
		function popup2h()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L12H");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("h");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
		function popup2i()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L12I");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("i");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
		function popup2j()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L12J");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("j");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;	
			             });

			}
				}																	
		function popup2k()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L12K");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("k");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			               	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}			
		function popup2l()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			 var ref = firebase.database().ref("Deceased").child("L12L");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("l");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                  	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;	
			             });

			}
				}
		function popup2m()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("L12M");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("m");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                  		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
		function popup2n()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("L12N");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("n");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			               		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
		function popup2o()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

		var ref = firebase.database().ref("Deceased").child("L12O");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("o");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			              		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
		function popup2p()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L12P");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn1").child("2").child("p");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}											

//T W I N   L O T//
	// 73 //
		function popuptl73a()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("TW73A");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("TwinLot").child("73").child("a");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			               		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}

		function popuptl73b()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("TW73B");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("TwinLot").child("73").child("b");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                 	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;	
			             });

			}
				}

		function popuptl73c()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("TW73C");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("TwinLot").child("73").child("c");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                  	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;	
			             });

			}
				}
				
		function popuptl73d()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("TW73D");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("TwinLot").child("73").child("d");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                    var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;		
			             });

			}
				}
						
		function popuptl73i()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("TW73I");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("TwinLot").child("73").child("i");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			              		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
		function popuptl73j()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("TW73J");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("TwinLot").child("73").child("j");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			            		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}		

		function popuptl73k()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("TW73K");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("TwinLot").child("73").child("k");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
		function popuptl73l()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("TW73L");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("TwinLot").child("73").child("l");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}

//L A W N  3//
	// 1 //
		function popupl31a()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("L31A");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn3").child("1").child("a");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			          			var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}

		function popupl31b()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			 
			var ref = firebase.database().ref("Deceased").child("L31B");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn3").child("1").child("b");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			              	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}

		function popupl31c()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("L31C");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn3").child("1").child("c");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			              		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
				
		function popupl31d()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("L31D");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn3").child("1").child("d");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                 		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
						
		function popupl31e()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L31E");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn3").child("1").child("e");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			               		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
		function popupl31f()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("L31F");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn3").child("1").child("f");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			             	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}		

		function popupl31g()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L31G");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn3").child("1").child("g");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			               var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
		function popupl31h()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L31H");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn3").child("1").child("h");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			               	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}		

		function popupl31k()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L31K");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn3").child("1").child("k");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			              	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}

		function popupl31l()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L31L");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn3").child("1").child("l");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			               var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}

		function popupl31m()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L31M");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn3").child("1").child("m");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			              var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
				
		function popupl31n()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L31N");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn3").child("1").child("n");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			               var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
						
		function popupl31o()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
					
			var ref = firebase.database().ref("Deceased").child("L31O");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn3").child("1").child("o");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			              	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
		function popupl31p()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L31P");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn3").child("1").child("p");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			             	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}		

//L A W N  2//
	// 7 3 //
		function popupl21a()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			  
			var ref = firebase.database().ref("Deceased").child("L273A");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn2").child("73").child("a");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			          	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}

		function popupl21b()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L273B");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn2").child("73").child("b");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			             	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}

		function popupl21c()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L273C");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn2").child("73").child("c");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			              var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
				
		function popupl21d()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L273D");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn2").child("73").child("d");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;	
			             });

			}
				}
						
		function popupl21e()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L273E");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn2").child("73").child("e");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			              var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
		function popupl21f()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L273F");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn2").child("73").child("f");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			            var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}		

		function popupl21g()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L273G");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn2").child("73").child("g");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;	
			             });

			}
				}
									
		function popupl21i()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L273I");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn2").child("73").child("i");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			             		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}

		function popupl21j()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			  
			var ref = firebase.database().ref("Deceased").child("L273J");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn2").child("73").child("j");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			              var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}

		function popupl21k()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L273K");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn2").child("73").child("k");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			              	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}

		function popupl21l()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L273L");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn2").child("73").child("l");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			              		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}

		function popupl21m()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L273M");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn2").child("73").child("m");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                     	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;	
			             });

			}
				}
				
		function popupl21n()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L273N");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn2").child("73").child("n");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                  	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;	
			             });

			}
				}
						
		function popupl21o()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			 var ref = firebase.database().ref("Deceased").child("L273O");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn2").child("73").child("o");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			            	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
//L A W N  4//
	// 6 0 //
		function popupl460a()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L460A");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("a");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			               		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}

		function popupl460b()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L460B");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("b");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			               		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}

		function popupl460c()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L460C");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("c");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			              		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
				
		function popupl460d()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L460D");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("d");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;	
			             });

			}
				}
						
		function popupl460e()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L460E");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("e");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                    var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;		
			             });

			}
				}
									
		function popupl460f()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L460F");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("f");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                    var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;		
			             });

			}
				}		

		function popupl460g()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L460G");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("g");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			              	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
		function popupl460h()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L460H");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("h");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			               	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}		

		function popupl460i()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L460I");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("i");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
			                	var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;	
			             });

			}
			}

		function popupl460j()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L460J");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("j");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}

		function popupl460k()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L460K");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("a");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}

		function popupl460l()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L460L");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("l");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});	
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}

		function popupl460m()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L460M");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("m");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
				
		function popupl460n()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("L460N");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("n");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
						
		function popupl460o()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			 
			var ref = firebase.database().ref("Deceased").child("L460O");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("o");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
		function popupl460p()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("L460P");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Lawn4").child("60").child("p");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}						

//G A R D E N  8//
	// 1 //
		function popupg8a()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("G81A");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenLot8").child("1").child("a");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}

		function popupg8b()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }

			var ref = firebase.database().ref("Deceased").child("G81B");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenLot8").child("1").child("b");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});	
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;	
			             });

			}
				}

		function popupg8c()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("G81C");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenLot8").child("1").child("c");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
				
		function popupg8d()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			    

			var ref = firebase.database().ref("Deceased").child("G81D");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenLot8").child("1").child("d");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});	
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;	
			             });

			}
				}
						
		function popupg8e()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("G81E");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenLot8").child("1").child("e");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
		function popupg8f()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("G81F");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenLot8").child("1").child("f");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}		

		function popupg8g()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			 
			var ref = firebase.database().ref("Deceased").child("G81G");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenLot8").child("1").child("g");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
		function popupg8h()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			 
			var ref = firebase.database().ref("Deceased").child("G81H");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenLot8").child("1").child("h");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}		

//G A R D E N  4//
	// 1 //
		function popupg4a()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("G41A");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenLot4").child("1").child("a");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			          		
			             });

			}
			}

		function popupg4b()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("G41B");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenLot4").child("1").child("b");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
						
		function popupg4e()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("G41E");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenLot4").child("1").child("e");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			          			
			             });

			}
				}
									
		function popupg4f()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("G41F");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenLot4").child("1").child("f");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}		

//G A R D E N  E S T A T E//
	function popupge1()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("GE1");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenEstate").child("1");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			          		
			             });

			}
			}

	function popupge2()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("GE2");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenEstate").child("2");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			          		
			             });

			}
			}

	function popupge3()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("GE3");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenEstate").child("3");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			          	
			             });

			}
			}		

	function popupge4()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			
			var ref = firebase.database().ref("Deceased").child("GE4");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenEstate").child("4");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			                     		
			             });

			}
			}

	function popupge5()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("GE5");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenEstate").child("5");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}		

	function popupge17()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("GE17");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("GardenEstate").child("17");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}

//F A M I L Y  E S T A T E//
	function popupfe1()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE1");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("1");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			          		
			             });

			}
			}

	function popupfe2()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE2");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("2");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}

	function popupfe3()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE3");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("3");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			          		
			             });

			}
			}		

	function popupfe4()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE4");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("4");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}

	function popupfe5()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE5");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("5");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			          		
			             });

			}
			}

	function popupfe6()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE6");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("6");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}					

	function popupfe7()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE7");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("7");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			          		
			             });

			}
			}
			
	function popupfe8()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE8");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("8");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}
			
	function popupfe9()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE9");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("9");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}						

	function popupfe10()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE10");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("10");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}

	function popupfe11()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE11");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("11");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}
			
	function popupfe12()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE12");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("12");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}
						
	function popupfe14()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE14");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("14");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}
			
	function popupfe15()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE15");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("15");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}
			
	function popupfe16()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE16");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("16");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}
			
	function popupfe17()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE17");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("17");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}
			
	function popupfe18()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE18");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("18");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}
			
	function popupfe19()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE19");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("19");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}
			
	function popupfe20()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE20");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("20");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}
			
	function popupfe21()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE21");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("21");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}
			
	function popupfe22()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("FE22");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							if(lotLevel = ""){
								lotlevelmod.innerHTML = "";
							}else {
								lotlevelmod.innerHTML = ""+lotlevel+ "";

							}
							
			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("FamilyEstate").child("22");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}																										

//A P A R T M E N T//
	// 1 //
		function popupau1a()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A1A");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("1").child("a");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}

		function popupau1b()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A1B");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("1").child("b");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
						
		function popupau1c()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A1C");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("1").child("c");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
		function popupau1d()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A1D");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("1").child("d");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}		

		function popupau1e()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A1E");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("1").child("e");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}		

    // 2 //
		function popupau2a()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A2A");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("2").child("a");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			          		
			             });

			}
			}

		function popupau2b()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A2B");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("2").child("b");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
						
		function popupau2c()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A2C");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("2").child("c");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
		function popupau2d()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A2D");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("2").child("d");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}		

		function popupau2e()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A2E");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("2").child("e");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}		

	// 3 //
		function popupau3a()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A3A");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("2").child("a");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}

		function popupau3b()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A3B");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("2").child("b");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
						
		function popupau3c()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A3C");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("2").child("c");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
		function popupau3d()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A3D");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("2").child("d");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}		

		function popupau3e()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A3E");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("2").child("e");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});

							var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });


			}
				}					

	// 4 //
		function popupau4a()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A4A");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("2").child("a");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}

		function popupau4b()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A4B");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("4").child("b");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
						
		function popupau4c()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A4C");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("4").child("c");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
		function popupau4d()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A4D");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("4").child("d");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}		

		function popupau4e()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A4E");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("4").child("e");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}					

	// 5 //
		function popupau5a()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A5A");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("5").child("a");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
			}

		function popupau5b()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A5B");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("5").child("b");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
						
		function popupau5c()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A5C");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("5").child("c");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			             });

			}
				}
									
		function popupau5d()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A5D");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("5").child("d");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			          		
			             });

			}
				}		

		function popupau5e()
			{
			// Get the <span> element that closes the modal
			var span = document.getElementsByClassName("close")[0];

			// When the user clicks the button, open the modal 

			    modal.style.display = "block";

			// When the user clicks on <span> (x), close the modal
			span.onclick = function() {
			    modal.style.display = "none";
			}

			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function(event) {
			    if (event.target == modal) {
			        modal.style.display = "none";
			    }
			var ref = firebase.database().ref("Deceased").child("A5E");
			          ref.on('value', function(datasnapshot){
			          		var lottype = datasnapshot.child("lotType").val();
			          		var lotnum = datasnapshot.child("lotNum").val();
			          		var lotlevel = datasnapshot.child("lotLevel").val();										
							lottypemod.innerHTML = ""+lottype+ "";
							lotnummod.innerHTML = ""+lotnum+ "";
							lotlevelmod.innerHTML = ""+lotlevel+ "";

			            	ownerMod.value = datasnapshot.child("OwnerName").val();
			          		firstMod.value = datasnapshot.child("FirstName").val();
			          		lastMod.value = datasnapshot.child("LastName").val();
			          		bdayMod.value = datasnapshot.child("Birth").val();
			          		ddayMod.value = datasnapshot.child("Death").val(); 
			          		var statref = firebase.database().ref("AssumptionGardens").child("Apartemnt").child("5").child("e");
				          		statref.on('value', function(snapshot){
									statMod.value = snapshot.child("Status").val();
				          		});
				          		var image = datasnapshot.child("imagename").val();	
				          	var imgurl = datasnapshot.child("imageUrl").val();
			          		
							

							  // Or inserted into an <img> element:
							  var img = document.getElementById('myimg');
							  img.src = imgurl;
			          		
			             });

			}
				}					