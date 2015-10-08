function listadoPendings(start, limit){


		$("#counPTask").prop("selected", true);
		 var county 	= $("#counPTask option:selected").val();
		
		$("#citPTask").prop("selected", true);
		var city 	= $("#citPTask option:selected").val();
		
		$("#xcodPTask").prop("selected", true);
		var xcode 	= $("#xcodPTask option:selected").val();
	
		$("#taskPTask").prop("selected", true);
		var task 	= $("#taskPTask option:selected").val();
		
		$("#etypPTask").prop("selected", true);
		var exectype 	= $("#etypPTask option:selected").val();
	
			
							
		var address = $("input#addressPTask").val();
		var zip = $("input#zipcodePTask").val();
		var agent = $("input#contactPTask").val();
		
		var typefollow="(B,S)"
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
		busy=true;
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followup.php',  
			type: 'POST',
		   data: { 
			'typeFollow': 'B', 
			'userid': userid,
			'pendingtask':'yes',
			'address': address,
			'zip': zip,
			'agent': agent,
			'county': county,
			'city': city,
			'xcode': xcode,	
			'ntask':task,
			'execType': exectype,
			'sort': 'ndate desc', 
			'start':start,
			'limit':limit
			}
		}).done(function (data){
			//alert(data);
			busy=false;
			loadtask=true;
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
						if(userkey=='pid' || userkey=='address' || userkey=='stime' || userkey=='etime' || 
						   userkey=='ntask' || userkey=='detail' || userkey=='agent' || userkey=='statusschedule' || 
						   userkey=='typeExec' || userkey=='status' || userkey=='ndate' || userkey=='idfus'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);
						}
									
                    });
					//alert(valor[0]);
					
					//var price = accounting.formatMoney(datos['lprice'], "$", 0);
					//var offer = accounting.formatMoney(datos['offer'], "$", 0);
					var automatic='Automatic';
					var manual='Manual';
					
					var year = moment(datos['ndate']).format('YYYY');
					var year2 = moment(datos['stime']).format('YYYY');
					var year3 = moment(datos['etime']).format('YYYY');
					
					if (year>=2015){
					var date = moment(datos['ndate']).format('DD MMM');
					}else if (year<2015){
					var date = moment(datos['ndate']).format('MM/DD/YY');
					}
					
					if (year3>=2015){
					var etime = moment(datos['etime']).format('HH:mm a');
					}else if (year3<2015){
					var etime = moment(datos['etime']).format('HH:mm a');
					}
					
					if (year2>=2015){
					var stime = moment(datos['stime']).format('HH:mm a');
					}else if (year2<2015){
					var stime = moment(datos['stime']).format('HH:mm a');
					}
					
					
					//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
					output += '<li id="primero'+datos['idfus']+'" idfus='+datos['idfus']+' style="list-style: none;border-bottom: 2px solid #ccc;">';     
						output +='<div style="height:20px;margin-bottom:10px;padding-left:5px;padding-right:5px;margin-top:-5px;" class="col-xs-12 col-sm-12">';
							
							if (datos['ntask']==1){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_green-80.png" width=30px height=30px>';
							}else if (datos['ntask']==3){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_green-80.png" width=30px height=30px>';
							}else if (datos['ntask']==5){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-green-80.png" width=30px height=30px>';
							}else if (datos['ntask']==7){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docV-80.png" width=30px height=30px>';
							}else if (datos['ntask']==9){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-80.png" width=30px height=30px>';
							}else if (datos['ntask']==11){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-mail-80.png" width=30px height=30px>';
							}else if (datos['ntask']==13){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherV-80.png" width=30px height=30px>';
							}else if (datos['ntask']==15){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice-80.png" width=30px height=30px>';
							}else if (datos['ntask']==17){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-note-80.png" width=30px height=30px>';
							}else if (datos['ntask']==2){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_az-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==4){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_az-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==6){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-blue-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==8){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docB-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==10){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-B-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==12){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/reci-mailB-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==14){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherB-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==16){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice_az-80.png" width=30px height=30px>';
							}
							
							
							if (datos['status']=='A'){
								//output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/active-40-gr.png" no-repeat scroll 0px -40px transparent title="Active">';
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-verde-80.png" no-repeat scroll 0px -40px transparent title="Active">';
							}else if (datos['status']=='NA'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-am-80.png" no-repeat scroll 0px -40px transparent title="No-Active">';
							}else if (datos['status']=='S'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-red-80.png" no-repeat scroll 0px -40px transparent title="Sold">';
							}else if (datos['status']=='NF'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-az.png" no-repeat scroll 0px -40px transparent title="By Owner">';
							}
							
							
							if (datos['typeExec']==2){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/exec-type-vrd.png" no-repeat scroll 0px -40px transparent title="Active">';
							}
							
							/*if (datos['agent']!=''){
								output +='<img onclick="detailContact('+datos['agent']+')" style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/personB-80.png" no-repeat scroll 0px -40px transparent title="No-Active">';
							}*/
						
						output += '</div>';
				
					
					/*output +='<div class="row">'+
								'<div style="color:#ccc;text-align:right;" class="col-xs-12 col-sm-6 col-md-12">'+datefollow+'</div>'+
							'</div>';	*/	 
					
					output +='<div class="row">';
						output +='<div class="col-sm-12">';
							output +='<div class="row">';								
								
								output +='<div style="padding-left:0px;margin-top:10px" class="col-xs-12 col-sm-12 col-md-12">';
									
									output +='<div style="font-size: 18px;font-weight: bold;" class="col-md-12">';
											output +=''+datos['address']+'';
									output += '</div>';
									
									output +='<div style="font-weight: bold;" class="col-md-12">';
										output +='Contact:&nbsp;'+datos['agent']+'';
									output += '</div>';
									
									output +='<div class="col-md-12" style="font-weight: bold;">';
										output +='Status:&nbsp;'+datos['statusschedule']+'';
									output += '</div>';
									
									output +='<div  class="col-md-12 tv">';
										output +='S. Time:&nbsp;'+stime+'';
									output += '</div>';
									
									output +='<div  class="col-md-12 tv">';
										output +='E. Time:&nbsp;'+etime+'';
									output += '</div>';
									
									if (datos['detail']!=''){
										output +='<div class="col-md-12 tvt" style="font-weight: normal;">';
											output +='Detail:&nbsp;'+datos['detail']+'';
										output += '</div>';
									}else{
										
										output +='<div class="col-md-12" style="font-weight: normal;">';
											output +='&nbsp;&nbsp;'+datos['detail']+'';
										output += '</div>';
									}									
									
									/*output +='<div class="col-md-2" style="font-weight: normal;">';
										if (datos['typeExec']==1 || datos['typeExec']==0){
											output +='Exec. Type:&nbsp;'+manual+'';
										}else{
											output +='Exec. Type:&nbsp;'+automatic+'';
										}
										
									output += '</div>';*/
									
																	
									output +='<div class="col-md-12" style="font-weight: normal;text-align:right;">';
										output +=''+date+'';
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
							$("#pendientes ul").append(output);
							$("#task-tablet ul").append(output);
						}else{
							$("#pendientes ul").html('No result! ');
						}
						//$(".tot").append(obj.total);
					
				} else {
					//data.success no es true
					$("#pendientes ul").html('No true! ');
				}			
		});

}


