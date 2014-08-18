
function akh(id)
{
    fadeoutBox("hes");
    fadeoutBox("mkh");
    fadeoutBox("tkh");
    fadeoutBox("sst");

    movingtocenter(id);

    document.getElementById("arz").className = "boxarz boxGray boxhoverGray boxpositiontypeAb ";

    setTimeout(function(){fadeinAndshowBoxJquary("arz")},1000);

    downAppearbox("hes","79%","0");
    downAppearbox("mkh","79%","11%");
    downAppearbox("tkh","79%","22%");
    downAppearbox("sst","79%","33%");
}