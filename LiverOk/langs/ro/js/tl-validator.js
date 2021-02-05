/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/tl-validator.js":
/*!********************************!*\
  !*** ./src/js/tl-validator.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function (e) {
  function t(e) {
    this.forms = [].slice.call(document.querySelectorAll(".al-form")), this.settings = e || {}, this.isLabel = "true" == this._getPerameterFromJSON("label"), this.noCountryCode = "true" == this._getPerameterFromJSON("no_code"), this.countriesWithoutPlus = ["OM"];
    var t = this;
    return setTimeout(function () {
      var e = t._getCountry();

      t._setCountrySettings(e);
    }, 300), this.isLang = this._getPerameterFromJSON("lang"), this.isLabel || this._addEvents(), this;
  }

  var n = {
    phonesCode: {
      AE: 971,
      AL: 355,
      AT: 43,
      BA: 387,
      ME: 382,
      BD: 880,
      BE: 32,
      BG: 359,
      CY: 357,
      CZ: 420,
      DE: 49,
      EE: 372,
      ES: 34,
      FI: 358,
      FR: 33,
      GR: 30,
      HR: 385,
      HU: 36,
      ID: 62,
      IN: 91,
      IT: 39,
      LT: 370,
      LV: 371,
      MA: 212,
      MY: 60,
      NG: 234,
      NL: 31,
      PH: 63,
      PL: 48,
      PT: 351,
      RO: 40,
      MD: 373,
      RS: 381,
      RU: 7,
      SI: 386,
      SK: 421,
      TH: 66,
      VN: 84,
      XK: 383,
      JO: 962,
      CI: 225,
      KH: 855,
      OM: 968,
      SG: 65,
      TR: 90,
      CO: 57,
      AR: 54,
      TW: 886,
      HK: 852,
      MK: 389,
      MX: 52,
      PE: 51,
      KE: 254,
      MM: 95,
      PK: 92,
      IR: 98,
      ZA: 27,
      LK: 94,
      NP: 977,
      CL: 56
    },
    phoneMinLength: 9,
    phoneMaxLength: 24,
    allowedBtnCodes: [43, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 32, 40, 41, 229, 8, 13],
    massages: {
      EN: {
        fillName: "Enter your name",
        fillPhone: "Enter your number",
        incorrectPhone: "Error, incorrect number"
      },
      RU: {
        fillName: "Введите ФИО",
        fillPhone: "Введите номер",
        incorrectPhone: "Ошибка, некорректный номер"
      },
      ES: {
        fillName: "Introduzca su nombre comleto",
        fillPhone: "Introduzca su número de teléfono",
        incorrectPhone: "Error, el número de teléfono incorrecto"
      },
      FR: {
        fillName: "Entrez votre nom et prénom",
        fillPhone: "Entrez le numéro de téléphone",
        incorrectPhone: "Erreur, numéro incorrect"
      },
      IT: {
        fillName: "Inserire il nome ed il cognome",
        fillPhone: "Inserire il numero di telefono",
        incorrectPhone: "Errore, numero sbagliato"
      },
      PT: {
        fillName: "Introduza seu nome e sobrenome",
        fillPhone: "Introduza o número de telemovel",
        incorrectPhone: "Error, número incorrecto"
      },
      GR: {
        fillName: "Εισάγετε το όνομα και το επώνυμο",
        fillPhone: "Εισάγετε τον αριθμό τηλεφώνου",
        incorrectPhone: "Σφάλμα, λάθος νούμερο"
      },
      CY: {
        fillName: "Εισάγετε το όνομα και το επώνυμο",
        fillPhone: "Εισάγετε τον αριθμό τηλεφώνου",
        incorrectPhone: "Σφάλμα, λάθος νούμερο"
      },
      BG: {
        fillName: "Име",
        fillPhone: "Телефон номер",
        incorrectPhone: "Грешка, невалиден номер"
      },
      SI: {
        fillName: "Napišite svoje ime in priimek",
        fillPhone: "Napišite svojo telefonsko številko",
        incorrectPhone: "Napačna številka"
      },
      SK: {
        fillName: "Zadajte Meno a Priezvisko",
        fillPhone: "Zadajte telefónne číslo",
        incorrectPhone: "Chyba, zlé číslo"
      },
      CZ: {
        fillName: "Zadejte Jméno Příjmení",
        fillPhone: "Zadejte telefonní číslo",
        incorrectPhone: "Chyba, není platné číslo"
      },
      HU: {
        fillName: "Vezetéknév, keresztnév",
        fillPhone: "Telefon",
        incorrectPhone: "Hiba, helytelen számot adott meg"
      },
      RO: {
        fillName: "Nume de tip",
        fillPhone: "Introduceţi numărul de",
        incorrectPhone: "Număr invalid eroare"
      },
      MD: {
        fillName: "Nume de tip",
        fillPhone: "Introduceţi numărul de",
        incorrectPhone: "Număr invalid eroare"
      },
      PL: {
        fillName: "Wpisz swoje imię i nazwisko",
        fillPhone: "Podaj swoj numer",
        incorrectPhone: "Błąd , nieprawidłowy numer"
      },
      DE: {
        fillName: "Geben Sie Ihren Namen ein",
        fillPhone: "Geben Sie Ihre Telefonnummer ein",
        incorrectPhone: "Eingabefehler, die Nummer ist inkorrekt",
        lessNineSymbols: "Eingabefehler, die Nummer ist inkorrekt"
      },
      AT: {
        fillName: "Geben Sie Ihren Namen ein",
        fillPhone: "Geben Sie Ihre Telefonnummer ein",
        incorrectPhone: "Eingabefehler, die Nummer ist inkorrekt",
        lessNineSymbols: "Eingabefehler, die Nummer ist inkorrekt"
      },
      MY: {
        fillName: "Masukkan Nama",
        fillPhone: "Masukkan nombor",
        incorrectPhone: "Ralat, nombor yang salah"
      },
      LT: {
        fillName: "Įveskite savo vardą",
        fillPhone: "Įveskite savo telefono numerį",
        incorrectPhone: "Klaidingas telefono numeris"
      },
      VN: {
        fillName: "Nhập họ tên",
        fillPhone: "Nhập số điện thoại",
        incorrectPhone: "Lỗi, số điện thoại không đúng"
      },
      IN: {
        fillName: "नाम भरे",
        fillPhone: "आपका नम्बर",
        incorrectPhone: "ग़लत नम्बर"
      },
      HR: {
        fillName: "Upišite Ime i Prezime",
        fillPhone: "Upišite broj telefona",
        incorrectPhone: "Pogreška, nepravilan broj"
      },
      RS: {
        fillName: "Unesite IME i PREZIME",
        fillPhone: "Unesite broj telefona",
        incorrectPhone: "Greška, nekorektan broj"
      },
      BA: {
        fillName: "Unesite IME i PREZIME",
        fillPhone: "Unesite broj telefona",
        incorrectPhone: "Greška, nekorektan broj"
      },
      ME: {
        fillName: "Unesite IME i PREZIME",
        fillPhone: "Unesite broj telefona",
        incorrectPhone: "Greška, nekorektan broj"
      },
      TH: {
        fillName: "ใส่ชื่อ",
        fillPhone: "ใส่เบอร์โทร",
        incorrectPhone: "Error, หมายเลขโทรศัพท์ไม่ถูกต้อง"
      },
      LV: {
        fillName: "Ievadiet jūsu vārdu",
        fillPhone: "Ievadiet jūsu numuru",
        incorrectPhone: "Kļūda, numurs norādīts nepareizi"
      },
      EE: {
        fillName: "Sisestage oma nimi",
        fillPhone: "Sisestage oma number",
        incorrectPhone: "Viga, vale number"
      },
      AL: {
        fillName: "Vendos emrin dhe mbiemrin",
        fillPhone: "Vendos numrin e telefonit",
        incorrectPhone: "Gabim, numri nuk është i saktë"
      },
      NL: {
        fillName: "Vul naam in",
        fillPhone: "Voer telefoonnummer in",
        incorrectPhone: "Foutmelding, nummer ongeldig"
      },
      FI: {
        fillName: "Saisimmeko nimenne",
        fillPhone: "Puhelinnumeronne",
        incorrectPhone: "Virhe, väärä numero"
      },
      KH: {
        fillName: "បញ្ចូលឈ្មោះរបស់អ្នក",
        fillPhone: "បញ្ចូលលេខទូរស័ព្ទរបស់អ្នក",
        incorrectPhone: "លេខទូរស័ព្ទមិនត្រឹមត្រូវ"
      },
      CO: {
        fillName: "Introduzca su nombre comleto",
        fillPhone: "Introduzca su número de teléfono",
        incorrectPhone: "Error, el número de teléfono incorrecto"
      },
      MK: {
        fillName: "Внесете ги името и презимето",
        fillPhone: "Внесете го бројот",
        incorrectPhone: "Грешка, погрешен број"
      },
      TR: {
        fillName: "Adınız ve soyadınız girin",
        fillPhone: "Numaranız girin",
        incorrectPhone: "Hata, geçersiz numara"
      },
      PE: {
        fillName: "Introduzca su nombre comleto",
        fillPhone: "Introduzca su número de teléfono",
        incorrectPhone: "Error, el número de teléfono incorrecto"
      },
      CL: {
        fillName: "Introduzca su nombre comleto",
        fillPhone: "Introduzca su número de teléfono",
        incorrectPhone: "Error, el número de teléfono incorrecto"
      }
    }
  };
  t.prototype.DEFAULT_SETTINGS = {
    phonesCode: "",
    isClicked: !1,
    phoneMinLength: 9,
    phoneMaxLength: 18,
    allowedBtnCodes: [43, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 45, 32, 40, 41, 229, 8, 13],
    massages: {
      fillName: "Enter your name",
      fillPhone: "Enter your number",
      incorrectPhone: "Error, incorrect number"
    }
  }, t.prototype._getParamsFromScriptURL = function () {
    for (var e = 0, t = {}, n = document.getElementsByTagName("script"), o = 0; o < n.length; o++) {
      var r = n[o].getAttribute("src");
      r && -1 !== r.indexOf("tl-validator") && (e = o);
    }

    var s = n[e],
        i = s.src;

    if (-1 !== i.indexOf("?")) {
      var a = i.substring(i.indexOf("?") + 1);
      a.split("&").forEach(function (e) {
        var n = e.split("=");
        t[n[0]] = decodeURIComponent(n[1]);
      });
    }

    return t;
  }, t.prototype._setCountrySettings = function (e) {
    this.noCountryCode = "IN" === e || "PH" === e || "PE" === e || "AR" === e || "KE" === e || "LK" === e || "NP" === e;
  }, t.prototype._getPerameterFromJSON = function (e) {
    var t = "";

    try {
      t = this._getParamsFromScriptURL()[e];
    } catch (e) {
      console.warn(e);
    }

    return t;
  }, t.prototype._testCountryCode = function (e) {
    return e.toUpperCase().match(/[A-Z]{2}/i)[0] in this.settings.phonesCode || (console.log("%cIncorrect country code! Can't get country " + e + ".", "color: #004ff0; font-size: 20px; font-weight: bold;"), !1);
  }, t.prototype._getCountry = function () {
    window.countryKey && (window.countryKey = window.countryKey.toUpperCase());

    var e = window.countryKey || this._getPerameterFromJSON("country");

    if (e && this._testCountryCode(e)) return e.toUpperCase().match(/[A-Z]{2}/i)[0];
    if (this.forms[0].country) var t = this.forms[0].country.options;else t = this.forms[0].querySelector("select").options;
    var n = t.length,
        o = void 0;

    for (o = 0; o < n; o++) {
      if (t[o].selected) var r = t[o].value;
      if (r) return r.toString().toUpperCase().match(/[A-Z]{2}/i)[0];
    }
  }, t.prototype._getProp = function (e) {
    var t = this._getCountry();

    return this.isLang && "massages" == e ? this.settings[e][this.isLang.toUpperCase()] || this.DEFAULT_SETTINGS[e] : this.settings[e][t] || this.DEFAULT_SETTINGS[e];
  }, t.prototype._clearPhone = function (e) {
    return e.replace(/[^\d]+/gi, "");
  }, t.prototype._getCoords = function (e) {
    var t = e.getBoundingClientRect(),
        n = document.body,
        o = document.documentElement,
        r = window.pageYOffset || o.scrollTop || n.scrollTop,
        s = window.pageXOffset || o.scrollLeft || n.scrollLeft,
        i = o.clientTop || n.clientTop || 0,
        a = o.clientLeft || n.clientLeft || 0;
    return {
      top: t.top + r - i,
      left: t.left + s - a
    };
  }, t.prototype.insertBefore = function (e, t) {
    t.parentNode.insertBefore(e, t);
  }, t.prototype.setRelativeForm = function (e) {
    for (var t = 0; t < e.length; t++) {
      var n = window.getComputedStyle(e[t], null).getPropertyValue("position");
      "static" == n && (e[t].style.position = "relative");
    }
  }, t.prototype._createErrorMassage = function (e, t) {
    if (this._removeState(e), e.classList ? e.classList.add("error") : e.className += " error", this.isLabel) {
      var n = e.id;
      if (n) var o = document.querySelector("[for=" + n + "]");
      o && (o.innerText = t);
    }
  }, t.prototype._removeState = function (e) {
    if (e.classList ? (e.classList.remove("error"), e.classList.remove("success")) : e.className = errorFields[i].className.replace(new RegExp("(^|\\b)(error|success)(\\b|$)", "gi"), " "), !this.isLabel) {
      var t = e.parentNode.querySelector(".validator__tooltip");
      t && t.parentNode.removeChild(t);
    }
  }, t.prototype._success = function (e) {
    this._removeState(e), e.classList && e.classList.add("success");
  }, t.prototype._validate = function (e, t) {
    this.massages = this._getProp("massages"), this.phonesCode = this._getProp("phonesCode"), this.phoneMinLength = this.settings.phoneMinLength || this.DEFAULT_SETTINGS.phoneMinLength, this.phoneMaxLength = this.settings.phoneMaxLength || this.DEFAULT_SETTINGS.phoneMaxLength;
    var n = void 0;
    n = t ? t.name : "all";
    var o = !0;

    if (!e.name || "name" != n && "all" != n || (null === e.name.value || "" == e.name.value || e.name.value.length < 3 || void 0 === e.name.value ? (this._createErrorMassage(e.name, this.massages.fillName), o = !1) : this._success(e.name)), e.phone && ("phone" == n || "all" == n)) {
      var r = this._clearPhone(e.phone.value),
          s = new RegExp("^(00)?" + this.phonesCode, "i"),
          i = /(\d)\1{4,}/gi,
          a = this._getCountry();

      if (null === r || "" == e.phone.value || void 0 === r) this._createErrorMassage(e.phone, this.massages.fillPhone), o = !1;else if ("" == r && e.phone.value.length > 0 || !this.noCountryCode && -1 == r.search(s) || r.search(i) > -1) this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1;else if ("DE" == a) {
        var l = new RegExp("^(00)?" + this.phonesCode + "0+", "i");
        r.search(l) > -1 ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : r.length < this.phoneMinLength ? (this._createErrorMassage(e.phone, this.massages.lessNineSymbols), o = !1) : r.length > this.phoneMaxLength ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);
      } else if ("FR" == a || "ZA" == a) {
        var h = new RegExp("^(00)?" + this.phonesCode + "\\d{9}$", "i");
        -1 == r.search(h) ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);
      } else if ("ES" == a || "IT" == a) r.length < 7 || r.length > this.phoneMaxLength ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);else if ("IN" == a) 10 !== r.length ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);else if ("MD" == a) 11 !== r.length ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);else if ("PH" == a) {
        var c = new RegExp("^(" + this.phonesCode + ")?\\d{10,15}$", "i");
        -1 == r.search(c) ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);
      } else if ("JO" == a) r.length < 11 || r.length > 15 ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);else if ("ID" == a) r.length < 8 || r.length > 14 ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);else if ("OM" == a) r.length < 10 || r.length > 12 ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);else if ("TR" == a) r.length < 11 || r.length > 13 ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);else if ("MA" == a) {
        var m = new RegExp("^(" + this.phonesCode + ")?\\d{10}$", "i");
        -1 == r.search(m) ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);
      } else if ("CO" == a) r.length < 10 || r.length > 13 ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);else if ("AR" == a) {
        var p = [];
        p.push(new RegExp("^[^0\\D]\\d{9}$", "i")), p.push(new RegExp("^(?!15)\\d{10}$", "i")), -1 == r.search(p[0]) || -1 == r.search(p[1]) ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);
      } else if ("HK" == a) r.length < 11 || r.length > 15 ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);else if ("MK" == a) r.length < 11 || r.length > 12 ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);else if ("PE" == a) r.length < 8 || r.length > 11 ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);else if ("CL" == a) 11 !== r.length ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);else if ("KE" == a) {
        var u = new RegExp("^(" + this.phonesCode + "0)?\\d{9,15}$", "i");
        -1 == r.search(u) ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);
      } else if ("MM" == a) {
        var f = new RegExp("^(00)?" + this.phonesCode + "\\d{10,13}$", "i");
        -1 == r.search(f) ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);
      } else if ("PK" == a || "IR" == a) {
        var d = new RegExp("^(00)?" + this.phonesCode + "\\d{10}$", "i");
        -1 == r.search(d) ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);
      } else if ("LK" == a) {
        var g = new RegExp("^7\\d{8}$", "i");
        -1 == r.search(g) ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);
      } else if ("NP" == a) {
        var P = new RegExp("^98\\d{8}$", "i");
        -1 == r.search(P) ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);
      } else if ("ME" == a) {
        var v = new RegExp("^" + this.phonesCode + "\\d{9,20}$", "i");
        -1 == r.search(v) ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);
      } else r.length < this.phoneMinLength || r.length > this.phoneMaxLength ? (this._createErrorMassage(e.phone, this.massages.incorrectPhone), o = !1) : this._success(e.phone);
    }

    return !!o;
  }, t.prototype._moveCursorToEnd = function (e) {
    if ("number" == typeof e.selectionStart) e.selectionStart = e.selectionEnd = e.value.length;else if (void 0 !== e.createTextRange) {
      e.focus();
      var t = e.createTextRange();
      t.collapse(!1), t.select();
    }
  }, t.prototype._addEvents = function () {
    var e = this,
        t = this.forms.length,
        n = void 0,
        o = e._getCountry(),
        r = e._getProp("phonesCode");

    for (e._setCountrySettings(o), n = 0; n < t; n++) {
      var s,
          i = this.forms[n],
          a = i.elements.length;

      for (s = 0; s < a; s++) {
        "button" != i.elements[s].getAttribute("type") && "submit" != i.elements[s].getAttribute("type") && "BUTTON" != i.elements[s].tagName || i.elements[s].addEventListener("click", function (t) {
          var n = e._validate(this.form);

          if (n) {
            o = e._getCountry(), e._setCountrySettings(o);
            var r = this.form.phone.value;
            return r = e._clearPhone(r), "PH" === o && (r = "63" + r.replace(/^63(\d{10,15})/, "$1")), "KE" === o && (r = "2540" + r.replace(/^2540?(\d{9,15})/, "$1")), void (this.form.phone.value = r);
          }

          t.preventDefault();
        });
      }

      i.name && i.name.addEventListener("blur", function () {
        e._validate(this.form, this);
      }), i.phone && (i.phone.addEventListener("focus", function () {
        o = e._getCountry(), r = e._getProp("phonesCode"), e._setCountrySettings(o), this.value || (e.noCountryCode || (-1 === e.countriesWithoutPlus.indexOf(o) && (this.value = "+"), this.value += r), e.isClicked = !1, "LK" == o && (this.value = "7"), "NP" == o && (this.value += "98"));
      }), i.phone.addEventListener("click", function () {
        e.isClicked || (e._moveCursorToEnd(this), e.isClicked = !0);
      }), i.phone.addEventListener("blur", function () {
        e._validate(this.form, this);
      }), i.phone.addEventListener("keypress", function (t) {
        if (e.settings.allowedBtnCodes.indexOf(t.which) < 0) return t.preventDefault(), !1;
      }), i.phone.addEventListener("keyup", function (e) {
        /[^\+\d]+/g.test(this.value) && (this.value = this.value.replace(/[^\+\d]+/, ""));
      }), i.phone.addEventListener("input", function (t) {
        if ("AR" == o) {
          var n = e._clearPhone(this.value),
              s = new RegExp("^(0|15)", "i");

          -1 != n.search(s) && (this.value = "");
        } else if ("PK" == o || "IR" == o) this.value = this.value.replace(new RegExp("^((00)?(\\+)?" + r + ")0", "gi"), "$1");else if ("LK" == o) {
          n = e._clearPhone(this.value);
          var i = new RegExp("^[^7]", "gi");
          n && -1 == n.search(i) || (this.value = "7");
        } else if ("NP" == o) {
          n = e._clearPhone(this.value);
          var a = new RegExp("^98", "gi");
          n && -1 != n.search(a) || (this.value = "98");
        }
      })), i.country && i.country.addEventListener("change", function () {
        for (var n = 0; n < t; n++) {
          e.forms[n].country.selectedIndex = this.selectedIndex, e.forms[n].phone.value = "";
        }
      });
    }
  }, e.addEventListener("DOMContentLoaded", function () {
    new t(n);
  });
})(window);

/***/ }),

/***/ 2:
/*!**************************************!*\
  !*** multi ./src/js/tl-validator.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\IvanS\Desktop\Work\#26789\liverok-mob\src\js\tl-validator.js */"./src/js/tl-validator.js");


/***/ })

/******/ });
//# sourceMappingURL=tl-validator.js.map