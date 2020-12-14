

var vgsPlayer, poster;

vgsPlayer = videojs('vid1', {
    techOrder: ["html5", "flash", "youtube"],
    autoplay: false,
    youtube: { "iv_load_policy": 3 },
    sources: [{
        type: "video/mp4",
        src: ""
    }]
});

vgsPlayer.poster('');


jQuery(function ($) {

    $("#vsg-loadvideo").submit(function (e) {
        e.preventDefault();

        var vidURL = $("#vsg-vurl").val();

        vsgLoadVideo(vidURL);

    });

});

function vsgLoadVideo(vidURL, poster) {

    if (ytVidId(vidURL) !== false) {
        ext = "youtube"
        console.log('Youtube');


    } else {


        if (!ext) ext = "mp4";
        var ext = vidURL.split('.').pop();
    }

    console.log(ext);

    vgsPlayer.src({

        "type": "video/" + ext,
        "src": vidURL

    });
    if (poster) vgsPlayer.poster(poster);
    vgsPlayer.play();

}


function ytVidId(url) {

    var p = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    return (url.match(p)) ? RegExp.$1 : false;
}



function getId(url) {
    var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);

    if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }
}


/********* LOAD URL *********/
$('#vidlink li a').on('click', function (e) {
    e.preventDefault();
    var vidlink = $(this).attr('href');
    vsgLoadVideo(vidlink);
    $('#vsg-vurl').val(vidlink);
});
