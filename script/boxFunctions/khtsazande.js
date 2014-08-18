function khtsazande(number)
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
    var path = "Nah/kht/"+number.toString()+".txt";
    GetkhtHText.open("GET", path, false);
    GetkhtHText.onreadystatechange = function ()
    {
        if(GetkhtHText.readyState === 4)
        {
            if(GetkhtHText.status === 200 || GetkhtHText.status == 0)
            {
                allText = GetkhtHText.responseText;
                allText = allText.replace(/\n/g , "");
                var i = headerCreator(allText);
                TextProcessing(allText , i);
            }
        }
    };
    GetkhtHText.send(null);
}