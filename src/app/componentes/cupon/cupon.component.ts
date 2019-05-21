import { Component, OnInit } from '@angular/core';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';
import { NavParams, ModalController } from '@ionic/angular';
//import { } from '@ionic/angular';


@Component({
  selector: 'app-cupon',
  templateUrl: './cupon.component.html',
  styleUrls: ['./cupon.component.scss']
})
export class CuponComponent implements OnInit {

  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;
  encodeData = this.generarContraseña(8);

  public titulo : string; 

  constructor(private barcodeScanner: BarcodeScanner, private navparams: NavParams, private modal: ModalController) { }

  ngOnInit() {

    this.titulo = this.navparams.get('titulo'); 

     //Options
     this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
      
    };
  }

  encodedText() {
 
    this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then((encodedData) => {
      console.log(encodedData);
      this.encodeData = encodedData;
    }, (err) => {
      console.log("Error occured : " + err);
    });
  }

  generarContraseña(longitud)
{
  let i=0;
  var caracteres = "abcdefghijkmnpqrtuvwxyzABCDEFGHIJKLMNPQRTUVWXYZ2346789";
  var contraseña = "";
  for (i=0; i<longitud; i++) contraseña += caracteres.charAt(Math.floor(Math.random()*caracteres.length));
  return contraseña;
}

closeCupon(){

 this.modal.dismiss();

}

}
