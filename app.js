
function powerSum(X, N,i) 
{
    if(typeof i === 'undefined')
    {
        i=1;
    }
    let dif = X - Math.pow(i,N);
    if(dif===0)
    {
        return 1;
    }
    if(dif<0)
    {
        return 0;
    }
    i++;
    return powerSum(dif,N,i) + powerSum(X,N,i);
}

console.log(powerSum(10,2))
