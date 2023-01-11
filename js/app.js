const ingresos =new Ingreso(["Salario","Venta Auto"],[20000,50000]);
const egresos =new Egreso(["Renta","Ropa"],[4000,800]);
cargarCabecero = () => {
  var presupuesto = totalIngresos() - totalEgresos();
    var porcentajeEgreso = totalEgresos() / totalIngresos();
    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));
}
totalIngresos = () => {
        var totalIngreso = 0;
       for (let ingreso = 0; ingreso<ingresos.valor.length; ingreso++) {
        totalIngreso = totalIngreso + ingresos.valor[ingreso];
    }
    return totalIngreso;
}
totalEgresos = () => {
/* var egresos = [900, 400]*/
    var totalEgreso = 0;
    for (let egreso = 0; egreso < egresos.valor.length; egreso++) {
        totalEgreso = totalEgreso + egresos.valor[egreso];
        }
    return totalEgreso;
}
formatoMoneda = (valorMoneda)=>{
var formato=valorMoneda.toLocaleString("es-MX",{
	style: "currency",
	currency: "MXN"
});
return formato;
}
formatoPorcentaje=(valorPorcentaje)=>{
 var fPorcen=valorPorcentaje.toLocaleString("es-MX",{
	style: "percent",
    minimumFractionDigits: 2 
    
});
return fPorcen;

}
