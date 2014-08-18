function headerCreator (allText)
{
    var firstText = "";
    var i = 1;
    for( ; allText[i] != "#" ; i++)
    {
        firstText += allText[i];
    }

    var element = '<a style="top: 0; text-align: center; padding: 8px"  class="boxhoverGreen boxBlueReadN boxpositiontypeAb ">' + firstText + '</a>';
    $('#readNPID').contents().find('body').html(element + '<br><br>');
    return i + 1;
}