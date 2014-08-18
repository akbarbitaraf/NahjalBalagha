function movingtorightCenter(id)
{
    var element = document.getElementById(id);
    var SaveClass = element.className;
    element.className += "boxAnimationConfigMovetorightCenter";
    setTimeout(function()
    {
        element.style.top = "43%";
        element.style.right = 0;
        element.className = SaveClass;
    } , 3000);
}
function movingtocenter(id)
{
    var element = document.getElementById(id);
    var SaveClass = element.className;
    element.className += "boxAnimationConfigMovetocenter";
    setTimeout(function()
    {
        element.style.top = "43%";
        element.className = SaveClass;
    } , 3000);
}