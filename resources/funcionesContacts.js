function back(){
	alert('back');
	//document.getElementById("detalleContacto").innerHTML="";					
	/*var scntDiv 		= $('#p_scents');
	$("<form id='formname' name='formname' action='http://booleam.com/<?php echo $lang ?>/app/previewpoll' method='post'><input name='id_question' id='id_question' value='"+url+"' type='hidden'/></form>").appendTo(scntDiv);
	$('#formname').submit();*/
}
	

	
function deleteContacts(id){
	//alert('borrando'+id);
	//console.log(id);
	var agentid = id.join();
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
		$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: "POST",
			data: { 			
			'userid': userid,		
			'type': 'delete',
			'agentids': agentid 			
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				if(data){
					alert('contact delete');
					//location.reload(true);
					$.mobile.changePage( "#contactsHtml");
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
	}	
	
function insertContact(){
	//alert('insertando...');
	var agent = $("input#agenC").val();
		
	$("#typC").prop("selected", true);
	var agenttype 	= $("#typC option:selected").val();
	if (agenttype=='Agent'){
		agenttype=1;
	}else if (agenttype=='Buyer'){
		agenttype=2;
	}else if (agenttype=='Seller'){
		agenttype=3;
	}else if (agenttype=='Loan Officer'){
		agenttype=4;
	}else if (agenttype=='Hard Money Lender'){
		agenttype=5;
	}else if (agenttype=='Title Company'){
		agenttype=6;
	}else if (agenttype=='Lawyer'){
		agenttype=7;
	}else if (agenttype=='Client'){
		agenttype=8;
	}else if (agenttype=='Broker'){
		agenttype=9;
	}else if (agenttype=='General Contractor'){
		agenttype=10;
	}else if (agenttype=='Other'){
		agenttype=11;
	}else if (agenttype=='Coach'){
		agenttype=12;
	}else if (agenttype=='Short Sale Negotiator'){
		agenttype=13;
	}
		
	$("#emai1Cont").prop("selected", true);
	var typeemail1 	= $("#emai1Cont option:selected").val();
	if (typeemail1=='Home'){
		typeemail1=0;
	}else if (typeemail1=='Office'){
		typeemail1=1;
	}
	$("#emai2Cont").prop("selected", true);
	var typeemail2 	= $("#emai2Cont option:selected").val();
	if (typeemail2=='Home'){
		typeemail2=0;
	}else if (typeemail2=='Office'){
		typeemail2=1;
	}
	var email1 = $("input#ema1Cont").val();		
	var email2 = $("input#ema2Cont").val();		
				
	var company = $("input#companyCont").val();
		
	$("#websit1Cont").prop("selected", true);
	var typeurl1 	= $("#websit1Cont option:selected").val();
	if (typeurl1=='Personal'){
		typeurl1=0;
	}else if (typeurl1=='Office'){
		typeurl1=1;
	}
	$("#websit2Cont").prop("selected", true);
	var typeurl2 	= $("#websit2Cont option:selected").val();
	if (typeurl2=='Personal'){
		typeurl2=0;
	}else if (typeurl2=='Office'){
		typeurl2=1;
	}
	var urlsend1 = $("input#web1Cont").val();		
	var urlsend2 = $("input#web2Cont").val();	
		
	$("#phon1Cont").prop("selected", true);
		var typeph1 	= $("#phon1Cont option:selected").val();
		if (typeph1=='Cell'){
			typeph1=0;
		}else if (typeph1=='Home Fax'){
			typeph1=1;
		}else if (typeph1=='Office Fax'){
			typeph1=2;
		}else if (typeph1=='TollFree'){
			typeph1=3;
		}else if (typeph1=='O.TollFree'){
			typeph1=4;
		}else if (typeph1=='Skype'){
			typeph1=5;
		}
		$("#phon2Cont").prop("selected", true);
		var typeph2 	= $("#phon2Cont option:selected").val();
		if (typeph2=='Cell'){
			typeph2=0;
		}else if (typeph2=='Home Fax'){
			typeph2=1;
		}else if (typeph2=='Office Fax'){
			typeph2=2;
		}else if (typeph2=='TollFree'){
			typeph2=3;
		}else if (typeph2=='O.TollFree'){
			typeph2=4;
		}else if (typeph2=='Skype'){
			typeph2=5;
		}
		$("#phon3Cont").prop("selected", true);
		var typeph3 	= $("#phon3Cont option:selected").val();
		if (typeph3=='Cell'){
			typeph3=0;
		}else if (typeph3=='Home Fax'){
			typeph3=1;
		}else if (typeph3=='Office Fax'){
			typeph3=2;
		}else if (typeph3=='TollFree'){
			typeph3=3;
		}else if (typeph3=='O.TollFree'){
			typeph3=4;
		}else if (typeph3=='Skype'){
			typeph3=5;
		}
		$("#phon4Cont").prop("selected", true);
		var typeph4 	= $("#phon4Cont option:selected").val();
		if (typeph4=='Cell'){
			typeph4=0;
		}else if (typeph4=='Home Fax'){
			typeph4=1;
		}else if (typeph4=='Office Fax'){
			typeph4=2;
		}else if (typeph4=='TollFree'){
			typeph4=3;
		}else if (typeph4=='O.TollFree'){
			typeph4=4;
		}else if (typeph4=='Skype'){
			typeph4=5;
		}
		$("#phon5Cont").prop("selected", true);
		var typeph5 	= $("#phon5Cont option:selected").val();
		if (typeph5=='Cell'){
			typeph5=0;
		}else if (typeph5=='Home Fax'){
			typeph5=1;
		}else if (typeph5=='Office Fax'){
			typeph5=2;
		}else if (typeph5=='TollFree'){
			typeph5=3;
		}else if (typeph5=='O.TollFree'){
			typeph5=4;
		}else if (typeph5=='Skype'){
			typeph5=5;
		}
		$("#phon6Cont").prop("selected", true);
		var typeph6 	= $("#phon6Cont option:selected").val();
		if (typeph6=='Cell'){
			typeph6=0;
		}else if (typeph6=='Home Fax'){
			typeph6=1;
		}else if (typeph6=='Office Fax'){
			typeph6=2;
		}else if (typeph6=='TollFree'){
			typeph6=3;
		}else if (typeph6=='O.TollFree'){
			typeph6=4;
		}else if (typeph6=='Skype'){
			typeph6=5;
		}
		var phone1 = $("input#pho1Cont").val();		
		var phone2 = $("input#pho2Cont").val();
		var phone3 = $("input#pho3Cont").val();		
		var phone4 = $("input#pho4Cont").val();
		var phone5 = $("input#pho5Cont").val();		
		var phone6 = $("input#pho6Cont").val();
		
		$("#addre1Cont").prop("selected", true);
		var typeaddress1 	= $("#addre1Cont option:selected").val();
		if (typeaddress1=='Home'){
			typeaddress1=0;
		}else if (typeaddress1=='Office'){
			typeaddress1=1;
		}
		$("#addre2Cont").prop("selected", true);
		var typeaddress2 	= $("#addre2Cont option:selected").val();
		if (typeaddress2=='Home'){
			typeaddress2=0;
		}else if (typeaddress2=='Office'){
			typeaddress2=1;
		}
		var address1 = $("input#addr1Cont").val();		
		var address2 = $("input#addr2Cont").val();
		
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
		//alert(typeemail1);
		//alert(company);
		$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: "POST",
			data: { 			
			'userid': userid,		
			'type': 'insert',
			'agent': agent,
			'company': company,
			'agenttype': agenttype,
			'email': email1,
			'typeemail1' :typeemail1,
			'email2': email2,
			'typeemail2' :typeemail2,
			'urlsend': urlsend1,
			'typeurl1' :typeurl1,
			'urlsend2': urlsend2,
			'typeurl2' :typeurl2,
			'phone1': phone1,
			'typeph1':typeph1,
			'phone2': phone2,
			'typeph2':typeph2,
			'phone3': phone3,
			'typeph3':typeph3,
			//'phone4': phone4,
			'typeph4':typeph4,
			//'phone5': phone5,
			'typeph5':typeph5,
			//'phone6': phone6,
			'typeph6':typeph6,
			'address1': address1,
			'typeaddress1':typeaddress1,
			'address2': address2,
			'typeaddress2':typeaddress2,
			'tollfree':phone4,
			'fax':phone6
			}
			}).done(function (data){
				//alert(data);
				var obj = JSON.parse(data);
				console.log(obj.msg);
				
				if (obj.msg=="New Follow Agent."){					
					//alert('New Follow Agent');
					//location.reload(true);
					$.mobile.changePage("#contactsHtml");
					
				}
				
				if(obj.msg=="Agent Exist."){
					//alert('Agent Exist');
					//location.reload(true);
					$.mobile.changePage("#contactsHtml");
					//console.log('aqui');
				}
				
			
		});
	}
	
