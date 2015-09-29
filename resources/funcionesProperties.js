//ANOTHER FILE
var fields = 0;
var outanother="";
var scntDiv 	= $('#browser');
function addInput() {
	//alert('another');
	//alert(fields);
		if (fields != 10) {
			//$("<input id='uploadFile' class='form-control' placeholder='Choose File' disabled='disabled' /><div class='fileUpload btn btn-primary'><span>Browser</span><input id='uploadBtn'  type='file' class='upload' />").append(scntDiv);
			//document.getElementById('browser').style.display = "block";
			document.getElementById('browser').innerHTML += '<div class="row"><div style="padding-left: 25px;margin-left:-30px;" class="col-xs-3 col-sm-2">Attach</div><div style="margin-left:-20px;" id="uuploadfileEmail" class="col-xs-8 col-sm-10"><input type="text" style="width:75%;" id="uploadFileEmail" placeholder="Select a file"/></div></div><div class="row"><div style="margin-left:25px;text-align:center;" class=" col-xs-10 col-sm-10"><label for="fileToUploadEmail"><img style="float:left;margin-top:-32px;margin-left:200px;" src="http://reifax.com/FollowupReifax/img/upload-48.png" width="20px" height="20px"/></label><input style="display:none;" type="File" name="fileToUploadEmail" id="fileToUploadEmail"><input style="display:none;" type="submit" value="Upload Image" name="submit"></div></div>';
			fields += 1; 
		}else{
			//document.getElementById('text').innerHTML += "<br />Only 10 upload fields allowed.";
			//document.form.add.disabled=true;
		}
			//$("#browser").append(outanother);
			
}

//ANOTHER FILE FAX
var fields2 = 0;
var outanother2="";
var scntDiv2 	= $('#browserFax');
function addInputFax() {
	//alert('another');
	//alert(fields);
		if (fields2 != 10) {
			//$("<input id='uploadFile' class='form-control' placeholder='Choose File' disabled='disabled' /><div class='fileUpload btn btn-primary'><span>Browser</span><input id='uploadBtn'  type='file' class='upload' />").append(scntDiv);
			//document.getElementById('browser').style.display = "block";
			document.getElementById('browserFax').innerHTML += '<div class="row"><div style="padding-left: 25px;margin-left: -30px;" class="col-xs-3 col-sm-2">Attach</div><div class="row"><div id="uuploadfileEF" class="col-xs-8 col-sm-10"><input style="width:65%;" type="text" id="uploadFileFax" placeholder="Select a file"/></div></div></div> <div class="row"><div style="margin-left:25px;text-align:center;" class=" col-xs-10 col-sm-10"><div>						<label for="fileToUpload"><img style="float:left;margin-top:-30px;margin-left:200px;" src="http://reifax.com/FollowupReifax/img/upload-48.png" width="20px" height="20px"/></label><input style="display:none;" type="File" name="fileToUpload" id="fileToUpload"><input style="display:none;" type="submit" value="Upload Image" name="submit"></div></div></div>';				
			fields2 += 1;
		}else{
			//document.getElementById('text').innerHTML += "<br />Only 10 upload fields allowed.";
			//document.form.add.disabled=true;
		}
			//$("#browser").append(outanother);
		
}


function getAgentMakeCall(id){
	var pid='';
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid=userid.userid;
	//alert('get');
	if (id==''){
		
		var id = JSON.parse(localStorage.getItem('key'));
		pid=id.parcelid;
		//alert(pid);
	}else{
		var i
		//alert('cargando'+id);
		var id = JSON.parse(localStorage.getItem('key'));
		pid=id.parcelid;
		//alert(pid);
		//pid = id.join();
	}
	var thumb = "http://www.reifax.com/FollowupReifax/img/phone-68-48.png";
	$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: 'POST',
			data: { 
			'type': 'assignment',
			'userid': userid,
			'pid': pid												
			},
			success: function(datas, textStatus, jqXHR){
				alert(datas);
				var objec = JSON.parse(datas);
					//console.debug(obj2);
					if(objec.success) {								 
						var output  = "";
						var output1 = "";
						var output2 = "";
						var output3 = "";
						var output4 = "";
						var output5 = "";
						var output6 = "";
						var output7 = "";
						var output8 = "";
						var output9 = "";
						var output10 = "";
						var output11 = "";
						var output12 = "";
						var idout = "";						
						
						output +=''+objec.data['agenttype']+'';
						
							// TYPE AGENT 
							if (objec.data['agenttype']==1){
								output +=''+objec.data['agenttype']+'';								
													
							}else if (objec.data['agenttype']==2){
								output +=''+objec.data['agenttype']+'';	
															
							}
							
							// TYPE EMAIL 1
							if (objec.data['typeemail1']==0){
								output1 +=''+objec.data['typeemail1']+'';	
								
							}else if (objec.data['typeemail1']==1){
								output1 +=''+objec.data['typeemail1']+'';	
								
							}
							
							// TYPE EMAIL 2
							if (objec.data['typeemail2']==0){
								output2 +=''+objec.data['typeemail2']+'';	
								
							}else if (objec.data['typeemail2']==1){
								output2 +=''+objec.data['typeemail2']+'';	
							
							}
							
							// TYPE WEB 1
							if (objec.data['typeurl1']==0){
								output10 +=''+objec.data['typeurl1']+'';	
								
							}else if (objec.data['typeurl1']==1){
								output10 +=''+objec.data['typeurl1']+'';	
							
							}
							
							// TYPE WEB 2
							if (objec.data['typeurl2']==0){
								output11 +=''+objec.data['typeurl2']+'';	
								
							}else if (objec.data['typeurl2']==1){
								output11 +=''+objec.data['typeurl2']+'';	
							
							}
							
							// TYPE PHONE 1
							if (objec.data['typeph1']==0){
								output3 +=''+objec.data['typeph1']+'';
								
							}else if (objec.data['typeph1']==1){
								output3 +=''+objec.data['typeph1']+'';
								
							}else if (objec.data['typeph1']==2){
								output3 +=''+objec.data['typeph1']+'';
								
							}else if (objec.data['typeph1']==3){
								output3 +=''+objec.data['typeph1']+'';
								
							}else if (objec.data['typeph1']==4){
								output3 +=''+objec.data['typeph1']+'';
								
							}else if (objec.data['typeph1']==5){
								output3 +=''+objec.data['typeph1']+'';
								
							}else if (objec.data['typeph1']==6){
								output3 +=''+objec.data['typeph1']+'';
								
							}else if (objec.data['typeph1']==7){
								output3 +=''+objec.data['typeph1']+'';
																																															
							}
							
							// TYPE PHONE 2
							console.log(objec.data['typeph2']);
							if (objec.data['typeph2']==0){
								output4 +=''+objec.data['typeph2']+'';
								
							}else if (objec.data['typeph2']==1){
								output4 +=''+objec.data['typeph2']+'';
								
							}else if (objec.data['typeph2']==2){
								
								output4 +=''+objec.data['typeph2']+'';
								
							}else if (objec.data['typeph2']==3){
								output4 +=''+objec.data['typeph2']+'';
								
							}else if (objec.data['typeph2']==4){
								output4 +=''+objec.data['typeph2']+'';
								
							}else if (objec.data['typeph2']==5){
								output4 +=''+objec.data['typeph2']+'';
								
							}else if (objec.data['typeph2']==6){
								output4 +=''+objec.data['typeph2']+'';
								
							}else if (objec.data['typeph2']==7){
								output4 +=''+objec.data['typeph2']+'';
																																														
							}
							
							// TYPE PHONE 3
							if (objec.data['typeph3']==0){
								output5 +=''+objec.data['typeph3']+'';
								
							}else if (objec.data['typeph3']==1){
								output5 +=''+objec.data['typeph3']+'';
								
							}else if (objec.data['typeph3']==2){
								output5 +=''+objec.data['typeph3']+'';
								
							}else if (objec.data['typeph3']==3){
								output5 +=''+objec.data['typeph3']+'';
								
							}else if (objec.data['typeph3']==4){
								output5 +=''+objec.data['typeph3']+'';
								
							}else if (objec.data['typeph3']==5){
								output5 +=''+objec.data['typeph3']+'';
								
							}else if (objec.data['typeph3']==6){
								output5 +=''+objec.data['typeph3']+'';
								
							}else if (objec.data['typeph3']==7){
								output5 +=''+objec.data['typeph3']+'';
																																															
							}
							
							// TYPE PHONE 4
							if (objec.data['typeph4']==0){
								output6 +=''+objec.data['typeph4']+'';
								
							}else if (objec.data['typeph4']==1){
								output6 +=''+objec.data['typeph4']+'';
							
							}else if (objec.data['typeph4']==2){
								output6 +=''+objec.data['typeph4']+'';
							
							}else if (objec.data['typeph4']==3){
								output6 +=''+objec.data['typeph4']+'';
							
							}else if (objec.data['typeph4']==4){
								output6 +=''+objec.data['typeph4']+'';
							
							}else if (objec.data['typeph4']==5){
								output6 +=''+objec.data['typeph4']+'';
							
							}else if (objec.data['typeph4']==6){
								output6 +=''+objec.data['typeph4']+'';
							
							}else if (objec.data['typeph4']==7){
								output6 +=''+objec.data['typeph4']+'';
																																													
							}
							
							// TYPE PHONE 5
							if (objec.data['typeph5']==0){
								output7 +=''+objec.data['typeph5']+'';
							
							}else if (objec.data['typeph5']==1){
								output7 +=''+objec.data['typeph5']+'';
							
							}else if (objec.data['typeph5']==2){
								output7 +=''+objec.data['typeph5']+'';
							
							}else if (objec.data['typeph5']==3){
								output7 +=''+objec.data['typeph5']+'';
							
							}else if (objec.data['typeph5']==4){
								output7 +=''+objec.data['typeph5']+'';
							
							}else if (objec.data['typeph5']==5){
								output7 +=''+objec.data['typeph5']+'';
							
							}else if (objec.data['typeph5']==6){
								output7 +=''+objec.data['typeph5']+'';
							
							}else if (objec.data['typeph5']==7){
								output7 +=''+objec.data['typeph5']+'';
																																												
							}
							
							// TYPE PHONE 6
							if (objec.data['typeph6']==0){
								output8 +=''+objec.data['typeph6']+'';
							
							}else if (objec.data['typeph6']==1){
								output8 +=''+objec.data['typeph6']+'';
							
							}else if (objec.data['typeph6']==2){
								output8 +=''+objec.data['typeph6']+'';
							
							}else if (objec.data['typeph6']==3){
								output8 +=''+objec.data['typeph6']+'';
							
							}else if (objec.data['typeph6']==4){
								output8 +=''+objec.data['typeph6']+'';
							
							}else if (objec.data['typeph6']==5){
								output8 +=''+objec.data['typeph6']+'';
							
							}else if (objec.data['typeph6']==6){
								output8 +=''+objec.data['typeph6']+'';
							
							}else if (objec.data['typeph6']==7){
								output8 +=''+objec.data['typeph6']+'';
																																														
							}
							
							//ADDRESS
							if (objec.data['typeaddress1']==0){
								output9 +=''+objec.data['typeaddress1']+'';
								//output1 +='<option value="'+office+'">'+office+'</option>';
							}else if (objec.data['typeaddress1']==1){
								output9 +=''+objec.data['typeaddress1']+'';
								//output1 +='<option value="'+home+'">'+home+'</option>';
							}
								
							if (objec.data['typeaddress2']==0){
								output12 +=''+objec.data['typeaddress2']+'';
								//output2 +='<option value="'+office+'">'+office+'</option>';
							}else if (objec.data['typeaddress2']==1){
								output12 +=''+objec.data['typeaddress2']+'';
								//output2 +='<option value="'+home+'">'+home+'</option>';
							}
							
							
							$("#typeagent select").append(output);
							//$('#typ').val(output).selectmenu('refresh');	
							//$('#typ').selectmenu('refresh');
							
							var contac = objec.data['agent'];
							document.getElementById ("agen").value=contac;
							//$("#agen").val(objec.data['agent']);
							
							var company = objec.data['company'];
							document.getElementById ("company").value=company;
							
							$("#email1 select").append(output1);
							var email1 = objec.data['email'];
							document.getElementById ("ema1").value=email1;
							
							$("#email2 select").append(output2);
							var email2 = objec.data['email2'];
							document.getElementById ("ema2").value=email2;
							
							$("#website1 select").append(output10);
							var web1 = objec.data['urlsend'];
							document.getElementById ("web1").value=web1;
							
							$("#website2 select").append(output11);
							var web2 = objec.data['urlsend2'];
							document.getElementById ("ema2").value=web2;
							
							$("#phone1 select").append(output3);
							$('#phon1').val(output3).selectmenu('refresh');							
							var phone1 = objec.data['phone1'];
							console.log(phone1);
							if (phone1!=null){
								if(phone1!=''){
									document.getElementById ("pho1").value=phone1;
									var cel1='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone1+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
									$("#phone1ii").html(cel1);
									
								}
							}
						
							$("#phone2 select").append(output4);
							//$('#phon2').selectmenu('refresh', true);
							$('#phon2').val(output4).selectmenu('refresh');
							
							var phone2 = objec.data['phone2'];
							if (phone2!=null){
								if(phone2!=''){
									document.getElementById ("pho2").value=phone2;
									var cel2='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone2+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
									$("#phone2ii").html(cel2);
									
								}
							}
							
							$("#phone3 select").append(output5);
							var phone3 = objec.data['phone3'];
							if (phone3!=null){
								if(phone3!=''){
									document.getElementById ("pho3").value=phone3;
									var cel3='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone3+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
									$("#phone3ii").html(cel3);
									//document.getElementById('telf3').style.display = "block";
									//document.getElementById('telf3').style.width = "20px";								
								}
							}
							
							$("#phone4 select").append(output6);
							$('#phon4').val(output6).selectmenu('refresh');
							var phone4 = objec.data['phone4'];
							if (phone4!=null){
								if(phone4!=''){
									document.getElementById ("pho4").value=phone4;
									var cel4='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone4+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
									$("#phone4ii").html(cel4);
									//document.getElementById('telf4').style.display = "block";
									//document.getElementById('telf4').style.width = "20px";								
								}
							}
							
							$("#phone5 select").append(output7);
							$('#phon5').val(output7).selectmenu('refresh');
							var phone5 = objec.data['phone5'];
							if (phone5!=null){	
								if(phone5!=''){
									document.getElementById ("pho5").value=phone5;
									var cel5='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone5+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
									$("#phone5ii").html(cel5);
									//document.getElementById('telf5').style.display = "block";
									//document.getElementById('telf5').style.width = "20px";								
								}
							}
							
							$("#phone6 select").append(output8);
							$('#phon6').val(output8).selectmenu('refresh');
							var phone6 = objec.data['phone6'];
							if (phone6!=null){	
								if(phone6!=''){
									document.getElementById ("pho6").value=phone6;
									var cel6='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone6+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
									$("#phone6ii").html(cel6);
																
								}
							}
							
							$("#address1 select").append(output9);
							var address1 = objec.data['address1'];
							document.getElementById ("addr1").value=address1;
							
							$("#address2 select").append(output9);
							var address2 = objec.data['address2'];
							document.getElementById ("addr2").value=address2;
							
					}else{
						alert('else obj');
					}					
				
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
		
}


function getAgentCall(id){

	var pid='';
	var principal   = "";					
	var output   = "";					
	var output1  = "";
	var output2  = "";
	var output3  = "";
	var output4  = "";
	var output5  = "";
	var output6  = "";
	var output7  = "";
	var output8  = "";
	var output9  = "";
	var output10 = "";
	var output11 = "";
	var output12 = "";
	var output13 = "";
	var output14 = "";
	var output15 = "";
	var output16 = "";
	var output17 = "";
	var output18 = "";
	var output19 = "";
	var output20 = "";
	var output21 = "";
	var output22 = "";
	var output23 = "";
	var output24 = "";
	var output25 = "";
	var output26 = "";
	var output27 = "";
	var idout    = "";			
	var all="ALL";
	var agent   ="Agent";
	var buyer   ="Buyer";
	var seller  ="Seller";
	var loan    ="Loan Officer";
	var hard    ="Hard Money Lender";
	var title   ="Title Company";
	var lawyer  ="Lawyer";
	var client  ="Client";
	var broker  ="Broker";
	var general ="General Contractor";
	var other   ="Other";
	var coach   ="Coach";
	var shortsale="Short Sale Negotiator";
	var princ='';
	var posi='';
	
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	if (id==''){
		
		var id = JSON.parse(localStorage.getItem('key'));
		pid=id.parcelid;
		//alert(pid);
	}else{
		var i
		//alert('cargando'+id);
		//var id = JSON.parse(localStorage.getItem('key'));
		pid=id;
		//alert(pid);
		//pid = id.join();
	}
	var thumb = "http://www.reifax.com/FollowupReifax/img/phone-68-48.png";
	$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: 'POST',
			data: { 
			'type': 'assignment',
			'userid': userid,
			'pid': pid												
			}}).done(function (data){					
				//alert(data);					
				var obj2 = JSON.parse(data);
					//console.debug(obj2.records);
					var total=obj2.total;
					
					if(obj2.success) {								 
						
						//console.debug(obj2.success);
						var j= 0;
						contactArray = new Array();
						$.each(obj2.records, function( key, value ) {
							var datos = new Array();
							var valor = new Array();
							var i=0;
							var i2=0;
							var k=0;
							contactCadena = '{\"';
							$.each( value, function ( userkey, uservalue) {								
								if(userkey=='principal' || userkey=='agentid' || userkey=='agenttype' || userkey=='typeemail1' || 
								userkey=='typeemail2' || userkey=='typeurl1' || userkey=='typeurl2' || 
								userkey=='typeph1' || userkey=='typeph2' || userkey=='typeph3' ||
								userkey=='typeph4' || userkey=='typeph5' || userkey=='typeph6' ||
								userkey=='typeaddress1' || userkey=='typeaddress2' || userkey=='agent' ||
								userkey=='company' || userkey=='email' || userkey=='email2' ||
								userkey=='urlsend' || userkey=='urlsend2' || userkey=='phone1' ||
								userkey=='phone2' || userkey=='phone3' || userkey=='phone4' ||
								userkey=='phone5' || userkey=='phone6' || userkey=='address1' || userkey=='address2'){
									datos[userkey]=uservalue;
									valor[i++]=userkey;
																
								}

								if (k!= 0)
								contactCadena += '","';
								contactCadena += [userkey + "\":\"" + uservalue];
								k++;
								
							
							});
							contactCadena += "\"}";
							
							//console.log(contactCadena);
							contactArray[j++] = contactCadena;
							
							var principal=datos['principal'];
							
					});
					
					console.log(position); 
					console.log(posi);
					pos=obj2.total-1;
					console.log(pos);
					
				if (position<obj2.total){
						console.log(position);
					if(position>=0){
						if ((position==0)&&(obj2.total>1)){
							$('#imgleft').show();
							$('#imgleft2').show();
							$('#imgright').hide();
							$('#imgright2').hide();
						}else if (position>0){
							console.log('mayor a 0');
							$('#imgleft').show();
							$('#imgleft2').show();
							$('#imgright').show();
							$('#imgright2').show();
						}else if (position==-1){
							console.log('imag -1');
							$('#imgleft').hide();
							$('#imgleft2').hide();
							$('#imgright').show();
							$('#imgright2').show();
						}else if (position==-2){
							$('#imgleft').show();
							$('#imgleft2').show();
							$('#imgright').hide();
							$('#imgright2').hide();
						}else if((position==0)&&(obj2.total==1)){
							$('#imgleft').hide();
							$('#imgleft2').hide();
							$('#imgright').hide();
							$('#imgright2').hide();
						}
						
						
						console.log('dentro de position'+position);
						var object1 = JSON.parse(contactArray[position]);
						output +=''+object1.agenttype+'';						
						output1 +=''+object1.typeemail1+'';
						output2 +=''+object1.typeemail2+'';
						output3 +=''+object1.typeph1+'';
						output4 +=''+object1.typeph2+'';
						output5 +=''+object1.typeph3+'';
						output6 +=''+object1.typeph4+'';
						output7 +=''+object1.typeph5+'';
						output8 +=''+object1.typeph6+'';
						output9 +=''+object1.typeaddress1+'';
						output10 +=''+object1.typeurl1+'';
						output11 +=''+object1.typeurl2+'';
						output12 +=''+object1.typeaddress2+'';
							
						output13 +=''+object1.agent+'';
						output14 +=''+object1.company+'';
						output15 +=''+object1.email+'';
						output16 +=''+object1.email2+'';
						output17 +=''+object1.phone1+'';
						output18 +=''+object1.phone2+'';
						output19 +=''+object1.phone3+'';
						output20 +=''+object1.phone4+'';
						output21 +=''+object1.phone5+'';
						output22 +=''+object1.phone6+'';
						output23 +=''+object1.urlsend+'';
						output24 +=''+object1.urlsend2+'';
						output25 +=''+object1.address1+'';
						output26 +=''+object1.address2+'';
						output27 +=''+object1.agentid+'';
						
						/*console.log(output13);
							
						//$('#typ').val(output).selectmenu('refresh');
						$("#typeagent select").append(output);
						//$('#typeagent').selectmenu('refresh', true);	
						//$('#typ').val(output).selectmenu('refresh');	*/
							
						var agentid= output27;
						var objectt = { 'agentid' : agentid };
						localStorage.setItem('agentid', JSON.stringify(objectt));
							
						var contac = output13;
						document.getElementById ("agen").value=contac;
							
						$("#typeagent select").append(output);
							
						//$('#emai1').val(output1).selectmenu('refresh');
						$("#email1 select").append(output1);
						var email1 = output15;
						if (email1!='null'){
							document.getElementById ("ema1").value=email1;
						}
							
						$("#email2 select").append(output1);
						var email2 = output16;
						if (email2!='null'){
							document.getElementById ("ema2").value=email2;
						}
							
						var company = output14;
						if (company!='null'){
							document.getElementById ("company").value=company;
						}
							
						$("#website1 select").append(output10);
						var web1 = output23;
						if (web1!='null'){
							document.getElementById ("web1").value=web1;
						}
							
						$("#website2 select").append(output11);
						var web2 = output24;
						if (web2!='null'){
							document.getElementById ("ema2").value=web2;
						}
							
						$("#phone1 select").append(output3);
						$('#phon1').val(output3).selectmenu('refresh');							
						var phone1 = output17;
						console.log(phone1);
						if (phone1!='null'){
							if(phone1!=''){
								document.getElementById ("pho1").value=phone1;
								var cel1='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone1+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone1ii").html(cel1);									
							}
						}
						
						$("#phone2 select").append(output4);
						//$('#phon2').selectmenu('refresh', true);
						$('#phon2').val(output4).selectmenu('refresh');							
						var phone2 = output18;
						if (phone2!='null'){
							if(phone2!=''){
								document.getElementById ("pho2").value=phone2;
								var cel2='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone2+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone2ii").html(cel2);
									
							}
						}
							
						$("#phone3 select").append(output5);
						var phone3 = output19;
						if (phone3!='null'){
							if(phone3!=''){
								document.getElementById ("pho3").value=phone3;
								var cel3='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone3+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone3ii").html(cel3);
								//document.getElementById('telf3').style.display = "block";
								//document.getElementById('telf3').style.width = "20px";								
							}
						}
							
						$("#phone4 select").append(output6);
						$('#phon4').val(output6).selectmenu('refresh');
						var phone4 = output20;
						if (phone4!='null'){
							if(phone4!=''){
								document.getElementById ("pho4").value=phone4;
								var cel4='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone4+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone4ii").html(cel4);
														
							}
						}
							
						$("#phone5 select").append(output7);
						$('#phon5').val(output7).selectmenu('refresh');
						var phone5 = output21;
						if (phone5!='null'){	
							if(phone5!=''){
								document.getElementById ("pho5").value=phone5;
								var cel5='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone5+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone5ii").html(cel5);
															
							}
						}
							
						$("#phone6 select").append(output8);
						$('#phon6').val(output8).selectmenu('refresh');
						var phone6 = output22;
						if (phone6!='null'){	
							if(phone6!=''){
								document.getElementById ("pho6").value=phone6;
								var cel6='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone6+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone6ii").html(cel6);
								//document.getElementById('telf6').style.display = "block";
								//document.getElementById('telf6').style.width = "20px";								
							}
						}
							
						$("#address1 select").append(output9);
						var address1 = output25;
						if (address1!='null'){
							document.getElementById ("addr1").value=address1;
						}
							
						$("#address2 select").append(output9);
						var address2 = output26;
						if (address2!='null'){
							document.getElementById ("addr2").value=address2;
						}
						
					}
						//position -1 y -2
					if(position==-2){
					
						$('#imgleft').show();
						$('#imgleft2').show();
						$('#imgright').hide();
						$('#imgright2').hide();
						position=0;
						console.log(position);
						console.log('dentro de position'+position);
						var object1 = JSON.parse(contactArray[0]);
						output +=''+object1.agenttype+'';						
						output1 +=''+object1.typeemail1+'';
						output2 +=''+object1.typeemail2+'';
						output3 +=''+object1.typeph1+'';
						output4 +=''+object1.typeph2+'';
						output5 +=''+object1.typeph3+'';
						output6 +=''+object1.typeph4+'';
						output7 +=''+object1.typeph5+'';
						output8 +=''+object1.typeph6+'';
						output9 +=''+object1.typeaddress1+'';
						output10 +=''+object1.typeurl1+'';
						output11 +=''+object1.typeurl2+'';
						output12 +=''+object1.typeaddress2+'';
							
						output13 +=''+object1.agent+'';
						output14 +=''+object1.company+'';
						output15 +=''+object1.email+'';
						output16 +=''+object1.email2+'';
						output17 +=''+object1.phone1+'';
						output18 +=''+object1.phone2+'';
						output19 +=''+object1.phone3+'';
						output20 +=''+object1.phone4+'';
						output21 +=''+object1.phone5+'';
						output22 +=''+object1.phone6+'';
						output23 +=''+object1.urlsend+'';
						output24 +=''+object1.urlsend2+'';
						output25 +=''+object1.address1+'';
						output26 +=''+object1.address2+'';
						output27 +=''+object1.agentid+'';
						
							
						var agentid= output27;
						var objectt = { 'agentid' : agentid };
						localStorage.setItem('agentid', JSON.stringify(objectt));
							
						var contac = output13;
						document.getElementById ("agen").value=contac;
							
						$("#typeagent select").append(output);
							
						//$('#emai1').val(output1).selectmenu('refresh');
						$("#email1 select").append(output1);
						var email1 = output15;
						if (email1!='null'){
							document.getElementById ("ema1").value=email1;
						}
							
						$("#email2 select").append(output1);
						var email2 = output16;
						if (email2!='null'){
							document.getElementById ("ema2").value=email2;
						}
							
						var company = output14;
						if (company!='null'){
							document.getElementById ("company").value=company;
						}
							
						$("#website1 select").append(output10);
						var web1 = output23;
						if (web1!='null'){
							document.getElementById ("web1").value=web1;
						}
							
						$("#website2 select").append(output11);
						var web2 = output24;
						if (web2!='null'){
							document.getElementById ("ema2").value=web2;
						}
							
						$("#phone1 select").append(output3);
						$('#phon1').val(output3).selectmenu('refresh');							
						var phone1 = output17;
						console.log(phone1);
						if (phone1!='null'){
							if(phone1!=''){
								document.getElementById ("pho1").value=phone1;
								var cel1='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone1+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone1ii").html(cel1);									
							}
						}
						
						$("#phone2 select").append(output4);
						//$('#phon2').selectmenu('refresh', true);
						$('#phon2').val(output4).selectmenu('refresh');							
						var phone2 = output18;
						if (phone2!='null'){
							if(phone2!=''){
								document.getElementById ("pho2").value=phone2;
								var cel2='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone2+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone2ii").html(cel2);
									
							}
						}
							
						$("#phone3 select").append(output5);
						var phone3 = output19;
						if (phone3!='null'){
							if(phone3!=''){
								document.getElementById ("pho3").value=phone3;
								var cel3='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone3+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone3ii").html(cel3);
								//document.getElementById('telf3').style.display = "block";
								//document.getElementById('telf3').style.width = "20px";								
							}
						}
							
						$("#phone4 select").append(output6);
						$('#phon4').val(output6).selectmenu('refresh');
						var phone4 = output20;
						if (phone4!='null'){
							if(phone4!=''){
								document.getElementById ("pho4").value=phone4;
								var cel4='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone4+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone4ii").html(cel4);
								//document.getElementById('telf4').style.display = "block";
								//document.getElementById('telf4').style.width = "20px";								
							}
						}
							
						$("#phone5 select").append(output7);
						$('#phon5').val(output7).selectmenu('refresh');
						var phone5 = output21;
						if (phone5!='null'){	
							if(phone5!=''){
								document.getElementById ("pho5").value=phone5;
								var cel5='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone5+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone5ii").html(cel5);
								//document.getElementById('telf5').style.display = "block";
								//document.getElementById('telf5').style.width = "20px";								
							}
						}
							
						$("#phone6 select").append(output8);
						$('#phon6').val(output8).selectmenu('refresh');
						var phone6 = output22;
						if (phone6!='null'){	
							if(phone6!=''){
								document.getElementById ("pho6").value=phone6;
								var cel6='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone6+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone6ii").html(cel6);
								//document.getElementById('telf6').style.display = "block";
								//document.getElementById('telf6').style.width = "20px";								
							}
						}
							
						$("#address1 select").append(output9);
						var address1 = output25;
						if (address1!='null'){
							document.getElementById ("addr1").value=address1;
						}
							
						$("#address2 select").append(output9);
						var address2 = output26;
						if (address2!='null'){
							document.getElementById ("addr2").value=address2;
						}
					}
					
					if(position==-1){
						$('#imgleft').hide();
						$('#imgleft2').hide();
						$('#imgright').show();
						$('#imgright2').show();
						console.log(obj2.total);
						position=obj2.total-1;
						console.log('dentro de position'+pos);
						var object1 = JSON.parse(contactArray[pos]);
						output +=''+object1.agenttype+'';						
						output1 +=''+object1.typeemail1+'';
						output2 +=''+object1.typeemail2+'';
						output3 +=''+object1.typeph1+'';
						output4 +=''+object1.typeph2+'';
						output5 +=''+object1.typeph3+'';
						output6 +=''+object1.typeph4+'';
						output7 +=''+object1.typeph5+'';
						output8 +=''+object1.typeph6+'';
						output9 +=''+object1.typeaddress1+'';
						output10 +=''+object1.typeurl1+'';
						output11 +=''+object1.typeurl2+'';
						output12 +=''+object1.typeaddress2+'';
							
						output13 +=''+object1.agent+'';
						output14 +=''+object1.company+'';
						output15 +=''+object1.email+'';
						output16 +=''+object1.email2+'';
						output17 +=''+object1.phone1+'';
						output18 +=''+object1.phone2+'';
						output19 +=''+object1.phone3+'';
						output20 +=''+object1.phone4+'';
						output21 +=''+object1.phone5+'';
						output22 +=''+object1.phone6+'';
						output23 +=''+object1.urlsend+'';
						output24 +=''+object1.urlsend2+'';
						output25 +=''+object1.address1+'';
						output26 +=''+object1.address2+'';
						output27 +=''+object1.agentid+'';
						
						/*console.log(output13);
							
						//$('#typ').val(output).selectmenu('refresh');
						$("#typeagent select").append(output);
						//$('#typeagent').selectmenu('refresh', true);	
						//$('#typ').val(output).selectmenu('refresh');	*/
							
						var agentid= output27;
						var objectt = { 'agentid' : agentid };
						localStorage.setItem('agentid', JSON.stringify(objectt));
							
						var contac = output13;
						document.getElementById ("agen").value=contac;
							
						$("#typeagent select").append(output);
							
						//$('#emai1').val(output1).selectmenu('refresh');
						$("#email1 select").append(output1);
						var email1 = output15;
						if (email1!='null'){
							document.getElementById ("ema1").value=email1;
						}
							
						$("#email2 select").append(output1);
						var email2 = output16;
						if (email2!='null'){
							document.getElementById ("ema2").value=email2;
						}
							
						var company = output14;
						if (company!='null'){
							document.getElementById ("company").value=company;
						}
						
						$("#website1 select").append(output10);
						var web1 = output23;
						if (web1!='null'){
							document.getElementById ("web1").value=web1;
						}
							
						$("#website2 select").append(output11);
						var web2 = output24;
						if (web2!='null'){
							document.getElementById ("ema2").value=web2;
						}
							
						$("#phone1 select").append(output3);
						$('#phon1').val(output3).selectmenu('refresh');							
						var phone1 = output17;
						console.log(phone1);
						if (phone1!='null'){
							if(phone1!=''){
								document.getElementById ("pho1").value=phone1;
								var cel1='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone1+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone1ii").html(cel1);									
							}
						}
						
						$("#phone2 select").append(output4);
						//$('#phon2').selectmenu('refresh', true);
						$('#phon2').val(output4).selectmenu('refresh');							
						var phone2 = output18;
						if (phone2!='null'){
							if(phone2!=''){
								document.getElementById ("pho2").value=phone2;
								var cel2='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone2+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone2ii").html(cel2);
									
							}
						}
							
						$("#phone3 select").append(output5);
						var phone3 = output19;
						if (phone3!='null'){
							if(phone3!=''){
								document.getElementById ("pho3").value=phone3;
								var cel3='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone3+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone3ii").html(cel3);
								//document.getElementById('telf3').style.display = "block";
								//document.getElementById('telf3').style.width = "20px";								
							}
						}
							
						$("#phone4 select").append(output6);
						$('#phon4').val(output6).selectmenu('refresh');
						var phone4 = output20;
						if (phone4!='null'){
							if(phone4!=''){
								document.getElementById ("pho4").value=phone4;
								var cel4='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone4+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone4ii").html(cel4);
								//document.getElementById('telf4').style.display = "block";
								//document.getElementById('telf4').style.width = "20px";								
							}
						}
							
						$("#phone5 select").append(output7);
						$('#phon5').val(output7).selectmenu('refresh');
						var phone5 = output21;
						if (phone5!='null'){	
							if(phone5!=''){
								document.getElementById ("pho5").value=phone5;
								var cel5='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone5+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone5ii").html(cel5);
								//document.getElementById('telf5').style.display = "block";
								//document.getElementById('telf5').style.width = "20px";								
							}
						}
							
						$("#phone6 select").append(output8);
						$('#phon6').val(output8).selectmenu('refresh');
						var phone6 = output22;
						if (phone6!='null'){	
							if(phone6!=''){
								document.getElementById ("pho6").value=phone6;
								var cel6='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone6+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone6ii").html(cel6);
								//document.getElementById('telf6').style.display = "block";
								//document.getElementById('telf6').style.width = "20px";								
							}
						}
							
						$("#address1 select").append(output9);
						var address1 = output25;
						if (address1!='null'){
							document.getElementById ("addr1").value=address1;
						}
							
						$("#address2 select").append(output9);
						var address2 = output26;
						if (address2!='null'){
							document.getElementById ("addr2").value=address2;
						}
					}
				
				}else{
					console.log('por else');
					$('#imgleft').show();
					$('#imgleft2').show();
					$('#imgright').hide();
					$('#imgright2').hide();
					position=0;
					var object1 = JSON.parse(contactArray[0]);
						output +=''+object1.agenttype+'';						
						output1 +=''+object1.typeemail1+'';
						output2 +=''+object1.typeemail2+'';
						output3 +=''+object1.typeph1+'';
						output4 +=''+object1.typeph2+'';
						output5 +=''+object1.typeph3+'';
						output6 +=''+object1.typeph4+'';
						output7 +=''+object1.typeph5+'';
						output8 +=''+object1.typeph6+'';
						output9 +=''+object1.typeaddress1+'';
						output10 +=''+object1.typeurl1+'';
						output11 +=''+object1.typeurl2+'';
						output12 +=''+object1.typeaddress2+'';
							
						output13 +=''+object1.agent+'';
						output14 +=''+object1.company+'';
						output15 +=''+object1.email+'';
						output16 +=''+object1.email2+'';
						output17 +=''+object1.phone1+'';
						output18 +=''+object1.phone2+'';
						output19 +=''+object1.phone3+'';
						output20 +=''+object1.phone4+'';
						output21 +=''+object1.phone5+'';
						output22 +=''+object1.phone6+'';
						output23 +=''+object1.urlsend+'';
						output24 +=''+object1.urlsend2+'';
						output25 +=''+object1.address1+'';
						output26 +=''+object1.address2+'';
						output27 +=''+object1.agentid+'';
						
						/*console.log(output13);
							
						//$('#typ').val(output).selectmenu('refresh');
						$("#typeagent select").append(output);
						//$('#typeagent').selectmenu('refresh', true);	
						//$('#typ').val(output).selectmenu('refresh');	*/
							
						var agentid= output27;
						var objectt = { 'agentid' : agentid };
						localStorage.setItem('agentid', JSON.stringify(objectt));
							
						var contac = output13;
						document.getElementById ("agen").value=contac;
							
						$("#typeagent select").append(output);
							
						//$('#emai1').val(output1).selectmenu('refresh');
						$("#email1 select").append(output1);
						var email1 = output15;
						if (email1!='null'){
							document.getElementById ("ema1").value=email1;
						}
							
						$("#email2 select").append(output1);
						var email2 = output16;
						if (email2!='null'){
							document.getElementById ("ema2").value=email2;
						}
							
						var company = output14;
						document.getElementById ("company").value=company;
							
						$("#website1 select").append(output10);
						var web1 = output23;
						if (web1!='null'){
							document.getElementById ("web1").value=web1;
						}
							
						$("#website2 select").append(output11);
						var web2 = output24;
						if (web2!='null'){
							document.getElementById ("ema2").value=web2;
						}
							
						$("#phone1 select").append(output3);
						$('#phon1').val(output3).selectmenu('refresh');							
						var phone1 = output17;
						console.log(phone1);
						if (phone1!='null'){
							if(phone1!=''){
								document.getElementById ("pho1").value=phone1;
								var cel1='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone1+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone1ii").html(cel1);									
							}
						}
						
						$("#phone2 select").append(output4);
						//$('#phon2').selectmenu('refresh', true);
						$('#phon2').val(output4).selectmenu('refresh');							
						var phone2 = output18;
						if (phone2!='null'){
							if(phone2!=''){
								document.getElementById ("pho2").value=phone2;
								var cel2='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone2+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone2ii").html(cel2);
									
							}
						}
							
						$("#phone3 select").append(output5);
						var phone3 = output19;
						if (phone3!='null'){
							if(phone3!=''){
								document.getElementById ("pho3").value=phone3;
								var cel3='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone3+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone3ii").html(cel3);
								//document.getElementById('telf3').style.display = "block";
								//document.getElementById('telf3').style.width = "20px";								
							}
						}
							
						$("#phone4 select").append(output6);
						$('#phon4').val(output6).selectmenu('refresh');
						var phone4 = output20;
						if (phone4!='null'){
							if(phone4!=''){
								document.getElementById ("pho4").value=phone4;
								var cel4='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone4+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone4ii").html(cel4);
								//document.getElementById('telf4').style.display = "block";
								//document.getElementById('telf4').style.width = "20px";								
							}
						}
							
						$("#phone5 select").append(output7);
						$('#phon5').val(output7).selectmenu('refresh');
						var phone5 = output21;
						if (phone5!='null'){	
							if(phone5!=''){
								document.getElementById ("pho5").value=phone5;
								var cel5='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone5+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone5ii").html(cel5);
								//document.getElementById('telf5').style.display = "block";
								//document.getElementById('telf5').style.width = "20px";								
							}
						}
							
						$("#phone6 select").append(output8);
						$('#phon6').val(output8).selectmenu('refresh');
						var phone6 = output22;
						if (phone6!='null'){	
							if(phone6!=''){
								document.getElementById ("pho6").value=phone6;
								var cel6='<a style="background:transparent; border:none;margin-left:-10px;" href="tel:'+phone6+'"><img src="img/phone-68-48.png" width="25px" height="25px" /></a>'
								$("#phone6ii").html(cel6);
								//document.getElementById('telf6').style.display = "block";
								//document.getElementById('telf6').style.width = "20px";								
							}
						}
							
						$("#address1 select").append(output9);
						var address1 = output25;
						if (address1!='null'){
							document.getElementById ("addr1").value=address1;
						}
							
						$("#address2 select").append(output9);
						var address2 = output26;
						if (address2!='null'){
							document.getElementById ("addr2").value=address2;
						}
				}
				
				}else{
						alert('else obj');
					}					
				});
		
}


