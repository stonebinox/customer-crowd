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
                            <h6 style="margin-bottom: 0 !important; margin-top: 5px;"><img src="${imageURL}" style="border-radius: 50%; width: 50px;">${name}</h6>&nbsp;${fb != "" ? `<a href="${fb}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-facebook"></i></a>` : ''}${twitter != "" ? `&nbsp;<a href="${twitter}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-twitter"></i></a>` : ''}${instagram != "" ? `&nbsp;<a href="${instagram}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-instagram"></i></a>` : ''}${linkedin != "" ? `&nbsp;<a href="${linkedin}" target="_blank" style="color: #51bcda !important;"><i class="fa fa-linkedin"></i></a>` : ''}<br/>
                            <small style="font-size: 10px;">${bio}</small><br/><p style="font-size: 13px !important; text-align: left; text-align: center; margin-bottom: 0 !important;">${review}</p>
                            <table border=0 cellpadding=0 cellspacing=10 align="center" width="100%">
                                <tr style="position: relative;">
                                    <td align="center" width="100%"><small>powered by <a href="http://customercrowd.com" target="_blank" style="color: #51bcda !important;"><strong>CustomerCrowd</strong></a></small></td>
                                    <td align="center" style="position: absolute; right: 0;"><small class="dismiss" id="dismiss" style="display: none; margin-right: 5px; margin-top: 3px;"><a style="text-decoration: none; color: #0056b3;" href="#" onclick="dismiss()">Dismiss</a></small></td>
                                </tr>
                            </table>
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
            }, 13000); 
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