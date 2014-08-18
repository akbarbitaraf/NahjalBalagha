function TextProcessing(allText , i)
{
    i++;
    var textdetect = "";
    for(; i < allText.length ; i++)
    {
        var boxdetect = "";
        if(allText[i] == "#")
        {
            if(textdetect != "")
            {
                $('#readNPID').ready(function()
                {
                    $('#readNPID').contents().find('body').append("<p>" + textdetect + "</p>");
                });
            }
            for( j = i+1 ; allText[j] != '#' && j < allText.length ; j++)
            {
                boxdetect += allText[j];
            }
            i = j;
            $(document).ready(function()
            {
                $('#readNPID').ready(function()
                {
                    var element = '<a class="boxhoverGreen boxGreenReadN boxpositiontypeAb ">' + "&nbsp;&nbsp;" + boxdetect + '</a>';
                    $('#readNPID').contents().find('body').append(element + '<br><br>');
                });
            });
            textdetect = "";
        }
        else
        {
            textdetect += allText[i];
        }
    }
    if(textdetect != "")
    {
        $('#readNPID').ready(function()
        {
            textdetect = textdetect.replace("br>", " ");
            $('#readNPID').contents().find('body').append('<div>' + textdetect + '</div>');
        });
    }
}