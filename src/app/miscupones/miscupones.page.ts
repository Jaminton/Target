import { Component, OnInit } from '@angular/core';
import { CuponesService, cudata } from "../servicios/cupones.service";
import { AuthService } from "../servicios/auth.service";
import { ModalController} from "@ionic/angular";
import { CuponComponent } from "../componentes/cupon/cupon.component"; 




@Component({
  selector: 'app-miscupones',
  templateUrl: './miscupones.page.html',
  styleUrls: ['./miscupones.page.scss'],
})
export class MiscuponesPage implements OnInit {

  public cupones: any = [];

  constructor(public authservice: AuthService, public cuponservice: CuponesService,
    private modal: ModalController
    
    ) { }

  ngOnInit() {
 
    this.cuponservice.getCupones().subscribe(cudata => {
   
        this.cupones = cudata; 

    })

  }

  openCupon(cudata){


  this.modal.create({

  component: CuponComponent,
  componentProps:{

    titulo: cudata.titulo,
    estado: cudata.estado,
    fecha: cudata.fecha,
    img: cudata.img
  }

  

        }).then((modal) => modal.present())


  }

}
