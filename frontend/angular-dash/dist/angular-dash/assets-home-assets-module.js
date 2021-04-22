(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["assets-home-assets-module"],{

/***/ "./node_modules/rxjs-compat/add/observable/interval.js":
/*!*************************************************************!*\
  !*** ./node_modules/rxjs-compat/add/observable/interval.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

rxjs_1.Observable.interval = rxjs_1.interval;

/***/ }),

/***/ "./node_modules/rxjs-compat/add/operator/startWith.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/add/operator/startWith.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

var startWith_1 = __webpack_require__(/*! ../../operator/startWith */ "./node_modules/rxjs-compat/operator/startWith.js");

rxjs_1.Observable.prototype.startWith = startWith_1.startWith;

/***/ }),

/***/ "./node_modules/rxjs-compat/add/operator/switchMap.js":
/*!************************************************************!*\
  !*** ./node_modules/rxjs-compat/add/operator/switchMap.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

var switchMap_1 = __webpack_require__(/*! ../../operator/switchMap */ "./node_modules/rxjs-compat/operator/switchMap.js");

rxjs_1.Observable.prototype.switchMap = switchMap_1.switchMap;

/***/ }),

/***/ "./node_modules/rxjs-compat/operator/startWith.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs-compat/operator/startWith.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* tslint:enable:max-line-length */

/**
 * Returns an Observable that emits the items you specify as arguments before it begins to emit
 * items emitted by the source Observable.
 *
 * <img src="./img/startWith.png" width="100%">
 *
 * @param {...T} values - Items you want the modified Observable to emit first.
 * @param {Scheduler} [scheduler] - A {@link IScheduler} to use for scheduling
 * the emissions of the `next` notifications.
 * @return {Observable} An Observable that emits the items in the specified Iterable and then emits the items
 * emitted by the source Observable.
 * @method startWith
 * @owner Observable
 */


function startWith() {
  var array = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    array[_i] = arguments[_i];
  }

  return operators_1.startWith.apply(void 0, array)(this);
}

exports.startWith = startWith;

/***/ }),

/***/ "./node_modules/rxjs-compat/operator/switchMap.js":
/*!********************************************************!*\
  !*** ./node_modules/rxjs-compat/operator/switchMap.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */


function switchMap(project) {
  return operators_1.switchMap(project)(this);
}

exports.switchMap = switchMap;

/***/ }),

/***/ "./node_modules/rxjs/add/observable/interval.js":
/*!******************************************************!*\
  !*** ./node_modules/rxjs/add/observable/interval.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! rxjs-compat/add/observable/interval */ "./node_modules/rxjs-compat/add/observable/interval.js");

/***/ }),

/***/ "./node_modules/rxjs/add/operator/startWith.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/add/operator/startWith.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! rxjs-compat/add/operator/startWith */ "./node_modules/rxjs-compat/add/operator/startWith.js");

/***/ }),

/***/ "./node_modules/rxjs/add/operator/switchMap.js":
/*!*****************************************************!*\
  !*** ./node_modules/rxjs/add/operator/switchMap.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! rxjs-compat/add/operator/switchMap */ "./node_modules/rxjs-compat/add/operator/switchMap.js");

/***/ }),

/***/ "./src/app/assets-home/assets-home/assets-home.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/assets-home/assets-home/assets-home.component.ts ***!
  \******************************************************************/
/*! exports provided: AssetsHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsHomeComponent", function() { return AssetsHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/interval */ "./node_modules/rxjs/add/observable/interval.js");
/* harmony import */ var rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_observable_interval__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_add_operator_startWith__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/startWith */ "./node_modules/rxjs/add/operator/startWith.js");
/* harmony import */ var rxjs_add_operator_startWith__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_startWith__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/switchMap */ "./node_modules/rxjs/add/operator/switchMap.js");
/* harmony import */ var rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(rxjs_add_operator_switchMap__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/services/auth.service */ "./src/app/core/services/auth.service.ts");
/* harmony import */ var src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/core/services/notification.service */ "./src/app/core/services/notification.service.ts");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");



// import { NGXLogger } from 'ngx-logger';













function AssetsHomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r3 = ctx.index;
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("fxFlex", 100 / ctx_r0.gridColumns + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.sampleAssetModel[i_r3].name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.sampleAssetModel[i_r3].value);
} }
function AssetsHomeComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h1", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    var graph_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](graph_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", graph_r4.option);
} }
var ELEMENT_DATA = [
    { position: 'emoji_objects', name: 'Bulb', weight: 'On', symbol: '1hr 2min' },
    { position: 'support', name: 'Fan', weight: 'On', symbol: '2' },
    { position: 'wb_iridescent', name: 'Tube Light', weight: "On", symbol: '3' },
    { position: 'ac_unit', name: 'A.C.', weight: 'On', symbol: '4' }
];
var AssetsHomeComponent = /** @class */ (function () {
    function AssetsHomeComponent(notificationService, authService, titleService) {
        this.notificationService = notificationService;
        this.authService = authService;
        this.titleService = titleService;
        this.selectedItemsList = [];
        this.checkedIDs = [];
        this.checkboxesDataList = [
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
        ];
        this.loading = false;
        this.theme = 'dark';
        this.isConnected = false;
        // sampleValue:assetModel[];
        this.parametersData = [];
        this.sampleAssetModel = [];
        this.gridColumns = 7;
        this.butonState = [];
        this.displayedColumns = ['position', 'name', 'weight', 'symbol'];
        this.dataSource = ELEMENT_DATA;
    }
    // valueBtns:[];
    AssetsHomeComponent.prototype.toggleVisibility = function (e, i) {
        // this.marked= e.target.checked;
        console.log(JSON.stringify(e));
        // this.butonState[i].marked=e;
        console.log("button=", this.butonState[i].marked, "  ", e.target.checked);
    };
    AssetsHomeComponent.prototype.toggleGridColumns = function () {
        this.gridColumns = this.gridColumns === 3 ? 4 : 3;
    };
    // ngOnDestroy(): void {
    //   this.subscription.unsubscribe();
    // }
    AssetsHomeComponent.prototype.changeSelection = function (event, i) {
        console.log("Button ", i, "switchinggg = ", this.sampleAssetModel[i].isChecked);
        this.setParamValue(i);
        this.fetchSelectedItems();
    };
    AssetsHomeComponent.prototype.fetchSelectedItems = function () {
        this.selectedItemsList = this.sampleAssetModel.filter(function (value, index) {
            // console.log("Button Switched = ",value.isChecked)
            return value.isChecked;
        });
    };
    AssetsHomeComponent.prototype.fetchCheckedIDs = function () {
        var _this = this;
        this.checkedIDs = [];
        this.sampleAssetModel.forEach(function (value, index) {
            if (value.isChecked) {
                _this.checkedIDs.push(value._id);
                // console.log("Button Switching= ",value.isChecked)
            }
        });
    };
    AssetsHomeComponent.prototype.getDefaultAnalytics = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var id, rData;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = this.authService.getAssetIdForParameter();
                        rData = [];
                        return [4 /*yield*/, this.authService.getAnalytics(id)
                                .subscribe(function (data) {
                                console.log(JSON.stringify(data));
                                //   rData=data.response.parameters
                                rData = data.data;
                                // console.log("hi there",JSON.stringify(rData))
                                var i = 0;
                                _this.graphs = rData;
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
    AssetsHomeComponent.prototype.ngOnInit = function () {
        this.titleService.setTitle('IoT Platform');
        // this.logger.log('Dashboard loaded');
        // this.subscribeToTopic();
        this.getParameters();
        this.getDefaultAnalytics();
        // this.fetchSelectedItems()
        // this.fetchCheckedIDs()
    };
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
    AssetsHomeComponent.prototype.setParamValue = function (i) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var id, val, _data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authService.getAssetIdForParameter()];
                    case 1:
                        id = _a.sent();
                        console.log("hi222222 ");
                        console.log(this.sampleAssetModel[i]._id);
                        if (this.sampleAssetModel[i].isChecked === true) {
                            val = '1';
                        }
                        else if (this.sampleAssetModel[i].isChecked === false) {
                            val = '0';
                        }
                        _data = {
                            timestamp: 160000,
                            cmd: "DEVICE_CONTROL",
                            data: {
                                assetId: id,
                                parameterId: this.sampleAssetModel[i]._id,
                                value: val
                            }
                        };
                        console.log(JSON.stringify(_data));
                        return [4 /*yield*/, this.authService.setParamValue(_data)
                                .subscribe(function (data) {
                                console.log(data);
                                // this.sampleAssetModel=data.parameters
                                console.log(data);
                            }, function (error) {
                                // this.notificationService.openSnackBar(error.error);
                            })];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AssetsHomeComponent.prototype.fillParams = function (sentData) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var mydata, i;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                i = 0;
                // await console.log("len",sentData)
                // await console.log("hiiii")
                // for(i=0;i=sentData.length;i++){
                //   mydata._id=sentData[i]._id;;
                //   mydata.parameterName=sentData[i].parameterName
                //   mydata.parameterImgUrl=sentData[i].parameterImgUrl;
                //   mydata.parameterType=sentData[i].parameterType;
                //   mydata.parameterValue=sentData[i].parameterValue
                //   console.log("hiiii")
                if (sentData[i].parameterValue === "1") {
                    mydata.marked = true;
                    mydata.theCheckbox = true;
                }
                else if (sentData[i].parameterValue === "0") {
                    mydata.marked = false;
                    mydata.theCheckbox = false;
                }
                else if (sentData[i].parameterValue === " ") {
                    mydata.marked = false;
                    mydata.theCheckbox = false;
                }
                this.butonState.push(mydata);
                return [2 /*return*/];
            });
        });
    };
    // await console.log("hola",this.parametersData)
    AssetsHomeComponent.prototype.getParameters = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var user, id;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        user = this.authService.getCurrentUser();
                        id = this.authService.getAssetIdForParameter();
                        return [4 /*yield*/, this.authService.getSpecificAssetParameters(Date.now(), id)
                                .subscribe(function (data) {
                                console.log(JSON.stringify(data));
                                // rData=data.response.parameters
                                _this.sampleAssetModel = data.data;
                                console.log("hi there amigos", JSON.stringify(_this.sampleAssetModel));
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
    AssetsHomeComponent.ɵfac = function AssetsHomeComponent_Factory(t) { return new (t || AssetsHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
    AssetsHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AssetsHomeComponent, selectors: [["app-assets-home"]], decls: 7, vars: 2, consts: [[1, "heading"], ["fxLayout", "row wrap", "fxLayoutGap", "20px grid", 1, "content"], ["fxFlex.xs", "100%", "fxFlex.sm", "33%", 3, "fxFlex", 4, "ngFor", "ngForOf"], [1, "content"], ["fxLayout", "column", "fxLayoutGap", "20px", 4, "ngFor", "ngForOf"], ["fxFlex.xs", "100%", "fxFlex.sm", "33%", 3, "fxFlex"], ["id", "button-card"], ["fxLayout", "column", "fxLayoutGap", "20px"], ["fxLayoutAlign", "space-between center"], [1, "main_title"], [1, "chart"], ["echarts", "", 1, "chart", 3, "options"]], template: function AssetsHomeComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Assets");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, AssetsHomeComponent_div_4_Template, 6, 3, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AssetsHomeComponent_div_6_Template, 6, 2, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.sampleAssetModel);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.graphs);
        } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutGapDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], ngx_echarts__WEBPACK_IMPORTED_MODULE_11__["NgxEchartsDirective"]], styles: [".chart[_ngcontent-%COMP%] {\n  height: 40vh;\n}\n.chart-lg[_ngcontent-%COMP%] {\n  height: 700px;\n}\n.title-accro[_ngcontent-%COMP%]   .mat-expansion-panel-header-title[_ngcontent-%COMP%], .title-accro[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  flex-basis: 0 !important;\n}\n.title-accro[_ngcontent-%COMP%]   .mat-expansion-panel-header-description[_ngcontent-%COMP%] {\n  justify-content: space-between !important;\n  align-items: center !important;\n}\n.title-accro[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%]    + .mat-form-field[_ngcontent-%COMP%] {\n  margin-left: 8px !important;\n}\n.content[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n.content[_ngcontent-%COMP%]    > mat-card[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.heading[_ngcontent-%COMP%]{\n  padding-left: 2vw;\n  color:#424242;\n  padding-top: 0%;\n  padding-bottom: 0%;\n}\n\n.heart-rate[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 20px;\n  position: relative;\n  margin: 20px auto;\n}\n.fade-in[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  background-color: #ffe082;\n  top: 0;\n  right: 0;\n  -webkit-animation: heartRateIn 2.5s linear infinite;\n          animation: heartRateIn 2.5s linear infinite;\n}\n.fade-out[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 120%;\n  height: 100%;\n  top: 0;\n  left: -120%;\n  -webkit-animation: heartRateOut 2.5s linear infinite;\n          animation: heartRateOut 2.5s linear infinite;\n  background: #ffe082;\n  background: linear-gradient(to right, #ffe082 0%, #ffe082 80%, rgba(255, 255, 255, 0) 100%);\n}\n@-webkit-keyframes heartRateIn {\n  0% {\n    width: 100%;\n  }\n  50% {\n    width: 0;\n  }\n  100% {\n    width: 0;\n  }\n}\n@keyframes heartRateIn {\n  0% {\n    width: 100%;\n  }\n  50% {\n    width: 0;\n  }\n  100% {\n    width: 0;\n  }\n}\n@-webkit-keyframes heartRateOut {\n  0% {\n    left: -120%;\n  }\n  30% {\n    left: -120%;\n  }\n  100% {\n    left: 0;\n  }\n}\n@keyframes heartRateOut {\n  0% {\n    left: -120%;\n  }\n  30% {\n    left: -120%;\n  }\n  100% {\n    left: 0;\n  }\n}\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n \n  width: 10vh; \n  height: 10vh;\n}\nmat-card-content[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{\n  padding: 0;\n  margin: 0;\n}\n#assetStatus[_ngcontent-%COMP%]{\n  color: green;\n}\n\n\n#powerHeight[_ngcontent-%COMP%]{\n  width: 100px;\n  height: 100px;\n}\n.power-switch[_ngcontent-%COMP%] {\n  --color-invert: #4ad81e;\n  --width: 150px;\n  --height: 150px;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: var(--width);\n  height: var(--height);\n}\n.power-switch[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.power-switch[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]:after {\n  content: \"\";\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  background: radial-gradient(circle closest-side, var(--color-invert), transparent);\n  -webkit-filter: blur(20px);\n          filter: blur(20px);\n  opacity: 0;\n  transition: opacity 1s ease, transform 1s ease;\n  transform: perspective(1px) translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n.power-switch[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .power-on[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  z-index: 1;\n  fill: none;\n  stroke: var(--color-invert);\n  stroke-width: 8px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.power-switch[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .power-off[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  z-index: 1;\n  fill: none;\n  stroke: red;\n  stroke-width: 8px;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.power-switch[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .power-on[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%], .power-switch[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .power-off[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n.power-switch[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .power-on[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], .power-switch[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .power-off[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  opacity: 0.2;\n  transform: rotate(-58deg);\n  transform-origin: center 80px;\n  stroke-dasharray: 220;\n  stroke-dashoffset: 40;\n}\n.power-switch[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .power-on[_ngcontent-%COMP%] {\n  -webkit-filter: drop-shadow(0px 0px 6px rgba(3, 230, 41, 0.8));\n          filter: drop-shadow(0px 0px 6px rgba(3, 230, 41, 0.8));\n}\n.power-switch[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .power-on[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 0.3s ease 1s;\n}\n.power-switch[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   .power-on[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  opacity: 1;\n  stroke-dashoffset: 220;\n  transition: transform 0s ease, stroke-dashoffset 1s ease 0s;\n}\n.power-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  z-index: 2;\n  cursor: pointer;\n  opacity: 0;\n}\n.power-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .button[_ngcontent-%COMP%]:after {\n  opacity: 0.15;\n  transform: scale(2) perspective(1px) translateZ(0);\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  transition: opacity 0.5s ease, transform 0.5s ease;\n}\n.power-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .button[_ngcontent-%COMP%]   .power-on[_ngcontent-%COMP%], .power-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .button[_ngcontent-%COMP%]   .power-off[_ngcontent-%COMP%] {\n  -webkit-animation: click-animation 0.3s ease forwards;\n          animation: click-animation 0.3s ease forwards;\n  transform: scale(1);\n}\n.power-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .button[_ngcontent-%COMP%]   .power-on[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%], .power-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .button[_ngcontent-%COMP%]   .power-off[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  -webkit-animation: line-animation 0.8s ease-in forwards;\n          animation: line-animation 0.8s ease-in forwards;\n}\n.power-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .button[_ngcontent-%COMP%]   .power-on[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%], .power-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .button[_ngcontent-%COMP%]   .power-off[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  transform: rotate(302deg);\n}\n.power-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .button[_ngcontent-%COMP%]   .power-on[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.05s ease-in 0.55s;\n}\n.power-switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .button[_ngcontent-%COMP%]   .power-on[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n  transform: rotate(302deg);\n  stroke-dashoffset: 40;\n  transition: transform 0.4s ease 0.2s, stroke-dashoffset 0.4s ease 0.2s;\n}\n@-webkit-keyframes line-animation {\n  0% {\n    transform: translateY(0);\n  }\n  10% {\n    transform: translateY(10px);\n  }\n  40% {\n    transform: translateY(-25px);\n  }\n  60% {\n    transform: translateY(-25px);\n  }\n  85% {\n    transform: translateY(10px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n@keyframes line-animation {\n  0% {\n    transform: translateY(0);\n  }\n  10% {\n    transform: translateY(10px);\n  }\n  40% {\n    transform: translateY(-25px);\n  }\n  60% {\n    transform: translateY(-25px);\n  }\n  85% {\n    transform: translateY(10px);\n  }\n  100% {\n    transform: translateY(0px);\n  }\n}\n@-webkit-keyframes click-animation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n@keyframes click-animation {\n  0% {\n    transform: scale(1);\n  }\n  50% {\n    transform: scale(0.9);\n  }\n  100% {\n    transform: scale(1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXNzZXRzLWhvbWUvYXNzZXRzLWhvbWUvYXNzZXRzLWhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0g7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLGFBQWE7QUFDZjtBQUNBOztFQUVFLHdCQUF3QjtBQUMxQjtBQUVBO0VBQ0UseUNBQXlDO0VBQ3pDLDhCQUE4QjtBQUNoQztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBR0E7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0FBRUE7OztHQUdHO0FBSUg7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixNQUFNO0VBQ04sUUFBUTtFQUNSLG1EQUEyQztVQUEzQywyQ0FBMkM7QUFDN0M7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLE1BQU07RUFDTixXQUFXO0VBQ1gsb0RBQTRDO1VBQTVDLDRDQUE0QztFQUM1QyxtQkFBbUI7RUFLbkIsMkZBQTJGO0FBQzdGO0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsUUFBUTtFQUNWO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7QUFDRjtBQVZBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UsUUFBUTtFQUNWO0FBQ0Y7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7RUFDQTtJQUNFLE9BQU87RUFDVDtBQUNGO0FBVkE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsV0FBVztFQUNiO0VBQ0E7SUFDRSxPQUFPO0VBQ1Q7QUFDRjtBQUVBOztFQUVFLFdBQVcsRUFBRSw0RkFBNEY7RUFDekcsWUFBWTtBQUNkO0FBR0E7RUFDRSxVQUFVO0VBQ1YsU0FBUztBQUNYO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTs7R0FFRztBQUlILCtDQUErQztBQUMvQztFQUNFLFlBQVk7RUFDWixhQUFhO0FBQ2Y7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGtCQUFrQjtFQUVsQixhQUFhO0VBRUwsdUJBQXVCO0VBRXZCLG1CQUFtQjtFQUMzQixtQkFBbUI7RUFDbkIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUVaLGFBQWE7RUFFTCx1QkFBdUI7RUFFdkIsbUJBQW1CO0VBQzNCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGtGQUFrRjtFQUNsRiwwQkFBMEI7VUFDbEIsa0JBQWtCO0VBQzFCLFVBQVU7RUFHViw4Q0FBOEM7RUFHdEMseUNBQXlDO0VBQ2pELG1DQUFtQztVQUMzQiwyQkFBMkI7QUFDckM7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsVUFBVTtFQUNWLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4QjtBQUVBOztFQUVFLFlBQVk7QUFDZDtBQUNBOztFQUVFLFlBQVk7RUFFSix5QkFBeUI7RUFFekIsNkJBQTZCO0VBQ3JDLHFCQUFxQjtFQUNyQixxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLDhEQUE4RDtVQUN0RCxzREFBc0Q7QUFDaEU7QUFJQTtFQUNFLFVBQVU7RUFFVixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLFVBQVU7RUFDVixzQkFBc0I7RUFHdEIsMkRBQTJEO0FBRTdEO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsZUFBZTtFQUNmLFVBQVU7QUFDWjtBQUNBO0VBQ0UsYUFBYTtFQUVMLGtEQUFrRDtFQUMxRCxtQ0FBbUM7VUFDM0IsMkJBQTJCO0VBR25DLGtEQUFrRDtBQUVwRDtBQUNBOztFQUVFLHFEQUFxRDtVQUM3Qyw2Q0FBNkM7RUFFN0MsbUJBQW1CO0FBQzdCO0FBQ0E7O0VBRUUsdURBQXVEO1VBQy9DLCtDQUErQztBQUN6RDtBQUNBOztFQUdVLHlCQUF5QjtBQUNuQztBQUNBO0VBQ0UsVUFBVTtFQUVWLHVDQUF1QztBQUN6QztBQUNBO0VBRVUseUJBQXlCO0VBQ2pDLHFCQUFxQjtFQUdyQixzRUFBc0U7QUFFeEU7QUFFQTtFQUNFO0lBRVUsd0JBQXdCO0VBQ2xDO0VBQ0E7SUFFVSwyQkFBMkI7RUFDckM7RUFDQTtJQUVVLDRCQUE0QjtFQUN0QztFQUNBO0lBRVUsNEJBQTRCO0VBQ3RDO0VBQ0E7SUFFVSwyQkFBMkI7RUFDckM7RUFDQTtJQUVVLDBCQUEwQjtFQUNwQztBQUNGO0FBRUE7RUFDRTtJQUVVLHdCQUF3QjtFQUNsQztFQUNBO0lBRVUsMkJBQTJCO0VBQ3JDO0VBQ0E7SUFFVSw0QkFBNEI7RUFDdEM7RUFDQTtJQUVVLDRCQUE0QjtFQUN0QztFQUNBO0lBRVUsMkJBQTJCO0VBQ3JDO0VBQ0E7SUFFVSwwQkFBMEI7RUFDcEM7QUFDRjtBQUNBO0VBQ0U7SUFFVSxtQkFBbUI7RUFDN0I7RUFDQTtJQUVVLHFCQUFxQjtFQUMvQjtFQUNBO0lBRVUsbUJBQW1CO0VBQzdCO0FBQ0Y7QUFDQTtFQUNFO0lBRVUsbUJBQW1CO0VBQzdCO0VBQ0E7SUFFVSxxQkFBcUI7RUFDL0I7RUFDQTtJQUVVLG1CQUFtQjtFQUM3QjtBQUNGO0FBRUE7O0dBRUciLCJmaWxlIjoic3JjL2FwcC9hc3NldHMtaG9tZS9hc3NldHMtaG9tZS9hc3NldHMtaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLnRpdGxlLWFjY3JvIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci1kZXNjcmlwdGlvbntcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWJhc2lzOiAwO1xufSAqL1xuLmNoYXJ0IHtcbiAgaGVpZ2h0OiA0MHZoO1xufVxuXG4uY2hhcnQtbGcge1xuICBoZWlnaHQ6IDcwMHB4O1xufVxuLnRpdGxlLWFjY3JvIC5tYXQtZXhwYW5zaW9uLXBhbmVsLWhlYWRlci10aXRsZSxcbi50aXRsZS1hY2NybyAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBmbGV4LWJhc2lzOiAwICFpbXBvcnRhbnQ7XG59XG5cbi50aXRsZS1hY2NybyAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItZGVzY3JpcHRpb24ge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlciAhaW1wb3J0YW50O1xufVxuXG4udGl0bGUtYWNjcm8gLm1hdC1mb3JtLWZpZWxkICsgLm1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLWxlZnQ6IDhweCAhaW1wb3J0YW50O1xufVxuXG5cbi5jb250ZW50IHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmNvbnRlbnQgPiBtYXQtY2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG59XG4uaGVhZGluZ3tcbiAgcGFkZGluZy1sZWZ0OiAydnc7XG4gIGNvbG9yOiM0MjQyNDI7XG4gIHBhZGRpbmctdG9wOiAwJTtcbiAgcGFkZGluZy1ib3R0b206IDAlO1xufVxuXG4vKiBtYXQtY2FyZCB7XG4gIGJhY2tncm91bmQ6I2ZmZTA4MjtcbiAgY29sb3I6ICM0MjQyNDI7XG59ICovXG5cblxuXG4uaGVhcnQtcmF0ZSB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAyMHB4IGF1dG87XG59XG5cbi5mYWRlLWluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlMDgyO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBhbmltYXRpb246IGhlYXJ0UmF0ZUluIDIuNXMgbGluZWFyIGluZmluaXRlO1xufVxuXG4uZmFkZS1vdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMjAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogLTEyMCU7XG4gIGFuaW1hdGlvbjogaGVhcnRSYXRlT3V0IDIuNXMgbGluZWFyIGluZmluaXRlO1xuICBiYWNrZ3JvdW5kOiAjZmZlMDgyO1xuICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZlMDgyIDAlLCAjZmZlMDgyIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQobGVmdCwgI2ZmZTA4MiAwJSwgI2ZmZTA4MiA1MCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMTAwJSk7XG4gIGJhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZlMDgyIDAlLCAjZmZlMDgyIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogLW1zLWxpbmVhci1ncmFkaWVudChsZWZ0LCAjZmZlMDgyIDAlLCAjZmZlMDgyIDUwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZlMDgyIDAlLCAjZmZlMDgyIDgwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbn1cblxuQGtleWZyYW1lcyBoZWFydFJhdGVJbiB7XG4gIDAlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICA1MCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIDEwMCUge1xuICAgIHdpZHRoOiAwO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgaGVhcnRSYXRlT3V0IHtcbiAgMCUge1xuICAgIGxlZnQ6IC0xMjAlO1xuICB9XG4gIDMwJSB7XG4gICAgbGVmdDogLTEyMCU7XG4gIH1cbiAgMTAwJSB7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuXG5tYXQtY2FyZCBpbWd7XG4gXG4gIHdpZHRoOiAxMHZoOyAvKiBIZXJlIHlvdSBjYW4gdXNlIHdoZXJldmVyIHlvdSB3YW50IHRvIHNwZWNpZnkgdGhlIHdpZHRoIGFuZCBhbHNvIHRoZSBoZWlnaHQgb2YgdGhlIDxpbWc+Ki9cbiAgaGVpZ2h0OiAxMHZoO1xufVxuXG5cbm1hdC1jYXJkLWNvbnRlbnQgaDV7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuI2Fzc2V0U3RhdHVze1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi8qICNhc3NldE9ubGluZVN0YXR1c3tcbiAgY29sb3I6ICMwMDA7XG59ICovXG5cblxuXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiNwb3dlckhlaWdodHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4ucG93ZXItc3dpdGNoIHtcbiAgLS1jb2xvci1pbnZlcnQ6ICM0YWQ4MWU7XG4gIC0td2lkdGg6IDE1MHB4O1xuICAtLWhlaWdodDogMTUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogdmFyKC0td2lkdGgpO1xuICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XG59XG4ucG93ZXItc3dpdGNoIC5idXR0b24ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5wb3dlci1zd2l0Y2ggLmJ1dHRvbjphZnRlciB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBjbG9zZXN0LXNpZGUsIHZhcigtLWNvbG9yLWludmVydCksIHRyYW5zcGFyZW50KTtcbiAgLXdlYmtpdC1maWx0ZXI6IGJsdXIoMjBweCk7XG4gICAgICAgICAgZmlsdGVyOiBibHVyKDIwcHgpO1xuICBvcGFjaXR5OiAwO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMXMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gMXMgZWFzZTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAxcyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAxcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UsIHRyYW5zZm9ybSAxcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDFzIGVhc2UsIHRyYW5zZm9ybSAxcyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAxcyBlYXNlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xuICAgICAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoMXB4KSB0cmFuc2xhdGVaKDApO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5wb3dlci1zd2l0Y2ggLmJ1dHRvbiAucG93ZXItb24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogdmFyKC0tY29sb3ItaW52ZXJ0KTtcbiAgc3Ryb2tlLXdpZHRoOiA4cHg7XG4gIHN0cm9rZS1saW5lY2FwOiByb3VuZDtcbiAgc3Ryb2tlLWxpbmVqb2luOiByb3VuZDtcbn1cblxuLnBvd2VyLXN3aXRjaCAuYnV0dG9uIC5wb3dlci1vZmYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDE7XG4gIGZpbGw6IG5vbmU7XG4gIHN0cm9rZTogcmVkO1xuICBzdHJva2Utd2lkdGg6IDhweDtcbiAgc3Ryb2tlLWxpbmVjYXA6IHJvdW5kO1xuICBzdHJva2UtbGluZWpvaW46IHJvdW5kO1xufVxuXG4ucG93ZXItc3dpdGNoIC5idXR0b24gLnBvd2VyLW9uIC5saW5lLFxuLnBvd2VyLXN3aXRjaCAuYnV0dG9uIC5wb3dlci1vZmYgLmxpbmUge1xuICBvcGFjaXR5OiAwLjI7XG59XG4ucG93ZXItc3dpdGNoIC5idXR0b24gLnBvd2VyLW9uIC5jaXJjbGUsXG4ucG93ZXItc3dpdGNoIC5idXR0b24gLnBvd2VyLW9mZiAuY2lyY2xlIHtcbiAgb3BhY2l0eTogMC4yO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC01OGRlZyk7XG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTU4ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgODBweDtcbiAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgODBweDtcbiAgc3Ryb2tlLWRhc2hhcnJheTogMjIwO1xuICBzdHJva2UtZGFzaG9mZnNldDogNDA7XG59XG4ucG93ZXItc3dpdGNoIC5idXR0b24gLnBvd2VyLW9uIHtcbiAgLXdlYmtpdC1maWx0ZXI6IGRyb3Atc2hhZG93KDBweCAwcHggNnB4IHJnYmEoMywgMjMwLCA0MSwgMC44KSk7XG4gICAgICAgICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggMHB4IDZweCByZ2JhKDMsIDIzMCwgNDEsIDAuOCkpO1xufVxuXG5cblxuLnBvd2VyLXN3aXRjaCAuYnV0dG9uIC5wb3dlci1vbiAubGluZSB7XG4gIG9wYWNpdHk6IDA7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UgMXM7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlIDFzO1xufVxuLnBvd2VyLXN3aXRjaCAuYnV0dG9uIC5wb3dlci1vbiAuY2lyY2xlIHtcbiAgb3BhY2l0eTogMTtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDIyMDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAxcyBlYXNlIDBzLCAtd2Via2l0LXRyYW5zZm9ybSAwcyBlYXNlO1xuICB0cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAxcyBlYXNlIDBzLCAtd2Via2l0LXRyYW5zZm9ybSAwcyBlYXNlO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMgZWFzZSwgc3Ryb2tlLWRhc2hvZmZzZXQgMXMgZWFzZSAwcztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzIGVhc2UsIHN0cm9rZS1kYXNob2Zmc2V0IDFzIGVhc2UgMHMsIC13ZWJraXQtdHJhbnNmb3JtIDBzIGVhc2U7XG59XG4ucG93ZXItc3dpdGNoIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG9wYWNpdHk6IDA7XG59XG4ucG93ZXItc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuYnV0dG9uOmFmdGVyIHtcbiAgb3BhY2l0eTogMC4xNTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDIpIHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDIpIHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAtd2Via2l0LXRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAwLjVzIGVhc2U7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLCB0cmFuc2Zvcm0gMC41cyBlYXNlO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZSwgdHJhbnNmb3JtIDAuNXMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gMC41cyBlYXNlO1xufVxuLnBvd2VyLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLmJ1dHRvbiAucG93ZXItb24sXG4ucG93ZXItc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuYnV0dG9uIC5wb3dlci1vZmYge1xuICAtd2Via2l0LWFuaW1hdGlvbjogY2xpY2stYW5pbWF0aW9uIDAuM3MgZWFzZSBmb3J3YXJkcztcbiAgICAgICAgICBhbmltYXRpb246IGNsaWNrLWFuaW1hdGlvbiAwLjNzIGVhc2UgZm9yd2FyZHM7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xufVxuLnBvd2VyLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLmJ1dHRvbiAucG93ZXItb24gLmxpbmUsXG4ucG93ZXItc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuYnV0dG9uIC5wb3dlci1vZmYgLmxpbmUge1xuICAtd2Via2l0LWFuaW1hdGlvbjogbGluZS1hbmltYXRpb24gMC44cyBlYXNlLWluIGZvcndhcmRzO1xuICAgICAgICAgIGFuaW1hdGlvbjogbGluZS1hbmltYXRpb24gMC44cyBlYXNlLWluIGZvcndhcmRzO1xufVxuLnBvd2VyLXN3aXRjaCBpbnB1dDpjaGVja2VkICsgLmJ1dHRvbiAucG93ZXItb24gLmNpcmNsZSxcbi5wb3dlci1zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCArIC5idXR0b24gLnBvd2VyLW9mZiAuY2lyY2xlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDJkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwMmRlZyk7XG59XG4ucG93ZXItc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuYnV0dG9uIC5wb3dlci1vbiAubGluZSB7XG4gIG9wYWNpdHk6IDE7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjA1cyBlYXNlLWluIDAuNTVzO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMDVzIGVhc2UtaW4gMC41NXM7XG59XG4ucG93ZXItc3dpdGNoIGlucHV0OmNoZWNrZWQgKyAuYnV0dG9uIC5wb3dlci1vbiAuY2lyY2xlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgzMDJkZWcpO1xuICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDMwMmRlZyk7XG4gIHN0cm9rZS1kYXNob2Zmc2V0OiA0MDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBzdHJva2UtZGFzaG9mZnNldCAwLjRzIGVhc2UgMC4ycywgLXdlYmtpdC10cmFuc2Zvcm0gMC40cyBlYXNlIDAuMnM7XG4gIHRyYW5zaXRpb246IHN0cm9rZS1kYXNob2Zmc2V0IDAuNHMgZWFzZSAwLjJzLCAtd2Via2l0LXRyYW5zZm9ybSAwLjRzIGVhc2UgMC4ycztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZSAwLjJzLCBzdHJva2UtZGFzaG9mZnNldCAwLjRzIGVhc2UgMC4ycztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNHMgZWFzZSAwLjJzLCBzdHJva2UtZGFzaG9mZnNldCAwLjRzIGVhc2UgMC4ycywgLXdlYmtpdC10cmFuc2Zvcm0gMC40cyBlYXNlIDAuMnM7XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBsaW5lLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgfVxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7XG4gIH1cbiAgODUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBsaW5lLWFuaW1hdGlvbiB7XG4gIDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgfVxuICAxMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwcHgpO1xuICB9XG4gIDQwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTI1cHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgfVxuICA2MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yNXB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjVweCk7XG4gIH1cbiAgODUlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBweCk7XG4gIH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBjbGljay1hbmltYXRpb24ge1xuICAwJSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgfVxuICA1MCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xuICB9XG4gIDEwMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cbkBrZXlmcmFtZXMgY2xpY2stYW5pbWF0aW9uIHtcbiAgMCUge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbiAgNTAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcbiAgfVxuICAxMDAlIHtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB9XG59XG5cbi8qIG1hdC10YWJsZXtcbiAgd2lkdGg6IDUwJTtcbn0gKi9cblxuXG5cbiJdfQ== */"] });
    return AssetsHomeComponent;
}());

