import { IFormulario } from './app.formulario.interface' ;

export class Formulario implements IFormulario {

    private _nombre: string;
    private _direccion: string;
    private _email: string;
    private _codigoPostal: string;

    public get Nombre() {
        return this._nombre;
    }
    public set Nombre(value) {
        this._nombre = value;
    }

    public get Direccion() {
        return this._direccion;
    }
    public set Direccion(value) {
        this._direccion = value;
    }

    public get Email() {
        return this._email;
    }
    public set Email(value) {
        this._email = value;
    } 

    public get CodigoPostal() {
        return this._codigoPostal;
    }
    public set CodigoPostal(value) {
        this._codigoPostal = value;
    } 

}