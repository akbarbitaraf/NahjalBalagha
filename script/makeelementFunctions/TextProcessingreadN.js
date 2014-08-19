function TextProcessing(allText , start , end)
{
    for( ; allText[start] !='#' ; start++);
    start++;
    var textdetect = "";
    for( ; start < allText.length && start < end; start++)
    {
        var boxdetect = "";
        if(allText[start] == "#")
        {
            if(textdetect != "")
            {
                $('#readNPID').ready(function()
                {
                    $('#readNPID').contents().find('body').append("<p>" + textdetect + "</p>");
                });
            }
            for( j = start+1 ; allText[j] != '#' && j < allText.length ; j++)
            {
                boxdetect += allText[j];
            }
            start = j;
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
            textdetect += allText[start];
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