function addContact(){
	getAgent();
	$.mobile.changePage('#addContactoHtml');
}
function addContact2(id){
	var propid= id;
	var objectt = { 'parcelid' : propid };
	localStorage.setItem('key', JSON.stringify(objectt));
	getAgent();
	$.mobile.changePage('#addContactoHtml');
}

function pagAddHistory(pid){
	var type="B";
	var objectt = { 'parcelid' : pid };
	var objectt2 = { 'type' : type };
	localStorage.setItem('key', JSON.stringify(objectt));
	localStorage.setItem('key3', JSON.stringify(objectt2));
	$.mobile.changePage('#pagAddHistoryHtml');
}
function pagMakeCall(pid){
	var propid= pid;
	var objectt = { 'parcelid' : propid };
	localStorage.setItem('key', JSON.stringify(objectt));
	listadoContactsProperty(pid);
	$.mobile.changePage('#listadoContactsProperty');
	 
}

function pagMakeCall2(pid){
	var propid= pid;
	var objectt = { 'parcelid' : propid };
	localStorage.setItem('key', JSON.stringify(objectt));
	listadoContactsProperty(pid);
	$.mobile.changePage('#contact-tablet');
	 
}

function pagEmail(pid){
	//alert(pid);
	$("#correofollow ul").empty();	
	$("#correolistfollow ul").empty();	
	emailDetail(start,settings.limit,pid);
	$.mobile.changePage('#emailListFollow');
}

function pagSearchContact(pid){
	//alert('search contact');
	var parcelid= pid;
	var object = { 'parcelid' : parcelid };
	localStorage.setItem('key', JSON.stringify(object));
	//alert(mainloaded);
	
	if(!mainloaded) {
		//alert('loading')
		$.mobile.loading().show();	
	}
	
	listadoAllContacts(start,settings.limit);
	$.mobile.changePage('#listadoAllContacts');
	//listadoAllContacts(start,settings.limit);
	
	
}

function pagSearchContact2(pid){
	//alert('search contact');
	var parcelid= pid;
	var object = { 'parcelid' : parcelid };
	localStorage.setItem('key', JSON.stringify(object));
	//alert(mainloaded);
	
	if(!mainloaded) {
		//alert('loading')
		$.mobile.loading().show();	
	}
	
	listadoAllContacts(start,settings.limit);
	$.mobile.changePage('#contact-tablet');
	//listadoAllContacts(start,settings.limit);
	
	
}

function xdelete(){
	//alert('delete search contact');
	//$("#listadoAllContacto ul").empty();	
	listadoAllContacts(start,settings.limit);
	$.mobile.changePage('#listadoAllContacts');
	
}


function sendemail(id){
	//alert('enviando'+id);
	//console.log(id);
	var pid = id.join();
	var subj = $("input#subject").val();
	var cuerpo = $("textarea#body").val();
	var actionupload ="upload";
	
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;

		$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followsendmail.php',  
			type: "POST",
			data: { 			
			'userid': userid,
			//'action-upload': 'upload',
			'subject': subj,
			'body': cuerpo,
			'pid': pid 			
			},
			success: function(data, textStatus, jqXHR){
				alert(data);
				
				/*if(data){
					alert('properties delete');
					//location.reload(true);
				}else{
					alert('error');
				}*/
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
}	

function deleteProperty(id){
	//alert('borrando'+id);
	
	var pid = id.join();
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	//alert(pid);
		$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followup.php',  
			type: "POST",
			data: { 			
			'userid': userid,
			'userid_delete': userid,
			'type': 'delete',
			'pids': pid 			
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				if(data){
					alert('properties delete');
					//location.reload(true);
					$.mobile.changePage("#detailProperties");
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
}	

function getfilterProperty(){
		
	$("#county select").empty();
	$("#city select").empty();
	$("#xcode select").empty();
	$("#status select").empty();
	$("#altstatus select").empty();
	$("#followdate select").empty();
	
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;

	//AJAX COUNTY
				$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followup.php',  
				type: 'POST',
				data: { 
				'type': 'load-countys', 				
				'userid': userid								
				}}).done(function (data){					
					//alert(data);					
					var obj2 = JSON.parse(data);
					//console.debug(obj2);
					if(obj2.success) {								 
						var output = "";
						var all="ALL";
						//console.debug(obj2.success);
						$.each(obj2.results, function( key, value ) {
							var datos = new Array();
							var valor = new Array();
							var i=0;
							//console.debug(obj2.results);
							$.each( value, function ( userkey, uservalue) {								
								if(userkey=='county' || userkey=='valor'){
									datos[userkey]=uservalue;
									valor[i++]=userkey;
									//console.debug(userkey);									
								}									
							});
							if (datos['valor']=='ALL'){
								output +='<option value="'+datos['valor']+'">'+all+'</option>';	
							}else{
								output +='<option value="'+datos['valor']+'">'+datos['county']+'</option>';	
							}							
						});
						                                              
						$("#county select").append(output);													
					}else{
						alert('else obj');
					}					
				});
				
				//AJAX CITY
				$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followup.php',  
				type: 'POST',
				data: { 
				'type': 'load-citys', 				
				'userid': userid								
				}}).done(function (data){					
				//alert(data);					
					var obj2 = JSON.parse(data);
					//console.debug(obj2);
					if(obj2.success) {								 
						var output = "";
						var all="ALL";
						//console.debug(obj2.success);
						$.each(obj2.results, function( key, value ) {
							var datos = new Array();
							var valor = new Array();
							var i=0;
							//console.debug(obj2.results);
							$.each( value, function ( userkey, uservalue) {								
								if(userkey=='city' || userkey=='valor'){
									datos[userkey]=uservalue;
									valor[i++]=userkey;
									//console.debug(userkey);									
								}									
							});
							if (datos['valor']=='ALL'){
								output +='<option value="'+datos['valor']+'">'+all+'</option>';	
							}else{
								output +='<option value="'+datos['valor']+'">'+datos['city']+'</option>';	
							}							
						});
							
							$("#city select").append(output);													
					}else{
						alert('else obj');
					}					
				});
				
				//AJAX XCODE
				$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followup.php',  
				type: 'POST',
				data: { 
				'type': 'load-xcodes', 				
				'userid': userid								
				}}).done(function (data){					
					//alert(data);					
					var obj2 = JSON.parse(data);
					//console.debug(obj2);
					if(obj2.success) {								 
						var output = "";
						var all="ALL";
						var singleFamily ="Single Family";
						var condo ="Condo/Town/Villa";
						var multiFamily1="Multi Family +10";
						var multiFamily2="Multi Family -10";
						var commercial="Commercial";
						var vacant ="Vacant Land";
						var mobileHome="Mobile Home";
						other="Other";
						//console.debug(obj2.success);
						$.each(obj2.results, function( key, value ) {
							var datos = new Array();
							var valor = new Array();
							var i=0;
							//console.debug(obj2.results);
							$.each( value, function ( userkey, uservalue) {								
								if(userkey=='xcode' || userkey=='valor'){
									datos[userkey]=uservalue;
									valor[i++]=userkey;
									///console.debug(userkey);									
								}									
							});
							if (datos['valor']=='ALL'){
								output +='<option value="'+datos['valor']+'">'+all+'</option>';	
							}else{
								if(datos['xcode']=='01'){
									output +='<option value="'+datos['valor']+'">'+singleFamily+'</option>';									
								}else if(datos['xcode']=='04'){
									output +='<option value="'+datos['valor']+'">'+condo+'</option>';
								}else if(datos['xcode']=='03'){
								output +='<option value="'+datos['valor']+'">'+multiFamily1+'</option>';									
								}else if(datos['xcode']=='08'){
									output +='<option value="'+datos['valor']+'">'+multiFamily2+'</option>';									
								}else if(datos['xcode']=='11'){
									output +='<option value="'+datos['valor']+'">'+commercial+'</option>';									
								}else if(datos['xcode']=='00'){
								output +='<option value="'+datos['valor']+'">'+vacant+'</option>';									
								}else if(datos['xcode']=='02'){
								output +='<option value="'+datos['valor']+'">'+mobileHome+'</option>';									
								}else if(datos['xcode']=='99'){
								output +='<option value="'+datos['valor']+'">'+other+'</option>';									
								}
								
								
							}							
						});
							
							$("#xcode select").append(output);													
					}else{
						alert('else obj');
					}					
				});
				
				//AJAX ALT STATUS
				$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followup.php',  
				type: 'POST',
				data: { 
				'type': 'get-alt-status',
				'userid': userid,
				'onlyStatus': true
												
				}}).done(function (data){					
					//alert(data);					
					var obj2 = JSON.parse(data);
					//console.debug(obj2);
					if(obj2.success) {								 
						var output = "";
						var all="ALL";						
						//console.debug(obj2.success);
						$.each(obj2.results, function( key, value ) {
							var datos = new Array();
							var valor = new Array();
							var i=0;
							//console.debug(obj2.results);
							$.each( value, function ( userkey, uservalue) {								
								if(userkey=='code' || userkey=='status'){
									datos[userkey]=uservalue;
									valor[i++]=userkey;
									//console.debug(userkey);									
								}									
							});
							if (datos['code']=='ALL'){
								output +='<option value="'+all+'">'+all+'</option>';	
							}else{
								output +='<option value="'+datos['status']+'">'+datos['status']+'</option>';	
							}							
						});
							
							$("#altstatus select").append(output);													
					}else{
						alert('else obj');
					}					
				});
				
				//STATUS
				var out="";
				var all="ALL";
				var active="Active";
				var noactive="No-Active";
				var sold="Sold";
				var forsale="Not For Sale";
				
					out +='<option value="'+all+'">'+all+'</option>';	
					out +='<option value="'+active+'">'+active+'</option>';
					out +='<option value="'+noactive+'">'+noactive+'</option>';
					out +='<option value="'+sold+'">'+sold+'</option>';
					out +='<option value="'+forsale+'">'+forsale+'</option>';
					
				$("#status select").append(out);
				
				//FOLLOW DATE
				var outp="";				
				var equal="Equal";
				var greater="Greater Than";
				var less="Less Than";
				var equal_less="Equal or Less";
				var equal_greater="Equal or Greater";
				var Between="Between";
				
						
					outp +='<option value="'+equal+'">'+equal+'</option>';
					outp +='<option value="'+greater+'">'+greater+'</option>';
					outp +='<option value="'+less+'">'+less+'</option>';
					outp +='<option value="'+equal_less+'">'+equal_less+'</option>';
					outp +='<option value="'+equal_greater+'">'+equal_greater+'</option>';
					
					outp +='<option value="'+Between+'">'+Between+'</option>';
					
				$("#followdate select").append(outp);
				
				

}


function longProperties(id,pushh){
	
	
	if(checkid.length==0){
				
		var ch= checkid.push(id);
		//alert(ch);
				
		document.getElementById('primero'+id).style.background = '#A9D0F5';
		document.getElementById('primero'+id).style.borderBottom = '2px solid #ccc;';
		
		document.getElementById('header_two').style.display = "block";
						
		var div = document.createElement("div");
		//div.style.width = "40px";
		div.style.height = "40px";
		div.style.background = "gray";
		div.style.color = "white";
		div.style.marginTop="-40px";
		div.style.textAlign = "right";
		//div.className = "logo";
		div.id = "logo";
				
		var div2 = document.getElementById("header_two"); 
		// agregamos la imagen
		div2.appendChild(div);
			   
		$(".box").hide();	   
		$(".box2").hide();	   
		$(".box3").hide();	   
			   
		//crear ancla para Aceptar
		var ace = document.createElement("a");
		//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
		ace.className ='box3 ui-btn excecute ui-first-child ui-last-child';
		ace.style.marginRight = "250px";
		ace.style.marginTop = "2px";
		ace.style.height = "35px";
		//ace.setAttribute("href","#menuProperty");
		ace.onclick = function(){
			//alert('aceptar');
			document.getElementById('header_two').style.display = "none";
			//location.reload(true);
			div2.removeChild(div);
			var idaux=0;
			//alert("entre por else");
			//alert(checkid.length);
			for(i=0;i<checkid.length;i++){
				//alert("test"+id);			 
				if(checkid[i] == id){ 
					idaux = id;
				}			 
			}
		
			if(idaux == id){ 
				//alert("si lo encontro");
						
				for(i=0;i<checkid.length;i++){ 
					//alert("encontrado");  
					var checkid_old=""+checkid;
					var myarray = checkid_old.split(",");
								
					//aki quiero borrar vector[i] 								
					function removeByIndex(checkid, id) {
						checkid.splice(id, checkid[i]); //nro de elemento checkid[i]
					}
					  
					//alert("Array before removing elements: "+checkid);
					removeByIndex(checkid, i);
								
					for (var f = 0, len = myarray.length; f<len;f++){
						document.getElementById('primero'+myarray[f]).style.backgroundColor = 'transparent';
					}
					//alert("Array after removing elements: "+checkid);
								
					document.getElementById('header_two').style.display = "none";
					document.getElementById('logo').style.display = "none";
								
					div2.removeChild(div);
				   
					//fin aki				  
					//}
									
				}				
			
			}else{
					
				checkid.push(id);
						
				//alert(checkid+'else');
				document.getElementById('primero'+id).style.background = '#A9D0F5';
				
				
						
			}
		};
				
				
		var src = document.getElementById("logo");
				
		src.appendChild(ace);
				
		//crear ancla de menu por propiedad
		var a = document.createElement("a");
		//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
		a.className ='box2 ui-btn excecute ui-first-child ui-last-child';
		a.style.marginLeft = "6px";
		a.style.marginTop = "2px";
		a.style.height = "35px";
		//a.setAttribute("href","#");
		a.onclick = function(){
			//alert('deleteP');
			deleteProperty(checkid);
		};
		var src = document.getElementById("logo");
		src.appendChild(a);
				
		//crear ancla para delete
		var del = document.createElement("a");
		//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
		del.className ='box ui-btn excecute ui-first-child ui-last-child';
		del.style.marginLeft = "6px";
		del.style.marginTop = "2px";
		del.style.height = "35px";
		del.setAttribute("href","#menuProperty");
		del.onclick = function(){
			//alert('click menu');
		};
		var src = document.getElementById("logo");
		src.appendChild(del);
				
		document.getElementById('logo').style.display = "block";
		//document.body.appendChild(div);
				
	}else{
		var idaux=0;
		if (pushh==false){
			//alert(checkid.length);
			for(i=0;i<checkid.length;i++){
				//alert("test1"+id);			 
				if(checkid[i] == id){ 
					idaux = id;
				}			 
			}
		}	
		if(idaux == id){ 
			//alert("si lo encontro2");
			
			if (selec==true){
				for(i=0;i<checkid.length;i++){ 
					if(checkid[i] == id){ 
						//alert("encontrado2"); 
						//alert(checkid[i]); 
						var checkid_old=""+checkid;
						var myarray = checkid_old.split(",");
								
						//aki quiero borrar vector[i] 
						function removeByIndex(checkid, id) {
							checkid.splice(id, checkid[i]); //nro de elemento checkid[i]
						}
					  
						//alert("Array before removing elements: "+checkid);
						removeByIndex(checkid, i);
						
							
						for (var f = 0, len = myarray.length; f<len;f++){
							document.getElementById('primero'+myarray[f]).style.backgroundColor = 'transparent';
		
						}
								
						//alert("Array after removing elements: "+checkid);
							
						document.getElementById('header_two').style.display = "none";
						document.getElementById('logo').style.display = "none";
									
						//div2.removeChild(div);
						//fin aki				  
					}
						
						//alert(checkid);				
				}	
			}else{
				$.mobile.changePage( "#detailProperties");
				//var checkid_old=""+checkid;
				//var myarray = checkid_old.split(",");
								
				//document.getElementById('primero'+id).style.background = 'transparent';
		
			}
		
		}else{

			if (pushh==true){
				//alert('true none');
				document.getElementById('header_two').style.display = "none";
				document.getElementById('logo').style.display = "none";
				checkid=[];
				var selec=true;
			}else{		
				//alert('false block');
				var ch =checkid.push(id);				
				document.getElementById('primero'+id).style.background = '#A9D0F5';
				document.getElementById('primero'+id).style.borderBottom = '2px solid #ccc;';
				var selec=false;
			}
			
					
		}
				
		//alert(checkid);		
					
	}

}

 

