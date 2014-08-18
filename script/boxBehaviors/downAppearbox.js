
function downAppearbox(id , loctop , locright)
{
    setTimeout(function()
    {
        var element =  document.getElementById(id);
        element.style.top = loctop;
        element.style.right = locright;
    },1000);
    setTimeout(function(){fadeinAndshowBoxJquary(id)},2000);
}