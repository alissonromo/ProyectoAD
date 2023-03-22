export interface Prioridad {
  TN_ID: number;
  TB_Eliminado: boolean;
  TB_Estado: boolean;
  TC_Nombre: string;
}

export class Prioridad implements Prioridad {

  constructor(public TC_Nombre: string) {
    this.TB_Eliminado = false;
    this.TB_Estado = false;
  };


}