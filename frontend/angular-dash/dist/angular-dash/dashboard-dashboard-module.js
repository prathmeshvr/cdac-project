(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./src/app/dashboard/dashboard-home/dashboard-home.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/dashboard/dashboard-home/dashboard-home.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHomeComponent", function() { return DashboardHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");



// import { NGXLogger } from 'ngx-logger';









function DashboardHomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardHomeComponent_div_4_Template_button_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); var i_r2 = ctx.index; var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.setAsset($event, i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r2 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fxFlex", 100 / ctx_r0.gridColumns + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.sampleValue[i_r2].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.sampleValue[i_r2].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
var DashboardHomeComponent = /** @class */ (function () {
    function DashboardHomeComponent(notificationService, authService, titleService
    // private logger: NGXLogger
    ) {
        this.notificationService = notificationService;
        this.authService = authService;
        this.titleService = titleService;
        this.sampleValue = [];
        this.type = 'month';
        this.types = ['week', 'month', 'year'];
        this.displayedColumns = ['position', 'name', 'upTime'];
        this.gridColumns = 10;
        this.initOpts = {
            theme: 'dark',
            renderer: 'svg',
            width: 400,
            height: 300
        };
        this.theme = 'dark';
        this.graphs = [
            {
                name: "First Graph",
                type: "month",
                option: { xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
                    yAxis: { type: 'value' }, series: [{ data: [150, 230, 224, 218, 135, 147, 260], type: 'line' }] }
            },
            {
                name: "Second Graph",
                type: "month",
                option: {
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
                            data: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
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
                            data: [150, 230, 224, 218, 135, 147, 260, 477, 343, 322, 122, 223]
                        }
                    ]
                }
            }
        ];
        this.options = {
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
            ],
        };
        this.BasicAreaOption = {
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
                    name: 'Basic Chart ',
                    type: 'line',
                    color: 'white'
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
    }
    DashboardHomeComponent.prototype.toggleGridColumns = function () {
        this.gridColumns = this.gridColumns === 3 ? 4 : 3;
    };
    DashboardHomeComponent.prototype.valPrint = function (eventValue) {
        if (eventValue === 'week') {
            this.SelectedValue = this.BasicAreaOption;
        }
        else if (eventValue === 'month') {
            this.SelectedValue = this.PieOption;
        }
    };
    DashboardHomeComponent.prototype.ngOnInit = function () {
        this.currentUser = this.authService.getCurrentUser();
        this.getAssets();
        this.currentUserName = this.currentUser.fullName;
        this.titleService.setTitle('IoT Platform');
        // this.logger.log('Dashboard loaded');
    };
    DashboardHomeComponent.prototype.getAssets = function () {
        var _this = this;
        var assets = this.authService.getAssets();
        this.authService.getUserSpecificAssets(Date.now(), assets)
            .subscribe(function (data) {
            console.log(data);
            _this.sampleValue = data.data;
            // console.log(data)
        }, function (error) {
            _this.notificationService.openSnackBar(error.error);
        });
    };
    DashboardHomeComponent.prototype.setAsset = function (event, _id) {
        // console.log("hi ");
        // console.log(this.sampleValue[_id]._id);
        this.authService.setAssetIdForParameter(this.sampleValue[_id]._id);
    };
    DashboardHomeComponent.ɵfac = function DashboardHomeComponent_Factory(t) { return new (t || DashboardHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
    DashboardHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardHomeComponent, selectors: [["app-dashboard-home"]], decls: 6, vars: 1, consts: [[1, "heading"], ["fxLayout", "row wrap", "fxLayoutGap", "20px grid", 1, "content"], ["fxFlex.xs", "100%", "fxFlex.sm", "33%", 3, "fxFlex", 4, "ngFor", "ngForOf"], ["fxFlex.xs", "100%", "fxFlex.sm", "33%", 3, "fxFlex"], ["mat-raised-button", "", "id", "button-card", "routerLink", "/assets", 3, "click"], [2, "width", "50px", "height", "50px", 3, "src"]], template: function DashboardHomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Plants ");
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardHomeComponent_div_4_Template, 5, 3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.sampleValue);
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], styles: [".mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px;\n}\n\n.chart[_ngcontent-%COMP%] {\n  height: 50vh;\n  width: 50vh;\n  padding-top: 1vh;\n}\n\n.chart-lg[_ngcontent-%COMP%] {\n  height: 700px;\n}\n\n  .mat-expansion-panel-header\n{\n    height: 9vh !important;\n}\n\n  .mat-expansion-panel-header-title,   .mat-expansion-panel-header-description {\n  flex-basis: 0;\n}\n\n  .mat-panel-title {\n  justify-content: space-between space-between;\n  \n}\n\n  .mat-expansion-panel-header-description {\n  justify-content: space-between space-between;\n  align-items: center center;\n}\n\n  .mat-form-field + .mat-form-field {\n  margin-left: 8px;\n}\n\n.single-cards[_ngcontent-%COMP%] {\n    margin: 20px 0;\n  }\n\n.single-card[_ngcontent-%COMP%]   .mat-card-avatar[_ngcontent-%COMP%] {\n    width: 50px;\n    height: 50px;\n  }\n\n.single-card[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n    font-size: 55px;\n  }\n\n.projects-card[_ngcontent-%COMP%] > mat-card-content[_ngcontent-%COMP%] {\n    max-height: 400px;\n    overflow: auto;\n  }\n\n.card-button[_ngcontent-%COMP%]{\n    font-size: 100%;\n    font-family: inherit;\n    border: 0;\n    padding: 0;\n    border-radius: 4%;\n  \n  }\n\n.content[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n\n.content[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n\n#button-card[_ngcontent-%COMP%]{\n    width: 150px;\n    height: 250px;\n  }\n\n.heading[_ngcontent-%COMP%]{\n    padding-left: 2vw;\n    color:#424242;\n    padding-top: 0%;\n    padding-bottom: 0%;\n  }\n\n.container[_ngcontent-%COMP%] {\n\tbackground-size: cover;\n  background: rgb(226,226,226);      \n  background: linear-gradient(to bottom,  rgba(226,226,226,1) 0%,rgba(219,219,219,1) 50%,rgba(209,209,209,1) 51%,rgba(254,254,254,1) 100%); \n  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=0 ); \n  padding: 20px;\n}\n\n.led-box[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 25%;\n  margin: 10px 0;\n  float: left;\n}\n\n.led-box[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 12px;\n  text-align: center;\n  margin: 1em;\n}\n\n.led-red[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 24px;\n  height: 24px;\n  background-color: #F00;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px;\n  -webkit-animation: blinkRed 0.5s infinite;\n  animation: blinkRed 0.5s infinite;\n}\n\n@-webkit-keyframes blinkRed {\n    from { background-color: #F00; }\n    50% { background-color: #A00; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 0;}\n    to { background-color: #F00; }\n}\n\n@keyframes blinkRed {\n    from { background-color: #F00; }\n    50% { background-color: #A00; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 0;}\n    to { background-color: #F00; }\n}\n\n.led-yellow[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 24px;\n  height: 24px;\n  background-color: #FF0;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 12px;\n  -webkit-animation: blinkYellow 1s infinite;\n  animation: blinkYellow 1s infinite;\n}\n\n@-webkit-keyframes blinkYellow {\n    from { background-color: #FF0; }\n    50% { background-color: #AA0; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }\n    to { background-color: #FF0; }\n}\n\n@keyframes blinkYellow {\n    from { background-color: #FF0; }\n    50% { background-color: #AA0; box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #808002 0 -1px 9px, #FF0 0 2px 0; }\n    to { background-color: #FF0; }\n}\n\n.led-green[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 24px;\n  height: 24px;\n  background-color: #ABFF00;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 12px;\n}\n\n.led-blue[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  width: 24px;\n  height: 24px;\n  background-color: #24E0FF;\n  border-radius: 50%;\n  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #006 0 -1px 9px, #3F8CFF 0 2px 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC1ob21lL2Rhc2hib2FyZC1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7SUFFSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBO0VBQ0UsNENBQTRDO0VBQzVDLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLDRDQUE0QztFQUM1QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBSUE7SUFDSSxjQUFjO0VBQ2hCOztBQUVBO0lBQ0UsV0FBVztJQUNYLFlBQVk7RUFDZDs7QUFFQTtJQUNFLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7QUFJQTtJQUNFLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsU0FBUztJQUNULFVBQVU7SUFDVixpQkFBaUI7O0VBRW5COztBQUdBO0lBQ0UsYUFBYTtFQUNmOztBQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7RUFDZjs7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7QUFFQTtDQUNELHNCQUFzQjtFQUNyQiw0QkFBNEIsRUFBRSxpQkFBaUIsRUFDNkYsV0FBVyxFQUMwRCxvQkFBb0IsRUFDekYseUJBQXlCLEVBQzlCLGlCQUFpQixFQUNoQixVQUFVO0VBQ2xKLHdJQUF3SSxFQUFFLFFBQVE7RUFDbEosbUhBQW1ILEVBQUUsVUFBVTtFQUMvSCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsd0dBQXdHO0VBQ3hHLHlDQUF5QztFQUl6QyxpQ0FBaUM7QUFDbkM7O0FBRUE7SUFDSSxPQUFPLHNCQUFzQixFQUFFO0lBQy9CLE1BQU0sc0JBQXNCLEVBQUUscUdBQXFHLENBQUM7SUFDcEksS0FBSyxzQkFBc0IsRUFBRTtBQUNqQzs7QUFnQkE7SUFDSSxPQUFPLHNCQUFzQixFQUFFO0lBQy9CLE1BQU0sc0JBQXNCLEVBQUUscUdBQXFHLENBQUM7SUFDcEksS0FBSyxzQkFBc0IsRUFBRTtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsd0ZBQXdGO0VBQ3hGLDBDQUEwQztFQUkxQyxrQ0FBa0M7QUFDcEM7O0FBRUE7SUFDSSxPQUFPLHNCQUFzQixFQUFFO0lBQy9CLE1BQU0sc0JBQXNCLEVBQUUscUZBQXFGLEVBQUU7SUFDckgsS0FBSyxzQkFBc0IsRUFBRTtBQUNqQzs7QUFnQkE7SUFDSSxPQUFPLHNCQUFzQixFQUFFO0lBQy9CLE1BQU0sc0JBQXNCLEVBQUUscUZBQXFGLEVBQUU7SUFDckgsS0FBSyxzQkFBc0IsRUFBRTtBQUNqQzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsMkZBQTJGO0FBQzdGOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQix3RkFBd0Y7QUFDMUYiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQvZGFzaGJvYXJkLWhvbWUvZGFzaGJvYXJkLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZCArIC5tYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5jaGFydCB7XG4gIGhlaWdodDogNTB2aDtcbiAgd2lkdGg6IDUwdmg7XG4gIHBhZGRpbmctdG9wOiAxdmg7XG59XG5cbi5jaGFydC1sZyB7XG4gIGhlaWdodDogNzAwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXJcbntcbiAgICBoZWlnaHQ6IDl2aCAhaW1wb3J0YW50O1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLXRpdGxlLFxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbiB7XG4gIGZsZXgtYmFzaXM6IDA7XG59XG5cbjo6bmctZGVlcCAubWF0LXBhbmVsLXRpdGxlIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIHNwYWNlLWJldHdlZW47XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXIgY2VudGVyOyAqL1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtaGVhZGVyLWRlc2NyaXB0aW9uIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuIHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXIgY2VudGVyO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuXG5cbi5zaW5nbGUtY2FyZHMge1xuICAgIG1hcmdpbjogMjBweCAwO1xuICB9XG4gIFxuICAuc2luZ2xlLWNhcmQgLm1hdC1jYXJkLWF2YXRhciB7XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICB9XG4gIFxuICAuc2luZ2xlLWNhcmQgLm1hdC1pY29uIHtcbiAgICBmb250LXNpemU6IDU1cHg7XG4gIH1cbiAgXG4gIC5wcm9qZWN0cy1jYXJkPm1hdC1jYXJkLWNvbnRlbnQge1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICB9XG4gIFxuICBcbiAgXG4gIC5jYXJkLWJ1dHRvbntcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgYm9yZGVyOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNCU7XG4gIFxuICB9XG4gIFxuICBcbiAgLmNvbnRlbnQge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cbiAgXG4gIC5jb250ZW50ID4gbWF0LWNhcmQge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cbiAgXG4gICNidXR0b24tY2FyZHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAyNTBweDtcbiAgfVxuICBcbiAgLmhlYWRpbmd7XG4gICAgcGFkZGluZy1sZWZ0OiAydnc7XG4gICAgY29sb3I6IzQyNDI0MjtcbiAgICBwYWRkaW5nLXRvcDogMCU7XG4gICAgcGFkZGluZy1ib3R0b206IDAlO1xuICB9XG4gIFxuICAuY29udGFpbmVyIHtcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZDogcmdiKDIyNiwyMjYsMjI2KTsgLyogT2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjI2LDIyNiwyMjYsMSkgMCUsIHJnYmEoMjE5LDIxOSwyMTksMSkgNTAlLCByZ2JhKDIwOSwyMDksMjA5LDEpIDUxJSwgcmdiYSgyNTQsMjU0LDI1NCwxKSAxMDAlKTsgLyogRkYzLjYrICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGNvbG9yLXN0b3AoMCUscmdiYSgyMjYsMjI2LDIyNiwxKSksIGNvbG9yLXN0b3AoNTAlLHJnYmEoMjE5LDIxOSwyMTksMSkpLCBjb2xvci1zdG9wKDUxJSxyZ2JhKDIwOSwyMDksMjA5LDEpKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMjU0LDI1NCwyNTQsMSkpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjI2LDIyNiwyMjYsMSkgMCUscmdiYSgyMTksMjE5LDIxOSwxKSA1MCUscmdiYSgyMDksMjA5LDIwOSwxKSA1MSUscmdiYSgyNTQsMjU0LDI1NCwxKSAxMDAlKTsgLyogQ2hyb21lMTArLFNhZmFyaTUuMSsgKi9cbiAgYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgIHJnYmEoMjI2LDIyNiwyMjYsMSkgMCUscmdiYSgyMTksMjE5LDIxOSwxKSA1MCUscmdiYSgyMDksMjA5LDIwOSwxKSA1MSUscmdiYSgyNTQsMjU0LDI1NCwxKSAxMDAlKTsgLyogT3BlcmEgMTEuMTArICovXG4gIGJhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAgcmdiYSgyMjYsMjI2LDIyNiwxKSAwJSxyZ2JhKDIxOSwyMTksMjE5LDEpIDUwJSxyZ2JhKDIwOSwyMDksMjA5LDEpIDUxJSxyZ2JhKDI1NCwyNTQsMjU0LDEpIDEwMCUpOyAvKiBJRTEwKyAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAgcmdiYSgyMjYsMjI2LDIyNiwxKSAwJSxyZ2JhKDIxOSwyMTksMjE5LDEpIDUwJSxyZ2JhKDIwOSwyMDksMjA5LDEpIDUxJSxyZ2JhKDI1NCwyNTQsMjU0LDEpIDEwMCUpOyAvKiBXM0MgKi9cbiAgZmlsdGVyOiBwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuZ3JhZGllbnQoIHN0YXJ0Q29sb3JzdHI9JyNlMmUyZTInLCBlbmRDb2xvcnN0cj0nI2ZlZmVmZScsR3JhZGllbnRUeXBlPTAgKTsgLyogSUU2LTkgKi9cbiAgcGFkZGluZzogMjBweDtcbn1cblxuLmxlZC1ib3gge1xuICBoZWlnaHQ6IDMwcHg7XG4gIHdpZHRoOiAyNSU7XG4gIG1hcmdpbjogMTBweCAwO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLmxlZC1ib3ggcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDFlbTtcbn1cblxuLmxlZC1yZWQge1xuICBtYXJnaW46IDAgYXV0bztcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwMDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMCAtMXB4IDdweCAxcHgsIGluc2V0ICM0NDEzMTMgMCAtMXB4IDlweCwgcmdiYSgyNTUsIDAsIDAsIDAuNSkgMCAycHggMTJweDtcbiAgLXdlYmtpdC1hbmltYXRpb246IGJsaW5rUmVkIDAuNXMgaW5maW5pdGU7XG4gIC1tb3otYW5pbWF0aW9uOiBibGlua1JlZCAwLjVzIGluZmluaXRlO1xuICAtbXMtYW5pbWF0aW9uOiBibGlua1JlZCAwLjVzIGluZmluaXRlO1xuICAtby1hbmltYXRpb246IGJsaW5rUmVkIDAuNXMgaW5maW5pdGU7XG4gIGFuaW1hdGlvbjogYmxpbmtSZWQgMC41cyBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rUmVkIHtcbiAgICBmcm9tIHsgYmFja2dyb3VuZC1jb2xvcjogI0YwMDsgfVxuICAgIDUwJSB7IGJhY2tncm91bmQtY29sb3I6ICNBMDA7IGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwIC0xcHggN3B4IDFweCwgaW5zZXQgIzQ0MTMxMyAwIC0xcHggOXB4LCByZ2JhKDI1NSwgMCwgMCwgMC41KSAwIDJweCAwO31cbiAgICB0byB7IGJhY2tncm91bmQtY29sb3I6ICNGMDA7IH1cbn1cbkAtbW96LWtleWZyYW1lcyBibGlua1JlZCB7XG4gICAgZnJvbSB7IGJhY2tncm91bmQtY29sb3I6ICNGMDA7IH1cbiAgICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjQTAwOyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMCAtMXB4IDdweCAxcHgsIGluc2V0ICM0NDEzMTMgMCAtMXB4IDlweCwgcmdiYSgyNTUsIDAsIDAsIDAuNSkgMCAycHggMDt9XG4gICAgdG8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjRjAwOyB9XG59XG5ALW1zLWtleWZyYW1lcyBibGlua1JlZCB7XG4gICAgZnJvbSB7IGJhY2tncm91bmQtY29sb3I6ICNGMDA7IH1cbiAgICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjQTAwOyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMCAtMXB4IDdweCAxcHgsIGluc2V0ICM0NDEzMTMgMCAtMXB4IDlweCwgcmdiYSgyNTUsIDAsIDAsIDAuNSkgMCAycHggMDt9XG4gICAgdG8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjRjAwOyB9XG59XG5ALW8ta2V5ZnJhbWVzIGJsaW5rUmVkIHtcbiAgICBmcm9tIHsgYmFja2dyb3VuZC1jb2xvcjogI0YwMDsgfVxuICAgIDUwJSB7IGJhY2tncm91bmQtY29sb3I6ICNBMDA7IGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwIC0xcHggN3B4IDFweCwgaW5zZXQgIzQ0MTMxMyAwIC0xcHggOXB4LCByZ2JhKDI1NSwgMCwgMCwgMC41KSAwIDJweCAwO31cbiAgICB0byB7IGJhY2tncm91bmQtY29sb3I6ICNGMDA7IH1cbn1cbkBrZXlmcmFtZXMgYmxpbmtSZWQge1xuICAgIGZyb20geyBiYWNrZ3JvdW5kLWNvbG9yOiAjRjAwOyB9XG4gICAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogI0EwMDsgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDAgLTFweCA3cHggMXB4LCBpbnNldCAjNDQxMzEzIDAgLTFweCA5cHgsIHJnYmEoMjU1LCAwLCAwLCAwLjUpIDAgMnB4IDA7fVxuICAgIHRvIHsgYmFja2dyb3VuZC1jb2xvcjogI0YwMDsgfVxufVxuXG4ubGVkLXllbGxvdyB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwIC0xcHggN3B4IDFweCwgaW5zZXQgIzgwODAwMiAwIC0xcHggOXB4LCAjRkYwIDAgMnB4IDEycHg7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiBibGlua1llbGxvdyAxcyBpbmZpbml0ZTtcbiAgLW1vei1hbmltYXRpb246IGJsaW5rWWVsbG93IDFzIGluZmluaXRlO1xuICAtbXMtYW5pbWF0aW9uOiBibGlua1llbGxvdyAxcyBpbmZpbml0ZTtcbiAgLW8tYW5pbWF0aW9uOiBibGlua1llbGxvdyAxcyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiBibGlua1llbGxvdyAxcyBpbmZpbml0ZTtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rWWVsbG93IHtcbiAgICBmcm9tIHsgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDsgfVxuICAgIDUwJSB7IGJhY2tncm91bmQtY29sb3I6ICNBQTA7IGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwIC0xcHggN3B4IDFweCwgaW5zZXQgIzgwODAwMiAwIC0xcHggOXB4LCAjRkYwIDAgMnB4IDA7IH1cbiAgICB0byB7IGJhY2tncm91bmQtY29sb3I6ICNGRjA7IH1cbn1cbkAtbW96LWtleWZyYW1lcyBibGlua1llbGxvdyB7XG4gICAgZnJvbSB7IGJhY2tncm91bmQtY29sb3I6ICNGRjA7IH1cbiAgICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwOyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMCAtMXB4IDdweCAxcHgsIGluc2V0ICM4MDgwMDIgMCAtMXB4IDlweCwgI0ZGMCAwIDJweCAwOyB9XG4gICAgdG8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwOyB9XG59XG5ALW1zLWtleWZyYW1lcyBibGlua1llbGxvdyB7XG4gICAgZnJvbSB7IGJhY2tncm91bmQtY29sb3I6ICNGRjA7IH1cbiAgICA1MCUgeyBiYWNrZ3JvdW5kLWNvbG9yOiAjQUEwOyBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMikgMCAtMXB4IDdweCAxcHgsIGluc2V0ICM4MDgwMDIgMCAtMXB4IDlweCwgI0ZGMCAwIDJweCAwOyB9XG4gICAgdG8geyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwOyB9XG59XG5ALW8ta2V5ZnJhbWVzIGJsaW5rWWVsbG93IHtcbiAgICBmcm9tIHsgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDsgfVxuICAgIDUwJSB7IGJhY2tncm91bmQtY29sb3I6ICNBQTA7IGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4yKSAwIC0xcHggN3B4IDFweCwgaW5zZXQgIzgwODAwMiAwIC0xcHggOXB4LCAjRkYwIDAgMnB4IDA7IH1cbiAgICB0byB7IGJhY2tncm91bmQtY29sb3I6ICNGRjA7IH1cbn1cbkBrZXlmcmFtZXMgYmxpbmtZZWxsb3cge1xuICAgIGZyb20geyBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwOyB9XG4gICAgNTAlIHsgYmFja2dyb3VuZC1jb2xvcjogI0FBMDsgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDAgLTFweCA3cHggMXB4LCBpbnNldCAjODA4MDAyIDAgLTFweCA5cHgsICNGRjAgMCAycHggMDsgfVxuICAgIHRvIHsgYmFja2dyb3VuZC1jb2xvcjogI0ZGMDsgfVxufVxuXG4ubGVkLWdyZWVuIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNBQkZGMDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDAgLTFweCA3cHggMXB4LCBpbnNldCAjMzA0NzAxIDAgLTFweCA5cHgsICM4OUZGMDAgMCAycHggMTJweDtcbn1cblxuLmxlZC1ibHVlIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHdpZHRoOiAyNHB4O1xuICBoZWlnaHQ6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNEUwRkY7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDAgLTFweCA3cHggMXB4LCBpbnNldCAjMDA2IDAgLTFweCA5cHgsICMzRjhDRkYgMCAycHggMTRweDtcbn1cbiAgXG4gICJdfQ== */"] });
    return DashboardHomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard-home',
                templateUrl: './dashboard-home.component.html',
                styleUrls: ['./dashboard-home.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_1__["NotificationService"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony import */ var _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-home/dashboard-home.component */ "./src/app/dashboard/dashboard-home/dashboard-home.component.ts");






var routes = [
    {
        path: '',
        component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', component: _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_3__["DashboardHomeComponent"] }
        ]
    }
];
var DashboardRoutingModule = /** @class */ (function () {
    function DashboardRoutingModule() {
    }
    DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
    DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return DashboardRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-home/dashboard-home.component */ "./src/app/dashboard/dashboard-home/dashboard-home.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var echarts_theme_macarons_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! echarts/theme/macarons.js */ "./node_modules/echarts/theme/macarons.js");
/* harmony import */ var echarts_theme_macarons_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(echarts_theme_macarons_js__WEBPACK_IMPORTED_MODULE_7__);





// import { AssetHomeComponent } from './asset-home/asset-home.component';





var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DashboardModule });
    DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DashboardModule_Factory(t) { return new (t || DashboardModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"].forRoot({ echarts: echarts__WEBPACK_IMPORTED_MODULE_6__ }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ]] });
    return DashboardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_4__["DashboardHomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_dashboard_home_dashboard_home_component__WEBPACK_IMPORTED_MODULE_4__["DashboardHomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_2__["DashboardRoutingModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"].forRoot({ echarts: echarts__WEBPACK_IMPORTED_MODULE_6__ }),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
                ],
                entryComponents: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map