function listadoProperty(start, limit){

	//AJAX LISTADO PROPIEDADES
		//alert(start);
		//var start = 0; 
		//var limit = 25; 
		//$("#content ul").empty();	
		
		$("#coun").prop("selected", true);
		 var county 	= $("#coun option:selected").val();
		 //alert(county);
		$("#cit").prop("selected", true);
		var city 	= $("#cit option:selected").val();
		$("#xcod").prop("selected", true);
		var xcode 	= $("#xcod option:selected").val();
		//alert(xcode);
		$("#st").prop("selected", true);
		var status 	= $("#st option:selected").val();
		//alert(status);
		if (status=='No-Active'){
			status='NA'
		}else if (status=='Active'){
			status='A'
		}else if (status=='Sold'){
			status='S'
		}else if (status=='Not For Sale'){
			status='NFS'
		}
		//alert(status);
		$("#altst").prop("selected", true);
		var altsta 	= $("#altst option:selected").val();
		//alert(altsta);
			
		$("#folldate").prop("selected", true);
		var folldate = $("#folldate option:selected").val();
			
					
		var address = $("input#address").val();
		var zip = $("input#zip").val();
		var agent = $("input#contact").val();
		
		
		
		var typefollow="(B,S)"
		//alert(typefollow);
		busy=true;
		//alert(device);
		
		//var userid=3213;
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
	
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followup.php',  
			type: 'POST',
		   data: { 
			'typeFollow': 'B', 
			'userid': userid,
			'address': address,
			'zip': zip,
			'agent': agent,
			'county': county,
			'city': city,
			'xcode': xcode,	
			'status': status,
			'statusalt': altsta,
			'sort': 'followdate', 
			'dir': 'DESC', 
			'start':start,
			'limit':limit
			}
		}).done(function (data){
			//alert(data);
			busy=false;
			load=true;
			var obj = JSON.parse(data);
			//alert(obj.success);
			if(obj.success) {
					      
                var output = "";
                var output1 = "";
				var no="NO";
				var none="None";
				
                //recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
                $.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada propiedad
					
					var datos = new Array();
					var valor = new Array();
					var i=0;
					
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='type' || userkey=='followdate' || userkey=='address' || userkey=='zip' || 
						   userkey=='unit' || userkey=='status' || userkey=='agent' || userkey=='statusalt' || 
						   userkey=='financial' || userkey=='lprice' || userkey=='offer' || userkey=='msj' || 
						   userkey=='pid' || userkey=='dom' || userkey=='contract' || userkey=='pof' || 
						   userkey=='emd' || userkey=='rademdums' || userkey=='offerreceived' || userkey=='owner' ||
						   userkey=='county'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);
						}
									
                    });
					
					
					var price = accounting.formatMoney(datos['lprice'], "$", 0);
					var offer = accounting.formatMoney(datos['offer'], "$", 0);
					
					var year = moment(datos['followdate']).format('YYYY');
					
					if (year>=2015){
					var datefollow = moment(datos['followdate']).format('DD MMM');
					}else if (year<2015){
					var datefollow = moment(datos['followdate']).format('MM/DD/YY');
					}
					
					
				output += '<li id="primero'+datos['pid']+'" parcelid="'+datos['pid']+'" type="'+datos['type']+'" offer="'+datos['offer']+'" owner="'+datos['owner']+'" county="'+datos['county']+'" style="list-style:none;border-bottom: 2px solid #ccc;margin-top:-10px;">';     							
						 
					output +='<div pid="'+datos['pid']+'" type="'+datos['type']+'" style="margin-top:5px;height:30px;margin-bottom:10px;padding-left:5px;padding-right:5px;" class="col-xs-12 col-sm-12 col-md-12">';
				
						if (datos['type']=='B'){			
							if (datos['status']=='A'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-verde-80.png" no-repeat scroll 0px -40px transparent title="Active">';
							}else if (datos['status']=='NA'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-am-80.png" no-repeat scroll 0px -40px transparent title="No-Active">';
							}else if (datos['status']=='S'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-red-80.png" no-repeat scroll 0px -40px transparent title="Sold">';
							}else if (datos['status']=='NF'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-az.png" no-repeat scroll 0px -40px transparent title="By Owner">';
							}
						}else if (datos['type']=='S'){
								if (datos['status']=='A'){
									output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/s-verde-80.png" no-repeat scroll 0px -40px transparent title="Active">';
								}else if (datos['status']=='NA'){
									output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/s-am-80.png" no-repeat scroll 0px -40px transparent title="No-Active">';
								}else if (datos['status']=='S'){
									output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/s-red-80.png" no-repeat scroll 0px -40px transparent title="Sold">';
								}else if (datos['status']=='NF'){
									output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/s-az.png" no-repeat scroll 0px -40px transparent title="By Owner">';
								}

						}else if (datos['type']=='FM'){
							if (datos['status']=='A'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-verde-80.png" no-repeat scroll 0px -40px transparent title="Active">';
							}else if (datos['status']=='NA'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-am-80.png" no-repeat scroll 0px -40px transparent title="No-Active">';
							}else if (datos['status']=='S'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-red-80.png" no-repeat scroll 0px -40px transparent title="Sold">';
							}else if (datos['status']=='NF'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-az.png" no-repeat scroll 0px -40px transparent title="By Owner">';
							}

						}else if (datos['type']=='BM'){
							if (datos['status']=='A'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-verde-80.png" no-repeat scroll 0px -40px transparent title="Active">';
							}else if (datos['status']=='NA'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-am-80.png" no-repeat scroll 0px -40px transparent title="No-Active">';
							}else if (datos['status']=='S'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-red-80.png" no-repeat scroll 0px -40px transparent title="Sold">';
							}else if (datos['status']=='NF'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-az.png" no-repeat scroll 0px -40px transparent title="By Owner">';
							}

						}
							
						if (datos['msj']>0){
							output+='<img onclick="pagEmail('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/email-go-40-b.png" no-repeat scroll 0px -40px transparent title="Emails">';
						}else if (datos['msj']<=0){
							output+='<img onclick="pagEmail('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/email-go-No-40-b.png" no-repeat scroll 0px -40px transparent>';
						}
							
							
						if (datos['agent']!=''){
							output+='<img onclick="pagMakeCall('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/personB-80.png" no-repeat scroll 0px -40px transparent title="Emails">';
						}else {
							output+='<img onclick="pagSearchContact('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/personB-No-80.png" no-repeat scroll 0px -40px transparent>';
						}
						
							
						if (datos['contract']==0){
							output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_c-40.png" no-repeat scroll 0px -40px transparent title="Contract">';
						}else{
							output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_c-No-40.png" no-repeat scroll 0px -40px transparent title="Contract">';
						}
									
						if (datos['pof']==0){
							output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_p-40.png" no-repeat scroll 0px -40px transparent title="Proof of Funds">';
						}else{
							output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_p-No-40.png" no-repeat scroll 0px -40px transparent title="Proof of Funds">';
						}
									
						if (datos['emd']==0){
							output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_e-40.png" no-repeat scroll 0px -40px transparent title="EMD">';
						}else{
							output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_e-No-40.png" no-repeat scroll 0px -40px transparent title="EMD">';
						}
									
						if (datos['rademdums']==0){
							output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_a-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
						}else{
							output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_a-No-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
						}
							
						if (datos['offerreceived']==0){
							output+='<img onclick="pagAddHistory('+datos['pid']+');"  width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_o-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
						}else{
							output+='<img onclick="pagAddHistory('+datos['pid']+');"  width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_o-No-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
						}
									
					output += '</div>';
					
					output +='<div id="info-detalle" id="primero'+datos['pid']+'" parcelid="'+datos['pid']+'" type="'+datos['type']+'" offer="'+datos['offer']+'" owner="'+datos['owner']+'" county="'+datos['county']+'" class="row">';
						output +='<div class="col-sm-12">';
							output +='<div class="row">';								
								
								output +='<div style="padding-left:0px;" class="col-xs-12 col-sm-6 col-md-12">';
									
									output +='<div style="font-size: 18px;font-weight: bold;" class="col-md-12">';
										if (datos['unit']!=""){
											output +=''+datos['address']+'&nbsp;, '+datos['unit']+'&nbsp;, '+datos['zip']+'';
										}else{
											output += ''+datos['address']+'&nbsp;, '+datos['zip']+'';
										}	
									output += '</div>';
									
									output +='<div style="font-weight: bold;" class="col-md-12">';
										output +='Contact:&nbsp;'+datos['agent']+'';
									output += '</div>';
									
									output +='<div  class="col-md-12">';
										output +='Price:&nbsp;'+price+'';
									output += '</div>';
									
									output +='<div  class="col-md-12">';
										output +='Offer:&nbsp;'+offer+'';
									output += '</div>';
									
									output +='<div class="col-md-12" style="font-weight: normal;">';
										output +='Alt Status:&nbsp;'+datos['statusalt']+'';
									output += '</div>';
									
									output +='<div class="col-md-12" style="font-weight: normal;">';
										if (datos['financial']!=null){
										output +='Financial:&nbsp;'+datos['financial']+'';
										}else{
										output +='Financial:&nbsp;'+no+'';
										}
									output += '</div>';
									
									output +='<div class="col-md-12" style="font-weight: normal;text-align:right;">';
										output +=''+datefollow+'';
									output += '</div>';
								
								output += '</div>';
								
							output += '</div>';
						output += '</div>';
					output += '</div>';
					output +='<input type="hidden" id="detail" value="\''+datos['pid']+'\'">';
					
					
				output +='</li>';
					
				
                });
				
				//Actualizamos el HTML del elemento con id="#respuesta"
					
						//alert(obj.total+'--'+start);
						if (obj.total!=''){
							
							$("#content ul").append(output);
							//$("#following-tablet ul").append(output);
							
						}else{
							$("#content ul").html('No result! ');
						}
						//$(".tot").append(obj.total);
					
				} else {
					//data.success no es true
					$("#content ul").html('No true! ');
				}			
		});
	

}

function removeFilterProperty(){
//alert('removiendo filtro propiedad');
	$("input#address").val("");
	$("input#zip").val("");
	$("input#contact").val("");
	$("input#date").val("");
	$("#county option:selected").val("ALL");
	$("#city option:selected").val("ALL");
	$("#xcode option:selected").val("ALL");
	$("#status option:selected").val("ALL");
	$("#altstatus option:selected").val("ALL");
	$("#followdate option:selected").val("Equal");
	
	$("#content ul").empty();
	$("#following-tablet ul").empty();
	
	var start = 0; 
	var limit = 25; 	
	listadoProperty(start, limit);
	
			

}

function detailProperty(id){
	//alert('detalle del propiedad');
	
	//alert(id);
		var settings = { 
			limit : 25, // The number of posts per scroll to be loaded
			start : 0, // Initial offset, begins at 0 in this case
			error   : 'No More!', // When the user reaches the end this is the message that is
			                           
		}
		console.log(id)
		$settings = settings;	
		var start = $settings.start;
		
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followup.php',  
			type: 'POST',
		   data: { 
			//'typeFollow': 'B', 
			'userid': userid,
			'pids': id,
			//'sort': 'followdate desc', 
			//'start':0,
			//'limit':20
			}
		}).done(function (data){
			//alert(data);
			loaddetailPro=true;
			obj = JSON.parse(data);
			//alert(obj.success);
			if(obj.success) {
					      
                var output = "";
				var no="NO";
				var none="None";
				var active    ="Active";
				var no_active ="No-Active";
				var byOwner   ="By-Owner";
				var sold      ="Sold";
				
						
                //recorremos cada propiedad
                $.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada propiedad
					
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='type' || userkey=='followdate' || userkey=='address' || userkey=='zip'
							|| userkey=='unit' || userkey=='status' || userkey=='agent' || userkey=='statusalt'
							|| userkey=='financial' || userkey=='lprice' || userkey=='offer' || userkey=='msj'
							|| userkey=='county' || userkey=='ntask' || userkey=='pendes' || userkey=='offerpercent'
							|| userkey=='owner' || userkey=='dom' || userkey=='contract' || userkey=='pof'
							|| userkey=='emd' || userkey=='rademdums' || userkey=='offerreceived' || userkey=='pid'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);
						}
									
                    });
					
					
					var price   = accounting.formatMoney(datos['lprice'], "$", 0);
					var offer   = accounting.formatMoney(datos['offer'], "$", 0);
					var percent = accounting.formatMoney(datos['offerpercent'], "%");
					
					
					var year = moment(datos['followdate']).format('YYYY');
					
					if (year>=2015){
					var datefollow = moment(datos['followdate']).format('DD MMM');
					}else if (year<2015){
					var datefollow = moment(datos['followdate']).format('MM/DD/YYYY');
					}
					
					output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
					output += '<a style="color:#000;text-decoration:none;" href="#" ><li>';
					//output +='<div style="height:20px;margin-bottom:10px;padding-left:5px;padding-right:5px;" class="col-xs-12 col-sm-6">';
					output +='<div pid="'+datos['pid']+'" style="margin-top:-5px;height:30px;margin-bottom:10px;padding-left:0px;padding-right:0px;" class="col-xs-12 col-sm-12 col-md-12">';
								
							/*if (datos['type']=='B'){
								output +='<img style="margin-right:10px;margin-left:10px;" src="http://reifax.com/FollowupReifax/img/notes/buying-40.png" width=30px height=30px title="Buying">';
							}else {
								output +='<img style="margin-right:10px;margin-left:10px;" src="http://reifax.com/FollowupReifax/img/notes/selling-40.png" width=30px height=30px title="Selling">';
							}*/
									
							if (datos['type']=='B'){			
							if (datos['status']=='A'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-verde-80.png" no-repeat scroll 0px -40px transparent title="Active">';
							}else if (datos['status']=='NA'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-am-80.png" no-repeat scroll 0px -40px transparent title="No-Active">';
							}else if (datos['status']=='S'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-red-80.png" no-repeat scroll 0px -40px transparent title="Sold">';
							}else if (datos['status']=='NF'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-az.png" no-repeat scroll 0px -40px transparent title="By Owner">';
							}
						}else if (datos['type']=='S'){
							if (datos['status']=='A'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/s-verde-80.png" no-repeat scroll 0px -40px transparent title="Active">';
							}else if (datos['status']=='NA'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/s-am-80.png" no-repeat scroll 0px -40px transparent title="No-Active">';
							}else if (datos['status']=='S'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/s-red-80.png" no-repeat scroll 0px -40px transparent title="Sold">';
							}else if (datos['status']=='NF'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/s-az.png" no-repeat scroll 0px -40px transparent title="By Owner">';
							}

						}
							if (datos['msj']>0){
								output+='<img onclick="pagEmail('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/email-go-40-b.png" no-repeat scroll 0px -40px transparent title="Emails">';
							}else if (datos['msj']<=0){
								output+='<img onclick="pagEmail('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/email-go-No-40-b.png" no-repeat scroll 0px -40px transparent>';
							}
							
							if (datos['agent']!=''){
								output+='<img onclick="pagMakeCall('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/personB-80.png" no-repeat scroll 0px -40px transparent title="Emails">';
							}else {
								output+='<img onclick="pagSearchContact('+datos['pid']+');" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/personB-No-80.png" no-repeat scroll 0px -40px transparent>';
							}
							
							if (datos['contract']==0){
								output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 5px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_c-40.png" no-repeat scroll 0px -40px transparent title="Contract">';
							}else{
								output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 5px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_c-No-40.png" no-repeat scroll 0px -40px transparent title="Contract">';
							}
									
							if (datos['pof']==0){
								output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 5px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_p-40.png" no-repeat scroll 0px -40px transparent title="Proof of Funds">';
							}else{
								output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 5px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_p-No-40.png" no-repeat scroll 0px -40px transparent title="Proof of Funds">';
							}
									
							if (datos['emd']==0){
								output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 5px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_e-40.png" no-repeat scroll 0px -40px transparent title="EMD">';
							}else{
								output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 5px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_e-No-40.png" no-repeat scroll 0px -40px transparent title="EMD">';
							}
									
							if (datos['rademdums']==0){
								output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 5px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_a-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}else{
								output+='<img onclick="pagAddHistory('+datos['pid']+');" style="margin-right: 5px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_a-No-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}
							
							if (datos['offerreceived']==0){
								output+='<img onclick="pagAddHistory('+datos['pid']+');"  width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_o-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}else{
								output+='<img onclick="pagAddHistory('+datos['pid']+');"  width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_o-No-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}
								
								
						output += '</div>';
					
					
					/*output +='<div class="row">'+
								'<div  style="color:#ccc;text-align:right;" class="col-xs-12 col-sm-6 col-md-12">'+datefollow+'</div>'+
							'</div>';		*/ 
					output +='<div style="margin-bottom:10px;padding-left:5px;padding-right:5px;" class="col-xs-12 col-sm-12">';
					output +='<div class="row">';
						output +='<div style="padding-left:1px !important;" class="col-sm-12">';
							output +='<div class="row">';
								
								output +='<div style="margin-top: 15px;padding-left:0px;padding-right:0px;" class="col-xs-12 col-sm-12 col-md-12">';
									
									output +='<div class="col-md-12 mobil2">';
										if (datos['unit']!=""){
											output +=''+datos['address']+'&nbsp;, '+datos['unit']+'&nbsp;, '+datos['zip']+'';
										}else{
											output += ''+datos['address']+'&nbsp;,'+datos['county']+'&nbsp;, '+datos['zip']+'';
										}	
									output += '</div>';
									
									output +='<div class="col-md-12" mobil2>';
										output +='Contact:&nbsp;'+datos['agent']+'';
									output += '</div>';
									
									output +='<div class="col-md-12 mobil2" style="font-weight: normal;">';
										output +='Pendings:&nbsp;'+datos['ntask']+'';
									output += '</div>';
									
									output +='<div class="col-md-12 mobil2">';
									if (datos['status']=='A'){
										output +='Status:&nbsp;'+active+'';
									}else if (datos['status']=='NA'){
										output +='Status:&nbsp;'+no_active+'';
									}else if (datos['status']=='S'){
										output +='Status:&nbsp;'+sold+'';
									}else if (datos['status']=='NF'){
										output +='Status:&nbsp;'+byOwner+'';
									}
									output += '</div>';
									
									output +='<div class="col-md-12 mobil2" style="font-weight: normal;">';
										output +='DOM:&nbsp;'+datos['dom']+'';
									output += '</div>';
									
									output +='<div class="col-md-12 mobil2" style="font-weight: normal;">';
										output +='Foresclosure:&nbsp;'+datos['pendes']+'';
									output += '</div>';
									
									output +='<div class="col-md-12 mobil2" style="font-weight: normal;">';
										output +='Percent:&nbsp;'+percent+'';
									output += '</div>';
									
									output +='<div class="col-md-12 mobil2" style="font-weight: normal;">';
										output +='Price:&nbsp;'+price+'';
									output += '</div>';
									
									output +='<div class="col-md-12 mobil2" style="font-weight: normal;">';
										output +='Offer:&nbsp;'+offer+'';
									output += '</div>';
									
									output +='<div class="col-md-12 mobil2" style="font-weight: normal;">';
										output +='Alt Status:&nbsp;'+datos['statusalt']+'';
									output += '</div>';
									
									output +='<div class="col-md-12 mobil2" style="font-weight: normal;">';
										if (datos['owner']==null){
											output +='Owner:&nbsp;'+none+'';
										}else{
											output +='Owner:&nbsp;'+datos['owner']+'';
										}
									output += '</div>';
									
									output +='<div class="col-md-12 mobil2" style="font-weight: normal;">';
										if (datos['financial']!=null){
											output +='Financial:&nbsp;'+datos['financial']+'';
										}else{
											output +='Financial:&nbsp;'+no+'';
										}
									output += '</div>';
									
									output +='<div class="col-md-12" style="font-weight: normal;text-align:right;">';
										output +=''+datefollow+'';
									output += '</div>';
									
								output += '</div>';
								output += '</div>';
								
							output += '</div>';
						output += '</div>';
					output += '</div>';
					output +='</li></a>';
					output += '</ul>';
					
                });
				//output += '</ul>';
				//Actualizamos el HTML del elemento con id="#respuesta"
					
						//alert(obj.total+' >='+start);
						//document.getElementById('contacts').style.display = "none";
						$("#detallePropiedades").append(output);
						$("#detailproperty-tablet").append(output);
						//$(".tot").append(obj.total);
					
				} else {
					//data.success no es true
					$("#detallePropiedades").html('No true! ');
				}	
					
				
			});
}



function searchFilterProperty(){
//alert ('filtrando');
	var start = 0; 
	var limit = 25; 		
			//alert(start);
			//alert(limit);
			$("#coun").prop("selected", true);
			var county 	= $("#coun option:selected").val();
			$("#cit").prop("selected", true);
			var city 	= $("#cit option:selected").val();
			$("#xcod").prop("selected", true);
			var xcode 	= $("#xcod option:selected").val();
			//alert(xcode);
			$("#st").prop("selected", true);
			var status 	= $("#st option:selected").val();
			//alert(status);
			$("#altst").prop("selected", true);
			var altsta 	= $("#altst option:selected").val();
			//alert(altsta);
			
			$("#folldate").prop("selected", true);
			var folldate = $("#folldate option:selected").val();
			
					
			var address = $("input#address").val();
			var zip = $("input#zip").val();
			var agent = $("input#contact").val();
			
			var userid = JSON.parse(localStorage.getItem('userid'));
				userid = userid.userid;
			
			$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followup.php',  
				type: 'POST',
			   data: { 
				'typeFollow': 'B', 
				'userid': userid,
				'address': address,
				'zip': zip,
				'agent': agent,
				'county': county,
				'city': city,
				'xcode': xcode,	
				'status': status,
				'statusalt': altsta,
				'sort': 'followdate desc',
				'start':start,
				'limit':limit
				}
			}).done(function (data){
				//alert(data);
				var obj = JSON.parse(data);
				//alert(obj.success);
				if(obj.success) {
							  
					var output = "";
					var no="NO";
					var none="None";
					
					//recorremos cada propiedad
					//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
					$.each(obj.records, function( key, value ) {
					//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
					//recorremos los valores de cada propiedad
						
						var datos = new Array();
						var valor = new Array();
						var i=0;
						
						$.each( value, function ( userkey, uservalue) {
							if(userkey=='type' || userkey=='followdate' || userkey=='address' || userkey=='zip' || userkey=='unit' || userkey=='status' || userkey=='agent' || userkey=='statusalt' || userkey=='financial' || userkey=='lprice' || userkey=='offer' || userkey=='msj' || userkey=='pid'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
										
						});
						//alert(valor[0]);
						
						var price = accounting.formatMoney(datos['lprice'], "$ ");
						var offer = accounting.formatMoney(datos['offer'], "$ ");
						
						var datefollow = moment(datos['followdate']).format('DD MMM YY');
						
						
						//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
						output += '<li onClick="detail(\''+datos['pid']+'\');" id="primero'+datos['pid']+'" parcelid='+datos['pid']+' style="list-style: none;border-bottom: 2px solid #ccc;">';     
						output +='<div class="row">'+
									'<div style="color:#ccc;text-align:right;" class="col-xs-12 col-sm-6 col-md-12">'+datefollow+'</div>'+
								'</div>';		 
						
						output +='<div class="row">';
							output +='<div class="col-sm-12">';
								output +='<div class="row">';
									output +='<div style="width:15%;text-align:center;" class="col-xs-4 col-sm-6">';
										
										if (datos['type']=='B'){
										output +='<img style="padding:1px;" src="http://reifax.com/FollowupReifax/img/circle-b.png" width=30px height=30px>';
										}else {
										output +='<img style="padding:1px;" src="http://reifax.com/FollowupReifax/img/circle-g.png" width=30px height=30px>';
										}
										
										if (datos['status']=='A'){
											output +='<img width="30" height="40" src="http://reifax.com/FollowupReifax/img/notes/Active.png" no-repeat scroll 0px -40px transparent>';
										}else if (datos['status']=='NA'){
											output +='<img width="30" height="40" src="http://reifax.com/FollowupReifax/img/notes/Non_Active.png" no-repeat scroll 0px -40px transparent>';
										}else if (datos['status']=='S'){
											output +='<img width="30" height="40" src="http://reifax.com/FollowupReifax/img/notes/Sold.png" no-repeat scroll 0px -40px transparent>';
										}else if (datos['status']=='NF'){
											output +='<img width="30" height="40" src="http://reifax.com//FollowupReifax/img/notes/By_Owner.png" no-repeat scroll 0px -40px transparent>';
										}
										
										if (datos['msj']!=0){
											output+='<img width="30" height="40" src="http://reifax.com/FollowupReifax/img/go_email.png" no-repeat scroll 0px -40px transparent></td>';
										}else{
											output+='<img width="30" height="40" src="http://reifax.com/FollowupReifax/img/notes/nada.png" no-repeat scroll 0px -40px transparent>';
										}
									
									
									output += '</div>';
									
									output +='<div class="col-xs-9 col-sm-6 col-md-10">';
										
										output +='<div style="font-size: 18px;font-weight: bold;" class="col-md-3">';
											if (datos['unit']!=""){
												output +=''+datos['address']+'&nbsp;, '+datos['unit']+'&nbsp;, '+datos['zip']+'';
											}else{
												output += ''+datos['address']+'&nbsp;, '+datos['zip']+'';
											}	
										output += '</div>';
										
										output +='<div style="font-weight: bold;" class="col-md-3">';
											output +='Contact:&nbsp;'+datos['agent']+'';
										output += '</div>';
										
										output +='<div style="font-weight: bold;" class="col-md-2">';
											output +='Price:&nbsp;'+price+'';
										output += '</div>';
										
										output +='<div style="font-weight: bold;" class="col-md-2">';
											output +='Offer:&nbsp;'+offer+'';
										output += '</div>';
										
										output +='<div class="col-md-2" style="font-weight: normal;">';
											output +='Alt Status:&nbsp;'+datos['statusalt']+'';
										output += '</div>';
										
										output +='<div class="col-md-2" style="font-weight: normal;">';
											if (datos['financial']!=null){
											output +='Financial:&nbsp;'+datos['financial']+'';
											}else{
											output +='Financial:&nbsp;'+no+'';
											}
										output += '</div>';
									
									
									output += '</div>';
									
								output += '</div>';
							output += '</div>';
						output += '</div>';
						//output += '</a>';
						output +='<input type="hidden" id="detail" value="\''+datos['pid']+'\'">';
						output +='</li>';
						
						
					});
					
							//$('#filter').modal('hide');
							//document.getElementById('content').style.display = "none";
							//$('#content').css('display','none');
							//$('#content').hide();
							$("#content ul").append(output);
							
					
				} else {
					//data.success no es true
					$("#content ul").html('No true! ');
				}		
			});
				//return false;
	
}

