function dismiss() {
    // Get the snackbar DIV
    var x = document.getElementById("popup");

    // Delete the snackbar DIV
    x.parentNode.removeChild(x);

}

function myFunction() {

    // Get the snackbar DIV
    var x = document.getElementById("popup");

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 10000);
}

function loadItem(crowdlies, pos) {
    if ((crowdlies[pos] != null) && (crowdlies[pos] != undefined)) {
        var row = crowdlies[pos];
        //begin do something
        var name = row.name;
        var imageURL = row.image.url;
        var bio = row.bio;
        var fb = row.facebook;
        var twitter = row.twitter;
        var instagram = row.instagram;
        var linkedin = row.linkedin;
        var review = row.review;
        myFunction();
        $("#popup").html(`
                <div id="snackbar">
                        <div style="">
                                <h5 style="margin-bottom: 0 !important;"><img src="${imageURL}" style="border-radius: 50%; width: 50px;">${name}</h5>&nbsp;${fb != "" ? `<a href="${fb}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-facebook"></i></a>` : ''}${twitter != "" ? `&nbsp;<a href="${twitter}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-twitter"></i></a>` : ''}${instagram != "" ? `&nbsp;<a href="${instagram}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-instagram"></i></a>` : ''}${linkedin != "" ? `&nbsp;<a href="${linkedin}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-linkedin"></i></a>` : ''}<br/>
                                <small style="font-size: 10px;">${bio}</small><br/><p style="font-size: 13px !important; text-align: left; text-align: center; margin-bottom: 0 !important;">${review}</p>
                                <small>powered by <a href="http://customercrowd.com" target="_blank" style="color: #51bcda !important; margin-top: -10px;"><strong>CustomerCrowd</strong></a></small><small class="dismiss" id="dismiss" style="display: none; float: right;"><a style="text-decoration: none;" href="#" onclick="dismiss()">Dismiss</a></small>
                        </div>
                </div>
        ` );
        //end do something
        pos += 1;
        if (pos >= crowdlies.length) {
            pos = 0;
        }
        setTimeout(function() {
            loadItem(crowdlies, pos);
        }, 13000); //ten second timeout
    }
}
$.get('https://customer-crowd.herokuapp.com/api/v1/crowdlies/' + identifier, function(data) {
    loadItem(data, 0);
});
var e = document.getElementById('popup');
e.onmouseover = function() {
    document.getElementById('dismiss').style.display = 'block';
}
e.onmouseout = function() {
    document.getElementById('dismiss').style.display = 'none';
}

// function dismiss() {
//     // Get the snackbar DIV
//     var x = document.getElementById("popup");

//     // Delete the snackbar DIV
//     x.parentNode.removeChild(x);

// }

// function myFunction() {

//     // Get the snackbar DIV
//     var x = document.getElementById("popup");

//     // Add the "show" class to DIV
//     x.className = "show";

//     // After 3 seconds, remove the show class from DIV
//     setTimeout(function() { x.className = x.className.replace("show", ""); }, 10000);
// }
// $.get('https://customer-crowd.herokuapp.com/api/v1/crowdlies/' + identifier, function(data) {
//             setInterval(function() {
//                         var randomNames = Math.floor(Math.random() * data.length);
//                         // var randomNames = data.pop();
//                         // console.log(randomNames.id);
//                         var row = data[randomNames];
//                         var name = row.name;
//                         var imageURL = row.image.url;
//                         var bio = row.bio;
//                         var fb = row.facebook;
//                         var twitter = row.twitter;
//                         var instagram = row.instagram;
//                         var linkedin = row.linkedin;
//                         var review = row.review;
//                         myFunction();
//                         $("#popup").html(`
// 			<div id="snackbar">
//                 <div style="width: 20%; float: left;">
// 					<img src="${imageURL}" class="img-responsive" style="border-radius: 50%; width: 70px;">
//                 </div>
//                 <div style="float: right; margin-right: 5px; margin-bottom: 5px;">
//                     <small><a href="#" onclick="dismiss()">Dismiss</a></small>
//                 </div>
// 				<div style="width: 80%; float: right; margin-top: 5px;">
//                     <h4 style="margin-top: -5px;">${name}</h4>&nbsp;${fb != "" ? `<a href="${fb}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-facebook"></i></a>` : ''}${twitter != "" ? `<a href="${twitter}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-twitter"></i></a>` : ''}${instagram != "" ? `<a href="${instagram}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-instagram"></i></a>` : ''}${linkedin != "" ? `<a href="${linkedin}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-linkedin"></i></a>` : ''}<br/>
//                     <small>${bio}</small><br/><p style="font-size: 13px !important; text-align: left;">${review}</p>
//                     <small>powered by <a href="http://customercrowd.com" target="_blank" style="color: #51bcda !important; margin-top: -10px;"><strong>CustomerCrowd</strong></a></small>
// 				</div>
// 			</div>
// 		` );
// 	}, 15000);
// });