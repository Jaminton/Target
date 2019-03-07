import { Component, OnInit } from '@angular/core';

import { NgxQRCodeModule } from 'ngx-qrcode2';
//import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-cupones',
  templateUrl: './cupones.page.html',
  styleUrls: ['./cupones.page.scss'],
})
export class CuponesPage implements OnInit {


  /*


  qrData= null;
  createdCode= null;
  scannedCode= null;

  */


 //encodeData: any;
 scannedData: {};
 barcodeScannerOptions: BarcodeScannerOptions;
 encodeData = this.generarContraseña(8);
 


  constructor(private barcodeScanner: BarcodeScanner) { 
    
  }

  ngOnInit() {

     //Options
     this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
      
    };
    
  }
/*
  createCode(){

 this.createdCode = this.qrData; 


  }
  */

  /*
  scanCode(){
      this.barcodeScanner.scan().then(barcodeData =>{
        this.scannedCode = barcodeData.text;
        

  })

}

*/

scanCode() {
  this.barcodeScanner.scan().then(barcodeData => {
    alert('Barcode data ' + JSON.stringify(barcodeData));
    this.scannedData = barcodeData;
  }).catch(err => {
    console.log('Error', err);
  });
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
}