/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AssetsHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-assets-home',
                templateUrl: './assets-home.component.html',
                styleUrls: ['./assets-home.component.css']
            }]
    }], function () { return [{ type: src_app_core_services_notification_service__WEBPACK_IMPORTED_MODULE_7__["NotificationService"] }, { type: src_app_core_services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/assets-home/assets-routing.module.ts":
/*!******************************************************!*\
  !*** ./src/app/assets-home/assets-routing.module.ts ***!
  \******************************************************/
/*! exports provided: AssetsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsRoutingModule", function() { return AssetsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/layout/layout.component */ "./src/app/shared/layout/layout.component.ts");
/* harmony import */ var _assets_home_assets_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets-home/assets-home.component */ "./src/app/assets-home/assets-home/assets-home.component.ts");






var routes = [
    {
        path: '',
        component: _shared_layout_layout_component__WEBPACK_IMPORTED_MODULE_2__["LayoutComponent"],
        children: [
            { path: '', component: _assets_home_assets_home_component__WEBPACK_IMPORTED_MODULE_3__["AssetsHomeComponent"] }
        ]
    }
];
var AssetsRoutingModule = /** @class */ (function () {
    function AssetsRoutingModule() {
    }
    AssetsRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AssetsRoutingModule });
    AssetsRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AssetsRoutingModule_Factory(t) { return new (t || AssetsRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
    return AssetsRoutingModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AssetsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetsRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/assets-home/assets.module.ts":
/*!**********************************************!*\
  !*** ./src/app/assets-home/assets.module.ts ***!
  \**********************************************/
/*! exports provided: AssetsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssetsModule", function() { return AssetsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _assets_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets-routing.module */ "./src/app/assets-home/assets-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _assets_home_assets_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets-home/assets-home.component */ "./src/app/assets-home/assets-home/assets-home.component.ts");
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-echarts */ "./node_modules/ngx-echarts/__ivy_ngcc__/fesm2015/ngx-echarts.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var echarts_theme_macarons_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! echarts/theme/macarons.js */ "./node_modules/echarts/theme/macarons.js");
/* harmony import */ var echarts_theme_macarons_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(echarts_theme_macarons_js__WEBPACK_IMPORTED_MODULE_7__);










// import { IMqttMessage, MqttModule, IMqttServiceOptions } from "ngx-mqtt";
//  var MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
//   hostname: '18.188.171.16',
//   port: 9001,
//   path: '/mqtt'
// }
var AssetsModule = /** @class */ (function () {
    function AssetsModule() {
    }
    AssetsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AssetsModule });
    AssetsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AssetsModule_Factory(t) { return new (t || AssetsModule)(); }, imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _assets_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssetsRoutingModule"],
                ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"].forRoot({ echarts: echarts__WEBPACK_IMPORTED_MODULE_6__ }),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            ]] });
    return AssetsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AssetsModule, { declarations: [_assets_home_assets_home_component__WEBPACK_IMPORTED_MODULE_4__["AssetsHomeComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _assets_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssetsRoutingModule"], ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AssetsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_assets_home_assets_home_component__WEBPACK_IMPORTED_MODULE_4__["AssetsHomeComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _assets_routing_module__WEBPACK_IMPORTED_MODULE_2__["AssetsRoutingModule"],
                    ngx_echarts__WEBPACK_IMPORTED_MODULE_5__["NgxEchartsModule"].forRoot({ echarts: echarts__WEBPACK_IMPORTED_MODULE_6__ }),
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                ],
                entryComponents: []
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=assets-home-assets-module.js.map