import { Component, OnInit ,OnDestroy} from '@angular/core';
import { Title } from '@angular/platform-browser';
// import { NGXLogger } from 'ngx-logger';
import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
// import * as mqtt from "mqtt";
// import { IMqttMessage, MqttService } from 'ngx-mqtt';
// import { EventDataModel } from 'app/models/event.model';
import { Subscription } from 'rxjs';
import { EChartOption } from 'echarts';
import { Observable } from 'rxjs';
// import { MqttClientService } from '../../../app/core/services/mqtt-client.service';
// import { IMqttMessage } from "ngx-mqtt";


// import { Subscription } from 'rxjs';
// import { IMqttMessage, MqttService } from 'ngx-mqtt';


export interface PeriodicElement {
  name: string;
  position: string;
  weight: string;
  symbol: string;
}

 interface parametersModel{
  _id:string;
  parameterName: string,
  parameterImgUrl: string,
  parameterType: string,
  parameterValue: string
  marked: boolean;
  theCheckbox:any ;

}

interface assetData{
  bValue:boolean;
  value:number;
  time:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 'emoji_objects', name: 'Bulb', weight: 'On', symbol: '1hr 2min'},
  {position: 'support', name: 'Fan', weight: 'On', symbol: '2'},
  {position: 'wb_iridescent', name: 'Tube Light', weight: "On", symbol: '3'},
  {position: 'ac_unit', name: 'A.C.', weight: 'On', symbol: '4'}
];

export interface ButtonState {
  marked:boolean;
  theCheckbox:any;
}


export interface Graphs {
  name:string,
  type:string,
  option:any
}

@Component({
  selector: 'app-assets-home',
  templateUrl: './assets-home.component.html',
  styleUrls: ['./assets-home.component.css']
})

export class AssetsHomeComponent implements OnInit   {
  // @Input() products$: Observable<any>;
  
  events: any[];
  private deviceId: string;
  // subscription: Subscription;
  graphs:Graphs[];
  selectedItemsList = [];
  checkedIDs = [];

  checkboxesDataList = [
    {            
      _id: "5f29a156cb34af8a5803f76e",
      parameterName: "Tubelight",
      parameterImgUrl: "xxxxx",
      parameterType: "SWITCH&MONI",
      parameterValue: "1",
      isChecked: true
    },
    {
      _id: 'C001',
      parameterName: 'Photography',
      parameterImgUrl: "xxxxx",
      parameterType: "SWITCH&MONI",
      parameterValue: "1",
      isChecked: true
    },
    {
      _id: 'C002',
      parameterName: 'Writing',
      parameterImgUrl: "xxxxx",
      parameterType: "SWITCH&MONI",
      parameterValue: "1",
      isChecked: true
    },
    {
      _id: 'C003',
      parameterName: 'Painting',
      parameterImgUrl: "xxxxx",
      parameterType: "SWITCH&MONI",
      parameterValue: "1",
      isChecked: true
    },
    {
      _id: 'C004',
      parameterName: 'Knitting',
      parameterImgUrl: "xxxxx",
      parameterType: "SWITCH&MONI",
      parameterValue: "1",
      isChecked: false
    },
    {
      _id: 'C004',
      parameterName: 'Dancing',
      parameterImgUrl: "xxxxx",
      parameterType: "SWITCH&MONI",
      parameterValue: "1",
      isChecked: false
    }
  ]
  products
  mergeOption: any;
  loading = false;
  theme='dark'
  graphOption: Observable<EChartOption>;
  private subscription: Subscription;
  // private message: String;
  topicname: any;
  msg: any;

  marked;
  theCheckbox ;
  public message: string;
  isConnected: boolean = false;
  currentUser: any;
  myData:any;
  // sampleValue:assetModel[];
  parametersData: parametersModel[] =[]
  pdata: parametersModel ;
  sampleAssetModel=[]
  gridColumns = 7;
  butonState: ButtonState[]=[]
  
  // valueBtns:[];

  toggleVisibility(e,i){
    // this.marked= e.target.checked;
    console.log(JSON.stringify(e))
    // this.butonState[i].marked=e;
    console.log("button=" ,this.butonState[i].marked,"  ",e.target.checked)
  }

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;



