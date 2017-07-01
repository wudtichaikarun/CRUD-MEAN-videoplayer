webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__video_center_video_center_component__ = __webpack_require__("../../../../../src/app/video-center/video-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_1__home_home_component__["a" /* HomeComponent */] },
    { path: 'videos', component: __WEBPACK_IMPORTED_MODULE_0__video_center_video_center_component__["a" /* VideoCenterComponent */] }
];
//# sourceMappingURL=/Users/romantic/Documents/Coding/angular2/ngApp/src/app-routing.module.js.map

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

module.exports = "<nav class=\"navbar navbar-inverse\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">VideoPlayer</a>\n    </div>\n    <ul class=\"nav navbar-nav\">\n      <li><a routerLink=\"/home\" routerLinkActive=\"active\">Home</a></li>\n      <li><a routerLink=\"/videos\" routerLinkActive=\"active\">Playlist</a></li>\n    </ul>\n  </div>\n</nav>\n\n<!--RouterOutlet is one of the directives provided by the RouterModule-->\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
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
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/Users/romantic/Documents/Coding/angular2/ngApp/src/app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_bootstrap_confirm__ = __webpack_require__("../../../../angular2-bootstrap-confirm/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__video_center_video_center_component__ = __webpack_require__("../../../../../src/app/video-center/video-center.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__video_list_video_list_component__ = __webpack_require__("../../../../../src/app/video-list/video-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__video_detail_video_detail_component__ = __webpack_require__("../../../../../src/app/video-detail/video-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__safe_pipe__ = __webpack_require__("../../../../../src/app/safe.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__video_center_video_center_component__["a" /* VideoCenterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__video_list_video_list_component__["a" /* VideoListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__video_list_video_list_component__["a" /* VideoListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__video_detail_video_detail_component__["a" /* VideoDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_11__safe_pipe__["a" /* SafePipe */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7_angular2_bootstrap_confirm__["a" /* ConfirmModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_12__app_routing_module__["a" /* routes */])
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/romantic/Documents/Coding/angular2/ngApp/src/app.module.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <h1>Video Player</h1>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/Users/romantic/Documents/Coding/angular2/ngApp/src/home.component.js.map

/***/ }),

/***/ "../../../../../src/app/safe.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        url = url.replace("watch?v=", "embed/");
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Pipe */])({ name: 'safe' }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["d" /* DomSanitizer */]) === 'function' && _a) || Object])
    ], SafePipe);
    return SafePipe;
    var _a;
}());
//# sourceMappingURL=/Users/romantic/Documents/Coding/angular2/ngApp/src/safe.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/video-center/video-center.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-center/video-center.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-9\">\n    <div *ngIf=\"!hidenewVideo\">\n      <h2>New Video</h2>\n      <form #form=\"ngForm\" (ngSubmit)=\"onSubmitAddVideo(form.value)\" class=\"well\">\n        <div class=\"form-group\">\n          <label>Title</label>\n          <input \n            type=\"text\" \n            class=\"form-control\" \n            required \n            name=\"title\" \n            ngModel\n            placeholder=\"Enter titie name\" >\n        </div>\n        <div class=\"form-group\">\n          <label>Url</label>\n          <input \n            type=\"text\" \n            class=\"form-control\" \n            required \n            name=\"url\" \n            ngModel\n            placeholder=\"Enter url link\" >\n        </div>\n        <div class=\"form-group\">\n          <label>Description</label>\n          <input \n            type=\"text\" \n            class=\"form-control\"  \n            name=\"discription\" \n            ngModel\n            placeholder=\"Enter descrtption\" >\n        </div>\n        <button type=\"submit\" class=\"btn btn-success\">Save</button>\n      </form>\n    </div>\n\n    <video-detail \n    (updateVideoEvent)=\"onUpdateVideoEvent($event)\"\n    (deleteVideoEvent)=\"onDeleteVideoEvent($event)\"\n    *ngIf=\"selectedVideo && hidenewVideo\" \n    [video]=\"selectedVideo\"></video-detail>\n  </div>\n  \n  <div class=\"col-sm-3\">\n    <button (click)=\"newVideo()\" style=\"margin-bottom: 2px;\" type=\"button\" class=\"btn btn-success btn-block\">+ New Video</button>\n    <video-list (SelectVideo)=\"onSelectVideo($event)\" [videos]=\"videos\"></video-list>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/video-center/video-center.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__video_service__ = __webpack_require__("../../../../../src/app/video.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoCenterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VideoCenterComponent = (function () {
    function VideoCenterComponent(_videoService) {
        this._videoService = _videoService;
        this.hidenewVideo = true;
    }
    VideoCenterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._videoService.getVideos()
            .subscribe(function (resVideoData) { return _this.videos = resVideoData; });
    };
    //select video
    VideoCenterComponent.prototype.onSelectVideo = function (video) {
        this.selectedVideo = video;
        this.hidenewVideo = true;
        console.log(this.selectedVideo);
    };
    //create new video
    VideoCenterComponent.prototype.onSubmitAddVideo = function (video) {
        var _this = this;
        this._videoService.addVideo(video)
            .subscribe(function (resNewVideo) {
            _this.videos.push(resNewVideo);
            _this.hidenewVideo = true;
            _this.selectedVideo = resNewVideo;
        });
    };
    //update
    VideoCenterComponent.prototype.onUpdateVideoEvent = function (video) {
        this._videoService.updateVideo(video)
            .subscribe(function (resUpdateVideo) { return video = resUpdateVideo; });
        this.selectedVideo = null;
    };
    //delete
    VideoCenterComponent.prototype.onDeleteVideoEvent = function (video) {
        var videoArray = this.videos;
        this._videoService.deleteVideo(video)
            .subscribe(function (resDeletedVideo) {
            for (var i = 0; i < videoArray.length; i++) {
                if (videoArray[i]._id === video._id) {
                    videoArray.splice(i, 1);
                }
            }
        });
        this.selectedVideo = null;
    };
    VideoCenterComponent.prototype.newVideo = function () {
        this.hidenewVideo = false;
    };
    VideoCenterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'app-video-center',
            template: __webpack_require__("../../../../../src/app/video-center/video-center.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-center/video-center.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__video_service__["a" /* VideoService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__video_service__["a" /* VideoService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__video_service__["a" /* VideoService */]) === 'function' && _a) || Object])
    ], VideoCenterComponent);
    return VideoCenterComponent;
    var _a;
}());
//# sourceMappingURL=/Users/romantic/Documents/Coding/angular2/ngApp/src/video-center.component.js.map