function historyDetail(start,limit,id){

	//AJAX LISTADO PROPIEDADES

	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
		
	$("#coun").prop("selected", true);
	 var county 	= $("#coun option:selected").val();
	 //alert(county);
	$("#cit").prop("selected", true);
	var city 	= $("#cit option:selected").val();
	$("#xcod").prop("selected", true);
	var xcode 	= $("#xcod option:selected").val();
	//alert(xcode);
	$("#st").prop("selected", true);
	var status 	= $("#st option:selected").val();
	//alert(status);
	if (status=='No-Active'){
		status='NA'
	}else if (status=='Active'){
		status='A'
	}else if (status=='Sold'){
		status='S'
	}else if (status=='Not For Sale'){
		status='NFS'
	}
	//alert(status);
	$("#altst").prop("selected", true);
	var altsta 	= $("#altst option:selected").val();
	//alert(altsta);
			
	$("#folldate").prop("selected", true);
	var folldate = $("#folldate option:selected").val();	
					
	var address = $("input#address").val();
	var zip = $("input#zip").val();
	var agent = $("input#contact").val();
		
		
		
	var typefollow="(B,S)"
		//alert(typefollow);
	busy=true;
	$.ajax({
		url: 'http://reifax.com//mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followhistory.php',  
		type: 'POST',
		data: { 
			'typeFollow': 'B', 
			'userid': userid,
			'parcelid':id,
			'address': address,
			'zip': zip,
			'agent': agent,
			'county': county,
			'city': city,
			'xcode': xcode,	
			'status': status,
			'statusalt': altsta,
			'sort': 'odate desc', 
			'start':start,
			'limit':limit
		}
		}).done(function (data){
			//alert(data);
			busy=false;
			loadhistory=true;
			var obj = JSON.parse(data);
			//alert(obj.success);
			if(obj.success) {
					      
                var output = "";
                var output2 = "";
				var no="NO";
				var none="None";
				
                //recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
                $.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada propiedad
					
					var datos = new Array();
					var valor = new Array();
					var i=0;
					
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='followtype' || userkey=='odate' || userkey=='fulladdress' ||  userkey=='idfuh' ||
						   userkey=='offer' || userkey=='coffer' || userkey=='task' || userkey=='typeExec' ||
						   userkey=='parcelid' || userkey=='realtorsadem' || userkey=='contract' || userkey=='pof' || 
						   userkey=='emd' || userkey=='detail' || userkey=='offerreceived' || userkey=='userid' || userkey=='name_follow'){
						   datos[userkey]=uservalue;
						   valor[i++]=userkey;
							//console.debug(userkey);
						}
									
                    });
					//alert(valor[0]);
					
					var coffer = accounting.formatMoney(datos['coffer'], "$", 0);
					var offer = accounting.formatMoney(datos['offer'], "$", 0);
					
					var year = moment(datos['odate']).format('YYYY');
					
					if (year>=2015){
					var datehistory = moment(datos['odate']).format('DD MMM');
					}else if (year<2015){
					var datehistory = moment(datos['odate']).format('MM/DD/YY');
					}
					
					
					//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
					//output2 ='<div style="font-size: 18px;font-weight: bold;" class="col-md-3">';
							output2 =''+datos['fulladdress']+'';	
					//output2 = '</div>';
					
					output += '<li id="primero'+datos['idfuh']+'" idhist='+datos['idfuh']+' parcelid='+datos['parcelid']+' contr='+datos['contract']+' pof='+datos['pof']+' emd='+datos['emd']+' adde='+datos['realtorsadem']+' offre='+datos['offerreceived']+' style="list-style: none;border-bottom: 2px solid #ccc;">';     
						output +='<div style="height:20px;margin-bottom:10px;padding-left:5px;padding-right:5px;margin-top:5px;" class="col-xs-12 col-sm-12 col-md-12">';
												
							if (datos['task']==1){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_green-80.png" width=30px height=30px>';
							}else if (datos['task']==3){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_green-80.png" width=30px height=30px>';
							}else if (datos['task']==5){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-green-80.png" width=30px height=30px>';
							}else if (datos['task']==7){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docV-80.png" width=30px height=30px>';
							}else if (datos['task']==9){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-80.png" width=30px height=30px>';
							}else if (datos['task']==11){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-mail-80.png" width=30px height=30px>';
							}else if (datos['task']==13){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherV-80.png" width=30px height=30px>';
							}else if (datos['task']==15){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice-80.png" width=30px height=30px>';
							}else if (datos['task']==17){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-note-80.png" width=30px height=30px>';
							}else if (datos['task']==2){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_az-80.png" width=30px height=30px>';	
							}else if (datos['task']==4){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_az-80.png" width=30px height=30px>';	
							}else if (datos['task']==6){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-blue-80.png" width=30px height=30px>';	
							}else if (datos['task']==8){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docB-80.png" width=30px height=30px>';	
							}else if (datos['task']==10){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-B-80.png" width=30px height=30px>';	
							}else if (datos['task']==12){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/reci-mailB-80.png" width=30px height=30px>';	
							}else if (datos['task']==14){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherB-80.png" width=30px height=30px>';	
							}else if (datos['task']==16){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice_az-80.png" width=30px height=30px>';
							}
							
							if (datos['contract']==0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_c-40.png" no-repeat scroll 0px -40px transparent title="Contract">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_c-No-40.png" no-repeat scroll 0px -40px transparent title="Contract">';
							}
									
							if (datos['pof']==0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_p-40.png" no-repeat scroll 0px -40px transparent title="Proof of Funds">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_p-No-40.png" no-repeat scroll 0px -40px transparent title="Proof of Funds">';
							}
									
							if (datos['emd']==0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_e-40.png" no-repeat scroll 0px -40px transparent title="EMD">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_e-No-40.png" no-repeat scroll 0px -40px transparent title="EMD">';
							}
									
							if (datos['realtorsadem']==0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_a-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_a-No-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}
							
							if (datos['offerreceived']==0){
								output+='<img style="margin-right: 15px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_o-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}else{
								output+='<img style="margin-right: 15px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_o-No-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}
								
							
						
						output += '</div>';
					 
					
					output +='<div class="row">';
						output +='<div class="col-sm-12">';
							output +='<div class="row">';								
								
								output +='<div style="padding-left:0px;margin-top:10px" class="col-xs-12 col-sm-12 col-md-12">';
									
									output +='<div style="font-size: 18px;font-weight: bold;" class="col-md-12">';
										if (datos['detail']!=''){
											output +='Completed Task Detail:&nbsp;'+datos['detail']+'';
										}else{
											//output +='Completed Task Detail'+datos['detail']+'';
										}
									output += '</div>';
									
									output +='<div style="font-weight: normal;text-align: left;" class="col-md-12">';
										output +='Offer:&nbsp;'+offer+'';
									output += '</div>';
									
									output +='<div style="font-weight: normal;" class="col-md-12">';
										output +='COffer:&nbsp;'+coffer+'';
									output += '</div>';
									
									output +='<div class="col-md-2" style="font-weight: normal;">';
										output +='User:&nbsp;'+datos['userid']+'';
									output += '</div>';
									
									output +='<div style="font-weight:normal;text-align:right;" class="col-md-12">';
										output +=''+datehistory+'';
									output += '</div>';
																	
								output += '</div>';
								
							output += '</div>';
						output += '</div>';
					output += '</div>';
					//output += '</a>';
					output +='<input type="hidden" id="detail" value="\''+datos['pid']+'\'">';
					output +='</li>';
					
                });
				//output += '</ul>';
				//Actualizamos el HTML del elemento con id="#respuesta"
						//alert(obj.total+'--'+start);
						if (obj.total!=''){
							
							$("#historial ul").append(output);
							//$("#history-tablet ul").append(output);
						}else{
							$("#historial ul").html('No result! ');
						}
						//$(".tot").append(obj.total);
						busy= true;
					
				} else {
					//data.success no es true
					$("#historial ul").html('No true! ');
				}			
		});
}



function getAddress(id,get){
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followup.php',  
				type: 'POST',
			   data: {  
				'userid': userid,
				'parcelid': id,
				'type': 'get-address'
				
				}
			}).done(function (data){
				//alert(data);
				var obj = JSON.parse(data);
				//alert(obj.success);
				if(obj.success) {
							  
					var output = "";
					var output2 = "";
					var output3 = "";
					var output4 = "";
					var no="NO";
					var none="None";
					
					//recorremos cada propiedad
					//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
					$.each(obj.results, function( key, value ) {
					//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
					//recorremos los valores de cada propiedad
						
						var datos = new Array();
						var valor = new Array();
						var i=0;
						
						$.each( value, function ( userkey, uservalue) {
							if(userkey=='address' || userkey=='zip' || userkey=='unit' || 
							   userkey=='zip' || userkey=='unit' || userkey=='bd' || userkey=='city'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
										
						});
						//alert(valor[0]);
						var florida= 'FLORIDA';
						output =''+datos['address']+''+', '+''+datos['city']+'';
						output2 =''+datos['bd']+''+', '+''+florida+''+', '+''+datos['zip']+'';
						
						
					});
					
					if (get=='hist'){		
						$("#hist").html(output);
						$("#hist2").html(output2);
					}else if (get=='detailHist'){
						$("#dhist").html(output);
						$("#dhist2").html(output2);
					}else if (get=='schedule'){
						$("#sche").html(output);
						$("#sche2").html(output2);
					}else if (get=='email'){
						$("#mail").html(output);
						$("#mail2").html(output2);
					}		
					
				} else {
					//data.success no es true
					$("#hist").html('No true! ');
				}		
			});

}

function scheduleDetail(start,limit,id){

	$("#coun").prop("selected", true);
	 var county 	= $("#coun option:selected").val();
	 //alert(county);
	$("#cit").prop("selected", true);
	var city 	= $("#cit option:selected").val();
	$("#xcod").prop("selected", true);
	var xcode 	= $("#xcod option:selected").val();
	//alert(xcode);
	$("#st").prop("selected", true);
	var status 	= $("#st option:selected").val();
	//alert(status);
	if (status=='No-Active'){
		status='NA'
	}else if (status=='Active'){
		status='A'
	}else if (status=='Sold'){
		status='S'
	}else if (status=='Not For Sale'){
		status='NFS'
	}
	//alert(status);
	$("#altst").prop("selected", true);
	var altsta 	= $("#altst option:selected").val();
	//alert(altsta);
			
	$("#folldate").prop("selected", true);
	var folldate = $("#folldate option:selected").val();
						
	var address = $("input#address").val();
	var zip = $("input#zip").val();
	var agent = $("input#contact").val();
		
	var typefollow="(B,S)"
	
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	busy=true;
	$.ajax({
		url: 'http://reifax.com//mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followshedule.php',  
		type: 'POST',
		data: { 
			'typeFollow': 'B', 
			'userid': userid,
			'parcelid':id,
			'address': address,
			'zip': zip,
			'agent': agent,
			'county': county,
			'city': city,
			'xcode': xcode,	
			'status': status,
			'statusalt': altsta,
			//'sort': 'odate desc', 
			'start':start,
			'limit':limit
			}
		}).done(function (data){
			//alert(data);
			busy=false;
			loadschedule=true;
			var obj = JSON.parse(data);
			//alert(obj.success);
			if(obj.success) {
					      
                var output = "";
                var output2 = "";
				var no="NO";
				var none="None";
				
                //recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
                $.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada propiedad
					
					var datos = new Array();
					var valor = new Array();
					var i=0;
					
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='followtype' || userkey=='odate' || userkey=='fulladdress' ||  
						   userkey=='sdate' || userkey=='task' || userkey=='ohour' || userkey=='typeExec' ||
						   userkey=='status' || userkey=='userid' || userkey=='idfus' || userkey=='detail' || userkey=='parcelid'){
						   datos[userkey]=uservalue;
						   valor[i++]=userkey;
							//console.debug(userkey);
						}
									
                    });
					//alert(valor[0]);
					
					//var coffer = accounting.formatMoney(datos['coffer'], "$", 0);
					//var offer = accounting.formatMoney(datos['offer'], "$", 0);
					
					var year = moment(datos['odate']).format('YYYY');
					var year2 = moment(datos['sdate']).format('YYYY');
					
					if (year>=2015){
					var dateO = moment(datos['odate']).format('DD MMM');
					}else if (year<2015){
					var dateO = moment(datos['odate']).format('MM/DD/YY');
					}
					
					if (year2>=2015){
					var dateE = moment(datos['sdate']).format('DD MMM');
					}else if (year2<2015){
					var dateE = moment(datos['sdate']).format('MM/DD/YY');
					}
					
					var hora = datos['ohour'].split(':');
		
					if (hora[0]>12) { 
						var hour2 = hora[0] - 12;
						var hour3 = hour2+':'+hora[1]+' PM'
					} else if (hora[0]==00) {
						var hour2  = 12;
						var hour3 = hour2+':'+hora[1]+' AM'
					}else if (hora[0]==12) {
						var hour2  = 12;
						var hour3 = hour2+':'+hora[1]+' PM'
					}else{
						if(hora[0]!=10){
							var res = hora[0].replace("0", "");
							var hour3= res+':'+hora[1]+' AM';
						}else{
							var hour3= hour.hour+' AM'
						}
							
					}
					
					output2 =''+datos['fulladdress']+'';
					//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
					output += '<li id="primero'+datos['idfus']+'" idschedule='+datos['idfus']+' parcelid='+datos['parcelid']+' style="list-style: none;border-bottom: 2px solid #ccc;">';     
						output +='<div style="height:20px;margin-bottom:10px;padding-left:5px;padding-right:5px;" class="col-xs-8 col-sm-6">';
							
							
														
							if (datos['task']==1){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_green-80.png" width=30px height=30px>';
							}else if (datos['task']==3){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_green-80.png" width=30px height=30px>';
							}else if (datos['task']==5){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-green-80.png" width=30px height=30px>';
							}else if (datos['task']==7){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docV-80.png" width=30px height=30px>';
							}else if (datos['task']==9){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-80.png" width=30px height=30px>';
							}else if (datos['task']==11){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-mail-80.png" width=30px height=30px>';
							}else if (datos['task']==13){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherV-80.png" width=30px height=30px>';
							}else if (datos['task']==15){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice-80.png" width=30px height=30px>';
							}else if (datos['task']==17){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-note-80.png" width=30px height=30px>';
							}else if (datos['task']==2){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_az-80.png" width=30px height=30px>';	
							}else if (datos['task']==4){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_az-80.png" width=30px height=30px>';	
							}else if (datos['task']==6){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-blue-80.png" width=30px height=30px>';	
							}else if (datos['task']==8){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docB-80.png" width=30px height=30px>';	
							}else if (datos['task']==10){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-B-80.png" width=30px height=30px>';	
							}else if (datos['task']==12){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/reci-mailB-80.png" width=30px height=30px>';	
							}else if (datos['task']==14){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherB-80.png" width=30px height=30px>';	
							}else if (datos['task']==16){
								output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice_az-80.png" width=30px height=30px>';
							}
							
							if (datos['typeExec']==2){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/exec-type-vrd.png" no-repeat scroll 0px -40px transparent>';
							}

						output += '</div>';
						output +='<div class="col-xs-2 col-sm-6 col-md-2" style="font-weight: normal;">';
							output +='User:&nbsp;'+datos['userid']+'';
						output += '</div>';
							
				
					output +='<div class="row">';
						output +='<div class="col-sm-12">';
							output +='<div class="row">';								
								
								output +='<div style="padding-left:0px;margin-top:10px" class="col-xs-12 col-sm-12 col-md-12">';
																	
									output +='<div style="font-size: 18px;font-weight: bold;" class="col-md-12">';
										output +='Status:&nbsp;'+datos['status']+'';	
									output += '</div>';
																		
									output +='<div class="col-md-12" style="font-weight: normal;">';
										output +='Exec Date:&nbsp;'+datos['odate']+'';
									output += '</div>';
									
									output +='<div class="col-md-12" style="font-weight: normal;">';
										output +='Exec Time:&nbsp;'+hour3+'';
									output += '</div>';
									
									output +='<div class="col-md-12" style="font-weight: normal;">';
										output +='Sche Time:&nbsp;'+datos['sdate']+'';
									output += '</div>';
								
									output +='<div style="font-weight: bold;text-align:right;" class="col-md-12">';
										output +=''+dateE+'';
									output += '</div>';
																	
								output += '</div>';
								
							output += '</div>';
						output += '</div>';
					output += '</div>';
					//output += '</a>';
					output +='<input type="hidden" id="detail" value="\''+datos['pid']+'\'">';
					output +='</li>';
					
				
                });
				//output += '</ul>';
				//Actualizamos el HTML del elemento con id="#respuesta"
					
						//alert(obj.total+'--'+start);
						if (obj.total!=''){
							//$("#sche").html(output2);
							$("#schedule ul").append(output);
							$("#schedule-tablet ul").append(output);
						}else{
							$("#schedule ul").html('No result! ');
							$("#schedule-tablet ul").html('No result! ');
						}
						//$(".tot").append(obj.total);
					
				} else {
					//data.success no es true
					$("#schedule ul").html('No true! ');
				}			
		});

}

function emailDetail(start,limit,id){
	
	var email    = $("input#fromMail").val();
	var toemail  = $("input#toMail").val();
	var name     = $("input#from").val();
	var content  = $("input#emailContent").val();
	var dateBe   = $("input#dateBetween").val();
	var dateAf   = $("input#dateTo").val();
	
	$("#emailType").prop("selected", true);
	var etype = $("#emailType option:selected").val();

	var typefollow="(B,S)"

	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	busy=true;
	$.ajax({
			url: 'http://reifax.com//mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followemail.php',  
			type: 'POST',
		   data: {  
			'userid': userid,
			'parcelid':id,
			'email': email,
			'toemail': toemail,
			'name': name,
			'content': content,
			'dateBe': dateBe,
			'dateAf': dateAf,	
			'etype': etype,
			'start':start,
			'limit':limit
			}
		}).done(function (data){
			//alert(data);
			busy=false;
			loademail=true;
			var obj = JSON.parse(data);
			//alert(obj.success);
			if(obj.success) {
					      
                var output = "";
				var no="NO";
				var none="None";
				
                //recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
                $.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada propiedad
					
					var datos = new Array();
					var valor = new Array();
					var i=0;
					
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='userid' || userkey=='from_msg' || userkey=='fromName_msg' ||  
						   userkey=='to_msg' || userkey=='seen' || userkey=='subject' || userkey=='msg_date' ||
						   userkey=='attachement' || userkey=='ac' || userkey=='ap' || userkey=='task' || 
						   userkey=='agent' || userkey=='address' || userkey=='idmail'){
						   datos[userkey]=uservalue;
						   valor[i++]=userkey;
							//console.debug(userkey);
						}
									
                    });
					//alert(valor[0]);
					
					var year = moment(datos['msg_date']).format('YYYY');
					
					
					if (year>=2015){
					var date = moment(datos['msg_date']).format('DD MMM');
					}else if (year<2015){
					var date = moment(datos['msg_date']).format('MM/DD/YY');
					}
					
					if(datos['seen']==0){
					output += '<li  id="primero'+datos['idmail']+'" idmail='+datos['idmail']+' idseen='+datos['seen']+' idemail="'+datos['from_msg']+'" idname="'+datos['fromName_msg']+'" class="seenB" style="list-style: none;border-bottom: 2px solid #ccc;margin-top:5px;">';     
					
					output +='<div style="height:20px;margin-bottom:15px;padding-left:5px;padding-right:5px;" class="col-xs-12 col-sm-6">';
									
						if (datos['task']==2){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_az-80.png" width=30px height=30px>';	
						}else if (datos['task']==4){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_az-80.png" width=30px height=30px>';	
						}else if (datos['task']==6){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-blue-80.png" width=30px height=30px>';	
						}else if (datos['task']==8){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docB-80.png" width=30px height=30px>';	
						}else if (datos['task']==10){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-B-80.png" width=30px height=30px>';	
						}else if (datos['task']==12){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/reci-mailB-80.png" width=30px height=30px>';	
						}else if (datos['task']==14){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherB-80.png" width=30px height=30px>';	
						}else if (datos['task']==16){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice_az-80.png" width=30px height=30px>';
						}else if (datos['task']==1){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_green-80.png" width=30px height=30px>';
						}else if (datos['task']==3){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_green-80.png" width=30px height=30px>';
						}else if (datos['task']==5){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-green-80.png" width=30px height=30px>';
						}else if (datos['task']==7){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docV-80.png" width=30px height=30px>';
						}else if (datos['task']==9){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-80.png" width=30px height=30px>';
						}else if (datos['task']==11){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-mail-80.png" width=30px height=30px>';
						}else if (datos['task']==13){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherV-80.png" width=30px height=30px>';
						}else if (datos['task']==15){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice-80.png" width=30px height=30px>';
						}else if (datos['task']==17){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-note-80.png" width=30px height=30px>';
						}
						
						if (datos['attachments']==1){
							output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/clipV-80.png" no-repeat scroll 0px -40px transparent>';
						}
						
						
						
						/*if (datos['ac']==0 && datos['ap']==-1){
							output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/personB-No-80.png" no-repeat scroll 0px -40px transparent title="No Tiene">';
						}else if (datos['ac']==0 && datos['ap']!=-1){
							output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/masB-No-80.png" no-repeat scroll 0px -40px transparent title="Assign Contacts">';
						}else if (datos['ac']!=-1 && datos['ap']==0){
							output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/masB-No-80.png" no-repeat scroll 0px -40px transparent title="Assign Property">';
						}else if (datos['ac']!=0 && datos['ap']!=-1){
							output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/personB-80.png" no-repeat scroll 0px -40px transparent title="Tiene">';
						}	*/
					
					output += '</div>';
					
					/*output +='<div class="row">'+
								'<div style="color:#ccc;text-align:right;" class="col-xs-12 col-sm-6 col-md-12">';
								if (datos['attachments']==1){
								output +='<img width="25" height="25" src="http://reifax.com/FollowupReifax/img/clip-g-48.png" no-repeat scroll 0px -40px transparent>';
								}
								output +='&nbsp;&nbsp;'+date+'</div>'+
							'</div>';	*/	 
					
					output +='<div class="row">';
						output +='<div style="padding-left:5px;padding-right:5px;" class="col-sm-12">';
							output +='<div class="row">';
								
								output +='<div class="col-xs-12 col-sm-12 col-md-12 ">';									
									output +='<div style="font-size: 16px;" class="col-md-12">';										
										if (datos['to_msg']==null){
											output +=''+datos['fromName_msg']+'';	
											
										}else{
											output +=''+datos['to_msg']+'';	
										}										
									output += '</div>';
	
									output +='<div class="col-md-12">';
										output +='<font style="font-size:12px;">'+datos['subject']+'</font>';
									output += '</div>';
										
									output +='<div style="font-weight:bold;text-align:right;" class="col-md-12">';
										output +=''+date+'';
									output += '</div>';
										
									output += '</div>';
																
							output += '</div>';
						output += '</div>';
					output += '</div>';
					//output += '</a>';
					output +='<input type="hidden" id="detail" value="\''+datos['pid']+'\'">';
					output +='</li>';
					}
					else if(datos['seen']==1){
					output += '<li  id="primero'+datos['idmail']+'" idmail='+datos['idmail']+' idseen='+datos['seen']+' idemail="'+datos['from_msg']+'" idname="'+datos['fromName_msg']+'" class="seenN" style="list-style: none;border-bottom: 2px solid #ccc;margin-top:5px;">';     
					output +='<div style="height:20px;margin-bottom:15px;padding-left:5px;padding-right:5px;" class="col-xs-12 col-sm-6">';
									
						if (datos['task']==2){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_az-80.png" width=30px height=30px>';	
						}else if (datos['task']==4){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_az-80.png" width=30px height=30px>';	
						}else if (datos['task']==6){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-blue-80.png" width=30px height=30px>';	
						}else if (datos['task']==8){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docB-80.png" width=30px height=30px>';	
						}else if (datos['task']==10){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-B-80.png" width=30px height=30px>';	
						}else if (datos['task']==12){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/reci-mailB-80.png" width=30px height=30px>';	
						}else if (datos['task']==14){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherB-80.png" width=30px height=30px>';	
						}else if (datos['task']==16){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice_az-80.png" width=30px height=30px>';
						}else if (datos['task']==1){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_green-80.png" width=30px height=30px>';
						}else if (datos['task']==3){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_green-80.png" width=30px height=30px>';
						}else if (datos['task']==5){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-green-80.png" width=30px height=30px>';
						}else if (datos['task']==7){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docV-80.png" width=30px height=30px>';
						}else if (datos['task']==9){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-80.png" width=30px height=30px>';
						}else if (datos['task']==11){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-mail-80.png" width=30px height=30px>';
						}else if (datos['task']==13){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherV-80.png" width=30px height=30px>';
						}else if (datos['task']==15){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice-80.png" width=30px height=30px>';
						}else if (datos['task']==17){
							output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-note-80.png" width=30px height=30px>';
						}
						
						if (datos['attachments']==1){
							output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/clipV-80.png" no-repeat scroll 0px -40px transparent>';
						}
						
						/*if (datos['ac']==0 && datos['ap']==-1){
							output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/personB-No-80.png" no-repeat scroll 0px -40px transparent title="No Tiene">';
						}else if (datos['ac']==0 && datos['ap']!=-1){
							output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/masB-No-80.png" no-repeat scroll 0px -40px transparent title="Assign Contacts">';
						}else if (datos['ac']!=-1 && datos['ap']==0){
							output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/masB-No-80.png" no-repeat scroll 0px -40px transparent title="Assign Property">';
						}else if (datos['ac']!=0 && datos['ap']!=-1){
							output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/personB-80.png" no-repeat scroll 0px -40px transparent title="Tiene">';
						}*/	
						
						
					output += '</div>';
					
					output +='<div class="row">';
						output +='<div style="padding-left:5px;padding-right:5px;" class="col-sm-12">';
							output +='<div class="row">';
								
								output +='<div class="col-xs-12 col-sm-12 col-md-12 ">';									
									output +='<div style="font-size:16px;padding-left:5px;padding-right:5px;" class="col-md-12">';	

										if (datos['to_msg']==null){
											output +=''+datos['fromName_msg']+'';	
											
										}else{
											output +=''+datos['to_msg']+'';	
										}
									output += '</div>';
									
									output +='<div class="col-md-12">';
										output +='<font style="font-size:12px;">'+datos['subject']+'</font>';
									output += '</div>';
									
									output +='<div style="font-weight: bold;text-align:right;" class="col-md-12">';
										output +=''+date+'';
									output += '</div>';
								
								
								output += '</div>';
								
							output += '</div>';
						output += '</div>';
					output += '</div>';
					//output += '</a>';
					output +='<input type="hidden" id="detail" value="\''+datos['pid']+'\'">';
					output +='</li>';
					}
						
						
						//settings.limit = settings.limit + start;
						//console.log(settings.limit);
						
					
					});
					//output += '</ul>';
					//Actualizamos el HTML del elemento con id="#respuesta"
						
							//alert(obj.total+' >='+start);
							if (obj.total!=''){
								$("#correofollow ul").append(output);
								//$("#correolistfollow ul").append(output);
								//$("#emailfollow-tablet ul").append(output);
							}else{
								$("#correofollow ul").html('No result! ');
								//$("#correolistfollow ul").html('No result! ');
								//$("#emailfollow-tablet ul").html('No result! ');
								
							}
							

					} else {
						//data.success no es true
						$("#correofollow ul").html('No true! ');
						 
					}
		});

}

