function fadeoutBox(id)
{
    $(document).ready(function()
    {
        $("#"+id).fadeTo(1000,0);
    });
}