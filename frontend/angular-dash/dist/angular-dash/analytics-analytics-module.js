(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analytics-analytics-module"],{

/***/ "./src/app/analytics/analytics-home/analytics-home.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/analytics/analytics-home/analytics-home.component.ts ***!
  \**********************************************************************/
/*! exports provided: AnalyticsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsHomeComponent", function() { return AnalyticsHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-logger */ "./node_modules/ngx-logger/__ivy_ngcc__/fesm2015/ngx-logger.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");


// import { gexf } from 'echarts/extension/dataTool';










var AnalyticsHomeComponent = /** @class */ (function () {
    function AnalyticsHomeComponent(notificationService, authService, titleService, logger) {
        this.notificationService = notificationService;
        this.authService = authService;
        this.titleService = titleService;
        this.logger = logger;
        this.type = 'month';
        this.types = ['days', 'month', 'year'];
        this.initOpts = {
            theme: 'dark',
            renderer: 'svg',
            width: 300,
            height: 300
        };
        this.options = {
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
                        title: 'save image'
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
                        data: [[{
                                    name: 'Morning peak',
                                    xAxis: '07:30'
                                }, {
                                    xAxis: '10:00'
                                }], [{
                                    name: 'Evening peak',
                                    xAxis: '17:30'
                                }, {
                                    xAxis: '21:15'
                                }]]
                    }
                }
            ]
        };
        this.option1 = {
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
                    dataView: { show: true, readOnly: false },
                    magicType: { show: true, type: ['line', 'bar'] },
                    restore: { show: true },
                    saveAsImage: { show: true }
                }
            },
            calculable: true,
            xAxis: [
                {
                    type: 'category',
                    data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
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
                            { type: 'max', name: 'Max' },
                            { type: 'min', name: 'Min' }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: 'average value' }
                        ]
                    }
                },
                {
                    name: 'Precipitation',
                    type: 'bar',
                    data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
                    markPoint: {
                        data: [
                            { name: 'Highest year', value: 182.2, xAxis: 7, yAxis: 183 },
                            { name: 'Lowest year', value: 2.3, xAxis: 11, yAxis: 3 }
                        ]
                    },
                    markLine: {
                        data: [
                            { type: 'average', name: 'average value' }
                        ]
                    }
                }
            ]
        };
        this.PieOption = {
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
                        { value: 335, name: '2021' },
                        { value: 310, name: '2022' },
                        { value: 274, name: '2023' },
                        { value: 235, name: '2024' },
                        { value: 400, name: '2025' }
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
                        color: 'red',
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
        this.loading = false;
        this.theme = 'dark';
    }
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
    AnalyticsHomeComponent.prototype.valPrint = function (eventValue, i) {
        console.log("Before" + this.graphs[i].type);
        this.graphs[i].type = eventValue;
        // this.graphs[i].option=this.PieOption
        console.log("after " + this.graphs[i].type + "index=" + i);
        this.updateGraph(i, this.graphs[i].type);
    };
    AnalyticsHomeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('Vayamvedhas - Dashboard');
        this.logger.log('Dashboard loaded');
        this.getDefaultAnalytics();
    };
    AnalyticsHomeComponent.prototype.getDefaultAnalytics = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var rData;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rData = [];
                        return [4 /*yield*/, this.authService.getAnalytics("604faa51d9cd50f02ed85894")
                                .subscribe(function (data) {
                                console.log(JSON.stringify(data));
                                //   rData=data.response.parameters
                                rData = data.data;
                                // console.log("hi there",JSON.stringify(rData))
                                var i = 0;
                                _this.graphs = rData;
                                // console.log("hi there amigos",JSON.stringify(this.sampleAssetModel))
                            }, function (error) {
                                _this.notificationService.openSnackBar(error.error);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AnalyticsHomeComponent.prototype.updateGraph = function (i, data) {
        var _this = this;
        var rData = [];
        this.authService.updateCharts(data)
            .subscribe(function (data) {
            console.log(JSON.stringify(data));
            //   rData=data.response.parameters
            rData = data.response.option;
            // console.log("hi there",JSON.stringify(rData))
            //   let i=0;
            //   this.graphs=rData
            _this.graphs[i].option = rData;
            // console.log("hi there amigos",JSON.stringify(this.sampleAssetModel))
        }, function (error) {
            _this.notificationService.openSnackBar(error.error);
        });
    };
    AnalyticsHomeComponent.ɵfac = function AnalyticsHomeComponent_Factory(t) { return new (t || AnalyticsHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"])); };
    AnalyticsHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AnalyticsHomeComponent, selectors: [["app-analytics-home"]], decls: 3, vars: 1, consts: [[1, "content"], [1, "chart"], ["echarts", "", 1, "chart", 3, "options"]], template: function AnalyticsHomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx.graphs);
        } }, directives: [ngx_echarts__WEBPACK_IMPORTED_MODULE_6__["NgxEchartsDirective"]], styles: [".chart[_ngcontent-%COMP%] {\n    height: 40vh;\n  }\n  \n  .chart-lg[_ngcontent-%COMP%] {\n    height: 700px;\n  }\n  \n  .main_title[_ngcontent-%COMP%]\n{\n  display: inline-block;\n  width: 100%;\n\n}\n  \n  .blank[_ngcontent-%COMP%]{\n  height: 75%;\n}\n  \n  .content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n  \n  .main_bar[_ngcontent-%COMP%]\n{\n  \n  display: inline-block;\n  width: 100px;\n  padding-left:8%;\n  text-align:end\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5hbHl0aWNzL2FuYWx5dGljcy1ob21lL2FuYWx5dGljcy1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7O0VBRUEscUJBQXFCO0VBQ3JCLFdBQVc7O0FBRWI7O0VBQ0E7RUFDRSxXQUFXO0FBQ2I7O0VBRUE7RUFDRSxhQUFhO0FBQ2Y7O0VBRUE7OztFQUdFLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osZUFBZTtFQUNmO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hbmFseXRpY3MvYW5hbHl0aWNzLWhvbWUvYW5hbHl0aWNzLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGFydCB7XG4gICAgaGVpZ2h0OiA0MHZoO1xuICB9XG4gIFxuICAuY2hhcnQtbGcge1xuICAgIGhlaWdodDogNzAwcHg7XG4gIH1cblxuICAubWFpbl90aXRsZVxue1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xuXG59XG4uYmxhbmt7XG4gIGhlaWdodDogNzUlO1xufVxuXG4uY29udGVudCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi5tYWluX2Jhclxue1xuICBcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDo4JTtcbiAgdGV4dC1hbGlnbjplbmRcbn1cbiJdfQ== */"] });
    return AnalyticsHomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AnalyticsHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-analytics-home',
                templateUrl: './analytics-home.component.html',
                styleUrls: ['./analytics-home.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_3__["NotificationService"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"] }, { type: ngx_logger__WEBPACK_IMPORTED_MODULE_5__["NGXLogger"] }]; }, null); })();


/***/ }),