function listadoCompleted(start, limit){


		$("#counCTask").prop("selected", true);
		 var county 	= $("#counCTask option:selected").val();
		 //alert(county);
		$("#citCTask").prop("selected", true);
		var city 	= $("#citCTask option:selected").val();
		$("#xcodCTask").prop("selected", true);
		var xcode 	= $("#xcodCTask option:selected").val();
		//alert(xcode);
		$("#prostaCTask").prop("selected", true);
		var status 	= $("#prostaCTask option:selected").val();
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
		
		$("#taskCTask").prop("selected", true);
		var task 	= $("#taskCTask option:selected").val();
		
		$("#contractCTask").prop("selected", true);
		var contract 	= $("#contractCTask option:selected").val();
		
		$("#pofCTask").prop("selected", true);
		var pof 	= $("#pofCTask option:selected").val();
		
		$("#addeCTask").prop("selected", true);
		var adde 	= $("#addeCTask option:selected").val();
		
		$("#emdCTask").prop("selected", true);
		var emd 	= $("#emdCTask option:selected").val();
		
		$("#msgCTask").prop("selected", true);
		var msg 	= $("#msgCTask option:selected").val();
		
		$("#offerCTask").prop("selected", true);
		var offer 	= $("#offerCTask option:selected").val();
		
			
		$("#folldate").prop("selected", true);
		var folldate = $("#folldate option:selected").val();
			
					
		var address = $("input#addressCTask").val();
		var zip = $("input#zipCTask").val();
		var agent = $("input#contactCTask").val();
		
		var typefollow="(B,S)"
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
		busy=true;
		
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followup.php',  
			type: 'POST',
		   data: { 
			'typeFollow': 'B', 
			'userid': userid,
			'pendingtask':'no',
			'address': address,
			'zip': zip,
			'agent': agent,
			'county': county,
			'city': city,
			'xcode': xcode,	
			'status': status,
			
			'sort': 'ndate desc', 
			'start':start,
			'limit':limit
			}
		}).done(function (data){
			//alert(data);
			busy=false;
			loadtaskC=true;
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
						if(userkey=='pid' || userkey=='address' || userkey=='stime' || userkey=='etime' || 
						   userkey=='ntask' || userkey=='detail' || userkey=='agent' || userkey=='statusschedule' || 
						   userkey=='typeExec' || userkey=='status' || userkey=='ndate' || userkey=='idfuh' ||
						   userkey=='contract' || userkey=='pof' || userkey=='emd' || userkey=='rademdums' || userkey=='offerreceived'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);
						}
									
                    });
					//alert(valor[0]);
					
					//var price = accounting.formatMoney(datos['lprice'], "$", 0);
					//var offer = accounting.formatMoney(datos['offer'], "$", 0);
					var automatic='Automatic';
					var manual='Manual';
					
					var year = moment(datos['ndate']).format('YYYY');
					var year2 = moment(datos['stime']).format('YYYY');
					var year3 = moment(datos['etime']).format('YYYY');
					
					if (year>=2015){
					var date = moment(datos['ndate']).format('DD MMM');
					}else if (year<2015){
					var date = moment(datos['ndate']).format('MM/DD/YY');
					}
					
					if (year3>=2015){
					var etime = moment(datos['etime']).format('HH:mm a');
					}else if (year3<2015){
					var etime = moment(datos['etime']).format('HH:mm a');
					}
					
					if (year2>=2015){
					var stime = moment(datos['stime']).format('HH:mm a');
					}else if (year2<2015){
					var stime = moment(datos['stime']).format('HH:mm a');
					}
					
					
					//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
					output += '<li id="primero'+datos['idfuh']+'" idfuh='+datos['idfuh']+' parcelid='+datos['pid']+' contr='+datos['contract']+' pof='+datos['pof']+' emd='+datos['emd']+' adde='+datos['rademdums']+' offre='+datos['offerreceived']+' style="list-style: none;border-bottom: 2px solid #ccc;">';     
						output +='<div style="height:20px;margin-bottom:10px;padding-left:5px;padding-right:5px;margin-top:-5px;" class="col-xs-12 col-sm-12 col-md-12">';
							
							if (datos['ntask']==1){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_green-80.png" width=30px height=30px>';
							}else if (datos['ntask']==3){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_green-80.png" width=30px height=30px>';
							}else if (datos['ntask']==5){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-green-80.png" width=30px height=30px>';
							}else if (datos['ntask']==7){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docV-80.png" width=30px height=30px>';
							}else if (datos['ntask']==9){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-80.png" width=30px height=30px>';
							}else if (datos['ntask']==11){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-mail-80.png" width=30px height=30px>';
							}else if (datos['ntask']==13){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherV-80.png" width=30px height=30px>';
							}else if (datos['ntask']==15){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice-80.png" width=30px height=30px>';
							}else if (datos['ntask']==17){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-note-80.png" width=30px height=30px>';
							}else if (datos['ntask']==2){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_az-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==4){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_az-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==6){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-blue-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==8){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docB-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==10){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-B-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==12){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/reci-mailB-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==14){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherB-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==16){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice_az-80.png" width=30px height=30px>';
							}
							
							if (datos['status']=='A'){
								//output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/active-40-gr.png" no-repeat scroll 0px -40px transparent title="Active">';
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-verde-80.png" no-repeat scroll 0px -40px transparent title="Active">';
							}else if (datos['status']=='NA'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-am-80.png" no-repeat scroll 0px -40px transparent title="No-Active">';
							}else if (datos['status']=='S'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-red-80.png" no-repeat scroll 0px -40px transparent title="Sold">';
							}else if (datos['status']=='NF'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-az.png" no-repeat scroll 0px -40px transparent title="By Owner">';
							}
							
							
							if (datos['contract']<=0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_c-40.png" no-repeat scroll 0px -40px transparent title="Contract">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_c-No-40.png" no-repeat scroll 0px -40px transparent title="Contract">';
							}
									
							if (datos['pof']<=0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_p-40.png" no-repeat scroll 0px -40px transparent title="Proof of Funds">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_p-No-40.png" no-repeat scroll 0px -40px transparent title="Proof of Funds">';
							}
									
							if (datos['emd']<=0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_e-40.png" no-repeat scroll 0px -40px transparent title="EMD">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_e-No-40.png" no-repeat scroll 0px -40px transparent title="EMD">';
							}
									
							if (datos['rademdums']<=0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_a-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_a-No-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}
							
							if (datos['offerreceived']<=0){
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
											output +=''+datos['address']+'';
									output += '</div>';
									
									output +='<div style="font-weight: bold;" class="col-md-12">';
										output +='Contact:&nbsp;'+datos['agent']+'';
									output += '</div>';
									
									output +='<div  class="col-md-12">';
										output +='S. Completed:&nbsp;'+date+'';
									output += '</div>';
									
									/*output +='<div  class="col-md-2">';
										output +='E. Time:&nbsp;'+etime+'';
									output += '</div>';*/
									
									
									output +='<div class="col-md-12" style="font-weight: normal;">';
										if (datos['typeExec']==1){
											output +='Exec. Type:&nbsp;'+manual+'';
										}else{
											output +='Exec. Type:&nbsp;'+automatic+'';
										}
										
									output += '</div>';
									
																	
									output +='<div class="col-md-12" style="font-weight: normal;text-align:right;">';
										output +=''+date+'';
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
							$("#completados ul").append(output);
							$("#task-tablet2 ul").append(output);
						}else{
							$("#completados ul").html('No result! ');
						}
						//$(".tot").append(obj.total);
					
				} else {
					//data.success no es true
					$("#completados ul").html('No true! ');
				}			
		});

}

