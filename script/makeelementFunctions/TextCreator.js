function textCreator(path)
{
$(document).ready(function()
    {
        $("#readNPID").show(function ()
        {
            $("#readNPID").fadeTo(1200, 1);
        });
    });
    setTimeout(function()
    {
        document.getElementById("nahfid").className = "grayhtmlclass ";
    } , 1400);

    var allText = "";
    var GetkhtHText = new XMLHttpRequest();

    GetkhtHText.open("GET", path, false);
    GetkhtHText.onreadystatechange = function ()
    {
        if(GetkhtHText.readyState === 4)
        {
            if(GetkhtHText.status === 200 || GetkhtHText.status == 0)
            {
                allText = GetkhtHText.responseText;
                allText = allText.replace(/(\r\n|\n|\r)/gm,'');
                var start = findstart(allText);
                var end = findend(allText , start);
                var i = headerCreator(allText , start);
                TextProcessing(allText , i , end);
            }
        }
    };
    GetkhtHText.send(null);
}