function goBack(){
	//alert('go back');
	$("#correofollow ul").empty();
	$("#temp select").empty();	
	$("#tempFax select").empty();
	$("#contactmail select").empty();	
	$("#contacttexto select").empty();	
	$("#contactfaxx select").empty();	
	$("#tempschedule select").empty();	
	$("#tschedule select").empty();	
	
	$('#detalleContactoAll ul').empty();
	
	//$.mobile.navigate( "#followingHtml" );
	
	$.mobile.changePage('#followingHtml');
	
	if (checkid!=''){
		pushh=true;
		longProperties(checkid,pushh);
	}
		
}

function backMakeCall(){
	//alert('go back');
	$.mobile.navigate( "#followingHtml" );
	longProperties(checkid);
		
}


function sendEmail(){
	//alert('enviando'+id);
	var type = JSON.parse(localStorage.getItem('key3'));
	var pid = JSON.parse(localStorage.getItem('key'));
	var to 	   = $("input#input_toforwardEmail").val();
	var subj   = $("input#subjectEmail").val();
	var cuerpo = $("textarea#bodyEmail").val();
	
	//alert(pid);
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;

	$.ajax({
		url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followupEmail.php',  
		type: "POST",
		data: { 			
			'userid': userid,
			'pid':pid.parcelid,
			'typeFollow':type.type,
			'to': to,
			'subject': subj,
			'body': cuerpo 			
		},
		success: function(data, textStatus, jqXHR){
			//alert(data);
				
			if(data){
				alert('Email successfully');
				$.mobile.changePage('index.html#detailEmail');
			}else{
				alert('error');
			}
		},
		error: function (jqXHR, textStatus, errorThrown){
			alert('error');
		}
	});
}

function getTemplateSchedule(){
	
	var output ="";
	var output2 ="";
	var out ="";
	var New ="New";
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/mycontracts_tabs/get_templates_task.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'mode': 'listar'

		}
	}).done(function (data){
		//alert(data);
		var obj = JSON.parse(data);
		if(obj.success) {
			var j=0;
			$.each(obj.data, function( key, value ) {
				var datos = new Array();
				var valor = new Array();
				var i=0;
				$.each( value, function ( userkey, uservalue) {
					if(userkey=='name' || userkey=='idtem' || userkey=='default'){
						datos[userkey]=uservalue;
						valor[i++]=userkey;
						//console.debug(userkey);
					}				
				});
					
				console.log(datos['default']);
				output2 +=''+datos['default']+'';
				
				if(out==1){
					if(value['default']==1){					
						output +='<option value="'+value['idtem']+'" selected>'+value['name']+'</option>';							
					}else{
						output +='<option value="'+value['idtem']+'">'+value['name']+'</option>';
					}
				}else{
					if(j==0){
						output +='<option value="'+value['idtem']+'" selected>'+value['name']+'</option>';	
					}else
						output +='<option value="'+value['idtem']+'">'+value['name']+'</option>';
					j++;
				}
			});
			 														
				if (out==1){
					$("#tempschedule select").append(output);
					$('#temschedule').selectmenu('refresh');	
				}else{
					$("#tempschedule select").append(output);
					$('#temschedule').selectmenu('refresh');	
					
				}							
		}
	});
			
}

function getTemplateEmail(){
	
	var output ="";
	var output2 ="";
	var out ="";
	var New ="New";
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/mycontracts_tabs/get_templates.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'modo': 'obtener',
			'id': 3675,
			'type':'email'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			//console.log(obj.data.subject);
			//console.log(obj.data.body);
			
			$("#subjectEmail").val(obj.data.subject);
			
			var out=obj.data.body;
			//$("#bodyEmail").html(out);
			tinyMCE.get('bodyEmail').setContent(out);
			//$("#bodyEmail").val(obj.data.body);
			/*var textarea_line = out.replace(/(<br>\s*|<br\/>\s*)/g, "\n");
			var textarea_line2 = textarea_line.replace("<span>", " ");
			var textarea_line3 = textarea_line2.replace("</span>", " ");
			$("#bodyEmail").html(textarea_line);					
			$("#bodyEmail").html(textarea_line2);					
			$("#bodyEmail").html(textarea_line3);	*/
	});
	
	

	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'template_type': 1,
			'type':'docstemplates'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			if(obj.success) {
				var j=0;
				$.each(obj.results, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='name' || userkey=='id' || userkey=='default'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					
					console.log(datos['default']);
					output2 +=''+datos['default']+'';
					
					if (j==0){
						output ='<option value="'+New+'">'+New+'</option>';
						j++;
					}
					
					if(output2==1){
						out=1;							
						output +='<option value="'+datos['id']+'" selected>'+datos['name']+'</option>';					
					}else{
						output +='<option value="'+datos['id']+'">'+datos['name']+'</option>';
					}
				
				});
				
													
					document.getElementById("templa").style.display = "block";										
					$("#temp select").append(output);
					
					if (out==1){
						//console.log('dentro');
						$('#tem').selectmenu('refresh');
					}	
					//$('#temp').val(output).selectmenu('refresh');									
			}	
	});
			
}

function getContactEmail(id,det){
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	//alert(det);
	
	if (det==1){
	
	$("#Cemail").show();
	
	$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: 'POST',
		data: { 
			'type': 'assignment',
			'userid': userid,
			'pid': id												
		}}).done(function (data){	
			//alert(data);
			busy=false;
			var obj = JSON.parse(data);
			//alert(obj.success);
			if(obj.success) {
				var output = "";
				var output2 = "";
				var out = "";
				var no="NO";
				var none="None";
			
				//recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
				$.each(obj.records, function( key, value ) {
					//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
					//recorremos los valores de cada propiedad
						
					var datos = new Array();
					var valor = new Array();
					var i=0;
						
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='agentid' || userkey=='agenttype' || userkey=='agent' || userkey=='phone1' || 
							userkey=='phone2' || userkey=='principal'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);
						}
										
					});
					
						output2 +=''+datos['principal']+'';
					
						if (output2==1){
							out=1;
							output +='<option value="'+datos['agentid']+'" selected>'+datos['agent']+'</option>';
						}else{
							output +='<option value="'+datos['agentid']+'">'+datos['agent']+'</option>';
						}
						
				
				});
				
					$("#contactmail select").append(output);

					if(out==1){
						$('#contactemail').selectmenu('refresh');
					}	
			}
						
		});
	
	}else if (det==2){
		$("#Cemail").hide();
	}
	
}

function getContactContract(id,det){
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	if (det==1){
	
		$("#Ccontract").show();
		
		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
				type: 'POST',
			data: { 
				'type': 'assignment',
				'userid': userid,
				'pid': id												
			}}).done(function (data){	
				//alert(data);
				busy=false;
				var obj = JSON.parse(data);
				//alert(obj.success);
				if(obj.success) {
					var output = "";
					var output2 = "";
					var out = "";
					var no="NO";
					var none="None";
				
					//recorremos cada propiedad
					//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
					$.each(obj.records, function( key, value ) {
						//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
						//recorremos los valores de cada propiedad
							
						var datos = new Array();
						var valor = new Array();
						var i=0;
							
						$.each( value, function ( userkey, uservalue) {
							if(userkey=='agentid' || userkey=='agenttype' || userkey=='agent' || userkey=='phone1' || 
								userkey=='phone2' || userkey=='principal'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
											
						});
						
							output2 +=''+datos['principal']+'';
						
							if (output2==1){
								out=1;
								output +='<option value="'+datos['agentid']+'" selected>'+datos['agent']+'</option>';
							}else{
								output +='<option value="'+datos['agentid']+'">'+datos['agent']+'</option>';
							}	
							
					});
					
						$("#contContract select").append(output);
						
						if(out==1){
							$('#contactContract').selectmenu('refresh');
						}		
				}
							
			});
	
	}else if (det==2){
		$("#Ccontract").hide();
	}
	
}

function getContactSchedule(id,det){
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;

	
	if (det==1){
	
		$("#Ccontract").show();
		
		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
				type: 'POST',
			data: { 
				'type': 'assignment',
				'userid': userid,
				'pid': id												
			}}).done(function (data){	
				//alert(data);
				busy=false;
				var obj = JSON.parse(data);
				//alert(obj.success);
				if(obj.success) {
					var output = "";
					var output2 = "";
					var out = "";
					var no="NO";
					var none="None";
				
					//recorremos cada propiedad
					//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
					$.each(obj.records, function( key, value ) {
						//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
						//recorremos los valores de cada propiedad
							
						var datos = new Array();
						var valor = new Array();
						var i=0;
							
						$.each( value, function ( userkey, uservalue) {
							if(userkey=='agentid' || userkey=='agenttype' || userkey=='agent' || userkey=='phone1' || 
								userkey=='phone2' || userkey=='principal'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
											
						});
						
							output2 +=''+datos['principal']+'';
						
							if (output2==1){
								out=1;
								output +='<option value="'+datos['agentid']+'" selected>'+datos['agent']+'</option>';
							}else{
								output +='<option value="'+datos['agentid']+'">'+datos['agent']+'</option>';
							}	
							
					});
					
						$("#tschedule select").append(output);
						
						if(out==1){
							$('#toschedule').selectmenu('refresh');
						}		
				}
							
			});
	
	}else if (det==2){
		$("#Ccontract").hide();
	}
	
}

function getContactSms(id,det){
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	if (det==1){
	
		$("#Csms").show();
		
		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
				type: 'POST',
			data: { 
				'type': 'assignment',
				'userid': userid,
				'pid': id												
			}}).done(function (data){	
				//alert(data);
				busy=false;
				var obj = JSON.parse(data);
				//alert(obj.success);
				if(obj.success) {
					var output = "";
					var output2 = "";
					var out = "";
					var no="NO";
					var none="None";
				
					//recorremos cada propiedad
					//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
					$.each(obj.records, function( key, value ) {
						//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
						//recorremos los valores de cada propiedad
							
						var datos = new Array();
						var valor = new Array();
						var i=0;
							
						$.each( value, function ( userkey, uservalue) {
							if(userkey=='agentid' || userkey=='agenttype' || userkey=='agent' || userkey=='phone1' || 
								userkey=='phone2' || userkey=='principal'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
											
						});
						
							output2 +=''+datos['principal']+'';
						
							if (output2==1){
								out=1;
								output +='<option value="'+datos['agentid']+'" selected>'+datos['agent']+'</option>';
							}else{
								output +='<option value="'+datos['agentid']+'">'+datos['agent']+'</option>';
							}
							
					
					});
					
						$("#contacttexto select").append(output);
						
						if(out==1){
							$('#contactsms').selectmenu('refresh');
						}
							
				}
						
					
			});
	}else if(det==2){
		$("#Csms").hide();
	}
	
}

function getContactFax(id,det){
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	if (det==1){
	
		$("#Cfax").show();
		
		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
				type: 'POST',
			data: { 
				'type': 'assignment',
				'userid': userid,
				'pid': id												
			}}).done(function (data){	
				//alert(data);
				busy=false;
				var obj = JSON.parse(data);
				//alert(obj.success);
				if(obj.success) {
					var output = "";
					var output2 = "";
					var out = "";
					var no="NO";
					var none="None";
				
					//recorremos cada propiedad
					//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
					$.each(obj.records, function( key, value ) {
						//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
						//recorremos los valores de cada propiedad
							
						var datos = new Array();
						var valor = new Array();
						var i=0;
							
						$.each( value, function ( userkey, uservalue) {
							if(userkey=='agentid' || userkey=='agenttype' || userkey=='agent' || userkey=='phone1' || 
								userkey=='phone2' || userkey=='principal'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
											
						});
						
							output2 +=''+datos['principal']+'';
						
							if (output2==1){
								out=1;
								output +='<option value="'+datos['agentid']+'" selected>'+datos['agent']+'</option>';
							}else{
								output +='<option value="'+datos['agentid']+'">'+datos['agent']+'</option>';
							}
							
					
					});
					
						$("#contactfaxx select").append(output);
						
						if(out==1){
							$('#contactfax').selectmenu('refresh');
						}
							
				}
						
					
			});
	
	}else if(det==2){
		$("#Cfax").hide();
	}
	
}

function getTemplateScheduleChange(idtemp){
	
	var output ="";
	var output2 ="";
	var out ="";
	var New ="New"
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/mycontracts_tabs/get_templates_task.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'idtem': idtemp,
			'mode': 'obtener'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);	
			if(obj.success) {
			
				$.each(obj.data, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='body' || userkey=='subject' || userkey=='idtemtask'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					
					console.log(datos['default']);
					output +=''+datos['body']+'';
					output2 +=''+datos['subject']+'';
					
					
				
				});
																														
					
															
			}	
			
				/*$("#subjectEmail").val(obj.data.subject);
				tinyMCE.get('bodyEmail').setContent(out);*/
											
	});
	
	
	/*$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'template_type': 1,
			'type':'docstemplates'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			if(obj.success) {
			
				$.each(obj.results, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='name' || userkey=='id' || userkey=='default'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					
					console.log(datos['default']);
					output2 +=''+datos['default']+'';
					
					
						if(idtemp==datos['id']){
							out=1;							
							//output ='<option value="'+New+'">'+New+'</option>';					
							//output +='<option value="'+datos['id']+'" selected>'+datos['name']+'</option>';					
						}else if(idtemp=='New'){
							console.log('else');
							//output ='<option value="'+New+'" selected>'+New+'</option>';
							//output +='<option value="'+datos['id']+'">'+datos['name']+'</option>';
						}
				
				});
																														
					$("#temp select").append(output);
					
					if (out==1){
						console.log('dentro');
						$('#tem').selectmenu('refresh');
					}	
					//$('#temp').val(output).selectmenu('refresh');
															
			}	
	});*/
				
}

function getTemplateEmailChange(idtemp){
	
	var output ="";
	var output2 ="";
	var out ="";
	var New ="New"
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/mycontracts_tabs/get_templates.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'modo': 'obtener',
			'id': idtemp,
			'type':'email'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);	
				
			var out=obj.data.body;
				$("#subjectEmail").val(obj.data.subject);
				tinyMCE.get('bodyEmail').setContent(out);
											
	});
	
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'template_type': 1,
			'type':'docstemplates'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			if(obj.success) {
			
				$.each(obj.results, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='name' || userkey=='id' || userkey=='default'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					
					console.log(datos['default']);
					output2 +=''+datos['default']+'';
					
					
						if(idtemp==datos['id']){
							out=1;							
							//output ='<option value="'+New+'">'+New+'</option>';					
							//output +='<option value="'+datos['id']+'" selected>'+datos['name']+'</option>';					
						}else if(idtemp=='New'){
							console.log('else');
							//output ='<option value="'+New+'" selected>'+New+'</option>';
							//output +='<option value="'+datos['id']+'">'+datos['name']+'</option>';
						}
				
				});
																														
					$("#temp select").append(output);
					
					if (out==1){
						console.log('dentro');
						$('#tem').selectmenu('refresh');
					}	
					//$('#temp').val(output).selectmenu('refresh');
															
			}	
	});
				
}


function getTemplateSMS(){
	
	var output ="";
	var output2 ="";
	var out ="";
	var New="New";
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/mycontracts_tabs/get_templates.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'modo': 'obtener',
			'id': 3032,
			'type':'docs'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			//console.log(obj.data.subject);
			console.log(obj.data.body);
			
			//$("#bodySms").val(obj.data.body);
			tinyMCE.get('bodySms').setContent(obj.data.body);
			
	});
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'template_type': 3,
			'type':'docstemplates'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			if(obj.success) {
				var j=0;
				$.each(obj.results, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='name' || userkey=='id' || userkey=='default'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					
					console.log(datos['default']);
					output2 +=''+datos['default']+'';
					
					if (j==0){
						output ='<option value="'+New+'">'+New+'</option>';
						j++;
					}
					
					if(output2==1){
						out=1;
						output +='<option value="'+datos['id']+'" selected>'+datos['name']+'</option>';						
					}else{
						output +='<option value="'+datos['id']+'">'+datos['name']+'</option>';
					}
						
				
				});
				
					document.getElementById("templaSms").style.display = "block";	
					$("#tempSms select").append(output);
					
					if (out==1){
						//console.log('dentro');
						$('#temSms').selectmenu('refresh');
					}							
																							
					//$('#temp').val(output).selectmenu('refresh');					
										
			}	
	});
				
}

function getTemplateSMSChange(idtempSms){
	
	var output ="";
	var output2 ="";
	var out ="";
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/mycontracts_tabs/get_templates.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'modo': 'obtener',
			'id': idtempSms,
			'type':'docs'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			//console.log(obj.data.subject);
			console.log(obj.data.body);
			
			//$("#bodySms").val(obj.data.body);
			tinyMCE.get('bodySms').setContent(obj.data.body);
			
	});
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'template_type': 3,
			'type':'docstemplates'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			if(obj.success) {
			
				$.each(obj.results, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='name' || userkey=='id' || userkey=='default'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					
					console.log(datos['default']);
					output2 +=''+datos['default']+'';
					
					if(idtempSms==datos['id']){
						out=1;							
						//output ='<option value="'+New+'">'+New+'</option>';					
						//output +='<option value="'+datos['id']+'" selected>'+datos['name']+'</option>';					
					}else if(idtempSms=='New'){
						console.log('else');
						//output ='<option value="'+New+'" selected>'+New+'</option>';
						//output +='<option value="'+datos['id']+'">'+datos['name']+'</option>';
					}
						
				
				});
				
					document.getElementById("templaSms").style.display = "block";	
					$("#tempSms select").append(output);
					
					if (out==1){
						//console.log('dentro');
						$('#temSms').selectmenu('refresh');
					}							
	
			}	
	});
				
}

function getTemplateFAX(){
	
	var output ="";
	var output2 ="";
	var out ="";
	var out2 ="";
	var New ="New";
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/mycontracts_tabs/get_templates.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'modo': 'obtener',
			'id': 0,
			'type':'docs'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			//console.log(obj.data.subject);
			//console.log(obj.data.body);
			
			//$("#bodyFax").val(obj.data.body);
			tinyMCE.get('bodyFax').setContent(obj.data.body);
			
	});
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'template_type': 4,
			'type':'docstemplates'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			if(obj.success) {
				var j=0;
				var k=0;
				
				var idcombo=0;
				$.each(obj.results, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='name' || userkey=='id' || userkey=='default'){
								datos[userkey]=uservalue;
								//console.debug(userkey);
						}				
					});
					
					valor[i++]=datos;
					
					//console.log(datos['default']);
					output2 +=''+datos['default']+'';
					
					if (j==0){
						output ='<option value="'+New+'">'+New+'</option>';
						j++;
						idcombo=datos['id'];
					}
					
					if(output2==1){
						out=1;	
					}
					
									
				});
				
				j=0;
				$.each(obj.results, function( key, value ) {
					
					if(out==1){
						if(value['default']==1){					
							output +='<option value="'+value['id']+'" selected>'+value['name']+'</option>';							
						}else{
							output +='<option value="'+value['id']+'">'+value['name']+'</option>';
						}
					}else{
						if(j==0){
							output +='<option value="'+value['id']+'" selected>'+value['name']+'</option>';	
						}else
							output +='<option value="'+value['id']+'">'+value['name']+'</option>';
						j++;
					}
				});
			 														
				if (out==1){
					$("#tempFax select").append(output);
					$('#temFax').selectmenu('refresh');	
				}else{
					$("#tempFax select").append(output);
					$('#temFax').selectmenu('refresh');	
					
					$.ajax({
						url: 'http://reifax.com/mreifax/mysetting_tabs/mycontracts_tabs/get_templates.php',  
						type: 'POST',
						data: { 			
							'userid': userid,
							'modo': 'obtener',
							'id': idcombo,
							'type':'docs'

						}
					}).done(function (data){
						//alert(data);
							var obj = JSON.parse(data);
							//console.log(obj.data.subject);
							console.log(obj.data.body);
							
							//$("#bodyFax").val(obj.data.body);
							tinyMCE.get('bodyFax').setContent(obj.data.body);
							
					});
				}	
					
					
					
			}	
	});
				
}

function getTemplateFAXChange(idtemFax){
	
	var output ="";
	var output2 ="";
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/mycontracts_tabs/get_templates.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'modo': 'obtener',
			'id': idtemFax,
			'type':'docs'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			//console.log(obj.data.subject);
			console.log(obj.data.body);
			
			//$("#bodyFax").val(obj.data.body);
			tinyMCE.get('bodyFax').setContent(obj.data.body);
			
	});
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'template_type': 4,
			'type':'docstemplates'

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			if(obj.success) {
			
				$.each(obj.results, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='name' || userkey=='id' || userkey=='default'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					
					console.log(datos['default']);
					output2 +=''+datos['default']+'';
	
				
				});
																	
					document.getElementById("templaFAX").style.display = "block";										
					$("#tempFax select").append(output);
					$('#temFax').selectmenu('refresh');										
					
			}	
	});
				
}

function sendEMAIL(){
	
	var id = JSON.parse(localStorage.getItem('key'));
	var type = JSON.parse(localStorage.getItem('key3'));
	
	var subject   = $("textarea#subjectEmail").val();
	var body = $("textarea#bodyEmail").val();
	
	var upload = $("input#imageUpload").val();
	
	$("#tem").prop("selected", true);
	var templete = $("#tem option:selected").val();
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	$("input#userid").val(userid);
	$("input#pid").val(id.parcelid);
	$("input#pid").val(id.parcelid);
	
	$.ajax({
		url: 'http://reifax.com/mreifax/overview_contract/verifications.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'module': 'mailsettings',
			'action': ''

		}
	}).done(function (data){
		//alert(data);
	});	
	
	var formData   = new FormData($("#questionf")[0]);
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followsendmail.php',    
		type: 'POST',
		enctype: 'multipart/form-data',
		data: { 		
			'rtemplateselect': 'T',
			'action-upload': 'upload',
			'action-delete': 'delete',
			'cantidadupload': 1,
			'file': upload,
			'sendmail': 'on',
			'sendme': 'off',
			'userid': userid,
			'pid': id.parcelid,
			'subject': subject,
			'body': body,
			'contracttemplate': templete,
			'typeFollow': type.type
		
		},
		success: function(data, textStatus, jqXHR){
			//alert(data);
				
			if(data){
				alert('Email successfully');
				$("#formEmail").modal('hide');
				$('#menuProperty').panel("close");
				$.mobile.changePage('#followingHtml');
				
			}else{
				alert('error');
			}
		},
		error: function (jqXHR, textStatus, errorThrown){
			alert('error');
		}
	});
	
	
	
}


function sendSMS(){
	
	//var userid = 3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
	var ciclo='';
	
	if (checkid==''){
		var typeFollow = JSON.parse(localStorage.getItem('key3'));
		var typeFollow = typeFollow.type;
		var id = JSON.parse(localStorage.getItem('key'));
		var parcelid =id.parcelid;
	}else if (checkid==1){
		var typeFollow = JSON.parse(localStorage.getItem('typefollow'));
		var typeFollow = typeFollow.typefollow;
		var pid = JSON.parse(localStorage.getItem('pid'));
		var parcelid =pid.parcelid;
	}else{
		var parcelid =checkid;
		ciclo= 'multi';
		//alert(parcelid);
	}

	//var body = $("textarea#bodySms").val();
	  var body = tinyMCE.get('bodySms').getContent();
	
	$("#temSms").prop("selected", true);
	var templete = $("#temSms option:selected").val();

	$.ajax({
		url: 'http://reifax.com/mreifax/overview_contract/verifications.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'module': 'mailsettings',
			'action': ''

		}
	}).done(function (data){
		//alert(data);
	});	
	
	if (ciclo=='multi'){
		var idaux=0;
		
		for(i=0;i<checkid.length;i++){
			//alert(checkid[i]);			 
			$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followsendsms_email.php',    
			type: 'POST',
			data: { 			
				'rtemplateselect': 'T',
				'contracttemplate': templete,
				'sms_newtemplatetext': body,			
				'userid': userid,
				'pid': checkid[i],
				'action-upload': '',
				'action-delete': '',
				'cantidadupload': '',
				'typeFollow': typeFollow,
				'completetask': 'false'

			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
					
				if(data){
					send=true;
					$.mobile.changePage('#followingHtml');
					
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
				alert('error');
			}
		});
		
		}
		
		if(send==true){
			alert('SMS successfully');
		}
	
	}else{
		
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followsendsms_email.php',    
			type: 'POST',
			data: { 			
				'rtemplateselect': 'T',
				'contracttemplate': templete,
				'sms_newtemplatetext': body,			
				'userid': userid,
				'pid': parcelid,
				'action-upload': '',
				'action-delete': '',
				'cantidadupload': '',
				'typeFollow': typeFollow,
				'completetask': 'false'

			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
					
				if(data){
					alert('SMS successfully');
					$.mobile.changePage('#followingHtml');
					
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
				alert('error');
			}
		});		
	
	}

}

