class Egreso extends Dato {
    _id = 0;
    constructor(descripcion = [], valor = []) {
        super(descripcion, valor);
    }
    _id = 1;
    get id() {
        return this._id;
    }

}
