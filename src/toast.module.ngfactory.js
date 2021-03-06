/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
/* tslint:disable */
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var import0 = require('@angular/core/src/linker/ng_module_factory');
var import1 = require('./toast.module');
var import2 = require('@angular/common/src/common_module');
var import3 = require('@angular/common/src/localization');
var import4 = require('./toast-manager');
var import6 = require('./toast-container.component.ngfactory');
var import7 = require('@angular/core/src/application_ref');
var import8 = require('./toast-options');
var import9 = require('@angular/core/src/i18n/tokens');
var ToastModuleInjector = (function (_super) {
    __extends(ToastModuleInjector, _super);
    function ToastModuleInjector(parent) {
        _super.call(this, parent, [import6.ToastContainerNgFactory], []);
    }
    Object.defineProperty(ToastModuleInjector.prototype, "_LOCALE_ID_2", {
        get: function () {
            if ((this.__LOCALE_ID_2 == null)) {
                (this.__LOCALE_ID_2 = null);
            }
            return this.__LOCALE_ID_2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastModuleInjector.prototype, "_NgLocalization_3", {
        get: function () {
            if ((this.__NgLocalization_3 == null)) {
                (this.__NgLocalization_3 = new import3.NgLocaleLocalization(this._LOCALE_ID_2));
            }
            return this.__NgLocalization_3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastModuleInjector.prototype, "_ToastsManager_4", {
        get: function () {
            if ((this.__ToastsManager_4 == null)) {
                (this.__ToastsManager_4 = new import4.ToastsManager(this, this.parent.get(import7.ApplicationRef), this.parent.get(import8.ToastOptions, null)));
            }
            return this.__ToastsManager_4;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ToastModuleInjector.prototype, "_TRANSLATIONS_FORMAT_5", {
        get: function () {
            if ((this.__TRANSLATIONS_FORMAT_5 == null)) {
                (this.__TRANSLATIONS_FORMAT_5 = null);
            }
            return this.__TRANSLATIONS_FORMAT_5;
        },
        enumerable: true,
        configurable: true
    });
    ToastModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new import2.CommonModule();
        this._ToastModule_1 = new import1.ToastModule();
        return this._ToastModule_1;
    };
    ToastModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === import2.CommonModule)) {
            return this._CommonModule_0;
        }
        if ((token === import1.ToastModule)) {
            return this._ToastModule_1;
        }
        if ((token === import9.LOCALE_ID)) {
            return this._LOCALE_ID_2;
        }
        if ((token === import3.NgLocalization)) {
            return this._NgLocalization_3;
        }
        if ((token === import4.ToastsManager)) {
            return this._ToastsManager_4;
        }
        if ((token === import9.TRANSLATIONS_FORMAT)) {
            return this._TRANSLATIONS_FORMAT_5;
        }
        return notFoundResult;
    };
    ToastModuleInjector.prototype.destroyInternal = function () {
    };
    return ToastModuleInjector;
}(import0.NgModuleInjector));
exports.ToastModuleNgFactory = new import0.NgModuleFactory(ToastModuleInjector, import1.ToastModule);
//# sourceMappingURL=toast.module.ngfactory.js.map