/***/ "./src/app/analytics/analytics-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/analytics/analytics-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AnalyticsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsRoutingModule", function() { return AnalyticsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony import */ var _analytics_home_analytics_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics-home/analytics-home.component */ "./src/app/analytics/analytics-home/analytics-home.component.ts");






var routes = [
    {
        path: '',
        component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', component: _analytics_home_analytics_home_component__WEBPACK_IMPORTED_MODULE_3__["AnalyticsHomeComponent"] },
        ]
    }
];
var AnalyticsRoutingModule = /** @class */ (function () {
    function AnalyticsRoutingModule() {
    }
    AnalyticsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AnalyticsRoutingModule });
    AnalyticsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AnalyticsRoutingModule_Factory(t) { return new (t || AnalyticsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AnalyticsRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnalyticsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/analytics/analytics.module.ts":
/*!***********************************************!*\
  !*** ./src/app/analytics/analytics.module.ts ***!
  \***********************************************/
/*! exports provided: AnalyticsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsModule", function() { return AnalyticsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _analytics_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./analytics-routing.module */ "./src/app/analytics/analytics-routing.module.ts");
/* harmony import */ var _analytics_home_analytics_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics-home/analytics-home.component */ "./src/app/analytics/analytics-home/analytics-home.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var echarts_theme_macarons_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! echarts/theme/macarons.js */ "./node_modules/echarts/theme/macarons.js");
/* harmony import */ var echarts_theme_macarons_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(echarts_theme_macarons_js__WEBPACK_IMPORTED_MODULE_7__);










var AnalyticsModule = /** @class */ (function () {
    function AnalyticsModule() {
    }
    AnalyticsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AnalyticsModule });
    AnalyticsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AnalyticsModule_Factory(t) { return new (t || AnalyticsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _analytics_routing_module__WEBPACK_IMPORTED_MODULE_2__["AnalyticsRoutingModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"].forRoot({ echarts: echarts__WEBPACK_IMPORTED_MODULE_6__ }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
            ]] });
    return AnalyticsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnalyticsModule, { declarations: [_analytics_home_analytics_home_component__WEBPACK_IMPORTED_MODULE_3__["AnalyticsHomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _analytics_routing_module__WEBPACK_IMPORTED_MODULE_2__["AnalyticsRoutingModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnalyticsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_analytics_home_analytics_home_component__WEBPACK_IMPORTED_MODULE_3__["AnalyticsHomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _analytics_routing_module__WEBPACK_IMPORTED_MODULE_2__["AnalyticsRoutingModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"].forRoot({ echarts: echarts__WEBPACK_IMPORTED_MODULE_6__ }),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=analytics-analytics-module.js.map