/***/ }),

/***/ "../../../../../src/app/video-detail/video-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "iframe{\n    border-radius: 9px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-detail/video-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <div>\n        <iframe [src]=\"video.url | safe\" width=\"100%\" height=\"500\"></iframe>\n    </div>\n    <form>\n        <!--video tilte edit status-->\n        <div *ngIf=\"editTitle\" class=\"form-group\">\n            <input (mouseout)=\"onMouseout()\" type=\"input\" class=\"form-control\" name=\"title\" required placeholder=\"title\" \n            [(ngModel)]=\"video.title\">\n        </div>\n         <!--video tilte normol status-->\n        <h3 *ngIf=\"!editTitle\" (click)=\"onTitleClick()\">{{video.title}}</h3>\n\n        <div class=\"form-group\">\n           <input type=\"input\" class=\"form-control\" name=\"url\" required placeholder=\"url\" \n           [(ngModel)]=\"video.url\">\n        </div>\n        <div class=\"form-group\">\n           <textarea name=\"desc\" class=\"form-control\" rows=\"5\" placeholder=\"discription\"\n            [(ngModel)]=\"video.discription\">\n           </textarea>\n        </div>\n        <button type=\"button\" (click)=\"updateVideo()\" class=\"btn btn-primary\">Update</button>\n        <!--<button type=\"button\" (click)=\"deleteVideo()\" class=\"btn btn-danger\">Delete</button>-->\n        <button\n            class=\"btn btn-danger\"\n            mwlConfirm\n            [title]=\"title\"\n            [message]=\"message\"\n            placement=\"top\"\n            (confirm)=\"ConfirmClicked()\"\n            (cancel)=\"cancelClicked = true\"\n            [(isOpen)]=\"isOpen\">\n            Delete\n        </button>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/video-detail/video-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_bootstrap_confirm__ = __webpack_require__("../../../../angular2-bootstrap-confirm/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_bootstrap_confirm_position__ = __webpack_require__("../../../../angular2-bootstrap-confirm/position/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_bootstrap_confirm_position___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_bootstrap_confirm_position__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoDetailComponent = (function () {
    function VideoDetailComponent() {
        this.editTitle = false;
        this.updateVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
        this.deleteVideoEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
        //config confirm property
        this.title = 'Confirm Delete';
        this.message = 'Are you sure! to delete?';
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.isOpen = false;
    }
    VideoDetailComponent.prototype.ngOnInit = function () {
    };
    VideoDetailComponent.prototype.ngOnChange = function () {
        this.editTitle = false;
    };
    VideoDetailComponent.prototype.onTitleClick = function () {
        this.editTitle = true;
    };
    //onblur title
    VideoDetailComponent.prototype.onMouseout = function () {
        this.editTitle = false;
        console.log('event mouseout working');
    };
    VideoDetailComponent.prototype.updateVideo = function () {
        this.updateVideoEvent.emit(this.video);
    };
    // deleteVideo(){
    //   this.deleteVideoEvent.emit(this.video);
    // }
    VideoDetailComponent.prototype.ConfirmClicked = function () {
        this.confirmClicked = true;
        if (this.confirmClicked) {
            this.deleteVideoEvent.emit(this.video);
        }
    };
    VideoDetailComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'video-detail',
            template: __webpack_require__("../../../../../src/app/video-detail/video-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-detail/video-detail.component.css")],
            inputs: ['video'],
            outputs: ['updateVideoEvent', 'deleteVideoEvent'],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1_angular2_bootstrap_confirm__["b" /* ConfirmOptions */],
                { provide: __WEBPACK_IMPORTED_MODULE_1_angular2_bootstrap_confirm__["c" /* Position */], useClass: __WEBPACK_IMPORTED_MODULE_2_angular2_bootstrap_confirm_position__["Positioning"] }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], VideoDetailComponent);
    return VideoDetailComponent;
}());
//# sourceMappingURL=/Users/romantic/Documents/Coding/angular2/ngApp/src/video-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/video-list/video-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/video-list/video-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"nav nav-pills nav-stacked\">\n <li (click)=\"onSelect(video)\" *ngFor=\"let video of videos\"><a>{{video.title}}</a></li>\n</ul>"

