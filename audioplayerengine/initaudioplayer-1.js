jQuery(document).ready(function(){
    var scripts = document.getElementsByTagName("script");
    var jsFolder = "";
    for (var i= 0; i< scripts.length; i++)
    {
        if( scripts[i].src && scripts[i].src.match(/initaudioplayer-1\.js/i))
            jsFolder = scripts[i].src.substr(0, scripts[i].src.lastIndexOf("/") + 1);
    }
    jQuery("#amazingaudioplayer-1").amazingaudioplayer({
        jsfolder:jsFolder,
        skinsfoldername:"",
        tracklistarrowimage:"tracklistarrow-48-16-0.png",
        timeformatlive:"%CURRENT% / LIVE",
        volumeimagewidth:24,
        barbackgroundimage:"IMG-20170918-WA0038.jpg",
        tracklistarrowimageheight:16,
        showtime:true,
        titleinbarwidth:400,
        showprogress:true,
        random:true,
        titleformat:"%TITLE%",
        height:1000,
        loopimage:"loop-24-24-0.png",
        prevnextimage:"prevnext-24-24-0.png",
        showinfo:true,
        imageheight:500,
        skin:"Jukebox",
        responsive:true,
        loopimagewidth:24,
        showstop:true,
        prevnextimageheight:24,
        infoformat:"%ARTIST% %ALBUM%<br />%INFO%",
        tracklistbackgroundimage:"IMG-20170918-WA0034.jpg",
        showloading:true,
        forcefirefoxflash:true,
        tracklistscroll:true,
        preloadaudio:true,
        showvolumebar:true,
        imagefullwidth:true,
        width:1000,
        showimage:true,
        showloop:true,
        volumeimage:"volume-24-24-0.png",
        playpauseimagewidth:24,
        loopimageheight:24,
        tracklistitemformat:"<div class='amazingaudioplayer-item-id'>%ID%</div><div class='amazingaudioplayer-item-info'>%DURATION%</div><div class='amazingaudioplayer-item-title'>%TITLE%</div>",
        prevnextimagewidth:24,
        titleinbarwidthmode:"fixed",
        forceflash:true,
        tracklistarrowimagewidth:400,
        playpauseimageheight:24,
        showbackgroundimage:false,
        stopimage:"stop-24-24-0.png",
        showvolume:true,
        playpauseimage:"playpause-24-24-0.png",
        forcehtml5:true,
        showprevnext:true,
        backgroundimage:"IMG-20170921-WA0019.jpg",
        loadingformat:"Loading...",
        progressheight:10,
        showtracklistbackgroundimage:true,
        titleinbarscroll:true,
        showtitle:true,
        defaultvolume:100,
        showtitleinbar:true,
        heightmode:"auto",
        titleinbarformat:"%TITLE%",
        showtracklist:true,
        stopimageheight:24,
        volumeimageheight:24,
        stopimagewidth:24,
        volumebarheight:80,
        noncontinous:false,
        stopotherplayers:true,
        showbarbackgroundimage:false,
        volumebarpadding:10,
        imagewidth:500,
        timeformat:"%CURRENT% / %DURATION%",
        autoplay:true,
        fullwidth:true,
        loop:1,
        tracklistitem:10
    });
});