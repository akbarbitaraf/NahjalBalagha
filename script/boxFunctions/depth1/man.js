
function man(id)
{
    fadeoutBox("shz");
    fadeoutBox("shh");
    fadeoutBox("kh");
    fadeoutBox("na");
    fadeoutBox("hk");

    fadeoutBox("kht1");

    setTimeout(function()
    {
        hidekht1();
    } , 1100);

    movingtorightCenter("man");

    document.getElementById("akh").className = "boxakh boxBlue boxhoverBlue boxpositiontypeAb ";
    document.getElementById("hes").className = "boxhes boxBlue boxhoverBlue boxpositiontypeAb ";
    document.getElementById("mkh").className = "boxmkh boxBlue boxhoverBlue boxpositiontypeAb ";
    document.getElementById("tkh").className = "boxtkh boxBlue boxhoverBlue boxpositiontypeAb ";
    document.getElementById("sst").className = "boxsst boxBlue boxhoverBlue boxpositiontypeAb ";

    setTimeout(function(){fadeinAndshowBoxJquary("akh")},1000);
    setTimeout(function(){fadeinAndshowBoxJquary("hes")},1000);
    setTimeout(function(){fadeinAndshowBoxJquary("mkh")},1000);
    setTimeout(function(){fadeinAndshowBoxJquary("tkh")},1000);
    setTimeout(function(){fadeinAndshowBoxJquary("sst")},1000);

    downAppearbox("shz","90%","0");
    downAppearbox("shh","90%","11%");
    downAppearbox("kh","90%","22%");
    downAppearbox("na","90%","33%");
    downAppearbox("hk","90%","44%");
}