export class RespuestaUsuario {

    constructor(
        public ok: boolean,
        public msg: string,
        public totalUsuarios?: number,
        public usuarios?: Usuario[],
        public usuario?:Usuario ,
        public comparacion?:boolean,
        public token:string=""
    ) { }

}

export class Usuario {

    constructor(
        public role: string="",
        public google: boolean=false,
        public nombre: string="",
        public email: string="",
        public uid: string="",
        public img:string=""
    ) { }

}