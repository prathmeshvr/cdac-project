import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { MockServerService } from './mock-server.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { EChartOption } from 'echarts';
// import { gexf } from 'echarts/extension/dataTool';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { Title } from '@angular/platform-browser';
import { NGXLogger } from 'ngx-logger';
	
export interface Graphs {
    name:string,
    type:string,
    option:any
}

@Component({
  selector: 'app-analytics-home',
  templateUrl: './analytics-home.component.html',
  styleUrls: ['./analytics-home.component.css']
})
export class AnalyticsHomeComponent implements OnInit {
    type = 'month';
    types = ['days', 'month', 'year'];
    SelectedValue:any;
    graphs:Graphs[];
    // graphs:Graphs[] = [
    //     {
    //         name:"First Graph",
    //         type:"month",
    //         option:{xAxis: {type: 'category',data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']},
    //         yAxis: {type: 'value'},series: [{data: [150, 230, 224, 218, 135, 147, 260],type: 'line'}]}
    //     },
    //     {
    //         name:"Second Graph",
    //         type:"month",
    //         option:{
    //             tooltip: {
    //                 trigger: 'axis',
    //                 axisPointer: {            
    //                     type: 'shadow'        
    //                 }
    //             },
    //             grid: {
    //                 left: '3%',
    //                 right: '4%',
    //                 bottom: '3%',
    //                 containLabel: true
    //             },
    //             xAxis: [
    //                 {
    //                     type: 'category',
    //                     data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ],
    //                     axisTick: {
    //                         alignWithLabel: true
    //                     }
    //                 }
    //             ],
    //             yAxis: [
    //                 {
    //                     type: 'value'
    //                 }
    //             ],
    //             series: [
    //                 {
    //                     name: 'Voltage',
    //                     type: 'bar',
    //                     barWidth: '60%',
    //                     data: [150,        230,        224,     218,     135,   147,    260,    477,     343,         322,       122,        223]
    //                 }
    //             ]
    //           }
    //     }
    // ]
    valPrint(eventValue,i)
    {
        
        console.log("Before"+this.graphs[i].type)
        this.graphs[i].type=eventValue
        // this.graphs[i].option=this.PieOption
        console.log("after "+this.graphs[i].type + "index="+i)
        this.updateGraph(i,this.graphs[i].type)

    }

    initOpts = {
        theme : 'dark',
        renderer: 'svg',
        width: 300,
        height: 300
    };
  
  options = {
    title: {
        text: 'Distribution of electricity consumption in a day',
        subtext: 'Purely fictitious'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    toolbox: {
        show: true,
        feature: {
            saveAsImage: {
                title:'save image'
            }
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
    },
    yAxis: {
        type: 'value',
        axisLabel: {
            formatter: '{value} W'
        },
        axisPointer: {
            snap: true
        }
    },
    visualMap: {
        show: false,
        dimension: 0,
        pieces: [{
            lte: 6,
            color: 'green'
        }, {
            gt: 6,
            lte: 8,
            color: 'red'
        }, {
            gt: 8,
            lte: 14,
            color: 'green'
        }, {
            gt: 14,
            lte: 17,
            color: 'red'
        }, {
            gt: 17,
            color: 'green'
        }]
    },
    series: [
        {
            name: 'Energy used',
            type: 'line',
            smooth: true,
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            markArea: {
                itemStyle: {
                    color: 'rgba(255, 173, 177, 0.4)'
                },
                data: [ [{
                    name: 'Morning peak',
                    xAxis: '07:30'
                }, {
                    xAxis: '10:00'
                }], [{
                    name: 'Evening peak',
                    xAxis: '17:30'
                }, {
                    xAxis: '21:15'
                }] ]
            }
        }
    ]
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
    ]
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
  //End of pie chart 

mergeOption: any;
loading = false;
theme='dark'
graphOption: Observable<EChartOption>;

constructor( private notificationService: NotificationService,
    private authService: AuthenticationService,
    private titleService: Title,
    private logger: NGXLogger,) {}

ngOnInit() {
    this.titleService.setTitle('Vayamvedhas - Dashboard');
    this.logger.log('Dashboard loaded');
    this.getDefaultAnalytics();

}

    async getDefaultAnalytics()
        {
            var rData=[];
            await this.authService.getAnalytics("604faa51d9cd50f02ed85894")
              .subscribe(
                data => {
                  console.log(JSON.stringify(data))
                //   rData=data.response.parameters
                  rData=data.data
                  // console.log("hi there",JSON.stringify(rData))
                  let i=0;
                  this.graphs=rData
                  // console.log("hi there amigos",JSON.stringify(this.sampleAssetModel))
        
                  
                },
                error => {
                  this.notificationService.openSnackBar(error.error);
                }
              );
        
              
        
        }


         updateGraph(i,data)
        {
            var rData=[];
             this.authService.updateCharts(data)
              .subscribe(
                data => {
                  console.log(JSON.stringify(data))
                //   rData=data.response.parameters
                  rData=data.response.option
                  // console.log("hi there",JSON.stringify(rData))
                //   let i=0;
                //   this.graphs=rData
                  this.graphs[i].option=rData
                  // console.log("hi there amigos",JSON.stringify(this.sampleAssetModel))
        
                  
                },
                error => {
                  this.notificationService.openSnackBar(error.error);
                }
              );
        
              
        
        }

}


