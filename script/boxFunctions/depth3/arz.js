function arz(id)
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
    var GetarzHText = new XMLHttpRequest();
    GetarzHText.open("GET", "Nah/other/man/arzH.html", false);
    GetarzHText.onreadystatechange = function ()
    {
        if(GetarzHText.readyState === 4)
        {
            if(GetarzHText.status === 200 || GetarzHText.status == 0)
            {
                allText = GetarzHText.responseText;
                allText = allText.replace(/\n/g , "");
                var i = headerCreator(allText);
                TextProcessing(allText , i);
            }
        }
    };
    GetarzHText.send(null);
}