function sendSMS_SCHEDULE(id){
	
	//var userid = 3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
	var ciclo='';
	
	if (checkid==''){
		var typeFollow = JSON.parse(localStorage.getItem('key3'));
		var typeFollow = typeFollow.type;
		var id = JSON.parse(localStorage.getItem('key'));
		var parcelid =id.parcelid;
	}else if (checkid==1){
		var typeFollow = JSON.parse(localStorage.getItem('typefollow'));
		var typeFollow = typeFollow.typefollow;
		var pid = JSON.parse(localStorage.getItem('pid'));
		var parcelid =pid.parcelid;
	}else{
		var parcelid =checkid;
		ciclo= 'multi';
		//alert(parcelid);
	}
	
	var task = JSON.parse(localStorage.getItem('task'));
	var day = JSON.parse(localStorage.getItem('day'));
	var hour = JSON.parse(localStorage.getItem('hour'));
	var exectype = JSON.parse(localStorage.getItem('exectype'));
	var detail = JSON.parse(localStorage.getItem('detail'));
	
	//var body = $("textarea#bodySms").val();
	  var body = tinyMCE.get('bodySms').getContent();
	
	$("#temSms").prop("selected", true);
	var templete = $("#temSms option:selected").val();
	
	var hora = hour.hour.split(':');
	if (hora[0]>12) { 
		var hour2 = hora[0] - 12;
		var hour3 = hour2+':'+hora[1]+' PM'
	} else if (hora[0]==00) {
		var hour2  = 12;
		var hour3 = hour2+':'+hora[1]+' AM'
	}else if (hora[0]==12) {
		var hour2  = 12;
		var hour3 = hour2+':'+hora[1]+' PM'
	}else{
		if(hora[0]!=10){
			var res = hora[0].replace("0", "");
			var hour3= res+':'+hora[1]+' AM';
		}else{
			var hour3= hour.hour+' AM'
		}
	}
	
	$.ajax({
		url: 'http://reifax.com/mreifax/overview_contract/verifications.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'module': 'mailsettings',
			'action': ''

		}
	}).done(function (data){
		//alert(data);
	});	
	

	if (ciclo=='multi'){
		var idaux=0;
		
		for(i=0;i<checkid.length;i++){
			//alert(checkid[i]);			 
			$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followshedule.php',    
				type: 'POST',
				data: { 	
					'userid': userid,
					'task': task.task,
					'detail': detail.detail,
					'odate': day.day,
					'ohour': hour3,
					'status': '',
					'typeExec': exectype.exectype,
					'type': 'insert',
					'rtemplateselect': 'T',
					'contracttemplate': templete,
					'sms_newtemplatetext': body,			
					'userid': userid,
					'pid': checkid[i],
					'parcelid': checkid[i],
					'action-upload': '',
					'action-delete': '',
					'cantidadupload': '',
					'typeFollow': typeFollow,
					'completetask': 'false'

				},
				success: function(data, textStatus, jqXHR){
					//alert(data);
						
					if(data){
						send=true;
						$.mobile.changePage('#followingHtml');
					}else{
						alert('error');
					}
				},
				error: function (jqXHR, textStatus, errorThrown){
					alert('error');
				}
			});

		}
		
		if(send==true){
			alert('All Follow Schedule Task were created. 0 presented errors. Please, verify them on the Pending Task tab' );
		}

	}else{
	
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followshedule.php',    
			type: 'POST',
			data: { 	
				'userid': userid,
				'task': task.task,
				'detail': detail.detail,
				'odate': day.day,
				'ohour': hour3,
				'status': '',
				'typeExec': exectype.exectype,
				'type': 'insert',
				'rtemplateselect': 'T',
				'contracttemplate': templete,
				'sms_newtemplatetext': body,			
				'userid': userid,
				'pid': parcelid,
				'parcelid': parcelid,
				'action-upload': '',
				'action-delete': '',
				'cantidadupload': '',
				'typeFollow': typeFollow,
				'completetask': 'false'

			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
					
				if(data){
					alert('All Follow Schedule Task were created. 0 presented errors. Please, verify them on the Pending Task tab' );
					$.mobile.changePage('#followingHtml');
					
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
				alert('error');
			}
		});	
	}
	
}


function sendFAX(){
	
	var ciclo='';
	
	if (checkid==''){
		var typeFollow = JSON.parse(localStorage.getItem('key3'));
		var typeFollow = typeFollow.type;
		var id = JSON.parse(localStorage.getItem('key'));
		var parcelid =id.parcelid;
	}else if (checkid==1){
		var typeFollow = JSON.parse(localStorage.getItem('typefollow'));
		var typeFollow = typeFollow.typefollow;
		var pid = JSON.parse(localStorage.getItem('pid'));
		var parcelid =pid.parcelid;
	}else{
		var parcelid =checkid;
		ciclo= 'multi';
		//alert(parcelid);
	}
	
	//var body = $("textarea#bodyFax").val();
	var body = tinyMCE.get('bodyFax').getContent();
	
	$("#temFax").prop("selected", true);
	var templete = $("#temFax option:selected").val();
	
	//var userid =3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/overview_contract/verifications.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'module': 'mailsettings',
			'action': ''

		}
	}).done(function (data){
		//alert(data);
	});	
	
	if (ciclo=='multi'){
		var idaux=0;
		
		for(i=0;i<checkid.length;i++){
			//alert(checkid[i]);		
			$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followsendfax.php',    
				type: 'POST',
				data: { 			
					'userid': userid,
					'pid': checkid[i],
					'body': body,
					'typeFollow': typeFollow

				},
				success: function(data, textStatus, jqXHR){
					//alert(data);
						
					if(data){
						send=true;
						$.mobile.changePage('#followingHtml');
					}else{
						alert('error');
					}
				},
				error: function (jqXHR, textStatus, errorThrown){
					alert('error');
				}
			});		
		}
		
		if(send==true){
			alert('Send Fax successfully');
			$("#formFax").modal('hide');
			$('#menuProperty').panel("close");
		}
		
	}else{
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followsendfax.php',    
			type: 'POST',
			data: { 			
				'userid': userid,
				'pid': parcelid,
				'body': body,
				'typeFollow': typeFollow

			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
					
				if(data){
					alert('Send Fax successfully');
					$("#formFax").modal('hide');
					$('#menuProperty').panel("close");
					$.mobile.changePage('#followingHtml');
					
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
				alert('error');
			}
		});		
	}
	
}

function SignMeUp(){
	
	alert('llamandoo...');

	var a = document.createElement("a");

	a.setAttribute('href","call:'+584148829469+'');
}

function gettypecontract(){
	
	output ="";
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/custom_contract/includes/php/functions.php',  
		type: 'POST',
		data: { 
			'userid': userid,
			'idfunction': 'ComboContracts'
		}
	}).done(function (data){
		//alert(data);
		
		var obj = JSON.parse(data);
		
		
			var output = "";
			var no="NO";
			var none="None";
					
			//recorremos cada email
			$.each(obj.results, function( key, value ) {
				
				var datos = new Array();
				var valor = new Array();
				var i=0;
						
				$.each( value, function ( userkey, uservalue) {
					if(userkey=='name' || userkey=='id'){
						datos[userkey]=uservalue;
						valor[i++]=userkey;
						//console.debug(userkey);
					}
								
				});
					
					output =''+datos['id']+'';		
					return false;	
			});			
				
				var idtypec= output;			
	
				var object = { 'idtypec' : idtypec };
				localStorage.setItem('idtypec', JSON.stringify(object));	
				
	});

}

function getCombo(){
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/custom_contract/includes/php/functions.php',  
		type: 'POST',
		data: { 
			'userid': userid,
			'idfunction': 'ComboContracts'
		}
	}).done(function (data){
		//alert(data);
		
		var obj = JSON.parse(data);
		var output = "";
		var no="NO";
		var none="None";
		var j=0;	
		var namep='';
		//recorremos cada email
			
		$.each(obj.results, function( key, value ) {
		//recorremos los valores de cada email
			var datos = new Array();
			var valor = new Array();
			var i=0;
					
			$.each( value, function ( userkey, uservalue) {
				if(userkey=='name' || userkey=='id' || userkey=='tpl1_type' || userkey=='tpl1_name' || userkey=='tpl1_addr' || userkey=='tpl1_addr2' || userkey=='tpl1_addr3' || userkey=='inspectionDays' ){
					datos[userkey]=uservalue;
					valor[i++]=userkey;
					//console.debug(userkey);
				}
										
			});
				output6  =''+datos['tpl1_name']+'';					
				output7  =''+datos['tpl1_addr']+'';					
				output8  =''+datos['tpl1_addr2']+'';					
				output9  =''+datos['tpl1_addr3']+'';					
				output10 =''+datos['inspectionDays']+'';					
				output11 =''+datos['tpl1_type']+'';	
				return false;
					
		});			
			$("#inspecDay").val(output10);
					
			if(output11=='B'){
				$("#buyername").val(output6);
				$("#addressline1").val(output7);
				$("#addressline2").val(output8);
				$("#addressline3").val(output9);
			}else if(output11=='S'){
				$("#sellername").val(output6);
				$("#selleraddressline1").val(output7);
				$("#selleraddressline2").val(output8);
				$("#selleraddressline3").val(output9);
					
			}
					
	});

}



function getDocAdd(idtypec){
	
	var out ="";
	var idout ="";
	var output ="";
	var output2 ="";
	var output3 ="";
	var output4 ="";
	var output5 ="";
	var output6 ="";
	var output7 ="";
	var output8 ="";
	var output9 ="";
	var output10 ="";
	var output11 ="";
	$("#che").empty();
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
	var offer = JSON.parse(localStorage.getItem('offer'));
	var owner = JSON.parse(localStorage.getItem('owner'));
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/mycontracts_tabs/listaddons.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'type': idtypec

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			if(obj.success) {
			
				$.each(obj.data, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='name' || userkey=='active' || userkey=='id'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					
					console.log(datos['name']);
					console.log(datos['active']);
					
					output =''+datos['name']+'';
					output2 =''+datos['id']+'';
					output3 =''+datos['active']+'';
					
					var $comboGroups = $("#che");
					if (output3=='true'){
						$comboGroups.append("<div class='checkbox'><input style='margin-left:5px;' name='che' id='check[]' type='checkbox' class='check' value='"+output2+"' checked><label style='margin-left: 40px;padding-top: 5px;'>"+output+"</label></input></div>");
					}else{
						$comboGroups.append("<div class='checkbox'><input style='margin-left:5px;' name='che' id='check2[]' type='checkbox' class='check' value='"+output2+"'><label style='margin-left: 40px;padding-top: 5px;'>"+output+"</label></input></div>");
					}
				
				});		
					
			}	
	});
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'type': 'emailtemplates',
			'newTemplate':false
		}
	}).done(function (data){
		//alert(data);
		
		var obj = JSON.parse(data);
		
		if(obj.success) {
			var output = "";
			var no="NO";
			var none="None";
					
			//recorremos cada email
			//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
			$.each(obj.results, function( key, value ) {
					
				var datos = new Array();
				var valor = new Array();
				var i=0;
						
				$.each( value, function ( userkey, uservalue) {
					if(userkey=='name' || userkey=='id' || userkey=='default'){
						datos[userkey]=uservalue;
						valor[i++]=userkey;
								
					}
										
				});
						
					console.log(datos['default']);
								
					out +=''+datos['default']+'';	
					
					if(out==1){
						idout=1;
						output4 +='<option value="'+datos['id']+'" selected>'+datos['name']+'</option>';		
					}else{
						output4 +='<option value="'+datos['id']+'">'+datos['name']+'</option>';		
					}
						
			});			
						
					$("#tempContract select").append(output4);
					//$('#templateContract').val(out).selectmenu('refresh', true);
					
					if (idout==1){
						//console.log('dentro');
						$('#templateContract').selectmenu('refresh');
					}
					

		}					
					
	});
	
	$.ajax({
		url: 'http://reifax.com/mreifax/custom_contract/includes/php/functions.php',  
		type: 'POST',
		data: { 
			'userid': userid,
			'idfunction': 'ComboContracts'
		}
	}).done(function (data){
		//alert(data);
		
		var obj = JSON.parse(data);
		//alert(obj.success);
		
			var output = "";
			var no="NO";
			var none="None";
			var j=0;	
			var namep='';
			var month = 0;
			var day = 0;
			//recorremos cada email
			//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
			$.each(obj.results, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada email
						
				var datos = new Array();
				var valor = new Array();
				var i=0;
					
						
				$.each( value, function ( userkey, uservalue) {
					if(userkey=='name' || userkey=='id' || userkey=='tpl1_type' || userkey=='tpl1_name' || userkey=='tpl1_addr' || userkey=='tpl1_addr2' || userkey=='tpl1_addr3' || userkey=='inspectionDays' ){
						datos[userkey]=uservalue;
						valor[i++]=userkey;
						//console.debug(userkey);
					}
										
				});
						
					console.log(j);
					if(j==0){
						namep=datos['name'];
						output5 +='<option value="'+datos['id']+'" selected="selected">'+datos['name']+'</option>';			
					}else{
						output5 +='<option value="'+datos['id']+'">'+datos['name']+'</option>';			
					}
					
					j++;	
								
					
			});			
					 					
					$("#docContract select").append(output5);
					$('#documentContract').selectmenu('refresh', true);
					
					//$('#docContract select').val(output5).selectmenu('refresh');
					
					$('#offprice').val(offer.offer);
					
					//$('#sellername').val(owner.owner);
					
					var today=new Date();
			 		
					if(today.getMonth() < 10)
					month = '0'+today.getMonth();
					
					if(today.getDate() < 10)
					day = '0'+today.getMonth();
					
					//var f=month + "/" + day + "/" + today.getFullYear();
					
					
					
					hoy = new Date();
					i=0;
					while (i<5) {
						hoy.setTime(hoy.getTime()+1*24*60*60*1000); // añadimos 1 día
						//if (hoy.getDay() != 6 && hoy.getDay() != 0)
						i++;  
					}
						mes = hoy.getMonth()+1;
						dia = hoy.getDate();
						if (mes<10) mes = '0'+mes;
						if (dia<10) dia = '0'+dia;
						fecha = mes + '/' + dia + '/' + hoy.getFullYear();
						console.log(fecha);
					
					hoy2 = new Date();
					j=0;
					while (j<35) {
						hoy2.setTime(hoy2.getTime()+1*24*60*60*1000); // añadimos 1 día
						//if (hoy.getDay() != 6 && hoy.getDay() != 0)
						j++;  
					}
						mes2 = hoy2.getMonth()+1;
						dia2 = hoy2.getDate();
						if (mes2<10) mes2 = '0'+mes2;
						if (dia2<10) dia2 = '0'+dia2;
						fecha2 = mes2 + '/' + dia2 + '/' + hoy2.getFullYear();
						console.log(fecha2);
					
					//var acceptanceDate = new Date();
					//t = new Date;					
					//m = acceptanceDate.getMonth()+1;
					//d = acceptanceDate.getDate()+5;
					//if(m < 10){m = "0"+m}
					//if(d < 10){d = "0"+d}
					//y = acceptanceDate.getFullYear();
					
					//acceptanceDate=m+'/'+d+'/'+y;
					//console.log(acceptanceDate);
					
					//var closingDate=new Date();
					//closingDate.setDate(closingDate.getDate()+30);
					
					$("#accepDate").val(mes + '/' + dia + '/' + hoy.getFullYear());
					$("#closingDate").val(mes2 + '/' + dia2 + '/' + hoy2.getFullYear());
					
					
					
					
	});
	
	$.ajax({
		url: 'http://reifax.com/mreifax/custom_contract/includes/php/functions.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'idfunction': 'getStandarVars'
		}
	}).done(function (data){
		//alert(data);
		
		var obj = JSON.parse(data);
		//alert(obj.data.initialDeposit);
		
		$("#initialDep").val(obj.data.initialDeposit);
		$("#additDep").val(obj.data.additionalDeposit);
		
	});
	
}

function contra() {
//alert('selecionando combo');
var dc = document.getElementById("documentContract").value;
//alert(dc);
getDocContract(dc)
/*if (d==1){
	document.getElementById('tasksc').style.display = "none";	
	document.getElementById('tasksc2').style.display = "block";	
}*/
}

function getDocContract(id){
	
	var output ="";
	var output2 ="";
	var output3 ="";
	var output4 ="";
	var output5 ="";
	var output6 ="";
	var output7 ="";
	var output8 ="";
	var output9 ="";
	var output10 ="";
	var output11 ="";
	$("#che").empty();
	//$("#tempContract").empty();
	$("#tempContract select").empty();
	
	 
	$("#buyername").val("");
	$("#addressline1").val("");
	$("#addressline2").val("");
	$("#addressline3").val("");
	
	$("#sellername").val("");
	$("#selleraddressline1").val("");
	$("#selleraddressline2").val("");
	$("#selleraddressline3").val("");
	
	$("#inspecDay").val("");
	
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/mycontracts_tabs/listaddons.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'type': id

		}
	}).done(function (data){
		//alert(data);
			var obj = JSON.parse(data);
			if(obj.success) {
			
				$.each(obj.data, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='name' || userkey=='active' || userkey=='id'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
						}				
					});
					
					console.log(datos['name']);
					console.log(datos['active']);
					
					output =''+datos['name']+'';
					output2 =''+datos['id']+'';
					output3 =''+datos['active']+'';
					
					var $comboGroups = $("#che");
					if (output3=='true'){
						$comboGroups.append("<div class='checkbox'><input style='margin-left:5px;' name='che' id='check[]'  type='checkbox' class='check' value='"+output2+"' checked><label style='margin-left: 40px;padding-top: 5px;'>"+output+"</label></input></div>");
					}else{
						$comboGroups.append("<div class='checkbox'><input style='margin-left:5px;' name='che' id='check2[]' type='checkbox' class='check' value='"+output2+"'><label style='margin-left: 40px;padding-top: 5px;'>"+output+"</label></input></div>");
					}
				
				});		
					
			}	
	});
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'type': 'emailtemplates',
			'newTemplate':false
		}
	}).done(function (data){
		//alert(data);
		
		var obj = JSON.parse(data);
		//alert(obj.success);
		if(obj.success) {
			var output = "";
			var no="NO";
			var none="None";
					
			//recorremos cada email
			//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
			$.each(obj.results, function( key, value ) {
					//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
					//recorremos los valores de cada email
						
						var datos = new Array();
						var valor = new Array();
						var i=0;
						
						$.each( value, function ( userkey, uservalue) {
							if(userkey=='name' || userkey=='id'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
										
						});
						
						console.log(datos['name']);
						output4 +='<option value="'+datos['id']+'">'+datos['name']+'</option>';					
						
					});			
						
						$("#tempContract select").append(output4);
						$('#tempContract').selectmenu('refresh', true);

				}					
					
	});
	
	$.ajax({
		url: 'http://reifax.com/mreifax/custom_contract/includes/php/functions.php',  
		type: 'POST',
		data: { 
			'userid': userid,
			'idcontract': id,
			'idfunction': 'ComboContracts2'
		}
	}).done(function (data){
		//alert(data);
		
		var obj = JSON.parse(data);
		//alert(obj.success);
		
			var output = "";
			var no="NO";
			var none="None";
					
			//recorremos cada email
			//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
			$.each(obj.results, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada email
						
				var datos = new Array();
				var valor = new Array();
				var i=0;
						
				$.each( value, function ( userkey, uservalue) {
					if(userkey=='name' || userkey=='id' || userkey=='tpl1_type' || userkey=='tpl1_name' || userkey=='tpl1_addr' || userkey=='tpl1_addr2' || userkey=='tpl1_addr3' || userkey=='inspectionDays' ){
						datos[userkey]=uservalue;
						valor[i++]=userkey;
						//console.debug(userkey);
					}
										
				});
						
					console.log(datos['inspectionDays']);
					output5 +='<option value="'+datos['id']+'">'+datos['name']+'</option>';					
					output6  =''+datos['tpl1_name']+'';					
					output7  =''+datos['tpl1_addr']+'';					
					output8  =''+datos['tpl1_addr2']+'';					
					output9  =''+datos['tpl1_addr3']+'';					
					output10 =''+datos['inspectionDays']+'';					
					output11 =''+datos['tpl1_type']+'';					
						
			});			
					console.log(output11);					
					//$("#docContract select").append(output5);
					$("#inspecDay").val(output10);
					
					if(output11=='B'){
						$("#buyername").val(output6);
						$("#addressline1").val(output7);
						$("#addressline2").val(output8);
						$("#addressline3").val(output9);
					}else if(output11=='S'){
						//$("#sellername").val(output6);
						$("#selleraddressline1").val(output7);
						$("#selleraddressline2").val(output8);
						$("#selleraddressline3").val(output9);
					
					}
					
	});
	
	
}

function comboschedule() {
	//alert('selecionando combo');
	var cschedule = document.getElementById("temschedule").value;
	//alert(cschedule);
	var idtem= cschedule;
	var object = { 'idtem' : idtem };
	localStorage.setItem('idtem', JSON.stringify(object));
	
	getComboSchedule(cschedule);

}

function getComboSchedule(idtemp){
	var none="";
	if (idtemp==0){
		$("#typeExecSchedule").show();
		$("#taskSchedule").show();
		$("#scheduleDetail").show();
		$("#textSchedule").show();
		$("#tooschedule").hide();
		tinyMCE.get('detailsch').setContent('');
		vacio=false;
	}else{
		$("#typeExecSchedule").hide();
		$("#taskSchedule").hide();
		$("#scheduleDetail").hide();
		$("#textSchedule").hide();
		
		$("#tempschedule option:selected").val(idtemp);
		getTemplateScheduleChange(idtemp);	
		vacio=true;
		
		
		if (checkid==''){
			var id = JSON.parse(localStorage.getItem('key'));
			var parcelid =id.parcelid;
		}else if (checkid==1){
			var pid = JSON.parse(localStorage.getItem('pid'));
			var parcelid =pid.parcelid;
		}else{
			var parcelid =checkid;
			none= 'none';	
		}
		
		var detalle=1;
		if (none!='none'){
			$("#tooschedule").show();
			getContactSchedule(parcelid,detalle);
		}
	}
}

function comboemail() {
	//alert('selecionando combo');
	var cemail = document.getElementById("tem").value;
	//alert(cemail);
	getComboEmail(cemail);

}

function newEmail(){
	
	$('#imagePreview').hide();
	$("input#uploadFileEmail").val("");
	//$("textarea#bodyEmail").val("");
	tinyMCE.get('bodyEmail').setContent('');
	$("textarea#subjectEmail").val("");	
	var New="New";
	getComboEmail(New);
	$("#tem").val("New");
	$('#tem').selectmenu('refresh', true);
	
	
}

function getComboEmail(idtemp){
	
	if (idtemp=='New'){
		//document.getElementById('imagePreview').style.display = "none";
		$('#imagePreview').hide();
		$("input#uploadFileEmail").val("");
		$("textarea#bodyEmail").val("");
		$("textarea#subjectEmail").val("");
		
		
	}else{
		//$('select option').remove();
		//$("#temp select").empty();
		$("#temp option:selected").val(idtemp);
		getTemplateEmailChange(idtemp);
		
	}
}

function combosms() {
	//alert('selecionando combo');
	var csms = document.getElementById("temSms").value;
	//alert(csms);
	getComboSms(csms)

}

function getComboSms(idtemsms){
	
	if (idtemsms=='New'){
		$("textarea#bodySms").val("");	
	}else{
		$("#tempSms option:selected").val(idtemsms);
		getTemplateSMSChange(idtemsms);
	}
}

function newSms(){
	
	//$("textarea#bodySms").val("");	
	tinyMCE.get('bodySms').setContent('');
	
	var New="New";
	getComboSms(New);
	$("#temSms").val("New");
	$('#temSms').selectmenu('refresh', true);
}

function combofax() {
	//alert('selecionando combo');
	var cfax = document.getElementById("temFax").value;
	//alert(cfax);
	getComboFax(cfax)

}
 
function getComboFax(idtemFax){
	
	if (idtemFax=='New'){
		//document.getElementById('imagePreview').style.display = "none";
		$('#imagePreviewFax').hide();
		tinyMCE.get('bodyFax').setContent('');
	}else{
		$("#tempFax option:selected").val(idtemFax);
		getTemplateFAXChange(idtemFax);
	}
}

function newFax(){
	$('#imagePreviewFax').hide();
	//$("textarea#bodyFax").val("");	
	tinyMCE.get('bodyFax').setContent('');
	
	var New="New";
	getComboFax(New);
	$("#temFax").val("New");
	$('#temFax').selectmenu('refresh', true);
}



function getagentsearch(){
	
	output ="";
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',   
		type: 'POST',
		data: { 
			'userid': userid,
			'sort': 'agent',
			'dir': 'asc'
		}
	}).done(function (data){
		//alert(data);
		
		var obj = JSON.parse(data);
		//alert(obj.success);
		
			var output = "";
			var no="NO";
			var none="None";
		if(obj.success) {			
			//recorremos cada email
			//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
			$.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada email
						
				var datos = new Array();
				var valor = new Array();
				var i=0;
						
				$.each( value, function ( userkey, uservalue) {
					if(userkey=='agentid' || userkey=='agent'){
						datos[userkey]=uservalue;
						valor[i++]=userkey;
						console.debug(userkey);
					}
										
				});
						
					console.log(datos['agentid']);				
					output +='<option value="'+datos['agentid']+'">'+datos['agent']+'</option>';					
					
			});			
				
				$("#searchCont select").append(output);
				$("#searchContS select").append(output);
				//$('#searchContact').selectmenu('refresh', true);
					
		}		
	});

}

function selectContact() {
//alert('selecionando combo');
var sc = document.getElementById("searchContact").value;
//alert(sc);
getInfoContact(sc);

var agentidc= sc;
var object = { 'agentidc' : agentidc };
localStorage.setItem('agentidc', JSON.stringify(object));

}

function getInfoContact(id){
	
	output ="";
	output2 ="";
	output3 ="";
	output4 ="";
	output5 ="";
	output6 ="";
	output7 ="";
	output8 ="";
	output9 ="";
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
	var home='Home';
	var office='Office';
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',   
		type: 'POST',
		data: { 
			'userid': userid,
			'agentid': id
		}
	}).done(function (data){
		//alert(data);
		
		var obj = JSON.parse(data);
		//alert(obj.success);
		
			var output = "";
			var no="NO";
			var none="None";
		if(obj.success) {			
			//recorremos cada email
			//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
			$.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada email
						
				var datos = new Array();
				var valor = new Array();
				var i=0;
						
				$.each( value, function ( userkey, uservalue) {
					if(userkey=='agentid' || userkey=='agentype' || userkey=='typeemail1' || userkey=='email' || userkey=='typeemail2' || userkey=='email2' ||
					userkey=='address1' || userkey=='typeaddress1' || userkey=='address2' || userkey=='typeaddress2'){
						datos[userkey]=uservalue;
						valor[i++]=userkey;
						console.debug(userkey);
					}
										
				});
						
								
					output +=''+datos['agentype']+'';
					output2 +=''+datos['typeemail1']+'';					
					output3 +=''+datos['email']+'';					
					output4 +=''+datos['typeemail2']+'';					
					output5 +=''+datos['email2']+'';	
					output6 +=''+datos['typeaddress1']+'';						
					output7 +=''+datos['address1']+'';					
					output8 +=''+datos['typeaddress2']+'';				
					output9 +=''+datos['address2']+'';					
										
					
			});			
					$("#searchty").val(output);
					if(output2==0){
						$("#searchemai1").val(home);
					}else if(output2==1){
						$("#searchemai1").val(office);
					}
					
					$("#searchema1").val(output3);
					
					if(output4==0){
						$("#searchemai2").val(home);
					}else if(output4==1){
						$("#searchemai2").val(office);
					}
					
					$("#searchema2").val(output5);
					
					if(output6==0){
						$("#searchaddre1").val(home);
					}else if(output6==null){
						$("#searchaddre1").val(home);
					}else if(output6==1){
						$("#searchaddre1").val(office);
					}
					
					if(output7!='null'){
						$("#searchaddr1").val(output7);
					}
					
					if(output8==0){
						$("#searchaddre2").val(home);
					}else if(output8==null){
						$("#searchaddre2").val(home);
					}else if(output8==1){
						$("#searchaddre2").val(office);
					}
					
					if(output9!='null'){
						$("#searchaddr2").val(output9);
					}
			
					
		}		
	});

}

function selectContactS() {
//alert('selecionando combo');
var sc = document.getElementById("searchContactS").value;
//alert(sc);
getInfoContactS(sc);

var agentidc= sc;
var object = { 'agentidc' : agentidc };
localStorage.setItem('agentidc', JSON.stringify(object));

}

