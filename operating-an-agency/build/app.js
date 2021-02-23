(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _js_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/store */ "./assets/js/store.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _vue_AgencyByValue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vue/AgencyByValue */ "./assets/vue/AgencyByValue.vue");
/* harmony import */ var _vue_Freelance__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vue/Freelance */ "./assets/vue/Freelance.vue");
/* harmony import */ var _vue_FreelanceByValue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vue/FreelanceByValue */ "./assets/vue/FreelanceByValue.vue");
/* harmony import */ var _vue_AgencyHourly__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vue/AgencyHourly */ "./assets/vue/AgencyHourly.vue");
/* harmony import */ var _js_Generator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/Generator */ "./assets/js/Generator.js");


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */








vue__WEBPACK_IMPORTED_MODULE_8__.default.filter('currency', function (num) {
  if (isNaN(num)) {
    return '?';
  }

  return 'CHF ' + new Intl.NumberFormat().format(Math.round(num));
});

function generateApp(id, generatorMethod) {
  var store = (0,_js_store__WEBPACK_IMPORTED_MODULE_2__.default)();
  var gen = new _js_Generator__WEBPACK_IMPORTED_MODULE_7__.default(store, generatorMethod);
  var v = new vue__WEBPACK_IMPORTED_MODULE_8__.default({
    el: id,
    store: store,
    components: {
      agencybyvalue: _vue_AgencyByValue__WEBPACK_IMPORTED_MODULE_3__.default,
      Freelance: _vue_Freelance__WEBPACK_IMPORTED_MODULE_4__.default,
      freelancebyvalue: _vue_FreelanceByValue__WEBPACK_IMPORTED_MODULE_5__.default,
      agencyhourly: _vue_AgencyHourly__WEBPACK_IMPORTED_MODULE_6__.default
    }
  });
} //generateApp('#app', 'generateTestingData');


generateApp('#freelance-app', 'generateFreelanceScenario');
generateApp('#agency-hourly', 'generateAgencyHourlyScenario');
generateApp('#freelance-by-value', 'generateFreelanceByValueScenario');
generateApp('#agency-by-value', 'generateAgencyByValueLowPm');
/*
let store2 = createNewStore();
var gen2 = new Generator(store2);
gen2.generateTestingData();

var v2 = new Vue({
    el: '#app2',
    store: store2,
    components: {
        Home
    }
});
*/

/***/ }),

/***/ "./assets/js/Generator.js":
/*!********************************!*\
  !*** ./assets/js/Generator.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _Model_Employee__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Model/Employee */ "./assets/js/Model/Employee.js");
/* harmony import */ var _Model_Project__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Model/Project */ "./assets/js/Model/Project.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./store */ "./assets/js/store.js");









function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var Generator = /*#__PURE__*/function () {
  function Generator(store, initMethodName) {
    _classCallCheck(this, Generator);

    _defineProperty(this, "employeeNames", ['Giligan', 'Rob', 'Henrik', 'Virginia', 'Robert']);

    _defineProperty(this, "projectNames", ['eCommerce Store', 'Marketing Landingpage', 'Business App']);

    _defineProperty(this, "additionalProjectNames", ['PoS App', 'AI Art Project', 'Consulting', 'Outsourcing Client', 'Marketing Automation']);

    _defineProperty(this, "projectBudgets", [50, 100, 200]);

    _defineProperty(this, "playIntervalReference", null);

    _defineProperty(this, "tickCallback", this.addRandomTimeBooking);

    _defineProperty(this, "createProjectCallback", this.defaultCreateNewProjectCallback);

    _defineProperty(this, "store", null);

    _defineProperty(this, "initMethodName", 'generateTestingData');

    this.store = store;
    this.store.commit('linkGenerator', this);

    if (initMethodName) {
      this.loadScenario(initMethodName);
    }
  }

  _createClass(Generator, [{
    key: "loadScenario",
    value: function loadScenario(initMethodName) {
      this.initMethodName = initMethodName;
      this[initMethodName]();
    }
  }, {
    key: "generateTestingData",
    value: function generateTestingData(projectModifier, employeeModifier) {
      var _this = this;

      var employees = [];
      var projects = [];
      employeeModifier = employeeModifier || 1;
      projectModifier = projectModifier || 0.8;
      this.employeeNames.forEach(function (name) {
        return employees.push(new _Model_Employee__WEBPACK_IMPORTED_MODULE_8__.default(name, employeeModifier));
      });
      this.projectNames.forEach(function (name, k) {
        return projects.push(new _Model_Project__WEBPACK_IMPORTED_MODULE_9__.default(name, _this.projectBudgets[k], projectModifier));
      });
      this.store.commit('setCurrentDate', this.store.getters.getInitialDate);
      employees.forEach(function (employee) {
        return _this.store.commit('addEmployee', employee);
      });
      projects.forEach(function (project) {
        return _this.store.commit('addProject', project);
      });
    }
  }, {
    key: "generateAgencyByValueLowPm",
    value: function generateAgencyByValueLowPm() {
      this.generateTestingData(0.7);
    }
  }, {
    key: "generateAgencyByValueLowUtilisation",
    value: function generateAgencyByValueLowUtilisation() {
      this.generateTestingData(1.1, 0.8);
    }
  }, {
    key: "generateAgencyByValueBalanced",
    value: function generateAgencyByValueBalanced() {
      this.generateTestingData(1.1, 1);
    }
  }, {
    key: "generateAgencyHourlyScenario",
    value: function generateAgencyHourlyScenario() {
      var _this2 = this;

      this.store.commit('setCurrentDate', this.store.getters.getInitialDate);
      this.createProjectCallback = false;
      var employees = [];
      this.employeeNames.slice(0, 3).forEach(function (name, k) {
        return employees.push(new _Model_Employee__WEBPACK_IMPORTED_MODULE_8__.default(name, 1 - k * 0.1));
      });
      employees.forEach(function (employee) {
        return _this2.store.commit('addEmployee', employee);
      });
      var project = new _Model_Project__WEBPACK_IMPORTED_MODULE_9__.default('Consulting', false);
      this.store.commit('addProject', project);
    }
  }, {
    key: "generateFreelanceScenario",
    value: function generateFreelanceScenario() {
      this.store.commit('setCurrentDate', this.store.getters.getInitialDate);
      this.createProjectCallback = false;
      var project = new _Model_Project__WEBPACK_IMPORTED_MODULE_9__.default('Consulting', false);
      var employee = new _Model_Employee__WEBPACK_IMPORTED_MODULE_8__.default('Freelancer');
      this.store.commit('addEmployee', employee);
      this.store.commit('addProject', project);
    }
  }, {
    key: "generateFreelanceByValueScenario",
    value: function generateFreelanceByValueScenario() {
      this.store.commit('setCurrentDate', this.store.getters.getInitialDate);
      this.createProjectCallback = this.addNextFreelanceByValueProject;
      var project = new _Model_Project__WEBPACK_IMPORTED_MODULE_9__.default(this.projectNames[0], this.projectBudgets[0]);
      var employee = new _Model_Employee__WEBPACK_IMPORTED_MODULE_8__.default('Freelancer');
      employee.productivity = 1.1;
      this.store.commit('addEmployee', employee);
      this.store.commit('addProject', project);
    }
  }, {
    key: "addNextFreelanceByValueProject",
    value: function addNextFreelanceByValueProject(projects, employees) {
      var incompleteProjects = projects.filter(function (el) {
        return !el.isComplete;
      });
      var completedProjects = projects.length - incompleteProjects.length;

      if (completedProjects === 3) {
        this.pause();
        return;
      }

      if (incompleteProjects.length > 0) {
        return;
      }

      var p = new _Model_Project__WEBPACK_IMPORTED_MODULE_9__.default(this.projectNames[projects.length], this.projectBudgets[projects.length]);
      p.chanceToCompleteOnTime = projects.length === 1 ? 1 : 0.7;
      this.store.commit('addProject', p);
    }
  }, {
    key: "addRandomTimeBooking",
    value: function addRandomTimeBooking() {
      var _this3 = this;

      var emp = this.store.getters.getEmployees;
      var pro = this.store.getters.getProjects;
      var date = this.store.getters.getCurrentDate;
      var incompleteProjects = pro.filter(function (el) {
        return !el.isComplete;
      });

      if (date.getFullYear() > 2021) {
        // Run the simulation for one year
        this.pause();
        return;
      }

      if (typeof this.createProjectCallback === 'function') {
        this.createProjectCallback(pro, emp);
      }

      emp.forEach(function (employee) {
        if (!employee.worksOnDay()) {
          return;
        }

        if (incompleteProjects.length === 0) {
          return;
        }

        var project = incompleteProjects[Math.floor(incompleteProjects.length * Math.random())];
        var hours = Math.round(Math.random() * 5 * 10 * employee.productivity) / 10;

        _this3.store.dispatch('addTimeBooking', {
          project: project,
          employee: employee,
          hours: hours,
          date: date
        });

        employee.__ob__.dep.notify();

        project.__ob__.dep.notify();
      });
      date = new Date(date.getTime() + 86400 * 1000);
      this.store.commit('setCurrentDate', date);
      this.store.dispatch('updateHistograms');
    }
  }, {
    key: "defaultCreateNewProjectCallback",
    value: function defaultCreateNewProjectCallback(projects, employees) {
      var incompleteProjects = projects.filter(function (el) {
        return !el.isComplete;
      });

      if (incompleteProjects.length < 2 || incompleteProjects.length < 3 && Math.random() > 0.5) {
        var p = new _Model_Project__WEBPACK_IMPORTED_MODULE_9__.default(this.additionalProjectNames[Math.floor(Math.random() * this.additionalProjectNames.length)], Math.round(500 + Math.random() * 1000));
        this.store.commit('addProject', p);
      }
    }
  }, {
    key: "play",
    value: function play() {
      if (this.playIntervalReference) {
        return;
      }

      this.playIntervalReference = setInterval(this.tickCallback.bind(this), 100);
    }
  }, {
    key: "pause",
    value: function pause() {
      clearInterval(this.playIntervalReference);
      this.playIntervalReference = null;
    }
  }, {
    key: "reset",
    value: function reset() {
      this.pause();
      this.store.replaceState((0,_store__WEBPACK_IMPORTED_MODULE_10__.getDefaultState)());
      this.store.commit('linkGenerator', this);
      this[this.initMethodName]();
    }
  }, {
    key: "tick",
    value: function tick() {
      this.tickCallback();
    }
  }]);

  return Generator;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Generator);

/***/ }),

/***/ "./assets/js/Helper.js":
/*!*****************************!*\
  !*** ./assets/js/Helper.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "shortenToHistoryLength": () => (/* binding */ shortenToHistoryLength),
/* harmony export */   "appendWithMaxLength": () => (/* binding */ appendWithMaxLength)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);


function shortenToHistoryLength(state, arr) {
  if (state.historyLength === false) {
    return arr;
  }

  if (arr === undefined) {
    return [];
  }

  return arr.slice(Math.max(arr.length - state.historyLength, 0), arr.length);
}

function appendWithMaxLength(item, array, length) {
  var removedValue;

  if (array.length >= length) {
    removedValue = array.shift();
  }

  array.push(item);
  return removedValue;
}



/***/ }),

/***/ "./assets/js/Model/Employee.js":
/*!*************************************!*\
  !*** ./assets/js/Model/Employee.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.index-of.js */ "./node_modules/core-js/modules/es.array.index-of.js");
/* harmony import */ var core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_index_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Helper */ "./assets/js/Helper.js");




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Employee = /*#__PURE__*/function () {
  function Employee(name, productivity) {
    _classCallCheck(this, Employee);

    _defineProperty(this, "expectedYearlyBillableHours", 1000);

    _defineProperty(this, "totalTimeBooked", 0);

    _defineProperty(this, "objectId", null);

    _defineProperty(this, "previousBookings", []);

    _defineProperty(this, "historyLength", 50);

    _defineProperty(this, "productivity", 1);

    this.name = name;

    if (productivity) {
      this.productivity = productivity;
    }
  }

  _createClass(Employee, [{
    key: "getEmployeeHistoryKey",
    value: function getEmployeeHistoryKey() {
      return this.name + 'History' + this.objectId;
    }
  }, {
    key: "worksOnDay",
    value: function worksOnDay(date) {
      if (date === undefined) {
        return true;
      }

      return [0, 6].indexOf(date.getDay()) === -1;
    }
  }, {
    key: "addTimeBooking",
    value: function addTimeBooking(timebooking) {
      var removedValue = (0,_Helper__WEBPACK_IMPORTED_MODULE_3__.appendWithMaxLength)(timebooking.timebooked, this.previousBookings, this.historyLength);
      this.totalTimeBooked += timebooking.timebooked - (removedValue || 0);
    }
  }]);

  return Employee;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Employee);

/***/ }),

/***/ "./assets/js/Model/Project.js":
/*!************************************!*\
  !*** ./assets/js/Model/Project.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Helper */ "./assets/js/Helper.js");



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var Project = /*#__PURE__*/function () {
  function Project(name, hourBudget, chanceToCompleteOnTime) {
    _classCallCheck(this, Project);

    _defineProperty(this, "hourBudget", 500);

    _defineProperty(this, "hoursRemaining", 500);

    _defineProperty(this, "chanceToCompleteOnTime", 0.8);

    _defineProperty(this, "isComplete", false);

    _defineProperty(this, "totalTimeBooked", 0);

    _defineProperty(this, "allTimeTimeBooked", 0);

    _defineProperty(this, "objectId", null);

    _defineProperty(this, "previousBookings", []);

    _defineProperty(this, "historyLength", 50);

    this.name = name;

    if (hourBudget) {
      this.hourBudget = hourBudget;
      this.hoursRemaining = hourBudget;
    } else {
      this.hourBudget = false;
    }

    if (chanceToCompleteOnTime) {
      this.chanceToCompleteOnTime = chanceToCompleteOnTime;
    }
  }

  _createClass(Project, [{
    key: "checkComplete",
    value: function checkComplete() {
      if (this.isComplete) {
        return;
      }

      if (!this.hourBudget) {
        // Projects without a budget never finish
        return;
      }

      var hoursSpent = this.allTimeTimeBooked;
      var chanceToComplete = this.chanceToCompleteOnTime - this.getHoursBudget() / hoursSpent;
      this.isComplete = Math.random() < chanceToComplete;
    }
  }, {
    key: "getRatio",
    value: function getRatio() {
      var bookingsSum = this.totalTimeBooked;
      var currentHoursRemaining = this.getHoursRemaining();
      return Math.round(this.getHoursBudget() / (currentHoursRemaining + bookingsSum) * 100) || 0;
    }
  }, {
    key: "getHoursRemaining",
    value: function getHoursRemaining() {
      return this.hourBudget ? this.hoursRemaining : 0;
    }
  }, {
    key: "getHoursBudget",
    value: function getHoursBudget() {
      return this.hourBudget || this.allTimeTimeBooked;
    }
  }, {
    key: "getProjectHistoryKey",
    value: function getProjectHistoryKey() {
      return this.name + 'History' + this.objectId;
    }
  }, {
    key: "getTotalHoursBookedHistoryKey",
    value: function getTotalHoursBookedHistoryKey() {
      return this.name + 'TotalHoursHistory' + this.objectId;
    }
  }, {
    key: "addTimeBooking",
    value: function addTimeBooking(timebooking) {
      var removedValue = (0,_Helper__WEBPACK_IMPORTED_MODULE_2__.appendWithMaxLength)(timebooking.timebooked, this.previousBookings, this.historyLength);
      this.totalTimeBooked += timebooking.timebooked - (removedValue || 0);
      this.allTimeTimeBooked += timebooking.timebooked;

      if (this.hourBudget) {
        this.hoursRemaining = Math.round(Math.max(this.hoursRemaining - timebooking.timebooked, 0));
      }
    }
  }]);

  return Project;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);

/***/ }),

/***/ "./assets/js/Model/TimeBooking.js":
/*!****************************************!*\
  !*** ./assets/js/Model/TimeBooking.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TimeBooking = function TimeBooking(project, employee, timebooked, date) {
  _classCallCheck(this, TimeBooking);

  if (project === undefined) {
    throw new Error('Project must be defined');
  }

  if (employee === undefined) {
    throw new Error('Employee must be defined');
  }

  if (timebooked === undefined) {
    throw new Error('timebooked must be defined');
  }

  if (date === undefined) {
    throw new Error('date must be defined');
  }

  this.project = project;
  this.employee = employee;
  this.timebooked = timebooked;
  this.date = date;
  project.addTimeBooking(this);
  employee.addTimeBooking(this);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TimeBooking);

/***/ }),

/***/ "./assets/js/store.js":
/*!****************************!*\
  !*** ./assets/js/store.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getDefaultState": () => (/* binding */ getDefaultState)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _Model_TimeBooking__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Model/TimeBooking */ "./assets/js/Model/TimeBooking.js");
/* harmony import */ var _Helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Helper */ "./assets/js/Helper.js");








vue__WEBPACK_IMPORTED_MODULE_6__.default.use(vuex__WEBPACK_IMPORTED_MODULE_7__.default);

function getDefaultState() {
  return {
    projects: [],
    employees: [],
    timeBookings: [],
    currentDate: null,
    initialDate: new Date('2021-01-01 00:00'),
    employeeUtilizationHistory: [],
    projectStatusHistory: [],
    companyHealthHistory: [],
    dateHistory: [],
    employeeHistory: {},
    projectHistory: {},
    employeeWorklogsCache: {},
    historyLength: 50,
    objectIncrementId: 1,
    generator: null,
    defaultHourlyRate: 150
  };
}

