var position=0;
	var posi=0;
	var pos=0;
	
	var get='';
		
	var arr = new Array();
	var checkid = new Array();
	var i;
	var pageName = location.pathname.substring(1);
	var pagina=0;
	//alert(pageName);
	pageName = pageName.substring(15);
	//alert(pageName);
	
	var settings = { 
		limit : 25, // The number of posts per scroll to be loaded
		start : 0, // Initial offset, begins at 0 in this case
		error   : 'No More!', // When the user reaches the end this is the message that is	                           
	}
		
	var busy=false;
	
	var booleam=false;
	var booleam2=false;
	var vacio=false;
	var send=false;
	var load=false;
	var loadmail=false;
	var loadmailO=false;
	var loadtask=false;
	var loadtaskC=false;
	var loadcontact=false;
	var loadhistory=false;
	var loadschedule=false;
	var loademail=false;
	
	$this = $(this);
	$settings = settings;	
	var start = $settings.start;
	
	var mainloaded = false;
	var mainloaded2 = false;
	var push=false;
	
	var storePosition = {
		topCoordinate : null
	}
	var storePositionEmail = {
		topCoordinateEmail : null
	}
	
	var storePositionEmailO = {
		topCoordinateEmailO : null
	}
	var storePositionTask = {
		topCoordinateTask : null
	}
	var storePositionTaskC = {
		topCoordinateTaskC : null
	}
	var storePositionContact = {
		topCoordinateContact : null
	}


		
