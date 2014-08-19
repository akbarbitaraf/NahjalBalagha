function findstart(alltext)
{

    var t = 0;
    for( ; alltext[t] != '~' && alltext[t+1] != '~'; t++);
    return t+2;
}