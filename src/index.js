module.exports = function solveEquation(equation) {
  var str=equation;
    str=str.replace(/\s+/g,'');
    var formula;
    formula=str.match(/\-?\d{2,}/g);
    var a=new Number(formula[0]);
    var b=new Number(formula[1]);
    var c=new Number(formula[2]);
    var x1, x2, d;
    d = b*b - 4*a*c;
    x1 = (-b - Math.sqrt(d))/(2*a);
    x2 = (-b + Math.sqrt(d))/(2*a);
    x1=Math.round(x1);
    x2=Math.round(x2);
    if(x2<x1)
    var result=[x2,x1];
    else result=[x1,x2];
    return result;


}