$(function(){
		
	$('#input_toreplyEmail').autoComplete({
		minChars: 1,
		source: function(term, suggest){
		term = term.toLowerCase();
		
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid=userid.userid;
		//alert(userid);
				
		var data  = {
			'userid': userid,
			'type': 'ContactEmailsList'
		};
				 
		$.post("http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php", data, function(cont) {
					
			valor     = cont;
			var obj = JSON.parse(valor);
			var output ="";
			var res ="";
			var choice1=[];
			var i=0;
					
			$.each(obj.records, function( key, value ) {
				var datos = new Array();
				var valores = new Array();
											
				choice1[i++]=value.email;						
			});
			console.log(choice1);		
			var choices=choice1;
			//var choices=['jesi@gmail.com', 'angelaluna@gmail.com', 'luisdevies@gmail.com'];
			//var choices = ['ActionScript', 'AppleScript', 'Asp', 'Assembly', 'BASIC', 'Batch', 'C', 'C++', 'CSS', 'Clojure', 'COBOL', 'ColdFusion', 'Erlang', 'Fortran', 'Groovy', 'Haskell', 'HTML', 'Java', 'JavaScript', 'Lisp', 'Perl', 'PHP', 'PowerShell', 'Python', 'Ruby', 'Scala', 'Scheme', 'SQL', 'TeX', 'XML'];
			var suggestions = [];
			for (i=0;i<choices.length;i++)
			if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
			suggest(suggestions);	
				
		});	
		}
	});
		
	$('#input_toforwardEmail').autoComplete({
		minChars: 1,
		source: function(term, suggest){
		term = term.toLowerCase();
		
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid=userid.userid;

				
		var data  = {
			'userid': userid,
			'type': 'ContactEmailsList'
		};
				 
		$.post("http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followagent.php", data, function(cont) {
					
			valor     = cont;
			var obj = JSON.parse(valor);
			var output ="";
			var res ="";
			var choice1=[];
			var i=0;
					
			$.each(obj.records, function( key, value ) {
				var datos = new Array();
				var valores = new Array();						
				choice1[i++]=value.email;				
						
			});
			console.log(choice1);	
			var choices=choice1;
			//var choices=['jesi@gmail.com', 'angelaluna@gmail.com', 'luisdevies@gmail.com'];
			//var choices = ['ActionScript', 'AppleScript', 'Asp', 'Assembly', 'BASIC', 'Batch', 'C', 'C++', 'CSS', 'Clojure', 'COBOL', 'ColdFusion', 'Erlang', 'Fortran', 'Groovy', 'Haskell', 'HTML', 'Java', 'JavaScript', 'Lisp', 'Perl', 'PHP', 'PowerShell', 'Python', 'Ruby', 'Scala', 'Scheme', 'SQL', 'TeX', 'XML'];
			var suggestions = [];
			for (i=0;i<choices.length;i++)
			if (~choices[i].toLowerCase().indexOf(term)) suggestions.push(choices[i]);
			suggest(suggestions);		
		});		
		}
	});

	//CLICK DETALLE DE PROPIEDADES
	$('ul.page_result').on('click','#info-detalle', function () {
        //alert('onclick');
		var id= $(this).attr('parcelid');
		var type= $(this).attr('type');
		var offer= $(this).attr('offer');
		var owner= $(this).attr('owner');
		var county= $(this).attr('county');
		//alert(id);
		// Creamos un objeto
		var object = { 'parcelid' : id };
		var object3 = { 'type' : type };
		var object4 = { 'offer' : offer };
		var object5 = { 'owner' : owner };
		var object6 = { 'county' : county };
		// Lo guardamos en localStorage pasandolo a cadena con JSON
		localStorage.setItem('key', JSON.stringify(object));
		localStorage.setItem('key3', JSON.stringify(object3));
		localStorage.setItem('offer', JSON.stringify(object4));
		localStorage.setItem('owner', JSON.stringify(object5));
		localStorage.setItem('county', JSON.stringify(object6));
		$('#detallePropiedades').empty();
		
		if (checkid==''){
			storePosition.topCoordinate =  $(this).offset().top-250;
			$.mobile.changePage("#detailProperties");
		}else{
			longProperties(id,push);
		}


		
    });
		
	$(document).on('pagebeforeshow', '#detailProperties', function(){  
		//var valor = localStorage.getItem("key");
		var valor = JSON.parse(localStorage.getItem('key'));
		// La alerta mostrará 1 por pantalla
		//alert(valor.parcelid);
		//alert(valor.agent);
		$('#detallePropiedades').empty();
		
		detailProperty(valor.parcelid);
		
	});
		
	//CLICK DETALLE DE CONTACTOS
	$('ul.page_contact').on('click','li', function () { 
		var id= $(this).attr('agentid');
		// Creamos un objeto
		var object = { 'agentid' : id };
		// Lo guardamos en localStorage pasandolo a cadena con JSON
		localStorage.setItem('agentid', JSON.stringify(object));
		
		$('#detalleContacto').empty();
		$.mobile.changePage( "#detailContacts","slide");	
    });
		
	$(document).on('pagebeforeshow', '#detailContacts', function(){  
		//var valor = localStorage.getItem("key");
		var valor = JSON.parse(localStorage.getItem('agentid'));
		// La alerta mostrará 1 por pantalla
		detailContact(valor.agentid);
	});
		
	//CLICK DETALLE DE CONTACTOS2
	$('ul.page_contactAll').on('click','li', function () { 
		var id= $(this).attr('agentid');
		var agentname= $(this).attr('agentname');
		// Creamos un objeto
		var object = { 'agentid' : id };
		var object2 = { 'agentname' : agentname };
		// Lo guardamos en localStorage pasandolo a cadena con JSON
		localStorage.setItem('agentid', JSON.stringify(object));
		localStorage.setItem('agentname', JSON.stringify(object2));
		$('#detalleContactoAll').empty();
		$.mobile.changePage( "#detailContactsAll","slide");	
    });
		
	$(document).on('pagebeforeshow', '#detailContactsAll', function(){  
		//var valor = localStorage.getItem("key");
		var valor = JSON.parse(localStorage.getItem('agentid'));
		// La alerta mostrará 1 por pantalla
		detailContact(valor.agentid);
	});
		
	//CLICK DETALLE DE CONTACTOS3
	$('ul.page_contactList').on('click','li', function () {  
		var id= $(this).attr('agentid');	
		var agentname= $(this).attr('agentname');	
		// Creamos un objeto
		var object = { 'agentid' : id };
		var object2 = { 'agentname' : agentname };
		// Lo guardamos en localStorage pasandolo a cadena con JSON
		localStorage.setItem('agentid', JSON.stringify(object));
		localStorage.setItem('agentname', JSON.stringify(object2));
		$('#detalleContactoList').empty();
		$.mobile.changePage( "#detailContactsList","slide");	
    });
		
	$(document).on('pagebeforeshow', '#detailContactsList', function(){  
		//var valor = localStorage.getItem("key");
		var valor = JSON.parse(localStorage.getItem('agentid'));
		
		// La alerta mostrará 1 por pantalla
		detailContact(valor.agentid);
	});
		
	//CLICK DETALLE DE EMAIL
	$('ul.page_emailInbox').on('click','#info-email0,#info-email1', function () {   
		var id= $(this).attr('idmail');
		var idseen= $(this).attr('idseen');
		// Creamos un objeto
		var object = { 'email' : id };
		var seen = { 'seen' : idseen };
		// Lo guardamos en localStorage pasandolo a cadena con JSON
		localStorage.setItem('email', JSON.stringify(object));
		localStorage.setItem('seen', JSON.stringify(seen));
		$('#detalleEmailCab ul').empty();
		$('#detalleCorreo').empty();
		//alert(checkid);
		if (checkid==''){
			storePositionEmail.topCoordinateEmail =  $(this).offset().top-250;
			$.mobile.changePage("#detailEmail");
		}else{
			longEmailInbox(id,id.seen,push);
		}
			    
    });
	
	$(document).on('pagebeforeshow', '#detailEmail', function(){  
		//var valor = localStorage.getItem("key");
		var valor = JSON.parse(localStorage.getItem('email'));
		var valor2 = JSON.parse(localStorage.getItem('seen'));
		
		detailEmails(valor.email);
		detailEmailsCab(valor.email);
		propertyAssing(valor.email);
		leerCorreos(valor.email,valor2.seen);	
	});
		
	//CLICK DETALLE DE EMAIL outbox
	$('ul.page_emailOutbox').on('click','#info-outbox', function () {
           //alert('onclick email outbox');
		//alert(url);
		var id= $(this).attr('idmail');
		var idseen= $(this).attr('idseen');
		// Creamos un objeto
		var object = { 'email' : id };
		var seen = { 'seen' : idseen };
		// Lo guardamos en localStorage pasandolo a cadena con JSON
		localStorage.setItem('email', JSON.stringify(object));
		localStorage.setItem('seen', JSON.stringify(seen));
		$('#detalleEmailCabO ul').empty();
		$('#detalleCorreoO').empty();
		//$.mobile.changePage( "#detailEmailOutbox");	
		if (checkid==''){
			storePositionEmail.topCoordinateEmail =  $(this).offset().top-250;
			$.mobile.changePage( "#detailEmailOutbox");
		}else{
			longEmailOutbox(id,push);
		}
    });
		
	$(document).on('pagebeforeshow', '#detailEmailOutbox', function(){  
		//var valor = localStorage.getItem("key");
		var valor = JSON.parse(localStorage.getItem('email'));
		//detailEmails(valor.email);
		var valor2 = JSON.parse(localStorage.getItem('seen'));
		//alert('no leido');
		leerCorreos(valor.email,valor2.seen);
		detailEmailsCabO(valor.email);
	});
		
	//CLICK DETALLE PENDING TASK
	$('ul.page_pending').on('click','li', function () {
        //alert('onclick');
		var id= $(this).attr('idfus');	
		//alert(id);
		// Creamos un objeto
		var object = { 'idfus' : id };
		// Lo guardamos en localStorage pasandolo a cadena con JSON
		localStorage.setItem('key', JSON.stringify(object));
		$('#detallePendiente ul').empty();
		//$("#detallePendiente").html('');
		storePositionTask.topCoordinateTask =  $(this).offset().top-250;
		$.mobile.changePage("#detailPending");
		//window.location.href = "index.html#detailProperties";			
    });
		
	$(document).on('pagebeforeshow', '#detailPending', function(){  
		//var valor = localStorage.getItem("key");
		var valor = JSON.parse(localStorage.getItem('key'));
		// La alerta mostrará 1 por pantalla
		//alert(valor.parcelid);
		//alert(valor.agent);
		$('#detallePendiente ul').empty();
		detailPending(valor.idfus);
	});
		
	//CLICK DETALLE COMPLETED TASK
	$('ul.page_completed').on('click','li', function () {
        //alert('onclick');
		var id= $(this).attr('idfuh');
			
		var parcelid= $(this).attr('parcelid');
			
		var contr= $(this).attr('contr');
		var object6 = { 'contr' : contr };
		localStorage.setItem('key6', JSON.stringify(object6));
			
		var pof= $(this).attr('pof');
		var object7 = { 'pof' : pof };
		localStorage.setItem('key7', JSON.stringify(object7));	
			
		var emd= $(this).attr('emd');
		var object8 = { 'emd' : emd };
		localStorage.setItem('key8', JSON.stringify(object8));	
			
		var adde= $(this).attr('adde');
		var object9 = { 'adde' : adde };
		localStorage.setItem('key9', JSON.stringify(object9));
			
		var offre= $(this).attr('offre');
		var object10 = { 'offre' : offre };
		localStorage.setItem('key10', JSON.stringify(object10));	
		
		var object = { 'idfuh' : id };
		localStorage.setItem('key', JSON.stringify(object));

		var object2 = { 'parcelid' : parcelid };
		localStorage.setItem('key2', JSON.stringify(object2));
			
		$('#detalleCompletados ul').empty();
		storePositionTask.topCoordinateTask =  $(this).offset().top-250;
		$.mobile.changePage("#detailCompleted");
		//window.location.href = "index.html#detailProperties";		
    });
		
	$(document).on('pagebeforeshow', '#detailCompleted', function(){  
		//var valor = localStorage.getItem("key");
		var valor = JSON.parse(localStorage.getItem('key'));
		// La alerta mostrará 1 por pantalla
		//alert(valor.parcelid);
		//alert(valor.agent);
		$('#detalleCompletados ul').empty();
		detailCompleted(valor.idfuh);
	});
		
	//CLICK DETALLE HISTORY FOLLOW
	$('ul.page_history2').on('click','li', function () {
        //alert('onclick');
		var id= $(this).attr('idhist');
		var parcelid= $(this).attr('parcelid');
			
		var contr= $(this).attr('contr');
		var object6 = { 'contr' : contr };
		localStorage.setItem('key6', JSON.stringify(object6));
			
		var pof= $(this).attr('pof');
		var object7 = { 'pof' : pof };
		localStorage.setItem('key7', JSON.stringify(object7));	
			
		var emd= $(this).attr('emd');
		var object8 = { 'emd' : emd };
		localStorage.setItem('key8', JSON.stringify(object8));	
			
		var adde= $(this).attr('adde');
		var object9 = { 'adde' : adde };
		localStorage.setItem('key9', JSON.stringify(object9));
			
		var offre= $(this).attr('offre');
		var object10 = { 'offre' : offre };
		localStorage.setItem('key10', JSON.stringify(object10));						
		// Creamos un objeto
		var object = { 'idfuh' : id };
		var object2 = { 'parcelid' : parcelid };
		// Lo guardamos en localStorage pasandolo a cadena con JSON
		localStorage.setItem('key4', JSON.stringify(object));
		localStorage.setItem('key2', JSON.stringify(object2));
		$('#detallehistorial ul').empty();
		$.mobile.changePage("#detailHistory","slide");
    });
		
	$(document).on('pagebeforeshow', '#detailHistory', function(){  
		//var valor = localStorage.getItem("key");
		var valor = JSON.parse(localStorage.getItem('key4'));
		var valor2 = JSON.parse(localStorage.getItem('key2'));
		// La alerta mostrará 1 por pantalla
		//alert(valor.parcelid);
		//alert(valor.idfuh);
		get='detailHist'
		$('#detallehistorial ul').empty();
		getAddress(valor2.parcelid,get);
		detailHistory(valor.idfuh,valor2.parcelid);
	});
		
	//CLICK DETALLE SCHEDULE FOLLOW
	$('ul.page_schedule').on('click','li', function () {
        //alert('onclick');
		var id= $(this).attr('idschedule');
		var parcelid= $(this).attr('parcelid');
		// Creamos un objeto
		var object = { 'idfus' : id };
		var object2 = { 'parcelid' : parcelid };
		// Lo guardamos en localStorage pasandolo a cadena con JSON
		localStorage.setItem('key4', JSON.stringify(object));
		localStorage.setItem('key2', JSON.stringify(object2));
		$('#detalleschedule ul').empty();
		$.mobile.changePage("#detailSchedule","slide");	
    });
		
	$(document).on('pagebeforeshow', '#detailSchedule', function(){  
		//var valor = localStorage.getItem("key");
		var valor = JSON.parse(localStorage.getItem('key4'));
		var valor2 = JSON.parse(localStorage.getItem('key2'));
		// La alerta mostrará 1 por pantalla
		//alert(valor.parcelid);
		//alert(valor.idfus);
		$('#detalleschedule ul').empty();
		detailSchedule(valor.idfus,valor2.parcelid);
	});
		
	//CLICK DETALLE DE EMAIL FOLLOW
	$('ul.page_correo').on('click','li', function () { 
		var id= $(this).attr('idmail');
		var idseen= $(this).attr('idseen');
		// Creamos un objeto
		var object = { 'email' : id };
		var seen = { 'seen' : idseen };
		// Lo guardamos en localStorage pasandolo a cadena con JSON
		localStorage.setItem('email', JSON.stringify(object));
		localStorage.setItem('seen', JSON.stringify(seen));
		$('#detalleEmailFollow ul').empty();
		$.mobile.changePage( "#detailEmailFollow");
    });
		
	$(document).on('pagebeforeshow', '#detailEmailFollow', function(){  
		//var valor = localStorage.getItem("key");
		var valor = JSON.parse(localStorage.getItem('email'));
		var valor2 = JSON.parse(localStorage.getItem('seen'));
		$('#detalleEmailFollow ul').empty();
		detailEmailFollow(valor.email);
		//readEmail(valor.email,valor2.seen);
		leerCorreos(valor.email,valor2.seen);
	});
			
	$('#readEmailFollow,#readEmailFollow2').on('click',function(){			
		var valor = JSON.parse(localStorage.getItem('email'));
		var valor2 = JSON.parse(localStorage.getItem('seen'));
		noleidoCorreo(valor.email,valor2.seen);
	});
		
	$('#readEmail,#readEmail2').on('click',function(){			
		var valor = JSON.parse(localStorage.getItem('email'));
		var valor2 = JSON.parse(localStorage.getItem('seen'));
		//alert('no leido');
		noleidoCorreo(valor.email,valor2.seen);
	});
		
	$('#unreadEmail,#unreadEmail2').on('click',function(){			
		var valor = JSON.parse(localStorage.getItem('email'));
		var valor2 = JSON.parse(localStorage.getItem('seen'));
		//alert('no leido');
		leerCorreos(valor.email,valor2.seen);
	});	
		
	$('#unreadEmailFollow,#unreadEmailFollow2').on('click',function(){			
		var valor = JSON.parse(localStorage.getItem('email'));
		var valor2 = JSON.parse(localStorage.getItem('seen'));
		//alert('no leido');
		leerCorreos(valor.email,valor2.seen);
	});									
		
	//LONG TOUCH PROPERTY
	$('ul.page_result').on('taphold','li', function () {
        // alert('long Touch properties');
		var id= $(this).attr('parcelid');
		var typefollow= $(this).attr('type');
		//alert(id);
		var pid = { 'pid' : id };
		var typefollow = { 'typefollow' : typefollow };
		localStorage.setItem('pid', JSON.stringify(pid));
		localStorage.setItem('typefollow', JSON.stringify(typefollow));
		longProperties(id,push);	
	});
		
	//LOGN TOUCH CONTACT
	$('ul.page_contact').on('taphold','li', function () {
        // alert('long Touch contact');
		var id= $(this).attr('agentid');
		//alert(id);
		longContact(id);		
	});
		
	//LONG TOUCH EMAIL INBOX
	$('ul.page_emailInbox').on('taphold','li', function () {
        //alert('long Touch email Inbox');
		var id= $(this).attr('idmail');
		var idseen= $(this).attr('idseen');	
		var email= $(this).attr('idemail');
		var name= $(this).attr('idname');			
		var object = { 'email' : email };
		localStorage.setItem('key', JSON.stringify(object));
		var object2 = { 'name' : name };
		localStorage.setItem('key2', JSON.stringify(object2));
		$(this).addClass ('mail_marked');
		longEmailInbox(id,idseen,push);
	});
								
	//LONG TOUCH EMAIL OUTBOX
	$('ul.page_emailOutbox').on('taphold','li', function () {
        // alert('long Touch email OUTbox');
		var id= $(this).attr('idmail');
		longEmailOutbox(id);
	});

	//LOGN TOUCH PENDING TASK
	$('ul.page_pending').on('taphold','li', function () {
        //alert('long Touch pending task');
		var id= $(this).attr('idfus');
		//alert(id);
		longPending(id);	
	});
		
	//LOGN TOUCH COMPLETED TASK
	$('ul.page_completed').on('taphold','li', function () {
        //alert('long Touch completed task');
		var id= $(this).attr('idfuh');
		//alert(id);
		longCompleted(id);
	});
		
	//CARGAR DATOS ASSIGNMENT CONTACT
	$('#assCont,#assContIn').on('click',function(){			
		var mail = JSON.parse(localStorage.getItem('key'));
		var nam  = JSON.parse(localStorage.getItem('key2'));
		//alert(mail.email);		
		//alert(nam.name);	
		getComposeInbox();
		getAssignContact(mail.email,nam.name);
	});
	
	//CARGAR DATOS ASSIGNMENT PROPERTY
	$('#assProp,#assPropIn').on('click',function(){			
		//getAssignProperty();
		getassignProperty();
	});
		
	//ASSIGNMENT PROPERTY
	$('#assignP,#assignPHouse').on('click',function(){					
		var agentid = JSON.parse(localStorage.getItem('agentid'));
		
		var idemail = JSON.parse(localStorage.getItem('email'));
		assignProperty(agentid.agentid,idemail.email);
	});
	
		
	//MAKE CALL
	$('#makeCall,#makeCallDP').on('click', function () {
		//alert('get');
		//getAgentMakeCall(checkid);
		//getAgentCall(checkid);
		listadoContactsMakeCall();
	});
		
	//SEND EMAIL
	$('#sendE').on('click', function () {
		//alert('sendemail');
		sendemail();	
	});
		
	//SEND COMPOSE EMAIL FOLLOW
	$('#sendComposeEmailFollow,#sendComposeEF').on('click', function () {
		//alert('sendemail');
		var val = JSON.parse(localStorage.getItem('key5'));
		var val2 = JSON.parse(localStorage.getItem('key'));
		sendEmailFollow(val.mail,val2.parcelid);	
	});
		
	//CARGAR EDITAR CONTACT
	$("#editar,#updateContList").on('click', function () {
		//alert('CARGAR FORM');
		getEditContact();
	});
		
	//CARGAR INFO REPLY EMAIL INBOX
	$("#replyEmail,#replyEmail2").on('click', function () {
		//alert('CARGAR FORM');
		var val = JSON.parse(localStorage.getItem('email'));
		getReplyEmail(val.email);
	});
		
	//CARGAR INFO REPLY EMAIL OutBOX
	$("#replyEmailO").on('click', function () {
		//alert('CARGAR FORM');
		var val = JSON.parse(localStorage.getItem('email'));
		getReplyEmailOutbox(val.email);
	});
		
	//CARGAR INFO REPLY EMAIL FOLLOW
	$("#replyEmailFollow,#replyEmailFollow2").on('click', function () {
		//alert('reply ef');
		var val = JSON.parse(localStorage.getItem('email'));
		//getReplyEmailFollow();
		getReplyEmailF(val.email);
	});
		
	//BOTON EDITAR CONTACT
	$("#updateCont,#updateCont2").on('click', function () {
		//alert('editar');
		editContact();
	});
		
	//BOTON EDITAR PENDING TASK
	$("#saveEditPending,#updateEditPend").on('click', function () {
		//alert('editar');
		editPendingTask();
	});
		
	//BOTON EDITAR PENDING TASK
	$("#saveEditCompleted,#updateEditCompleted").on('click', function () {
		//alert('editar');
		editCompletedTask();	
	});
		
	//BOTON EDITAR HISTORY FOLLOW
	$("#updateHist,#updateEditHistory").on('click', function () {
		//alert('editar');
		var id = JSON.parse(localStorage.getItem('key4'));
		editHistory(id.idfuh);
	});
		
	//BOTON EDITAR SCHEDULE FOLLOW
	$("#updateEditSche,#updateEditSchedule").on('click', function () {
		//alert('editar');
		var id = JSON.parse(localStorage.getItem('key4'));
		editSchedule(id.idfus);
	});
		
	//BOTON DELETE HISTORY FOLLOW
	$("#detailDelHist").on('click', function () {
		var valor = JSON.parse(localStorage.getItem('key4'));
		deleteHistory(valor.idfuh);
	});
		
	//BOTON DELETE SCHEDULE FOLLOW
	$("#detailDelSche").on('click', function () {
		var valor = JSON.parse(localStorage.getItem('key4'));
		deleteSchedule(valor.idfus);	
	});
		
	//BOTON DELETE EMAIL FOLLOW
	$("#deleteEmailFollow,#deleteEmailFollow2").on('click', function () {
		var valor = JSON.parse(localStorage.getItem('key5'));
		deleteEmailFollow(valor.mail);
	});
		
	//BOTON CARGAR EDITAR PENDING TASK
	$("#editarPend").on('click', function () {
		//alert('click boton editar');
		var valor = JSON.parse(localStorage.getItem('key'));
		geteditPending(valor.idfus);
	});
		
	//BOTON CARGAR EDITAR PENDING TASK
	$("#editarCompleted").on('click', function () {
		//alert('click boton editar');
		var valor = JSON.parse(localStorage.getItem('key'));
		var valor2 = JSON.parse(localStorage.getItem('key2'));
		geteditCompleted(valor.idfuh,valor2.parcelid);
	});
		
	//BOTON CARGAR EDITAR SCHEDULE FOLLOW
	$("#detailEditSche").on('click', function () {
		//alert('click boton editar');
		var valor = JSON.parse(localStorage.getItem('key4'));
		var valor2 = JSON.parse(localStorage.getItem('key'));
		geteditSchedule(valor.idfus,valor2.parcelid);
	});
		
	//BOTON CARGAR EDITAR HISTORY FOLLOW
	$("#detailEditHist").on('click', function () {
		//alert('click boton editar');
		var valor = JSON.parse(localStorage.getItem('key4'));
		var valor2 = JSON.parse(localStorage.getItem('key'));
		geteditHistory(valor.idfuh,valor2.parcelid);
	});
		
	//BOTON CARGAR EDITAR EMAIL FOLLOW
	$("#addEfollow").on('click', function () {
		//alert('click boton editar');
		var valor2 = JSON.parse(localStorage.getItem('key'));
		getComposeEmailFollow(valor2.parcelid);
	});
		
	//BOTON SEARCH CONTACT CONTRACT
	$("#imgbuyer").on('click', function () {
		//alert('click boton editar');
		//getagentsearch();
		if (checkid==''){
			var id = JSON.parse(localStorage.getItem('key'));
			var parcelid =id.parcelid;
		}else if (checkid.length==1){
			var pid = JSON.parse(localStorage.getItem('pid'));
			var parcelid =pid.pid;
		}
		  booleam=true;
		pagSearchContact(parcelid);
	});
	
	//BOTON SEARCH CONTACT CONTRACT
	$("#imgseller").on('click', function () {
		//alert('click boton editar');
		//getagentsearch();
		if (checkid==''){
			var id = JSON.parse(localStorage.getItem('key'));
			var parcelid =id.parcelid;
		}else if (checkid.length==1){
			var pid = JSON.parse(localStorage.getItem('pid'));
			var parcelid =pid.pid;
		}
		  booleam2=true;
		pagSearchContact(parcelid);
	});
		
	//BOTON CARGAR FORWARD EMAIL 
	$("#forwardEmail,#forwardEmail2,#forwardEmailO").on('click', function () {
		forwardEmailInbox();
	});
		
	//BOTON CARGAR FORWARD EMAIL FOLLOW
	$("#forwardEmailFollow,#forwardEmailFollow2").on('click', function () {
		forwardEmailInbox();	
	});
		
	//BOTON COMPLETED TASK PENDING
	$("#taskComp").on('click', function () {
		//alert('editar');
		completedMultiTask();	
	});
		
	//BOTON SEND EMAIL 
	$("#btnSendEMAIL").on('click', function () {
		//alert('editar');
		//sendEMAIL();	
		if (checkid==''){
			var typeFollow = JSON.parse(localStorage.getItem('key3'));
			var typeFollow = typeFollow.type;
			var id = JSON.parse(localStorage.getItem('key'));
			var parcelid =id.parcelid;
		}else if (checkid.length==1){
			var typeFollow = JSON.parse(localStorage.getItem('typefollow'));
			var typeFollow = typeFollow.typefollow;
			var pid = JSON.parse(localStorage.getItem('pid'));
			var parcelid =pid.pid;
		}else{
			var parcelid =checkid;
			ciclo= 'multi';
			//alert(parcelid);
		}
		
		//var userid=3213;
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid=userid.userid;
		
		if (ciclo=='multi'){
			var idaux=0;
			
		
			for(i=0;i<checkid.length;i++){
				//alert(checkid[i]);
				var imgVal = $('#imageUpload').val(); 
				$("input#userid").val(userid);
				$("input#pid").val(checkid[i]);
						
				$("input#typeFollow").val(typeFollow);

				var formData 		= new FormData($("#envioEmail")[0]);
				$.ajax({
					url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followsendmail.php',
					type: 'POST',
					data: formData,
					cache: false,
					contentType: false,
					processData: false,
					enctype: 'multipart/form-data',
					beforeSend: function(){
									
					},
					success: function(data){
						send=true;
						$.mobile.changePage('#followingHtml');
					},
					//si ha ocurrido un error
					error: function(){
									
					}
				}); // End ajax
				
			}
			if(send==true){
				alert('Email successfully');
			}
		
		}else{
			
			var imgVal = $('#imageUpload').val(); 
			$("input#userid").val(userid);
			$("input#pid").val(parcelid);
					
			$("input#typeFollow").val(typeFollow);

			var formData 		= new FormData($("#envioEmail")[0]);
			$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followsendmail.php',
				type: 'POST',
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				enctype: 'multipart/form-data',
				beforeSend: function(){
								
				},
				success: function(data){
					alert('Email successfully');
					$.mobile.changePage('#followingHtml');
				},
				//si ha ocurrido un error
				error: function(){
								
				}
			}); // End ajax
		
		}
	
	});
	
	//BOTON SEND EMAIL SCHEDULE TASK 
	$("#btnSendSCHEDULE").on('click', function () {
		//alert('editar');
		//sendEMAIL();	
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
			var parcelid =pid.pid;
		}else{
			var parcelid =checkid;
			ciclo= 'multi';
			//alert(parcelid);
		}
		
		//var userid=3213;
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid=userid.userid;
		
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
		
		if (ciclo=='multi'){
			var idaux=0;
		
			for(i=0;i<checkid.length;i++){
				//alert(checkid[i]);
				var imgVal = $('#imageUpload').val(); 
				$("input#userid").val(userid);
				$("input#type").val('insert');
				$("input#pid").val(checkid[i]);	
				$("input#parcelid").val(checkid[i]);	
				$("input#typeFollow").val(typeFollow);
				$("input#task").val(task.task);
				$("input#odate").val(day.day);
				$("input#ohour").val(hour3);
				$("input#typeExec").val(exectype.exectype);
				$("input#detailsch").val(detail.detail);
				
				var formData 		= new FormData($("#envioEmail")[0]);
				$.ajax({
					url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followshedule.php',
					type: 'POST',
					data: formData,
					cache: false,
					contentType: false,
					processData: false,
					enctype: 'multipart/form-data',
					beforeSend: function(){
									
					},
					success: function(data){
						if (data){
						send=true;
						document.getElementById('header_two').style.display = "none";
						$.mobile.changePage('#followingHtml');
						}
					},
					//si ha ocurrido un error
					error: function(){
									
					}
				}); // End ajax

			}
			if(send==true){
				alert('All Follow Schedule Task were created. 0 presented errors. Please, verify them on the Pending Task tab' );
			}
		
		}else{
			var imgVal = $('#imageUpload').val(); 
		
			$("input#userid").val(userid);
			$("input#type").val('insert');
			$("input#pid").val(parcelid);	
			$("input#parcelid").val(parcelid);	
			$("input#typeFollow").val(typeFollow);
			$("input#task").val(task.task);
			$("input#odate").val(day.day);
			$("input#ohour").val(hour3);
			$("input#typeExec").val(exectype.exectype);
			$("input#detailsch").val(detail.detail);
			
			var formData 		= new FormData($("#envioEmail")[0]);
			$.ajax({
				url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followshedule.php',
				type: 'POST',
				data: formData,
				cache: false,
				contentType: false,
				processData: false,
				enctype: 'multipart/form-data',
				beforeSend: function(){
								
				},
				success: function(data){
					if (data){
					alert('All Follow Schedule Task were created. 0 presented errors. Please, verify them on the Pending Task tab' );
					document.getElementById('header_two').style.display = "none";
					$.mobile.changePage('#followingHtml');
					}
				},
				//si ha ocurrido un error
				error: function(){
								
				}
			}); // End ajax
		
		}
		
	});
	
	//BOTON SEND FAX SCHEDULE TASK 
	$("#btnSendSCHEDULEfax").on('click', function () {
		//alert('editar');
		//sendEMAIL();	
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
		
		//var userid=3213;
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid=userid.userid;
		
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
		
		var imgVal = $('#imageUpload').val(); 
		
		$("input#userid").val(userid);
		$("input#type").val('insert');
		$("input#pid").val(parcelid);	
		$("input#parcelid").val(parcelid);	
		$("input#typeFollow").val(typeFollow);
		$("input#task").val(task.task);
		$("input#odate").val(day.day);
		$("input#ohour").val(hour3);
		$("input#typeExec").val(exectype.exectype);
		$("input#detailsch").val(detail.detail);

		var formData 		= new FormData($("#envioEmail")[0]);
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/myfollowhistory/properties_followshedule.php',
			type: 'POST',
			data: formData,
			cache: false,
			contentType: false,
			processData: false,
			enctype: 'multipart/form-data',
			beforeSend: function(){
							
			},
			success: function(data){
				if (data){
				alert('All Follow Schedule Task were created. 0 presented errors. Please, verify them on the Pending Task tab' );
				$.mobile.changePage('#followingHtml');
				}
			},
			//si ha ocurrido un error
			error: function(){
							
			}
		}); // End ajax

			
	});
		
		
	//BOTON SEND SMS 
	$("#btnSendSMS").on('click', function () {
		//alert('editar');
		sendSMS();	
	});
	
	//BOTON SEND SMS SCHEDULE
	$("#btnSendSCHEDULEsms").on('click', function () {
		//alert('editar');
		sendSMS_SCHEDULE(checkid);	
	});
		
	//BOTON SEND FAX
	$("#btnSendFAX").on('click', function () {
		//alert('editar');
		//sendFAX();
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
		
		//var userid=3213;
		var userid = JSON.parse(localStorage.getItem('userid'));
		userid=userid.userid;
		
		var imgVal = $('#imageUpload').val(); 
		$("input#userid").val(userid);
		$("input#pid").val(parcelid);
				
		$("input#typeFollow").val(typeFollow);

		var formData 		= new FormData($("#envioEmail")[0]);
		$.ajax({
			url: 'http://reifax.com/mreifax/mysetting_tabs/myfollowup_tabs/properties_followsendfax.php',
			type: 'POST',
			data: formData,
			cache: false,
			contentType: false,
			processData: false,
			enctype: 'multipart/form-data',
			beforeSend: function(){
							
			},
			success: function(data){
				alert('Fax  successfully');
				$.mobile.changePage('#followingHtml');
			},
			//si ha ocurrido un error
			error: function(){
							
			}
		}); // End ajax

	});
		
	//BOTON SEND CONTRACT
	$("#btnSendContr").on('click', function () {
		//alert('editar');
		sendContract();	
	});
	
	//BOTON SEND CONTRACT
	$("#btnScheduleDoc").on('click', function () {
		//alert('editar');
		sendContract_Schedule();	
	});
	
	//BOTON NEW SEND EMAIL
	$("#newEmail").on('click', function () {
		//alert('editar');
		newEmail();	
	});
	
	//BOTON NEW SEND SMS
	$("#newSms").on('click', function () {
		//alert('editar');
		newSms();	
	});
	
	//BOTON NEW SEND FAX
	$("#newFax").on('click', function () {
		//alert('editar');
		newFax();	
	});
	
	//BOTON SEND CONTRACT
	$("#sendContractDP").on('click', function () {
		var id = JSON.parse(localStorage.getItem('key'));
		var detalle=1;
		$('#btnscheduledoc').hide();
		$('#btnsenddoc').show();
		getContactContract(id.parcelid,detalle);
		gettypecontract();			
	});
	
	//BOTON SEND CONTRACT
	$("#sendContract").on('click', function () {
		var id = JSON.parse(localStorage.getItem('key'));
		var detalle=2;
		$('#btnscheduledoc').show();
		$('#btnsenddoc').hide();
		getContactContract(id.parcelid,detalle);	
		gettypecontract();	
	});
	
	//GET TEMPLATE EMAIL
	$('#sendEmailDP').on('click',function(){				
		//alert("getptask");
		var id = JSON.parse(localStorage.getItem('key'));
		var detalle=1;
		$('#btnschedule').hide();
		$('#btnsend').show();
		getTemplateEmail();
		getContactEmail(id.parcelid,detalle);
	});
	
	//GET TEMPLATE EMAIL
	$('#sendEmail').on('click',function(){				
		//alert(checkid.length);
		var pid = JSON.parse(localStorage.getItem('pid'));
		$('#btnschedule').hide();
		$('#btnsend').show();
		if (checkid.length==1){
			var detalle=1;
			getTemplateEmail();
			getContactEmail(pid.pid,detalle);
		}else{
			var detalle=2;
			getTemplateEmail();
			getContactEmail(pid.pid,detalle);
		}
		
	});
	
	//OPEN NEW SCHEDULE
	$('#nschedule,#nscheduleDP').on('click',function(){				
		$("#edate").val();
		$("#tooschedule").hide();
		getTemplateSchedule();
		clearLocalStorageSchedule();
	});
	
	//OPEN ADD SCHEDULE
	$('#addSchedule').on('click',function(){				
		$("#edate").val();
		$("#tooschedule").hide();
		getTemplateSchedule();
		clearLocalStorageSchedule();
	});
	

	
	//GET TEMPLATE SMS
	$('#sendSMSDP').on('click',function(){				
		//alert("getptask");
		var id = JSON.parse(localStorage.getItem('key'));
		var detalle=1;
		$('#btnschedulesms').hide();
		$('#btnsendsms').show();
		getTemplateSMS();
		getContactSms(id.parcelid,detalle);
	});
	
	//GET TEMPLATE SMS
	$('#sendSMS').on('click',function(){				
		//alert("getptask");
		var pid = JSON.parse(localStorage.getItem('pid'));
		$('#btnschedulesms').hide();
		$('#btnsendsms').show();
	
		if (checkid.length==1){
			var detalle=1;
			getTemplateSMS();
			getContactSms(pid.pid,detalle);
		}else{
			var detalle=2;
			getTemplateSMS();
			getContactSms(pid.pid,detalle);
		}
		
	});
	
	//GET TEMPLATE FAX
	$('#sendFaxDP').on('click',function(){				
		//alert("getptask");
		var id = JSON.parse(localStorage.getItem('key'));
		var detalle=1;
		$('#btnschedulefax').hide();
		$('#btnsendfax').show();
		getTemplateFAX();
		getContactFax(id.parcelid,detalle);
	});
	
	//GET TEMPLATE FAX
	$('#sendFax').on('click',function(){				
		//alert("getptask");
		var pid = JSON.parse(localStorage.getItem('pid'));
		$('#btnschedulefax').hide();
		$('#btnsendfax').show();
		if (checkid.length==1){
			var detalle=1;
			getTemplateFAX();
			getContactFax(pid.pid,detalle);
		}else{
			var detalle=2;
			getTemplateFAX();
			getContactFax(pid.pid,detalle);
		}
	});
	
	//BOTON LOGIN
	$("#btnLogin").on('click', function () {
		//alert('login');
		processLogin();
	});
		
	//BOTON USED CONTACT
	$("#btnUsesThis").on('click', function () {
		//alert('login');
		usedContact();	
	});
		
	//BOTON USED CONTACT
	$("#btnUsesThisS").on('click', function () {
		//alert('login');
		usedContactS();	
	});
		
	//BOTON INVESTOR OFFER
	$("#getValue").on('click', function () {
		//alert('login');
		getInvestor();
	});
		
	//BOTON INVESTOR OFFER
	$("#getValue2").on('click', function () {
		//alert('login');
		getInvestor2();	
	});
		
	//BOTON SET PRINCIPAL
	$("#btnSetPrincipal,#setPrincContList").on('click', function () {
		//alert('login');
		setAgentPrincipal();	
	});
		
	//BOTON UPDATE MAKE CALL CONTACT
	$("#btnUpdate").on('click', function () {
		//alert('login');
		var id = JSON.parse(localStorage.getItem('agentid'));
		updateContact();	
	});
		
	//BOTON ADD MAKE CALL CONTACT
	$("#btnAdd").on('click', function () {
		//alert('login');
		getAgent();
		addContact();
	});
		
	//BOTON ADD NEW CONTACT
	$("#addContAll").on('click', function () {
		//alert('addd');
		if (booleam==true){
			alert('booleam true');
			usedContact();
			
		}else if (booleam2==true){
			alert('booleam2 true');
			usedContactS();
		}else{
			addAgente();
		}
	});
		
	//BOTON SAVE NEW AGENT CONTACT
	$("#saveCont,#saveCont2").on('click', function () {
		//alert('login');
		addAgente();		
	});
		
	//BOTON REMOVE NEW AGENT CONTACT
	$("#btnRemove,#removeContList").on('click', function () {
		//alert('login');
		removeAgente();		
	});
		
	//BOTON ULTIMO AGENT CONTACT
	$("#imgleft2").on('click', function () {
		//alert('login');
		position=-1; //ultima posicion
		//alert(position);
		getAgentCall(checkid);		
	});
		
	//BOTON AFTER POSICION AGENT CONTACT
	$("#imgleft").on('click', function () {
		//alert('login');
		position++;
		//alert(position);
		getAgentCall(checkid);	
	});
		
	//BOTON PRIMERA POSICION AGENT CONTACT
	$("#imgright").on('click', function () {
		//alert('login');
		position=-2; //primera posicion
		//alert(position);
		getAgentCall(checkid);	
	});
		
	//BUTTON BEFORE AGENT CONTACT
	$("#imgright2").on('click', function () {
		//alert('decrementa');
		position--; //primera posicion
		//alert(position);
		getAgentCall(checkid);	
	});
		
	//CHEQUEA ALL Document
	$('#all').click(function() {
		//alert('alll');
		//$('.checkbox').find('span').addClass('checked');
		$(".check").prop('checked', $(this).prop('checked'));
	});
		
	//BOTON DELETE SEARCH CONTACT 
	$("#xdel").on('click', function () {
		//alert('editar');
		xdelete();
	});
		
	//BOTON DELETE SEARCH CONTACT 
	$("#getContactD").on('click', function () {
		//alert('editar');
		var pid = JSON.parse(localStorage.getItem('key'));
		getContact(pid.parcelid);
	});
		
	//BOTON DELETE SEARCH CONTACT 
	$("#addCP").on('click', function () {
		//alert('editar');
		var pid = JSON.parse(localStorage.getItem('key'));
		pagSearchContact(pid.parcelid)	
	});
		
	$("#backEmailI").on('click', function () {
		//alert('backContacts');
		var id = JSON.parse(localStorage.getItem('seen'));
		
		//document.getElementById('header_two').style.display = "none";
		longEmailInbox(checkid,id.seen);
		
		$('#detalleCorreo ul').empty();
		$('#detalleCorreo ul').html('');
		$('#detalleEmailCab ul').html('');
	});

		
	$("#backReplyEmail,#backForwardEmail").on('click', function () {
		//alert('backContacts');

		$('#infoCorreo ul').html('');
		$('#detalleCorreo ul').empty();
		$('#detalleEmailCab ul').html('');
		$('#detalleCorreoO').empty();
		$('#detalleEmailCabO ul').html('');
			
	});
		
	$("#backEmailO").on('click', function () {
		//alert('backContacts');
		var id = JSON.parse(localStorage.getItem('seen'));
		//document.getElementById('header_two').style.display = "none";
		//longEmailOutbox(checkid,id.seen);
		$('#detalleCorreoO').empty();
		$('#detalleEmailCabO ul').html('');
		
		if (checkid!=''){
			pushh=true;
			longEmailOutbox(checkid,id.seen,pushh);
		}
			
	});
	
	$("#backPending").on('click', function () {
		//alert('backContacts');
		//document.getElementById("detalleEmailCab").innerHTML="";
		document.getElementById('header_two').style.display = "none";	
		longPending(checkid);
		
	});
	
	$("#backCompleted").on('click', function () {
		//alert('backContacts');
		//document.getElementById("detalleEmailCab").innerHTML="";
		document.getElementById('header_two').style.display = "none";	
		longCompleted(checkid);
		
	});
		
	$("#backEdit").on('click', function () {			
		$('#detalleContacto').empty();	
		$('#detalleContacto ul').html('');
		$('#detalleContactoList ul').html('');
		$('#detalleContactoList').empty();	
	
	});
		
	$("#backEditHistory").on('click', function () {
		//alert('edit');
		$('#detallehistorial ul').empty();			
					
	});
		
	$("#backContract,#backSendE,#backSendS,#backSendF,#backFCall").on('click', function () {			
		//$('#detalleContacto').empty();
		$("#temp select").empty();	
		$("#tempFax select").empty();
				
		
		if(checkid==''){
			console.log('vacio');
			var id = JSON.parse(localStorage.getItem('key'));
			longProperties(id.parcelid,push);
		}else{
			console.log('lleno');
			longProperties(checkid,push);
		}

	});
	
	$("#backAdd").on('click', function () {
		$('#detalleContactoAll ul').empty();
	});
	
	$("#backAddHist").on('click', function () {
		$("input#offer").val("");
		$("input#coffer").val("");
		$("textarea#detail").val("");
		$("#taskk option:selected").val("Make Note");
		
	});
	
	
	$('#following-mobile,#following-mobile2,#following-mobile3,#following-mobile4').click(function(){
		//alert(storePosition.topCoordinate);
		storePositionEmail.topCoordinateEmail =  $(this).offset().top-47;
		storePositionTask.topCoordinateTask =  $(this).offset().top-47;
		storePositionContact.topCoordinateContact =  $(this).offset().top-47;
		//storePosition.topCoordinate =  $(this).offset().top-47;
		//alert(storePosition.topCoordinate+"");
		$.mobile.changePage('#followingHtml');
	});
	
	$('#email-mobile,#email-mobile2,#email-mobile3,#email-mobile4').click(function(){
		//alert('email');
		//alert(storePositionEmail.topCoordinateEmail);
		storePosition.topCoordinate =  $(this).offset().top-47;
		storePositionTask.topCoordinateTask =  $(this).offset().top-47;
		storePositionContact.topCoordinateContact =  $(this).offset().top-47;
		//storePositionEmail.topCoordinateEmail =  $(this).offset().top-47;
		//alert(storePositionEmail.topCoordinateEmail+"");
		$.mobile.changePage('#emailHtml');		
	});
	
	$('#task-mobile,#task-mobile2,#task-mobile3,#task-mobile4').click(function(){
		//alert('task');
		//alert(storePositionTask.topCoordinateTask);
		storePosition.topCoordinate =  $(this).offset().top-47;
		storePositionEmail.topCoordinateEmail =  $(this).offset().top-47;
		storePositionContact.topCoordinateContact =  $(this).offset().top-47;
		//storePositionTask.topCoordinateTask =  $(this).offset().top-47;
		//alert(storePositionTask.topCoordinateTask+"");
		$.mobile.changePage('#taskHtml');
	});
	
	$('#contact-mobile,#contact-mobile2,#contact-mobile3,#contact-mobile4').click(function(){
		//alert('contact');	
		//alert(storePositionContact.topCoordinateContact);
		storePosition.topCoordinate =  $(this).offset().top-47;
		storePositionEmail.topCoordinateEmail =  $(this).offset().top-47;	
		storePositionTask.topCoordinateTask =  $(this).offset().top-47;	
		//storePositionContact.topCoordinateContact =  $(this).offset().top-47;	
		//alert(storePositionContact.topCoordinateContact);		
		$.mobile.changePage('#contactsHtml');
	});
	
	$('#inbox-mail,#inbox-mail2').click(function(){
		//alert('contact');	
		storePositionEmail.topCoordinateEmailO =  $(this).offset().top-87;	
		$.mobile.changePage('#emailHtml');	
	});
	
	$('#outbox-mail,#outbox-mail2').click(function(){
		//alert('contact');	
		storePositionEmail.topCoordinateEmail =  $(this).offset().top-87;	
		$.mobile.changePage('#outboxEmailHtml');	
	});
		
		
});

	
$(document).scroll(function () {
	//console.log($(window).scrollTop(),$(document).height(),$(window).height(),$(document).height() - $(window).height());
	
	if (($(document).height() - $(window).height()>0) && ($(window).scrollTop() >= $(document).height() - $(window).height())) {
		//alert("End Of The Page");
		//alert(start);
		//$(".loading-bar").html('Loading...');
		$.mobile.loading;
		console.log(busy,pagina,start);
		
		
		
	switch (pagina){
        case(1):
			if (busy==false){
				//alert('following');
				start = start+$settings.limit; 
				listadoProperty(start,settings.limit);
			}
            break;
        case(2):
			if (busy==false){
				start = start+$settings.limit;
				listadoEmailsInbox(start,settings.limit);
			}
            break;
        case(3):
			if (busy==false){
				//alert('emailO');
				start = start+$settings.limit; 
				listadoEmailsOutbox(start,settings.limit);
			}
            break;
		case(4):
			if (busy==false){
				//alert('contacts');
				start = start+$settings.limit; 
				listadoContacts(start,settings.limit);
			}
            break;
		case(5):
			if (busy==false){
				//alert('hist');
				start = start+$settings.limit; 
				var valor = JSON.parse(localStorage.getItem('key'));
				historyDetail(start,settings.limit,valor.parcelid);
			}
            break;
		case(6):
			if (busy==false){
				//alert('schedule');
				start = start+$settings.limit; 
				var valor = JSON.parse(localStorage.getItem('key'));
				scheduleDetail(start,settings.limit,valor.parcelid);	
			}
            break;
		case(7):
			if (busy==false){
				//alert('email');
				start = start+$settings.limit; 
				var valor = JSON.parse(localStorage.getItem('key'));
				emailDetail(start,settings.limit,valor.parcelid);						
			}
            break;
		case(8):
			if (busy==false){
				//alert('contacts');
				start = start+$settings.limit; 
				listadoPendings(start,settings.limit);						
			}
            break;
		case(9):
			if (busy==false){
				//alert('contacts');
				start = start+$settings.limit; 
				listadoCompleted(start,settings.limit);
			}
            break;
		case(10):
			if (busy==false){
				//alert('contacts');
				start = start+$settings.limit; 
				listadoAllContacts(start,settings.limit);
			}
            break;		
        default:
            //alert('no coinciden con los anteriores');
            break;
    }	
		
	}
});	