function getInfoContactS(id){
	
	output ="";
	output2 ="";
	output3 ="";
	output4 ="";
	output5 ="";
	output6 ="";
	output7 ="";
	output8 ="";
	output9 ="";
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
	var home='Home';
	var office='Office';
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',   
		type: 'POST',
		data: { 
			'userid': userid,
			'agentid': id
		}
	}).done(function (data){
		//alert(data);
		
		var obj = JSON.parse(data);
		//alert(obj.success);
		
			var output = "";
			var no="NO";
			var none="None";
		if(obj.success) {			
			//recorremos cada email
			//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
			$.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada email
						
				var datos = new Array();
				var valor = new Array();
				var i=0;
						
				$.each( value, function ( userkey, uservalue) {
					if(userkey=='agentid' || userkey=='agentype' || userkey=='typeemail1' || userkey=='email' || userkey=='typeemail2' || userkey=='email2' ||
					userkey=='address1' || userkey=='typeaddress1' || userkey=='address2' || userkey=='typeaddress2'){
						datos[userkey]=uservalue;
						valor[i++]=userkey;
						console.debug(userkey);
					}
										
				});
						
								
					output +=''+datos['agentype']+'';
					output2 +=''+datos['typeemail1']+'';					
					output3 +=''+datos['email']+'';					
					output4 +=''+datos['typeemail2']+'';					
					output5 +=''+datos['email2']+'';	
					output6 +=''+datos['typeaddress1']+'';						
					output7 +=''+datos['address1']+'';					
					output8 +=''+datos['typeaddress2']+'';				
					output9 +=''+datos['address2']+'';					
										
					
			});			
					$("#searchtyS").val(output);
					if(output2==0){
						$("#searchemai1S").val(home);
					}else if(output2==1){
						$("#searchemai1S").val(office);
					}
					
					if(output3==null){
						$("#searchema1S").val(output3);
					}
					
					if(output4==0){
						$("#searchemai2S").val(home);
					}else if(output4==1){
						$("#searchemai2S").val(office);
					}
					
					if(output5==null){
						$("#searchema2S").val(output5);
					}
					
					if(output6==0){
						$("#searchaddre1S").val(home);
					}else if(output6==null){
						$("#searchaddre1S").val(home);
					}else if(output6==1){
						$("#searchaddre1S").val(office);
					}
					
					if(output7!='null'){
						$("#searchaddr1S").val(output7);
					}
					
					if(output8==0){
						$("#searchaddre2S").val(home);
					}else if(output8==null){
						$("#searchaddre2S").val(home);
					}else if(output8==1){
						$("#searchaddre2S").val(office);
					}
					
					if(output9!='null'){
						$("#searchaddr2S").val(output9);
					}
			
					
		}		
	});

}

function usedContact(){
	$.mobile.changePage('#formContract2');
	
	$("input#buyername").val("");
	$("input#addressline1").val("");
	$("input#addressline2").val("");
	$("input#addressline3").val("");
	
	$("#buyername").empty();
	$("input#addressline1").empty();
	$("#addressline2").empty();
	$("#addressline3").empty();
	
	var output='';
	var output2='';
	var output3='';
	var output4='';
	var output5='';
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
	var agentid = JSON.parse(localStorage.getItem('agentid'));
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',   
		type: 'POST',
		data: { 
			'userid': userid,
			'agentid': agentid.agentid
		}
	}).done(function (data){
		alert(data);
		
		var obj = JSON.parse(data);
		//alert(obj.success);
		
			var output = "";
			var no="NO";
			var none="None";
		if(obj.success) {			
			//recorremos cada email
			//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
			$.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada email
						
				var datos = new Array();
				var valor = new Array();
				var i=0;
						
				$.each( value, function ( userkey, uservalue) {
					if(userkey=='agent' || userkey=='address1' || userkey=='address2'){
						datos[userkey]=uservalue;
						valor[i++]=userkey;
						console.debug(userkey);
					}
										
				});
						
								
					output +=''+datos['agent']+'';
					output2 +=''+datos['address1']+'';					
					output3 +=''+datos['address2']+'';														
					
			});			
					$("#buyername").val("");
					$("#addressline1").val("");
					$("#addressline2").val("");
					$("#addressline3").val("");
					
					$("#buyername").val(output);
					
					if(output2!='null'){
						$("#addressline1").val(output2);
					}else{
						$("#addressline1").val("");
					}
					
					if(output3!='null'){
						$("#addressline2").val(output3);
					}else{
						$("#addressline2").val("");
					}
					
			
					
		}		
	});

}

function usedContactS(){

	$.mobile.changePage('#formContract2');
	
	$("input#sellername").val("");
	
	$("input#addressline1").val("");
	$("input#addressline2").val("");
	$("input#addressline3").val("");
	
	$("#sellername").empty();
	$("selleraddressline1").empty();
	$("#selleraddressline2").empty();
	$("#selleraddressline3").empty();
	
	var output='';
	var output2='';
	var output3='';
	var output4='';
	var output5='';
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
	var agentid = JSON.parse(localStorage.getItem('agentid'));
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',   
		type: 'POST',
		data: { 
			'userid': userid,
			'agentid': agentid.agentid
		}
	}).done(function (data){
		//alert(data);
		
		var obj = JSON.parse(data);
		//alert(obj.success);
		
			var output = "";
			var no="NO";
			var none="None";
		if(obj.success) {			
			//recorremos cada email
			//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
			$.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada email
						
				var datos = new Array();
				var valor = new Array();
				var i=0;
						
				$.each( value, function ( userkey, uservalue) {
					if(userkey=='agent' || userkey=='address1' || userkey=='address2'){
						datos[userkey]=uservalue;
						valor[i++]=userkey;
						console.debug(userkey);
					}
										
				});
						
								
					output +=''+datos['agent']+'';
					output2 +=''+datos['address1']+'';					
					output3 +=''+datos['address2']+'';														
					
			});			
					$("#buyername").val("");
					$("#addressline1").val("");
					$("#addressline2").val("");
					$("#addressline3").val("");
					
					$("#sellername").val(output);
					
					if(output2!='null'){
						$("#selleraddressline1").val(output2);
					}else{
						$("#selleraddressline1").val("");
					}
					
					if(output3!='null'){
						$("#selleraddressline2").val(output3);
					}else{
						$("#selleraddressline2").val("");
					}
					
			
					
		}		
	});

}

function getInvestor(){
	
	$("#offprice").val("");
	var factor = $("input#factoroffer").val();
	
	$("#typefactor").prop("selected", true);
	var typefactor = $("#typefactor option:selected").val();
	
	$("#roundto").prop("selected", true);
	var roundto = $("#roundto option:selected").val();
	
	var pid = JSON.parse(localStorage.getItem('key'));
	var county = JSON.parse(localStorage.getItem('county'));
	
	$.ajax({
		url: 'http://reifax.com/overview_contract/getInvestorOffer.php?db='+county.county+'&pid='+pid.parcelid+'',   
		type: 'POST',
		data: { 
			'lowMedian':typefactor,
			'factor': factor,
			'roundTo': roundto,
			'parcelids_cco': '',
			'parcelids_cca': ''
			
		}
	}).done(function (data){
		alert(data);
		$("#offprice").val(data);
			
	});

}

function getInvestor2(){
	
	var factor = $("input#factoroffer2").val();
	
	$("#typefactor2").prop("selected", true);
	var typefactor = $("#typefactor2 option:selected").val();
	
	$("#roundto2").prop("selected", true);
	var roundto = $("#roundto2 option:selected").val();
	
	var pid = JSON.parse(localStorage.getItem('key'));
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_getinvestor.php?lowMedia='+typefactor+'&factor='+factor+'&roundto='+roundto+'',   
		type: 'POST',
		data: { 
			'userid':userid,
			'pids':pid.parcelid
			
		}
	}).done(function (data){
		alert('Investor Factor ');
		$.mobile.changePage('#followingHtml');
		//$("#offprice").val(data);
			
	});

}


function sendContract(){
	var ciclo='';
	
	if (checkid==''){
		var typeFollow = JSON.parse(localStorage.getItem('key3'));
		var typeFollow = typeFollow.type;
		var id = JSON.parse(localStorage.getItem('key'));
		var parcelid =id.parcelid;
	}else if (checkid==1){
		var typeFollow = JSON.parse(localStorage.getItem('typefollow'));
		var typeFollow = typeFollow.typefollow;
		var pid = JSON.parse(localStorage.getItem('pid'));
		var parcelid =pid.parcelid;
	}else{
		var parcelid =checkid;
		ciclo= 'multi';
		//alert(parcelid);
	}
	
	
	var cadena="";
	var check="";
    $.each($("input[name='che']:checked"), function(){            
        var fieldAddonG = ($(this).val());
		var pa="|";
		cadena +=''+pa+''+fieldAddonG+'';

		check=cadena;
		
    });

	$("#documentContract").prop("selected", true);
	var typetemplate = $("#documentContract option:selected").val();
	//alert(typetemplate);
	
	var buyername = $("input#buyername").val();
	var baddress  = $("input#addressline1").val();
	var baddress2 = $("input#addressline2").val();
	var baddress3 = $("input#addressline3").val();
	
	var sellername = $("input#sellername").val();
	var saddress  = $("input#selleraddressline1").val();
	var saddress2 = $("input#selleraddressline2").val();
	var saddress3 = $("input#selleraddressline3").val();
	
	var deposit = $("input#initialDep").val();
	var additionalDeposit = $("input#additDep").val();
	var inspection = $("input#inspecDay").val();
	var dateAcc = $("input#accepDate").val();
	var dateClo = $("input#closingDate").val();
	
	//var userid= 3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
	var completeTask=false;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/overview_contract/verifications.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'module': 'mailsettings',
			'action': ''

		}
	}).done(function (data){
		//alert(data);
	});	
	
	if (ciclo=='multi'){
		var idaux=0;
		
		for(i=0;i<checkid.length;i++){
			$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followgetcontractJ.php',    
				type: 'POST',
				data: { 			
					'userid': userid,
					'followUpReifax': 1,
					'withContract': 'on',
					'type': typetemplate,
					'county': '',
					'pid': checkid[i],
					'mlnaux': '',
					'fieldAddeum': '',
					'fieldAddonG': check,
					'addr': '',
					'sendtype': 5,
					'typeFollow': typeFollow,
					'completetask': completeTask,
					'stype': 'insert',
					'sendmail': 'on',
					'contracttemplate':3675,
					'rname': '',
					'contractFontType': 1,
					'contractFontSize': 10,
					'contractFontColor': 'black',
					'addonFontType': 1,
					'addonFontSize': 10,
					'addonFontColor': 'black',
					'buyername': buyername,
					'baddress1': baddress,
					'baddress2': baddress2,
					'baddress3': baddress3,
					'sellname' : sellername,
					'saddress1': saddress,
					'saddress2': saddress2,
					'saddress3': saddress3,
					'deposit'  : deposit,
					'additionalDeposit': additionalDeposit,
					'inspection': inspection,
					'dateAcc': dateAcc,
					'dateClo': dateClo
				},
				success: function(data, textStatus, jqXHR){
					//alert(data);
							
					if(data){
						send=true;
						$.mobile.changePage('#followingHtml');
							
					}else{
						alert('error data');
					}
				},
				error: function (jqXHR, textStatus, errorThrown){
					alert('error success');
				}
			});
		}
		if(send==true){
			alert('Send Contract successfully');
		}
		
	}else{
		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followgetcontractJ.php',    
				type: 'POST',
				data: { 			
					'userid': userid,
					'followUpReifax': 1,
					'withContract': 'on',
					'type': typetemplate,
					'county': '',
					'pid': parcelid,
					'mlnaux': '',
					'fieldAddeum': '',
					'fieldAddonG': check,
					'addr': '',
					'sendtype': 5,
					'typeFollow': typeFollow,
					'completetask': completeTask,
					'stype': 'insert',
					'sendmail': 'on',
					'contracttemplate':3675,
					'rname': '',
					'contractFontType': 1,
					'contractFontSize': 10,
					'contractFontColor': 'black',
					'addonFontType': 1,
					'addonFontSize': 10,
					'addonFontColor': 'black',
					'buyername': buyername,
					'baddress1': baddress,
					'baddress2': baddress2,
					'baddress3': baddress3,
					'sellname' : sellername,
					'saddress1': saddress,
					'saddress2': saddress2,
					'saddress3': saddress3,
					'deposit'  : deposit,
					'additionalDeposit': additionalDeposit,
					'inspection': inspection,
					'dateAcc': dateAcc,
					'dateClo': dateClo
				},
				success: function(data, textStatus, jqXHR){
					//alert(data);
							
					if(data){
						alert('Send Contract successfully');
						$.mobile.changePage('#followingHtml');
							
					}else{
						alert('error data');
					}
				},
				error: function (jqXHR, textStatus, errorThrown){
					alert('error success');
				}
			});
	
	}
	
	
	

}

function sendContract_Schedule(){
	var ciclo ='';
	if (checkid==''){
		var typeFollow = JSON.parse(localStorage.getItem('key3'));
		var typeFollow = typeFollow.type;
		var id = JSON.parse(localStorage.getItem('key'));
		var parcelid =id.parcelid;
	}else{
		var typeFollow = JSON.parse(localStorage.getItem('typefollow'));
		var typeFollow = typeFollow.typefollow;
		var pid = JSON.parse(localStorage.getItem('pid'));
		var parcelid =pid.pid;
	}
	
	var task = JSON.parse(localStorage.getItem('task'));
	var day = JSON.parse(localStorage.getItem('day'));
	var hour = JSON.parse(localStorage.getItem('hour'));
	var exectype = JSON.parse(localStorage.getItem('exectype'));
	var detail = JSON.parse(localStorage.getItem('detail'));
		
	var hora = hour.hour.split(':');
		
	if (hora[0]>12) { 
		var hour2 = hora[0] - 12;
		var hour3 = hour2+':'+hora[1]+' PM'
	} else if (hora[0]==00) {
		var hour2  = 12;
		var hour3 = hour2+':'+hora[1]+' AM'
	}else if (hora[0]==12) {
		var hour2  = 12;
		var hour3 = hour2+':'+hora[1]+' PM'
	}else{
		if(hora[0]!=10){
			var res = hora[0].replace("0", "");
			var hour3= res+':'+hora[1]+' AM';
		}else{
			var hour3= hour.hour+' AM'
		}
			
	}
	
	//alert(id.parcelid);
	if (id.parcelid==''){
		ciclo= 'multi';
		alert('multi');
	}
	
	var cadena="";
	var check="";
    $.each($("input[name='che']:checked"), function(){            
        var fieldAddonG = ($(this).val());
		var pa="|";
		cadena +=''+pa+''+fieldAddonG+'';

		check=cadena;
		
    });

	$("#documentContract").prop("selected", true);
	var typetemplate = $("#documentContract option:selected").val();
	//alert(typetemplate);
	
	var buyername = $("input#buyername").val();
	var baddress  = $("input#addressline1").val();
	var baddress2 = $("input#addressline2").val();
	var baddress3 = $("input#addressline3").val();
	
	var sellername = $("input#sellername").val();
	var saddress  = $("input#selleraddressline1").val();
	var saddress2 = $("input#selleraddressline2").val();
	var saddress3 = $("input#selleraddressline3").val();
	
	var deposit = $("input#initialDep").val();
	var additionalDeposit = $("input#additDep").val();
	var inspection = $("input#inspecDay").val();
	var dateAcc = $("input#accepDate").val();
	var dateClo = $("input#closingDate").val();
	
	//var userid= 3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
	var completeTask=false;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/overview_contract/verifications.php',  
		type: 'POST',
		data: { 			
			'userid': userid,
			'module': 'mailsettings',
			'action': ''

		}
	}).done(function (data){
		//alert(data);
	});	
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followshedule.php',    
		type: 'POST',
		data: { 			
			'userid': userid,
			'task': task.task,
			'detail': detail.detail,
			'odate': day.day,
			'ohour': hour3,
			'parcelid': parcelid,
			'typeExec': exectype.exectype,
			'status': '',
			'stype': 'insert',
			'followUpReifax': 1,
			'withContract': 'on',
			'type': typetemplate,
			'county': '',
			'pid': parcelid,
			'mlnaux': '',
			'fieldAddeum': '',
			'fieldAddonG': check,
			'addr': '',
			'sendtype': 5,
			'typeFollow': typeFollow,
			'completetask': completeTask,
			'stype': 'insert',
			'sendmail': 'on',
			'contracttemplate':3675,
			'rname': '',
			'contractFontType': 1,
			'contractFontSize': 10,
			'contractFontColor': 'black',
			'addonFontType': 1,
			'addonFontSize': 10,
			'addonFontColor': 'black',
			'buyername': buyername,
			'baddress1': baddress,
			'baddress2': baddress2,
			'baddress3': baddress3,
			'sellname' : sellername,
			'saddress1': saddress,
			'saddress2': saddress2,
			'saddress3': saddress3,
			'deposit'  : deposit,
			'additionalDeposit': additionalDeposit,
			'inspection': inspection,
			'dateAcc': dateAcc,
			'dateClo': dateClo
		},
		success: function(data, textStatus, jqXHR){
			//alert(data);
					
			if(data){
				alert('All Follow Schedule Task were created. 0 presented errors. Please, verify them on the Pending Task tab' );
				$.mobile.changePage('#followingHtml');
					
			}else{
				alert('error data');
			}
		},
		error: function (jqXHR, textStatus, errorThrown){
			alert('error success');
		}
	});
	

}


function processLogin(){
	
	var user = $("input#userLogin").val();
	var pass = $("input#passLogin").val();
	var userid="";
	$.ajax({
		//url: 'http://reifax.com/FollowupReifax/properties_validacion.php',   
		url: 'http://reifax.com/resources/php/properties_validacion.php',    
		type: 'POST',
		data: { 			
			'loginEmail': user,
			'loginPass': pass,
			'followupMobile': 'followupMobile',
			'remember': true
				
			}
		}).done(function (data){					
			//alert(data);					
			var obj = JSON.parse(data);
			console.log(obj.success);
			if(obj.success) {			
					alert('Welcome Reifax Follow');		
					var userid= obj.userid;
					var object = { 'userid' : userid };
					localStorage.setItem('userid', JSON.stringify(object));
					$.mobile.changePage('#followingHtml');
			
					
			}else{
				alert('else obj');
				$.mobile.changePage('#loginHtml');
			}			
			
								
		});
		
}


function getContact(pid){
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/checkParcelidMlsresidential.php',  
		type: 'POST',
	data: { 						
		'userid': userid,
		'pids': pid, 
		'wheremls': true, 
	}}).done(function (data){					
			//alert(data);					
			var obj2 = JSON.parse(data);
			//console.debug(obj2);
			if(obj2.success) {								 
				var agent = "";                                                                                                                                                                   
				var agentph = "";                                                                                                                                                                   
				var agentcell = "";                                                                                                                                                                   
				var agentfax = "";                                                                                                                                                                   
				var agentemail = "";                                                                                                                                                                   
				var agenttollfree = "";                                                                                                                                                                   
				var office = "";                                                                                                                                                                   
				var officeph = "";                                                                                                                                                                   
				var officefax = "";                                                                                                                                                                   
				var officeemail = "";                                                                                                                                                                   
				var officetollfree = "";                                                                                                                                                                   
				                                                                                                                                                                                                                                                                                                                                   
				var no="no";
				var yes="yes";
				var NOSPone="NOSPone";
				console.debug(obj2.agent);
				
				agent +=''+obj2.agent+'';
				agentph +=''+obj2.agentph+'';
				agentcell +=''+obj2.agentcell+'';
				agentfax +=''+obj2.agentfax+'';
				agentemail +=''+obj2.agentemail+'';
				agenttollfree +=''+obj2.agenttollfree+'';
				office +=''+obj2.office+'';
				officeph +=''+obj2.officeph+'';
				officefax +=''+obj2.officefax+'';
				officeemail +=''+obj2.officeemail+'';
				officetollfree +=''+obj2.officetollfree+'';
				
				
				$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_getcontacts.php?updatecontact='+no+'&blockproperties='+yes+'&sp='+NOSPone+'',  
				type: 'POST',
				data: { 						
					'pids': pid, 
					'agent':agent,
					'agentph':agentph,
					'agentcell':agentcell,
					'agentfax':agentfax,
					'agentemail':agentemail,
					'agenttollfree':agenttollfree,
					'office':office,
					'officeph':officeph,
					'officefax':officefax,
					'officeemail':officeemail,
					'officetollfree':officetollfree,
					'runspider':true,
					'mlsresidential':true,
					'userid':3213 
				}}).done(function (data){					
					//alert(data);					
					var obj2 = JSON.parse(data);
					//console.debug(obj2);
					if(obj2.success) {								 
						alert('The System update the properties`s contact. '+obj2.blockproperties+' properties blocked');				
						$.mobile.changePage('#followingHtml');
						
					}else{
						alert('else obj');
					}					
				});
				
				
				
				
			}else{
				alert('else obj');
			}					
	});
	
		console.debug(output);
}


function listadoContactsProperty(pid){
		
	//alert(pid);
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
	$("#listadoContactoProperty ul").empty();
		
	$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: 'POST',
		data: { 
			'type': 'assignment',
			'userid': userid,
			'pid': pid												
		}}).done(function (data){	
			//alert(data);
			busy=false;
			var obj = JSON.parse(data);
			//alert(obj.success);
			if(obj.success) {
				var output = "";
				var no="NO";
				var none="None";
					
				var agent   ="Agent";
				var buyer   ="Buyer";
				var seller  ="Seller";
				var loan    ="Loan Officer";
				var hard    ="Hard Money Lender";
				var title   ="Title Company";
				var lawyer  ="Lawyer";
				var client  ="Client";
				var broker  ="Broker";
				var general ="General Contractor";
				var other   ="Other";
				var coach   ="Coach";
				var shortsale="Short Sale Negotiator";
					
				//recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
				$.each(obj.records, function( key, value ) {
					//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
					//recorremos los valores de cada propiedad
						
					var datos = new Array();
					var valor = new Array();
					var i=0;
						
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='agentid' || userkey=='agenttype' || userkey=='agent' || userkey=='phone1' || 
							userkey=='phone2' || userkey=='principal'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);
						}
										
					});
						
				if (datos['agent']!=""){
					output += '<li  agentid='+datos['agentid']+' agentname="'+datos['agent']+'" style="list-style: none;border-bottom: 2px solid #ccc;">';     
						
						output +='<div class="row">';
							output +='<div class="col-sm-12">';
								output +='<div class="row">';
																	
									output +='<div class="col-xs-12 col-sm-6 col-md-10">';
										
										output +='<div class="col-xs-4 col-sm-2 contact">';
											output +='<img class="contImg" style="padding:1px;" src="http://reifax.com/FollowupReifax/img/user-g2.png" width=60px height=60px>';
											if (datos['principal']==1){
												output +='<img style="padding:1px;margin-left:58px;margin-top:-165px;" src="http://reifax.com/FollowupReifax/img/star-48.png" width=20px height=20px>';
											}
										output +='</div>';
										
									
										output +='<div style="font-weight: bold;font-size: 18px;" class="col-md-3">';											
											output +=''+datos['agent']+'';
										output += '</div>';
										
										
										output +='<div class="col-md-3">';
											if (datos['agenttype']==1){
												output +=''+agent+'';
											}else if (datos['agenttype']==2){
												output +=''+buyer+'';
											}else if (datos['agenttype']==3){
												output +=''+seller+'';
											}else if (datos['agenttype']==4){
												output +=''+load+'';
											}else if (datos['agenttype']==5){
												output +=''+hard+'';
											}else if (datos['agenttype']==6){
												output +=''+title+'';
											}else if (datos['agenttype']==7){
												output +=''+lawyer+'';
											}else if (datos['agenttype']==8){
												output +=''+client+'';
											}else if (datos['agenttype']==9){
												output +=''+broker+'';
											}else if (datos['agenttype']==10){
												output +=''+general+'';
											}else if (datos['agenttype']==11){
												output +=''+other+'';
											}else if (datos['agenttype']==12){
												output +=''+coach+'';
											}else if (datos['agenttype']==13){
												output +=''+shortsale+'';
											}	
										output += '</div>';
										
										output +='<div class="col-md-2" style="font-weight: normal;">';
											if (datos['phone1']!="" ){
												output +=''+datos['phone1']+'';
											}else if (datos['phone2']!=""){
												if (datos['phone2']!=0){
													output +=''+datos['phone2']+'';
												}
											}else if (datos['phone3']!=""){
												if (datos['phone3']!=0){
													output +=''+datos['phone3']+'';
												}
											}
										output += '</div>';
										
									output += '</div>';
									
								output += '</div>';
							output += '</div>';
						output += '</div>';
						
						output +='</li>';
					}

					});
						$("#listadoContactoProperty ul").append(output);

					} else {
						//data.success no es true
						$("#listadoContactoProperty ul").html('No true! '); 
					}	
				
		});
	
}
  
function listadoAllContacts(start, limit){
		
		//var start = 0; 
        //var limit = 25; 
		//alert(start);
		//alert(limit); 
		var out = "";
		busy=true;
		
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
        		
		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
				type: 'POST',
			   data: { 
				'userid': userid,
				'sort':'agent ASC'
				}
			}).done(function (data){
				//alert(data);
				busy=false;
				var obj = JSON.parse(data);
				//alert(obj.success);
				if(obj.success) {
					
					var output = "";
					var no="NO";
					var none="None";
					
					var agent   ="Agent";
					var buyer   ="Buyer";
					var seller  ="Seller";
					var loan    ="Loan Officer";
					var hard    ="Hard Money Lender";
					var title   ="Title Company";
					var lawyer  ="Lawyer";
					var client  ="Client";
					var broker  ="Broker";
					var general ="General Contractor";
					var other   ="Other";
					var coach   ="Coach";
					var shortsale="Short Sale Negotiator";
					
					//recorremos cada propiedad
					//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
					$.each(obj.records, function( key, value ) {
					//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
					//recorremos los valores de cada propiedad
						
						
						var datos = new Array();
						var valor = new Array();
						var i=0;
						
						
						
						$.each( value, function ( userkey, uservalue) {
							if(userkey=='agentid' || userkey=='agenttype' || userkey=='agent' || userkey=='email' || userkey=='email2' || userkey=='phone1' || userkey=='phone2' || userkey=='phone3' || userkey=='phone4' || userkey=='phone5' || userkey=='phone6' || userkey=='urlsend' || userkey=='urlsend2' || userkey=='address1' || userkey=='address2'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								//console.debug(userkey);
							}
										
						});
						
					if (datos['agent']!=""){
						//alert(valor[0]);
						//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
						output += '<li  data-filtertext="'+datos['email']+','+datos['agent']+'" agentid='+datos['agentid']+' agentname="'+datos['agent']+'" style="list-style: none;border-bottom: 2px solid #ccc;">';     
						output +='<div class="row">';
							output +='<div class="col-sm-12">';
								output +='<div class="row">';
																	
									output +='<div class="col-xs-12 col-sm-6 col-md-10">';
										
										output +='<div class="col-xs-4 col-sm-2 contact">';
											output +='<img class="contImg" style="padding:1px;" src="http://reifax.com/FollowupReifax/img/user-g2.png" width=60px height=60px>';
										output +='</div>';
										
									
										output +='<div style="font-weight: bold;font-size: 18px;" class="col-md-3">';											
											output +=''+datos['agent']+'';
										output += '</div>';
										
										
										output +='<div class="col-md-3">';
											if (datos['agenttype']==1){
												output +=''+agent+'';
											}else if (datos['agenttype']==2){
												output +=''+buyer+'';
											}else if (datos['agenttype']==3){
												output +=''+seller+'';
											}else if (datos['agenttype']==4){
												output +=''+load+'';
											}else if (datos['agenttype']==5){
												output +=''+hard+'';
											}else if (datos['agenttype']==6){
												output +=''+title+'';
											}else if (datos['agenttype']==7){
												output +=''+lawyer+'';
											}else if (datos['agenttype']==8){
												output +=''+client+'';
											}else if (datos['agenttype']==9){
												output +=''+broker+'';
											}else if (datos['agenttype']==10){
												output +=''+general+'';
											}else if (datos['agenttype']==11){
												output +=''+other+'';
											}else if (datos['agenttype']==12){
												output +=''+coach+'';
											}else if (datos['agenttype']==13){
												output +=''+shortsale+'';
											}	
										output += '</div>';
										
										output +='<div class="col-md-2" style="font-weight: normal;">';
											if (datos['phone1']!="" ){
												output +=''+datos['phone1']+'';
											}else if (datos['phone2']!=""){
												if (datos['phone2']!=0){
													output +=''+datos['phone2']+'';
												}
											}else if (datos['phone3']!=""){
												if (datos['phone3']!=0){
													output +=''+datos['phone3']+'';
												}
											}
										output += '</div>';
										
										//output +='<div class="col-md-2" style="font-weight: normal;">';										
												//output +=''+datos['email']+'';
										//output += '</div>';
									
									output += '</div>';
									
								output += '</div>';
							output += '</div>';
						output += '</div>';
						//output += '</a>';
						output +='<input type="hidden" id="detail" value="\''+datos['agentid']+'\'">';
						output +='</li>';
					}
						
						
						//settings.limit = settings.limit + start;
						//console.log(settings.limit);
						
					
					});
					//output += '</ul>';
					//Actualizamos el HTML del elemento con id="#respuesta"
						
							//alert(obj.total+' >='+start);
							$("#listadoAllContacto ul").listview('refresh'); 
							
							$("#listadoAllContacto ul").append(output);
							
							$.mobile.loading().hide();
							mainloaded = true;
							//settings.limit = settings.limit + start;
							//console.log(settings.limit);
							
							//$(".tot").append(obj.total);
						
					} else {
						//data.success no es true
						$("#listadoAllContacto ul").html('No true! ');
						 
					}	
					
									
						
					
				});
	
}