function editContact(){
		var agentid = JSON.parse(localStorage.getItem('agentid'));
		// La alerta mostrará 1 por pantalla
	
		//alert('editando'+agentid.agentid);
		
		var agent = $("input#agenEd").val();
		//alert(agent);
		$("#typEd").prop("selected", true);
		var agenttype 	= $("#typEd option:selected").val();
		if (agenttype=='Agent'){
			agenttype=1;
		}else if (agenttype=='Buyer'){
			agenttype=2;
		}else if (agenttype=='Seller'){
			agenttype=3;
		}else if (agenttype=='Loan Officer'){
			agenttype=4;
		}else if (agenttype=='Hard Money Lender'){
			agenttype=5;
		}else if (agenttype=='Title Company'){
			agenttype=6;
		}else if (agenttype=='Lawyer'){
			agenttype=7;
		}else if (agenttype=='Client'){
			agenttype=8;
		}else if (agenttype=='Broker'){
			agenttype=9;
		}else if (agenttype=='General Contractor'){
			agenttype=10;
		}else if (agenttype=='Other'){
			agenttype=11;
		}else if (agenttype=='Coach'){
			agenttype=12;
		}else if (agenttype=='Short Sale Negotiator'){
			agenttype=13;
		}
		
		$("#emai1ContEd").prop("selected", true);
		var typeemail1 	= $("#emai1ContEd option:selected").val();
		
		if (typeemail1=='Home'){
			typeemail1=0;
		}else if (typeemail1=='Office'){
			typeemail1=1;
		}
		$("#emai2ContEd").prop("selected", true);
		var typeemail2 	= $("#emai2ContEd option:selected").val();
		
		if (typeemail2=='Home'){
			typeemail2=0;
		}else if (typeemail2=='Office'){
			typeemail2=1;
		}
		var email1 = $("input#ema1ContEd").val();		
		var email2 = $("input#ema2ContEd").val();		
				
		var company = $("input#companyContEd").val();
		
		$("#websit1ContEd").prop("selected", true);
		var typeurl1 	= $("#websit1ContEd option:selected").val();
		if (typeurl1=='Personal'){
			typeurl1=0;
		}else if (typeurl1=='Office'){
			typeurl1=1;
		}
		$("#websit2ContEd").prop("selected", true);
		var typeurl2 	= $("#websit2ContEd option:selected").val();
		if (typeurl2=='Personal'){
			typeurl2=0;
		}else if (typeurl2=='Office'){
			typeurl2=1;
		}
		var urlsend1 = $("input#web1ContEd").val();		
		var urlsend2 = $("input#web2ContEd").val();	
		
		$("#phon1ContEd").prop("selected", true);
		var typeph1 	= $("#phon1ContEd option:selected").val();
		
		
		if (typeph1=='Cell'){
			typeph1=0;
		}else if (typeph1=='Home Fax'){
			typeph1=1;
		}else if (typeph1=='Office Fax'){
			typeph1=2;
		}else if (typeph1=='TollFree'){
			typeph1=3;
		}else if (typeph1=='O.TollFree'){
			typeph1=4;
		}else if (typeph1=='Skype'){
			typeph1=5;
		}
		$("#phon2ContEd").prop("selected", true);
		var typeph2 	= $("#phon2ContEd option:selected").val();
		if (typeph2=='Cell'){
			typeph2=0;
		}else if (typeph2=='Home Fax'){
			typeph2=1;
		}else if (typeph2=='Office Fax'){
			typeph2=2;
		}else if (typeph2=='TollFree'){
			typeph2=3;
		}else if (typeph2=='O.TollFree'){
			typeph2=4;
		}else if (typeph2=='Skype'){
			typeph2=5;
		}
		$("#phon3ContEd").prop("selected", true);
		var typeph3 	= $("#phon3ContEd option:selected").val();
		if (typeph3=='Cell'){
			typeph3=0;
		}else if (typeph3=='Home Fax'){
			typeph3=1;
		}else if (typeph3=='Office Fax'){
			typeph3=2;
		}else if (typeph3=='TollFree'){
			typeph3=3;
		}else if (typeph3=='O.TollFree'){
			typeph3=4;
		}else if (typeph3=='Skype'){
			typeph3=5;
		}
		$("#phon4ContEd").prop("selected", true);
		var typeph4 	= $("#phon4ContEd option:selected").val();
		if (typeph4=='Cell'){
			typeph4=0;
		}else if (typeph4=='Home Fax'){
			typeph4=1;
		}else if (typeph4=='Office Fax'){
			typeph4=2;
		}else if (typeph4=='TollFree'){
			typeph4=3;
		}else if (typeph4=='O.TollFree'){
			typeph4=4;
		}else if (typeph4=='Skype'){
			typeph4=5;
		}
		$("#phon5ContEd").prop("selected", true);
		var typeph5 	= $("#phon5ContEd option:selected").val();
		if (typeph5=='Cell'){
			typeph5=0;
		}else if (typeph5=='Home Fax'){
			typeph5=1;
		}else if (typeph5=='Office Fax'){
			typeph5=2;
		}else if (typeph5=='TollFree'){
			typeph5=3;
		}else if (typeph5=='O.TollFree'){
			typeph5=4;
		}else if (typeph5=='Skype'){
			typeph5=5;
		}
		$("#phon6ContEd").prop("selected", true);
		var typeph6 	= $("#phon6ContEd option:selected").val();
		if (typeph6=='Cell'){
			typeph6=0;
		}else if (typeph6=='Home Fax'){
			typeph6=1;
		}else if (typeph6=='Office Fax'){
			typeph6=2;
		}else if (typeph6=='TollFree'){
			typeph6=3;
		}else if (typeph6=='O.TollFree'){
			typeph6=4;
		}else if (typeph6=='Skype'){
			typeph6=5;
		}
		var phone1 = $("input#pho1ContEd").val();		
		var phone2 = $("input#pho2ContEd").val();
		var phone3 = $("input#pho3ContEd").val();		
		var phone4 = $("input#pho4ContEd").val();
		var phone5 = $("input#pho5ContEd").val();		
		var phone6 = $("input#pho6ContEd").val();
		
		$("#addre1ContEd").prop("selected", true);
		var typeaddress1 	= $("#addre1ContEd option:selected").val();
		if (typeaddress1=='Home'){
			typeaddress1=0;
		}else if (typeaddress1=='Office'){
			typeaddress1=1;
		}
		$("#addre2ContEd").prop("selected", true);
		var typeaddress2 	= $("#addre2ContEd option:selected").val();
		if (typeaddress2=='Home'){
			typeaddress2=0;
		}else if (typeaddress2=='Office'){
			typeaddress2=1;
		}
		var address1 = $("input#addr1ContEd").val();		
		var address2 = $("input#addr2ContEd").val();
		
		var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
		
		//alert(typeemail1);
		//alert(company);
		$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: "POST",
			data: { 	
			'agentid':agentid.agentid,
			'userid': userid,		
			'type': 'update',
			'agent': agent,
			'company': company,
			'agenttype': agenttype,
			'email': email1,
			'typeemail1' :typeemail1,
			'email2': email2,
			'typeemail2' :typeemail2,
			'urlsend': urlsend1,
			'typeurl1' :typeurl1,
			'urlsend2': urlsend2,
			'typeurl2' :typeurl2,
			'phone1': phone1,
			'typeph1':typeph1,
			'phone2': phone2,
			'typeph2':typeph2,
			'phone3': phone3,
			'typeph3':typeph3,
			//'phone4': phone4,
			'typeph4':typeph4,
			//'phone5': phone5,
			'typeph5':typeph5,
			//'phone6': phone6,
			'typeph6':typeph6,
			'address1': address1,
			'typeaddress1':typeaddress1,
			'address2': address2,
			'typeaddress2':typeaddress2,
			'tollfree':phone4,
			'fax':phone6
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				if (data){
					alert('contact edited');
					$.mobile.changePage('#contactsHtml');
				}
			
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});
}

	
function getEditContact(){

		
		$("#agenEd").val("");			
		$("#ema1ContEd").val("");			
		$("#typeagentContEd select").empty();			
		$("#email1ContEd select").empty();				
		$("#email2ContEd select").empty();
		$("#website1ContEd select").empty();					
		$("#website2ContEd select").empty();
		$("#phone1ContEd select").empty();				
		$("#phone2ContEd select").empty();
		$("#phone3ContEd select").empty();			
		$("#phone4ContEd select").empty();
		$("#phone5ContEd select").empty();				
		$("#phone6ContEd select").empty();
		$("#address1ContEd select").empty();					
		$("#address2ContEd select").empty();
					
		var agentid = JSON.parse(localStorage.getItem('agentid'));
		// La alerta mostrará 1 por pantalla
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
				
		var personal="Personal";
				
		var cell="Cell";
		var homefax="Home Fax";
		var officefax="Office Fax";
		var tollfree="TollFree";
		var otollfree="O.TollFree";
		var skype="Skype";
		
		//alert('cargando formulario'+agentid.agentid);
		
		var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
		
		//AJAX CARGAR DATOS EDIT CONTACTS
			$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: 'POST',
			data: { 
			'agentid':agentid.agentid,
			'userid': userid								
			}}).done(function (data){					
				//alert(data);					
				var obj2 = JSON.parse(data);
				//console.debug(obj2);
				if(obj2.success) {								 
				
				console.debug(obj2);
				$.each(obj2.records, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					console.debug(obj2.records);
						$.each( value, function ( userkey, uservalue) {								
							if(userkey=='agent' || userkey=='agentype'|| userkey=='typeemail1' || 
							userkey=='email' || userkey=='typeemail2' || userkey=='email2' || userkey=='company' ||
							userkey=='typeurl1' || userkey=='urlsend' || userkey=='typeurl2' || userkey=='urlsend2' ||
							userkey=='typeph1' || userkey=='phone1' || userkey=='typeph2' || userkey=='phone2' ||
							userkey=='typeph3' || userkey=='phone3' || userkey=='typeph4' || userkey=='phone4' ||
							userkey=='typeph5' || userkey=='phone5' || userkey=='typeph6' || userkey=='phone6' ||
							userkey=='typeaddress1' || userkey=='address1' || userkey=='typeaddress2' || userkey=='address2'){
								datos[userkey]=uservalue;
								valor[i++]=userkey;
								console.debug(userkey);									
							}									
						});
						
							output +=''+datos['agent']+'';
							
							if (datos['agentype']=="Agent"){
								output2 +='<option value="'+agent+'">'+agent+'</option>';
								output2 +='<option value="'+buyer+'">'+buyer+'</option>';
								output2 +='<option value="'+seller+'">'+seller+'</option>';
								output2 +='<option value="'+loan+'">'+loan+'</option>';
								output2 +='<option value="'+hard+'">'+hard+'</option>';					
								output2 +='<option value="'+title+'">'+title+'</option>';				
								output2 +='<option value="'+lawyer+'">'+lawyer+'</option>';
								output2 +='<option value="'+client+'">'+client+'</option>';
								output2 +='<option value="'+broker+'">'+broker+'</option>';
								output2 +='<option value="'+general+'">'+general+'</option>';
								output2 +='<option value="'+other+'">'+other+'</option>';					
								output2 +='<option value="'+coach+'">'+coach+'</option>';
								output2 +='<option value="'+shortsale+'">'+shortsale+'</option>';	
							}else if (datos['agentype']=="Buyer"){
								output2 +='<option value="'+buyer+'" selected>'+buyer+'</option>';
								output2 +='<option value="'+agent+'">'+agent+'</option>';
								output2 +='<option value="'+seller+'">'+seller+'</option>';
								output2 +='<option value="'+loan+'">'+loan+'</option>';
								output2 +='<option value="'+hard+'">'+hard+'</option>';					
								output2 +='<option value="'+title+'">'+title+'</option>';				
								output2 +='<option value="'+lawyer+'">'+lawyer+'</option>';
								output2 +='<option value="'+client+'">'+client+'</option>';
								output2 +='<option value="'+broker+'">'+broker+'</option>';
								output2 +='<option value="'+general+'">'+general+'</option>';
								output2 +='<option value="'+other+'">'+other+'</option>';					
								output2 +='<option value="'+coach+'">'+coach+'</option>';
								output2 +='<option value="'+shortsale+'">'+shortsale+'</option>';	
							}
							
							
							if (datos['typeemail1']==0){
								output3 +='<option value="'+datos['typeemail1']+'">'+home+'</option>';
								output3 +='<option value="1">'+office+'</option>';
								//console.log(output3);
								
							}else if (datos['typeemail1']==1){
								output3 +='<option value="'+datos['typeemail1']+'">'+office+'</option>';
								output3 +='<option value="0">'+home+'</option>';
								//output3 +=''+datos['email']+'';
							}
							
							if (datos['typeemail2']==0){
								output4 +='<option value="'+datos['typeemail2']+'">'+home+'</option>';
								output4 +='<option value="1">'+office+'</option>';
								//output4 +=''+datos['email2']+'';
								
							}else if (datos['typeemail2']==1){
								output4 +='<option value="'+datos['typeemail2']+'">'+office+'</option>';
								output4 +='<option value="0">'+home+'</option>';
							}
							output5 +=''+datos['email']+'';
							output6 +=''+datos['email2']+'';
							output7 +=''+datos['company']+'';
							
							if (datos['typeurl1']==0){
								output8 +='<option value="'+datos['typeurl1']+'">'+personal+'</option>';
								output8 +='<option value="1">'+office+'</option>';
								
							}else if (datos['typeurl1']==1){
								output8 +='<option value="'+datos['typeurl1']+'">'+office+'</option>';
								output8 +='<option value="0">'+personal+'</option>';
							}
							
							if (datos['typeurl2']==0){
								output9 +='<option value="'+datos['typeurl2']+'">'+personal+'</option>';
								output9 +='<option value="1">'+office+'</option>';
								
							}else if (datos['typeurl2']==1){
								output9 +='<option value="'+datos['typeurl2']+'">'+office+'</option>';
								output9 +='<option value="0">'+personal+'</option>';
							}
							
							
							if (datos['urlsend']!=null){
								
									output10 +=''+datos['urlsend']+'';
								
							}
							if (datos['urlsend2']!=null){
								
									output11 +=''+datos['urlsend2']+'';
								
							}
							
							if (datos['typeph1']==0){
								output12 +='<option value="'+datos['typeph1']+'">'+cell+'</option>';
								output12 +='<option value="1">'+homefax+'</option>';
								output12 +='<option value="2">'+officefax+'</option>';
								output12 +='<option value="3">'+tollfree+'</option>';
								output12 +='<option value="4">'+otollfree+'</option>';
								output12 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph1']==1){
								output12 +='<option value="'+datos['typeph1']+'">'+homefax+'</option>';
								output12 +='<option value="0">'+cell+'</option>';
								output12 +='<option value="2">'+officefax+'</option>';
								output12 +='<option value="3">'+tollfree+'</option>';
								output12 +='<option value="4">'+otollfree+'</option>';
								output12 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph1']==2){
								output12 +='<option value="'+datos['typeph1']+'">'+officefax+'</option>';
								output12 +='<option value="0">'+cell+'</option>';
								output12 +='<option value="1">'+homefax+'</option>';
								output12 +='<option value="3">'+tollfree+'</option>';
								output12 +='<option value="4">'+otollfree+'</option>';
								output12 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph1']==3){
								output12 +='<option value="'+datos['typeph1']+'">'+tollfree+'</option>';
								output12 +='<option value="0">'+cell+'</option>';
								output12 +='<option value="1">'+homefax+'</option>';
								output12 +='<option value="2">'+officefax+'</option>';
								output12 +='<option value="4">'+otollfree+'</option>';
								output12 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph1']==4){
								output12 +='<option value="'+datos['typeph1']+'">'+otollfree+'</option>';
								output12 +='<option value="0">'+cell+'</option>';
								output12 +='<option value="1">'+homefax+'</option>';
								output12 +='<option value="2">'+officefax+'</option>';
								output12 +='<option value="3">'+tollfree+'</option>';
								output12 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph1']==5){
								output12 +='<option value="'+datos['typeph1']+'">'+skype+'</option>';
								output12 +='<option value="0">'+cell+'</option>';
								output12 +='<option value="1">'+homefax+'</option>';
								output12 +='<option value="2">'+officefax+'</option>';
								output12 +='<option value="3">'+tollfree+'</option>';
								output12 +='<option value="4">'+otollfree+'</option>';
								
							}
							
							if (datos['typeph2']==0){
								output13 +='<option value="'+datos['typeph2']+'">'+cell+'</option>';
								output13 +='<option value="1">'+homefax+'</option>';
								output13 +='<option value="2">'+officefax+'</option>';
								output13 +='<option value="3">'+tollfree+'</option>';
								output13 +='<option value="4">'+otollfree+'</option>';
								output13 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph2']==1){
								output13 +='<option value="'+datos['typeph2']+'">'+homefax+'</option>';
								output13 +='<option value="0">'+cell+'</option>';
								output13 +='<option value="2">'+officefax+'</option>';
								output13 +='<option value="3">'+tollfree+'</option>';
								output13 +='<option value="4">'+otollfree+'</option>';
								output13 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph2']==2){
								output13 +='<option value="'+datos['typeph2']+'">'+officefax+'</option>';
								output13 +='<option value="0">'+cell+'</option>';
								output13 +='<option value="1">'+homefax+'</option>';
								output13 +='<option value="3">'+tollfree+'</option>';
								output13 +='<option value="4">'+otollfree+'</option>';
								output13 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph2']==3){
								output13 +='<option value="'+datos['typeph2']+'">'+tollfree+'</option>';
								output13 +='<option value="0">'+cell+'</option>';
								output13 +='<option value="1">'+homefax+'</option>';
								output13 +='<option value="2">'+officefax+'</option>';
								output13 +='<option value="4">'+otollfree+'</option>';
								output13 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph2']==4){
								output13 +='<option value="'+datos['typeph2']+'">'+otollfree+'</option>';
								output13 +='<option value="0">'+cell+'</option>';
								output13 +='<option value="1">'+homefax+'</option>';
								output13 +='<option value="2">'+officefax+'</option>';
								output13 +='<option value="3">'+tollfree+'</option>';
								output13 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph2']==5){
								output13 +='<option value="'+datos['typeph2']+'">'+skype+'</option>';
								output13 +='<option value="0">'+cell+'</option>';
								output13 +='<option value="1">'+homefax+'</option>';
								output13 +='<option value="2">'+officefax+'</option>';
								output13 +='<option value="3">'+tollfree+'</option>';
								output13 +='<option value="4">'+otollfree+'</option>';
								
							}
							
							if (datos['typeph3']==0){
								output14 +='<option value="'+datos['typeph3']+'">'+cell+'</option>';
								output14 +='<option value="1">'+homefax+'</option>';
								output14 +='<option value="2">'+officefax+'</option>';
								output14 +='<option value="3">'+tollfree+'</option>';
								output14 +='<option value="4">'+otollfree+'</option>';
								output14 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph3']==1){
								output14 +='<option value="'+datos['typeph3']+'">'+homefax+'</option>';
								output14 +='<option value="0">'+cell+'</option>';
								output14 +='<option value="2">'+officefax+'</option>';
								output14 +='<option value="3">'+tollfree+'</option>';
								output14 +='<option value="4">'+otollfree+'</option>';
								output14 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph3']==2){
								output14 +='<option value="'+datos['typeph3']+'">'+officefax+'</option>';
								output14 +='<option value="0">'+cell+'</option>';
								output14 +='<option value="1">'+homefax+'</option>';
								output14 +='<option value="3">'+tollfree+'</option>';
								output14 +='<option value="4">'+otollfree+'</option>';
								output14 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph3']==3){
								output14 +='<option value="'+datos['typeph3']+'">'+tollfree+'</option>';
								output14 +='<option value="0">'+cell+'</option>';
								output14 +='<option value="1">'+homefax+'</option>';
								output14 +='<option value="2">'+officefax+'</option>';
								output14 +='<option value="4">'+otollfree+'</option>';
								output14 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph3']==4){
								output14 +='<option value="'+datos['typeph3']+'">'+otollfree+'</option>';
								output14 +='<option value="0">'+cell+'</option>';
								output14 +='<option value="1">'+homefax+'</option>';
								output14 +='<option value="2">'+officefax+'</option>';
								output14 +='<option value="3">'+tollfree+'</option>';
								output14 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph3']==5){
								output14 +='<option value="'+datos['typeph3']+'">'+skype+'</option>';
								output14 +='<option value="0">'+cell+'</option>';
								output14 +='<option value="1">'+homefax+'</option>';
								output14 +='<option value="2">'+officefax+'</option>';
								output14 +='<option value="3">'+tollfree+'</option>';
								output14 +='<option value="4">'+otollfree+'</option>';
								
							}
							
							if (datos['typeph4']==0){
								output15 +='<option value="'+datos['typeph4']+'">'+cell+'</option>';
								output15 +='<option value="1">'+homefax+'</option>';
								output15 +='<option value="2">'+officefax+'</option>';
								output15 +='<option value="3">'+tollfree+'</option>';
								output15 +='<option value="4">'+otollfree+'</option>';
								output15 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph4']==1){
								output15 +='<option value="'+datos['typeph4']+'">'+homefax+'</option>';
								output15 +='<option value="0">'+cell+'</option>';
								output15 +='<option value="2">'+officefax+'</option>';
								output15 +='<option value="3">'+tollfree+'</option>';
								output15 +='<option value="4">'+otollfree+'</option>';
								output15 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph4']==2){
								output15 +='<option value="'+datos['typeph4']+'">'+officefax+'</option>';
								output15 +='<option value="0">'+cell+'</option>';
								output15 +='<option value="1">'+homefax+'</option>';
								output15 +='<option value="3">'+tollfree+'</option>';
								output15 +='<option value="4">'+otollfree+'</option>';
								output15 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph4']==3){
								output15 +='<option value="'+datos['typeph4']+'">'+tollfree+'</option>';
								output15 +='<option value="0">'+cell+'</option>';
								output15 +='<option value="1">'+homefax+'</option>';
								output15 +='<option value="2">'+officefax+'</option>';
								output15 +='<option value="4">'+otollfree+'</option>';
								output15 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph4']==4){
								output15 +='<option value="'+datos['typeph4']+'">'+otollfree+'</option>';
								output15 +='<option value="0">'+cell+'</option>';
								output15 +='<option value="1">'+homefax+'</option>';
								output15 +='<option value="2">'+officefax+'</option>';
								output15 +='<option value="3">'+tollfree+'</option>';
								output15 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph4']==5){
								output15 +='<option value="'+datos['typeph4']+'">'+skype+'</option>';
								output15 +='<option value="0">'+cell+'</option>';
								output15 +='<option value="1">'+homefax+'</option>';
								output15 +='<option value="2">'+officefax+'</option>';
								output15 +='<option value="3">'+tollfree+'</option>';
								output15 +='<option value="4">'+otollfree+'</option>';
								
							}
							
							if (datos['typeph5']==0){
								output16 +='<option value="'+datos['typeph5']+'">'+cell+'</option>';
								output16 +='<option value="1">'+homefax+'</option>';
								output16 +='<option value="2">'+officefax+'</option>';
								output16 +='<option value="3">'+tollfree+'</option>';
								output16 +='<option value="4">'+otollfree+'</option>';
								output16 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph5']==1){
								output16 +='<option value="'+datos['typeph5']+'">'+homefax+'</option>';
								output16 +='<option value="0">'+cell+'</option>';
								output16 +='<option value="2">'+officefax+'</option>';
								output16 +='<option value="3">'+tollfree+'</option>';
								output16 +='<option value="4">'+otollfree+'</option>';
								output16 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph5']==2){
								output16 +='<option value="'+datos['typeph5']+'">'+officefax+'</option>';
								output16 +='<option value="0">'+cell+'</option>';
								output16 +='<option value="1">'+homefax+'</option>';
								output16 +='<option value="3">'+tollfree+'</option>';
								output16 +='<option value="4">'+otollfree+'</option>';
								output16 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph5']==3){
								output16 +='<option value="'+datos['typeph5']+'">'+tollfree+'</option>';
								output16 +='<option value="0">'+cell+'</option>';
								output16 +='<option value="1">'+homefax+'</option>';
								output16 +='<option value="2">'+officefax+'</option>';
								output16 +='<option value="4">'+otollfree+'</option>';
								output16 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph5']==4){
								output16 +='<option value="'+datos['typeph5']+'">'+otollfree+'</option>';
								output16 +='<option value="0">'+cell+'</option>';
								output16 +='<option value="1">'+homefax+'</option>';
								output16 +='<option value="2">'+officefax+'</option>';
								output16 +='<option value="3">'+tollfree+'</option>';
								output16 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph5']==5){
								output16 +='<option value="'+datos['typeph5']+'">'+skype+'</option>';
								output16 +='<option value="0">'+cell+'</option>';
								output16 +='<option value="1">'+homefax+'</option>';
								output16 +='<option value="2">'+officefax+'</option>';
								output16 +='<option value="3">'+tollfree+'</option>';
								output16 +='<option value="4">'+otollfree+'</option>';
								
							}
							
							if (datos['typeph6']==0){
								output17 +='<option value="'+datos['typeph6']+'">'+cell+'</option>';
								output17 +='<option value="1">'+homefax+'</option>';
								output17 +='<option value="2">'+officefax+'</option>';
								output17 +='<option value="3">'+tollfree+'</option>';
								output17 +='<option value="4">'+otollfree+'</option>';
								output17 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph6']==1){
								output17 +='<option value="'+datos['typeph6']+'">'+homefax+'</option>';
								output17 +='<option value="0">'+cell+'</option>';
								output17 +='<option value="2">'+officefax+'</option>';
								output17 +='<option value="3">'+tollfree+'</option>';
								output17 +='<option value="4">'+otollfree+'</option>';
								output17 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph6']==2){
								output17 +='<option value="'+datos['typeph6']+'">'+officefax+'</option>';
								output17 +='<option value="0">'+cell+'</option>';
								output17 +='<option value="1">'+homefax+'</option>';
								output17 +='<option value="3">'+tollfree+'</option>';
								output17 +='<option value="4">'+otollfree+'</option>';
								output17 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph6']==3){
								output17 +='<option value="'+datos['typeph6']+'">'+tollfree+'</option>';
								output17 +='<option value="0">'+cell+'</option>';
								output17 +='<option value="1">'+homefax+'</option>';
								output17 +='<option value="2">'+officefax+'</option>';
								output17 +='<option value="4">'+otollfree+'</option>';
								output17 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph6']==4){
								output17 +='<option value="'+datos['typeph6']+'">'+otollfree+'</option>';
								output17 +='<option value="0">'+cell+'</option>';
								output17 +='<option value="1">'+homefax+'</option>';
								output17 +='<option value="2">'+officefax+'</option>';
								output17 +='<option value="3">'+tollfree+'</option>';
								output17 +='<option value="5">'+skype+'</option>';
								
							}else if (datos['typeph6']==5){
								output17 +='<option value="'+datos['typeph6']+'">'+skype+'</option>';
								output17 +='<option value="0">'+cell+'</option>';
								output17 +='<option value="1">'+homefax+'</option>';
								output17 +='<option value="2">'+officefax+'</option>';
								output17 +='<option value="3">'+tollfree+'</option>';
								output17 +='<option value="4">'+otollfree+'</option>';
								
							}
							if (datos['phone1']!=null){
								output18 +=''+datos['phone1']+'';
							}
							if (datos['phone2']!=null){
								output19 +=''+datos['phone2']+'';
							}
							if (datos['phone3']!=null){
								output20 +=''+datos['phone3']+'';
							}
							if (datos['phone4']!=null){
								output21 +=''+datos['phone4']+'';
							}
							if (datos['phone5']!=null){
								output22 +=''+datos['phone5']+'';
							}
							if (datos['phone6']!=null){
								output23 +=''+datos['phone6']+'';
							}
							if (datos['typeaddress1']==0){
								output24 +='<option value="'+datos['typeaddress1']+'">'+home+'</option>';
								output24 +='<option value="1">'+office+'</option>';
								
							}else if (datos['typeaddress1']==1){
								output24 +='<option value="'+datos['typeaddress1']+'">'+office+'</option>';
								output24 +='<option value="0">'+home+'</option>';
							}
							
							if (datos['typeaddress2']==0){
								output25 +='<option value="'+datos['typeaddress2']+'">'+home+'</option>';
								output25 +='<option value="1">'+office+'</option>';
								
							}else if (datos['typeaddress2']==1){
								output25 +='<option value="'+datos['typeaddress2']+'">'+office+'</option>';
								output25 +='<option value="0">'+home+'</option>';
							}
							
							if (datos['address1']!=null){
								output26 +=''+datos['address1']+'';
							}
							if (datos['address2']!=null){
								output27 +=''+datos['address2']+'';
							}
							
							var agente=datos['agentype'];
							var mail=datos['email'];
						
				});
					//$("select option:contains(Agent)").attr('selected', true);
					console.log(output2);
					$("#agenEd").val(output);	
					//$("#typeagentContEd select").append(output2);
					var varValue="Seller";
					//$("select option[value='"+varValue+"']").attr('selected', 'selected');
					//$("#typEd option[value='"+varValue+"']").attr("selected", "selected")
					//$('#typEd').val(datos['agentype']).selectmenu('refresh');
					
					//$('#emai1ContEd').val(mail).selectmenu('refresh');
					
					//$("#email1ContEd select").append(output3);					
					//$("#email2ContEd select").append(output4);	
					$("#ema1ContEd").val(output5);					
					$("#ema2ContEd").val(output6);
					$("#companyContEd").val(output7);
					//$("#website1ContEd select").append(output8);					
					//$("#website2ContEd select").append(output9);
					$("#web1ContEd").val(output10);					
					$("#web2ContEd").val(output11);
					//$("#phone1ContEd select").append(output12);					
					//$("#phone2ContEd select").append(output13);
					//$("#phone3ContEd select").append(output14);					
					//$("#phone4ContEd select").append(output15);
					//$("#phone5ContEd select").append(output16);					
					//$("#phone6ContEd select").append(output17);
					$("#pho1ContEd").val(output18);					
					$("#pho2ContEd").val(output19);
					$("#pho3ContEd").val(output20);					
					$("#pho4ContEd").val(output21);
					$("#pho5ContEd").val(output22);					
					$("#pho6ContEd").val(output23);
					//$("#address1ContEd select").append(output24);					
					//$("#address2ContEd select").append(output25);
					$("#addr1ContEd").val(output26);					
					$("#addr2ContEd").val(output27);
					
				}else{
					alert('else obj');
				}					
			});
		/*$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: "POST",
			data: { 			
			'userid': 3213,		
			'type': 'delete',
			'agentids': agentid 			
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				if(data){
					alert('contact delete');
					location.reload(true);
				}else{
					alert('error');
				}
			},
			error: function (jqXHR, textStatus, errorThrown){
			     alert('error');
			}
		});*/
	}	
	
