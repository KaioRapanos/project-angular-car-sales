import { Injectable } from '@angular/core';
import Swal, {SweetAlertIcon} from 'sweetalert2';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor() { }

  private showAlert(title: string, message: string, icon: SweetAlertIcon) : void{
    Swal.fire(title, message, icon);
  }

  public success(message: string, title?: string): void {
    title = title ?? '',
    this.showAlert(title,message,"success");
  }

  public info(message: string, title?: string): void {
    title = title ?? '',
    this.showAlert(title,message,"info");
  }
  public error(message: string, title?: string): void {
    title = title ?? '',
    this.showAlert(title,message,"error");
  }

}
