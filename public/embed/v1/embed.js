function myFunction() {
	// Get the snackbar DIV
	var x = document.getElementById("popup");

	// Add the "show" class to DIV
	x.className = "show";

	// After 3 seconds, remove the show class from DIV
	setTimeout(function() { x.className = x.className.replace("show", ""); }, 5000);
}
$.get('https://customer-crowd.herokuapp.com/api/v1/crowdlies/1', function(data) {
	setInterval(function() {
		var randomNames = Math.floor(Math.random() * data.length);
		var row = data[randomNames];
		var name = row.name;
		var imageURL = "https://customer-crowd.herokuapp.com" + row.image.url;
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
							<img src="${imageURL}" class="img-responsive" style="border-radius: 50%; width: 100px;">
					</div>
					<div style="width: 80%; float: right;">
							<h4>${name}</h4>&nbsp;${fb != "" ? `<a href="${fb}" target="_blank"><i class="fa fa-facebook"></i></a>` : ''}${twitter != "" ? `<a href="${twitter}" target="_blank"><i class="fa fa-twitter"></i></a>` : ''}${instagram != "" ? `<a href="${instagram}" target="_blank"><i class="fa fa-instagram"></i></a>` : ''}${linkedin != "" ? `<a href="${linkedin}" target="_blank"><i class="fa fa-linkedin"></i></a>` : ''}<br/>
							<small>${bio}</small><br/><p><strong>${review}</strong></p><br/>
							<small>powered by <a href="http://customercrowd.com" target="_blank"><strong>CustomerCrowd</strong></a></small>
					</div>
				</div>
		` );
		}, 10000);
});