function getfilterPendingTask(){
	var i;
	
	$("#countyPTask select").empty();
	$("#cityPTask select").empty();
	$("#xcodePTask select").empty();
	$("#pstatusPTask select").empty();
	$("#taskkPTask select").empty();
	//$("#edateePTask select").empty();
	//$("#sdateePTask select").empty();
	//$("#etypePTask select").empty();
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	//AJAX COUNTY
				$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followup.php',  
				type: 'POST',
				data: { 
				'type': 'load-countys', 
				'pendingTask':'yes',
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
							
							$("#countyPTask select").append(output);													
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
				'pendingTask':'yes',
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
							
							$("#cityPTask select").append(output);													
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
				'pendingTask':'yes', 				
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
							
							$("#xcodePTask select").append(output);													
					}else{
						alert('else obj');
					}					
				});
				
				
				//PROPERTY STATUS
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
					
				$("#pstatusPTask select").append(out);
				
				
				//PROPERTY STATUS
				var out="";
				var all="ALL";
				var sendsms="Send SMS";
				var receivesms="Receive SMS";
				var sendsfax="Send FAX";
				var receivefax="Receive FAX";
				
				var sendemail="Send EMAIL";
				var receiveemail="Receive EMAIL";
				var sendsdoc="Send DOC";
				var receivedoc="Receive DOC";
				
				var makecall="Make Call";
				var receivecall="Receive Call";
				var sendrmail="Send R. Mail";
				var receivermail="Receive R. Mail";
				
				var sendother="Send Other";
				var receiveother="Receive Other";
				var sendvoicemail="Send Voice Mail";
				var receivevoicemail="Receive Voice Mail";
				
				var makenote="Make Note";
				
				
					out +='<option value="-2">'+all+'</option>';	
					out +='<option value="1">'+sendsms+'</option>';
					out +='<option value="2">'+receivesms+'</option>';
					out +='<option value="3">'+sendsfax+'</option>';
					out +='<option value="4">'+receivefax+'</option>';
					out +='<option value="5">'+sendemail+'</option>';	
					out +='<option value="6">'+receiveemail+'</option>';
					out +='<option value="7">'+sendsdoc+'</option>';
					out +='<option value="8">'+receivedoc+'</option>';
					out +='<option value="9">'+makecall+'</option>';
					out +='<option value="10">'+receivecall+'</option>';
					out +='<option value="11">'+sendrmail+'</option>';
					out +='<option value="12">'+receivermail+'</option>';	
					out +='<option value="13">'+sendother+'</option>';
					out +='<option value="14">'+receiveother+'</option>';
					out +='<option value="15">'+sendvoicemail+'</option>';
					out +='<option value="16">'+receivevoicemail+'</option>';
					
					out +='<option value="17">'+makenote+'</option>';
					
					
				$("#taskkPTask select").append(out);
								
}

function removeFilterPendingTask(){
//alert('removiendo filtro propiedad');
	$("input#addressPTask").val("");
	$("input#zipcodePTask").val("");
	$("input#contactPTask").val("");
	$("input#schedateP").val("");
	$("input#schedateP2").val("");
	
	$("#countyPTask option:selected").val("ALL");
	$("#cityPTask option:selected").val("ALL");
	$("#xcodePTask option:selected").val("ALL");
	$("#taskkPTask option:selected").val("-2");
	$("#pstatusPTask option:selected").val("ALL");
	$("#edateePTask option:selected").val("Equal");
	$("#sdateePTask option:selected").val("Equal");
	$("#etypPTask option:selected").val("-1");
	
	$("#pendientes ul").empty();
	$("#task-tablet ul").empty();
	$('#menuTask').panel("close");
	var start = 0; 
	var limit = 25; 	
	listadoPendings(start, limit);
	
			

}

function longPending(id){
	//alert(id);
	if(checkid.length==0){
		var ch= checkid.push(id)				
		document.getElementById('primero'+id).style.background = '#A9D0F5';
		document.getElementById('header_pending').style.display = "block";
				
		var div = document.createElement("div");
		//div.style.width = "40px";
		div.style.height = "40px";
		div.style.background = "gray";
		div.style.color = "white";
		div.style.marginTop="-40px";
		div.style.textAlign = "right";
		//div.className = "logo";
		div.id = "logo";
				
		var div2 = document.getElementById("header_pending"); 
		// agregamos la imagen
		div2.appendChild(div);
				
		$(".box").hide();	   
		$(".box2").hide();	   
		$(".box3").hide();
		$(".box7").hide();
			   
		//crear ancla para Aceptar
		var ace = document.createElement("a");
		//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
		ace.className ='box3 ui-btn excecute ui-first-child ui-last-child';
		ace.style.marginRight = "200px";
		ace.style.marginTop = "2px";
		ace.style.height = "35px";
		//ace.setAttribute("href","#menuProperty");
		ace.onclick = function(){
			//alert('aceptar');
			//document.getElementById('header_two').style.display = "none";
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
					//alert(checkid[i]);
					//alert(checkid);
					//if(checkid[i] == id){ 
					//alert("encontrado"); 
					//alert(id); 
					var checkid_old=""+checkid;
					var myarray = checkid_old.split(",");
								
					//aki quiero borrar vector[i] 								
					function removeByIndex(checkid, id) {
						checkid.splice(id, checkid[i]); //nro de elemento checkid[i]
					}
					  
					//alert("Array before removing elements: "+checkid);
					removeByIndex(checkid, i);
								
					for (var f = 0, len = myarray.length; f<len;f++){
						document.getElementById('primero'+myarray[f]).style.backgroundColor = '#fff';
					}
					//alert("Array after removing elements: "+checkid);
								
					document.getElementById('header_pending').style.display = "none";
								
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
				
		//crear ancla de menu por propiedad completed
		var c = document.createElement("a");
		//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
		c.className ='box7 ui-btn excecute ui-first-child ui-last-child';
		c.style.marginLeft = "6px";
		c.style.marginTop = "2px";
		c.style.height = "35px";
		//a.setAttribute("href","#");
		c.onclick = function(){
			//alert('deleteP');
			//completedTask(checkid);
		};
		var src = document.getElementById("logo");
		src.appendChild(c);
				
		//crear ancla para delete
		var del = document.createElement("a");
		//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
		del.className ='box ui-btn excecute ui-first-child ui-last-child';
		del.style.marginLeft = "6px";
		del.style.marginTop = "2px";
		del.style.height = "35px";
		del.setAttribute("href","#menuTask");
		del.onclick = function(){
			//alert('click menu');
		};
		var src = document.getElementById("logo");
		src.appendChild(del);
				
		document.getElementById('logo').style.display = "block";
		//document.body.appendChild(div);
				
	}else{
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
			//alert("si lo encontro2");
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
						document.getElementById('primero'+myarray[f]).style.backgroundColor = '#fff';
					}
							
					//alert("Array after removing elements: "+checkid);
							
					document.getElementById('header_pending').style.display = "none";
							document.getElementById('logo').style.display = "none";
							//fin aki				  
						}
							//alert(checkid);
					document.getElementById('logo').style.display = "none";							
			}				
		}else{
				
			checkid.push(id)
							
			//alert(checkid+'else');
			document.getElementById('primero'+id).style.background = '#A9D0F5';
					
		}
								
			
	}

}

