var app=angular.module("ccrowd",[]);
app.controller("data",function($scope,$http){
	$scope.getData=function(){
		$http.get("http://customer-crowd.herokuapp.com/api/v1/crowdlies/1")
		.then(function success(response){
			response=response.data;
			//the above var would be json automatically
			setTimeout(function(){
                var data=response;
                for(var i=0;i<data.length;i++){
                    var row=data[i];
                    var id=row.id;
                    var userID=row.user_id;
                    var name=row.name;
                    var image=row.image;
                    var imageURL=image.url;
                    var bio=row.bio;
                    var fb=row.facebook;
                    var twitter=row.twitter;
                    var insta=row.instagram;
                    var linkedin=row.linkedin;
                    var review=row.review;
                    var createdAT=row.created_at;
                    var updatedAt=row.updated_at;
                    //build ui content here. 
                    // var content='<div><h1 style="color: #000;">'+userID+', '+name+'</h1></div>';
                    // messageBox(title,content);
                    console.log(name);
                }   
            },10000);  
		},
		function error(response){
			console.log("Network error");
		});
	};
});
// function getData(){
//     $.ajax({
// 		url:"http://customer-crowd.herokuapp.com/api/v1/crowdlies/1",
// 		jsonp: "callback",
// 		dataType: "jsonp",
// 		data:{
// 			format: "json"
// 		},
//         error: function(xhr,stat,err){
//             console.log("Network error");
//         },
//         success:function(responseText){
//             setTimeout(function(){
//                 var data=responseText;
//                 for(var i=0;i<data.length;i++){
//                     var row=data[i];
//                     var id=row.id;
//                     var userID=row.user_id;
//                     var name=row.name;
//                     var image=row.image;
//                     var imageURL=image.url;
//                     var bio=row.bio;
//                     var fb=row.facebook;
//                     var twitter=row.twitter;
//                     var insta=row.instagram;
//                     var linkedin=row.linkedin;
//                     var review=row.review;
//                     var createdAT=row.created_at;
//                     var updatedAt=row.updated_at;
//                     //build ui content here. 
//                     //var content='<div>content here</div>';
//                     //messageBox(title,content);
//                 }   
//             },10000);  
// 		}
//     });
// }
function messageBox(title,content,sizeFlag){
    title=$.trim(title);
	var modal=document.getElementById("myModal");
	$(modal).html('');
    if(sizeFlag==0){
        sizeFlag='modal-sm';
    }
    else{
        sizeFlag='modal-lg';
	}
	var dialog=document.createElement("div");
	$(dialog).addClass("modal-dialog "+sizeFlag);
		var modalContent=document.createElement("div");
		$(modalContent).addClass("modal-content");
			var modalHeader=document.createElement("div");
			$(modalHeader).addClass("modal-header");
				var close=document.createElement("a");
				$(close).attr("href","#");
				$(close).attr("data-dismiss","modal");
				$(close).html('&times;');
				$(close).addClass("close");
				$(modalHeader).append(close);
				var h4=document.createElement("h4");
				$(h4).addClass("modal-title");
				$(h4).html(title);
				$(modalHeader).append(h4);
			var modalBody=document.createElement("div");
			$(modalBody).addClass("modal-body");
				var p=document.createElement("p");
				$(p).append(content);
				$(modalBody).append(p);
			var modalFooter=document.createElement("div");
			$(modalFooter).addClass("modal-footer");
				var closebut=document.createElement("button");
				$(closebut).attr("type","button");
				$(closebut).attr("data-dismiss","modal");
				$(closebut).addClass("btn btn-default");
				$(closebut).html("Close");
				$(modalFooter).append(closebut);
			$(modalContent).append(modalHeader);
			$(modalContent).append(modalBody);
			$(modalContent).append(modalFooter);
		$(dialog).append(modalContent);
	$(modal).append(dialog);
	$("#myModal").modal("show");
}