/***/ }),

/***/ "../../../../../src/app/video-list/video-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideoListComponent = (function () {
    function VideoListComponent() {
        this.SelectVideo = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* EventEmitter */]();
    }
    VideoListComponent.prototype.ngOnInit = function () {
    };
    VideoListComponent.prototype.onSelect = function (vid) {
        this.SelectVideo.emit(vid);
    };
    VideoListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
            selector: 'video-list',
            template: __webpack_require__("../../../../../src/app/video-list/video-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/video-list/video-list.component.css")],
            inputs: ['videos'],
            outputs: ['SelectVideo']
        }), 
        __metadata('design:paramtypes', [])
    ], VideoListComponent);
    return VideoListComponent;
}());
//# sourceMappingURL=/Users/romantic/Documents/Coding/angular2/ngApp/src/video-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/video.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VideoService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VideoService = (function () {
    function VideoService(_http) {
        this._http = _http;
        this._getUrl = "/videos";
        this._postUrl = "/api/video";
        this._putUrl = "/api/video/";
        this._deleteUrl = "/api/video/";
    }
    VideoService.prototype.getVideos = function () {
        return this._http.get(this._getUrl)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.addVideo = function (video) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.post(this._postUrl, JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    //update video service
    VideoService.prototype.updateVideo = function (video) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this._http.put(this._putUrl + video._id, JSON.stringify(video), options)
            .map(function (response) { return response.json(); });
    };
    VideoService.prototype.deleteVideo = function (video) {
        return this._http.delete(this._deleteUrl + video._id)
            .map(function (response) { return response.json(); });
    };
    VideoService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], VideoService);
    return VideoService;
    var _a;
}());
//# sourceMappingURL=/Users/romantic/Documents/Coding/angular2/ngApp/src/video.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/romantic/Documents/Coding/angular2/ngApp/src/environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/romantic/Documents/Coding/angular2/ngApp/src/main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map