/*$(document).on("pagecontainerhide", function (e, ui) {
	if (WURFL.form_factor != "Tablet") {
			window.plugins.orientationchanger.lockOrientation('portrait');
					
	}
				
});*/


$(document).on("pagebeforeshow","#contactsHtml",function(){	
	//alert('page contacts');
	//alert(storePositionContact.topCoordinateContact);
	detectInternet();
	pagina = 4;
	
	$.mobile.silentScroll(storePositionContact.topCoordinateContact);
	
	
	if(loadcontact==false){
		busy=true;
		$("#contacts ul").empty();
		start=0;
		//alert(mainloaded2);
		if(!mainloaded2) {
			//alert('loading')
			$.mobile.loading().show();
		}
		listadoContacts(start,settings.limit);
		cantidadEmail();
	}
	
	$("#phoneContFil").intlTelInput({
		//allowExtensions: true,
		//autoFormat: false,
		//autoHideDialCode: false,
		//autoPlaceholder: false,
		//defaultCountry: "auto",
		//ipinfoToken: "yolo",
		//nationalMode: false,
		//numberType: "MOBILE",
		onlyCountries: ['us', 'gb', 'ch', 'ca', 'do'],
		//preferredCountries: ['cn', 'jp'],
		utilsScript: "http://reifax.com/FollowupReifax/resources/lib/libphonenumber/build/utils.js",
	});
							
});