function getfilterCompletedTask(){
	var i;
	
	$("#countyCTask select").empty();
	$("#cityCTask select").empty();
	$("#xcodeCTask select").empty();
	$("#taskkCTask select").empty();
	$("#pstatusCTask select").empty();
	$("#contracttCTask select").empty();
	$("#poffCTask select").empty();
	$("#addeeCTask select").empty();
	$("#msggCTask select").empty();
	$("#offerrCTask select").empty();
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	
	//AJAX COUNTY
				$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followup.php',  
				type: 'POST',
				data: { 
				'type': 'load-countys', 
				'pendingTask':'no',
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
							
							$("#countyCTask select").append(output);													
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
				'pendingTask':'no',
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
							
							$("#cityCTask select").append(output);													
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
				'pendingTask':'no', 				
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
							
							$("#xcodeCTask select").append(output);													
					}else{
						alert('else obj');
					}					
				});
				
				
				//COMPLETED STATUS
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
					
				$("#pstatusCTask select").append(out);
				
				
				//COMPLETED TASK
				var out="";
				var all="ALL";
				var sendsms="Send SMS";
				var receivesms="Receive SMS";
				var sendsfax="Send FAX";
				var receivefax="Receive FAX";
				
				var sendemail="Send EMAIL";
				var receiveemail="Receive EMAIL";
				var sendsdoc="Send DOC";
				var receivedoc="Receive DOC";
				
				var makecall="Make Call";
				var receivecall="Receive Call";
				var sendrmail="Send R. Mail";
				var receivermail="Receive R. Mail";
				
				var sendother="Send Other";
				var receiveother="Receive Other";
				var sendvoicemail="Send Voice Mail";
				var receivevoicemail="Receive Voice Mail";
				
				var makenote="Make Note";
				
				
					out +='<option value="-2">'+all+'</option>';	
					out +='<option value="1">'+sendsms+'</option>';
					out +='<option value="2">'+receivesms+'</option>';
					out +='<option value="3">'+sendsfax+'</option>';
					out +='<option value="4">'+receivefax+'</option>';
					out +='<option value="5">'+sendemail+'</option>';	
					out +='<option value="6">'+receiveemail+'</option>';
					out +='<option value="7">'+sendsdoc+'</option>';
					out +='<option value="8">'+receivedoc+'</option>';
					out +='<option value="9">'+makecall+'</option>';
					
					out +='<option value="10">'+receivecall+'</option>';
					out +='<option value="11">'+sendrmail+'</option>';
					out +='<option value="12">'+receivermail+'</option>';	
					out +='<option value="13">'+sendother+'</option>';
					out +='<option value="14">'+receiveother+'</option>';
					out +='<option value="15">'+sendvoicemail+'</option>';
					out +='<option value="16">'+receivevoicemail+'</option>';
					
					out +='<option value="17">'+makenote+'</option>';
					
					
				$("#taskkCTask select").append(out);
				
				//COMPLETED CONTRACT
				var out2="";
				var select="-Select-";
				var yes="Yes";
				var no="No";
								
					out2 +='<option value="-1">'+select+'</option>';	
					out2 +='<option value="'+yes+'">'+no+'</option>';
					out2 +='<option value="'+no+'">'+no+'</option>';
										
				$("#contracttCTask select").append(out2);
				$("#poffCTask select").append(out2);
				$("#addeeCTask select").append(out2);
				$("#emddCTask select").append(out2);
				$("#msggCTask select").append(out2);
				$("#offerrCTask select").append(out2);
								
}

function removeFilterCompletedTask(){
//alert('removiendo filtro propiedad');
	$("input#addressCTask").val("");
	$("input#zipcodeCTask").val("");
	$("input#contactCTask").val("");
	$("input#compdateC").val("");
	$("input#compdateC2").val("");
	
	$("#countyCTask option:selected").val("ALL");
	$("#cityCTask option:selected").val("ALL");
	$("#xcodeCTask option:selected").val("ALL");
	$("#taskkCTask option:selected").val("-2");
	$("#pstatusCTask option:selected").val("ALL");
	$("#cdateCTask option:selected").val("Equal");
	
	$("#contracttCTask option:selected").val("-1");
	$("#poffCTask option:selected").val("-1");
	$("#addeeCTask option:selected").val("-1");
	$("#emddCTask option:selected").val("-1");
	$("#msggCTask option:selected").val("-1");
	$("#offerrCTask option:selected").val("-1");
	
	$("#completados ul").empty();
	$("#task-tablet2 ul").empty();
	$('#menuTaskCompleted').panel("close");
	var start = 0; 
	var limit = 25; 	
	listadoCompleted(start, limit);
	

}

