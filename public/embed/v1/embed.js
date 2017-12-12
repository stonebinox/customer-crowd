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
    setTimeout(function() { x.className = x.className.replace("show", ""); }, 10000);
}
$.get('https://customer-crowd.herokuapp.com/api/v1/crowdlies/' + identifier, function(data) {
            setInterval(function() {
                        // var randomNames = Math.floor(Math.random() * data.length);
                        var randomNames = data.pop();
                        var row = data[randomNames];
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
                <div style="width: 20%; float: left;">
					<img src="${imageURL}" class="img-responsive" style="border-radius: 50%; width: 70px;">
                </div>
                <div style="float: right; margin-right: 5px; margin-bottom: 5px;">
                    <small><a href="#" onclick="dismiss()">Dismiss</a></small>
                </div>
				<div style="width: 80%; float: right; margin-top: 5px;">
                    <h4 style="margin-top: -5px;">${name}</h4>&nbsp;${fb != "" ? `<a href="${fb}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-facebook"></i></a>` : ''}${twitter != "" ? `<a href="${twitter}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-twitter"></i></a>` : ''}${instagram != "" ? `<a href="${instagram}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-instagram"></i></a>` : ''}${linkedin != "" ? `<a href="${linkedin}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-linkedin"></i></a>` : ''}<br/>
                    <small>${bio}</small><br/><p style="font-size: 13px !important; text-align: left;">${review}</p>
                    <small>powered by <a href="http://customercrowd.com" target="_blank" style="color: #51bcda !important; margin-top: -10px;"><strong>CustomerCrowd</strong></a></small>
				</div>
			</div>
		` );
	}, 15000);
});