$(document).on("pagebeforeshow","#followingHtml",function(){	
	//alert('page following');
	//alert(storePosition.topCoordinate);
	detectInternet();
	pagina = 1;
	
	$.mobile.silentScroll(storePosition.topCoordinate);
	
	
	if (load==false){
		busy=true;
		
		$("#content ul").empty();
		start=0;
		listadoProperty(start,settings.limit);
				
		cantidadEmail();
		gettypecontract();
	}
	
	$('#demo').mobipick({
		dateFormat: "MM-dd-yyyy"
	});
		
	$('#demo2').mobipick({
		dateFormat: "MM-dd-yyyy"
	});		
		
							
});

$(document).on("pagebeforeshow","#emailHtml",function(){	
	//alert('page email inbox');
	//alert(storePositionEmail.topCoordinateEmail);
	detectInternet();
	pagina = 2;
	
	$.mobile.silentScroll(storePositionEmail.topCoordinateEmail);
	
	
	
	if(loadmail==false){
		busy=true;
		
		$("#emails ul").empty();
		start=0;
		cantidadEmail();
		listadoEmailsInbox(start,settings.limit);
	}						
});

$(document).on("pagebeforeshow","#outboxEmailHtml",function(){	
	//alert('page email outbox');

	pagina = 3;
	//$.mobile.silentScroll(storePositionEmailO.topCoordinateEmailO);
	
	$.mobile.silentScroll(storePositionEmailO.topCoordinateEmailO);
	
	
	if(loadmailO==false){
		
		busy=true;
		$("#emailsOutbox ul").empty();
		start=0;
		cantidadEmail();
		listadoEmailsOutbox(start,settings.limit);
	}
							
});