function createNewStore() {
  return new vuex__WEBPACK_IMPORTED_MODULE_7__.default.Store({
    state: getDefaultState(),
    actions: {
      updateHistograms: function updateHistograms(state) {
        state.commit('addHistoryValue', {
          key: 'employeeUtilizationHistory',
          value: state.getters.getEmployeeUtilization
        });
        state.commit('addHistoryValue', {
          key: 'projectStatusHistory',
          value: state.getters.getProjectStatus
        });
        state.commit('addHistoryValue', {
          key: 'companyHealthHistory',
          value: state.getters.getCompanyHealth
        });
        state.commit('addHistoryValue', {
          key: 'dateHistory',
          value: state.getters.getCurrentDate.getTime() / 1000
        });
        state.getters.getProjects.forEach(function (p) {
          state.commit('addHistoryValue', {
            key: p.getProjectHistoryKey(),
            value: state.getters.getProjectRatio(p)
          });
          state.commit('addHistoryValue', {
            key: p.getTotalHoursBookedHistoryKey(),
            value: p.getHoursRemaining(),
            isRatio: false
          });
        });
        state.getters.getEmployees.forEach(function (e) {
          state.commit('addHistoryValue', {
            key: e.getEmployeeHistoryKey(),
            value: e.worksOnDay(state.getters.getCurrentDate) ? state.getters.getUtilizationRatioForEmployee(e) : null
          });
        });
      },
      addTimeBooking: function addTimeBooking(state, _ref) {
        var project = _ref.project,
            employee = _ref.employee,
            hours = _ref.hours,
            date = _ref.date;
        var timebooking = new _Model_TimeBooking__WEBPACK_IMPORTED_MODULE_4__.default(project, employee, hours, date);
        state.commit('addTimeBooking', timebooking);
      }
    },
    mutations: {
      addEmployee: function addEmployee(state, employee) {
        employee.objectId = state.objectIncrementId;
        employee.historyLength = state.historyLength;
        state.objectIncrementId++;
        state.employees.push(employee);
      },
      addProject: function addProject(state, project) {
        project.objectId = state.objectIncrementId;
        project.historyLength = state.historyLength;
        state.objectIncrementId++;
        state.projects.push(project);
      },
      addTimeBooking: function addTimeBooking(state, timebooking) {
        timebooking.project.checkComplete();
        state.timeBookings.push(timebooking);
      },
      resetTimeBookings: function resetTimeBookings(state) {
        state.timeBookings = [];
      },
      setCurrentDate: function setCurrentDate(state, currentDate) {
        state.currentDate = currentDate;
      },
      addHistoryValue: function addHistoryValue(state, _ref2) {
        var key = _ref2.key,
            value = _ref2.value,
            isRatio = _ref2.isRatio;

        if (state[key] === undefined) {
          state[key] = [];
        }

        var historyValue = value;

        if (isRatio === undefined || isRatio === true) {
          historyValue = Math.round(value * 100);
        }

        state[key].push(historyValue);
      },
      linkGenerator: function linkGenerator(state, generator) {
        state.generator = generator;
      }
    },
    getters: {
      generator: function generator(state) {
        return state.generator;
      },
      getEmployees: function getEmployees(state) {
        return state.employees;
      },
      getProjects: function getProjects(state) {
        return state.projects;
      },
      getTimeBookings: function getTimeBookings(state) {
        return state.timeBookings;
      },
      getTimeBookingsForProject: function getTimeBookingsForProject(state) {
        return function (project) {
          return Math.round(project.totalTimeBooked * 10) / 10;
        };
      },
      getCurrentDate: function getCurrentDate(state) {
        return state.currentDate;
      },
      getInitialDate: function getInitialDate(state) {
        return state.initialDate;
      },
      getHistoryLength: function getHistoryLength(state) {
        return state.historyLength;
      },
      isDarkMode: function isDarkMode(state) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      },
      getDefaultHourlyRate: function getDefaultHourlyRate(state) {
        return state.defaultHourlyRate;
      },
      getYearFraction: function getYearFraction(state, getters) {
        var yearInSeconds = 86400 * 365 * 1000;
        var earliestDateInHistory = getters.getDateHistory[0] ? new Date(getters.getDateHistory[0] * 10) : state.initialDate;
        return (state.currentDate.getTime() - earliestDateInHistory.getTime()) / yearInSeconds;
      },
      getTimeBookingsForEmployee: function getTimeBookingsForEmployee(state) {
        return function (employee) {
          return Math.round(employee.totalTimeBooked * 10) / 10;
        };
      },
      getUtilizationRatioForEmployee: function getUtilizationRatioForEmployee(state, getters) {
        return function (employee) {
          return getters.getTimeBookingsForEmployee(employee) / (getters.getYearFraction * employee.expectedYearlyBillableHours);
        };
      },
      getTimeBookingsSum: function getTimeBookingsSum(state) {
        return Math.round(state.employees.reduce(function (carry, el) {
          return carry += el.totalTimeBooked;
        }, 0) * 10) / 10;
      },
      getAllTimeTimeBookingsSum: function getAllTimeTimeBookingsSum(state) {
        return Math.round(state.projects.reduce(function (carry, el) {
          return carry += el.allTimeTimeBooked;
        }, 0) * 10) / 10;
      },
      getExpectedBillableHoursSum: function getExpectedBillableHoursSum(state, getters) {
        return state.employees.reduce(function (carry, el) {
          return carry += el.expectedYearlyBillableHours;
        }, 0);
      },
      getProjectHourBudgetSum: function getProjectHourBudgetSum(state) {
        return state.projects.reduce(function (carry, el) {
          return carry += el.getHoursBudget();
        }, 0);
      },
      getProjectHoursRemainingSum: function getProjectHoursRemainingSum(state) {
        return state.projects.reduce(function (carry, el) {
          return carry += el.getHoursRemaining();
        }, 0);
      },
      getEmployeeUtilization: function getEmployeeUtilization(state, getters) {
        return getters.getTimeBookingsSum / (getters.getExpectedBillableHoursSum * getters.getYearFraction);
      },
      getProjectStatus: function getProjectStatus(state, getters) {
        return getters.getProjectHourBudgetSum / (getters.getProjectHoursRemainingSum + getters.getAllTimeTimeBookingsSum);
      },
      getProjectRatio: function getProjectRatio(state, getters) {
        return function (project) {
          return project.getHoursBudget() / (project.allTimeTimeBooked + project.getHoursRemaining());
        };
      },
      getDataSetForEmployeeUtilizationHistory: function getDataSetForEmployeeUtilizationHistory(state, getters) {
        return (0,_Helper__WEBPACK_IMPORTED_MODULE_5__.shortenToHistoryLength)(state, state.employeeUtilizationHistory);
      },
      getDataSetForProjectStatusHistory: function getDataSetForProjectStatusHistory(state, getters) {
        return (0,_Helper__WEBPACK_IMPORTED_MODULE_5__.shortenToHistoryLength)(state, state.projectStatusHistory);
      },
      getCompanyHealth: function getCompanyHealth(state, getters) {
        return getters.getProjectStatus * getters.getEmployeeUtilization;
      },
      getCompanyHealthHistory: function getCompanyHealthHistory(state, getters) {
        return (0,_Helper__WEBPACK_IMPORTED_MODULE_5__.shortenToHistoryLength)(state, state.companyHealthHistory);
      },
      getDateHistory: function getDateHistory(state, getters) {
        return (0,_Helper__WEBPACK_IMPORTED_MODULE_5__.shortenToHistoryLength)(state, state.dateHistory);
      },
      getProjectStatusHistoryForProject: function getProjectStatusHistoryForProject(state, getters) {
        return function (project) {
          var history = state[project.getProjectHistoryKey()];
          return (0,_Helper__WEBPACK_IMPORTED_MODULE_5__.shortenToHistoryLength)(state, history);
        };
      },
      getProjectTotalHoursHistoryForProject: function getProjectTotalHoursHistoryForProject(state, getters) {
        return function (project) {
          var history = state[project.getTotalHoursBookedHistoryKey()];
          return (0,_Helper__WEBPACK_IMPORTED_MODULE_5__.shortenToHistoryLength)(state, history);
        };
      },
      getUtilizationHistoryForEmployee: function getUtilizationHistoryForEmployee(state, getters) {
        return function (employee) {
          var history = state[employee.getEmployeeHistoryKey()];
          return (0,_Helper__WEBPACK_IMPORTED_MODULE_5__.shortenToHistoryLength)(state, history);
        };
      }
    }
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createNewStore);


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/AgencyByValue.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/AgencyByValue.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee */ "./assets/vue/Employee.vue");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./assets/vue/Project.vue");
/* harmony import */ var _ScenarioSimulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScenarioSimulator */ "./assets/vue/ScenarioSimulator.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _EmployeeUtilization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmployeeUtilization */ "./assets/vue/EmployeeUtilization.vue");
/* harmony import */ var _ProjectStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectStatus */ "./assets/vue/ProjectStatus.vue");
/* harmony import */ var _CompanyHealth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompanyHealth */ "./assets/vue/CompanyHealth.vue");
/* harmony import */ var _TimeBookingList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TimeBookingList */ "./assets/vue/TimeBookingList.vue");
/* harmony import */ var _Totals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Totals */ "./assets/vue/Totals.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "AgencyByValue",
  components: {
    TimeBookingList: _TimeBookingList__WEBPACK_IMPORTED_MODULE_7__.default,
    CompanyHealth: _CompanyHealth__WEBPACK_IMPORTED_MODULE_6__.default,
    ProjectStatus: _ProjectStatus__WEBPACK_IMPORTED_MODULE_5__.default,
    EmployeeUtilization: _EmployeeUtilization__WEBPACK_IMPORTED_MODULE_4__.default,
    Employee: _Employee__WEBPACK_IMPORTED_MODULE_1__.default,
    Project: _Project__WEBPACK_IMPORTED_MODULE_2__.default,
    ScenarioSimulator: _ScenarioSimulator__WEBPACK_IMPORTED_MODULE_3__.default,
    Totals: _Totals__WEBPACK_IMPORTED_MODULE_8__.default
  },
  data: function data() {
    return {
      scenarios: [{
        name: "Scenario #1",
        // Weak Project Management
        method: "generateAgencyByValueLowPm"
      }, {
        name: "Scenario #2",
        // Low Utilization
        method: "generateAgencyByValueLowUtilisation"
      }, {
        name: "Scenario #3",
        // Optimal Balance
        method: "generateAgencyByValueBalanced"
      }]
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapGetters)(['getEmployees', 'getProjects']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/AgencyHourly.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/AgencyHourly.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee */ "./assets/vue/Employee.vue");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./assets/vue/Project.vue");
/* harmony import */ var _ScenarioSimulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScenarioSimulator */ "./assets/vue/ScenarioSimulator.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _EmployeeUtilization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmployeeUtilization */ "./assets/vue/EmployeeUtilization.vue");
/* harmony import */ var _ProjectStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectStatus */ "./assets/vue/ProjectStatus.vue");
/* harmony import */ var _CompanyHealth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompanyHealth */ "./assets/vue/CompanyHealth.vue");
/* harmony import */ var _TimeBookingList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TimeBookingList */ "./assets/vue/TimeBookingList.vue");
/* harmony import */ var _Totals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Totals */ "./assets/vue/Totals.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Home",
  components: {
    TimeBookingList: _TimeBookingList__WEBPACK_IMPORTED_MODULE_7__.default,
    CompanyHealth: _CompanyHealth__WEBPACK_IMPORTED_MODULE_6__.default,
    ProjectStatus: _ProjectStatus__WEBPACK_IMPORTED_MODULE_5__.default,
    EmployeeUtilization: _EmployeeUtilization__WEBPACK_IMPORTED_MODULE_4__.default,
    Employee: _Employee__WEBPACK_IMPORTED_MODULE_1__.default,
    Project: _Project__WEBPACK_IMPORTED_MODULE_2__.default,
    ScenarioSimulator: _ScenarioSimulator__WEBPACK_IMPORTED_MODULE_3__.default,
    Totals: _Totals__WEBPACK_IMPORTED_MODULE_8__.default
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapGetters)(['getEmployees', 'getProjects']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/CompanyHealth.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/CompanyHealth.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RatioChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RatioChart */ "./assets/vue/RatioChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "CompanyHealth",
  components: {
    RatioChart: _RatioChart__WEBPACK_IMPORTED_MODULE_0__.default
  },
  computed: {
    health: function health() {
      var ratio = this.$store.getters.getCompanyHealth;
      return Math.round(ratio * 100) || 0;
    },
    chartData: function chartData() {
      return this.$store.getters.getCompanyHealthHistory;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Employee.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Employee.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RatioChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RatioChart */ "./assets/vue/RatioChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['employee'],
  name: "Employee",
  components: {
    RatioChart: _RatioChart__WEBPACK_IMPORTED_MODULE_0__.default
  },
  computed: {
    timeBookings: function timeBookings() {
      return this.$store.getters.getTimeBookingsForEmployee(this.employee);
    },
    bookedTimePercent: function bookedTimePercent() {
      return Math.round(this.$store.getters.getUtilizationRatioForEmployee(this.employee) * 100) || 0;
    },
    chartData: function chartData() {
      return this.$store.getters.getUtilizationHistoryForEmployee(this.employee);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/EmployeeUtilization.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/EmployeeUtilization.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RatioChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RatioChart */ "./assets/vue/RatioChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "EmployeeUtilization",
  components: {
    RatioChart: _RatioChart__WEBPACK_IMPORTED_MODULE_0__.default
  },
  computed: {
    utilization: function utilization() {
      var fraction = this.$store.getters.getEmployeeUtilization;
      return Math.round(fraction * 100) || 0;
    },
    chartData: function chartData() {
      return this.$store.getters.getDataSetForEmployeeUtilizationHistory;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Freelance.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Freelance.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee */ "./assets/vue/Employee.vue");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./assets/vue/Project.vue");
/* harmony import */ var _ScenarioSimulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScenarioSimulator */ "./assets/vue/ScenarioSimulator.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _EmployeeUtilization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmployeeUtilization */ "./assets/vue/EmployeeUtilization.vue");
/* harmony import */ var _ProjectStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectStatus */ "./assets/vue/ProjectStatus.vue");
/* harmony import */ var _CompanyHealth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompanyHealth */ "./assets/vue/CompanyHealth.vue");
/* harmony import */ var _TimeBookingList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TimeBookingList */ "./assets/vue/TimeBookingList.vue");
/* harmony import */ var _Totals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Totals */ "./assets/vue/Totals.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Freelance",
  components: {
    TimeBookingList: _TimeBookingList__WEBPACK_IMPORTED_MODULE_7__.default,
    CompanyHealth: _CompanyHealth__WEBPACK_IMPORTED_MODULE_6__.default,
    ProjectStatus: _ProjectStatus__WEBPACK_IMPORTED_MODULE_5__.default,
    EmployeeUtilization: _EmployeeUtilization__WEBPACK_IMPORTED_MODULE_4__.default,
    Employee: _Employee__WEBPACK_IMPORTED_MODULE_1__.default,
    Project: _Project__WEBPACK_IMPORTED_MODULE_2__.default,
    ScenarioSimulator: _ScenarioSimulator__WEBPACK_IMPORTED_MODULE_3__.default,
    Totals: _Totals__WEBPACK_IMPORTED_MODULE_8__.default
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapGetters)(['getEmployees', 'getProjects']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/FreelanceByValue.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/FreelanceByValue.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee */ "./assets/vue/Employee.vue");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Project */ "./assets/vue/Project.vue");
/* harmony import */ var _ScenarioSimulator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ScenarioSimulator */ "./assets/vue/ScenarioSimulator.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _EmployeeUtilization__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./EmployeeUtilization */ "./assets/vue/EmployeeUtilization.vue");
/* harmony import */ var _ProjectStatus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ProjectStatus */ "./assets/vue/ProjectStatus.vue");
/* harmony import */ var _CompanyHealth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./CompanyHealth */ "./assets/vue/CompanyHealth.vue");
/* harmony import */ var _TimeBookingList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TimeBookingList */ "./assets/vue/TimeBookingList.vue");
/* harmony import */ var _Totals__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Totals */ "./assets/vue/Totals.vue");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//









/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "FreelanceByValue",
  components: {
    TimeBookingList: _TimeBookingList__WEBPACK_IMPORTED_MODULE_7__.default,
    CompanyHealth: _CompanyHealth__WEBPACK_IMPORTED_MODULE_6__.default,
    ProjectStatus: _ProjectStatus__WEBPACK_IMPORTED_MODULE_5__.default,
    EmployeeUtilization: _EmployeeUtilization__WEBPACK_IMPORTED_MODULE_4__.default,
    Employee: _Employee__WEBPACK_IMPORTED_MODULE_1__.default,
    Project: _Project__WEBPACK_IMPORTED_MODULE_2__.default,
    ScenarioSimulator: _ScenarioSimulator__WEBPACK_IMPORTED_MODULE_3__.default,
    Totals: _Totals__WEBPACK_IMPORTED_MODULE_8__.default
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_9__.mapGetters)(['getEmployees', 'getProjects']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Project.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Project.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RatioChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RatioChart */ "./assets/vue/RatioChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: ['project'],
  name: "Project",
  components: {
    RatioChart: _RatioChart__WEBPACK_IMPORTED_MODULE_0__.default
  },
  computed: {
    remainingBudget: function remainingBudget() {
      return this.project.getHoursRemaining();
    },
    percentComplete: function percentComplete() {
      return Math.round(this.$store.getters.getProjectRatio(this.project) * 100) || 0;
    },
    chartData: function chartData() {
      return this.$store.getters.getProjectStatusHistoryForProject(this.project);
    },
    hoursBooked: function hoursBooked() {
      return this.$store.getters.getProjectTotalHoursHistoryForProject(this.project);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/ProjectStatus.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/ProjectStatus.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RatioChart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RatioChart */ "./assets/vue/RatioChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ProjectStatus",
  components: {
    RatioChart: _RatioChart__WEBPACK_IMPORTED_MODULE_0__.default
  },
  computed: {
    health: function health() {
      var ratio = this.$store.getters.getProjectStatus;
      return Math.round(ratio * 100) || 0;
    },
    chartData: function chartData() {
      return this.$store.getters.getDataSetForProjectStatusHistory;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/RatioChart.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/RatioChart.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var uplot__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uplot */ "./node_modules/uplot/dist/uPlot.esm.js");



//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "RatioChart",
  props: {
    chartData: {
      type: Array
    },
    linearData: {
      type: Array,
      optional: true
    },
    width: {
      type: Number,
      "default": 250
    },
    height: {
      type: Number,
      "default": 80
    },
    autoSize: {
      type: Boolean,
      "default": true
    }
  },
  watch: {
    getChartData: function getChartData() {
      this.plot.setData(this.getChartData);
    }
  },
  mounted: function mounted() {
    if (this.linearData) {
      this.options.series.push({
        label: "CPU",
        scale: "h",
        value: function value(u, v) {
          return v == null ? "-" : v.toFixed(1) + "%";
        },
        stroke: "#3195ff"
      });
    }

    this.plot = new uplot__WEBPACK_IMPORTED_MODULE_3__.default(this.options, this.getChartData, this.$refs.container);

    if (this.autoSize && ResizeObserver !== undefined) {
      resizePlot.call(this, this.$refs.container);
      new ResizeObserver(resizePlot.bind(this, this.$refs.container)).observe(this.$refs.container);
    }
  },
  computed: {
    getChartData: function getChartData() {
      return [this.$store.getters.getDateHistory, this.chartData, this.linearData];
    }
  },
  data: function data() {
    return {
      options: {
        //title: "Fixed length / sliding data slices",
        width: this.width,
        height: this.height,
        cursor: {
          drag: {
            setScale: false
          }
        },
        select: {
          show: false
        },
        legend: {
          show: false
        },
        scales: {
          "%": {
            auto: false,
            range: [0, 100]
          },
          x: {
            time: false
          }
        },
        series: [{}, {
          label: "CPU",
          scale: "%",
          stroke: "#31ff31",
          fill: "#83ff83"
        }],
        axes: [{
          show: false
        }, {
          scale: '%',
          font: "11px Arial",
          stroke: this.$store.getters.isDarkMode ? '#FFF' : '#000',
          grid: {
            stroke: this.$store.getters.isDarkMode ? '#FFF' : '#000',
            width: 1
          }
        }, {
          side: 1,
          scale: 'h',
          font: "11px Arial",
          stroke: this.$store.getters.isDarkMode ? '#FFF' : '#000'
        }]
      },
      plot: null
    };
  }
});

function resizePlot(el) {
  var dimensions = el.getBoundingClientRect();
  this.plot.setSize({
    width: Math.round(dimensions.width),
    height: this.height
  });
  var canvas = this.plot.root.querySelector('canvas');
  canvas.style.width = dimensions.width + 'px';
  canvas.style.height = this.height + 'px';
}

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/ScenarioSimulator.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/ScenarioSimulator.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_Generator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/Generator */ "./assets/js/Generator.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// https://en.wikipedia.org/wiki/Media_control_symbols


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ScenarioSimulator",
  props: {
    enableStep: {
      type: Boolean,
      "default": false
    },
    scenarios: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      playing: false,
      played: false,
      showScenarios: this.$props.scenarios.length > 0
    };
  },
  methods: {
    play: function play(event) {
      this.$store.getters.generator.play();
      this.playing = true;
      this.played = true;
    },
    pause: function pause(event) {
      this.$store.getters.generator.pause();
      this.playing = false;
    },
    reset: function reset(event) {
      this.$store.getters.generator.reset();
      this.playing = false;
    },
    tick: function tick(event) {
      this.$store.getters.generator.tick();
    },
    load: function load(event) {
      var scenarioName = event.target.dataset.scenario;
      this.$store.getters.generator.loadScenario(scenarioName);
      this.$store.getters.generator.reset();
      this.playing = false;
    },
    isActiveScenario: function isActiveScenario(sc) {
      return this.$store.getters.generator.initMethodName === sc;
    }
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)(['getCurrentDate']))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/TimeBookingList.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/TimeBookingList.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TimeBookingList",
  computed: {
    timeBookings: function timeBookings() {
      return this.$store.getters.getTimeBookings;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Totals.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Totals.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.reduce.js */ "./node_modules/core-js/modules/es.array.reduce.js");
/* harmony import */ var core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reduce_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "ScenarioSimulator",
  props: {},
  data: function data() {
    return {};
  },
  methods: {},
  computed: _objectSpread({
    maxEarnings: function maxEarnings() {
      return this.$store.getters.getEmployees.reduce(function (carry, e) {
        return carry += e.expectedYearlyBillableHours;
      }, 0) * this.$store.getters.getDefaultHourlyRate;
    },
    projectedEarnings: function projectedEarnings() {
      return this.maxEarnings * this.$store.getters.getCompanyHealth;
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)([]))
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/vue/AgencyByValue.vue":
/*!**************************************!*\
  !*** ./assets/vue/AgencyByValue.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AgencyByValue_vue_vue_type_template_id_538968ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgencyByValue.vue?vue&type=template&id=538968ae& */ "./assets/vue/AgencyByValue.vue?vue&type=template&id=538968ae&");
/* harmony import */ var _AgencyByValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgencyByValue.vue?vue&type=script&lang=js& */ "./assets/vue/AgencyByValue.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AgencyByValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AgencyByValue_vue_vue_type_template_id_538968ae___WEBPACK_IMPORTED_MODULE_0__.render,
  _AgencyByValue_vue_vue_type_template_id_538968ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/AgencyByValue.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/AgencyHourly.vue":
/*!*************************************!*\
  !*** ./assets/vue/AgencyHourly.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AgencyHourly_vue_vue_type_template_id_11af054d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AgencyHourly.vue?vue&type=template&id=11af054d& */ "./assets/vue/AgencyHourly.vue?vue&type=template&id=11af054d&");
/* harmony import */ var _AgencyHourly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AgencyHourly.vue?vue&type=script&lang=js& */ "./assets/vue/AgencyHourly.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _AgencyHourly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _AgencyHourly_vue_vue_type_template_id_11af054d___WEBPACK_IMPORTED_MODULE_0__.render,
  _AgencyHourly_vue_vue_type_template_id_11af054d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/AgencyHourly.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/CompanyHealth.vue":
/*!**************************************!*\
  !*** ./assets/vue/CompanyHealth.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _CompanyHealth_vue_vue_type_template_id_4be68052_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CompanyHealth.vue?vue&type=template&id=4be68052&scoped=true& */ "./assets/vue/CompanyHealth.vue?vue&type=template&id=4be68052&scoped=true&");
/* harmony import */ var _CompanyHealth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CompanyHealth.vue?vue&type=script&lang=js& */ "./assets/vue/CompanyHealth.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _CompanyHealth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _CompanyHealth_vue_vue_type_template_id_4be68052_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _CompanyHealth_vue_vue_type_template_id_4be68052_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4be68052",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/CompanyHealth.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/Employee.vue":
/*!*********************************!*\
  !*** ./assets/vue/Employee.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Employee_vue_vue_type_template_id_03cf3ca5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Employee.vue?vue&type=template&id=03cf3ca5&scoped=true& */ "./assets/vue/Employee.vue?vue&type=template&id=03cf3ca5&scoped=true&");
/* harmony import */ var _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Employee.vue?vue&type=script&lang=js& */ "./assets/vue/Employee.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Employee_vue_vue_type_template_id_03cf3ca5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Employee_vue_vue_type_template_id_03cf3ca5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "03cf3ca5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/Employee.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/EmployeeUtilization.vue":
/*!********************************************!*\
  !*** ./assets/vue/EmployeeUtilization.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _EmployeeUtilization_vue_vue_type_template_id_d7875926_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EmployeeUtilization.vue?vue&type=template&id=d7875926&scoped=true& */ "./assets/vue/EmployeeUtilization.vue?vue&type=template&id=d7875926&scoped=true&");
/* harmony import */ var _EmployeeUtilization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EmployeeUtilization.vue?vue&type=script&lang=js& */ "./assets/vue/EmployeeUtilization.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _EmployeeUtilization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _EmployeeUtilization_vue_vue_type_template_id_d7875926_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _EmployeeUtilization_vue_vue_type_template_id_d7875926_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "d7875926",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/EmployeeUtilization.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/Freelance.vue":
/*!**********************************!*\
  !*** ./assets/vue/Freelance.vue ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Freelance_vue_vue_type_template_id_4e2de530___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Freelance.vue?vue&type=template&id=4e2de530& */ "./assets/vue/Freelance.vue?vue&type=template&id=4e2de530&");
/* harmony import */ var _Freelance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Freelance.vue?vue&type=script&lang=js& */ "./assets/vue/Freelance.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Freelance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Freelance_vue_vue_type_template_id_4e2de530___WEBPACK_IMPORTED_MODULE_0__.render,
  _Freelance_vue_vue_type_template_id_4e2de530___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/Freelance.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/FreelanceByValue.vue":
/*!*****************************************!*\
  !*** ./assets/vue/FreelanceByValue.vue ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _FreelanceByValue_vue_vue_type_template_id_a9daa7fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FreelanceByValue.vue?vue&type=template&id=a9daa7fc& */ "./assets/vue/FreelanceByValue.vue?vue&type=template&id=a9daa7fc&");
/* harmony import */ var _FreelanceByValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FreelanceByValue.vue?vue&type=script&lang=js& */ "./assets/vue/FreelanceByValue.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _FreelanceByValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _FreelanceByValue_vue_vue_type_template_id_a9daa7fc___WEBPACK_IMPORTED_MODULE_0__.render,
  _FreelanceByValue_vue_vue_type_template_id_a9daa7fc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/FreelanceByValue.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/Project.vue":
/*!********************************!*\
  !*** ./assets/vue/Project.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Project_vue_vue_type_template_id_16b2521c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.vue?vue&type=template&id=16b2521c& */ "./assets/vue/Project.vue?vue&type=template&id=16b2521c&");
/* harmony import */ var _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.vue?vue&type=script&lang=js& */ "./assets/vue/Project.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Project_vue_vue_type_template_id_16b2521c___WEBPACK_IMPORTED_MODULE_0__.render,
  _Project_vue_vue_type_template_id_16b2521c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/Project.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/ProjectStatus.vue":
/*!**************************************!*\
  !*** ./assets/vue/ProjectStatus.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectStatus_vue_vue_type_template_id_7141e2f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectStatus.vue?vue&type=template&id=7141e2f8&scoped=true& */ "./assets/vue/ProjectStatus.vue?vue&type=template&id=7141e2f8&scoped=true&");
