function fadeoutAndHideBoxJquary(id)
{
    $(document).ready(function()
    {
        $("#"+id).fadeTo(1000,0,function()
        {
            $("#"+id).hide();
        });
    });
}