$(document).on("pagebeforeshow","#historyFollow",function(){	
	//alert('page history');
	detectInternet();
	pagina = 5;
	$("#historial ul").empty();
	//if(loadhistory==false){
		busy=true;
		
		start=0;
		get='hist';
		var valor = JSON.parse(localStorage.getItem('key'));
		getAddress(valor.parcelid,get);		
		historyDetail(start,settings.limit,valor.parcelid);	
	//}
						
});

$(document).on("pagebeforeshow","#scheduleFollow",function(){	
	//alert('page shedule');
	$("#schedule ul").empty();
	pagina = 6;
	//if(loadschedule==false){
		busy=true;
		
		start=0;
		var valor = JSON.parse(localStorage.getItem('key'));
		//alert(valor.parcelid);
		get='schedule';
		getAddress(valor.parcelid,get);
		scheduleDetail(start,settings.limit,valor.parcelid);	
	//}										
});

$(document).on("pagebeforeshow","#emailFollow",function(){	
	//alert('page email follow');
	detectInternet();
	
	pagina = 7;
	//if(loademail==false){
		busy=true;
		
		start=0;
		var valor = JSON.parse(localStorage.getItem('key'));
		$("#correofollow ul").empty();
		$("#correolistfollow ul").empty();
		get='email';
		getAddress(valor.parcelid,get);
		emailDetail(start,settings.limit,valor.parcelid);
	//}
	$('#dateBetween').mobipick({
		dateFormat: "MM-dd-yyyy"
	});
		
	$('#dateTo').mobipick({
		dateFormat: "MM-dd-yyyy"
	});	
			
	$('#edateAddScheduleEmailFollow').mobipick({
		dateFormat: "MM-dd-yyyy"
	});	
							
});