function getTypeContacts(){
	
	$("#typeagentCont select").empty();
	$("#email1Cont select").empty();
	$("#email2Cont select").empty();
	$("#phone1Cont select").empty();
	$("#phone2Cont select").empty();
	$("#phone3Cont select").empty();
	$("#phone4Cont select").empty();
	$("#phone5Cont select").empty();
	$("#phone6Cont select").empty();
	$("#website1Cont select").empty();
	$("#website2Cont select").empty();
	$("#address1Cont select").empty();
	$("#address2Cont select").empty();
//TYPE CONTACTS
	var outC="";
	var outCC="";				
	var outCCC="";				
	var outCCCC="";				
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
				
	var personal="Personal";
						
	var cell="Cell";
	var homefax="Home Fax";
	var officefax="Office Fax";
	var tollfree="TollFree";
	var otollfree="O.TollFree";
	var skype="Skype";
				
						
		outC +='<option value="'+agent+'">'+agent+'</option>';
		outC +='<option value="'+buyer+'">'+buyer+'</option>';
		outC +='<option value="'+seller+'">'+seller+'</option>';
		outC +='<option value="'+loan+'">'+loan+'</option>';
		outC +='<option value="'+hard+'">'+hard+'</option>';					
		outC +='<option value="'+title+'">'+title+'</option>';				
		outC +='<option value="'+lawyer+'">'+lawyer+'</option>';
		outC +='<option value="'+client+'">'+client+'</option>';
		outC +='<option value="'+broker+'">'+broker+'</option>';
		outC +='<option value="'+general+'">'+general+'</option>';
		outC +='<option value="'+other+'">'+other+'</option>';					
		outC +='<option value="'+coach+'">'+coach+'</option>';
		outC +='<option value="'+shortsale+'">'+shortsale+'</option>';
				
		outCC +='<option value="'+home+'">'+home+'</option>';
		outCC +='<option value="'+office+'">'+office+'</option>';
				
		outCCC +='<option value="'+cell+'">'+cell+'</option>';
		outCCC +='<option value="'+homefax+'">'+homefax+'</option>';
		outCCC +='<option value="'+officefax+'">'+officefax+'</option>';
		outCCC +='<option value="'+tollfree+'">'+tollfree+'</option>';					
		outCCC +='<option value="'+otollfree+'">'+otollfree+'</option>';
		outCCC +='<option value="'+skype+'">'+skype+'</option>';
			
		outCCCC +='<option value="'+personal+'">'+personal+'</option>';
		outCCCC +='<option value="'+office+'">'+office+'</option>';
				
					
		$("#typeagentCont select").append(outC);
		$("#email1Cont select").append(outCC);
		$("#email2Cont select").append(outCC);
		$("#phone1Cont select").append(outCCC);
		$("#phone2Cont select").append(outCCC);
		$("#phone3Cont select").append(outCCC);
		$("#phone4Cont select").append(outCCC);
		$("#phone5Cont select").append(outCCC);
		$("#phone6Cont select").append(outCCC);
		$("#website1Cont select").append(outCCCC);
		$("#website2Cont select").append(outCCCC);
		$("#address1Cont select").append(outCC);
		$("#address2Cont select").append(outCC);	

}
	
