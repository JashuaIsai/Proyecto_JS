const ingresos = new Ingreso(["Salario", "Venta Auto", "Comisiones"], [20000, 50000, 25000]);
const egresos = new Egreso(["Renta", "Ropa"], [4000, 800]);
const d = document;
var acumuladorI = "";
var acumuladorE = ""
cargarCabecero = () => {
    var presupuesto = totalIngresos() - totalEgresos();
    var porcentajeEgreso = totalEgresos() / totalIngresos();

    d.querySelector("#presupuesto").innerHTML = ` ${formatoMoneda(presupuesto)}`;
    d.querySelector("#ingresos").innerHTML = ` ${formatoMoneda(totalIngresos())}`;
    d.querySelector("#egresos").innerHTML = ` ${formatoMoneda(totalEgresos())}`;
    d.querySelector("#porcentaje").innerHTML = ` ${formatoPorcentaje(porcentajeEgreso)}`;

}
totalIngresos = () => {
    var totalIngreso = 0;
    for (let ingreso = 0; ingreso < ingresos.valor.length; ingreso++) {
        totalIngreso = totalIngreso + ingresos.valor[ingreso];
    }
    return totalIngreso;
}
totalEgresos = () => {

    var totalEgreso = 0;
    for (let egreso = 0; egreso < egresos.valor.length; egreso++) {
        totalEgreso = totalEgreso + egresos.valor[egreso];
    }
    return totalEgreso;
}
formatoMoneda = (valorMoneda) => {
    var formato = valorMoneda.toLocaleString("es-MX", {
        style: "currency",
        currency: "MXN"
    });
    return formato;
}
formatoPorcentaje = (valorPorcentaje) => {
    var fPorcen = valorPorcentaje.toLocaleString("es-MX", {
        style: "percent",
        minimumFractionDigits: 2

    });
    return fPorcen;

}

cargarIngresos = () => {
    let $insertIngresoHML = d.getElementById("lista-ingresos");
    for (let ingreso = 0; ingreso < ingresos.valor.length; ingreso++) {
        var inserta = crearIngresoHTML(ingresos.descripcion[ingreso], formatoMoneda(ingresos.valor[ingreso]), ingreso);
        var ingresosHTML = `<div class="elemento limpiarEstilos">${inserta}</div>`;
        acumuladorI = acumuladorI + ingresosHTML;
        console.log("aqui esta el acumulador: " + acumuladorI);

    }
    $insertIngresoHML.innerHTML = ` ${acumuladorI} `;


}

crearIngresoHTML = (ingresod, ingresov, ingreso) => {
    let valorHTML = `<div class="elemento_valor"> ${ingresov}</div>`;
    let botonHTML = `<div class="elemento_eliminar"> <button onclick="eliminarIngreso(${ingreso})" class="elemento_eliminar--btn"><ion-icon name='close-circle'></ion-icon></button></div>`;
    let ingresoHTML = `<div class="elemento_descripcion">${ingresod}</div> <div class="derecha">${valorHTML}${botonHTML}</div>`;

    return ingresoHTML;
}
function eliminarIngreso(id) {
    acumuladorI = "";
    console.log(id);
    ingresos.valor.splice(id, 1);
    ingresos.descripcion.splice(id, 1);
    console.log(ingresos);
    cargarIngresos();
    cargarCabecero();
}

cargarEgresos = () => {
    let $insertEgresoHML = d.getElementById("lista-egresos");
    for (let egreso = 0; egreso < egresos.valor.length; egreso++) {
        var inserta = crearEgresoHTML(egresos.descripcion[egreso], formatoMoneda(egresos.valor[egreso]), egreso);
        var egresosHTML = `<div class="elemento limpiarEstilos">${inserta}</div>`;
        acumuladorE = acumuladorE + egresosHTML;
        console.log("aqui esta el acumulador: " + acumuladorE);

    }
    $insertEgresoHML.innerHTML = ` ${acumuladorE} `;


}
crearEgresoHTML = (egresod, egresov, egreso) => {
    let valorHTML = `<div class="elemento_valor"> ${egresov}</div>`;
    let botonHTML = `<div class="elemento_eliminar"> <button onclick="eliminarEgreso(${egreso})" class="elemento_eliminar--btn"><ion-icon name='close-circle'></ion-icon></button></div>`;
    let egresoHTML = `<div class="elemento_descripcion">${egresod}</div> <div class="derecha">${valorHTML}${botonHTML}</div>`;

    return egresoHTML;
}

eliminarEgreso = (id) => {
    acumuladorE = "";
    console.log(id);
    egresos.valor.splice(id, 1);
    egresos.descripcion.splice(id, 1);
    console.log(egresos);
    cargarEgresos();
    cargarCabecero();
}
agregarDato = () => {
    var $forma = d.getElementById('forma').value;
    var $tipo = d.getElementById('tipo').value;
    var $desc = d.getElementById('descripcion').value;
    var $valor = parseInt(d.getElementById('valor').value);
    if ($desc != '' && $valor > 0) {
        if ($tipo == 'egreso') {
            egresos.valor.push($valor);
            egresos.descripcion.push($desc);
            acumuladorE = "";
            cargarEgresos();
            cargarCabecero();
        } else
            if ($tipo == 'ingreso') {
                ingresos.valor.push($valor);
                ingresos.descripcion.push($desc);
                acumuladorI = "";
                cargarIngresos();
                cargarCabecero();
            }

    } else
        alert("No puedes dejar registros en blanco");




}

function cargarApp() {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}