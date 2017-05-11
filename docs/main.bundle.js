webpackJsonp([2,4],{

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(46)(false);
// imports


// module
exports.push([module.i, ".form-container {\r\n    display:block;\r\n    width:90%;\r\n    padding:2em;\r\n    margin: 2em auto;\r\n    background:#fff;\r\n}\r\n\r\n.alert {\r\n    background: #f2edda;\r\n    padding: 7px;\r\n    font-size: .9em;\r\n    margin-bottom: 20px;\r\n    display: inline-block;\r\n    -webkit-animation: 2s alertAnim forwards;\r\n            animation: 2s alertAnim forwards;\r\n}\r\n\r\n.button {\r\n    margin-top: 3rem;\r\n}\r\nh1 {\r\n    margin-bottom: 2rem;\r\n    font-weight:bold;\r\n    font-family:'Muli';\r\n    font-size: 2em;\r\n}\r\n\r\n\r\n@-webkit-keyframes alertAnim {\r\n    from {\r\n        opacity:0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}\r\n\r\n\r\n@keyframes alertAnim {\r\n    from {\r\n        opacity:0;\r\n        -webkit-transform: translateY(-20px);\r\n                transform: translateY(-20px);\r\n    }\r\n    to {\r\n        opacity:1;\r\n        -webkit-transform: translateY(0);\r\n                transform: translateY(0);\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 139:
/***/ (function(module, exports) {

module.exports = "\n<div *ngIf=\"!name; else forminfo\">\n\t<form [formGroup]=\"rForm\" (ngSubmit)=\"addPost(rForm.value)\">\n\t\t<div class=\"form-container\">\n\t\t\t<div class=\"row columns\">\n\t\t\t\t<h1>My Reactive Form</h1>\n\n\t\t\t\t<label> Name\n\t\t\t\t\t<input type=\"text\" formControlName=\"name\">\n\t\t\t\t</label>\n\t\t\t\t<div class=\"alert\" *ngIf=\"!rForm.controls['name'].valid && rForm.controls['name'].touched\">\n\t\t\t\t\t{{ titleAlert }}\n\t\t\t\t</div>\n\n\t\t\t\t<label> Description\n\t\t\t\t\t<textarea formControlName=\"description\"></textarea>\n\t\t\t\t</label>\n\t\t\t\t<div class=\"alert\" *ngIf=\"!rForm.controls['description'].valid && rForm.controls['description'].touched\">\n\t\t\t\t\tYou must specify a description that's between 30 to 500 characters.\n\t\t\t\t</div>\n\n\t\t\t\t<label>\n\t\t\t\t\tMinimum of 3 Characters\n\t\t\t\t</label>\n\t\t\t\t<input type=\"checkbox\" name=\"validate\" formControlName=\"validate\" value=\"1\"> On\n\n\t\t\t\t<input type=\"submit\" class=\"button expanded\" value=\"Submit Form\" [disabled]=\"!rForm.valid\">\n\n\t\t\t</div>\n\t\t</div>\n\t</form>\n</div>\n\n<ng-template #forminfo>\n\t<div class=\"form-container\">\n\t\t<div class=\"row columns\">\n\t\t\t<h1>{{ name }}</h1>\n\t\t\t<p>{{ description }}</p>\n\t\t</div>\n\t</div>\n</ng-template>"

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),

/***/ 74:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 74;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(83);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_fb) {
        this._fb = _fb;
        this.description = "";
        this.name = "";
        this.titleAlert = "This field is required";
        this.rForm = _fb.group({
            "name": [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required],
            "description": [null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].compose([
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required,
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(30),
                    __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].maxLength(500)
                ])],
            "validate": ""
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rForm.get("validate").valueChanges.subscribe(function (validate) {
            if (validate == "1") {
                //Change the validator check and update the new message
                _this.rForm.get("name").setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].minLength(3)]);
                _this.titleAlert = "You need to specify at least 3 characters";
            }
            else {
                //Set the validator to required state
                _this.rForm.get("name").setValidators(__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required);
            }
            //update the form name value
            _this.rForm.get("name").updateValueAndValidity();
        });
    };
    AppComponent.prototype.addPost = function (post) {
        this.name = post.name;
        this.description = post.description;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(139),
        styles: [__webpack_require__(137)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[164]);
//# sourceMappingURL=main.bundle.js.map