function getagenttype(){
		//alert('cargando type agent');
		
		$("#typeContFil select").empty();
		
		var outF  = "";
		
		
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
		
			outF +='<option value="'+agent+'">'+agent+'</option>';
			outF +='<option value="'+buyer+'">'+buyer+'</option>';
			outF +='<option value="'+seller+'">'+seller+'</option>';
			outF +='<option value="'+loan+'">'+loan+'</option>';
			outF +='<option value="'+hard+'">'+hard+'</option>';					
			outF +='<option value="'+title+'">'+title+'</option>';				
			outF +='<option value="'+lawyer+'">'+lawyer+'</option>';
			outF +='<option value="'+client+'">'+client+'</option>';
			outF +='<option value="'+broker+'">'+broker+'</option>';
			outF +='<option value="'+general+'">'+general+'</option>';
			outF +='<option value="'+other+'">'+other+'</option>';					
			outF +='<option value="'+coach+'">'+coach+'</option>';
			outF +='<option value="'+shortsale+'">'+shortsale+'</option>';
			
			$("#typeContFil select").append(outF);
		
	
	}
	
function filterContacts(){
	
		var agent = $("input#contactcontFil").val();
		
		$("#tyContFil").prop("selected", true);
		var agenttype 	= $("#tyContFil option:selected").val();
		if (agenttype=='Agent'){
			agenttype=1;
		}else if (agenttype=='Buyer'){
			agenttype=2;
		}else if (agenttype=='Seller'){
			agenttype=3;
		}else if (agenttype=='Loan Officer'){
			agenttype=4;
		}else if (agenttype=='Hard Money Lender'){
			agenttype=5;
		}else if (agenttype=='Title Company'){
			agenttype=6;
		}else if (agenttype=='Lawyer'){
			agenttype=7;
		}else if (agenttype=='Client'){
			agenttype=8;
		}else if (agenttype=='Broker'){
			agenttype=9;
		}else if (agenttype=='General Contractor'){
			agenttype=10;
		}else if (agenttype=='Other'){
			agenttype=11;
		}else if (agenttype=='Coach'){
			agenttype=12;
		}else if (agenttype=='Short Sale Negotiator'){
			agenttype=13;
		}
		
		
		var email   = $("input#emailContFil").val();		
		var company = $("input#companyContFil").val();
		var website = $("input#websiteContFil").val();		
		var address = $("input#addressContFil").val();
		var phone = $("input#phoneContFil").val();	

		var start = 0; 
        var limit = 25; 		
		
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid = userid.userid;
		
		$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: "POST",
			data: { 			
			'userid': userid,		
			'agent': agent,
			'company': company,
			'agenttype': agenttype,
			'email': email,
			'email2': email,
			'phone1' :phone,
			'phone2' :phone,
			'phone3' :phone,
			'fax' :phone,
			'tollfree' :phone,
			'phone6' :phone,
			'address1' :address,
			'address2' :address,
			'urlsend' :website,
			'urlsend2' :website,
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
					//alert(valor[0]);
					//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
				if (datos['agent']!=''){	
					output += '<li id="primero'+datos['agentid']+'" agentid='+datos['agentid']+' style="list-style: none;border-bottom: 2px solid #ccc;">';     
					
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
										if (datos['phone1']!=""){
											output +=''+datos['phone1']+'';
										}else if (datos['phone2']!=""){
											if (datos['phone2']!=0){
												output +=''+datos['phone2']+'';
											}
										}else{
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
					start = start+$settings.limit; 
					//console.log(start);
					
                });
				//output += '</ul>';
				//Actualizamos el HTML del elemento con id="#respuesta"
					
						//alert(obj.total+' >='+start);
						//$('#menuContacts').modal('hide');
						//$('#menuContacts').hide();
						//document.getElementById('menuContacts').style.display = "none";
						document.getElementById('contacts').style.display = "none";
						
						$("#contactsFilter ul").append(output);
						
						//$(".tot").append(obj.total);
					
				} else {
					//data.success no es true
					$("#contactsFilter ul").html('No true! ');
				}			
			});
	
			
	}
	
