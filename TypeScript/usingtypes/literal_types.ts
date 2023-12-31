//+ in front of the variable
type Combinable=number | string;
type ConversionDescriptor='as-number' | 'as-text';
function combineLiteral(
    input1:Combinable,
    input2:Combinable,
    resultConversion:ConversionDescriptor
    ){
    let result;
    if(typeof input1=='number' && typeof input2=='number' || resultConversion==='as-number'){
        result=+input1 + +input2;
    }else{
        result=input1.toString()+' '+input2.toString();
    }
    
    return result;
}

const combinedAgesNew=combineLiteral(30,26,'as-number');
console.log(combinedAgesNew);