function longCompleted(id){
	//alert(id);
	if(checkid.length==0){
				var ch= checkid.push(id)				
				document.getElementById('primero'+id).style.background = '#A9D0F5';
				document.getElementById('header_completed').style.display = "block";
				
				var div = document.createElement("div");
				//div.style.width = "40px";
				div.style.height = "40px";
				div.style.background = "gray";
				div.style.color = "white";
				div.style.marginTop="-40px";
				div.style.textAlign = "right";
				//div.className = "logo";
				div.id = "logo";
				
				
				var div2 = document.getElementById("header_completed"); 
				// agregamos la imagen
				div2.appendChild(div);
				
				$(".box").hide();	   
				$(".box2").hide();	   
				$(".box3").hide();
			   
				//crear ancla para Aceptar
				var ace = document.createElement("a");
				//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
				ace.className ='box3 ui-btn excecute ui-first-child ui-last-child';
				ace.style.marginRight = "200px";
				ace.style.marginTop = "2px";
				ace.style.height = "35px";
				//ace.setAttribute("href","#menuProperty");
				ace.onclick = function(){
					//alert('aceptar');
					//document.getElementById('header_two').style.display = "none";
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
							//alert(checkid[i]);
							//alert(checkid);
							//if(checkid[i] == id){ 
								//alert("encontrado"); 
								//alert(id); 
								var checkid_old=""+checkid;
								var myarray = checkid_old.split(",");
								
								//aki quiero borrar vector[i] 								
								function removeByIndex(checkid, id) {
									checkid.splice(id, checkid[i]); //nro de elemento checkid[i]
								}
					  
								//alert("Array before removing elements: "+checkid);
								removeByIndex(checkid, i);
								
								for (var f = 0, len = myarray.length; f<len;f++){
									document.getElementById('primero'+myarray[f]).style.backgroundColor = '#fff';
								}
								//alert("Array after removing elements: "+checkid);
								
								document.getElementById('header_completed').style.display = "none";
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
				del.setAttribute("href","#menuTaskCompleted");
				del.onclick = function(){
					//alert('click menu');
				};
				var src = document.getElementById("logo");
				src.appendChild(del);
				
				document.getElementById('logo').style.display = "block";
				//document.body.appendChild(div);
				
	}else{
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
					//alert("si lo encontro2");
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
								document.getElementById('primero'+myarray[f]).style.backgroundColor = '#fff';
							}
							
							//alert("Array after removing elements: "+checkid);
							
							document.getElementById('header_completed').style.display = "none";
							document.getElementById('logo').style.display = "none";
							//fin aki				  
						}
							document.getElementById('logo').style.display = "none";
							//alert(checkid);				
					}				
				}else{
				
					checkid.push(id)
							
					//alert(checkid+'else');
					document.getElementById('primero'+id).style.background = '#A9D0F5';
					
				}
								
			
			}

}


function detailPending(id){
	
		var typefollow="(B,S)"
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
	
		busy=true;
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followup.php',  
			type: 'POST',
		   data: { 
			'typeFollow': 'B', 
			'userid': userid,
			'pendingtask':'yes',
			'idfus':id
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
				
                //recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
                $.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada propiedad
					
					var datos = new Array();
					var valor = new Array();
					var i=0;
					
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='pid' || userkey=='address' || userkey=='stime' || userkey=='etime' || 
						   userkey=='ntask' || userkey=='detail' || userkey=='agent' || userkey=='statusschedule' || 
						   userkey=='typeExec' || userkey=='status' || userkey=='ndate' || userkey=='idfus'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);
						}
									
                    });
					//alert(valor[0]);
					
					//var price = accounting.formatMoney(datos['lprice'], "$", 0);
					//var offer = accounting.formatMoney(datos['offer'], "$", 0);
					var automatic='Automatic';
					var manual='Manual';
					
					var year = moment(datos['ndate']).format('YYYY');
					var year2 = moment(datos['stime']).format('YYYY');
					var year3 = moment(datos['etime']).format('YYYY');
					
					if (year>=2015){
					var date = moment(datos['ndate']).format('DD MMM');
					}else if (year<2015){
					var date = moment(datos['ndate']).format('MM/DD/YY');
					}
					
					if (year3>=2015){
					var etime = moment(datos['etime']).format('HH:mm a');
					}else if (year3<2015){
					var etime = moment(datos['etime']).format('HH:mm a');
					}
					
					if (year2>=2015){
					var stime = moment(datos['stime']).format('HH:mm a');
					}else if (year2<2015){
					var stime = moment(datos['stime']).format('HH:mm a');
					}
					
					
					//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
					output += '<li id="primero'+datos['idfus']+'" idfus='+datos['idfus']+' style="list-style: none;border-bottom: 2px solid #ccc;">';     
						output +='<div style="height:20px;margin-bottom:10px;padding-left:5px;padding-right:5px;margin-top: 5px;" class="col-xs-12 col-sm-6">';
							
							if (datos['ntask']==1){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_green-80.png" width=30px height=30px>';
							}else if (datos['ntask']==3){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_green-80.png" width=30px height=30px>';
							}else if (datos['ntask']==5){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-green-80.png" width=30px height=30px>';
							}else if (datos['ntask']==7){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docV-80.png" width=30px height=30px>';
							}else if (datos['ntask']==9){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-80.png" width=30px height=30px>';
							}else if (datos['ntask']==11){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-mail-80.png" width=30px height=30px>';
							}else if (datos['ntask']==13){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherV-80.png" width=30px height=30px>';
							}else if (datos['ntask']==15){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice-80.png" width=30px height=30px>';
							}else if (datos['ntask']==17){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-note-80.png" width=30px height=30px>';
							}else if (datos['ntask']==2){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_az-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==4){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_az-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==6){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-blue-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==8){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docB-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==10){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-B-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==12){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/reci-mailB-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==14){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherB-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==16){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice_az-80.png" width=30px height=30px>';
							}
							
							
							if (datos['status']=='A'){
								//output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/active-40-gr.png" no-repeat scroll 0px -40px transparent title="Active">';
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-verde-80.png" no-repeat scroll 0px -40px transparent title="Active">';
							}else if (datos['status']=='NA'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-am-80.png" no-repeat scroll 0px -40px transparent title="No-Active">';
							}else if (datos['status']=='S'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-red-80.png" no-repeat scroll 0px -40px transparent title="Sold">';
							}else if (datos['status']=='NF'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-az.png" no-repeat scroll 0px -40px transparent title="By Owner">';
							}
							
							if (datos['typeExec']==2){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/exec-type-vrd.png" no-repeat scroll 0px -40px transparent title="Active">';
							}
														
						
						output += '</div>';
				
					
					/*output +='<div class="row">'+
								'<div style="color:#ccc;text-align:right;" class="col-xs-12 col-sm-6 col-md-12">'+datefollow+'</div>'+
							'</div>';	*/	 
					
					output +='<div class="row">';
						output +='<div class="col-sm-12">';
							output +='<div class="row">';								
								
								output +='<div style="padding-left:0px;margin-top:10px" class="col-xs-12 col-sm-6 col-md-12">';
									
									output +='<div style="font-size: 18px;font-weight: bold;" class="col-md-3">';
											output +=''+datos['address']+'';
									output += '</div>';
																		
									output +='<div style="font-weight: bold;" class="col-md-3">';
										output +='Contact:&nbsp;'+datos['agent']+'';
									output += '</div>';
									
									output +='<div class="col-md-6" style="font-weight: bold;">';
										output +='Status:&nbsp;'+datos['statusschedule']+'';
									output += '</div>';
									
									output +='<div  class="col-md-3">';
										output +='S. Time:&nbsp;'+stime+'';
									output += '</div>';
									
									output +='<div  class="col-md-3">';
										output +='E. Time:&nbsp;'+etime+'';
									output += '</div>';
									
									if (datos['detail']!=''){
										output +='<div class="col-md-5" style="font-weight: normal;">';
											output +='Detail:&nbsp;'+datos['detail']+'';
										output += '</div>';
									}else{
										
										output +='<div class="col-md-3" style="font-weight: normal;">';
											output +=''+datos['detail']+'';
										output += '</div>';
									}									
									
									/*output +='<div class="col-md-2" style="font-weight: normal;">';
										if (datos['typeExec']==1){
											output +='Exec. Type:&nbsp;'+manual+'';
										}else{
											output +='Exec. Type:&nbsp;'+automatic+'';
										}
										
									output += '</div>';*/
									
																	
									output +='<div class="col-md-6" style="font-weight: normal;text-align:right;">';
										output +=''+date+'';
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
							$("#detallePendiente ul").append(output);
						}else{
							$("#detallePendiente ul").html('No result! ');
						}
						//$(".tot").append(obj.total);
					
				} else {
					//data.success no es true
					$("#detallePendiente ul").html('No true! ');
				}			
		});

}