function removeFilterContact(){
	//alert('removiendo filtro');
			
	$("input#contactcontFil").val("");
	$("#typeContFil option:selected").val("");
	$("input#emailContFil").val("");
	$("input#websiteContFil").val("");
	$("input#companyContFil").val("");
	$("input#phoneContFil").val("");
	$("input#addressContFil").val("");
	//$("#contactsFilter ul").html("");		
	//document.getElementById('contacts').style.display = "block";
	$("#contacts ul").empty();
	var start = 0; 
	var limit = 25; 	
	listadoContacts(start, limit);
	
	
}

function resetformCont(){
	//alert('removiendo filtro');
			
	$("input#agenC").val("");
	$("input#ema1Cont").val("");
	$("input#ema2Cont").val("");
	$("input#companyCont").val("");
	$("input#web1Cont").val("");
	$("input#web2Cont").val("");
	$("input#pho1Cont").val("");
	$("input#pho2Cont").val("");
	$("input#pho3Cont").val("");
	$("input#pho4Cont").val("");
	$("input#pho5Cont").val("");
	$("input#pho6Cont").val("");
	$("input#addr1Cont").val("");
	$("input#addr2Cont").val("");
	
	//$("#contactsFilter ul").html("");		
	//document.getElementById('contacts').style.display = "block";
	
	
}
	 
	
function listadoContacts(start, limit){
		
		//var start = 0; 
        //limit = 150; 
		
		var agent = $("input#contactcontFil").val();
		
		$("#tyContFil").prop("selected", true);
		var agenttype 	= $("#tyContFil option:selected").val();
		if (agenttype=='Agent'){
			agenttype=1;
		}else if (agenttype=='Buyer'){
			agenttype=2;
		}else if (agenttype=='Seller'){
			agenttype=3;
		}else if (agenttype=='Loan Officer'){
			agenttype=4;
		}else if (agenttype=='Hard Money Lender'){
			agenttype=5;
		}else if (agenttype=='Title Company'){
			agenttype=6;
		}else if (agenttype=='Lawyer'){
			agenttype=7;
		}else if (agenttype=='Client'){
			agenttype=8;
		}else if (agenttype=='Broker'){
			agenttype=9;
		}else if (agenttype=='General Contractor'){
			agenttype=10;
		}else if (agenttype=='Other'){
			agenttype=11;
		}else if (agenttype=='Coach'){
			agenttype=12;
		}else if (agenttype=='Short Sale Negotiator'){
			agenttype=13;
		}
		
		//alert(agenttype);
		var email   = $("input#emailContFil").val();		
		var company = $("input#companyContFil").val();
		var website = $("input#websiteContFil").val();		
		var address = $("input#addressContFil").val();
		var phone = $("input#phoneContFil").val();	
		
		//var userid=3213;
		var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;

		busy=true;

		$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
				type: 'POST',
			   data: { 
				'userid': userid,
				'agent': agent,
				'company': company,
				'agenttype': agenttype,
				'email': email,
				'email2': email,
				'phone1' :phone,
				'phone2' :phone,
				'phone3' :phone,
				'fax' :phone,
				'tollfree' :phone,
				'phone6' :phone,
				'address1' :address,
				'address2' :address,
				'urlsend' :website,
				'urlsend2' :website,
				'sort':'agent ASC',
				'start':start,
				'limit':limit
				}
			}).done(function (data){
				//alert(data);
				busy=false;
				loadcontact=true;
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
						var k=0;
						
						
						
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
						output += '<li data-icon="false" data-filtertext="' + datos['agent'] + '" id="primero'+datos['agentid']+'" agentid='+datos['agentid']+' style="list-style: none;border-bottom: 2px solid #ccc;">';     
						
						output +='<div class="row">';
							output +='<div class="col-sm-12">';
								output +='<div class="row">';
																	
									output +='<div class="col-xs-12 col-sm-12 col-md-12">';
										
										output +='<div class="col-xs-4 col-sm-4 contact">';
											output +='<img class="contImg img-responsive" style="padding:1px;" src="http://reifax.com/FollowupReifax/img/user-g2.png" width=60px height=60px>';
										output +='</div>';
										
									
										output +='<div style="font-weight: bold;font-size: 18px;" class="col-md-12">';											
											output +=''+datos['agent']+'';
										output += '</div>';
										
										
										output +='<div class="col-md-12 tb-margin">';
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
										
							 			output +='<div class="col-md-12 tb-margin" style="font-weight:normal;">';
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
					//output += '</ul>';
					//Actualizamos el HTML del elemento con id="#respuesta"
						
							//alert(obj.total+' >='+start);
						
							$("#contacts ul").append(output);
							
							
							$('#contacts ul').listview('refresh');
							
							$("#contact-tablet ul").append(output).listview("refresh");
							$("#contact-tablet ul").listview('refresh');
							
							
							$.mobile.loading().hide();
							mainloaded2 = true;
							//settings.limit = settings.limit + start;
							//console.log(settings.limit);
							
							//$(".tot").append(obj.total);
						
					} else {
						//data.success no es true
						$("#contacts ul").html('No true! ');
						$("#contact-tablet ul").html('No true! ');
						 
					}	
					
									
						
					
		});
				
	
}