$(document).on("pagebeforeshow","#taskHtml",function(){	
	//alert('page task Pendings');
	detectInternet();
	pagina = 8;
	//alert(storePositionTask.topCoordinateTask);
	
	$.mobile.silentScroll(storePositionTask.topCoordinateTask);
	
	
	if(loadtask==false){
		
		busy=true;
		$("#pendientes ul").empty();
		start=0;
		listadoPendings(start,settings.limit);
	}	
	$('#schedateP').mobipick({
		dateFormat: "MM-dd-yyyy"
	});
		
	$('#schedateP2').mobipick({
		dateFormat: "MM-dd-yyyy"
	});		
		
	$('#execdateP').mobipick({
		dateFormat: "MM-dd-yyyy"
	});
		
	$('#execdateP2').mobipick({
		dateFormat: "MM-dd-yyyy"
	});	
									
});

$(document).on("pagebeforeshow","#taskCompletedHtml",function(){	
	//alert('page task complete');
	detectInternet();
	pagina = 9;
	
	$.mobile.silentScroll(storePositionTaskC.topCoordinateTaskC);
	
	
	if(loadtaskC==false){
		
		busy=true;
		$("#completados ul").empty();
		start=0;
		listadoCompleted(start,settings.limit);
	}

	
	$('#compdateC').mobipick({
		dateFormat: "MM-dd-yyyy"
	});
		
	$('#compdateC2').mobipick({
		dateFormat: "MM-dd-yyyy"
	});		
							
});

