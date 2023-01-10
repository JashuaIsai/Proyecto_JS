cargarCabecero = () => {
    var presupuesto = totalIngresos() - totalEgresos();
    var porcentajeEgreso = totalEgresos() / totalIngresos();
    console.log(formatoMoneda(presupuesto));
    console.log(formatoPorcentaje(porcentajeEgreso));
    console.log(formatoMoneda(totalIngresos()));
    console.log(formatoMoneda(totalEgresos()));
}
totalIngresos = () => {
    var ingresos = [9000, 400];
    var totalIngreso = 0;
    for (const ingreso of ingresos) {
        totalIngreso = totalIngreso + ingreso;
    };
    return totalIngreso;
}
totalEgresos = () => {
    var egresos = [900, 400]
    var totalEgreso = 0;
    for (let egreso = 0; egreso < egresos.length; egreso++) {
        totalEgreso = totalEgreso + egresos[egreso];
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
