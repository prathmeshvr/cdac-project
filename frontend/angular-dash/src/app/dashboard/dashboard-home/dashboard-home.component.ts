import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';
// import { NGXLogger } from 'ngx-logger';
import { AuthenticationService } from 'src/app/core/services/auth.service';




@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.css']
})

export class DashboardHomeComponent implements OnInit {
  currentUser: any;
  currentUserName: any;
  sampleValue=[];

  // title = 'Card View Demo';
  trafficChartPoints: number[];
  type = 'month';
  types = ['week', 'month', 'year'];
  //Parameters =['Current' , 'Voltage' , 'Power' , 'Resistance']
  SelectedValue:any;
  displayedColumns = ['position', 'name', 'upTime'];
   

    gridColumns = 10;

    toggleGridColumns() {
      this.gridColumns = this.gridColumns === 3 ? 4 : 3;
    }

  valPrint(eventValue:string)
  {
    if(eventValue === 'week')
    {
      this.SelectedValue=this.BasicAreaOption
    }
    else if(eventValue === 'month')
    {
      this.SelectedValue=this.PieOption
    }
    
  }

  initOpts = {
    theme : 'dark',
    renderer: 'svg',
    width: 400,
    height: 300
  };
  theme='dark'
  graphs:Graphs[] = [
    {
        name:"First Graph",
        type:"month",
        option:{xAxis: {type: 'category',data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']},
        yAxis: {type: 'value'},series: [{data: [150, 230, 224, 218, 135, 147, 260],type: 'line'}]}
    },
    {
        name:"Second Graph",
        type:"month",
        option:{
            tooltip: {
                trigger: 'axis',
                axisPointer: {            
                    type: 'shadow'        
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Voltage',
                    type: 'bar',
                    barWidth: '60%',
                    data: [150,        230,        224,     218,     135,   147,    260,    477,     343,         322,       122,        223]
                }
            ]
          }
    }
]

options = {
  xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
      type: 'value'
  },
  series: [{
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
  }]
};

option1 = {
  title: {
      text: 'Evaporation and precipitation in a certain area',
      subtext: 'Purely fictitious'
  },
  tooltip: {
      trigger: 'axis'
  },
  legend: {
      data: ['Evaporation', 'Precipitation']
  },
  toolbox: {
      show: true,
      feature: {
          dataView: {show: true, readOnly: false},
          magicType: {show: true, type: ['line', 'bar']},
          restore: {show: true},
          saveAsImage: {show: true}
      }
  },
  calculable: true,
  xAxis: [
      {
          type: 'category',
          data: ['January','February','March','April','May','June','July','August','September','October', 'November','December']
      }
  ],
  yAxis: [
      {
          type: 'value'
      }
  ],
  series: [
      {
          name: 'Evaporation',
          type: 'bar',
          data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
          markPoint: {
              data: [
                  {type: 'max', name: 'Max'},
                  {type: 'min', name: 'Min'}
              ]
          },
          markLine: {
              data: [
                  {type: 'average', name: 'average value'}
              ]
          }
      },
      {
          name: 'Precipitation',
          type: 'bar',
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          markPoint: {
              data: [
                  {name: 'Highest year', value: 182.2, xAxis: 7, yAxis: 183},
                  {name: 'Lowest year', value: 2.3, xAxis: 11, yAxis: 3}
              ]
          },
          markLine: {
              data: [
                  {type: 'average', name: 'average value'}
              ]
          }
      }
  ],
};

  BasicAreaOption = 
  {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value',
    },
    tooltip: {
      trigger: 'axis',
      position: function (pt) {
          return [pt[0], '20%'];
      }
  },
  
  // title: {
  //     left: 'center',
  //     text: 'basicAreaDownlaod',
  // },

    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        name:'Basic Chart ',
        type: 'line',
        color: 'white'
    }]
};

  PieOption = {
    //backgroundColor: '#a9a9a9',
  
    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },
  
    tooltip: {
        trigger: 'item'
    },
  
    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [1, 0]
        }
    },
    series: [
        {
            name: 'a',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 335, name: '2021'},
                {value: 310, name: '2022'},
                {value: 274, name: '2023'},
                {value: 235, name: '2024'},
                {value: 400, name: '2025'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: 'blue'
            },
            labelLine: {
                lineStyle: {
                    color: 'green'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: 'red',  // graph color
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
  
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
  };

  constructor(private notificationService: NotificationService,
    private authService: AuthenticationService,
    private titleService: Title
    // private logger: NGXLogger
    )
     {
  }

  ngOnInit():void {
    this.currentUser = this.authService.getCurrentUser();
    this.getAssets();
    this.currentUserName=this.currentUser.fullName
    this.titleService.setTitle('IoT Platform');
    // this.logger.log('Dashboard loaded');

  }


  getAssets() {
    var assets = this.authService.getAssets();
    this.authService.getUserSpecificAssets(Date.now(),assets)
      .subscribe(
        data => {
          console.log(data)
          this.sampleValue=data.data
          // console.log(data)
        },
        error => {
          this.notificationService.openSnackBar(error.error);
        }
      );
  }

  setAsset(event ,_id){
    // console.log("hi ");
    // console.log(this.sampleValue[_id]._id);
    this.authService.setAssetIdForParameter(this.sampleValue[_id]._id)
  }

}


export interface Graphs {
  name:string,
  type:string,
  option:any
}