/* harmony import */ var _ProjectStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectStatus.vue?vue&type=script&lang=js& */ "./assets/vue/ProjectStatus.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ProjectStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ProjectStatus_vue_vue_type_template_id_7141e2f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectStatus_vue_vue_type_template_id_7141e2f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7141e2f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/ProjectStatus.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/RatioChart.vue":
/*!***********************************!*\
  !*** ./assets/vue/RatioChart.vue ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RatioChart_vue_vue_type_template_id_eedab36c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RatioChart.vue?vue&type=template&id=eedab36c& */ "./assets/vue/RatioChart.vue?vue&type=template&id=eedab36c&");
/* harmony import */ var _RatioChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RatioChart.vue?vue&type=script&lang=js& */ "./assets/vue/RatioChart.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _RatioChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _RatioChart_vue_vue_type_template_id_eedab36c___WEBPACK_IMPORTED_MODULE_0__.render,
  _RatioChart_vue_vue_type_template_id_eedab36c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/RatioChart.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/ScenarioSimulator.vue":
/*!******************************************!*\
  !*** ./assets/vue/ScenarioSimulator.vue ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ScenarioSimulator_vue_vue_type_template_id_59842926_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ScenarioSimulator.vue?vue&type=template&id=59842926&scoped=true& */ "./assets/vue/ScenarioSimulator.vue?vue&type=template&id=59842926&scoped=true&");
/* harmony import */ var _ScenarioSimulator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ScenarioSimulator.vue?vue&type=script&lang=js& */ "./assets/vue/ScenarioSimulator.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _ScenarioSimulator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _ScenarioSimulator_vue_vue_type_template_id_59842926_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _ScenarioSimulator_vue_vue_type_template_id_59842926_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "59842926",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/ScenarioSimulator.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/TimeBookingList.vue":
/*!****************************************!*\
  !*** ./assets/vue/TimeBookingList.vue ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TimeBookingList_vue_vue_type_template_id_499075e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimeBookingList.vue?vue&type=template&id=499075e3&scoped=true& */ "./assets/vue/TimeBookingList.vue?vue&type=template&id=499075e3&scoped=true&");
/* harmony import */ var _TimeBookingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TimeBookingList.vue?vue&type=script&lang=js& */ "./assets/vue/TimeBookingList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _TimeBookingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _TimeBookingList_vue_vue_type_template_id_499075e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _TimeBookingList_vue_vue_type_template_id_499075e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "499075e3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/TimeBookingList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/Totals.vue":
/*!*******************************!*\
  !*** ./assets/vue/Totals.vue ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Totals_vue_vue_type_template_id_0d2ef234_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Totals.vue?vue&type=template&id=0d2ef234&scoped=true& */ "./assets/vue/Totals.vue?vue&type=template&id=0d2ef234&scoped=true&");
/* harmony import */ var _Totals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Totals.vue?vue&type=script&lang=js& */ "./assets/vue/Totals.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _Totals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _Totals_vue_vue_type_template_id_0d2ef234_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _Totals_vue_vue_type_template_id_0d2ef234_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "0d2ef234",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "assets/vue/Totals.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./assets/vue/AgencyByValue.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./assets/vue/AgencyByValue.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgencyByValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgencyByValue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/AgencyByValue.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgencyByValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/vue/AgencyHourly.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./assets/vue/AgencyHourly.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgencyHourly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgencyHourly.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/AgencyHourly.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AgencyHourly_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/vue/CompanyHealth.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./assets/vue/CompanyHealth.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyHealth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CompanyHealth.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/CompanyHealth.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyHealth_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/vue/Employee.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./assets/vue/Employee.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Employee.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Employee.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/vue/EmployeeUtilization.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./assets/vue/EmployeeUtilization.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeUtilization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployeeUtilization.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/EmployeeUtilization.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeUtilization_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/vue/Freelance.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./assets/vue/Freelance.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Freelance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Freelance.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Freelance.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Freelance_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/vue/FreelanceByValue.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./assets/vue/FreelanceByValue.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FreelanceByValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FreelanceByValue.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/FreelanceByValue.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FreelanceByValue_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/vue/Project.vue?vue&type=script&lang=js&":
/*!*********************************************************!*\
  !*** ./assets/vue/Project.vue?vue&type=script&lang=js& ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Project.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Project.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/vue/ProjectStatus.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./assets/vue/ProjectStatus.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectStatus.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/ProjectStatus.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectStatus_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/vue/RatioChart.vue?vue&type=script&lang=js&":
/*!************************************************************!*\
  !*** ./assets/vue/RatioChart.vue?vue&type=script&lang=js& ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RatioChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RatioChart.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/RatioChart.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RatioChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/vue/ScenarioSimulator.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./assets/vue/ScenarioSimulator.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScenarioSimulator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScenarioSimulator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/ScenarioSimulator.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ScenarioSimulator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/vue/TimeBookingList.vue?vue&type=script&lang=js&":
/*!*****************************************************************!*\
  !*** ./assets/vue/TimeBookingList.vue?vue&type=script&lang=js& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeBookingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimeBookingList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/TimeBookingList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeBookingList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/vue/Totals.vue?vue&type=script&lang=js&":
/*!********************************************************!*\
  !*** ./assets/vue/Totals.vue?vue&type=script&lang=js& ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Totals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Totals.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-1[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Totals.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_1_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Totals_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./assets/vue/AgencyByValue.vue?vue&type=template&id=538968ae&":
/*!*********************************************************************!*\
  !*** ./assets/vue/AgencyByValue.vue?vue&type=template&id=538968ae& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgencyByValue_vue_vue_type_template_id_538968ae___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgencyByValue_vue_vue_type_template_id_538968ae___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgencyByValue_vue_vue_type_template_id_538968ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgencyByValue.vue?vue&type=template&id=538968ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/AgencyByValue.vue?vue&type=template&id=538968ae&");


/***/ }),

/***/ "./assets/vue/AgencyHourly.vue?vue&type=template&id=11af054d&":
/*!********************************************************************!*\
  !*** ./assets/vue/AgencyHourly.vue?vue&type=template&id=11af054d& ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgencyHourly_vue_vue_type_template_id_11af054d___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgencyHourly_vue_vue_type_template_id_11af054d___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AgencyHourly_vue_vue_type_template_id_11af054d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AgencyHourly.vue?vue&type=template&id=11af054d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/AgencyHourly.vue?vue&type=template&id=11af054d&");


/***/ }),

/***/ "./assets/vue/CompanyHealth.vue?vue&type=template&id=4be68052&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./assets/vue/CompanyHealth.vue?vue&type=template&id=4be68052&scoped=true& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyHealth_vue_vue_type_template_id_4be68052_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyHealth_vue_vue_type_template_id_4be68052_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_CompanyHealth_vue_vue_type_template_id_4be68052_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./CompanyHealth.vue?vue&type=template&id=4be68052&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/CompanyHealth.vue?vue&type=template&id=4be68052&scoped=true&");


/***/ }),

/***/ "./assets/vue/Employee.vue?vue&type=template&id=03cf3ca5&scoped=true&":
/*!****************************************************************************!*\
  !*** ./assets/vue/Employee.vue?vue&type=template&id=03cf3ca5&scoped=true& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_03cf3ca5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_03cf3ca5_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Employee_vue_vue_type_template_id_03cf3ca5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Employee.vue?vue&type=template&id=03cf3ca5&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Employee.vue?vue&type=template&id=03cf3ca5&scoped=true&");


/***/ }),

/***/ "./assets/vue/EmployeeUtilization.vue?vue&type=template&id=d7875926&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./assets/vue/EmployeeUtilization.vue?vue&type=template&id=d7875926&scoped=true& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeUtilization_vue_vue_type_template_id_d7875926_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeUtilization_vue_vue_type_template_id_d7875926_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EmployeeUtilization_vue_vue_type_template_id_d7875926_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./EmployeeUtilization.vue?vue&type=template&id=d7875926&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/EmployeeUtilization.vue?vue&type=template&id=d7875926&scoped=true&");


/***/ }),

/***/ "./assets/vue/Freelance.vue?vue&type=template&id=4e2de530&":
/*!*****************************************************************!*\
  !*** ./assets/vue/Freelance.vue?vue&type=template&id=4e2de530& ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Freelance_vue_vue_type_template_id_4e2de530___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Freelance_vue_vue_type_template_id_4e2de530___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Freelance_vue_vue_type_template_id_4e2de530___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Freelance.vue?vue&type=template&id=4e2de530& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Freelance.vue?vue&type=template&id=4e2de530&");


/***/ }),

/***/ "./assets/vue/FreelanceByValue.vue?vue&type=template&id=a9daa7fc&":
/*!************************************************************************!*\
  !*** ./assets/vue/FreelanceByValue.vue?vue&type=template&id=a9daa7fc& ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FreelanceByValue_vue_vue_type_template_id_a9daa7fc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FreelanceByValue_vue_vue_type_template_id_a9daa7fc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FreelanceByValue_vue_vue_type_template_id_a9daa7fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./FreelanceByValue.vue?vue&type=template&id=a9daa7fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/FreelanceByValue.vue?vue&type=template&id=a9daa7fc&");


/***/ }),

/***/ "./assets/vue/Project.vue?vue&type=template&id=16b2521c&":
/*!***************************************************************!*\
  !*** ./assets/vue/Project.vue?vue&type=template&id=16b2521c& ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_16b2521c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_16b2521c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Project_vue_vue_type_template_id_16b2521c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Project.vue?vue&type=template&id=16b2521c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Project.vue?vue&type=template&id=16b2521c&");


/***/ }),

/***/ "./assets/vue/ProjectStatus.vue?vue&type=template&id=7141e2f8&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./assets/vue/ProjectStatus.vue?vue&type=template&id=7141e2f8&scoped=true& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectStatus_vue_vue_type_template_id_7141e2f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectStatus_vue_vue_type_template_id_7141e2f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectStatus_vue_vue_type_template_id_7141e2f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectStatus.vue?vue&type=template&id=7141e2f8&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/ProjectStatus.vue?vue&type=template&id=7141e2f8&scoped=true&");


/***/ }),

/***/ "./assets/vue/RatioChart.vue?vue&type=template&id=eedab36c&":
/*!******************************************************************!*\
  !*** ./assets/vue/RatioChart.vue?vue&type=template&id=eedab36c& ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RatioChart_vue_vue_type_template_id_eedab36c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RatioChart_vue_vue_type_template_id_eedab36c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RatioChart_vue_vue_type_template_id_eedab36c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./RatioChart.vue?vue&type=template&id=eedab36c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/RatioChart.vue?vue&type=template&id=eedab36c&");


/***/ }),

/***/ "./assets/vue/ScenarioSimulator.vue?vue&type=template&id=59842926&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./assets/vue/ScenarioSimulator.vue?vue&type=template&id=59842926&scoped=true& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScenarioSimulator_vue_vue_type_template_id_59842926_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScenarioSimulator_vue_vue_type_template_id_59842926_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ScenarioSimulator_vue_vue_type_template_id_59842926_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ScenarioSimulator.vue?vue&type=template&id=59842926&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/ScenarioSimulator.vue?vue&type=template&id=59842926&scoped=true&");


/***/ }),

/***/ "./assets/vue/TimeBookingList.vue?vue&type=template&id=499075e3&scoped=true&":
/*!***********************************************************************************!*\
  !*** ./assets/vue/TimeBookingList.vue?vue&type=template&id=499075e3&scoped=true& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeBookingList_vue_vue_type_template_id_499075e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeBookingList_vue_vue_type_template_id_499075e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TimeBookingList_vue_vue_type_template_id_499075e3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TimeBookingList.vue?vue&type=template&id=499075e3&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/TimeBookingList.vue?vue&type=template&id=499075e3&scoped=true&");


/***/ }),