function longContact(id){
//alert(id);
			if(checkid.length==0){
				var ch= checkid.push(id)				
				document.getElementById('primero'+id).style.background = '#A9D0F5';
				document.getElementById('header_cont').style.display = "block";
				
				var div = document.createElement("div");
				//div.style.width = "40px";
				div.style.height = "40px";
				div.style.background = "gray";
				div.style.color = "white";
				div.style.marginTop="-40px";
				div.style.textAlign = "right";
				//div.className = "logo";
				div.id = "logoContacts";
				
				
				var div2 = document.getElementById("header_cont"); 
				// agregamos la imagen
				div2.appendChild(div);
				   
				$(".box2").hide();	   
				$(".box3").hide();	
				
			   
				//crear ancla para Aceptar
				var ace = document.createElement("a");
				//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
				ace.className ='box3 ui-btn excecute ui-first-child ui-last-child';
				ace.style.marginRight = "280px";
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
							//if(checkid[i] == id){ 
								//alert("encontrado"); 
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
								
								document.getElementById('header_cont').style.display = "none";
								document.getElementById('logoContacts').style.display = "none";
								
								div2.removeChild(div);
				   
								//fin aki				  
							//}
								//alert(checkid);				
						}				
					}else{
					
						checkid.push(id)
								
						//alert(checkid+'else');
						document.getElementById('primero'+id).style.background = '#A9D0F5';
						
						//document.getElementById('primero'+id).style.height="30px"; 
						//document.getElementById('primero'+id).style.width="30px"; 
								
						  //aki quiero borrar vector[i]  #a7d798 
						  
						  //fin aqui
						  
					}
				};
				var src = document.getElementById("logoContacts");
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
					//alert('deleteC');
					deleteContacts(checkid);
				};
				var src = document.getElementById("logoContacts");
				src.appendChild(a);
				
				document.getElementById('logoContacts').style.display = "block";
				
				//crear ancla para delete
				/*var del = document.createElement("a");*/
				//a.style.backgroundImage = "url('http://reifax.com/FollowupReifax/img/menu-w.png')";
				/*del.className ='box ui-btn excecute ui-first-child ui-last-child';
				del.style.marginLeft = "6px";
				del.style.marginTop = "2px";
				del.style.height = "35px";
				del.setAttribute("href","#menuCont");
				del.onclick = function(){
					//alert('click menu');
				};
				var src = document.getElementById("logoContacts");
				src.appendChild(del);*/
				
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
					//alert("si lo encontro");
					for(i=0;i<checkid.length;i++){ 
						if(checkid[i] == id){ 
							//alert("encontrado"); 
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
							
							document.getElementById('header_cont').style.display = "none";
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
					//alert(checkid);				
			
			}

}

function detailContact(id){
	//alert('detalle del contacto');
	
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
		
		//AJAX LISTADO CONTACTOS
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: 'POST',
		   data: { 
			'userid': userid,
			'agentid': id,
			'sort': 'agentid desc', 
			'start':start,
			'limit':settings.limit
			}
		}).done(function (data){
			//alert(data);
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
				
				var cell="Cell";
				var homefax="Home Fax";
				var officefax="Office Fax";
				var tollfree="TollFree";
				var otollfree="O.TollFree";
				var skype="Skype";
				
				var phone="PHONE";
				var email="EMAIL";
				var address="ADDRESS";
				var website="WEBSITES";
				var company="COMPANY";
				
				var home="Home";
				var office="Office";
				
				var personal="Personal";
                //recorremos cada propiedad
				//output += '<ul style="list-style-type: none;margin-left:-40px;" class="page_result">';
                $.each(obj.records, function( key, value ) {
				//output += "<h2>Detalles del usuario " + value['userid'] + "</h2>";
				//recorremos los valores de cada propiedad
					
					var datos = new Array();
					var valor = new Array();
					var i=0;
					
					
					
					$.each( value, function ( userkey, uservalue) {
						if(userkey=='agentid' || userkey=='agenttype' || userkey=='agent' || userkey=='email' || userkey=='typeemail1' || userkey=='email2' || userkey=='typeemail2' || userkey=='phone1' || userkey=='phone2' || userkey=='phone3' || userkey=='phone4' || userkey=='phone5' || userkey=='phone6' || userkey=='urlsend' || userkey=='urlsend2' || userkey=='address1' || userkey=='address2' || userkey=='company' || userkey=='typeph1'|| userkey=='typeph2' || userkey=='typeph3' || userkey=='typeph4' || userkey=='typeph5' || userkey=='typeph6'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);
						}
									
                    });
					//alert(valor[0]);
					//output += '<a style="color:#000;text-decoration:none;" href="#" onClick="detail(\''+datos['pid']+'\');" >';
					output += '<li onClick="detailAgent(\''+datos['agentid']+'\');" id="primero'+datos['agentid']+'" agentid='+datos['agentid']+' agentname="'+datos['agent']+'" style="list-style: none;">';     
										
					output +='<div class="row">';
						
						output +='<div style="margin-top:10px;border-radius: 5px;" class="col-xs-11 col-sm-6 col-md-10 det">';
									
									output +='<div style="height:80px;" class="col-xs-4 col-sm-2 contact">';
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
									
									
									
								output += '</div>';
								
							
							if ((datos['phone1']!=null && datos['phone1']!='' && datos['phone1']!=0 ) || (datos['phone2']!=null && datos['phone2']!='' && datos['phone2']!=0) || (datos['phone3']!=null && datos['phone3']!='' && datos['phone3']!=0)){
							output +='<div class="col-sm-12">';
								output +='<div style="border-bottom:1px solid #ccc;margin-bottom: 10px;">'+
										 '<font class="detalle">'+phone+':</font></div>';
							output +='<div class="row">';
								if (datos['phone1']!=null){
								if (datos['phone1']!=''){
									output +='<div>';	
										output +='<font class="detalle3" >'+datos['phone1']+'</font>';								
									output +='</div>';
									
									output +='<div style="margin-bottom:5px;">';
										if (datos['phone1']!=""){
												if (datos['typeph1']==0){
													output +='<font class="detalle2" >'+cell+'</font>';
												}else if (datos['typeph1']==1){
													output +='<font class="detalle2" >'+homefax+'</font>';
												}else if (datos['typeph1']==2){
													output +='<font class="detalle2" >'+officefax+'</font>';
												}else if (datos['typeph1']==3){
													output +='<font class="detalle2" >'+tollfree+'</font>';
												}else if (datos['typeph1']==4){
													output +='<font class="detalle2" >'+otollfree+'</font>';
												}else if (datos['typeph1']==5){
													output +='<font class="detalle2" >'+skype+'</font>';
												}
											}	
									
									output +='</div>';		
									
								}
								}
								if (datos['phone2']!=0){
								if (datos['phone2']!=null){
								if (datos['phone2']!=''){
								
									output +='<div>';	
										output +='<font class="detalle3" >'+datos['phone2']+'</font>';								
									output +='</div>';
									
									output +='<div>';
										if (datos['phone2']!=""){
												if (datos['typeph2']==0){
													output +='<font class="detalle2" >'+cell+':</font>';
												}else if (datos['typeph2']==1){
													output +='<font class="detalle2" >'+homefax+':</font>';
												}else if (datos['typeph2']==2){
													output +='<font class="detalle2" >'+officefax+':</font>';
												}else if (datos['typeph2']==3){
													output +='<font class="detalle2" >'+tollfree+':</font>';
												}else if (datos['typeph2']==4){
													output +='<font class="detalle2" >'+otollfree+':</font>';
												}else if (datos['typeph2']==5){
													output +='<font class="detalle2" >'+skype+':</font>';
												}
											}									
									output +='</div>';
								}
								}
								}
								if (datos['phone3']!=0){
								if (datos['phone3']!=null){
								if (datos['phone3']!=''){
									output +='<div>';	
										output +='<font class="detalle3" >'+datos['phone3']+'</font>';								
									output +='</div>';
									
									output +='<div>';
										if (datos['phone3']!=""){
												if (datos['typeph3']==0){
													output +='<font class="detalle2" >'+cell+':</font>';
												}else if (datos['typeph3']==1){
													output +='<font class="detalle2" >'+homefax+':</font>';
												}else if (datos['typeph3']==2){
													output +='<font class="detalle2" >'+officefax+':</font>';
												}else if (datos['typeph3']==3){
													output +='<font class="detalle2" >'+tollfree+':</font>';
												}else if (datos['typeph3']==4){
													output +='<font class="detalle2" >'+otollfree+':</font>';
												}else if (datos['typeph3']==5){
													output +='<font class="detalle2" >'+skype+':</font>';
												}
											}											
									output +='</div>';
								}
								}
								}
								if (datos['phone4']!=null){
								if (datos['phone4']!=''){
									output +='<div>';	
										output +='<font class="detalle3" >'+datos['phone4']+'</font>';								
									output +='</div>';
									
									output +='<div>';
											if (datos['phone4']!=""){
												if (datos['typeph4']==0){
												output +='<font class="detalle2" >'+cell+':</font>';
												}else if (datos['typeph4']==1){
													output +='<font class="detalle2" >'+homefax+':</font>';
												}else if (datos['typeph4']==2){
													output +='<font class="detalle2" >'+officefax+':</font>';
												}else if (datos['typeph4']==3){
													output +='<font class="detalle2" >'+tollfree+':</font>';
												}else if (datos['typeph4']==4){
													output +='<font class="detalle2" >'+otollfree+':</font>';
												}else if (datos['typeph4']==5){
													output +='<font class="detalle2" >'+skype+':</font>';
												}
											}	
									output +='</div>';
								}
								}
								if (datos['phone5']!=null){
									if (datos['phone5']!=''){
									output +='<div>';	
										output +='<font class="detalle3" >'+datos['phone5']+'</font>';								
									output +='</div>';
									
									output +='<div>';
											if (datos['phone5']!=""){
											if (datos['typeph5']==0){
												output +='<font class="detalle2" >'+cell+':</font>';
												}else if (datos['typeph5']==1){
													output +='<font class="detalle2" >'+homefax+':</font>';
												}else if (datos['typeph5']==2){
													output +='<font class="detalle2" >'+officefax+':</font>';
												}else if (datos['typeph5']==3){
													output +='<font class="detalle2">'+tollfree+':</font>';
												}else if (datos['typeph5']==4){
													output +='<font class="detalle2" >'+otollfree+':</font>';
												}else if (datos['typeph5']==5){
													output +='<font class="detalle2" >'+skype+':</font>';
												}
											}
									output +='</div>';
									}
								}		
								if (datos['phone6']!=null){
									if (datos['phone6']!=''){
									output +='<div>';	
										output +='<font class="detalle3" >'+datos['phone6']+'</font>';								
									output +='</div>';
									
									output +='<div>';
										if (datos['phone6']!=""){
											if (datos['typeph6']==0){
												output +='<font class="detalle2" >'+cell+':</font>';												
											}else if (datos['typeph6']==1){
													output +='<font class="detalle2" >'+homefax+':</font>';
											}else if (datos['typeph6']==2){
													output +='<font class="detalle2" >'+officefax+':</font>';
											}else if (datos['typeph6']==3){
													output +='<font class="detalle2" >'+tollfree+':</font>';
											}else if (datos['typeph6']==4){
													output +='<font class="detalle2" >'+otollfree+':</font>';
											}else if (datos['typeph6']==5){
													output +='<font class="detalle2" >'+skype+':</font>';
											}
										}
									output +='</div>';
								}
								}									
									
							output +='</div>';						 
						output +='</div>';
						}
						
						if ((datos['email']!=null && datos['email']!='') || (datos['email2']!=null || datos['email2']!='')){
						output +='<div class="col-sm-12">';							
							output +='<div style="border-bottom:1px solid #ccc;margin-bottom: 10px;">'+
										 '<font class="detalle" >'+email+':</font></div>';
							output+='<div class="row">';
								if (datos['email']!=null){
								if (datos['email']!=""){								
								output +='<div>';										
										output +='<font class="detalle3" >'+datos['email']+'</font>';
								output +='</div>';
								output +='<div>';
										if (datos['typeemail1']==0){
											output +='<font class="detalle2" >'+home+'</font>';	
										}else if (datos['typeemail1']==1){
											output +='<font class="detalle2" >'+office+'</font>';	
										}
								output +='</div>';
								}
								}
								if (datos['email2']!=null){
								if (datos['email2']!=""){								
								output +='<div>';
										output +='<font class="detalle3" >'+datos['email2']+'</font>';
								output +='</div>';
								output +='<div>';
										if (datos['typeemail2']==0){
											output +='<font class="detalle2" >'+home+'</font>';	
										}else if (datos['typeemail2']==1){
											output +='<font class="detalle2" >'+office+'</font>';	
										}
								output +='</div>';
								}
								}
							output+='</div>';		
						output +='</div>';
						}
						
						if ((datos['address1']!=null && datos['address1']!='') || (datos['address2']!=null && datos['address2']!='')){
						output +='<div class="col-sm-12">';							
							output +='<div style="border-bottom:1px solid #ccc;margin-bottom: 10px;">'+
										 '<font class="detalle" >'+address+':</font></div>';
							output+='<div class="row">';
								if (datos['address1']!=null){
								if (datos['address1']!=""){								
								output +='<div >';										
										output +='<font class="detalle3" >'+datos['address1']+'</font>';
								output +='</div>';
								output +='<div >';
										if (datos['typeaddress1']==1){
											output +='<font class="detalle2" >'+office+'</font>';	
										}else {
											output +='<font class="detalle2" >'+home+'</font>';	
										}
								output +='</div>';
								}
								}
								if (datos['address2']!=null){
								if (datos['address2']!=""){								
								output +='<div>';
										output +='<font class="detalle3" >'+datos['address2']+'</font>';
								output +='</div>';
								output +='<div>';
										if (datos['typeaddress2']==0){
											output +='<font class="detalle2" >'+home+'</font>';	
										}else if (datos['typeaddress2']==1){
											output +='<font class="detalle2" >'+office+'</font>';	
										}
								output +='</div>';
								}
								}
							output+='</div>';		
						output +='</div>';
						}
						
						if ((datos['urlsend']!=null && datos['urlsend']!='') || (datos['urlsend2']!=null && datos['urlsend2']!='')){
						output +='<div class="col-sm-12">';							
							output +='<div style="border-bottom:1px solid #ccc;margin-bottom: 10px;">'+
										 '<font class="detalle" >'+website+':</font></div>';
							output+='<div class="row">';
								if (datos['urlsend']!=null){
								if (datos['urlsend']!=""){								
								output +='<div class="col-xs-8 col-sm-6">';										
										output +='<font class="detalle3" >'+datos['urlsend']+'</font>';
								output +='</div>';
								output +='<div class="col-xs-8 col-sm-6">';
										if (datos['typeurl1']==0){
											output +='<font class="detalle2" >'+personal+'</font>';	
										}else if (datos['typeurl1']==1){
											output +='<font class="detalle2" >'+office+'</font>';	
										}
								output +='</div>';
								}
								}
								if (datos['urlsend2']!=null){
								if (datos['urlsend2']!=""){								
								output +='<div class="col-xs-8 col-sm-6">';
										output +='<font class="detalle3" >'+datos['urlsend2']+'</font>';
								output +='</div>';
								output +='<div class="col-xs-8 col-sm-6">';
										if (datos['typeurl2']==0){
											output +='<font class="detalle2" >'+personal+'</font>';	
										}else if (datos['typeurl2']==1){
											output +='<font class="detalle2" >'+office+'</font>';	
										}
								output +='</div>';
								}
								}
							output+='</div>';		
						output +='</div>';
						}
						
						if (datos['company']!=null){
							if (datos['company']!=''){	
								output +='<div class="col-sm-12">';							
									output +='<div style="border-bottom:1px solid #ccc;margin-bottom: 10px;">'+
												 '<font class="detalle" >'+company+':</font></div>';
									output+='<div class="row">';															
										output +='<div >';										
											output +='<font class="detalle3" >'+datos['company']+'</font>';
										output +='</div>';							
									output+='</div>';		
								output +='</div>';
							}
						}	
							
					output += '</div>';
					//output += '</a>';
					output +='<input type="hidden" id="detail" value="\''+datos['agentid']+'\'">';
					output +='</li>';
					
					start = start+$settings.limit; 
					//console.log(start);
					
                });
				//output += '</ul>';
				//Actualizamos el HTML del elemento con id="#respuesta"
					
						//alert(obj.total+' >='+start);
						//document.getElementById('contacts').style.display = "none";
						
						$("#detalleContacto").append(output);
						$("#detalleContactoAll").append(output);
						$("#detalleContactoList").append(output);
						//$(".tot").append(obj.total);
					
				} else {
					//data.success no es true
					$("#detalleContacto").html('No true! ');
				}	
					
				
			});
}

