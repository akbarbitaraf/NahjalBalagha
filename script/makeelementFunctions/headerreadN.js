function headerCreator (allText , i)
{
    var firstText = "";
    for( ; allText[i] !='#' ; i++);
    for( i++; allText[i] != "#" ; i++)
    {
        firstText += allText[i];
    }
    var element = '<a style="top: 0; text-align: center; padding: 8px"  class="boxhoverGreen boxBlueReadN boxpositiontypeAb ">' + firstText + '</a>';
    $('#readNPID').contents().find('body').html(element + '<br><br>');
    return i;
}