function listadoContactsMakeCall(){
		
	//alert(pid);
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
	if (checkid==''){
		var id = JSON.parse(localStorage.getItem('key'));
		var parcelid =id.parcelid;
	}else if (checkid.length==1){
		var pid = JSON.parse(localStorage.getItem('pid'));
		var parcelid =pid.pid;
	}else{
		var parcelid =checkid;
		ciclo= 'multi';
		//alert(parcelid);
	}
	
	$("#listadoContactoMakeCall ul").empty();
		
	$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: 'POST',
		data: { 
			'type': 'assignment',
			'userid': userid,
			'pid': parcelid												
		}}).done(function (data){	
			//alert(data);
			busy=false;
			var obj = JSON.parse(data);
			//alert(obj.success);
			if(obj.success) {
				var output = "";
				var no="NO";
				var none="None";
					
				var agent   ="Agent";
				var buyer   ="Buyer";
				var seller  ="Seller";
				var loan    ="Loan Officer";
				var hard    ="Hard Money Lender";
				var title   ="Title Company";
				var lawyer  ="Lawyer";
				var client  ="Client";
				var broker  ="Broker";
				var general ="General Contractor";
				var other   ="Other";
				var coach   ="Coach";
				var shortsale="Short Sale Negotiator";
				
				var home="Home";
				var office="Office";
				var cell="Cell";
				var homefax="Homefax";
				var officefax="Officefax";
				var tollfree="Tollfree";
				var otollfree="Tollfree";
				var skype="Skype";
					
				//recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
				$.each(obj.records, function( key, value ) {
					//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
					//recorremos los valores de cada propiedad
						
					var datos = new Array();
					var valor = new Array();
					var i=0;
						
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='agentid' || userkey=='agenttype' || userkey=='agent' || userkey=='phone1' || 
							userkey=='phone2' || userkey=='phone3' || userkey=='phone4' || userkey=='phone5' || userkey=='phone6' ||
							userkey=='typeph1' || userkey=='typeph2' || userkey=='typeph3' || userkey=='typeph4' || userkey=='typeph5' ||
							userkey=='typeph6'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);
						}
										
					});
						
				if (datos['agent']!=""){
					output += '<li  agentid='+datos['agentid']+' agentname="'+datos['agent']+'" style="list-style: none;border-bottom: 2px solid #ccc;">';     
						
						output +='<div class="row">';
							output +='<div class="col-sm-12">';
								
								output +='<div class="row">';																	
									output +='<div class="col-xs-12 col-sm-6 col-md-10">';
										
										output +='<div class="col-xs-4 col-sm-2 contact">';
											output +='<img class="contImg" style="padding:1px;" src="http://reifax.com/FollowupReifax/img/user-g2.png" width=50px height=50px>';
										output +='</div>';
										
									
										output +='<div style="font-weight: bold;font-size: 18px;" class="col-md-3">';											
											output +=''+datos['agent']+'';
										output += '</div>';
										
										output +='<div class="col-md-2" style="font-weight: normal;">';											
											if (datos['phone1']!=null && datos['phone1']!="" && datos['phone1']!=0){
												output +='<a style="background:transparent; border:none;margin-left:-10px;margin-right:20px;" href="tel:'+datos['phone1']+'">'+datos['phone1']+'</a>';
											
												if (datos['typeph1']==0){
													output +=''+home+'';
												}else if (datos['typeph1']==1){
													output +=''+office+'';
												}else if (datos['typeph1']==2){
													output +=''+cell+'';
												}else if (datos['typeph1']==3){
													output +=''+homefax+'';
												}else if (datos['typeph1']==4){
													output +=''+officefax+'';
												}else if (datos['typeph1']==5){
													output +=''+tollfree+'';
												}else if (datos['typeph1']==6){
													output +=''+otollfree+'';
												}else if (datos['typeph1']==7){
													output +=''+skype+'';
												}
											}
											
											
										output += '</div>';
										
										
										
										output +='<div class="col-md-2" style="font-weight: normal;">';
											if (datos['phone2']!=null && datos['phone2']!="" && datos['phone2']!=0){
												output +='<a style="background:transparent; border:none;margin-left:-10px;margin-right:20px;" href="tel:'+datos['phone2']+'">'+datos['phone2']+'</a>';
												
												if (datos['typeph2']==0){
													output +=''+home+'';
												}else if (datos['typeph2']==1){
													output +=''+office+'';
												}else if (datos['typeph2']==2){
													output +=''+cell+'';
												}else if (datos['typeph2']==3){
													output +=''+homefax+'';
												}else if (datos['typeph2']==4){
													output +=''+officefax+'';
												}else if (datos['typeph2']==5){
													output +=''+tollfree+'';
												}else if (datos['typeph2']==6){
													output +=''+otollfree+'';
												}else if (datos['typeph2']==7){
													output +=''+skype+'';
												}
											
											}
											
											
											
										output += '</div>';
										
										output +='<div class="col-md-2" style="font-weight: normal;">';
											if (datos['phone3']!=null && datos['phone3']!="" && datos['phone3']!=0){
												output +='<a style="background:transparent; border:none;margin-left:-10px;margin-right:20px;" href="tel:'+datos['phone3']+'">'+datos['phone3']+'</a>';
											
												if (datos['typeph3']==0){
													output +=''+home+'';
												}else if (datos['typeph3']==1){
													output +=''+office+'';
												}else if (datos['typeph3']==2){
													output +=''+cell+'';
												}else if (datos['typeph3']==3){
													output +=''+homefax+'';
												}else if (datos['typeph3']==4){
													output +=''+officefax+'';
												}else if (datos['typeph3']==5){
													output +=''+tollfree+'';
												}else if (datos['typeph3']==6){
													output +=''+otollfree+'';
												}else if (datos['typeph3']==7){
													output +=''+skype+'';
												}
											}
											
											
										output += '</div>';
										
										output +='<div class="col-md-2" style="font-weight: normal;">';
											if (datos['phone4']!=null && datos['phone4']!="" && datos['phone4']!=0){
												output +='<a style="background:transparent; border:none;margin-left:-10px;margin-right:20px;" href="tel:'+datos['phone4']+'">'+datos['phone4']+'</a>';
											
												if (datos['typeph4']==0){
													output +=''+home+'';
												}else if (datos['typeph4']==1){
													output +=''+office+'';
												}else if (datos['typeph4']==2){
													output +=''+cell+'';
												}else if (datos['typeph4']==3){
													output +=''+homefax+'';
												}else if (datos['typeph4']==4){
													output +=''+officefax+'';
												}else if (datos['typeph4']==5){
													output +=''+tollfree+'';
												}else if (datos['typeph4']==6){
													output +=''+otollfree+'';
												}else if (datos['typeph4']==7){
													output +=''+skype+'';
												}
											}
											
											
										output += '</div>';
										
										output +='<div class="col-md-2" style="font-weight: normal;">';
											if (datos['phone5']!=null && datos['phone5']!="" && datos['phone5']!=0){
												output +='<a style="background:transparent; border:none;margin-left:-10px;margin-right:20px;" href="tel:'+datos['phone5']+'">'+datos['phone5']+'</a>';
											
												if (datos['typeph5']==0){
													output +=''+home+'';
												}else if (datos['typeph5']==1){
													output +=''+office+'';
												}else if (datos['typeph5']==2){
													output +=''+cell+'';
												}else if (datos['typeph5']==3){
													output +=''+homefax+'';
												}else if (datos['typeph5']==4){
													output +=''+officefax+'';
												}else if (datos['typeph5']==5){
													output +=''+tollfree+'';
												}else if (datos['typeph5']==6){
													output +=''+otollfree+'';
												}else if (datos['typeph5']==7){
													output +=''+skype+'';
												}
											}
											
											
										output += '</div>';
										
										output +='<div class="col-md-2" style="font-weight: normal;">';
											if (datos['phone6']!=null && datos['phone6']!="" && datos['phone6']!=0){
												output +='<a style="background:transparent; border:none;margin-left:-10px;margin-right:20px;" href="tel:'+datos['phone6']+'">'+datos['phone6']+'</a>';
											
												if (datos['typeph6']==0){
													output +=''+home+'';
												}else if (datos['typeph6']==1){
													output +=''+office+'';
												}else if (datos['typeph6']==2){
													output +=''+cell+'';
												}else if (datos['typeph6']==3){
													output +=''+homefax+'';
												}else if (datos['typeph6']==4){
													output +=''+officefax+'';
												}else if (datos['typeph6']==5){
													output +=''+tollfree+'';
												}else if (datos['typeph6']==6){
													output +=''+otollfree+'';
												}else if (datos['typeph6']==7){
													output +=''+skype+'';
												}
											}

											
										output += '</div>';
										
									output += '</div>';
									
								output += '</div>';
							output += '</div>';
						output += '</div>';
						
						output +='</li>';
					}

					});
						$("#listadoContactoMakeCall ul").append(output);

					} else {
						//data.success no es true
						$("#listadoContactoMakeCall ul").html('No true! '); 
					}	
				
		});
	
}

function listadoSearchContacts(start, limit){
		
	//$("#listadoAllContacto ul").empty();
	
	var searchI = $("input#searchListadoContact").val();
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
				
	if (/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(searchI)){
		alert("La dirección de email " + searchI + " es correcta.");
		busy=true;	
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: 'POST',
			data: { 
			'userid': 3213,
			'type':'SearchContactList',
			'searchEmail':searchI,
			'start':start,
			'limit':limit
			}
		}).done(function (data){
			alert(data);
			busy=false;
			var obj = JSON.parse(data);
			//alert(obj.success);
			if(obj.success) {
				var output = "";
				var no="NO";
				var none="None";
					
				var agent   ="Agent";
				var buyer   ="Buyer";
				var seller  ="Seller";
				var loan    ="Loan Officer";
				var hard    ="Hard Money Lender";
				var title   ="Title Company";
				var lawyer  ="Lawyer";
				var client  ="Client";
				var broker  ="Broker";
				var general ="General Contractor";
				var other   ="Other";
				var coach   ="Coach";
				var shortsale="Short Sale Negotiator";
					
				//recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
				$.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada propiedad
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='agentid' || userkey=='agenttype' || userkey=='agent' || userkey=='email' || userkey=='email2' || userkey=='phone1' || userkey=='phone2' || userkey=='phone3' || userkey=='phone4' || userkey=='phone5' || userkey=='phone6' || userkey=='urlsend' || userkey=='urlsend2' || userkey=='address1' || userkey=='address2'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);
						}
										
					});
						
					if (datos['agent']!=""){
						//alert(valor[0]);
						//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
						output += '<li  agentid='+datos['agentid']+' style="list-style: none;border-bottom: 2px solid #ccc;">';     
						
						output +='<div class="row">';
							output +='<div class="col-sm-12">';
								output +='<div class="row">';
																	
									output +='<div class="col-xs-12 col-sm-6 col-md-10">';
										
										output +='<div class="col-xs-4 col-sm-2 contact">';
											output +='<img class="contImg" style="padding:1px;" src="http://reifax.com/FollowupReifax/img/user-g2.png" width=60px height=60px>';
										output +='</div>';
										
									
										output +='<div style="font-weight: bold;font-size: 18px;" class="col-md-3">';											
											output +=''+datos['agent']+'';
										output += '</div>';
										
										
										output +='<div class="col-md-3">';
											if (datos['agenttype']==1){
												output +=''+agent+'';
											}else if (datos['agenttype']==2){
												output +=''+buyer+'';
											}else if (datos['agenttype']==3){
												output +=''+seller+'';
											}else if (datos['agenttype']==4){
												output +=''+load+'';
											}else if (datos['agenttype']==5){
												output +=''+hard+'';
											}else if (datos['agenttype']==6){
												output +=''+title+'';
											}else if (datos['agenttype']==7){
												output +=''+lawyer+'';
											}else if (datos['agenttype']==8){
												output +=''+client+'';
											}else if (datos['agenttype']==9){
												output +=''+broker+'';
											}else if (datos['agenttype']==10){
												output +=''+general+'';
											}else if (datos['agenttype']==11){
												output +=''+other+'';
											}else if (datos['agenttype']==12){
												output +=''+coach+'';
											}else if (datos['agenttype']==13){
												output +=''+shortsale+'';
											}	
										output += '</div>';
										
										output +='<div class="col-md-2" style="font-weight: normal;">';
											if (datos['phone1']!="" ){
												output +=''+datos['phone1']+'';
											}else if (datos['phone2']!=""){
												if (datos['phone2']!=0){
													output +=''+datos['phone2']+'';
												}
											}else if (datos['phone3']!=""){
												if (datos['phone3']!=0){
													output +=''+datos['phone3']+'';
												}
											}
										output += '</div>';
										
									output += '</div>';
									
								output += '</div>';
							output += '</div>';
						output += '</div>';
						//output += '</a>';
						output +='<input type="hidden" id="detail" value="\''+datos['agentid']+'\'">';
						output +='</li>';
					}
			
					});
							$("#listadoAllContacto ul").append(output);
			
					} else {
						//data.success no es true
						$("#listadoAllContacto ul").html('No true! ');						
					}	
					
				});			
		
				
	} else if (/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(searchI)){
		alert("es un numero de telefono" + searchI + "es correcta.");
		busy=true;	
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: 'POST',
			data: { 
			'userid': userid,
			'type':'SearchContactList',
			'searchNumPhone':searchI,
			'start':start,
			'limit':limit
			}
		}).done(function (data){
			//alert(data);
			busy=false;
			var obj = JSON.parse(data);
			//alert(obj.success);
			if(obj.success) {
				var output = "";
				var no="NO";
				var none="None";
					
				var agent   ="Agent";
				var buyer   ="Buyer";
				var seller  ="Seller";
				var loan    ="Loan Officer";
				var hard    ="Hard Money Lender";
				var title   ="Title Company";
				var lawyer  ="Lawyer";
				var client  ="Client";
				var broker  ="Broker";
				var general ="General Contractor";
				var other   ="Other";
				var coach   ="Coach";
				var shortsale="Short Sale Negotiator";
					
				//recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
				$.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada propiedad
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='agentid' || userkey=='agenttype' || userkey=='agent' || userkey=='email' || userkey=='email2' || userkey=='phone1' || userkey=='phone2' || userkey=='phone3' || userkey=='phone4' || userkey=='phone5' || userkey=='phone6' || userkey=='urlsend' || userkey=='urlsend2' || userkey=='address1' || userkey=='address2'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);
						}
										
					});
						
					if (datos['agent']!=""){
						//alert(valor[0]);
						//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
						output += '<li  agentid='+datos['agentid']+' style="list-style: none;border-bottom: 2px solid #ccc;">';     
						
						output +='<div class="row">';
							output +='<div class="col-sm-12">';
								output +='<div class="row">';
																	
									output +='<div class="col-xs-12 col-sm-6 col-md-10">';
										
										output +='<div class="col-xs-4 col-sm-2 contact">';
											output +='<img class="contImg" style="padding:1px;" src="http://reifax.com/FollowupReifax/img/user-g2.png" width=60px height=60px>';
										output +='</div>';
										
									
										output +='<div style="font-weight: bold;font-size: 18px;" class="col-md-3">';											
											output +=''+datos['agent']+'';
										output += '</div>';
										
										
										output +='<div class="col-md-3">';
											if (datos['agenttype']==1){
												output +=''+agent+'';
											}else if (datos['agenttype']==2){
												output +=''+buyer+'';
											}else if (datos['agenttype']==3){
												output +=''+seller+'';
											}else if (datos['agenttype']==4){
												output +=''+load+'';
											}else if (datos['agenttype']==5){
												output +=''+hard+'';
											}else if (datos['agenttype']==6){
												output +=''+title+'';
											}else if (datos['agenttype']==7){
												output +=''+lawyer+'';
											}else if (datos['agenttype']==8){
												output +=''+client+'';
											}else if (datos['agenttype']==9){
												output +=''+broker+'';
											}else if (datos['agenttype']==10){
												output +=''+general+'';
											}else if (datos['agenttype']==11){
												output +=''+other+'';
											}else if (datos['agenttype']==12){
												output +=''+coach+'';
											}else if (datos['agenttype']==13){
												output +=''+shortsale+'';
											}	
										output += '</div>';
										
										output +='<div class="col-md-2" style="font-weight: normal;">';
											if (datos['phone1']!="" ){
												output +=''+datos['phone1']+'';
											}else if (datos['phone2']!=""){
												if (datos['phone2']!=0){
													output +=''+datos['phone2']+'';
												}
											}else if (datos['phone3']!=""){
												if (datos['phone3']!=0){
													output +=''+datos['phone3']+'';
												}
											}
										output += '</div>';
										
									output += '</div>';
									
								output += '</div>';
							output += '</div>';
						output += '</div>';
						//output += '</a>';
						output +='<input type="hidden" id="detail" value="\''+datos['agentid']+'\'">';
						output +='</li>';
					}
			
					});
							$("#listadoAllContacto ul").append(output);
			
					} else {
						//data.success no es true
						$("#listadoAllContacto ul").html('No true! ');						
					}	
					
				});
	}else if (/^\d+$/.test(searchI)){
		alert("es un numero" + searchI + "es correcta.");
		busy=true;	
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: 'POST',
			data: { 
			'userid': userid,
			'type':'SearchContactList',
			'searchNumPhone2':searchI,
			'start':start,
			'limit':limit
			}
		}).done(function (data){
			//alert(data);
			busy=false;
			var obj = JSON.parse(data);
			//alert(obj.success);
			if(obj.success) {
				var output = "";
				var no="NO";
				var none="None";
					
				var agent   ="Agent";
				var buyer   ="Buyer";
				var seller  ="Seller";
				var loan    ="Loan Officer";
				var hard    ="Hard Money Lender";
				var title   ="Title Company";
				var lawyer  ="Lawyer";
				var client  ="Client";
				var broker  ="Broker";
				var general ="General Contractor";
				var other   ="Other";
				var coach   ="Coach";
				var shortsale="Short Sale Negotiator";
					
				//recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
				$.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada propiedad
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='agentid' || userkey=='agenttype' || userkey=='agent' || userkey=='email' || userkey=='email2' || userkey=='phone1' || userkey=='phone2' || userkey=='phone3' || userkey=='phone4' || userkey=='phone5' || userkey=='phone6' || userkey=='urlsend' || userkey=='urlsend2' || userkey=='address1' || userkey=='address2'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);
						}
										
					});
						
					if (datos['agent']!=""){
						//alert(valor[0]);
						//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
						output += '<li  agentid='+datos['agentid']+' style="list-style: none;border-bottom: 2px solid #ccc;">';     
						
						output +='<div class="row">';
							output +='<div class="col-sm-12">';
								output +='<div class="row">';
																	
									output +='<div class="col-xs-12 col-sm-6 col-md-10">';
										
										output +='<div class="col-xs-4 col-sm-2 contact">';
											output +='<img class="contImg" style="padding:1px;" src="http://reifax.com/FollowupReifax/img/user-g2.png" width=60px height=60px>';
										output +='</div>';
										
									
										output +='<div style="font-weight: bold;font-size: 18px;" class="col-md-3">';											
											output +=''+datos['agent']+'';
										output += '</div>';
										
										
										output +='<div class="col-md-3">';
											if (datos['agenttype']==1){
												output +=''+agent+'';
											}else if (datos['agenttype']==2){
												output +=''+buyer+'';
											}else if (datos['agenttype']==3){
												output +=''+seller+'';
											}else if (datos['agenttype']==4){
												output +=''+load+'';
											}else if (datos['agenttype']==5){
												output +=''+hard+'';
											}else if (datos['agenttype']==6){
												output +=''+title+'';
											}else if (datos['agenttype']==7){
												output +=''+lawyer+'';
											}else if (datos['agenttype']==8){
												output +=''+client+'';
											}else if (datos['agenttype']==9){
												output +=''+broker+'';
											}else if (datos['agenttype']==10){
												output +=''+general+'';
											}else if (datos['agenttype']==11){
												output +=''+other+'';
											}else if (datos['agenttype']==12){
												output +=''+coach+'';
											}else if (datos['agenttype']==13){
												output +=''+shortsale+'';
											}	
										output += '</div>';
										
										output +='<div class="col-md-2" style="font-weight: normal;">';
											if (datos['phone1']!="" ){
												output +=''+datos['phone1']+'';
											}else if (datos['phone2']!=""){
												if (datos['phone2']!=0){
													output +=''+datos['phone2']+'';
												}
											}else if (datos['phone3']!=""){
												if (datos['phone3']!=0){
													output +=''+datos['phone3']+'';
												}
											}
										output += '</div>';
										
									output += '</div>';
									
								output += '</div>';
							output += '</div>';
						output += '</div>';
						//output += '</a>';
						output +='<input type="hidden" id="detail" value="\''+datos['agentid']+'\'">';
						output +='</li>';
					}
			
					});
							$("#listadoAllContacto ul").append(output);
			
					} else {
						//data.success no es true
						$("#listadoAllContacto ul").html('No true! ');						
					}	
					
				});
	}else if (/^([a-z ñáéíóú]{2,60})$/i.test(searchI)){
		alert("es un agente" + searchI + "es correcta.");
		busy=true;	
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: 'POST',
			data: { 
			'userid': userid,
			'type':'SearchContactList',
			'searchAgent':searchI,
			'start':start,
			'limit':limit
			}
		}).done(function (data){
			//alert(data);
			busy=false;
			var obj = JSON.parse(data);
			//alert(obj.success);
			if(obj.success) {
				var output = "";
				var no="NO";
				var none="None";
					
				var agent   ="Agent";
				var buyer   ="Buyer";
				var seller  ="Seller";
				var loan    ="Loan Officer";
				var hard    ="Hard Money Lender";
				var title   ="Title Company";
				var lawyer  ="Lawyer";
				var client  ="Client";
				var broker  ="Broker";
				var general ="General Contractor";
				var other   ="Other";
				var coach   ="Coach";
				var shortsale="Short Sale Negotiator";
					
				//recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
				$.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada propiedad
					var datos = new Array();
					var valor = new Array();
					var i=0;
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='agentid' || userkey=='agenttype' || userkey=='agent' || userkey=='email' || userkey=='email2' || userkey=='phone1' || userkey=='phone2' || userkey=='phone3' || userkey=='phone4' || userkey=='phone5' || userkey=='phone6' || userkey=='urlsend' || userkey=='urlsend2' || userkey=='address1' || userkey=='address2'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);
						}
										
					});
						
					if (datos['agent']!=""){
						//alert(valor[0]);
						//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
						output += '<li  agentid='+datos['agentid']+' style="list-style: none;border-bottom: 2px solid #ccc;">';     
						
						output +='<div class="row">';
							output +='<div class="col-sm-12">';
								output +='<div class="row">';
																	
									output +='<div class="col-xs-12 col-sm-6 col-md-10">';
										
										output +='<div class="col-xs-4 col-sm-2 contact">';
											output +='<img class="contImg" style="padding:1px;" src="http://reifax.com/FollowupReifax/img/user-g2.png" width=60px height=60px>';
										output +='</div>';
										
									
										output +='<div style="font-weight: bold;font-size: 18px;" class="col-md-3">';											
											output +=''+datos['agent']+'';
										output += '</div>';
										
										
										output +='<div class="col-md-3">';
											if (datos['agenttype']==1){
												output +=''+agent+'';
											}else if (datos['agenttype']==2){
												output +=''+buyer+'';
											}else if (datos['agenttype']==3){
												output +=''+seller+'';
											}else if (datos['agenttype']==4){
												output +=''+load+'';
											}else if (datos['agenttype']==5){
												output +=''+hard+'';
											}else if (datos['agenttype']==6){
												output +=''+title+'';
											}else if (datos['agenttype']==7){
												output +=''+lawyer+'';
											}else if (datos['agenttype']==8){
												output +=''+client+'';
											}else if (datos['agenttype']==9){
												output +=''+broker+'';
											}else if (datos['agenttype']==10){
												output +=''+general+'';
											}else if (datos['agenttype']==11){
												output +=''+other+'';
											}else if (datos['agenttype']==12){
												output +=''+coach+'';
											}else if (datos['agenttype']==13){
												output +=''+shortsale+'';
											}	
										output += '</div>';
										
										output +='<div class="col-md-2" style="font-weight: normal;">';
											if (datos['phone1']!="" ){
												output +=''+datos['phone1']+'';
											}else if (datos['phone2']!=""){
												if (datos['phone2']!=0){
													output +=''+datos['phone2']+'';
												}
											}else if (datos['phone3']!=""){
												if (datos['phone3']!=0){
													output +=''+datos['phone3']+'';
												}
											}
										output += '</div>';
										
									output += '</div>';
									
								output += '</div>';
							output += '</div>';
						output += '</div>';
						//output += '</a>';
						output +='<input type="hidden" id="detail" value="\''+datos['agentid']+'\'">';
						output +='</li>';
					}
			
					});
							$("#listadoAllContacto ul").append(output);
			
					} else {
						//data.success no es true
						$("#listadoAllContacto ul").html('No true! ');						
					}	
					
				});
					
		}
	
	
}


