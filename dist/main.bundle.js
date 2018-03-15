webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin-dash/admin-dash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin-dash/admin-dash.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  admin-dash works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin-dash/admin-dash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminDashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminDashComponent = /** @class */ (function () {
    function AdminDashComponent() {
    }
    AdminDashComponent.prototype.ngOnInit = function () {
    };
    AdminDashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin-dash',
            template: __webpack_require__("../../../../../src/app/admin/admin-dash/admin-dash.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin-dash/admin-dash.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminDashComponent);
    return AdminDashComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin-routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_admin_dash_admin_dash_component__ = __webpack_require__("../../../../../src/app/admin/admin-dash/admin-dash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_users_users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_cards_cards_component__ = __webpack_require__("../../../../../src/app/admin/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var adminRoutes = [
    {
        path: 'admin',
        component: __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_6__services_auth_guard_service__["a" /* AuthGuard */]],
                children: [
                    //{ path: '', component: DashComponent, canActivate: [AuthGuard] },
                    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_4__admin_users_users_component__["a" /* UsersComponent */] },
                    { path: 'cards', component: __WEBPACK_IMPORTED_MODULE_5__admin_cards_cards_component__["a" /* CardsComponent */] },
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__admin_admin_dash_admin_dash_component__["a" /* AdminDashComponent */] }
                    // { path: '**', redirectTo: '' }
                ]
            }
        ]
    }
];
var AdminRouting = /** @class */ (function () {
    function AdminRouting() {
    }
    AdminRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(adminRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ]
        })
    ], AdminRouting);
    return AdminRouting;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>ADMIN</h3>\n    <nav>\n      <a routerLink=\"./\" routerLinkActive=\"active\"\n      [routerLinkActiveOptions]=\"{ exact: true }\">Dashboard</a>\n      <a routerLink=\"./cards\" routerLinkActive=\"active\">Manage Cards</a>\n      <a routerLink=\"./users\" routerLinkActive=\"active\">Manage Users</a>\n    </nav>\n    <router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_users_users_component__ = __webpack_require__("../../../../../src/app/admin/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_cards_cards_component__ = __webpack_require__("../../../../../src/app/admin/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__admin_admin_routing__ = __webpack_require__("../../../../../src/app/admin/admin-routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_dash_admin_dash_component__ = __webpack_require__("../../../../../src/app/admin/admin-dash/admin-dash.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__admin_admin_routing__["a" /* AdminRouting */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_3__admin_users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_4__admin_cards_cards_component__["a" /* CardsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__admin_dash_admin_dash_component__["a" /* AdminDashComponent */]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/cards/cards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/cards/cards.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  cards works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin/cards/cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cards',
            template: __webpack_require__("../../../../../src/app/admin/cards/cards.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/cards/cards.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  users works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/admin/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <a routerLink=\"/admin\" routerLinkActive=\"active\">Admin</a> -->\n<!-- <app-registration></app-registration> -->\n<app-login></app-login>\n<a routerLink=\"/admin\" routerLinkActive=\"active\">Admin</a>\n<a routerLink=\"/user\" routerLinkActive=\"active\">User</a>\n<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__routing__ = __webpack_require__("../../../../../src/app/routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_interface_user_interface_module__ = __webpack_require__("../../../../../src/app/user-interface/user-interface.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
 //










//import { UserInterfaceComponent } from './user-interface/user-interface.component';
//import { AdminComponent } from './admin/admin.component';
//import { UsersComponent } from './admin/users/users.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__registration_registration_component__["a" /* RegistrationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__login_login_component__["a" /* LoginComponent */]
                //UserInterfaceComponent
                //AdminComponent,
                //UsersComponent
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_10__user_interface_user_interface_module__["a" /* UserInterfaceModule */],
                __WEBPACK_IMPORTED_MODULE_6__routing__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" (ngSubmit)=\"loginForm.form.valid && login()\" #loginForm=\"ngForm\" novalidate>\n        <label for=\"phone\">Phone</label>\n        <input type=\"tel\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"model.phone\" #phone=\"ngModel\" required />\n        <div *ngIf=\"loginForm.submitted && !phone.valid\" class=\"help-block\">Phone is required</div>\n\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n        <div *ngIf=\"loginForm.submitted && !password.valid\" class=\"help-block\">Password is required</div>\n\n\n        <button  class=\"btn btn-primary\">Login</button>\n        <button  class=\"btn btn-primary\" (click)=\"login()\"> Fake Login</button>\n        <button  class=\"btn btn-primary\" (click)=\"logout()\">Log out</button>\n        <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_user__ = __webpack_require__("../../../../../src/app/registration/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import 'rxjs/add/operator/switchMap';



var LoginComponent = /** @class */ (function () {
    function LoginComponent(route, router, userService, authService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.authService = authService;
        this.model = new __WEBPACK_IMPORTED_MODULE_2__registration_user__["a" /* User */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.model.phone, this.model.password)
            .subscribe(function () {
            // if (this.authService.isLoggedIn){
            // console.log(this.authService.isLoggedIn)
            var redirect = _this.authService.redirectUrl ? _this.authService.redirectUrl : 'admin'; //2
            _this.router.navigate([redirect]);
            //}
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
        this.router.navigate(['/login']); //
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registration/registration.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" (ngSubmit)=\"f.form.valid && register()\" #f=\"ngForm\" novalidate>\n        <label for=\"lastName\">User Name</label>\n        <input type=\"text\" class=\"form-control\" name=\"userName\" [(ngModel)]=\"model.username\" #userName=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !userName.valid\" class=\"help-block\">First Name is required</div>\n\n        <label for=\"phone\">Phone</label>\n        <input type=\"tel\" class=\"form-control\" name=\"phone\" [(ngModel)]=\"model.phone\" #userphone=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !userphone.valid\">Phone is required</div>\n\n        <label for=\"password\">Password</label>\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\n        <div *ngIf=\"f.submitted && !password.valid\">Password is required</div>\n\n        <button class=\"btn\">Register</button>\n        <a [routerLink]=\"['/login']\" class=\"btn btn-link\">Cancel</a>\n</form>\n"

/***/ }),

/***/ "../../../../../src/app/registration/registration.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registration_user__ = __webpack_require__("../../../../../src/app/registration/user.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.model = new __WEBPACK_IMPORTED_MODULE_1__registration_user__["a" /* User */]();
    }
    RegistrationComponent.prototype.ngOnInit = function () {
    };
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        this.userService.create(this.model)
            .subscribe(function (res) {
            console.log(res);
            _this.router.navigate(['login']);
            //Catch error
        });
    };
    RegistrationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-registration',
            template: __webpack_require__("../../../../../src/app/registration/registration.component.html"),
            styles: [__webpack_require__("../../../../../src/app/registration/registration.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/registration/user.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "../../../../../src/app/routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__ = __webpack_require__("../../../../../src/app/registration/registration.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_guard_service__ = __webpack_require__("../../../../../src/app/services/auth-guard.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


//import { DashComponent } from './dash/dash.component';




var appRoutes = [
    // { path: '', component: DashComponent },  //{ path: '', component: DashComponent, canActivate: [AuthGuard] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    //{ path: '', component: LoginComponent },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_2__registration_registration_component__["a" /* RegistrationComponent */] },
    { path: '**', redirectTo: '' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_auth_guard_service__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]
            ]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth-guard.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url; //1
        return this.checkLogin(url);
    };
    AuthGuard.prototype.checkLogin = function (url) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            console.log(localStorage);
            return true;
        }
        console.log(localStorage);
        console.log('false');
        // Store the attempted URL for redirecting
        this.authService.redirectUrl = url; //1
        // Navigate to the login page with extras
        this.router.navigate(['/login']);
        return false;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        return this.canActivate(route, state);
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
        /*
        //2
        export class AuthGuard implements CanActivate {
        
            constructor(private router: Router) { }
        
            canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
                if (localStorage.getItem('currentUser')) {
                    // logged in so return true
                    console.log('GUARD true');
                    return true;
                    
                }
        
                // not logged in so redirect to login page with the return url
                this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
                return false;
            }
        }*/
        /*1
        export class AuthGuard implements CanActivate, CanActivateChild {
            constructor(private authService: AuthService, private router: Router){}
        
            
            canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        
                let url: string = state.url; //1
                return this.checkLogin(url);
                
              }
              checkLogin(url: string): boolean {
                if (this.authService.isLoggedIn) {
                    return true;
                    
                }
                // Store the attempted URL for redirecting
                this.authService.redirectUrl = url; //1
            
                // Navigate to the login page with extras
                this.router.navigate(['/login']);
                return false;
              }
              canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
                return this.canActivate(route, state);
            }
        }*/
        //3
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_delay__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/delay.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    /*1
      login(phone: string, password: string): Observable<boolean> {
        return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
      }*/
    /*2
    login(phone: string, password: string){
      //return this.http.post<any>('/api/authenticate', { phone: phone, password: password })
      return this.http.post('http://jsonplaceholder.typicode.com/users', { phone: phone, password: password })
      .do(res => this.setSession)
    }
  
    private setSession(authResult){
      const expiresAt = moment().add(authResult.expiresIn, 'second');//время истечения сессии
      localStorage.setItem('id_token', authResult.idToken);//id сессии харним в LC под именем id_token
      localStorage.setItem('expires_at', JSON.stringify(expiresAt.valueOf()) ); //время исетчния сесси храним в хранилище под именем expires_at
  
    }
  
    logout() {
      localStorage.removeItem("id_token"); //прекращаем сессию пр выходе
      localStorage.removeItem("expires_at");
      //return !this.isLoggedIn()
  }
  /*
  public isLoggedIn() {
    console.log(this.getExpiration())
    return moment().isBefore(this.getExpiration()); //возвращает срок/true  истечения токена, если пользователь зашел в систему. Нужно для управления клиентским контентом
  }
  
  isLoggedOut() {
    return !this.isLoggedIn();
  }
  
  
  getExpiration() {
    const expiration = localStorage.getItem("expires_at");
    const expiresAt = JSON.parse(expiration);
    return moment(expiresAt);
  }
  */
    AuthService.prototype.login = function (username, password) {
        return this.http.post('http://jsonplaceholder.typicode.com/users', { username: username, password: password })
            .map(function (user) {
            console.log(user);
            // login successful if there's a jwt token in the response
            //if (user && user.token) {
            if (user) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                console.log(localStorage);
            }
            return user;
        });
    };
    AuthService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        console.log(localStorage);
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/cards.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CardsService = /** @class */ (function () {
    function CardsService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    CardsService.prototype.getCards = function (currentUser) {
        return this.http.get('http://jsonplaceholder.typicode.com/todos/?userId=' + currentUser.id)
            .map(function (res) {
            return res.json();
        });
    };
    CardsService.prototype.addCard = function (card) {
        console.log(card);
        return this.http.post('http://jsonplaceholder.typicode.com/todos', card, { headers: this.headers })
            .map(function (res) {
            return res.json();
        });
    };
    CardsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CardsService);
    return CardsService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    UserService.prototype.create = function (model) {
        return this.http.post('http://jsonplaceholder.typicode.com/users', model, { headers: this.headers })
            .map(function (res) {
            return res.json();
        });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/user-interface/cards/add-card/add-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".ng-invalid{\r\n    border: 1px solid red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-interface/cards/add-card/add-card.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"addCardForm.form.valid && addCard()\" class=\"addCardForm\" #addCardForm=\"ngForm\">\n    <label for=\"cardName\">Card name *</label>\n    <input type=\"text\" class=\"form-control\" name=\"cardName\" [(ngModel)]=\"cardModel.name\" #cardName=\"ngModel\" required>\n    <div *ngIf=\"addCardForm.submitted && !cardName.valid\">Card name is required</div>\n\n    <label for=\"cardNumber\">Card number *</label>\n    <input type=\"number\" class=\"form-control\" name=\"cardNumber\" \n    [(ngModel)]=\"cardModel.number\" \n    #cardNumber=\"ngModel\" \n    required>\n    <div *ngIf=\"addCardForm.submitted && !cardNumber.valid\">Card number is required</div>\n\n    <label for=\"cardExpiration\">Expiration term *</label>\n    <input type=\"date\" class=\"form-control\" name=\"cardExpiration\" [(ngModel)]=\"cardModel.expiration\" #cardExpiration=\"ngModel\" required>\n    <div *ngIf=\"addCardForm.submitted && !cardExpiration.valid\">Expiration term is required</div>\n\n    <label for=\"cardVerification\">CVV2-code *</label>\n    <input type=\"number\" class=\"form-control\" name=\"cardVerification\" \n    [(ngModel)]=\"cardModel.verification\" \n    #cardVerification=\"ngModel\"\n    required>\n    <div *ngIf=\"addCardForm.submitted && !cardVerification.valid\">CVV2-code is required</div>\n\n    <label for=\"cardBalance\">Card balance</label>\n    <input type=\"number\" class=\"form-control\" name=\"cardBalance\" [(ngModel)]=\"cardModel.balance\" #cardBalance=\"ngModel\"/>\n\n    <button (click)=\"addCard()\"\n    type=\"submit\"\n    class=\"addCardForm__btn\"\n    [disabled]=\"!addCardForm.form.valid\">\n    </button>\n</form>"

/***/ }),

/***/ "../../../../../src/app/user-interface/cards/add-card/add-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddCardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cards_service__ = __webpack_require__("../../../../../src/app/services/cards.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddCardComponent = /** @class */ (function () {
    function AddCardComponent(cardsService) {
        this.cardsService = cardsService;
        this.addingCard = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]; ////
    }
    AddCardComponent.prototype.ngOnInit = function () {
        //this.cardModel = new Card(this.currentUser.id);
    };
    AddCardComponent.prototype.addCard = function () {
        var _this = this;
        this.cardsService.addCard(this.cardModel)
            .subscribe(function (res) {
            _this.addingCard.emit(res); ////
            //this.cardModel = new Card(this.currentUser.id);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], AddCardComponent.prototype, "currentUser", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], AddCardComponent.prototype, "addingCard", void 0);
    AddCardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add-card',
            template: __webpack_require__("../../../../../src/app/user-interface/cards/add-card/add-card.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-interface/cards/add-card/add-card.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_cards_service__["a" /* CardsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cards_service__["a" /* CardsService */]])
    ], AddCardComponent);
    return AddCardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-interface/cards/card-item/card-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-interface/cards/card-item/card-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cardItem\">\n    <span class=\"cardName\">{{card.name}}</span>\n    <span class=\"cardNumber\">{{card.number}}</span>\n    <span class=\"cardBalance\">{{card.balance}}</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-interface/cards/card-item/card-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardItemComponent = /** @class */ (function () {
    function CardItemComponent() {
    }
    CardItemComponent.prototype.ngOnInit = function () {
        console.log(this.card);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CardItemComponent.prototype, "card", void 0);
    CardItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-card-item',
            template: __webpack_require__("../../../../../src/app/user-interface/cards/card-item/card-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-interface/cards/card-item/card-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardItemComponent);
    return CardItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-interface/cards/cards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-interface/cards/cards.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cards\">\n  \n  <div *ngIf=\"cards.length == 0\">\n        Add a card\n  </div>\n  <div *ngIf=\"cards.length > 0\">\n  <app-card-item *ngFor=\"let card of cards\"\n  [card] = \"card\">\n      \n  </app-card-item>\n</div>\n<button (click) = \"displayForm()\">Add a card</button>\n<app-add-card *ngIf=\"addCardForm\"\n[currentUser] = \"currentUser\"\n(addingCard)=\"addCard($event)\"> \n</app-add-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-interface/cards/cards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cards_service__ = __webpack_require__("../../../../../src/app/services/cards.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsComponent = /** @class */ (function () {
    function CardsComponent(cardsService) {
        this.cardsService = cardsService;
        this.cards = [];
        this.addCardForm = false;
    }
    CardsComponent.prototype.ngOnInit = function () {
        //this.getCards();
    };
    CardsComponent.prototype.displayForm = function () {
        this.addCardForm ? this.addCardForm = false : this.addCardForm = true;
    };
    /*
    Удалила, пока нет данных
      private getCards() {
        this.cardsService.getCards(this.currentUser.id)
        .subscribe(res => {
          this.cards = res.cards;
        });
      }
      */
    CardsComponent.prototype.addCard = function (card) {
        this.cards.push(card);
        console.log(this.cards);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CardsComponent.prototype, "currentUser", void 0);
    CardsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cards',
            template: __webpack_require__("../../../../../src/app/user-interface/cards/cards.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-interface/cards/cards.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_cards_service__["a" /* CardsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cards_service__["a" /* CardsService */]])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-interface/dash/dash.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-interface/dash/dash.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"dash\">\n<app-cards\n[currentUser] = \"currentUser\">\n</app-cards>\n<app-transactions\n[currentUser] = \"currentUser\">\n</app-transactions>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user-interface/dash/dash.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashComponent = /** @class */ (function () {
    function DashComponent() {
        this.currentUser = {
            id: 1
        };
    }
    DashComponent.prototype.ngOnInit = function () {
    };
    DashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dash',
            template: __webpack_require__("../../../../../src/app/user-interface/dash/dash.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-interface/dash/dash.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashComponent);
    return DashComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-interface/transactions/transactions.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-interface/transactions/transactions.component.html":
/***/ (function(module, exports) {

module.exports = "<form>\n  <select class=\"cardFrom\" #from>\n    <option *ngFor=\"let c of cards\" value=\"{{ c.id }}\">{{c.id}}</option>\n  </select>\n  <select class=\"cardTo\" #to>\n      <option *ngFor=\"let c of cards\" value=\"{{ c.id }}\">{{c.id}}</option>\n  </select>\n  <label for=\"transactionAmount\">SUM</label>\n  <input type=\"number\" name=\"transactionAmount\" #transactionAmount>\n  <button type=\"submit\"\n  (click)=\"pay(from, to, transactionAmount)\"></button>\n\n</form>"

/***/ }),

/***/ "../../../../../src/app/user-interface/transactions/transactions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransactionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_cards_service__ = __webpack_require__("../../../../../src/app/services/cards.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TransactionsComponent = /** @class */ (function () {
    function TransactionsComponent(cardsService) {
        this.cardsService = cardsService;
        this.cards = [];
    }
    TransactionsComponent.prototype.ngOnInit = function () {
        this.getCards();
    };
    TransactionsComponent.prototype.getCards = function () {
        var _this = this;
        this.cardsService.getCards(this.currentUser)
            .subscribe(function (res) {
            _this.cards = res;
        });
    };
    TransactionsComponent.prototype.pay = function (from, to, transactionAmount) {
        console.log(from.value);
        console.log(to.value);
        console.log(transactionAmount.value);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], TransactionsComponent.prototype, "currentUser", void 0);
    TransactionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-transactions',
            template: __webpack_require__("../../../../../src/app/user-interface/transactions/transactions.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-interface/transactions/transactions.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__services_cards_service__["a" /* CardsService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_cards_service__["a" /* CardsService */]])
    ], TransactionsComponent);
    return TransactionsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-interface/user-interface.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-interface/user-interface.component.html":
/***/ (function(module, exports) {

module.exports = "<a routerLink=\"/cards\" routerLinkActive=\"active\">Cards</a>\n<a routerLink=\"/transactions\" routerLinkActive=\"active\">Transactions</a>\n<!-- <router-outlet></router-outlet> -->\n\n"

/***/ }),

/***/ "../../../../../src/app/user-interface/user-interface.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInterfaceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInterfaceComponent = /** @class */ (function () {
    function UserInterfaceComponent() {
    }
    UserInterfaceComponent.prototype.ngOnInit = function () {
    };
    UserInterfaceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-interface',
            template: __webpack_require__("../../../../../src/app/user-interface/user-interface.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-interface/user-interface.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserInterfaceComponent);
    return UserInterfaceComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user-interface/user-interface.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInterfaceModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_interface_component__ = __webpack_require__("../../../../../src/app/user-interface/user-interface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dash_dash_component__ = __webpack_require__("../../../../../src/app/user-interface/dash/dash.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cards_cards_component__ = __webpack_require__("../../../../../src/app/user-interface/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cards_card_item_card_item_component__ = __webpack_require__("../../../../../src/app/user-interface/cards/card-item/card-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cards_add_card_add_card_component__ = __webpack_require__("../../../../../src/app/user-interface/cards/add-card/add-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__transactions_transactions_component__ = __webpack_require__("../../../../../src/app/user-interface/transactions/transactions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_routing_module__ = __webpack_require__("../../../../../src/app/user-interface/user-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UserInterfaceModule = /** @class */ (function () {
    function UserInterfaceModule() {
    }
    UserInterfaceModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__user_routing_module__["a" /* UserRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__user_interface_component__["a" /* UserInterfaceComponent */],
                __WEBPACK_IMPORTED_MODULE_4__dash_dash_component__["a" /* DashComponent */],
                __WEBPACK_IMPORTED_MODULE_5__cards_cards_component__["a" /* CardsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__cards_card_item_card_item_component__["a" /* CardItemComponent */],
                __WEBPACK_IMPORTED_MODULE_7__cards_add_card_add_card_component__["a" /* AddCardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__transactions_transactions_component__["a" /* TransactionsComponent */]
            ]
        })
    ], UserInterfaceModule);
    return UserInterfaceModule;
}());



/***/ }),

/***/ "../../../../../src/app/user-interface/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_interface_component__ = __webpack_require__("../../../../../src/app/user-interface/user-interface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cards_cards_component__ = __webpack_require__("../../../../../src/app/user-interface/cards/cards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cards_add_card_add_card_component__ = __webpack_require__("../../../../../src/app/user-interface/cards/add-card/add-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transactions_transactions_component__ = __webpack_require__("../../../../../src/app/user-interface/transactions/transactions.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/*const userRoutes: Routes = [
  {
    path: 'user',
    component: UserInterfaceComponent,
    children: [
      { path: 'cards', component: CardsComponent },
      { path: 'transactions', component: TransactionsComponent },
      { path: 'add-card', component: AddCardComponent }
      //{ path: '', component: UserInterfaceComponent }
    ]
  }
]*/
var userRoutes = [
    { path: 'cards', component: __WEBPACK_IMPORTED_MODULE_4__cards_cards_component__["a" /* CardsComponent */] },
    { path: 'transactions', component: __WEBPACK_IMPORTED_MODULE_6__transactions_transactions_component__["a" /* TransactionsComponent */] },
    { path: 'add-card', component: __WEBPACK_IMPORTED_MODULE_5__cards_add_card_add_card_component__["a" /* AddCardComponent */] },
    { path: 'user', component: __WEBPACK_IMPORTED_MODULE_3__user_interface_component__["a" /* UserInterfaceComponent */] }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forChild(userRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */]
            ]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map