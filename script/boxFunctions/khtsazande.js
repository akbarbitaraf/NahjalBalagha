function khtsazande(id)
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
    GetkhtHText.open("GET", "Nah/kht/1.txt", false);
    GetkhtHText.onreadystatechange = function ()
    {
        if(GetkhtHText.readyState === 4)
        {
            if(GetkhtHText.status === 200 || GetkhtHText.status == 0)
            {
                allText = GetkhtHText.responseText;

                //////////////////////////////
                allText = allText.replace('<!-- Hosting24 Analytics Code --><script type="text/javascript" src="http://stats.hosting24.com/count.php"></script><!-- End Of Analytics Code -->' , "");
                ////////////////////////////////

                allText = allText.replace(/\n/g , "");
                var i = headerCreator(allText);
                TextProcessing(allText , i);
            }
        }
    };
    GetkhtHText.send(null);
}