$(document).on("pagebeforeshow","#pagAddContactoHtml",function(){	
	
	cantidadEmail();
});

$(document).on("pagebeforeshow","#formContract2",function(){	
	detectInternet();
	var id = JSON.parse(localStorage.getItem('idtypec'));
	getDocAdd(id.idtypec);
	getCombo();

});

$(document).on("pagebeforeshow","#pagEditPendingHtml",function(){	
	detectInternet();
	$('#edateEditPend').mobipick({
		dateFormat: "MM-dd-yyyy"
	});	
		 					
});


$(document).on("pagebeforeshow","#pagAddScheduleHtml",function(){	
	detectInternet();
	var dateNow = new Date();
	$('#edate').mobipick({
		dateFormat: "yyyy-MM-dd",
		minDate: dateNow
	});		
});

$(document).on("pagebeforeshow","#pagEditScheduleHtml",function(){	
	var dateNow = new Date();
	$('#edateESche').mobipick({
		dateFormat: "yyyy-MM-dd",
		minDate: dateNow
	});		
});

$(document).on("pagebeforeshow","#pagEditHistoryHtml",function(){	
	detectInternet();
	var contr= JSON.parse(localStorage.getItem('key6'));
	//alert(contr.contr);
	if(contr.contr==0){
		document.getElementById('ckVc').style.display = "block";
		document.getElementById('ckFc').style.display = "none";
	}else{
		document.getElementById('ckFc').style.display = "block";
		document.getElementById('ckVc').style.display = "none";
	}	
		
	var pof= JSON.parse(localStorage.getItem('key7'));
	if(pof.pof==0){
		document.getElementById('ckVp').style.display = "block";
		document.getElementById('ckFp').style.display = "none";
	}else{
		document.getElementById('ckFp').style.display = "block";
		document.getElementById('ckVp').style.display = "none";
	}
	
	var emd= JSON.parse(localStorage.getItem('key8'));
	if(emd.emd==0){
		document.getElementById('ckVe').style.display = "block";
		document.getElementById('ckFe').style.display = "none";
	}else{
		document.getElementById('ckFe').style.display = "block";
		document.getElementById('ckVe').style.display = "none";
	}	
	
	var adde= JSON.parse(localStorage.getItem('key9'));
	if(adde.adde==0){
		document.getElementById('ckVa').style.display = "block";
		document.getElementById('ckFa').style.display = "none";
	}else{
		document.getElementById('ckFa').style.display = "block";
		document.getElementById('ckVa').style.display = "none";
	}	
	
	var offre= JSON.parse(localStorage.getItem('key10'));
	if(offre.offre==0){
		document.getElementById('ckVo').style.display = "block";
		document.getElementById('ckFo').style.display = "none";
	}else{
		document.getElementById('ckFo').style.display = "block";
		document.getElementById('ckVo').style.display = "none";
	}	

		
});

