var display=document.getElementById("display"),
value,value1,value2,operatorSign,calculateValue;

function operator(sign)
{
    operatorSign= sign
    display.innerHTML=operatorSign
}




function ce()
{   
    
    display.innerHTML="0"
    operatorSign=undefined
    calculateValue=undefined
    value1=""
    value2=""
    
    
    
}




function cal(num)
{
    num=num.toString()
    if(operatorSign==undefined && calculateValue==undefined)
    {
        if(value1==undefined)
        {
            value1=num
        }
        else
        {
            value1+=num
        }
        display.innerHTML=value1
    }








    else if (calculateValue!==undefined)
    {

        value1=calculateValue
        if(value1==undefined)
        {
            value1=num
        }
        else
        {
            value1+=num
        }
        display.innerHTML=value1

        value2=undefined
        operatorSign=operatorSign
            
        if(value2==undefined)
        {
            value2=num
        }
        
        else
        {
            value2+=num
        }
        display.innerHTML=value2           
    }








    else
    {
         if(value2==undefined)
        {
            value2=num
        }
        
        else
        {
            value2+=num
        }
        display.innerHTML=value2
    }
}

function equal()
{
    value1=parseInt(value1)
    value2=parseInt(value2)
    switch(operatorSign)
    {
        case "-" :
        calculateValue=value1-value2
        break;

        case "+" :
        calculateValue=value1+value2
        break;

        case "*" :
        calculateValue=value1*value2
        break;

        case "/" :
        calculateValue=value1/value2
        break;

        default:
        alert("Enter Any Operator")
        break;


    }
    display.innerHTML=calculateValue
}