function getAgent(){

	//var userid=3213;
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: 'POST',
		data: { 
			 				
			'userid': userid,
			'sort': 'agent',
			'dir': 'ASC',
			'query': ''
			
		}}).done(function (data){					
			//alert(data);					
			var obj2 = JSON.parse(data);
			//console.debug(obj2);
			if(obj2.success) {								 
				var output = "";
				var all="ALL";
				//console.debug(obj2.success);
				$.each(obj2.records, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					//console.debug(obj2.results);
					$.each( value, function ( userkey, uservalue) {								
						if(userkey=='agentid' || userkey=='agent'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);									
						}									
					});
					
						output +='<option value="'+datos['agentid']+'">'+datos['agent']+'</option>';	
											
				});
							
					$("#newagentCont select").append(output);													
			}else{
				alert('else obj');
			}					
		});

}

function agente() {
//alert('selecionando combo');
var con = document.getElementById("newagenC").value;
//alert(con);

var idcontact= con;
var object = { 'idcontact' : idcontact };
localStorage.setItem('idcontact', JSON.stringify(object));
							
getAgente(con)
/*if (d==1){
	document.getElementById('tasksc').style.display = "none";	
	document.getElementById('tasksc2').style.display = "block";	
}*/
}

function getAgente(id){

	//var userid=3213;
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
	var output10  = "";
	var output11  = "";
	var output12  = "";
	var output13  = "";
	var output14  = "";
	var output15  = "";
	var output16  = "";
	var output17  = "";
	var output18  = "";
	var output19  = "";
	var output20  = "";
	var output21  = "";
	var output22  = "";
	var output23  = "";
	var output24  = "";
	var output25  = "";
	var output26  = "";
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	$.ajax({
		url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: 'POST',
		data: { 
			 				
			'userid': userid,
			'agentid': id,
			'sort': 'agent',
			'dir': 'ASC',
			'query': ''
			
		}}).done(function (data){					
			//alert(data);					
			var obj2 = JSON.parse(data);
			//console.debug(obj2);
			if(obj2.success) {								 
				var output = "";
				var all="ALL";
				//console.debug(obj2.success);
				$.each(obj2.records, function( key, value ) {
					var datos = new Array();
					var valor = new Array();
					var i=0;
					//console.debug(obj2.results);
					$.each( value, function ( userkey, uservalue) {								
						if(userkey=='agentid' || userkey=='agent' || userkey=='agenttype' || userkey=='typeemail1' || 
						userkey=='email' || userkey=='typeemail2' || userkey=='email2' || userkey=='company' || userkey=='typeurl1' || 
						userkey=='urlsend' || userkey=='typeurl2' || userkey=='urlsend2' || userkey=='typeph1' || userkey=='phone1' || 
						userkey=='typeph2' || userkey=='phone2' || userkey=='typeph3' || userkey=='phone3' || 
						userkey=='typeph4' || userkey=='phone4' || userkey=='typeph5' || userkey=='phone5' || userkey=='typeph5' ||
						userkey=='typeph6' || userkey=='phone6' || userkey=='typeaddress1' || userkey=='address1' || 
						userkey=='typeaddress2' || userkey=='address2'){
							datos[userkey]=uservalue;
							valor[i++]=userkey;
							//console.debug(userkey);									
						}									
					});
					
						output +=''+datos['agenttype']+'';	
						output2 +=''+datos['typeemail1']+'';	
						output3 +=''+datos['email']+'';	
						output4 +=''+datos['typeemail2']+'';	
						output5 +=''+datos['email2']+'';	
						output6 +=''+datos['company']+'';	
						output7 +=''+datos['typeurl1']+'';	
						output8 +=''+datos['urlsend']+'';	
						output9 +=''+datos['typeurl2']+'';	
						output10 +=''+datos['urlsend2']+'';	
						
						output11 +=''+datos['typeph1']+'';	
						output12 +=''+datos['phone1']+'';	
						output13 +=''+datos['typeph2']+'';	
						output14 +=''+datos['phone2']+'';	
						output15 +=''+datos['typeph3']+'';	
						output16 +=''+datos['phone3']+'';
						output17 +=''+datos['typeph4']+'';	
						output18 +=''+datos['phone4']+'';	
						output19 +=''+datos['typeph5']+'';	
						output20 +=''+datos['phone5']+'';	
						output21 +=''+datos['typeph6']+'';	
						output22+=''+datos['phone6']+'';	
						
						output23 +=''+datos['typeaddress1']+'';	
						output24 +=''+datos['address1']+'';	
						output25 +=''+datos['typeaddress2']+'';	
						output26 +=''+datos['address2']+'';
											
				});
							
					$("#newtypeagentCont select").append(output);
					//$('#newtypeagentCont').selectmenu('refresh', true);	
					
					$("#newemail1Cont select").append(output2);
					//$('#newemail1Cont').selectmenu('refresh', true);
					if(output3!='null'){
						$("#newema1Cont").val(output3);
					}
					
					$("#newemail2Cont select").append(output4);
					//$('#newemail2Cont').selectmenu('refresh', true);
					if(output5!='null'){
						$("#newema2Cont").val(output5);
					}
					
					if(output6!='null'){
						$("#newcompanyCont").val(output6);
					}
					
					$("#website1Cont select").append(output7);
					//$('#website1Cont').selectmenu('refresh', true);
					if(output8!='null'){
						$("#newweb1Cont").val(output8);
					}
					
					$("#website2Cont select").append(output9);
					//$('#website2Cont').selectmenu('refresh', true);
					if(output10!='null'){
						$("#newweb2Cont").val(output10);
					}
					
					$("#newphone1Cont select").append(output11);
					//$('#newphone1Cont').selectmenu('refresh', true);
					if(output12!='null'){
						$("#newpho1Cont").val(output12);
					}
					
					$("#newphone2Cont select").append(output13);
					//$('#newphone2Cont').selectmenu('refresh', true);
					if(output14!='null'){
						$("#newpho2Cont").val(output14);
					}
					
					$("#newphone3Cont select").append(output15);
					//$('#newphone3Cont').selectmenu('refresh', true);
					if(output16!='null'){
						$("#newpho3Cont").val(output16);
					}
					
					$("#newphone4Cont select").append(output17);
					//$('#newphone4Cont').selectmenu('refresh', true);
					if(output18!='null'){
						$("#newpho4Cont").val(output18);
					}
					
					$("#newphone5Cont select").append(output19);
					//$('#newphone5Cont').selectmenu('refresh', true);
					if(output20!='null'){
						$("#newpho5Cont").val(output20);
					}
					
					$("#newphone6Cont select").append(output21);
					//$('#newphone6Cont').selectmenu('refresh', true);
					if(output22!='null'){
						$("#newpho6Cont").val(output22);
					}
					
					$("#newaddress1Cont select").append(output23);
					//$('#newaddress1Cont').selectmenu('refresh', true);
					if(output24!='null'){
						$("#newaddr1Cont").val(output24);
					}
					
					$("#newaddress2Cont select").append(output25);
					//$('#newaddress2Cont').selectmenu('refresh', true);
					if(output26!='null'){
						$("#newaddr2Cont").val(output26);
					}
					
					
			}else{
				alert('else obj');
			}					
		});

}