function detailCompleted(id){
	
	var typefollow="(B,S)"
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	busy=true;
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followup.php',  
		type: 'POST',
		data: { 
			'typeFollow': 'BS', 
			'userid': userid,
			'pendingtask': 'no',
			'idfuh': id
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
				
                //recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
                $.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada propiedad
					
					var datos = new Array();
					var valor = new Array();
					var i=0;
					
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='pid' || userkey=='address' || userkey=='stime' || userkey=='etime' || 
						   userkey=='ntask' || userkey=='detail' || userkey=='agent' || userkey=='statusschedule' || 
						   userkey=='typeExec' || userkey=='status' || userkey=='ndate' || userkey=='idfuh' || userkey=='lprice' || 
						   userkey=='offer' || userkey=='offerpercent' || userkey=='contract' || userkey=='pof' || 
						   userkey=='emd' || userkey=='detail' || userkey=='realtorsadem' || userkey=='offerreceived'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);
						}
									
                    });
					//alert(valor[0]);
					
					var price = accounting.formatMoney(datos['lprice'], "$", 0);
					var offer = accounting.formatMoney(datos['offer'], "$", 0);
					var automatic='Automatic';
					var manual='Manual';
					
					var year = moment(datos['ndate']).format('YYYY');
					var year2 = moment(datos['stime']).format('YYYY');
					var year3 = moment(datos['etime']).format('YYYY');
					
					if (year>=2015){
					var date = moment(datos['ndate']).format('DD MMM');
					}else if (year<2015){
					var date = moment(datos['ndate']).format('MM/DD/YY');
					}
					
					if (year3>=2015){
					var etime = moment(datos['etime']).format('DD MMM');
					}else if (year3<2015){
					var etime = moment(datos['etime']).format('MM/DD/YY');
					}
					
					if (year2>=2015){
					var stime = moment(datos['stime']).format('DD MMM');
					}else if (year2<2015){
					var stime = moment(datos['stime']).format('MM/DD/YY');
					}
					
					console.log(datos['realtorsadem']);
					
					//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
					output += '<li id="primero'+datos['idfuh']+'" idfuh='+datos['idfuh']+' contr='+datos['contract']+' pof='+datos['pof']+' emd='+datos['emd']+' adde='+datos['realtorsadem']+' offre='+datos['offerreceived']+' style="list-style: none;border-bottom: 2px solid #ccc;">';     
						output +='<div style="height:20px;margin-bottom:10px;padding-left:5px;padding-right:5px;margin-top: 5px;" class="col-xs-12 col-sm-6">';
							
							if (datos['ntask']==1){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_green-80.png" width=30px height=30px>';
							}else if (datos['ntask']==3){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_green-80.png" width=30px height=30px>';
							}else if (datos['ntask']==5){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-green-80.png" width=30px height=30px>';
							}else if (datos['ntask']==7){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docV-80.png" width=30px height=30px>';
							}else if (datos['ntask']==9){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-80.png" width=30px height=30px>';
							}else if (datos['ntask']==11){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-mail-80.png" width=30px height=30px>';
							}else if (datos['ntask']==13){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherV-80.png" width=30px height=30px>';
							}else if (datos['ntask']==15){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice-80.png" width=30px height=30px>';
							}else if (datos['ntask']==17){
								output +='<img style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-note-80.png" width=30px height=30px>';
							}else if (datos['ntask']==2){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/cell_az-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==4){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/fax_az-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==6){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/mail-blue-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==8){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/docB-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==10){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/send-call-B-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==12){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/reci-mailB-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==14){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/otherB-80.png" width=30px height=30px>';	
							}else if (datos['ntask']==16){
							output +='<img  style="margin-right:10px;" src="http://www.reifax.com/FollowupReifax/img/notes/voice_az-80.png" width=30px height=30px>';
							}
							
							if (datos['status']=='A'){
								//output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/active-40-gr.png" no-repeat scroll 0px -40px transparent title="Active">';
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-verde-80.png" no-repeat scroll 0px -40px transparent title="Active">';
							}else if (datos['status']=='NA'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-am-80.png" no-repeat scroll 0px -40px transparent title="No-Active">';
							}else if (datos['status']=='S'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-red-80.png" no-repeat scroll 0px -40px transparent title="Sold">';
							}else if (datos['status']=='NF'){
								output +='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/img/notes/b-az.png" no-repeat scroll 0px -40px transparent title="By Owner">';
							}
							
							
							if (datos['contract']<=0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_c-40.png" no-repeat scroll 0px -40px transparent title="Contract">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_c-No-40.png" no-repeat scroll 0px -40px transparent title="Contract">';
							}
									
							if (datos['pof']<=0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_p-40.png" no-repeat scroll 0px -40px transparent title="Proof of Funds">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_p-No-40.png" no-repeat scroll 0px -40px transparent title="Proof of Funds">';
							}
									
							if (datos['emd']<=0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_e-40.png" no-repeat scroll 0px -40px transparent title="EMD">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_e-No-40.png" no-repeat scroll 0px -40px transparent title="EMD">';
							}
									
							if (datos['rademdums']<=0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_a-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_a-No-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}
							
							if (datos['offerreceived']<=0){
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_o-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}else{
								output+='<img style="margin-right: 10px;" width="30" height="30" src="http://reifax.com/FollowupReifax/resources/image/letras/check_o-No-40.png" no-repeat scroll 0px -40px transparent title="Addendums">';
							}
														
							
						output += '</div>';
				
					output +='<div class="row">';
						output +='<div class="col-sm-12">';
							output +='<div class="row">';								
								
								output +='<div style="padding-left:0px;margin-top:10px" class="col-xs-12 col-sm-6 col-md-12">';
									
									output +='<div style="font-size: 18px;font-weight: bold;" class="col-md-3">';
											output +=''+datos['address']+'';
									output += '</div>';
																							
									output +='<div style="font-weight: bold;" class="col-md-3">';
										output +='Contact:&nbsp;'+datos['agent']+'';
									output += '</div>';
									
									output +='<div  class="col-md-2">';
										output +='S. Completed:&nbsp;'+date+'';
									output += '</div>';
									
									/*output +='<div  class="col-md-2">';
										output +='E. Time:&nbsp;'+etime+'';
									output += '</div>';*/
									
									output +='<div  class="col-md-2">';
										output +='Price:&nbsp;'+price+'';
									output += '</div>';
									
									output +='<div  class="col-md-2">';
										output +='Offer:&nbsp;'+offer+'';
									output += '</div>';
									
									output +='<div class="col-md-2" style="font-weight: normal;">';
										if (datos['typeExec']==1){
											output +='Exec. Type:&nbsp;'+manual+'';
										}else{
											output +='Exec. Type:&nbsp;'+automatic+'';
										}
										
									output += '</div>';
									
																	
									output +='<div class="col-md-2" style="font-weight: normal;text-align:right;">';
										output +=''+date+'';
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
							$("#detalleCompletados ul").append(output);
						}else{
							$("#detalleCompletados ul").html('No result! ');
						}
						//$(".tot").append(obj.total);
					
				} else {
					//data.success no es true
					$("#detalleCompletados ul").html('No true! ');
				}			
		});
	
}

