webpackJsonp([15],{

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./src/pages/about/about.ts
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
        // p1: string = "Ontology Based Recommendation for Tourist Attraction using Semantic Reasoning (A Case Study of Tourism in Bandung)";
        // p2: string = "This is a final project for pursuing bachelor degree at Computer Science majors Telkom University.";
        this.p1 = "Rekomendasi Tempat Wisata Berbasis Ontology Menggunakan Semantic Reasoning (Studi Kasus Pariwisata di Bandung)";
        this.p2 = "Aplikasi ini merupakan implementasi dari Tugas Akhir saya untuk menyelesaikan studi di Telkom University.";
    }
    return AboutPage;
}());
AboutPage = __decorate([
    __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPage */](),
    __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"]({
        selector: 'page-about',
        template: "\n    <ion-header>\n      <ion-navbar color=\"sky\">\n        <button ion-button menuToggle>\n          <ion-icon name=\"menu\"></ion-icon>\n        </button>\n        <ion-title>\n          Tentang\n        </ion-title>\n      </ion-navbar>\n    </ion-header>\n    <ion-content padding>\n      <h6>{{p1}}</h6>\n      <p>{{p2}}</p>\n      <!--\n      <p>For further discussion you can contact me at <a href=\"mailto:rizky.solechudin@gmail.com?Subject=Hello\" target=\"_top\">rizky.solechudin@gmail.com</a></p>\n      -->\n      <p>Untuk diskusi lebih lanjut anda dapat menghubungi saya via email di <a href=\"mailto:rizky.solechudin@gmail.com?Subject=Hello\" target=\"_top\">rizky.solechudin@gmail.com</a></p>\n      <p style=\"font-size: small; position: fixed; bottom: 0;\">\n        Seluruh gambar yang tampil pada aplikasi ini disediakan oleh <a href=\"http://freepik.com\">Freepik</a>, <a href=\"http://unsplash.com\">Unsplash</a> dan Google Place Photo API.\n      </p>\n    </ion-content>\n  "
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
], AboutPage);

//# sourceMappingURL=about.js.map
// CONCATENATED MODULE: ./src/pages/about/about.module.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var about_module___WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var about_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var about_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AboutPageModule = (function () {
    function AboutPageModule() {
    }
    return AboutPageModule;
}());
AboutPageModule = about_module___decorate([
    about_module___WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"]({
        declarations: [AboutPage],
        imports: [about_module___WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* IonicPageModule */].forChild(AboutPage)],
        entryComponents: [AboutPage]
    })
], AboutPageModule);

//# sourceMappingURL=about.module.js.map

/***/ })

});
//# sourceMappingURL=15.js.map