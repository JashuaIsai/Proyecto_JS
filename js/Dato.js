const _privado = new WeakMap();
class Dato {
    constructor(descripcion, valor) {
        const datos = {
            _descripcion: descripcion,
            _valor: valor,
        }
        _privado.set(this, { datos });
    }
    get descripcion() {
        return _privado.get(this).datos['_descripcion'];
    }

    set descripcion(newDescripcion) {
        return _privado.get(this).datos['_descripcion'] = newDescripcion;
    }
    get valor() {
        return _privado.get(this).datos['_valor'];
    }

    set valor(newValor) {
        return _privado.get(this).datos['_valor'] = newValor;
    }

}