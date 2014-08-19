function findend(alltext , start)
{
    var t = start;
    for( ; alltext[t] != '~' ; t++);
    return t;
}