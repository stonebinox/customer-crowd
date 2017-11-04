console.log("b");
var app=angular.module("ccrowd",[]);
app.controller("data",function($scope,$http){
    console.log("space");
    $scope.getData=function(){
        console.log("here");
        $http.jsonp("http://customer-crowd.herokuapp.com/api/v1/crowdlies/1?callback=JSON_CALLBACK")
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
