import { Injectable } from '@angular/core';
import { MatDialog, MatSnackBar } from '@angular/material';
import { ComponentType } from '@angular/core/src/render3';

@Injectable()
export class MessageServiceUtil {

    constructor(
        private dialog: MatDialog,
        private snackBar: MatSnackBar
    ) { }

    public handleNetRequestError(error: any): void {

            this.snack("Error de comunicación con el servidor." + error.json().message);
    }

  

    public openSuccessfulNetworkIn(type: string): void {
        this.snack(`${type} se ha registrado satisfactoriamente.`);
    }

    public openSuccessfulNetworkDelete(type: string): void {
        this.snack(`${type} se ha eliminado satisfactoriamente.`);
    }

    public snack(message: string): void {
        this.snackBar.open(message, 'Aceptar', {
            duration: 2000
        });
    }

    public openCustomModal<T>(modal:any, data: any, closure: (res) => void) {
        const dialog = this.dialog.open(modal, {
            width: '75%',
            height: '90%',
            data
        });
        dialog.afterClosed().subscribe(
            res => {
                if (res) {
                    closure(res);
                }
                if(res== undefined)
                {
                    closure(res);
                }
            }
        );
    }

}