  constructor(private notificationService: NotificationService,
    private authService: AuthenticationService,
    private titleService: Title,
    // private logger: NGXLogger,
    // private readonly mqttClient: MqttClientService
    
    ) {
      



    

  }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }


  

  changeSelection(event,i) {
    console.log("Button ",i,"switchinggg = ",this.sampleAssetModel[i].isChecked)
    this.setParamValue(i)
    this.fetchSelectedItems()

  }

  fetchSelectedItems() {
    this.selectedItemsList = this.sampleAssetModel.filter((value, index) => {
      // console.log("Button Switched = ",value.isChecked)
      return value.isChecked
    });
  }

  fetchCheckedIDs() {
    this.checkedIDs = []
    this.sampleAssetModel.forEach((value, index) => {
      if (value.isChecked) {
        this.checkedIDs.push(value._id);
        // console.log("Button Switching= ",value.isChecked)
      }
    });
  }

  async getDefaultAnalytics()
  {
    var id = this.authService.getAssetIdForParameter();
      var rData=[];
      await this.authService.getAnalytics(id)
        .subscribe(
          data => {
            console.log(JSON.stringify(data))
          //   rData=data.response.parameters
            rData=data.data
            // console.log("hi there",JSON.stringify(rData))
            let i=0;
            this.graphs=rData
            // var keys = Object.keys(rData);
            // for (var k = 0; k < keys.length; k++) {
            //   // console.log("hi")
            //   this.graphs[k].option=rData[keys[k]]
            //   this.graphs[k].name=keys[k]
            //   // console.log(rData[keys[k]]);
            // }
            // for(let k=0;k<Object.keys(data.data).length;k++){
            //   this.graphs[k].option=rData[]
            // }
            
            // console.log("hi there amigos",JSON.stringify(this.sampleAssetModel))
  
            
          },
          error => {
            this.notificationService.openSnackBar(error.error);
          }
        );
  
        
  
  }

  ngOnInit():void {
    this.titleService.setTitle('IoT Platform');
    // this.logger.log('Dashboard loaded');
    // this.subscribeToTopic();
    this.getParameters()
    this.getDefaultAnalytics();

    // this.products = Observable
    // .interval(1000)
    // .startWith(0).switchMap(() => this.getParameters());
    // this.fetchSelectedItems()
    // this.fetchCheckedIDs()

  }

  // ngOnDestroy(): void {
  //   if (this.subscription) {
  //       this.subscription.unsubscribe();
  //   }
  // }

  // private subscribeToTopic() {
  //   this.subscription = this.mqttClient.topic("tota")
  //       .subscribe((data: IMqttMessage) => {
  //           let item = JSON.parse(data.payload.toString());
  //           this.events.push(item);
  //       });
  // }

  async setParamValue(i){
     var id =await this.authService.getAssetIdForParameter();
    console.log("hi222222 ");
    console.log(this.sampleAssetModel[i]._id);
    var val;
    if(this.sampleAssetModel[i].isChecked === true){
      val='1'
    }else if(this.sampleAssetModel[i].isChecked === false){
      val='0'
    }
    var _data={
      timestamp:160000,
      cmd:"DEVICE_CONTROL",
      data:{
          assetId:id,
          parameterId:this.sampleAssetModel[i]._id,
          value:val
      }
    }

    console.log(JSON.stringify(_data))
  
    await this.authService.setParamValue(_data)
      .subscribe(
        data => {
          console.log(data)
          // this.sampleAssetModel=data.parameters
          console.log(data)
        },
        error => {
          // this.notificationService.openSnackBar(error.error);
        }
      );
  }

  async fillParams(sentData){
    var mydata ;
    let i=0;
    // await console.log("len",sentData)
    // await console.log("hiiii")
    // for(i=0;i=sentData.length;i++){
    //   mydata._id=sentData[i]._id;;
    //   mydata.parameterName=sentData[i].parameterName
    //   mydata.parameterImgUrl=sentData[i].parameterImgUrl;
    //   mydata.parameterType=sentData[i].parameterType;
    //   mydata.parameterValue=sentData[i].parameterValue


    //   console.log("hiiii")
      if(sentData[i].parameterValue === "1"){
        mydata.marked=true
        mydata.theCheckbox=true
      }else if(sentData[i].parameterValue === "0"){
        mydata.marked=false
        mydata.theCheckbox=false
      }else if(sentData[i].parameterValue === " "){
        mydata.marked=false
        mydata.theCheckbox=false
      }
      
      this.butonState.push(mydata)
    }
       
    // await console.log("hola",this.parametersData)

  

  async getParameters() {
    var user = this.authService.getCurrentUser();
    var id = this.authService.getAssetIdForParameter();

    await this.authService.getSpecificAssetParameters(Date.now(),id)
      .subscribe(
        data => {
          console.log(JSON.stringify(data))
          // rData=data.response.parameters
          this.sampleAssetModel=data.data
        
          console.log("hi there amigos",JSON.stringify(this.sampleAssetModel))

          
        },
        error => {
          this.notificationService.openSnackBar(error.error);
        }
      );

      

  }


  
}