function geteditPending(id){
	
	//alert(id);
	$("#etypeEditPend select").empty();			
	$("#taskEditPend select").empty();			
			
	var output = "";
	var output2 = "";
	var output3 = "";
	var output4 = "";
	var output5 = "";
	var output6 = "";
	var output7 = "";
	var output8 = "";
	
	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followshedule.php',  
		type: 'POST',
		data: { 				
		'userid': userid,
		'type': 'get',
		'idfus':id
	}}).done(function (data){					
		//alert(data);
			//alert(data);					
			var obj2 = JSON.parse(data);
				//console.debug(obj2);
			if(obj2.success) {								 
				
				var date = moment(obj2.data.sdate).format('YYYY-MM-DD');
							
				output +=''+date+'';
				output2 +=''+obj2.data.ohour+'';
				output3 +=''+obj2.data.min+'';
				output4 +=''+obj2.data.detail+'';
				output5 +=''+obj2.data.body+'';
				output6 +=''+obj2.data.task+'';
				output7 +=''+obj2.data.status+'';
				output8 +=''+obj2.data.subject+'';
				
				console.log(output5);
				console.log(output8);
				//$('#etypeEditPend').val(obj2.data.typeExec).selectmenu('refresh', true);
				//$('#taskkEditPend').val(obj2.data.task).selectmenu('refresh', true);
					
				$("#statusEditPend").html(output7);					
				$("#edateEditPend").val(output);					
				$("#ehourEditPend").val(output2);
				$("#detailEditPend").val(output4);
					
				$("#titleEditPend").html(output8);	
				
				var textarea_line = output5.replace(/(<br>\s*|<br\/>\s*)/g, "\n");
				var textarea_line2 = textarea_line.replace("<span>", " ");
				var textarea_line3 = textarea_line2.replace("</span>", " ");
				$("#compdetailEditPend").html(textarea_line);					
				$("#compdetailEditPend").html(textarea_line2);					
				$("#compdetailEditPend").html(textarea_line3);					
					
			}else{
				alert('else obj');
			}					
		
	});
	
}

function geteditCompleted(id,parcelid){
	
	//alert(id);
	//alert(parcelid);
	$("#ExtypeEditPend select").empty();			
	$("#taskkEditPend select").empty();				
	var output = "";
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
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followhistory.php',  
		type: 'POST',
		data: { 				
		'userid': userid,
		'parcelid': parcelid,
		'idfuh':id
	}}).done(function (data){					
		//alert(data);
			//alert(data);					
			var obj2 = JSON.parse(data);
				//console.debug(obj2);
			if(obj2.success) {								 
				
				$.each(obj2.records, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					
						$.each( value, function ( userkey, uservalue) {								
							if(userkey=='offer' || userkey=='coffer'|| userkey=='task' || 
							userkey=='sheduledetail' || userkey=='detail' || userkey=='contract' || userkey=='pof' || userkey=='emd' || 
							userkey=='realtorsadem' || userkey=='offerreceived'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								console.debug(userkey);									
							}									
						});
						
							output +=''+datos['offer']+'';
							output2 +=''+datos['coffer']+'';
							output3 +=''+datos['sheduledetail']+'';
							
							if(datos['detail']!=null){
								output4 +=''+datos['detail']+'';	
							}
							
							
							output6 +=''+datos['task']+'';
							
							output7 +=''+datos['contract']+'';
							output8 +=''+datos['pof']+'';
							output9 +=''+datos['emd']+'';
							output10+=''+datos['realtorsadem']+'';
							output11+=''+datos['offerreceived']+'';
						
				});
				
					
					//$("#taskkEditPend select").append(output6);
					//$('#taskEditPend').val(obj2.data.task).selectmenu('refresh');
					//$('#taskEditCompleted').val(datos['task']).selectmenu('refresh');
					$('#taskEditCompleted').val(output6).selectmenu('refresh');
					
					$("#offerEditCompleted").val(output);					
					$("#cofferEditCompleted").val(output2);
					$("#textschdetailEditCompleted").val(output3);					
					$("#textcompdetailEditCompleted").val(output4);	
					
					//$("#checkbox-v-2e checkbox").append(output7);
					//$("input[type='checkbox']").val(output7).checkbox("refresh");
					//$("input[type='checkbox']").attr("checked",true).checkboxradio("refresh");
					//$('input:radio[name=checkbox-v-2a]:checked').val();
					
					if (output7>=1){
						$("input[name='chkEC']").attr("checked",true).checkboxradio("refresh");
					}else if (output7==0){
						$("input[name='chk']").attr("checked",false).checkboxradio("refresh");						
					}

					if (output8==1){
						$("input[name='chkEC2']").attr("checked",true).checkboxradio("refresh");						
					}else if (output8==0){
						$("input[name='chkEC2']").attr("checked",false).checkboxradio("refresh");
					}
					
					if (output9==1){
						$("input[name='chkEC3']").attr("checked",true).checkboxradio("refresh");
						//$('#checkbox-ec-p').attr("checked","checked");
					}else if (output9==0){
						$("input[name='chkEC3']").attr("checked",false).checkboxradio("refresh");
					}
					
					if (output10==1){
						$("input[name='chkEC4']").attr("checked",true).checkboxradio("refresh");
					}else if (output10==0){
						$("input[name='chkEC4']").attr("checked",false).checkboxradio("refresh");						
					}
					
					if (output11==1){
						$("input[name='chkEC5']").attr("checked",true).checkboxradio("refresh");
					}else if (output11==0){
						$("input[name='chkEC5']").attr("checked",false).checkboxradio("refresh");						
					}
					
					
					
					
					
				}else{
					alert('else obj');
				}					
		
	});
	
}

