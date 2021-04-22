import { Component, ViewChild, ElementRef } from '@angular/core';
import * as jsPDF from 'jspdf'





export interface PeriodicElement {
  Month   : string;
  TxnID  : number;
  Amount: number;
  Download: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {TxnID  : 1, Month   : 'Jan', Amount: 1.0079, Download: 'H'},
  {TxnID  : 2, Month   : 'Feb', Amount: 4.0026, Download: 'He'},
  {TxnID  : 3, Month   : 'Mar', Amount: 6.941, Download: 'Li'},
  {TxnID  : 4, Month   : 'Apr', Amount: 9.0122, Download: 'Be'},
  {TxnID  : 5, Month   : 'May', Amount: 10.811, Download: 'B'},
  {TxnID  : 6, Month   : 'Jun', Amount: 12.0107, Download: 'C'},
  {TxnID  : 7, Month   : 'Jul', Amount: 14.0067, Download: 'N'},
  {TxnID  : 8, Month   : 'Aug', Amount: 15.9994, Download: 'O'},
  {TxnID  : 9, Month   : 'Sep', Amount: 18.9984, Download: 'F'},
  {TxnID  : 10, Month  : 'Nov', Amount: 20.1797, Download: 'Ne'},
];

@Component({
  selector: 'app-billing-home',
  templateUrl: './billing-home.component.html',
  styleUrls: ['./billing-home.component.css']
})
export class BillingHomeComponent  {

  @ViewChild('htmlData') htmlData:ElementRef;

  USERS = [
    {
      "id": 1,
      "name": "Leanne Graham",
      "email": "sincere@april.biz",
      "phone": "1-770-736-8031 x56442"
    },
    {
      "id": 2,
      "name": "Ervin Howell",
      "email": "shanna@melissa.tv",
      "phone": "010-692-6593 x09125"
    },
    {
      "id": 3,
      "name": "Clementine Bauch",
      "email": "nathan@yesenia.net",
      "phone": "1-463-123-4447",
    },
    {
      "id": 4,
      "name": "Patricia Lebsack",
      "email": "julianne@kory.org",
      "phone": "493-170-9623 x156"
    },
    {
      "id": 5,
      "name": "Chelsey Dietrich",
      "email": "lucio@annie.ca",
      "phone": "(254)954-1289"
    },
    {
      "id": 6,
      "name": "Mrs. Dennis",
      "email": "karley@jasper.info",
      "phone": "1-477-935-8478 x6430"
    }
  ];

  gaugeType = "semi";
  gaugeValue = 28.3;
  gaugeLabel = "Speed";
  gaugeAppendText = "km/hr";
  width=595;
  height=842;
  displayedColumns: string[] = ['TxnID  ', 'Month   ', 'Amount', 'Download'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  

  ngOnInit(): void {
  }

  public openPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');
    doc.fromHTML(DATA.innerHTML,this.width,this.height);
    doc.output('dataurlnewwindow');
  }


  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p', 'pt','a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,this.width,this.height,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('angular-demo.pdf');
    // doc.output('dataurlnewwindow');
  }

}