function setAgentPrincipal(){

	//var userid=3213;
	var agentname=JSON.parse(localStorage.getItem('agentname'));
	var pid = JSON.parse(localStorage.getItem('key'));
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;

	$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: 'POST',
			data: { 
			'type': 'assignment-principal',
			'agentname': agentname.agentname,
			'userid': userid,
			'pid': pid.parcelid												
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				
				if(data){
					alert('Contact Sucessfully Updated');
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

function addAgente(){
	
	//var userid  =3213;
	var agentid = JSON.parse(localStorage.getItem('agentid'));
	var pid     = JSON.parse(localStorage.getItem('key'));
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	$.ajax({
		url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: "POST",
		data: { 			
			'userid': userid,		
			'type': 'assignment-add',
			'agentid': agentid.agentid,
			'pid': pid.parcelid
		},
		success: function(data, textStatus, jqXHR){
			//alert(data);
					
			if(data){
				alert('Contacts inserted');
				location.reload(true);
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

function removeAgente(){
	
	//var userid  =3213;
	var agentid = JSON.parse(localStorage.getItem('agentid'));
	var pid     = JSON.parse(localStorage.getItem('key'));
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
	
	$.ajax({
		url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
		type: "POST",
		data: { 			
			'userid': userid,		
			'type': 'assignment-del',
			'agentid': agentid.agentid,
			'pid': pid.parcelid
		},
		success: function(data, textStatus, jqXHR){
			//alert(data);
					
			if(data){
				alert('Contacts deleted');
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

function updateContact(){
		var agentid = JSON.parse(localStorage.getItem('agentid'));
		// La alerta mostrará 1 por pantalla
	
		//alert('editando'+agentid.agent);
		
		var agent = $("input#agen").val();
		
		//$("#typ").prop("selected", true);
		//var agenttype 	= $("#typ option:selected").val();
		var agenttype 	=1;
		alert(agenttype);
		
		$("#emai1").prop("selected", true);
		var typeemail1 	= $("#emai1 option:selected").val();
		if (typeemail1=='Home'){
			typeemail1=0;
		}else if (typeemail1=='Office'){
			typeemail1=1;
		}
		$("#emai2").prop("selected", true);
		var typeemail2 	= $("#emai2 option:selected").val();
		if (typeemail2=='Home'){
			typeemail2=0;
		}else if (typeemail2=='Office'){
			typeemail2=1;
		}
		var email1 = $("input#ema1").val();		
		var email2 = $("input#ema2").val();		
				
		var company = $("input#company").val();
		
		$("#websit1").prop("selected", true);
		var typeurl1 	= $("#websit1 option:selected").val();
		if (typeurl1=='Personal'){
			typeurl1=0;
		}else if (typeurl1=='Office'){
			typeurl1=1;
		}
		$("#websit2").prop("selected", true);
		var typeurl2 	= $("#websit2 option:selected").val();
		if (typeurl2=='Personal'){
			typeurl2=0;
		}else if (typeurl2=='Office'){
			typeurl2=1;
		}
		var urlsend1 = $("input#web1").val();		
		var urlsend2 = $("input#web2").val();	
		
		$("#phon1").prop("selected", true);
		var typeph1 	= $("#phon1 option:selected").val();
		if (typeph1=='Cell'){
			typeph1=0;
		}else if (typeph1=='Home Fax'){
			typeph1=1;
		}else if (typeph1=='Office Fax'){
			typeph1=2;
		}else if (typeph1=='TollFree'){
			typeph1=3;
		}else if (typeph1=='O.TollFree'){
			typeph1=4;
		}else if (typeph1=='Skype'){
			typeph1=5;
		}
		$("#phon2").prop("selected", true);
		var typeph2 	= $("#phon2 option:selected").val();
		if (typeph2=='Cell'){
			typeph2=0;
		}else if (typeph2=='Home Fax'){
			typeph2=1;
		}else if (typeph2=='Office Fax'){
			typeph2=2;
		}else if (typeph2=='TollFree'){
			typeph2=3;
		}else if (typeph2=='O.TollFree'){
			typeph2=4;
		}else if (typeph2=='Skype'){
			typeph2=5;
		}
		$("#phon3").prop("selected", true);
		var typeph3 	= $("#phon3 option:selected").val();
		if (typeph3=='Cell'){
			typeph3=0;
		}else if (typeph3=='Home Fax'){
			typeph3=1;
		}else if (typeph3=='Office Fax'){
			typeph3=2;
		}else if (typeph3=='TollFree'){
			typeph3=3;
		}else if (typeph3=='O.TollFree'){
			typeph3=4;
		}else if (typeph3=='Skype'){
			typeph3=5;
		}
		$("#phon4").prop("selected", true);
		var typeph4 	= $("#phon4 option:selected").val();
		if (typeph4=='Cell'){
			typeph4=0;
		}else if (typeph4=='Home Fax'){
			typeph4=1;
		}else if (typeph4=='Office Fax'){
			typeph4=2;
		}else if (typeph4=='TollFree'){
			typeph4=3;
		}else if (typeph4=='O.TollFree'){
			typeph4=4;
		}else if (typeph4=='Skype'){
			typeph4=5;
		}
		$("#phon5").prop("selected", true);
		var typeph5 	= $("#phon5 option:selected").val();
		if (typeph5=='Cell'){
			typeph5=0;
		}else if (typeph5=='Home Fax'){
			typeph5=1;
		}else if (typeph5=='Office Fax'){
			typeph5=2;
		}else if (typeph5=='TollFree'){
			typeph5=3;
		}else if (typeph5=='O.TollFree'){
			typeph5=4;
		}else if (typeph5=='Skype'){
			typeph5=5;
		}
		$("#phon6").prop("selected", true);
		var typeph6 	= $("#phon6 option:selected").val();
		if (typeph6=='Cell'){
			typeph6=0;
		}else if (typeph6=='Home Fax'){
			typeph6=1;
		}else if (typeph6=='Office Fax'){
			typeph6=2;
		}else if (typeph6=='TollFree'){
			typeph6=3;
		}else if (typeph6=='O.TollFree'){
			typeph6=4;
		}else if (typeph6=='Skype'){
			typeph6=5;
		}
		var phone1 = $("input#pho1").val();		
		var phone2 = $("input#pho2").val();
		var phone3 = $("input#pho3").val();		
		var phone4 = $("input#pho4").val();
		var phone5 = $("input#pho5").val();		
		var phone6 = $("input#pho6").val();
		
		$("#addre1").prop("selected", true);
		var typeaddress1 	= $("#addre1 option:selected").val();
		if (typeaddress1=='Home'){
			typeaddress1=0;
		}else if (typeaddress1=='Office'){
			typeaddress1=1;
		}
		$("#addre2").prop("selected", true);
		var typeaddress2 	= $("#addre2 option:selected").val();
		if (typeaddress2=='Home'){
			typeaddress2=0;
		}else if (typeaddress2=='Office'){
			typeaddress2=1;
		}
		var address1 = $("input#addr1").val();		
		var address2 = $("input#addr2").val();
		
		var userid = JSON.parse(localStorage.getItem('userid'));
	userid = userid.userid;
		
		//alert(typeemail1);
		//alert(company);
		$.ajax({
			url : 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php',  
			type: "POST",
			data: { 	
			'agentid':agentid.agentid,
			'userid': userid,		
			'type': 'update',
			'agent': agent,
			'company': company,
			'agenttype': agenttype,
			'email': email1,
			'typeemail1' :typeemail1,
			'email2': email2,
			'typeemail2' :typeemail2,
			'urlsend': urlsend1,
			'typeurl1' :typeurl1,
			'urlsend2': urlsend2,
			'typeurl2' :typeurl2,
			'phone1': phone1,
			'typeph1':typeph1,
			'phone2': phone2,
			'typeph2':typeph2,
			'phone3': phone3,
			'typeph3':typeph3,
			//'phone4': phone4,
			'typeph4':typeph4,
			//'phone5': phone5,
			'typeph5':typeph5,
			//'phone6': phone6,
			'typeph6':typeph6,
			'address1': address1,
			'typeaddress1':typeaddress1,
			'address2': address2,
			'typeaddress2':typeaddress2,
			'tollfree':phone4,
			'fax':phone6
			},
			success: function(data, textStatus, jqXHR){
				//alert(data);
				if (data){
					alert('Contact Sucessfully Updated');
					$.mobile.changePage('#followingHtml');
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



	