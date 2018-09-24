module.exports = function solveEquation(equation) {

    equation=equation.replace(/\s+/g,'');
    let formula;
    formula=equation.match(/\-?\d{2,}/g);
    const A=new Number(formula[0]);
    const B=new Number(formula[1]);
    const C=new Number(formula[2]);
    let x1, x2, d;
    d = B*B - 4*A*C;
    x1 = (-B - Math.sqrt(d))/(2*A);
    x2 = (-B + Math.sqrt(d))/(2*A);
    x1=Math.round(x1);
    x2=Math.round(x2);
    let result;
    if(x2<x1)
     result=[x2,x1];
    else result=[x1,x2];
    return result;
}