/***/ "./assets/vue/Totals.vue?vue&type=template&id=0d2ef234&scoped=true&":
/*!**************************************************************************!*\
  !*** ./assets/vue/Totals.vue?vue&type=template&id=0d2ef234&scoped=true& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Totals_vue_vue_type_template_id_0d2ef234_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Totals_vue_vue_type_template_id_0d2ef234_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Totals_vue_vue_type_template_id_0d2ef234_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Totals.vue?vue&type=template&id=0d2ef234&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Totals.vue?vue&type=template&id=0d2ef234&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/AgencyByValue.vue?vue&type=template&id=538968ae&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/AgencyByValue.vue?vue&type=template&id=538968ae& ***!
  \************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-12" },
          [_c("scenario-simulator", { attrs: { scenarios: this.scenarios } })],
          1
        )
      ]),
      _vm._v(" "),
      _vm._m(0),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [_c("CompanyHealth")], 1),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-md-6" }, [_c("EmployeeUtilization")], 1),
        _vm._v(" "),
        _c("div", { staticClass: "col-md-6" }, [_c("ProjectStatus")], 1)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c(
          "div",
          { staticClass: "col-md-6" },
          [
            _c("h3", [_vm._v("Employees")]),
            _vm._v(" "),
            _vm._l(_vm.getEmployees, function(employee) {
              return _c(
                "div",
                [_c("Employee", { attrs: { employee: employee } })],
                1
              )
            })
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-md-6 scroll" },
          [
            _c("h3", [_vm._v("Projects")]),
            _vm._v(" "),
            _vm._l(_vm.getProjects.slice().reverse(), function(project) {
              return _c(
                "div",
                [_c("Project", { attrs: { project: project } })],
                1
              )
            })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c("Totals")
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-12" }, [
        _c("h3", { staticClass: "top" }, [_vm._v("KPIs")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/AgencyHourly.vue?vue&type=template&id=11af054d&":
/*!***********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/AgencyHourly.vue?vue&type=template&id=11af054d& ***!
  \***********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [_c("scenario-simulator")], 1)
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [_c("EmployeeUtilization")], 1)
      ]),
      _vm._v(" "),
      _vm._l(_vm.getEmployees, function(employee) {
        return _c("div", [_c("Employee", { attrs: { employee: employee } })], 1)
      }),
      _vm._v(" "),
      _c("Totals")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/CompanyHealth.vue?vue&type=template&id=4be68052&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/CompanyHealth.vue?vue&type=template&id=4be68052&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-6" }, [
      _c("span", { staticClass: "key-value" }, [
        _vm._v("Company Health: " + _vm._s(_vm.health) + "%")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "definition" }, [
        _vm._v(
          "\n      The Company Health shows how much of your production potential you are using.\n    "
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-6" },
      [
        _c("RatioChart", {
          staticClass: "ratio-chart",
          attrs: { "chart-data": _vm.chartData }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Employee.vue?vue&type=template&id=03cf3ca5&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Employee.vue?vue&type=template&id=03cf3ca5&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row employee" }, [
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "key-value" }, [
        _vm._v(
          _vm._s(_vm.employee.name) + ": " + _vm._s(_vm.bookedTimePercent) + "%"
        )
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v("Total hours booked: " + _vm._s(_vm.timeBookings) + "h")
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-6" },
      [
        _c("RatioChart", {
          staticClass: "ratio-chart",
          attrs: { "chart-data": _vm.chartData }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/EmployeeUtilization.vue?vue&type=template&id=d7875926&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/EmployeeUtilization.vue?vue&type=template&id=d7875926&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-6" }, [
      _c("span", { staticClass: "key-value" }, [
        _vm._v("Employee Utilization: " + _vm._s(_vm.utilization) + "%")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "definition" }, [
        _vm._v(
          "\n      This value shows how many of your planned billable hours are being booked.\n    "
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-6" },
      [
        _c("RatioChart", {
          staticClass: "ratio-chart",
          attrs: { "chart-data": _vm.chartData }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Freelance.vue?vue&type=template&id=4e2de530&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Freelance.vue?vue&type=template&id=4e2de530& ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-12" }, [_c("scenario-simulator")], 1)
      ]),
      _vm._v(" "),
      _vm._l(_vm.getEmployees, function(employee) {
        return _c("div", [_c("Employee", { attrs: { employee: employee } })], 1)
      }),
      _vm._v(" "),
      _c("Totals")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/FreelanceByValue.vue?vue&type=template&id=a9daa7fc&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/FreelanceByValue.vue?vue&type=template&id=a9daa7fc& ***!
  \***************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c("scenario-simulator"),
      _vm._v(" "),
      _c("CompanyHealth"),
      _vm._v(" "),
      _vm._l(_vm.getEmployees, function(employee) {
        return _c("div", [_c("Employee", { attrs: { employee: employee } })], 1)
      }),
      _vm._v(" "),
      _vm._l(_vm.getProjects.slice().reverse(), function(project) {
        return _c("div", [_c("Project", { attrs: { project: project } })], 1)
      }),
      _vm._v(" "),
      _c("Totals")
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Project.vue?vue&type=template&id=16b2521c&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Project.vue?vue&type=template&id=16b2521c& ***!
  \******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row project" }, [
    _c("div", { staticClass: "col-md-6" }, [
      _c("div", { staticClass: "key-value" }, [
        _vm._v(
          "\n      " +
            _vm._s(_vm.project.name) +
            ": " +
            _vm._s(_vm.percentComplete) +
            "%\n    "
        )
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v("\n      Project Status:\n      "),
        _vm.project.isComplete
          ? _c("span", [
              _vm._v("\n        completed "),
              _c("i", { staticClass: "u8-icon ok" })
            ])
          : _c("span", [
              _vm._v("\n        running "),
              _c("div", { staticClass: "lds-dual-ring" })
            ])
      ]),
      _vm._v(" "),
      _c("div", [
        _vm._v(
          "\n      Budget remaining: " +
            _vm._s(_vm.remainingBudget) +
            "h / " +
            _vm._s(_vm.project.getHoursBudget()) +
            "h\n    "
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-6" },
      [
        _c("RatioChart", {
          staticClass: "ratio-chart",
          attrs: { "chart-data": _vm.chartData, "linear-data": _vm.hoursBooked }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/ProjectStatus.vue?vue&type=template&id=7141e2f8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/ProjectStatus.vue?vue&type=template&id=7141e2f8&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row" }, [
    _c("div", { staticClass: "col-md-6" }, [
      _c("span", { staticClass: "key-value" }, [
        _vm._v("Project Status: " + _vm._s(_vm.health) + "%")
      ]),
      _vm._v(" "),
      _c("p", { staticClass: "definition" }, [
        _vm._v(
          "\n      This value shows how efficiently the hours invested in your projects are being used.\n    "
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "col-md-6" },
      [
        _c("RatioChart", {
          staticClass: "ratio-chart",
          attrs: { "chart-data": _vm.chartData }
        })
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/RatioChart.vue?vue&type=template&id=eedab36c&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/RatioChart.vue?vue&type=template&id=eedab36c& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("div", { ref: "container" })])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/ScenarioSimulator.vue?vue&type=template&id=59842926&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/ScenarioSimulator.vue?vue&type=template&id=59842926&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "simulation-controls" }, [
    _c("div", { staticClass: "row" }, [
      _c("div", { class: [this.showScenarios ? "col-2" : "col-6"] }, [
        !_vm.playing
          ? _c(
              "a",
              {
                class: { "play-waiting": !_vm.played },
                attrs: { href: "javascript:void(0)" },
                on: { click: _vm.play }
              },
              [_vm._v("▶️")]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm.playing
          ? _c(
              "a",
              {
                attrs: { href: "javascript:void(0)" },
                on: { click: _vm.pause }
              },
              [_vm._v("⏸")]
            )
          : _vm._e(),
        _vm._v(" "),
        _c(
          "a",
          { attrs: { href: "javascript:void(0)" }, on: { click: _vm.reset } },
          [_vm._v("🔁️️")]
        ),
        _vm._v(" "),
        this.$props.enableStep
          ? _c(
              "a",
              {
                attrs: { href: "javascript:void(0)" },
                on: { click: _vm.tick }
              },
              [_vm._v("Step")]
            )
          : _vm._e()
      ]),
      _vm._v(" "),
      this.showScenarios
        ? _c(
            "div",
            { staticClass: "col-7" },
            _vm._l(this.$props.scenarios, function(scenario) {
              return _c(
                "button",
                {
                  class: [
                    _vm.isActiveScenario(scenario.method) ? "active" : ""
                  ],
                  attrs: { "data-scenario": scenario.method },
                  on: { click: _vm.load }
                },
                [_vm._v("\n        " + _vm._s(scenario.name) + "\n      ")]
              )
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { class: [this.showScenarios ? "col-3" : "col-6", "text-right"] },
        [_c("span", [_vm._v(_vm._s(_vm.getCurrentDate.toLocaleDateString()))])]
      )
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "row label-row" }, [
      _c("div", { class: [this.showScenarios ? "col-2" : "col-6"] }, [
        _vm._v("\n      Controls\n    ")
      ]),
      _vm._v(" "),
      this.$props.scenarios.length > 0
        ? _c("div", { staticClass: "col-7" }, [
            _vm._v("\n      Scenarios\n    ")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { class: [this.showScenarios ? "col-2" : "col-6", "text-right"] },
        [_vm._v("\n      Simulation date\n    ")]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/TimeBookingList.vue?vue&type=template&id=499075e3&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/TimeBookingList.vue?vue&type=template&id=499075e3&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    _vm._l(_vm.timeBookings.slice().reverse(), function(booking) {
      return _c("div", [
        _c("div", [
          _vm._v(
            "\n      " +
              _vm._s(booking.employee.name) +
              " booked " +
              _vm._s(booking.timebooked) +
              "h to " +
              _vm._s(booking.project.name) +
              "\n    "
          )
        ])
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Totals.vue?vue&type=template&id=0d2ef234&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./assets/vue/Totals.vue?vue&type=template&id=0d2ef234&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "totals" }, [
    _vm._v(
      "\n  Target earnings " +
        _vm._s(_vm._f("currency")(_vm.maxEarnings)) +
        ", projected earnings: " +
        _vm._s(_vm._f("currency")(_vm.projectedEarnings)) +
        " (for the year 2021)\n"
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},
0,[["./assets/app.js","runtime","vendors-node_modules_core-js_modules_es_array_filter_js-node_modules_core-js_modules_es_array-a3cabe"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9HZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL0hlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTW9kZWwvRW1wbG95ZWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL01vZGVsL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL01vZGVsL1RpbWVCb29raW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9zdG9yZS5qcyIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9BZ2VuY3lCeVZhbHVlLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9BZ2VuY3lIb3VybHkudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL0NvbXBhbnlIZWFsdGgudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL0VtcGxveWVlLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9FbXBsb3llZVV0aWxpemF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9GcmVlbGFuY2UudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL0ZyZWVsYW5jZUJ5VmFsdWUudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL1Byb2plY3QudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL1Byb2plY3RTdGF0dXMudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL1JhdGlvQ2hhcnQudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL1NjZW5hcmlvU2ltdWxhdG9yLnZ1ZSIsIndlYnBhY2s6Ly8vYXNzZXRzL3Z1ZS9UaW1lQm9va2luZ0xpc3QudnVlIiwid2VicGFjazovLy9hc3NldHMvdnVlL1RvdGFscy52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL0FnZW5jeUJ5VmFsdWUudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvQWdlbmN5SG91cmx5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL0NvbXBhbnlIZWFsdGgudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvRW1wbG95ZWUudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvRW1wbG95ZWVVdGlsaXphdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9GcmVlbGFuY2UudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvRnJlZWxhbmNlQnlWYWx1ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9Qcm9qZWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL1Byb2plY3RTdGF0dXMudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvUmF0aW9DaGFydC52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9TY2VuYXJpb1NpbXVsYXRvci52dWUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9UaW1lQm9va2luZ0xpc3QudnVlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvVG90YWxzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL0FnZW5jeUJ5VmFsdWUudnVlP2FiZGEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9BZ2VuY3lIb3VybHkudnVlPzI1ODYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9Db21wYW55SGVhbHRoLnZ1ZT9hNDU2Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvRW1wbG95ZWUudnVlPzQ3ODciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9FbXBsb3llZVV0aWxpemF0aW9uLnZ1ZT8yNGQ3Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvRnJlZWxhbmNlLnZ1ZT80OTM0Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvRnJlZWxhbmNlQnlWYWx1ZS52dWU/NmYzMyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL1Byb2plY3QudnVlP2U1YmMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9Qcm9qZWN0U3RhdHVzLnZ1ZT82ODBlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvUmF0aW9DaGFydC52dWU/NjliMCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL1NjZW5hcmlvU2ltdWxhdG9yLnZ1ZT8zNjk5Iiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvVGltZUJvb2tpbmdMaXN0LnZ1ZT81N2VlIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvVG90YWxzLnZ1ZT8xYzFhIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvQWdlbmN5QnlWYWx1ZS52dWU/MmVlNCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL0FnZW5jeUhvdXJseS52dWU/NWE5OSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL0NvbXBhbnlIZWFsdGgudnVlP2JkMjciLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9FbXBsb3llZS52dWU/YmI3ZiIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL0VtcGxveWVlVXRpbGl6YXRpb24udnVlPzg4ZjEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9GcmVlbGFuY2UudnVlP2RlZGIiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9GcmVlbGFuY2VCeVZhbHVlLnZ1ZT84ZTRjIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvUHJvamVjdC52dWU/Njg3YSIsIndlYnBhY2s6Ly8vLi9hc3NldHMvdnVlL1Byb2plY3RTdGF0dXMudnVlPzczMTAiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9SYXRpb0NoYXJ0LnZ1ZT8wYjYzIiwid2VicGFjazovLy8uL2Fzc2V0cy92dWUvU2NlbmFyaW9TaW11bGF0b3IudnVlPzU1N2YiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9UaW1lQm9va2luZ0xpc3QudnVlPzk2NTUiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3Z1ZS9Ub3RhbHMudnVlPzBjNDEiXSwibmFtZXMiOlsiVnVlIiwibnVtIiwiaXNOYU4iLCJJbnRsIiwiTnVtYmVyRm9ybWF0IiwiZm9ybWF0IiwiTWF0aCIsInJvdW5kIiwiZ2VuZXJhdGVBcHAiLCJpZCIsImdlbmVyYXRvck1ldGhvZCIsInN0b3JlIiwiY3JlYXRlTmV3U3RvcmUiLCJnZW4iLCJHZW5lcmF0b3IiLCJ2IiwiZWwiLCJjb21wb25lbnRzIiwiYWdlbmN5Ynl2YWx1ZSIsIkFnZW5jeUJ5VmFsdWUiLCJGcmVlbGFuY2UiLCJmcmVlbGFuY2VieXZhbHVlIiwiRnJlZWxhbmNlQnlWYWx1ZSIsImFnZW5jeWhvdXJseSIsIkFnZW5jeUhvdXJseSIsImluaXRNZXRob2ROYW1lIiwiYWRkUmFuZG9tVGltZUJvb2tpbmciLCJkZWZhdWx0Q3JlYXRlTmV3UHJvamVjdENhbGxiYWNrIiwiY29tbWl0IiwibG9hZFNjZW5hcmlvIiwicHJvamVjdE1vZGlmaWVyIiwiZW1wbG95ZWVNb2RpZmllciIsImVtcGxveWVlcyIsInByb2plY3RzIiwiZW1wbG95ZWVOYW1lcyIsImZvckVhY2giLCJuYW1lIiwicHVzaCIsIkVtcGxveWVlIiwicHJvamVjdE5hbWVzIiwiayIsIlByb2plY3QiLCJwcm9qZWN0QnVkZ2V0cyIsImdldHRlcnMiLCJnZXRJbml0aWFsRGF0ZSIsImVtcGxveWVlIiwicHJvamVjdCIsImdlbmVyYXRlVGVzdGluZ0RhdGEiLCJjcmVhdGVQcm9qZWN0Q2FsbGJhY2siLCJzbGljZSIsImFkZE5leHRGcmVlbGFuY2VCeVZhbHVlUHJvamVjdCIsInByb2R1Y3Rpdml0eSIsImluY29tcGxldGVQcm9qZWN0cyIsImZpbHRlciIsImlzQ29tcGxldGUiLCJjb21wbGV0ZWRQcm9qZWN0cyIsImxlbmd0aCIsInBhdXNlIiwicCIsImNoYW5jZVRvQ29tcGxldGVPblRpbWUiLCJlbXAiLCJnZXRFbXBsb3llZXMiLCJwcm8iLCJnZXRQcm9qZWN0cyIsImRhdGUiLCJnZXRDdXJyZW50RGF0ZSIsImdldEZ1bGxZZWFyIiwid29ya3NPbkRheSIsImZsb29yIiwicmFuZG9tIiwiaG91cnMiLCJkaXNwYXRjaCIsIl9fb2JfXyIsImRlcCIsIm5vdGlmeSIsIkRhdGUiLCJnZXRUaW1lIiwiYWRkaXRpb25hbFByb2plY3ROYW1lcyIsInBsYXlJbnRlcnZhbFJlZmVyZW5jZSIsInNldEludGVydmFsIiwidGlja0NhbGxiYWNrIiwiYmluZCIsImNsZWFySW50ZXJ2YWwiLCJyZXBsYWNlU3RhdGUiLCJnZXREZWZhdWx0U3RhdGUiLCJzaG9ydGVuVG9IaXN0b3J5TGVuZ3RoIiwic3RhdGUiLCJhcnIiLCJoaXN0b3J5TGVuZ3RoIiwidW5kZWZpbmVkIiwibWF4IiwiYXBwZW5kV2l0aE1heExlbmd0aCIsIml0ZW0iLCJhcnJheSIsInJlbW92ZWRWYWx1ZSIsInNoaWZ0Iiwib2JqZWN0SWQiLCJpbmRleE9mIiwiZ2V0RGF5IiwidGltZWJvb2tpbmciLCJ0aW1lYm9va2VkIiwicHJldmlvdXNCb29raW5ncyIsInRvdGFsVGltZUJvb2tlZCIsImhvdXJCdWRnZXQiLCJob3Vyc1JlbWFpbmluZyIsImhvdXJzU3BlbnQiLCJhbGxUaW1lVGltZUJvb2tlZCIsImNoYW5jZVRvQ29tcGxldGUiLCJnZXRIb3Vyc0J1ZGdldCIsImJvb2tpbmdzU3VtIiwiY3VycmVudEhvdXJzUmVtYWluaW5nIiwiZ2V0SG91cnNSZW1haW5pbmciLCJUaW1lQm9va2luZyIsIkVycm9yIiwiYWRkVGltZUJvb2tpbmciLCJWdWV4IiwidGltZUJvb2tpbmdzIiwiY3VycmVudERhdGUiLCJpbml0aWFsRGF0ZSIsImVtcGxveWVlVXRpbGl6YXRpb25IaXN0b3J5IiwicHJvamVjdFN0YXR1c0hpc3RvcnkiLCJjb21wYW55SGVhbHRoSGlzdG9yeSIsImRhdGVIaXN0b3J5IiwiZW1wbG95ZWVIaXN0b3J5IiwicHJvamVjdEhpc3RvcnkiLCJlbXBsb3llZVdvcmtsb2dzQ2FjaGUiLCJvYmplY3RJbmNyZW1lbnRJZCIsImdlbmVyYXRvciIsImRlZmF1bHRIb3VybHlSYXRlIiwiYWN0aW9ucyIsInVwZGF0ZUhpc3RvZ3JhbXMiLCJrZXkiLCJ2YWx1ZSIsImdldEVtcGxveWVlVXRpbGl6YXRpb24iLCJnZXRQcm9qZWN0U3RhdHVzIiwiZ2V0Q29tcGFueUhlYWx0aCIsImdldFByb2plY3RIaXN0b3J5S2V5IiwiZ2V0UHJvamVjdFJhdGlvIiwiZ2V0VG90YWxIb3Vyc0Jvb2tlZEhpc3RvcnlLZXkiLCJpc1JhdGlvIiwiZSIsImdldEVtcGxveWVlSGlzdG9yeUtleSIsImdldFV0aWxpemF0aW9uUmF0aW9Gb3JFbXBsb3llZSIsIm11dGF0aW9ucyIsImFkZEVtcGxveWVlIiwiYWRkUHJvamVjdCIsImNoZWNrQ29tcGxldGUiLCJyZXNldFRpbWVCb29raW5ncyIsInNldEN1cnJlbnREYXRlIiwiYWRkSGlzdG9yeVZhbHVlIiwiaGlzdG9yeVZhbHVlIiwibGlua0dlbmVyYXRvciIsImdldFRpbWVCb29raW5ncyIsImdldFRpbWVCb29raW5nc0ZvclByb2plY3QiLCJnZXRIaXN0b3J5TGVuZ3RoIiwiaXNEYXJrTW9kZSIsIndpbmRvdyIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiZ2V0RGVmYXVsdEhvdXJseVJhdGUiLCJnZXRZZWFyRnJhY3Rpb24iLCJ5ZWFySW5TZWNvbmRzIiwiZWFybGllc3REYXRlSW5IaXN0b3J5IiwiZ2V0RGF0ZUhpc3RvcnkiLCJnZXRUaW1lQm9va2luZ3NGb3JFbXBsb3llZSIsImV4cGVjdGVkWWVhcmx5QmlsbGFibGVIb3VycyIsImdldFRpbWVCb29raW5nc1N1bSIsInJlZHVjZSIsImNhcnJ5IiwiZ2V0QWxsVGltZVRpbWVCb29raW5nc1N1bSIsImdldEV4cGVjdGVkQmlsbGFibGVIb3Vyc1N1bSIsImdldFByb2plY3RIb3VyQnVkZ2V0U3VtIiwiZ2V0UHJvamVjdEhvdXJzUmVtYWluaW5nU3VtIiwiZ2V0RGF0YVNldEZvckVtcGxveWVlVXRpbGl6YXRpb25IaXN0b3J5IiwiZ2V0RGF0YVNldEZvclByb2plY3RTdGF0dXNIaXN0b3J5IiwiZ2V0Q29tcGFueUhlYWx0aEhpc3RvcnkiLCJnZXRQcm9qZWN0U3RhdHVzSGlzdG9yeUZvclByb2plY3QiLCJoaXN0b3J5IiwiZ2V0UHJvamVjdFRvdGFsSG91cnNIaXN0b3J5Rm9yUHJvamVjdCIsImdldFV0aWxpemF0aW9uSGlzdG9yeUZvckVtcGxveWVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSwrQ0FBQSxDQUFXLFVBQVgsRUFBdUIsVUFBU0MsR0FBVCxFQUFhO0FBQ2hDLE1BQUlDLEtBQUssQ0FBQ0QsR0FBRCxDQUFULEVBQWdCO0FBQ1osV0FBTyxHQUFQO0FBQ0g7O0FBQ0QsU0FBTyxTQUFTLElBQUlFLElBQUksQ0FBQ0MsWUFBVCxHQUF3QkMsTUFBeEIsQ0FBK0JDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixHQUFYLENBQS9CLENBQWhCO0FBQ0gsQ0FMRDs7QUFPQSxTQUFTTyxXQUFULENBQXFCQyxFQUFyQixFQUF5QkMsZUFBekIsRUFBMEM7QUFDdEMsTUFBSUMsS0FBSyxHQUFHQyxrREFBYyxFQUExQjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxJQUFJQyxrREFBSixDQUFjSCxLQUFkLEVBQXFCRCxlQUFyQixDQUFWO0FBRUEsTUFBSUssQ0FBQyxHQUFHLElBQUlmLHdDQUFKLENBQVE7QUFDWmdCLE1BQUUsRUFBRVAsRUFEUTtBQUVaRSxTQUFLLEVBQUxBLEtBRlk7QUFHWk0sY0FBVSxFQUFFO0FBQ1JDLG1CQUFhLEVBQUVDLHVEQURQO0FBRVJDLGVBQVMsRUFBVEEsbURBRlE7QUFHUkMsc0JBQWdCLEVBQUVDLDBEQUhWO0FBSVJDLGtCQUFZLEVBQUVDLHNEQUFZQTtBQUpsQjtBQUhBLEdBQVIsQ0FBUjtBQVVILEMsQ0FFRDs7O0FBQ0FoQixXQUFXLENBQUMsZ0JBQUQsRUFBbUIsMkJBQW5CLENBQVg7QUFDQUEsV0FBVyxDQUFDLGdCQUFELEVBQW1CLDhCQUFuQixDQUFYO0FBQ0FBLFdBQVcsQ0FBQyxxQkFBRCxFQUF3QixrQ0FBeEIs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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG5pbXBvcnQgY3JlYXRlTmV3U3RvcmUgZnJvbSAnLi9qcy9zdG9yZSc7XG5pbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgQWdlbmN5QnlWYWx1ZSBmcm9tICcuL3Z1ZS9BZ2VuY3lCeVZhbHVlJztcbmltcG9ydCBGcmVlbGFuY2UgZnJvbSAnLi92dWUvRnJlZWxhbmNlJztcbmltcG9ydCBGcmVlbGFuY2VCeVZhbHVlIGZyb20gJy4vdnVlL0ZyZWVsYW5jZUJ5VmFsdWUnO1xuaW1wb3J0IEFnZW5jeUhvdXJseSBmcm9tICcuL3Z1ZS9BZ2VuY3lIb3VybHknO1xuaW1wb3J0IEdlbmVyYXRvciBmcm9tIFwiLi9qcy9HZW5lcmF0b3JcIjtcblxuVnVlLmZpbHRlcignY3VycmVuY3knLCBmdW5jdGlvbihudW0pe1xuICAgIGlmIChpc05hTihudW0pKSB7XG4gICAgICAgIHJldHVybiAnPyc7XG4gICAgfVxuICAgIHJldHVybiAnQ0hGICcgKyBuZXcgSW50bC5OdW1iZXJGb3JtYXQoKS5mb3JtYXQoTWF0aC5yb3VuZChudW0pKTtcbn0pO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUFwcChpZCwgZ2VuZXJhdG9yTWV0aG9kKSB7XG4gICAgbGV0IHN0b3JlID0gY3JlYXRlTmV3U3RvcmUoKTtcbiAgICBsZXQgZ2VuID0gbmV3IEdlbmVyYXRvcihzdG9yZSwgZ2VuZXJhdG9yTWV0aG9kKTtcblxuICAgIGxldCB2ID0gbmV3IFZ1ZSh7XG4gICAgICAgIGVsOiBpZCxcbiAgICAgICAgc3RvcmUsXG4gICAgICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIGFnZW5jeWJ5dmFsdWU6IEFnZW5jeUJ5VmFsdWUsXG4gICAgICAgICAgICBGcmVlbGFuY2UsXG4gICAgICAgICAgICBmcmVlbGFuY2VieXZhbHVlOiBGcmVlbGFuY2VCeVZhbHVlLFxuICAgICAgICAgICAgYWdlbmN5aG91cmx5OiBBZ2VuY3lIb3VybHlcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vL2dlbmVyYXRlQXBwKCcjYXBwJywgJ2dlbmVyYXRlVGVzdGluZ0RhdGEnKTtcbmdlbmVyYXRlQXBwKCcjZnJlZWxhbmNlLWFwcCcsICdnZW5lcmF0ZUZyZWVsYW5jZVNjZW5hcmlvJyk7XG5nZW5lcmF0ZUFwcCgnI2FnZW5jeS1ob3VybHknLCAnZ2VuZXJhdGVBZ2VuY3lIb3VybHlTY2VuYXJpbycpO1xuZ2VuZXJhdGVBcHAoJyNmcmVlbGFuY2UtYnktdmFsdWUnLCAnZ2VuZXJhdGVGcmVlbGFuY2VCeVZhbHVlU2NlbmFyaW8nKTtcbmdlbmVyYXRlQXBwKCcjYWdlbmN5LWJ5LXZhbHVlJywgJ2dlbmVyYXRlQWdlbmN5QnlWYWx1ZUxvd1BtJyk7XG5cblxuLypcbmxldCBzdG9yZTIgPSBjcmVhdGVOZXdTdG9yZSgpO1xudmFyIGdlbjIgPSBuZXcgR2VuZXJhdG9yKHN0b3JlMik7XG5nZW4yLmdlbmVyYXRlVGVzdGluZ0RhdGEoKTtcblxudmFyIHYyID0gbmV3IFZ1ZSh7XG4gICAgZWw6ICcjYXBwMicsXG4gICAgc3RvcmU6IHN0b3JlMixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIEhvbWVcbiAgICB9XG59KTtcbiovIiwiaW1wb3J0IEVtcGxveWVlIGZyb20gXCIuL01vZGVsL0VtcGxveWVlXCI7XG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Nb2RlbC9Qcm9qZWN0XCI7XG5pbXBvcnQge2dldERlZmF1bHRTdGF0ZX0gZnJvbSBcIi4vc3RvcmVcIjtcblxuY2xhc3MgR2VuZXJhdG9yIHtcbiAgICBlbXBsb3llZU5hbWVzID0gWydHaWxpZ2FuJywgJ1JvYicsICdIZW5yaWsnLCAnVmlyZ2luaWEnLCAnUm9iZXJ0J107XG4gICAgcHJvamVjdE5hbWVzID0gWydlQ29tbWVyY2UgU3RvcmUnLCAnTWFya2V0aW5nIExhbmRpbmdwYWdlJywgJ0J1c2luZXNzIEFwcCddXG4gICAgYWRkaXRpb25hbFByb2plY3ROYW1lcyA9IFsnUG9TIEFwcCcsICdBSSBBcnQgUHJvamVjdCcsICdDb25zdWx0aW5nJywgJ091dHNvdXJjaW5nIENsaWVudCcsICdNYXJrZXRpbmcgQXV0b21hdGlvbiddXG4gICAgcHJvamVjdEJ1ZGdldHMgPSBbNTAsIDEwMCwgMjAwXTtcbiAgICBwbGF5SW50ZXJ2YWxSZWZlcmVuY2UgPSBudWxsO1xuICAgIHRpY2tDYWxsYmFjayA9IHRoaXMuYWRkUmFuZG9tVGltZUJvb2tpbmc7XG4gICAgY3JlYXRlUHJvamVjdENhbGxiYWNrID0gdGhpcy5kZWZhdWx0Q3JlYXRlTmV3UHJvamVjdENhbGxiYWNrO1xuICAgIHN0b3JlID0gbnVsbDtcbiAgICBpbml0TWV0aG9kTmFtZSA9ICdnZW5lcmF0ZVRlc3RpbmdEYXRhJztcbiAgICBjb25zdHJ1Y3RvcihzdG9yZSwgaW5pdE1ldGhvZE5hbWUpIHtcbiAgICAgICAgdGhpcy5zdG9yZSA9IHN0b3JlO1xuICAgICAgICB0aGlzLnN0b3JlLmNvbW1pdCgnbGlua0dlbmVyYXRvcicsIHRoaXMpXG5cbiAgICAgICAgaWYgKGluaXRNZXRob2ROYW1lKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRTY2VuYXJpbyhpbml0TWV0aG9kTmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbG9hZFNjZW5hcmlvKGluaXRNZXRob2ROYW1lKSB7XG4gICAgICAgIHRoaXMuaW5pdE1ldGhvZE5hbWUgPSBpbml0TWV0aG9kTmFtZTtcbiAgICAgICAgdGhpc1tpbml0TWV0aG9kTmFtZV0oKTtcbiAgICB9XG4gICAgZ2VuZXJhdGVUZXN0aW5nRGF0YShwcm9qZWN0TW9kaWZpZXIsIGVtcGxveWVlTW9kaWZpZXIpIHtcbiAgICAgICAgdmFyIGVtcGxveWVlcyA9IFtdO1xuICAgICAgICB2YXIgcHJvamVjdHMgPSBbXTtcbiAgICAgICAgZW1wbG95ZWVNb2RpZmllciA9IGVtcGxveWVlTW9kaWZpZXIgfHwgMTtcbiAgICAgICAgcHJvamVjdE1vZGlmaWVyID0gcHJvamVjdE1vZGlmaWVyIHx8IDAuODtcbiAgICAgICAgdGhpcy5lbXBsb3llZU5hbWVzLmZvckVhY2goKG5hbWUpID0+IGVtcGxveWVlcy5wdXNoKG5ldyBFbXBsb3llZShuYW1lLCBlbXBsb3llZU1vZGlmaWVyKSkpO1xuICAgICAgICB0aGlzLnByb2plY3ROYW1lcy5mb3JFYWNoKChuYW1lLCBrKSA9PiBwcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KG5hbWUsIHRoaXMucHJvamVjdEJ1ZGdldHNba10sIHByb2plY3RNb2RpZmllcikpKTtcblxuICAgICAgICB0aGlzLnN0b3JlLmNvbW1pdCgnc2V0Q3VycmVudERhdGUnLCB0aGlzLnN0b3JlLmdldHRlcnMuZ2V0SW5pdGlhbERhdGUpO1xuXG4gICAgICAgIGVtcGxveWVlcy5mb3JFYWNoKChlbXBsb3llZSkgPT4gdGhpcy5zdG9yZS5jb21taXQoJ2FkZEVtcGxveWVlJywgZW1wbG95ZWUpKTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4gdGhpcy5zdG9yZS5jb21taXQoJ2FkZFByb2plY3QnLCBwcm9qZWN0KSk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVBZ2VuY3lCeVZhbHVlTG93UG0oKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVUZXN0aW5nRGF0YSgwLjcpXG4gICAgfVxuXG4gICAgZ2VuZXJhdGVBZ2VuY3lCeVZhbHVlTG93VXRpbGlzYXRpb24oKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVUZXN0aW5nRGF0YSgxLjEsIDAuOCk7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVBZ2VuY3lCeVZhbHVlQmFsYW5jZWQoKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGVUZXN0aW5nRGF0YSgxLjEsIDEpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQWdlbmN5SG91cmx5U2NlbmFyaW8oKSB7XG4gICAgICAgIHRoaXMuc3RvcmUuY29tbWl0KCdzZXRDdXJyZW50RGF0ZScsIHRoaXMuc3RvcmUuZ2V0dGVycy5nZXRJbml0aWFsRGF0ZSk7XG4gICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdENhbGxiYWNrID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IGVtcGxveWVlcyA9IFtdO1xuXG4gICAgICAgIHRoaXMuZW1wbG95ZWVOYW1lcy5zbGljZSgwLDMpLmZvckVhY2goKG5hbWUsIGspID0+IGVtcGxveWVlcy5wdXNoKG5ldyBFbXBsb3llZShuYW1lLCAxIC0gayowLjEpKSk7XG4gICAgICAgIGVtcGxveWVlcy5mb3JFYWNoKChlbXBsb3llZSkgPT4gdGhpcy5zdG9yZS5jb21taXQoJ2FkZEVtcGxveWVlJywgZW1wbG95ZWUpKTtcblxuICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KCdDb25zdWx0aW5nJywgZmFsc2UpO1xuICAgICAgICB0aGlzLnN0b3JlLmNvbW1pdCgnYWRkUHJvamVjdCcsIHByb2plY3QpO1xuICAgIH1cblxuICAgIGdlbmVyYXRlRnJlZWxhbmNlU2NlbmFyaW8oKSB7XG4gICAgICAgIHRoaXMuc3RvcmUuY29tbWl0KCdzZXRDdXJyZW50RGF0ZScsIHRoaXMuc3RvcmUuZ2V0dGVycy5nZXRJbml0aWFsRGF0ZSk7XG4gICAgICAgIHRoaXMuY3JlYXRlUHJvamVjdENhbGxiYWNrID0gZmFsc2U7XG5cbiAgICAgICAgbGV0IHByb2plY3QgPSBuZXcgUHJvamVjdCgnQ29uc3VsdGluZycsIGZhbHNlKTtcbiAgICAgICAgbGV0IGVtcGxveWVlID0gbmV3IEVtcGxveWVlKCdGcmVlbGFuY2VyJyk7XG4gICAgICAgIHRoaXMuc3RvcmUuY29tbWl0KCdhZGRFbXBsb3llZScsIGVtcGxveWVlKTtcbiAgICAgICAgdGhpcy5zdG9yZS5jb21taXQoJ2FkZFByb2plY3QnLCBwcm9qZWN0KTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUZyZWVsYW5jZUJ5VmFsdWVTY2VuYXJpbygpIHtcbiAgICAgICAgdGhpcy5zdG9yZS5jb21taXQoJ3NldEN1cnJlbnREYXRlJywgdGhpcy5zdG9yZS5nZXR0ZXJzLmdldEluaXRpYWxEYXRlKTtcbiAgICAgICAgdGhpcy5jcmVhdGVQcm9qZWN0Q2FsbGJhY2sgPSB0aGlzLmFkZE5leHRGcmVlbGFuY2VCeVZhbHVlUHJvamVjdDtcblxuICAgICAgICBsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRoaXMucHJvamVjdE5hbWVzWzBdLCB0aGlzLnByb2plY3RCdWRnZXRzWzBdKTtcbiAgICAgICAgbGV0IGVtcGxveWVlID0gbmV3IEVtcGxveWVlKCdGcmVlbGFuY2VyJyk7XG4gICAgICAgIGVtcGxveWVlLnByb2R1Y3Rpdml0eSA9IDEuMTtcbiAgICAgICAgdGhpcy5zdG9yZS5jb21taXQoJ2FkZEVtcGxveWVlJywgZW1wbG95ZWUpO1xuICAgICAgICB0aGlzLnN0b3JlLmNvbW1pdCgnYWRkUHJvamVjdCcsIHByb2plY3QpO1xuICAgIH1cblxuICAgIGFkZE5leHRGcmVlbGFuY2VCeVZhbHVlUHJvamVjdChwcm9qZWN0cywgZW1wbG95ZWVzKSB7XG4gICAgICAgIGxldCBpbmNvbXBsZXRlUHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKGVsKSA9PiAhZWwuaXNDb21wbGV0ZSk7XG4gICAgICAgIGxldCBjb21wbGV0ZWRQcm9qZWN0cyA9IHByb2plY3RzLmxlbmd0aCAtIGluY29tcGxldGVQcm9qZWN0cy5sZW5ndGg7XG4gICAgICAgIGlmIChjb21wbGV0ZWRQcm9qZWN0cyA9PT0gMykge1xuICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmNvbXBsZXRlUHJvamVjdHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwID0gbmV3IFByb2plY3QoXG4gICAgICAgICAgICB0aGlzLnByb2plY3ROYW1lc1twcm9qZWN0cy5sZW5ndGhdLFxuICAgICAgICAgICAgdGhpcy5wcm9qZWN0QnVkZ2V0c1twcm9qZWN0cy5sZW5ndGhdXG4gICAgICAgICk7XG4gICAgICAgIHAuY2hhbmNlVG9Db21wbGV0ZU9uVGltZSA9IHByb2plY3RzLmxlbmd0aCA9PT0gMSA/IDEgOiAwLjc7XG4gICAgICAgIHRoaXMuc3RvcmUuY29tbWl0KCdhZGRQcm9qZWN0JywgcCk7XG4gICAgfVxuXG4gICAgYWRkUmFuZG9tVGltZUJvb2tpbmcgKCkge1xuICAgICAgICBsZXQgZW1wID0gdGhpcy5zdG9yZS5nZXR0ZXJzLmdldEVtcGxveWVlcztcbiAgICAgICAgbGV0IHBybyA9IHRoaXMuc3RvcmUuZ2V0dGVycy5nZXRQcm9qZWN0cztcbiAgICAgICAgbGV0IGRhdGUgPSB0aGlzLnN0b3JlLmdldHRlcnMuZ2V0Q3VycmVudERhdGU7XG4gICAgICAgIGxldCBpbmNvbXBsZXRlUHJvamVjdHMgPSBwcm8uZmlsdGVyKChlbCkgPT4gIWVsLmlzQ29tcGxldGUpO1xuXG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPiAyMDIxKSB7XG4gICAgICAgICAgICAvLyBSdW4gdGhlIHNpbXVsYXRpb24gZm9yIG9uZSB5ZWFyXG4gICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHRoaXMuY3JlYXRlUHJvamVjdENhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVByb2plY3RDYWxsYmFjayhwcm8sIGVtcCk7XG4gICAgICAgIH1cblxuICAgICAgICBlbXAuZm9yRWFjaCgoZW1wbG95ZWUpID0+IHtcbiAgICAgICAgICAgIGlmICghZW1wbG95ZWUud29ya3NPbkRheSgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluY29tcGxldGVQcm9qZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcHJvamVjdCA9IGluY29tcGxldGVQcm9qZWN0c1tNYXRoLmZsb29yKGluY29tcGxldGVQcm9qZWN0cy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07XG4gICAgICAgICAgICBsZXQgaG91cnMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiA1ICogMTAgKiBlbXBsb3llZS5wcm9kdWN0aXZpdHkpIC8gMTA7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmRpc3BhdGNoKCdhZGRUaW1lQm9va2luZycsIHtwcm9qZWN0LCBlbXBsb3llZSwgaG91cnMsIGRhdGV9KTtcblxuICAgICAgICAgICAgZW1wbG95ZWUuX19vYl9fLmRlcC5ub3RpZnkoKTtcbiAgICAgICAgICAgIHByb2plY3QuX19vYl9fLmRlcC5ub3RpZnkoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgODY0MDAgKiAxMDAwKTtcbiAgICAgICAgdGhpcy5zdG9yZS5jb21taXQoJ3NldEN1cnJlbnREYXRlJywgZGF0ZSk7XG4gICAgICAgIHRoaXMuc3RvcmUuZGlzcGF0Y2goJ3VwZGF0ZUhpc3RvZ3JhbXMnKTtcbiAgICB9XG5cbiAgICBkZWZhdWx0Q3JlYXRlTmV3UHJvamVjdENhbGxiYWNrKHByb2plY3RzLCBlbXBsb3llZXMpIHtcbiAgICAgICAgbGV0IGluY29tcGxldGVQcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigoZWwpID0+ICFlbC5pc0NvbXBsZXRlKTtcbiAgICAgICAgaWYgKGluY29tcGxldGVQcm9qZWN0cy5sZW5ndGg8IDIgfHwgKGluY29tcGxldGVQcm9qZWN0cy5sZW5ndGggPCAzICYmIE1hdGgucmFuZG9tKCkgPiAwLjUpKSB7XG4gICAgICAgICAgICBsZXQgcCA9IG5ldyBQcm9qZWN0KFxuICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFByb2plY3ROYW1lc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aGlzLmFkZGl0aW9uYWxQcm9qZWN0TmFtZXMubGVuZ3RoKV0sXG4gICAgICAgICAgICAgICAgTWF0aC5yb3VuZCg1MDAgKyBNYXRoLnJhbmRvbSgpICogMTAwMClcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICB0aGlzLnN0b3JlLmNvbW1pdCgnYWRkUHJvamVjdCcsIHApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxheSAoKSB7XG4gICAgICAgIGlmICh0aGlzLnBsYXlJbnRlcnZhbFJlZmVyZW5jZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGxheUludGVydmFsUmVmZXJlbmNlID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrQ2FsbGJhY2suYmluZCh0aGlzKSwgMTAwKTtcbiAgICB9XG5cbiAgICBwYXVzZSAoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5wbGF5SW50ZXJ2YWxSZWZlcmVuY2UpO1xuICAgICAgICB0aGlzLnBsYXlJbnRlcnZhbFJlZmVyZW5jZSA9IG51bGw7XG4gICAgfVxuXG4gICAgcmVzZXQgKCkge1xuICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgIHRoaXMuc3RvcmUucmVwbGFjZVN0YXRlKGdldERlZmF1bHRTdGF0ZSgpKTtcbiAgICAgICAgdGhpcy5zdG9yZS5jb21taXQoJ2xpbmtHZW5lcmF0b3InLCB0aGlzKTtcbiAgICAgICAgdGhpc1t0aGlzLmluaXRNZXRob2ROYW1lXSgpO1xuICAgIH1cblxuICAgIHRpY2sgKCkge1xuICAgICAgICB0aGlzLnRpY2tDYWxsYmFjaygpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2VuZXJhdG9yOyIsImZ1bmN0aW9uIHNob3J0ZW5Ub0hpc3RvcnlMZW5ndGggKHN0YXRlLCBhcnIpIHtcbiAgICBpZiAoc3RhdGUuaGlzdG9yeUxlbmd0aCA9PT0gZmFsc2UpIHtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG4gICAgaWYgKGFyciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGFyci5zbGljZShNYXRoLm1heChhcnIubGVuZ3RoIC0gc3RhdGUuaGlzdG9yeUxlbmd0aCwgMCksIGFyci5sZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBhcHBlbmRXaXRoTWF4TGVuZ3RoKGl0ZW0sIGFycmF5LCBsZW5ndGgpIHtcbiAgICBsZXQgcmVtb3ZlZFZhbHVlO1xuICAgIGlmIChhcnJheS5sZW5ndGggPj0gbGVuZ3RoKSB7XG4gICAgICAgIHJlbW92ZWRWYWx1ZSA9IGFycmF5LnNoaWZ0KCk7XG4gICAgfVxuICAgIGFycmF5LnB1c2goaXRlbSk7XG5cbiAgICByZXR1cm4gcmVtb3ZlZFZhbHVlO1xufVxuXG5leHBvcnQge1xuICAgIHNob3J0ZW5Ub0hpc3RvcnlMZW5ndGgsXG4gICAgYXBwZW5kV2l0aE1heExlbmd0aFxufSIsImltcG9ydCB7YXBwZW5kV2l0aE1heExlbmd0aH0gZnJvbSAnLi4vSGVscGVyJztcblxuY2xhc3MgRW1wbG95ZWUge1xuICAgIGV4cGVjdGVkWWVhcmx5QmlsbGFibGVIb3VycyA9IDEwMDA7XG4gICAgdG90YWxUaW1lQm9va2VkID0gMDtcbiAgICBvYmplY3RJZCA9IG51bGw7XG4gICAgcHJldmlvdXNCb29raW5ncyA9IFtdO1xuICAgIGhpc3RvcnlMZW5ndGggPSA1MDtcbiAgICBwcm9kdWN0aXZpdHkgPSAxO1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIHByb2R1Y3Rpdml0eSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICBpZiAocHJvZHVjdGl2aXR5KSB7XG4gICAgICAgICAgICB0aGlzLnByb2R1Y3Rpdml0eSA9IHByb2R1Y3Rpdml0eTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRFbXBsb3llZUhpc3RvcnlLZXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWUgKyAnSGlzdG9yeScgKyB0aGlzLm9iamVjdElkO1xuICAgIH1cbiAgICB3b3Jrc09uRGF5KGRhdGUpIHtcbiAgICAgICAgaWYgKGRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFswLDZdLmluZGV4T2YoZGF0ZS5nZXREYXkoKSkgPT09IC0xO1xuICAgIH1cbiAgICBhZGRUaW1lQm9va2luZyAodGltZWJvb2tpbmcpIHtcbiAgICAgICAgbGV0IHJlbW92ZWRWYWx1ZSA9IGFwcGVuZFdpdGhNYXhMZW5ndGgodGltZWJvb2tpbmcudGltZWJvb2tlZCwgdGhpcy5wcmV2aW91c0Jvb2tpbmdzLCB0aGlzLmhpc3RvcnlMZW5ndGgpO1xuICAgICAgICB0aGlzLnRvdGFsVGltZUJvb2tlZCArPSB0aW1lYm9va2luZy50aW1lYm9va2VkIC0gKHJlbW92ZWRWYWx1ZSB8fCAwKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVtcGxveWVlOyIsImltcG9ydCB7YXBwZW5kV2l0aE1heExlbmd0aH0gZnJvbSAnLi4vSGVscGVyJztcblxuY2xhc3MgUHJvamVjdCB7XG4gICAgaG91ckJ1ZGdldCA9IDUwMDtcbiAgICBob3Vyc1JlbWFpbmluZyA9IDUwMDtcbiAgICBjaGFuY2VUb0NvbXBsZXRlT25UaW1lID0gMC44O1xuICAgIGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB0b3RhbFRpbWVCb29rZWQgPSAwO1xuICAgIGFsbFRpbWVUaW1lQm9va2VkID0gMDtcbiAgICBvYmplY3RJZCA9IG51bGw7XG4gICAgcHJldmlvdXNCb29raW5ncyA9IFtdO1xuICAgIGhpc3RvcnlMZW5ndGggPSA1MDtcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBob3VyQnVkZ2V0LCBjaGFuY2VUb0NvbXBsZXRlT25UaW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIGlmIChob3VyQnVkZ2V0KSB7XG4gICAgICAgICAgICB0aGlzLmhvdXJCdWRnZXQgPSBob3VyQnVkZ2V0O1xuICAgICAgICAgICAgdGhpcy5ob3Vyc1JlbWFpbmluZyA9IGhvdXJCdWRnZXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhvdXJCdWRnZXQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhbmNlVG9Db21wbGV0ZU9uVGltZSkge1xuICAgICAgICAgICAgdGhpcy5jaGFuY2VUb0NvbXBsZXRlT25UaW1lID0gY2hhbmNlVG9Db21wbGV0ZU9uVGltZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGVja0NvbXBsZXRlICgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5ob3VyQnVkZ2V0KSB7XG4gICAgICAgICAgICAvLyBQcm9qZWN0cyB3aXRob3V0IGEgYnVkZ2V0IG5ldmVyIGZpbmlzaFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCBob3Vyc1NwZW50ID0gdGhpcy5hbGxUaW1lVGltZUJvb2tlZDtcbiAgICAgICAgbGV0IGNoYW5jZVRvQ29tcGxldGUgPSB0aGlzLmNoYW5jZVRvQ29tcGxldGVPblRpbWUgLSAodGhpcy5nZXRIb3Vyc0J1ZGdldCgpIC8gaG91cnNTcGVudCk7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IE1hdGgucmFuZG9tKCkgPCBjaGFuY2VUb0NvbXBsZXRlO1xuICAgIH1cbiAgICBnZXRSYXRpbyAoKSB7XG4gICAgICAgIGxldCBib29raW5nc1N1bSA9IHRoaXMudG90YWxUaW1lQm9va2VkO1xuICAgICAgICBsZXQgY3VycmVudEhvdXJzUmVtYWluaW5nID0gdGhpcy5nZXRIb3Vyc1JlbWFpbmluZygpO1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLmdldEhvdXJzQnVkZ2V0KCkgLyAoY3VycmVudEhvdXJzUmVtYWluaW5nICsgYm9va2luZ3NTdW0pICogMTAwKSB8fCAwO1xuICAgIH1cbiAgICBnZXRIb3Vyc1JlbWFpbmluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG91ckJ1ZGdldCA/IHRoaXMuaG91cnNSZW1haW5pbmcgOiAwO1xuICAgIH1cbiAgICBnZXRIb3Vyc0J1ZGdldCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaG91ckJ1ZGdldCB8fCB0aGlzLmFsbFRpbWVUaW1lQm9va2VkO1xuICAgIH1cbiAgICBnZXRQcm9qZWN0SGlzdG9yeUtleSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZSArICdIaXN0b3J5JyArIHRoaXMub2JqZWN0SWQ7XG4gICAgfVxuICAgIGdldFRvdGFsSG91cnNCb29rZWRIaXN0b3J5S2V5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5uYW1lICsgJ1RvdGFsSG91cnNIaXN0b3J5JyArIHRoaXMub2JqZWN0SWQ7XG4gICAgfVxuICAgIGFkZFRpbWVCb29raW5nICh0aW1lYm9va2luZykge1xuICAgICAgICBsZXQgcmVtb3ZlZFZhbHVlID0gYXBwZW5kV2l0aE1heExlbmd0aCh0aW1lYm9va2luZy50aW1lYm9va2VkLCB0aGlzLnByZXZpb3VzQm9va2luZ3MsIHRoaXMuaGlzdG9yeUxlbmd0aCk7XG4gICAgICAgIHRoaXMudG90YWxUaW1lQm9va2VkICs9IHRpbWVib29raW5nLnRpbWVib29rZWQgLSAocmVtb3ZlZFZhbHVlIHx8IDApO1xuICAgICAgICB0aGlzLmFsbFRpbWVUaW1lQm9va2VkICs9IHRpbWVib29raW5nLnRpbWVib29rZWQ7XG5cbiAgICAgICAgaWYgKHRoaXMuaG91ckJ1ZGdldCkge1xuICAgICAgICAgICAgdGhpcy5ob3Vyc1JlbWFpbmluZyA9IE1hdGgucm91bmQoTWF0aC5tYXgodGhpcy5ob3Vyc1JlbWFpbmluZyAtIHRpbWVib29raW5nLnRpbWVib29rZWQsIDApKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdDsiLCJjbGFzcyBUaW1lQm9va2luZyB7XG4gICAgY29uc3RydWN0b3IocHJvamVjdCwgZW1wbG95ZWUsIHRpbWVib29rZWQsIGRhdGUpIHtcbiAgICAgICAgaWYgKHByb2plY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9qZWN0IG11c3QgYmUgZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlbXBsb3llZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtcGxveWVlIG11c3QgYmUgZGVmaW5lZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lYm9va2VkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigndGltZWJvb2tlZCBtdXN0IGJlIGRlZmluZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2RhdGUgbXVzdCBiZSBkZWZpbmVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLmVtcGxveWVlID0gZW1wbG95ZWU7XG4gICAgICAgIHRoaXMudGltZWJvb2tlZCA9IHRpbWVib29rZWQ7XG4gICAgICAgIHRoaXMuZGF0ZSA9IGRhdGU7XG5cbiAgICAgICAgcHJvamVjdC5hZGRUaW1lQm9va2luZyh0aGlzKTtcbiAgICAgICAgZW1wbG95ZWUuYWRkVGltZUJvb2tpbmcodGhpcyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUaW1lQm9va2luZzsiLCJpbXBvcnQgVnVlIGZyb20gJ3Z1ZSc7XG5pbXBvcnQgVnVleCBmcm9tICd2dWV4JztcbmltcG9ydCBUaW1lQm9va2luZyBmcm9tIFwiLi9Nb2RlbC9UaW1lQm9va2luZ1wiO1xuaW1wb3J0IHtzaG9ydGVuVG9IaXN0b3J5TGVuZ3RofSBmcm9tIFwiLi9IZWxwZXJcIjtcblxuVnVlLnVzZShWdWV4KTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFN0YXRlKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3RzOiBbXSxcbiAgICAgICAgZW1wbG95ZWVzOiBbXSxcbiAgICAgICAgdGltZUJvb2tpbmdzOiBbXSxcbiAgICAgICAgY3VycmVudERhdGU6IG51bGwsXG4gICAgICAgIGluaXRpYWxEYXRlOiBuZXcgRGF0ZSgnMjAyMS0wMS0wMSAwMDowMCcpLFxuICAgICAgICBlbXBsb3llZVV0aWxpemF0aW9uSGlzdG9yeTogW10sXG4gICAgICAgIHByb2plY3RTdGF0dXNIaXN0b3J5OiBbXSxcbiAgICAgICAgY29tcGFueUhlYWx0aEhpc3Rvcnk6IFtdLFxuICAgICAgICBkYXRlSGlzdG9yeTogW10sXG4gICAgICAgIGVtcGxveWVlSGlzdG9yeToge30sXG4gICAgICAgIHByb2plY3RIaXN0b3J5OiB7fSxcbiAgICAgICAgZW1wbG95ZWVXb3JrbG9nc0NhY2hlOiB7fSxcbiAgICAgICAgaGlzdG9yeUxlbmd0aDogNTAsXG4gICAgICAgIG9iamVjdEluY3JlbWVudElkOiAxLFxuICAgICAgICBnZW5lcmF0b3I6IG51bGwsXG4gICAgICAgIGRlZmF1bHRIb3VybHlSYXRlOiAxNTBcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5ld1N0b3JlKCkge1xuICAgIHJldHVybiBuZXcgVnVleC5TdG9yZSh7XG4gICAgICAgIHN0YXRlOiBnZXREZWZhdWx0U3RhdGUoKSxcbiAgICAgICAgYWN0aW9uczoge1xuICAgICAgICAgICAgdXBkYXRlSGlzdG9ncmFtcyAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb21taXQoJ2FkZEhpc3RvcnlWYWx1ZScsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnZW1wbG95ZWVVdGlsaXphdGlvbkhpc3RvcnknLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RhdGUuZ2V0dGVycy5nZXRFbXBsb3llZVV0aWxpemF0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdGUuY29tbWl0KCdhZGRIaXN0b3J5VmFsdWUnLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogJ3Byb2plY3RTdGF0dXNIaXN0b3J5JyxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHN0YXRlLmdldHRlcnMuZ2V0UHJvamVjdFN0YXR1c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXRlLmNvbW1pdCgnYWRkSGlzdG9yeVZhbHVlJywge1xuICAgICAgICAgICAgICAgICAgICBrZXk6ICdjb21wYW55SGVhbHRoSGlzdG9yeScsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBzdGF0ZS5nZXR0ZXJzLmdldENvbXBhbnlIZWFsdGhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb21taXQoJ2FkZEhpc3RvcnlWYWx1ZScsIHtcbiAgICAgICAgICAgICAgICAgICAga2V5OiAnZGF0ZUhpc3RvcnknLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RhdGUuZ2V0dGVycy5nZXRDdXJyZW50RGF0ZS5nZXRUaW1lKCkgLyAxMDAwXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc3RhdGUuZ2V0dGVycy5nZXRQcm9qZWN0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmNvbW1pdCgnYWRkSGlzdG9yeVZhbHVlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwLmdldFByb2plY3RIaXN0b3J5S2V5KCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogc3RhdGUuZ2V0dGVycy5nZXRQcm9qZWN0UmF0aW8ocClcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmNvbW1pdCgnYWRkSGlzdG9yeVZhbHVlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBwLmdldFRvdGFsSG91cnNCb29rZWRIaXN0b3J5S2V5KCksXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcC5nZXRIb3Vyc1JlbWFpbmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSYXRpbzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBzdGF0ZS5nZXR0ZXJzLmdldEVtcGxveWVlcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmNvbW1pdCgnYWRkSGlzdG9yeVZhbHVlJywge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBlLmdldEVtcGxveWVlSGlzdG9yeUtleSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGUud29ya3NPbkRheShzdGF0ZS5nZXR0ZXJzLmdldEN1cnJlbnREYXRlKSA/IHN0YXRlLmdldHRlcnMuZ2V0VXRpbGl6YXRpb25SYXRpb0ZvckVtcGxveWVlKGUpIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZFRpbWVCb29raW5nIChzdGF0ZSwge3Byb2plY3QsIGVtcGxveWVlLCBob3VycywgZGF0ZX0pIHtcbiAgICAgICAgICAgICAgICBsZXQgdGltZWJvb2tpbmcgPSBuZXcgVGltZUJvb2tpbmcocHJvamVjdCwgZW1wbG95ZWUsIGhvdXJzLCBkYXRlKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5jb21taXQoJ2FkZFRpbWVCb29raW5nJywgdGltZWJvb2tpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtdXRhdGlvbnM6IHtcbiAgICAgICAgICAgIGFkZEVtcGxveWVlIChzdGF0ZSwgZW1wbG95ZWUpIHtcbiAgICAgICAgICAgICAgICBlbXBsb3llZS5vYmplY3RJZCA9IHN0YXRlLm9iamVjdEluY3JlbWVudElkO1xuICAgICAgICAgICAgICAgIGVtcGxveWVlLmhpc3RvcnlMZW5ndGggPSBzdGF0ZS5oaXN0b3J5TGVuZ3RoO1xuICAgICAgICAgICAgICAgIHN0YXRlLm9iamVjdEluY3JlbWVudElkKys7XG4gICAgICAgICAgICAgICAgc3RhdGUuZW1wbG95ZWVzLnB1c2goZW1wbG95ZWUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZFByb2plY3QgKHN0YXRlLCBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdC5vYmplY3RJZCA9IHN0YXRlLm9iamVjdEluY3JlbWVudElkO1xuICAgICAgICAgICAgICAgIHByb2plY3QuaGlzdG9yeUxlbmd0aCA9IHN0YXRlLmhpc3RvcnlMZW5ndGg7XG4gICAgICAgICAgICAgICAgc3RhdGUub2JqZWN0SW5jcmVtZW50SWQrKztcbiAgICAgICAgICAgICAgICBzdGF0ZS5wcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGFkZFRpbWVCb29raW5nIChzdGF0ZSwgdGltZWJvb2tpbmcpIHtcbiAgICAgICAgICAgICAgICB0aW1lYm9va2luZy5wcm9qZWN0LmNoZWNrQ29tcGxldGUoKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS50aW1lQm9va2luZ3MucHVzaCh0aW1lYm9va2luZyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmVzZXRUaW1lQm9va2luZ3MgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudGltZUJvb2tpbmdzID0gW107XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0Q3VycmVudERhdGUgKHN0YXRlLCBjdXJyZW50RGF0ZSkge1xuICAgICAgICAgICAgICAgIHN0YXRlLmN1cnJlbnREYXRlID0gY3VycmVudERhdGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYWRkSGlzdG9yeVZhbHVlIChzdGF0ZSwge2tleSwgdmFsdWUsIGlzUmF0aW99KSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlW2tleV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0ZVtrZXldID0gW107XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBoaXN0b3J5VmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoaXNSYXRpbyA9PT0gdW5kZWZpbmVkIHx8IGlzUmF0aW8gPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeVZhbHVlID0gTWF0aC5yb3VuZCh2YWx1ZSAqIDEwMClcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RhdGVba2V5XS5wdXNoKGhpc3RvcnlWYWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGlua0dlbmVyYXRvciAoc3RhdGUsIGdlbmVyYXRvciApIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS5nZW5lcmF0b3IgPSBnZW5lcmF0b3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldHRlcnM6IHtcbiAgICAgICAgICAgIGdlbmVyYXRvciAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUuZ2VuZXJhdG9yXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0RW1wbG95ZWVzIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5lbXBsb3llZXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRQcm9qZWN0cyAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUucHJvamVjdHNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRUaW1lQm9va2luZ3MgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLnRpbWVCb29raW5nc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFRpbWVCb29raW5nc0ZvclByb2plY3Q6IChzdGF0ZSkgPT4gKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChwcm9qZWN0LnRvdGFsVGltZUJvb2tlZCAqIDEwKSAvIDEwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldEN1cnJlbnREYXRlIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5jdXJyZW50RGF0ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRJbml0aWFsRGF0ZSAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUuaW5pdGlhbERhdGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0SGlzdG9yeUxlbmd0aCAoc3RhdGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUuaGlzdG9yeUxlbmd0aDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpc0RhcmtNb2RlIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3aW5kb3cubWF0Y2hNZWRpYSgnKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKScpLm1hdGNoZXM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0RGVmYXVsdEhvdXJseVJhdGUgKHN0YXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmRlZmF1bHRIb3VybHlSYXRlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFllYXJGcmFjdGlvbiAoc3RhdGUsIGdldHRlcnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgeWVhckluU2Vjb25kcyA9IDg2NDAwICogMzY1ICogMTAwMDtcbiAgICAgICAgICAgICAgICBsZXQgZWFybGllc3REYXRlSW5IaXN0b3J5ID0gZ2V0dGVycy5nZXREYXRlSGlzdG9yeVswXSA/IG5ldyBEYXRlKGdldHRlcnMuZ2V0RGF0ZUhpc3RvcnlbMF0gKiAxMCkgOiBzdGF0ZS5pbml0aWFsRGF0ZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHN0YXRlLmN1cnJlbnREYXRlLmdldFRpbWUoKSAtIGVhcmxpZXN0RGF0ZUluSGlzdG9yeS5nZXRUaW1lKCkpIC8geWVhckluU2Vjb25kcztcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRUaW1lQm9va2luZ3NGb3JFbXBsb3llZTogKHN0YXRlKSA9PiAoZW1wbG95ZWUpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChlbXBsb3llZS50b3RhbFRpbWVCb29rZWQgKiAxMCkgLyAxMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRVdGlsaXphdGlvblJhdGlvRm9yRW1wbG95ZWU6IChzdGF0ZSwgZ2V0dGVycykgPT4gKGVtcGxveWVlKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldHRlcnMuZ2V0VGltZUJvb2tpbmdzRm9yRW1wbG95ZWUoZW1wbG95ZWUpIC8gKGdldHRlcnMuZ2V0WWVhckZyYWN0aW9uICogZW1wbG95ZWUuZXhwZWN0ZWRZZWFybHlCaWxsYWJsZUhvdXJzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRUaW1lQm9va2luZ3NTdW06IChzdGF0ZSkgPT4gIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChzdGF0ZS5lbXBsb3llZXMucmVkdWNlKChjYXJyeSwgZWwpID0+IGNhcnJ5ICs9IGVsLnRvdGFsVGltZUJvb2tlZCwgMCkgKiAxMCkgLyAxMDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRBbGxUaW1lVGltZUJvb2tpbmdzU3VtOiAoc3RhdGUpID0+ICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoc3RhdGUucHJvamVjdHMucmVkdWNlKChjYXJyeSwgZWwpID0+IGNhcnJ5ICs9IGVsLmFsbFRpbWVUaW1lQm9va2VkLCAwKSAqIDEwKSAvIDEwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldEV4cGVjdGVkQmlsbGFibGVIb3Vyc1N1bSAoc3RhdGUsIGdldHRlcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGUuZW1wbG95ZWVzLnJlZHVjZSgoY2FycnksIGVsKSA9PiBjYXJyeSArPSBlbC5leHBlY3RlZFllYXJseUJpbGxhYmxlSG91cnMsIDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldFByb2plY3RIb3VyQnVkZ2V0U3VtIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5wcm9qZWN0cy5yZWR1Y2UoKGNhcnJ5LCBlbCkgPT4gY2FycnkgKz0gZWwuZ2V0SG91cnNCdWRnZXQoKSwgMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0UHJvamVjdEhvdXJzUmVtYWluaW5nU3VtIChzdGF0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZS5wcm9qZWN0cy5yZWR1Y2UoKGNhcnJ5LCBlbCkgPT4gY2FycnkgKz0gZWwuZ2V0SG91cnNSZW1haW5pbmcoKSwgMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0RW1wbG95ZWVVdGlsaXphdGlvbiAoc3RhdGUsIGdldHRlcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZ2V0dGVycy5nZXRUaW1lQm9va2luZ3NTdW0gLyAoZ2V0dGVycy5nZXRFeHBlY3RlZEJpbGxhYmxlSG91cnNTdW0gKiBnZXR0ZXJzLmdldFllYXJGcmFjdGlvbilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRQcm9qZWN0U3RhdHVzIChzdGF0ZSwgZ2V0dGVycykge1xuICAgICAgICAgICAgICAgIHJldHVybiBnZXR0ZXJzLmdldFByb2plY3RIb3VyQnVkZ2V0U3VtIC8gKGdldHRlcnMuZ2V0UHJvamVjdEhvdXJzUmVtYWluaW5nU3VtICsgZ2V0dGVycy5nZXRBbGxUaW1lVGltZUJvb2tpbmdzU3VtKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRQcm9qZWN0UmF0aW86IChzdGF0ZSwgZ2V0dGVycykgPT4gKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvamVjdC5nZXRIb3Vyc0J1ZGdldCgpIC8gKHByb2plY3QuYWxsVGltZVRpbWVCb29rZWQgKyBwcm9qZWN0LmdldEhvdXJzUmVtYWluaW5nKCkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldERhdGFTZXRGb3JFbXBsb3llZVV0aWxpemF0aW9uSGlzdG9yeSAoc3RhdGUsIGdldHRlcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvcnRlblRvSGlzdG9yeUxlbmd0aChzdGF0ZSwgc3RhdGUuZW1wbG95ZWVVdGlsaXphdGlvbkhpc3RvcnkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldERhdGFTZXRGb3JQcm9qZWN0U3RhdHVzSGlzdG9yeSAoc3RhdGUsIGdldHRlcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvcnRlblRvSGlzdG9yeUxlbmd0aChzdGF0ZSwgc3RhdGUucHJvamVjdFN0YXR1c0hpc3RvcnkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldENvbXBhbnlIZWFsdGggKHN0YXRlLCBnZXR0ZXJzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldHRlcnMuZ2V0UHJvamVjdFN0YXR1cyAqIGdldHRlcnMuZ2V0RW1wbG95ZWVVdGlsaXphdGlvbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRDb21wYW55SGVhbHRoSGlzdG9yeSAoc3RhdGUsIGdldHRlcnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvcnRlblRvSGlzdG9yeUxlbmd0aChzdGF0ZSwgc3RhdGUuY29tcGFueUhlYWx0aEhpc3RvcnkpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGdldERhdGVIaXN0b3J5IChzdGF0ZSwgZ2V0dGVycykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzaG9ydGVuVG9IaXN0b3J5TGVuZ3RoKHN0YXRlLCBzdGF0ZS5kYXRlSGlzdG9yeSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0UHJvamVjdFN0YXR1c0hpc3RvcnlGb3JQcm9qZWN0OiAoc3RhdGUsIGdldHRlcnMpID0+IChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGhpc3RvcnkgPSBzdGF0ZVtwcm9qZWN0LmdldFByb2plY3RIaXN0b3J5S2V5KCldO1xuICAgICAgICAgICAgICAgIHJldHVybiBzaG9ydGVuVG9IaXN0b3J5TGVuZ3RoKHN0YXRlLCBoaXN0b3J5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRQcm9qZWN0VG90YWxIb3Vyc0hpc3RvcnlGb3JQcm9qZWN0OiAoc3RhdGUsIGdldHRlcnMpID0+IChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGhpc3RvcnkgPSBzdGF0ZVtwcm9qZWN0LmdldFRvdGFsSG91cnNCb29rZWRIaXN0b3J5S2V5KCldO1xuICAgICAgICAgICAgICAgIHJldHVybiBzaG9ydGVuVG9IaXN0b3J5TGVuZ3RoKHN0YXRlLCBoaXN0b3J5KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBnZXRVdGlsaXphdGlvbkhpc3RvcnlGb3JFbXBsb3llZTogKHN0YXRlLCBnZXR0ZXJzKSA9PiAoZW1wbG95ZWUpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgaGlzdG9yeSA9IHN0YXRlW2VtcGxveWVlLmdldEVtcGxveWVlSGlzdG9yeUtleSgpXTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hvcnRlblRvSGlzdG9yeUxlbmd0aChzdGF0ZSwgaGlzdG9yeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVOZXdTdG9yZTtcbmV4cG9ydCB7Z2V0RGVmYXVsdFN0YXRlfTsiLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8c2NlbmFyaW8tc2ltdWxhdG9yIDpzY2VuYXJpb3M9XCJ0aGlzLnNjZW5hcmlvc1wiPjwvc2NlbmFyaW8tc2ltdWxhdG9yPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwidG9wXCI+S1BJczwvaDM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgIDxDb21wYW55SGVhbHRoPjwvQ29tcGFueUhlYWx0aD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgIDxFbXBsb3llZVV0aWxpemF0aW9uPjwvRW1wbG95ZWVVdGlsaXphdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgIDxQcm9qZWN0U3RhdHVzPjwvUHJvamVjdFN0YXR1cz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgPGgzPkVtcGxveWVlczwvaDM+XG4gICAgICAgICAgPGRpdiB2LWZvcj1cImVtcGxveWVlIGluIGdldEVtcGxveWVlc1wiPlxuICAgICAgICAgICAgPEVtcGxveWVlIHYtYmluZDplbXBsb3llZT1cImVtcGxveWVlXCI+PC9FbXBsb3llZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNiBzY3JvbGxcIj5cbiAgICAgICAgICA8aDM+UHJvamVjdHM8L2gzPlxuICAgICAgICAgIDxkaXYgdi1mb3I9XCJwcm9qZWN0IGluIGdldFByb2plY3RzLnNsaWNlKCkucmV2ZXJzZSgpXCI+XG4gICAgICAgICAgICA8UHJvamVjdCB2LWJpbmQ6cHJvamVjdD1cInByb2plY3RcIj48L1Byb2plY3Q+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8VG90YWxzPjwvVG90YWxzPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IEVtcGxveWVlIGZyb20gJy4vRW1wbG95ZWUnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCBTY2VuYXJpb1NpbXVsYXRvciBmcm9tICcuL1NjZW5hcmlvU2ltdWxhdG9yJ1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IEVtcGxveWVlVXRpbGl6YXRpb24gZnJvbSBcIi4vRW1wbG95ZWVVdGlsaXphdGlvblwiO1xuaW1wb3J0IFByb2plY3RTdGF0dXMgZnJvbSBcIi4vUHJvamVjdFN0YXR1c1wiO1xuaW1wb3J0IENvbXBhbnlIZWFsdGggZnJvbSBcIi4vQ29tcGFueUhlYWx0aFwiO1xuaW1wb3J0IFRpbWVCb29raW5nTGlzdCBmcm9tIFwiLi9UaW1lQm9va2luZ0xpc3RcIjtcbmltcG9ydCBUb3RhbHMgZnJvbSBcIi4vVG90YWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJBZ2VuY3lCeVZhbHVlXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBUaW1lQm9va2luZ0xpc3QsXG4gICAgQ29tcGFueUhlYWx0aCxcbiAgICBQcm9qZWN0U3RhdHVzLFxuICAgIEVtcGxveWVlVXRpbGl6YXRpb24sXG4gICAgRW1wbG95ZWUsXG4gICAgUHJvamVjdCxcbiAgICBTY2VuYXJpb1NpbXVsYXRvcixcbiAgICBUb3RhbHNcbiAgfSxcbiAgZGF0YSgpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2NlbmFyaW9zOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcIlNjZW5hcmlvICMxXCIsIC8vIFdlYWsgUHJvamVjdCBNYW5hZ2VtZW50XG4gICAgICAgICAgbWV0aG9kOiBcImdlbmVyYXRlQWdlbmN5QnlWYWx1ZUxvd1BtXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiU2NlbmFyaW8gIzJcIiwgLy8gTG93IFV0aWxpemF0aW9uXG4gICAgICAgICAgbWV0aG9kOiBcImdlbmVyYXRlQWdlbmN5QnlWYWx1ZUxvd1V0aWxpc2F0aW9uXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiU2NlbmFyaW8gIzNcIiwgLy8gT3B0aW1hbCBCYWxhbmNlXG4gICAgICAgICAgbWV0aG9kOiBcImdlbmVyYXRlQWdlbmN5QnlWYWx1ZUJhbGFuY2VkXCJcbiAgICAgICAgfSxcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIGNvbXB1dGVkOntcbiAgICAuLi5tYXBHZXR0ZXJzKFtcbiAgICAgICAgJ2dldEVtcGxveWVlcycsXG4gICAgICAgICdnZXRQcm9qZWN0cydcbiAgICBdKVxuICB9XG59XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtMTJcIj5cbiAgICAgICAgICA8c2NlbmFyaW8tc2ltdWxhdG9yPjwvc2NlbmFyaW8tc2ltdWxhdG9yPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgPEVtcGxveWVlVXRpbGl6YXRpb24+PC9FbXBsb3llZVV0aWxpemF0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiB2LWZvcj1cImVtcGxveWVlIGluIGdldEVtcGxveWVlc1wiPlxuICAgICAgICA8RW1wbG95ZWUgdi1iaW5kOmVtcGxveWVlPVwiZW1wbG95ZWVcIj48L0VtcGxveWVlPlxuICAgICAgPC9kaXY+XG4gICAgICA8VG90YWxzPjwvVG90YWxzPlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IEVtcGxveWVlIGZyb20gJy4vRW1wbG95ZWUnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCBTY2VuYXJpb1NpbXVsYXRvciBmcm9tICcuL1NjZW5hcmlvU2ltdWxhdG9yJ1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IEVtcGxveWVlVXRpbGl6YXRpb24gZnJvbSBcIi4vRW1wbG95ZWVVdGlsaXphdGlvblwiO1xuaW1wb3J0IFByb2plY3RTdGF0dXMgZnJvbSBcIi4vUHJvamVjdFN0YXR1c1wiO1xuaW1wb3J0IENvbXBhbnlIZWFsdGggZnJvbSBcIi4vQ29tcGFueUhlYWx0aFwiO1xuaW1wb3J0IFRpbWVCb29raW5nTGlzdCBmcm9tIFwiLi9UaW1lQm9va2luZ0xpc3RcIjtcbmltcG9ydCBUb3RhbHMgZnJvbSBcIi4vVG90YWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJIb21lXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBUaW1lQm9va2luZ0xpc3QsXG4gICAgQ29tcGFueUhlYWx0aCxcbiAgICBQcm9qZWN0U3RhdHVzLFxuICAgIEVtcGxveWVlVXRpbGl6YXRpb24sXG4gICAgRW1wbG95ZWUsXG4gICAgUHJvamVjdCxcbiAgICBTY2VuYXJpb1NpbXVsYXRvcixcbiAgICBUb3RhbHNcbiAgfSxcbiAgY29tcHV0ZWQ6e1xuICAgIC4uLm1hcEdldHRlcnMoW1xuICAgICAgICAnZ2V0RW1wbG95ZWVzJyxcbiAgICAgICAgJ2dldFByb2plY3RzJ1xuICAgIF0pXG4gIH1cbn1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJrZXktdmFsdWVcIj5Db21wYW55IEhlYWx0aDoge3sgaGVhbHRoIH19JTwvc3Bhbj5cbiAgICAgIDxwIGNsYXNzPVwiZGVmaW5pdGlvblwiPlxuICAgICAgICBUaGUgQ29tcGFueSBIZWFsdGggc2hvd3MgaG93IG11Y2ggb2YgeW91ciBwcm9kdWN0aW9uIHBvdGVudGlhbCB5b3UgYXJlIHVzaW5nLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgPFJhdGlvQ2hhcnQgOmNoYXJ0LWRhdGE9XCJjaGFydERhdGFcIiBjbGFzcz1cInJhdGlvLWNoYXJ0XCI+PC9SYXRpb0NoYXJ0PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQgUmF0aW9DaGFydCBmcm9tICcuL1JhdGlvQ2hhcnQnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiQ29tcGFueUhlYWx0aFwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgUmF0aW9DaGFydFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGhlYWx0aCgpIHtcbiAgICAgIGxldCByYXRpbyA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0Q29tcGFueUhlYWx0aDtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKHJhdGlvICogMTAwKSB8fCAwO1xuICAgIH0sXG4gICAgY2hhcnREYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0Q29tcGFueUhlYWx0aEhpc3Rvcnk7XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3cgZW1wbG95ZWVcIj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJrZXktdmFsdWVcIj57eyBlbXBsb3llZS5uYW1lIH19OiB7eyBib29rZWRUaW1lUGVyY2VudCB9fSU8L2Rpdj5cbiAgICAgIDxkaXY+VG90YWwgaG91cnMgYm9va2VkOiB7eyB0aW1lQm9va2luZ3MgfX1oPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICA8UmF0aW9DaGFydCA6Y2hhcnQtZGF0YT1cImNoYXJ0RGF0YVwiIGNsYXNzPVwicmF0aW8tY2hhcnRcIj48L1JhdGlvQ2hhcnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCBSYXRpb0NoYXJ0IGZyb20gJy4vUmF0aW9DaGFydCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFsnZW1wbG95ZWUnXSxcbiAgbmFtZTogXCJFbXBsb3llZVwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgUmF0aW9DaGFydFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHRpbWVCb29raW5ncygpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFRpbWVCb29raW5nc0ZvckVtcGxveWVlKHRoaXMuZW1wbG95ZWUpO1xuICAgIH0sXG4gICAgYm9va2VkVGltZVBlcmNlbnQoKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFV0aWxpemF0aW9uUmF0aW9Gb3JFbXBsb3llZSh0aGlzLmVtcGxveWVlKSAqIDEwMCkgfHwgMDtcbiAgICB9LFxuICAgIGNoYXJ0RGF0YSgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFV0aWxpemF0aW9uSGlzdG9yeUZvckVtcGxveWVlKHRoaXMuZW1wbG95ZWUpO1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImtleS12YWx1ZVwiPkVtcGxveWVlIFV0aWxpemF0aW9uOiB7eyB1dGlsaXphdGlvbiB9fSU8L3NwYW4+XG4gICAgICA8cCBjbGFzcz1cImRlZmluaXRpb25cIj5cbiAgICAgICAgVGhpcyB2YWx1ZSBzaG93cyBob3cgbWFueSBvZiB5b3VyIHBsYW5uZWQgYmlsbGFibGUgaG91cnMgYXJlIGJlaW5nIGJvb2tlZC5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgIDxSYXRpb0NoYXJ0IDpjaGFydC1kYXRhPVwiY2hhcnREYXRhXCIgY2xhc3M9XCJyYXRpby1jaGFydFwiPjwvUmF0aW9DaGFydD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFJhdGlvQ2hhcnQgZnJvbSBcIi4vUmF0aW9DaGFydFwiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiRW1wbG95ZWVVdGlsaXphdGlvblwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgUmF0aW9DaGFydFxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIHV0aWxpemF0aW9uICgpIHtcbiAgICAgIGxldCBmcmFjdGlvbiA9IHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0RW1wbG95ZWVVdGlsaXphdGlvbjtcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKGZyYWN0aW9uICogMTAwKSB8fCAwO1xuICAgIH0sXG4gICAgY2hhcnREYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0RGF0YVNldEZvckVtcGxveWVlVXRpbGl6YXRpb25IaXN0b3J5O1xuICAgIH1cbiAgfVxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbjwvc3R5bGU+IiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLTEyXCI+XG4gICAgICAgICAgPHNjZW5hcmlvLXNpbXVsYXRvcj48L3NjZW5hcmlvLXNpbXVsYXRvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgdi1mb3I9XCJlbXBsb3llZSBpbiBnZXRFbXBsb3llZXNcIj5cbiAgICAgICAgPEVtcGxveWVlIHYtYmluZDplbXBsb3llZT1cImVtcGxveWVlXCI+PC9FbXBsb3llZT5cbiAgICAgIDwvZGl2PlxuICAgICAgPFRvdGFscz48L1RvdGFscz5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBFbXBsb3llZSBmcm9tICcuL0VtcGxveWVlJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgU2NlbmFyaW9TaW11bGF0b3IgZnJvbSAnLi9TY2VuYXJpb1NpbXVsYXRvcidcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCBFbXBsb3llZVV0aWxpemF0aW9uIGZyb20gXCIuL0VtcGxveWVlVXRpbGl6YXRpb25cIjtcbmltcG9ydCBQcm9qZWN0U3RhdHVzIGZyb20gXCIuL1Byb2plY3RTdGF0dXNcIjtcbmltcG9ydCBDb21wYW55SGVhbHRoIGZyb20gXCIuL0NvbXBhbnlIZWFsdGhcIjtcbmltcG9ydCBUaW1lQm9va2luZ0xpc3QgZnJvbSBcIi4vVGltZUJvb2tpbmdMaXN0XCI7XG5pbXBvcnQgVG90YWxzIGZyb20gXCIuL1RvdGFsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiRnJlZWxhbmNlXCIsXG4gIGNvbXBvbmVudHM6IHtcbiAgICBUaW1lQm9va2luZ0xpc3QsXG4gICAgQ29tcGFueUhlYWx0aCxcbiAgICBQcm9qZWN0U3RhdHVzLFxuICAgIEVtcGxveWVlVXRpbGl6YXRpb24sXG4gICAgRW1wbG95ZWUsXG4gICAgUHJvamVjdCxcbiAgICBTY2VuYXJpb1NpbXVsYXRvcixcbiAgICBUb3RhbHNcbiAgfSxcbiAgY29tcHV0ZWQ6e1xuICAgIC4uLm1hcEdldHRlcnMoW1xuICAgICAgICAnZ2V0RW1wbG95ZWVzJyxcbiAgICAgICAgJ2dldFByb2plY3RzJ1xuICAgIF0pXG4gIH1cbn1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICAgIDxzY2VuYXJpby1zaW11bGF0b3I+PC9zY2VuYXJpby1zaW11bGF0b3I+XG4gICAgICA8Q29tcGFueUhlYWx0aD48L0NvbXBhbnlIZWFsdGg+XG4gICAgICA8ZGl2IHYtZm9yPVwiZW1wbG95ZWUgaW4gZ2V0RW1wbG95ZWVzXCI+XG4gICAgICAgIDxFbXBsb3llZSB2LWJpbmQ6ZW1wbG95ZWU9XCJlbXBsb3llZVwiPjwvRW1wbG95ZWU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiB2LWZvcj1cInByb2plY3QgaW4gZ2V0UHJvamVjdHMuc2xpY2UoKS5yZXZlcnNlKClcIj5cbiAgICAgICAgPFByb2plY3Qgdi1iaW5kOnByb2plY3Q9XCJwcm9qZWN0XCI+PC9Qcm9qZWN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8VG90YWxzPjwvVG90YWxzPlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBFbXBsb3llZSBmcm9tICcuL0VtcGxveWVlJztcbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgU2NlbmFyaW9TaW11bGF0b3IgZnJvbSAnLi9TY2VuYXJpb1NpbXVsYXRvcidcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCBFbXBsb3llZVV0aWxpemF0aW9uIGZyb20gXCIuL0VtcGxveWVlVXRpbGl6YXRpb25cIjtcbmltcG9ydCBQcm9qZWN0U3RhdHVzIGZyb20gXCIuL1Byb2plY3RTdGF0dXNcIjtcbmltcG9ydCBDb21wYW55SGVhbHRoIGZyb20gXCIuL0NvbXBhbnlIZWFsdGhcIjtcbmltcG9ydCBUaW1lQm9va2luZ0xpc3QgZnJvbSBcIi4vVGltZUJvb2tpbmdMaXN0XCI7XG5pbXBvcnQgVG90YWxzIGZyb20gXCIuL1RvdGFsc1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiRnJlZWxhbmNlQnlWYWx1ZVwiLFxuICBjb21wb25lbnRzOiB7XG4gICAgVGltZUJvb2tpbmdMaXN0LFxuICAgIENvbXBhbnlIZWFsdGgsXG4gICAgUHJvamVjdFN0YXR1cyxcbiAgICBFbXBsb3llZVV0aWxpemF0aW9uLFxuICAgIEVtcGxveWVlLFxuICAgIFByb2plY3QsXG4gICAgU2NlbmFyaW9TaW11bGF0b3IsXG4gICAgVG90YWxzXG4gIH0sXG4gIGNvbXB1dGVkOntcbiAgICAuLi5tYXBHZXR0ZXJzKFtcbiAgICAgICAgJ2dldEVtcGxveWVlcycsXG4gICAgICAgICdnZXRQcm9qZWN0cydcbiAgICBdKVxuICB9XG59XG48L3NjcmlwdD4iLCI8dGVtcGxhdGU+XG4gIDxkaXYgY2xhc3M9XCJyb3cgcHJvamVjdFwiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImtleS12YWx1ZVwiPlxuICAgICAgICB7eyBwcm9qZWN0Lm5hbWUgfX06IHt7IHBlcmNlbnRDb21wbGV0ZSB9fSVcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgUHJvamVjdCBTdGF0dXM6XG4gICAgICAgIDxzcGFuIHYtaWY9XCJwcm9qZWN0LmlzQ29tcGxldGVcIj5cbiAgICAgICAgICBjb21wbGV0ZWQgPGkgY2xhc3M9XCJ1OC1pY29uIG9rXCI+PC9pPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIHYtZWxzZT5cbiAgICAgICAgICBydW5uaW5nIDxkaXYgY2xhc3M9XCJsZHMtZHVhbC1yaW5nXCI+PC9kaXY+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgQnVkZ2V0IHJlbWFpbmluZzoge3sgcmVtYWluaW5nQnVkZ2V0IH19aCAvIHt7IHByb2plY3QuZ2V0SG91cnNCdWRnZXQoKSB9fWhcbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgPFJhdGlvQ2hhcnQgOmNoYXJ0LWRhdGE9XCJjaGFydERhdGFcIiA6bGluZWFyLWRhdGE9XCJob3Vyc0Jvb2tlZFwiIGNsYXNzPVwicmF0aW8tY2hhcnRcIj48L1JhdGlvQ2hhcnQ+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmltcG9ydCB7bWFwR2V0dGVyc30gZnJvbSBcInZ1ZXhcIjtcbmltcG9ydCBSYXRpb0NoYXJ0IGZyb20gJy4vUmF0aW9DaGFydCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcHJvcHM6IFsncHJvamVjdCddLFxuICBuYW1lOiBcIlByb2plY3RcIixcbiAgY29tcG9uZW50czoge1xuICAgIFJhdGlvQ2hhcnRcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICByZW1haW5pbmdCdWRnZXQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9qZWN0LmdldEhvdXJzUmVtYWluaW5nKCk7XG4gICAgfSxcbiAgICBwZXJjZW50Q29tcGxldGUoKSB7XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCh0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFByb2plY3RSYXRpbyh0aGlzLnByb2plY3QpICogMTAwKSB8fCAwO1xuICAgIH0sXG4gICAgY2hhcnREYXRhKCkge1xuICAgICAgcmV0dXJuIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0UHJvamVjdFN0YXR1c0hpc3RvcnlGb3JQcm9qZWN0KHRoaXMucHJvamVjdCk7XG4gICAgfSxcbiAgICBob3Vyc0Jvb2tlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldFByb2plY3RUb3RhbEhvdXJzSGlzdG9yeUZvclByb2plY3QodGhpcy5wcm9qZWN0KTtcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJrZXktdmFsdWVcIj5Qcm9qZWN0IFN0YXR1czoge3sgaGVhbHRoIH19JTwvc3Bhbj5cbiAgICAgIDxwIGNsYXNzPVwiZGVmaW5pdGlvblwiPlxuICAgICAgICBUaGlzIHZhbHVlIHNob3dzIGhvdyBlZmZpY2llbnRseSB0aGUgaG91cnMgaW52ZXN0ZWQgaW4geW91ciBwcm9qZWN0cyBhcmUgYmVpbmcgdXNlZC5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgIDxSYXRpb0NoYXJ0IDpjaGFydC1kYXRhPVwiY2hhcnREYXRhXCIgY2xhc3M9XCJyYXRpby1jaGFydFwiPjwvUmF0aW9DaGFydD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IFJhdGlvQ2hhcnQgZnJvbSAnLi9SYXRpb0NoYXJ0JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlByb2plY3RTdGF0dXNcIixcbiAgY29tcG9uZW50czoge1xuICAgIFJhdGlvQ2hhcnRcbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICBoZWFsdGggKCkge1xuICAgICAgbGV0IHJhdGlvID0gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRQcm9qZWN0U3RhdHVzO1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQocmF0aW8gKiAxMDApIHx8IDA7XG4gICAgfSxcbiAgICBjaGFydERhdGEoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXREYXRhU2V0Rm9yUHJvamVjdFN0YXR1c0hpc3Rvcnk7XG4gICAgfVxuICB9XG59XG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuPC9zdHlsZT4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGRpdiByZWY9XCJjb250YWluZXJcIj48L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuaW1wb3J0IHVQbG90IGZyb20gJ3VwbG90JztcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlJhdGlvQ2hhcnRcIixcbiAgcHJvcHM6IHtcbiAgICBjaGFydERhdGE6IHtcbiAgICAgIHR5cGU6IEFycmF5XG4gICAgfSxcbiAgICBsaW5lYXJEYXRhOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIG9wdGlvbmFsOiB0cnVlXG4gICAgfSxcbiAgICB3aWR0aDoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgZGVmYXVsdDogMjUwXG4gICAgfSxcbiAgICBoZWlnaHQ6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIGRlZmF1bHQ6IDgwXG4gICAgfSxcbiAgICBhdXRvU2l6ZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IHRydWVcbiAgICB9XG4gIH0sXG4gIHdhdGNoOiB7XG4gICAgZ2V0Q2hhcnREYXRhKCkge1xuICAgICAgdGhpcy5wbG90LnNldERhdGEodGhpcy5nZXRDaGFydERhdGEpO1xuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcbiAgICBpZiAodGhpcy5saW5lYXJEYXRhKSB7XG4gICAgICB0aGlzLm9wdGlvbnMuc2VyaWVzLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBcIkNQVVwiLFxuICAgICAgICAgIHNjYWxlOiBcImhcIixcbiAgICAgICAgICB2YWx1ZTogKHUsIHYpID0+IHYgPT0gbnVsbCA/IFwiLVwiIDogdi50b0ZpeGVkKDEpICsgXCIlXCIsXG4gICAgICAgICAgc3Ryb2tlOiBcIiMzMTk1ZmZcIixcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnBsb3QgPSBuZXcgdVBsb3QodGhpcy5vcHRpb25zLCB0aGlzLmdldENoYXJ0RGF0YSwgdGhpcy4kcmVmcy5jb250YWluZXIpO1xuICAgIGlmICh0aGlzLmF1dG9TaXplICYmIFJlc2l6ZU9ic2VydmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc2l6ZVBsb3QuY2FsbCh0aGlzLCB0aGlzLiRyZWZzLmNvbnRhaW5lcik7XG4gICAgICBuZXcgUmVzaXplT2JzZXJ2ZXIocmVzaXplUGxvdC5iaW5kKHRoaXMsIHRoaXMuJHJlZnMuY29udGFpbmVyKSkub2JzZXJ2ZSh0aGlzLiRyZWZzLmNvbnRhaW5lcik7XG4gICAgfVxuICB9LFxuICBjb21wdXRlZDoge1xuICAgIGdldENoYXJ0RGF0YSgpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2V0RGF0ZUhpc3RvcnksXG4gICAgICAgIHRoaXMuY2hhcnREYXRhLFxuICAgICAgICB0aGlzLmxpbmVhckRhdGFcbiAgICAgIF07XG4gICAgfVxuICB9LFxuICBkYXRhKCkge1xuICAgIHJldHVybiB7XG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIC8vdGl0bGU6IFwiRml4ZWQgbGVuZ3RoIC8gc2xpZGluZyBkYXRhIHNsaWNlc1wiLFxuICAgICAgICB3aWR0aDogdGhpcy53aWR0aCxcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgY3Vyc29yOiB7XG4gICAgICAgICAgZHJhZzoge1xuICAgICAgICAgICAgc2V0U2NhbGU6IGZhbHNlLFxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGxlZ2VuZDoge1xuICAgICAgICAgIHNob3c6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIFwiJVwiOiB7XG4gICAgICAgICAgICBhdXRvOiBmYWxzZSxcbiAgICAgICAgICAgIHJhbmdlOiBbMCwgMTAwXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgeDoge1xuICAgICAgICAgICAgdGltZTogZmFsc2VcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNlcmllczogW1xuICAgICAgICAgIHt9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiBcIkNQVVwiLFxuICAgICAgICAgICAgc2NhbGU6IFwiJVwiLFxuICAgICAgICAgICAgc3Ryb2tlOiBcIiMzMWZmMzFcIixcbiAgICAgICAgICAgIGZpbGw6IFwiIzgzZmY4M1wiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBheGVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNjYWxlOiAnJScsXG4gICAgICAgICAgICBmb250OiBcIjExcHggQXJpYWxcIixcbiAgICAgICAgICAgIHN0cm9rZTogdGhpcy4kc3RvcmUuZ2V0dGVycy5pc0RhcmtNb2RlID8gJyNGRkYnIDogJyMwMDAnLFxuICAgICAgICAgICAgZ3JpZDoge1xuICAgICAgICAgICAgICBzdHJva2U6IHRoaXMuJHN0b3JlLmdldHRlcnMuaXNEYXJrTW9kZSA/ICcjRkZGJyA6ICcjMDAwJyxcbiAgICAgICAgICAgICAgd2lkdGg6IDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNpZGU6IDEsXG4gICAgICAgICAgICBzY2FsZTogJ2gnLFxuICAgICAgICAgICAgZm9udDogXCIxMXB4IEFyaWFsXCIsXG4gICAgICAgICAgICBzdHJva2U6IHRoaXMuJHN0b3JlLmdldHRlcnMuaXNEYXJrTW9kZSA/ICcjRkZGJyA6ICcjMDAwJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIHBsb3Q6IG51bGxcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzaXplUGxvdChlbCkge1xuICBsZXQgZGltZW5zaW9ucyA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICB0aGlzLnBsb3Quc2V0U2l6ZSh7IHdpZHRoOiBNYXRoLnJvdW5kKGRpbWVuc2lvbnMud2lkdGgpLCBoZWlnaHQ6IHRoaXMuaGVpZ2h0IH0pXG4gIGxldCBjYW52YXMgPSB0aGlzLnBsb3Qucm9vdC5xdWVyeVNlbGVjdG9yKCdjYW52YXMnKTtcbiAgY2FudmFzLnN0eWxlLndpZHRoID0gZGltZW5zaW9ucy53aWR0aCArICdweCc7XG4gIGNhbnZhcy5zdHlsZS5oZWlnaHQgPSB0aGlzLmhlaWdodCArICdweCc7XG5cbn1cbjwvc2NyaXB0PlxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic2ltdWxhdGlvbi1jb250cm9sc1wiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgIDxkaXYgOmNsYXNzPVwiW3RoaXMuc2hvd1NjZW5hcmlvcyA/ICdjb2wtMicgOiAnY29sLTYnXVwiPlxuICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgdi1pZj1cIiFwbGF5aW5nXCIgdi1vbjpjbGljaz1cInBsYXlcIiA6Y2xhc3M9XCJ7ICdwbGF5LXdhaXRpbmcnOiAhcGxheWVkIH1cIj7ilrbvuI88L2E+XG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiB2LWlmPVwicGxheWluZ1wiIHYtb246Y2xpY2s9XCJwYXVzZVwiPuKPuDwvYT5cbiAgICAgICAgPGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiIHYtb246Y2xpY2s9XCJyZXNldFwiPvCflIHvuI/vuI88L2E+XG4gICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIiB2LWlmPVwidGhpcy4kcHJvcHMuZW5hYmxlU3RlcFwiIHYtb246Y2xpY2s9XCJ0aWNrXCI+U3RlcDwvYT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC03XCIgdi1pZj1cInRoaXMuc2hvd1NjZW5hcmlvc1wiPlxuICAgICAgICA8YnV0dG9uIDpjbGFzcz1cIltpc0FjdGl2ZVNjZW5hcmlvKHNjZW5hcmlvLm1ldGhvZCkgPyAnYWN0aXZlJyA6ICcnXVwiIHYtb246Y2xpY2s9XCJsb2FkXCIgdi1mb3I9XCJzY2VuYXJpbyBpbiB0aGlzLiRwcm9wcy5zY2VuYXJpb3NcIiA6ZGF0YS1zY2VuYXJpbz1cInNjZW5hcmlvLm1ldGhvZFwiPlxuICAgICAgICAgIHt7IHNjZW5hcmlvLm5hbWUgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgOmNsYXNzPVwiW3RoaXMuc2hvd1NjZW5hcmlvcyA/ICdjb2wtMycgOiAnY29sLTYnLCAndGV4dC1yaWdodCddXCI+XG4gICAgICAgIDxzcGFuPnt7IGdldEN1cnJlbnREYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpIH19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cInJvdyBsYWJlbC1yb3dcIj5cbiAgICAgIDxkaXYgOmNsYXNzPVwiW3RoaXMuc2hvd1NjZW5hcmlvcyA/ICdjb2wtMicgOiAnY29sLTYnXVwiPlxuICAgICAgICBDb250cm9sc1xuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLTdcIiB2LWlmPVwidGhpcy4kcHJvcHMuc2NlbmFyaW9zLmxlbmd0aCA+IDBcIj5cbiAgICAgICAgU2NlbmFyaW9zXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgOmNsYXNzPVwiW3RoaXMuc2hvd1NjZW5hcmlvcyA/ICdjb2wtMicgOiAnY29sLTYnLCAndGV4dC1yaWdodCddXCI+XG4gICAgICAgIFNpbXVsYXRpb24gZGF0ZVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbi8vIGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL01lZGlhX2NvbnRyb2xfc3ltYm9sc1xuXG5pbXBvcnQgR2VuZXJhdG9yIGZyb20gXCIuLi9qcy9HZW5lcmF0b3JcIjtcbmltcG9ydCB7bWFwR2V0dGVyc30gZnJvbSBcInZ1ZXhcIjtcblxuZXhwb3J0IGRlZmF1bHQge1xuICBuYW1lOiBcIlNjZW5hcmlvU2ltdWxhdG9yXCIsXG4gIHByb3BzOiB7XG4gICAgZW5hYmxlU3RlcDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIGRlZmF1bHQ6IGZhbHNlXG4gICAgfSxcbiAgICBzY2VuYXJpb3M6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgZGVmYXVsdDogKCkgPT4gW11cbiAgICB9XG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHBsYXlpbmc6IGZhbHNlLFxuICAgICAgcGxheWVkOiBmYWxzZSxcbiAgICAgIHNob3dTY2VuYXJpb3M6IHRoaXMuJHByb3BzLnNjZW5hcmlvcy5sZW5ndGggPiAwXG4gICAgfVxuICB9LFxuICBtZXRob2RzOiB7XG4gICAgcGxheTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdlbmVyYXRvci5wbGF5KClcbiAgICAgIHRoaXMucGxheWluZyA9IHRydWU7XG4gICAgICB0aGlzLnBsYXllZCA9IHRydWU7XG4gICAgfSxcbiAgICBwYXVzZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdlbmVyYXRvci5wYXVzZSgpO1xuICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICByZXNldDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdlbmVyYXRvci5yZXNldCgpO1xuICAgICAgdGhpcy5wbGF5aW5nID0gZmFsc2U7XG4gICAgfSxcbiAgICB0aWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2VuZXJhdG9yLnRpY2soKTtcbiAgICB9LFxuICAgIGxvYWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICBsZXQgc2NlbmFyaW9OYW1lID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQuc2NlbmFyaW87XG4gICAgICB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdlbmVyYXRvci5sb2FkU2NlbmFyaW8oc2NlbmFyaW9OYW1lKTtcbiAgICAgIHRoaXMuJHN0b3JlLmdldHRlcnMuZ2VuZXJhdG9yLnJlc2V0KCk7XG4gICAgICB0aGlzLnBsYXlpbmcgPSBmYWxzZTtcbiAgICB9LFxuICAgIGlzQWN0aXZlU2NlbmFyaW86IGZ1bmN0aW9uKHNjKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZW5lcmF0b3IuaW5pdE1ldGhvZE5hbWUgPT09IHNjO1xuICAgIH1cbiAgfSxcbiAgY29tcHV0ZWQ6IHtcbiAgICAuLi5tYXBHZXR0ZXJzKFtcbiAgICAgICAgJ2dldEN1cnJlbnREYXRlJ1xuICAgIF0pXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8ZGl2IHYtZm9yPVwiYm9va2luZyBpbiB0aW1lQm9va2luZ3Muc2xpY2UoKS5yZXZlcnNlKClcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIHt7IGJvb2tpbmcuZW1wbG95ZWUubmFtZSB9fSBib29rZWQge3sgYm9va2luZy50aW1lYm9va2VkIH19aCB0byB7eyBib29raW5nLnByb2plY3QubmFtZSB9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJUaW1lQm9va2luZ0xpc3RcIixcbiAgY29tcHV0ZWQ6IHtcbiAgICB0aW1lQm9va2luZ3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRUaW1lQm9va2luZ3NcbiAgICB9XG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIjx0ZW1wbGF0ZT5cbiAgPGRpdiBjbGFzcz1cInRvdGFsc1wiPlxuICAgIFRhcmdldCBlYXJuaW5ncyB7eyBtYXhFYXJuaW5ncyB8IGN1cnJlbmN5IH19LCBwcm9qZWN0ZWQgZWFybmluZ3M6IHt7IHByb2plY3RlZEVhcm5pbmdzIHwgY3VycmVuY3kgfX0gKGZvciB0aGUgeWVhciAyMDIxKVxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5pbXBvcnQge21hcEdldHRlcnN9IGZyb20gXCJ2dWV4XCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogXCJTY2VuYXJpb1NpbXVsYXRvclwiLFxuICBwcm9wczoge1xuXG4gIH0sXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcblxuICAgIH1cbiAgfSxcbiAgbWV0aG9kczoge1xuXG4gIH0sXG4gIGNvbXB1dGVkOiB7XG4gICAgbWF4RWFybmluZ3MoKSB7XG4gICAgICByZXR1cm4gdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXRFbXBsb3llZXMucmVkdWNlKChjYXJyeSwgZSkgPT4gY2FycnkgKz0gZS5leHBlY3RlZFllYXJseUJpbGxhYmxlSG91cnMsIDApICogdGhpcy4kc3RvcmUuZ2V0dGVycy5nZXREZWZhdWx0SG91cmx5UmF0ZTtcbiAgICB9LFxuICAgIHByb2plY3RlZEVhcm5pbmdzKCkge1xuICAgICAgcmV0dXJuIHRoaXMubWF4RWFybmluZ3MgKiB0aGlzLiRzdG9yZS5nZXR0ZXJzLmdldENvbXBhbnlIZWFsdGg7XG4gICAgfSxcbiAgICAuLi5tYXBHZXR0ZXJzKFtcblxuICAgIF0pXG4gIH1cbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG48L3N0eWxlPiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWdlbmN5QnlWYWx1ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTM4OTY4YWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQWdlbmN5QnlWYWx1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0FnZW5jeUJ5VmFsdWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9tYXR0aWFzL3Byb2plY3RzL3Byb2pldi1kZW1vL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzUzODk2OGFlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzUzODk2OGFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzUzODk2OGFlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BZ2VuY3lCeVZhbHVlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01Mzg5NjhhZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1Mzg5NjhhZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9BZ2VuY3lCeVZhbHVlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vQWdlbmN5SG91cmx5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMWFmMDU0ZCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9BZ2VuY3lIb3VybHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9BZ2VuY3lIb3VybHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9tYXR0aWFzL3Byb2plY3RzL3Byb2pldi1kZW1vL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzExYWYwNTRkJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzExYWYwNTRkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzExYWYwNTRkJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9BZ2VuY3lIb3VybHkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTExYWYwNTRkJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzExYWYwNTRkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdnVlL0FnZW5jeUhvdXJseS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0NvbXBhbnlIZWFsdGgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRiZTY4MDUyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0NvbXBhbnlIZWFsdGgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Db21wYW55SGVhbHRoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNGJlNjgwNTJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9tYXR0aWFzL3Byb2plY3RzL3Byb2pldi1kZW1vL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRiZTY4MDUyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRiZTY4MDUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRiZTY4MDUyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Db21wYW55SGVhbHRoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YmU2ODA1MiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0YmU2ODA1MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9Db21wYW55SGVhbHRoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRW1wbG95ZWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAzY2YzY2E1JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VtcGxveWVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vRW1wbG95ZWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwM2NmM2NhNVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL21hdHRpYXMvcHJvamVjdHMvcHJvamV2LWRlbW8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDNjZjNjYTUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDNjZjNjYTUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDNjZjNjYTUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL0VtcGxveWVlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wM2NmM2NhNSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwM2NmM2NhNScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9FbXBsb3llZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0VtcGxveWVlVXRpbGl6YXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQ3ODc1OTI2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0VtcGxveWVlVXRpbGl6YXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9FbXBsb3llZVV0aWxpemF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZDc4NzU5MjZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9tYXR0aWFzL3Byb2plY3RzL3Byb2pldi1kZW1vL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Q3ODc1OTI2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Q3ODc1OTI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Q3ODc1OTI2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9FbXBsb3llZVV0aWxpemF0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kNzg3NTkyNiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdkNzg3NTkyNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9FbXBsb3llZVV0aWxpemF0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vRnJlZWxhbmNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00ZTJkZTUzMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GcmVlbGFuY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GcmVlbGFuY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9tYXR0aWFzL3Byb2plY3RzL3Byb2pldi1kZW1vL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRlMmRlNTMwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRlMmRlNTMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRlMmRlNTMwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GcmVlbGFuY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTRlMmRlNTMwJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzRlMmRlNTMwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdnVlL0ZyZWVsYW5jZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0ZyZWVsYW5jZUJ5VmFsdWUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE5ZGFhN2ZjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL0ZyZWVsYW5jZUJ5VmFsdWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9GcmVlbGFuY2VCeVZhbHVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvbWF0dGlhcy9wcm9qZWN0cy9wcm9qZXYtZGVtby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdhOWRhYTdmYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdhOWRhYTdmYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdhOWRhYTdmYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vRnJlZWxhbmNlQnlWYWx1ZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTlkYWE3ZmMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYTlkYWE3ZmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvRnJlZWxhbmNlQnlWYWx1ZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Byb2plY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE2YjI1MjFjJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2plY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qcm9qZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiL2hvbWUvbWF0dGlhcy9wcm9qZWN0cy9wcm9qZXYtZGVtby9ub2RlX21vZHVsZXMvdnVlLWhvdC1yZWxvYWQtYXBpL2Rpc3QvaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxNmIyNTIxYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxNmIyNTIxYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxNmIyNTIxYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vUHJvamVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTZiMjUyMWMmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTZiMjUyMWMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcImFzc2V0cy92dWUvUHJvamVjdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1Byb2plY3RTdGF0dXMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxNDFlMmY4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1Byb2plY3RTdGF0dXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9Qcm9qZWN0U3RhdHVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzE0MWUyZjhcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9tYXR0aWFzL3Byb2plY3RzL3Byb2pldi1kZW1vL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzcxNDFlMmY4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzcxNDFlMmY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzcxNDFlMmY4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Qcm9qZWN0U3RhdHVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MTQxZTJmOCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3MTQxZTJmOCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9Qcm9qZWN0U3RhdHVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vUmF0aW9DaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWVkYWIzNmMmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vUmF0aW9DaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL1JhdGlvQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9tYXR0aWFzL3Byb2plY3RzL3Byb2pldi1kZW1vL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2VlZGFiMzZjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2VlZGFiMzZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2VlZGFiMzZjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9SYXRpb0NoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lZWRhYjM2YyZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdlZWRhYjM2YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9SYXRpb0NoYXJ0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vU2NlbmFyaW9TaW11bGF0b3IudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU5ODQyOTI2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL1NjZW5hcmlvU2ltdWxhdG9yLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vU2NlbmFyaW9TaW11bGF0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1OTg0MjkyNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIi9ob21lL21hdHRpYXMvcHJvamVjdHMvcHJvamV2LWRlbW8vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNTk4NDI5MjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNTk4NDI5MjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNTk4NDI5MjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL1NjZW5hcmlvU2ltdWxhdG9yLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01OTg0MjkyNiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1OTg0MjkyNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiYXNzZXRzL3Z1ZS9TY2VuYXJpb1NpbXVsYXRvci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RpbWVCb29raW5nTGlzdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDk5MDc1ZTMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVGltZUJvb2tpbmdMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVGltZUJvb2tpbmdMaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDk5MDc1ZTNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9tYXR0aWFzL3Byb2plY3RzL3Byb2pldi1kZW1vL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzQ5OTA3NWUzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzQ5OTA3NWUzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzQ5OTA3NWUzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9UaW1lQm9va2luZ0xpc3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5OTA3NWUzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ5OTA3NWUzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdnVlL1RpbWVCb29raW5nTGlzdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL1RvdGFscy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGQyZWYyMzQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vVG90YWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vVG90YWxzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMGQyZWYyMzRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvaG9tZS9tYXR0aWFzL3Byb2plY3RzL3Byb2pldi1kZW1vL25vZGVfbW9kdWxlcy92dWUtaG90LXJlbG9hZC1hcGkvZGlzdC9pbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBkMmVmMjM0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBkMmVmMjM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBkMmVmMjM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9Ub3RhbHMudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBkMmVmMjM0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzBkMmVmMjM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJhc3NldHMvdnVlL1RvdGFscy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWdlbmN5QnlWYWx1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZ2VuY3lCeVZhbHVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BZ2VuY3lIb3VybHkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQWdlbmN5SG91cmx5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Db21wYW55SGVhbHRoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0NvbXBhbnlIZWFsdGgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VtcGxveWVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VtcGxveWVlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9FbXBsb3llZVV0aWxpemF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0VtcGxveWVlVXRpbGl6YXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZyZWVsYW5jZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GcmVlbGFuY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0ZyZWVsYW5jZUJ5VmFsdWUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRnJlZWxhbmNlQnlWYWx1ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUHJvamVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9qZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Qcm9qZWN0U3RhdHVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1Byb2plY3RTdGF0dXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1JhdGlvQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vUmF0aW9DaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NlbmFyaW9TaW11bGF0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPz9jbG9uZWRSdWxlU2V0LTFbMF0ucnVsZXNbMF0udXNlWzBdIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vU2NlbmFyaW9TaW11bGF0b3IudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RpbWVCb29raW5nTGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9UaW1lQm9va2luZ0xpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC0xWzBdLnJ1bGVzWzBdLnVzZVswXSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL1RvdGFscy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/P2Nsb25lZFJ1bGVTZXQtMVswXS5ydWxlc1swXS51c2VbMF0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9Ub3RhbHMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSxcbiAgICAgICAgICBbX2MoXCJzY2VuYXJpby1zaW11bGF0b3JcIiwgeyBhdHRyczogeyBzY2VuYXJpb3M6IHRoaXMuc2NlbmFyaW9zIH0gfSldLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW19jKFwiQ29tcGFueUhlYWx0aFwiKV0sIDEpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW19jKFwiRW1wbG95ZWVVdGlsaXphdGlvblwiKV0sIDEpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW19jKFwiUHJvamVjdFN0YXR1c1wiKV0sIDEpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJFbXBsb3llZXNcIildKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmdldEVtcGxveWVlcywgZnVuY3Rpb24oZW1wbG95ZWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgW19jKFwiRW1wbG95ZWVcIiwgeyBhdHRyczogeyBlbXBsb3llZTogZW1wbG95ZWUgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTYgc2Nyb2xsXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImgzXCIsIFtfdm0uX3YoXCJQcm9qZWN0c1wiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uZ2V0UHJvamVjdHMuc2xpY2UoKS5yZXZlcnNlKCksIGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgW19jKFwiUHJvamVjdFwiLCB7IGF0dHJzOiB7IHByb2plY3Q6IHByb2plY3QgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIlRvdGFsc1wiKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW1xuICAgICAgICBfYyhcImgzXCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW192bS5fdihcIktQSXNcIildKVxuICAgICAgXSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtMTJcIiB9LCBbX2MoXCJzY2VuYXJpby1zaW11bGF0b3JcIildLCAxKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLTEyXCIgfSwgW19jKFwiRW1wbG95ZWVVdGlsaXphdGlvblwiKV0sIDEpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLmdldEVtcGxveWVlcywgZnVuY3Rpb24oZW1wbG95ZWUpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtfYyhcIkVtcGxveWVlXCIsIHsgYXR0cnM6IHsgZW1wbG95ZWU6IGVtcGxveWVlIH0gfSldLCAxKVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJUb3RhbHNcIilcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImtleS12YWx1ZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiQ29tcGFueSBIZWFsdGg6IFwiICsgX3ZtLl9zKF92bS5oZWFsdGgpICsgXCIlXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJkZWZpbml0aW9uXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJcXG4gICAgICBUaGUgQ29tcGFueSBIZWFsdGggc2hvd3MgaG93IG11Y2ggb2YgeW91ciBwcm9kdWN0aW9uIHBvdGVudGlhbCB5b3UgYXJlIHVzaW5nLlxcbiAgICBcIlxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0pLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwiUmF0aW9DaGFydFwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmF0aW8tY2hhcnRcIixcbiAgICAgICAgICBhdHRyczogeyBcImNoYXJ0LWRhdGFcIjogX3ZtLmNoYXJ0RGF0YSB9XG4gICAgICAgIH0pXG4gICAgICBdLFxuICAgICAgMVxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93IGVtcGxveWVlXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImtleS12YWx1ZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIF92bS5fcyhfdm0uZW1wbG95ZWUubmFtZSkgKyBcIjogXCIgKyBfdm0uX3MoX3ZtLmJvb2tlZFRpbWVQZXJjZW50KSArIFwiJVwiXG4gICAgICAgIClcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX3ZtLl92KFwiVG90YWwgaG91cnMgYm9va2VkOiBcIiArIF92bS5fcyhfdm0udGltZUJvb2tpbmdzKSArIFwiaFwiKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIlJhdGlvQ2hhcnRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJhdGlvLWNoYXJ0XCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJjaGFydC1kYXRhXCI6IF92bS5jaGFydERhdGEgfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvd1wiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwia2V5LXZhbHVlXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJFbXBsb3llZSBVdGlsaXphdGlvbjogXCIgKyBfdm0uX3MoX3ZtLnV0aWxpemF0aW9uKSArIFwiJVwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGVmaW5pdGlvblwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIFwiXFxuICAgICAgVGhpcyB2YWx1ZSBzaG93cyBob3cgbWFueSBvZiB5b3VyIHBsYW5uZWQgYmlsbGFibGUgaG91cnMgYXJlIGJlaW5nIGJvb2tlZC5cXG4gICAgXCJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIlJhdGlvQ2hhcnRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJhdGlvLWNoYXJ0XCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJjaGFydC1kYXRhXCI6IF92bS5jaGFydERhdGEgfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC0xMlwiIH0sIFtfYyhcInNjZW5hcmlvLXNpbXVsYXRvclwiKV0sIDEpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLmdldEVtcGxveWVlcywgZnVuY3Rpb24oZW1wbG95ZWUpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtfYyhcIkVtcGxveWVlXCIsIHsgYXR0cnM6IHsgZW1wbG95ZWU6IGVtcGxveWVlIH0gfSldLCAxKVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJUb3RhbHNcIilcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInNjZW5hcmlvLXNpbXVsYXRvclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcIkNvbXBhbnlIZWFsdGhcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS5nZXRFbXBsb3llZXMsIGZ1bmN0aW9uKGVtcGxveWVlKSB7XG4gICAgICAgIHJldHVybiBfYyhcImRpdlwiLCBbX2MoXCJFbXBsb3llZVwiLCB7IGF0dHJzOiB7IGVtcGxveWVlOiBlbXBsb3llZSB9IH0pXSwgMSlcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0uZ2V0UHJvamVjdHMuc2xpY2UoKS5yZXZlcnNlKCksIGZ1bmN0aW9uKHByb2plY3QpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtfYyhcIlByb2plY3RcIiwgeyBhdHRyczogeyBwcm9qZWN0OiBwcm9qZWN0IH0gfSldLCAxKVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJUb3RhbHNcIilcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3cgcHJvamVjdFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC1tZC02XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJrZXktdmFsdWVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcbiAgICAgICAgICBcIlxcbiAgICAgIFwiICtcbiAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvamVjdC5uYW1lKSArXG4gICAgICAgICAgICBcIjogXCIgK1xuICAgICAgICAgICAgX3ZtLl9zKF92bS5wZXJjZW50Q29tcGxldGUpICtcbiAgICAgICAgICAgIFwiJVxcbiAgICBcIlxuICAgICAgICApXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgIFByb2plY3QgU3RhdHVzOlxcbiAgICAgIFwiKSxcbiAgICAgICAgX3ZtLnByb2plY3QuaXNDb21wbGV0ZVxuICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICBjb21wbGV0ZWQgXCIpLFxuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJ1OC1pY29uIG9rXCIgfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIHJ1bm5pbmcgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxkcy1kdWFsLXJpbmdcIiB9KVxuICAgICAgICAgICAgXSlcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX3ZtLl92KFxuICAgICAgICAgIFwiXFxuICAgICAgQnVkZ2V0IHJlbWFpbmluZzogXCIgK1xuICAgICAgICAgICAgX3ZtLl9zKF92bS5yZW1haW5pbmdCdWRnZXQpICtcbiAgICAgICAgICAgIFwiaCAvIFwiICtcbiAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvamVjdC5nZXRIb3Vyc0J1ZGdldCgpKSArXG4gICAgICAgICAgICBcImhcXG4gICAgXCJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIlJhdGlvQ2hhcnRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJhdGlvLWNoYXJ0XCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJjaGFydC1kYXRhXCI6IF92bS5jaGFydERhdGEsIFwibGluZWFyLWRhdGFcIjogX3ZtLmhvdXJzQm9va2VkIH1cbiAgICAgICAgfSlcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyb3dcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2wtbWQtNlwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImtleS12YWx1ZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiUHJvamVjdCBTdGF0dXM6IFwiICsgX3ZtLl9zKF92bS5oZWFsdGgpICsgXCIlXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJkZWZpbml0aW9uXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgXCJcXG4gICAgICBUaGlzIHZhbHVlIHNob3dzIGhvdyBlZmZpY2llbnRseSB0aGUgaG91cnMgaW52ZXN0ZWQgaW4geW91ciBwcm9qZWN0cyBhcmUgYmVpbmcgdXNlZC5cXG4gICAgXCJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sLW1kLTZcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcIlJhdGlvQ2hhcnRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInJhdGlvLWNoYXJ0XCIsXG4gICAgICAgICAgYXR0cnM6IHsgXCJjaGFydC1kYXRhXCI6IF92bS5jaGFydERhdGEgfVxuICAgICAgICB9KVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbX2MoXCJkaXZcIiwgeyByZWY6IFwiY29udGFpbmVyXCIgfSldKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaW11bGF0aW9uLWNvbnRyb2xzXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicm93XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBjbGFzczogW3RoaXMuc2hvd1NjZW5hcmlvcyA/IFwiY29sLTJcIiA6IFwiY29sLTZcIl0gfSwgW1xuICAgICAgICAhX3ZtLnBsYXlpbmdcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwicGxheS13YWl0aW5nXCI6ICFfdm0ucGxheWVkIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0OnZvaWQoMClcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ucGxheSB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCLilrbvuI9cIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnBsYXlpbmdcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnBhdXNlIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuKPuFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7IGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSwgb246IHsgY2xpY2s6IF92bS5yZXNldCB9IH0sXG4gICAgICAgICAgW192bS5fdihcIvCflIHvuI/vuI9cIildXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIHRoaXMuJHByb3BzLmVuYWJsZVN0ZXBcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwiamF2YXNjcmlwdDp2b2lkKDApXCIgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRpY2sgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiU3RlcFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICB0aGlzLnNob3dTY2VuYXJpb3NcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbC03XCIgfSxcbiAgICAgICAgICAgIF92bS5fbCh0aGlzLiRwcm9wcy5zY2VuYXJpb3MsIGZ1bmN0aW9uKHNjZW5hcmlvKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5pc0FjdGl2ZVNjZW5hcmlvKHNjZW5hcmlvLm1ldGhvZCkgPyBcImFjdGl2ZVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiZGF0YS1zY2VuYXJpb1wiOiBzY2VuYXJpby5tZXRob2QgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubG9hZCB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhzY2VuYXJpby5uYW1lKSArIFwiXFxuICAgICAgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgY2xhc3M6IFt0aGlzLnNob3dTY2VuYXJpb3MgPyBcImNvbC0zXCIgOiBcImNvbC02XCIsIFwidGV4dC1yaWdodFwiXSB9LFxuICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5nZXRDdXJyZW50RGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKSkpXSldXG4gICAgICApXG4gICAgXSksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJvdyBsYWJlbC1yb3dcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IGNsYXNzOiBbdGhpcy5zaG93U2NlbmFyaW9zID8gXCJjb2wtMlwiIDogXCJjb2wtNlwiXSB9LCBbXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgIENvbnRyb2xzXFxuICAgIFwiKVxuICAgICAgXSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgdGhpcy4kcHJvcHMuc2NlbmFyaW9zLmxlbmd0aCA+IDBcbiAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbC03XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgU2NlbmFyaW9zXFxuICAgIFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgY2xhc3M6IFt0aGlzLnNob3dTY2VuYXJpb3MgPyBcImNvbC0yXCIgOiBcImNvbC02XCIsIFwidGV4dC1yaWdodFwiXSB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgU2ltdWxhdGlvbiBkYXRlXFxuICAgIFwiKV1cbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBfdm0uX2woX3ZtLnRpbWVCb29raW5ncy5zbGljZSgpLnJldmVyc2UoKSwgZnVuY3Rpb24oYm9va2luZykge1xuICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoYm9va2luZy5lbXBsb3llZS5uYW1lKSArXG4gICAgICAgICAgICAgIFwiIGJvb2tlZCBcIiArXG4gICAgICAgICAgICAgIF92bS5fcyhib29raW5nLnRpbWVib29rZWQpICtcbiAgICAgICAgICAgICAgXCJoIHRvIFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKGJvb2tpbmcucHJvamVjdC5uYW1lKSArXG4gICAgICAgICAgICAgIFwiXFxuICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICB9KSxcbiAgICAwXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG90YWxzXCIgfSwgW1xuICAgIF92bS5fdihcbiAgICAgIFwiXFxuICBUYXJnZXQgZWFybmluZ3MgXCIgK1xuICAgICAgICBfdm0uX3MoX3ZtLl9mKFwiY3VycmVuY3lcIikoX3ZtLm1heEVhcm5pbmdzKSkgK1xuICAgICAgICBcIiwgcHJvamVjdGVkIGVhcm5pbmdzOiBcIiArXG4gICAgICAgIF92bS5fcyhfdm0uX2YoXCJjdXJyZW5jeVwiKShfdm0ucHJvamVjdGVkRWFybmluZ3MpKSArXG4gICAgICAgIFwiIChmb3IgdGhlIHllYXIgMjAyMSlcXG5cIlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iXSwic291cmNlUm9vdCI6IiJ9