function editPendingTask(){
	
	var id = JSON.parse(localStorage.getItem('key'));
	
	var odate = $("input#edateEditPend").val();
	var ohour = $("input#ehourEditPend").val();
	var detail = $("textarea#detailEditPend").val();
	var complete = $("textarea#compdetailEditPend").val();
	
	$("#etypeEditPend").prop("selected", true);
	var typeExec 	= $("#etypeEditPend option:selected").val();
	
	//alert(typeExec);
	
	$("#taskEditPend").prop("selected", true);
	var task 	= $("#taskEditPend option:selected").val();
	
	
	//alert(odate);
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followshedule.php',  
			type: "POST",
			data: { 	
			'idfus':id.idfus,
			'userid': userid,		
			'type': 'update',
			'odate': odate,
			'ohour': ohour,
			'task': task,
			'typeExec': typeExec,
			'detail': detail,
			'complete': complete
			
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				if (data){
					//alert('pending task editedddd');
					bootbox.alert({
						title: 'Pending Task',
						message: 'Pending Task Sucessfully Edited'
					});
					$.mobile.changePage('#detailPending');
				}
				/*if(data){
					alert('contact delete');
					location.reload(true);
				}else{
					alert('error');
				}*/
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
	
	
}

function editCompletedTask(){
	
	var id = JSON.parse(localStorage.getItem('key'));
	
	var offer = $("input#offerEditCompleted").val();
	var coffer = $("input#cofferEditCompleted").val();
	
	var detail = $("textarea#textcompdetailEditCompleted").val();
	var sheduledetail = $("textarea#textschdetailEditCompleted").val();
	
	$("#taskEditCompleted").prop("selected", true);
	var task 	= $("#taskEditCompleted option:selected").val();
	
	
	var contract= $("#chkEC").prop('checked');
	if(contract !== undefined){
	if(contract==true){
		contract='on';
	}else{
		contract='off';
	}
	}
	
	var pof= $("#chkEC2").prop('checked');
	//alert(pof);
	if(pof !== undefined){
	if(pof==true){
		pof='on';
	}else{
		pof='off';
	}
	}
	
	var emd= $("#chkEC3").prop('checked');
	if(emd !== undefined){
	if(emd==true){
		emd='on';
	}else{
		emd='off';
	}
	}
	
	var rademdums= $("#chkEC4").prop('checked');
	alert(rademdums);
	if(rademdums !== undefined){
	if(rademdums==true){
		rademdums='on';
	}else{
		rademdums='off';
	}
	}
	alert(rademdums);
	
	var offerreceived= $("#chkEC5").prop('checked');
	if(offerreceived !== undefined){
	if(offerreceived==true){
		offerreceived='on';
	}else{
		offerreceived='off';
	}
	}
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followhistory.php',  
			type: "POST",
			data: { 	
			'idfuh':id.idfuh,
			'userid': userid,		
			'type': 'update',
			'offer': offer,
			'coffer': coffer,
			'task': task,
			'contract': contract,
			'pof': pof,
			'emd': emd,
			'rademdums': rademdums,
			'offerreceived': offerreceived,
			'detail': detail,
			'sheduledetail': sheduledetail
			
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				if (data){
					//alert('Completed Task Editedddd');
					bootbox.alert({
						title: 'Completed Task',
						message: 'Completed Task Sucessfully Edited'
					});
					$.mobile.changePage('#detailCompleted');
				}
				
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
	
	
}

function completedMultiTask(){
	
	var id = JSON.parse(localStorage.getItem('key'));
	var pid = JSON.parse(localStorage.getItem('key2'));
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	/*$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followshedule_complete.php',  
		type: 'POST',
		data: { 				
		'userid': 3213,
		'idfus':id.idfus,
		'parcelid':pid.parcelid
		}}).done(function (data){					
			alert(data);		
		
		});*/
		
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followshedule_complete.php',  
			type: "POST",
			data: { 	
			'userid': userid,
			'idfus':id.idfus,
			'parcelid':pid.parcelid
			
			},
			success: function(data, textStatus, jqXHR){
				alert(data);
				if (data){
					//alert('Completed Task Editedddd');
					bootbox.alert({
						title: 'Completed Task',
						message: 'Completed Task Sucessfully'
					});
					$.mobile.changePage('#taskCompletedHtml');
				}
				
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
	
	
}



function test3() {
d3 = document.getElementById("etypeEditPend").value;
alert(d3);
if (d3==1){
	document.getElementById('taskkEditPend2').style.display = "none";	
	document.getElementById('taskkEditPend').style.display = "block";	
}else if (d3==2){
	document.getElementById('taskkEditPend2').style.display = "block";	
	document.getElementById('taskkEditPend').style.display = "none";	
}
}

function changeCheckEC(target)
{

	var chkEC = $('#chkEC').get(0);
	//alert(chkEC.checked);
    if (!chkEC.checked) {
		$('#ckVECc').show();
		$('#ckFECc').hide();
        $('#chkEC').prop('checked', true);
    } else {
        $('#ckVECc').hide();
		$('#ckFECc').show();
        $('#chkEC').prop('checked', false);
    }			

}

function changeCheckEC2(target)
{
     var chkEC2 = $('#chkEC2').get(0);
	// alert(chk2.checked);
    if (!chkEC2.checked) {
		$('#ckVECp').show();
		$('#ckFECp').hide();
        $('#chkEC2').prop('checked', true);
    } else {
        $('#ckVECp').hide();
		$('#ckFECp').show();
        $('#chkEC2').prop('checked', false);
    }		
	
	
}

function changeCheckEC3(target)
{
     var chkEC3 = $('#chkEC3').get(0);
	// alert(chk3.checked);
    if (!chkEC3.checked) {
		$('#ckVECe').show();
		$('#ckFECe').hide();
        $('#chkEC3').prop('checked', true);
    } else {
        $('#ckVECe').hide();
		$('#ckFECe').show();
        $('#chkEC3').prop('checked', false);
    }		
}

function changeCheckEC4(target)
{
     var chkEC4 = $('#chkEC4').get(0);
	 //alert(chk4.checked);
    if (!chkEC4.checked) {
		$('#ckVECa').show();
		$('#ckFECa').hide();
        $('#chkEC4').prop('checked', true);
    } else {
        $('#ckVECa').hide();
		$('#ckFECa').show();
        $('#chkEC4').prop('checked', false);
    }		
}

function changeCheckEC5(target)
{
     var chkEC5 = $('#chkEC5').get(0);
	 //alert(chk5.checked);
    if (!chkEC5.checked) {
		$('#ckVECo').show();
		$('#ckFECo').hide();
        $('#chkEC5').prop('checked', true);
    } else {
        $('#ckVECo').hide();
		$('#ckFECo').show();
        $('#chkEC5').prop('checked', false);
    }		
}


