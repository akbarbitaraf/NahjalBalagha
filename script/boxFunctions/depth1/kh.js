function kh(id)
{
    fadeoutBox("shz");
    fadeoutBox("shh");
    fadeoutBox("man");
    fadeoutBox("na");
    fadeoutBox("hk");

    movingtorightCenter("kh");

    document.getElementById("kht1").className = "boxakh boxBlue boxhoverBlue boxpositiontypeAb ";

    setTimeout(function(){fadeinAndshowBoxJquary("kht1")},1000);

    downAppearbox("shz","90%","0");
    downAppearbox("shh","90%","11%");
    downAppearbox("man","90%","22%");
    downAppearbox("na","90%","33%");
    downAppearbox("hk","90%","44%");
}