$(document).on("pagebeforeshow","#pagEditCompletedHtml",function(){	
	detectInternet();
	var contr= JSON.parse(localStorage.getItem('key6'));
	//alert(contr.contr);
	if(contr.contr==0){
		document.getElementById('ckVECc').style.display = "block";
		document.getElementById('ckFECc').style.display = "none";
	}else{
		document.getElementById('ckFECc').style.display = "block";
		document.getElementById('ckVECc').style.display = "none";
	}	
		
	var pof= JSON.parse(localStorage.getItem('key7'));
	if(pof.pof==0){
		document.getElementById('ckVECp').style.display = "block";
		document.getElementById('ckFECp').style.display = "none";
	}else{
		document.getElementById('ckFECp').style.display = "block";
		document.getElementById('ckVECp').style.display = "none";
	}
	
	var emd= JSON.parse(localStorage.getItem('key8'));
	if(emd.emd==0){
		document.getElementById('ckVECe').style.display = "block";
		document.getElementById('ckFECe').style.display = "none";
	}else{
		document.getElementById('ckFECe').style.display = "block";
		document.getElementById('ckVECe').style.display = "none";
	}	
	
	var adde= JSON.parse(localStorage.getItem('key9'));
	if(adde.adde==0){
		document.getElementById('ckVECa').style.display = "block";
		document.getElementById('ckFECa').style.display = "none";
	}else{
		document.getElementById('ckFECa').style.display = "block";
		document.getElementById('ckVECa').style.display = "none";
	}	
	
	var offre= JSON.parse(localStorage.getItem('key10'));
	if(offre.offre==0){
		document.getElementById('ckVECo').style.display = "block";
		document.getElementById('ckFECo').style.display = "none";
	}else{
		document.getElementById('ckFECo').style.display = "block";
		document.getElementById('ckVECo').style.display = "none";
	}	

		
});

//$("#loginHtml").on("pageinit", function(e) {
$( document ).on( "pageinit", "#loginHtml", function( event ) {
	detectInternet();
	checkPreAuth();
});

function checkPreAuth() {
	var form = $("#loginForm");
	
	var userid = JSON.parse(localStorage.getItem('userid'));
	
	detectInternet();
	//if(user.username != undefined && pass.password != undefined) {
	if(window.localStorage["userid"] != undefined) {
		//alert('existe user');
		//$("#username", form).val(window.localStorage["username"]);
		//$("#password", form).val(window.localStorage["password"]);
		//handleLogin();
		$.mobile.changePage("#followingHtml","slide");
	}else{
		//alert('no existe user');
		$.mobile.changePage("#loginHtml","slide");
	
	}
}


var funciones={
	initAll:function (){
		$('#go').fadeIn(200);
		$('#trPassword,#trquestion,#transwer,#trsupport').hide();
		$("input").attr("required", false);
	},
	findUser:function (e)
	{
		e.preventDefault();
		e.stopPropagation();
		
		if($('input[name=txtEmail]').val()=='')
			return false;
			
		$('#go').fadeOut(200);
		$.ajax({
			type	:'GET',
			data 	: {
				option: 'findData',
				email: $('input[name=txtEmail]').val()
			},
			url		:'http://www.reifax.com/resources/php/funcionesForgotPassword.php',
			dataType:"jsonp",
			
			success	: function (respuesta)
			{
				//console.log(respuesta);
				if(respuesta.success)
				{
					switch(respuesta.estado){
						case (1):
							$('#questionuser').html(respuesta.questionuser);
							$('#trPassword,#trquestion,#transwer').show();
							$("input").attr("required", true);
						break;
						case (8):
							$('#trsupport').show();
						break;
						default:
							$('#trPassword').show();
							$("#trPassword input").attr("required", true);
							
						}
				}
			}
	
		})
		//return false;
	},
	proccess:function (e)
	{
		e.preventDefault();
		e.stopPropagation();

		$('.MsglockScreen').fadeIn();
		$.ajax({
			type	:'GET',
			data 	:'option=proccess&amp;email='+$('input[name=txtEmail]').val()+'&amp;answeruser='+$('input[name=answeruser]').val()+'&amp;pass='+$('input[name=txtPassword]').val(),
			dataType:'jsonp',
			url		:'http://www.reifax.com/resources/php/funcionesForgotPassword.php',
			
			success	: function (respuesta)
						{
							if(respuesta.success)
							{
								if(respuesta.estado==4){
									$('.MsglockScreen').html('successfully processed request');
								}
								else{
									$('.MsglockScreen').html('Email or password is incorrect..!!');
								}
								$('.MsglockScreen').delay(3000).fadeOut(250,function (){document.location = 'index.html'});
								
							}
						}
				})
		}
	}

	
function pdf(){
 
	window.open('http://www.reifax.com/login/pdf/REIFAX_TermsAndConditions.pdf', '_system', 'location=yes');
	
 }
