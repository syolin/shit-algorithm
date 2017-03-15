webpackJsonp([1,2],Array(128).concat([
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(64);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(440);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _index = __webpack_require__(400);

var _index2 = _interopRequireDefault(_index);

var _admin = __webpack_require__(394);

var _admin2 = _interopRequireDefault(_admin);

var _problems = __webpack_require__(407);

var _problems2 = _interopRequireDefault(_problems);

var _rank = __webpack_require__(409);

var _rank2 = _interopRequireDefault(_rank);

var _solve = __webpack_require__(408);

var _solve2 = _interopRequireDefault(_solve);

var _mypage = __webpack_require__(403);

var _mypage2 = _interopRequireDefault(_mypage);

var _notice = __webpack_require__(405);

var _notice2 = _interopRequireDefault(_notice);

var _opennotice = __webpack_require__(406);

var _opennotice2 = _interopRequireDefault(_opennotice);

var _notfound = __webpack_require__(404);

var _notfound2 = _interopRequireDefault(_notfound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: _index2.default
  }, {
    path: '/admin',
    name: 'admin',
    component: _admin2.default
  }, {
    path: '/problems',
    name: 'problems',
    component: _problems2.default
  }, {
    path: '/rank',
    name: 'rank',
    component: _rank2.default
  }, {
    path: '/problems/:num',
    name: 'solve',
    component: _solve2.default
  }, {
    path: '/mypage',
    name: 'mypage',
    component: _mypage2.default
  }, {
    path: '/notice',
    name: 'notice',
    component: _notice2.default
  }, {
    path: '/notices/:num',
    name: 'openNotice',
    component: _opennotice2.default
  }, {
    path: '/404',
    name: '404',
    component: _notfound2.default
  }, {
    path: '/*',
    redirect: { name: '404' }
  }]
});

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(64);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(51);

var _vuex2 = _interopRequireDefault(_vuex);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var state = {
  loadingState: false
};

var mutations = {
  loadingOn: function loadingOn(state) {
    state.loadingState = true;
  },
  loadingOff: function loadingOff(state) {
    state.loadingState = false;
  }
};

var actions = {
  loadingOn: function loadingOn(_ref) {
    var commit = _ref.commit;
    return commit('loadingOn');
  },
  loadingOff: function loadingOff(_ref2) {
    var commit = _ref2.commit;
    return commit('loadingOff');
  }
};

exports.default = new _vuex2.default.Store({
  state: state,
  actions: actions,
  mutations: mutations
});

/***/ }),
/* 130 */,
/* 131 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(385)
__webpack_require__(384)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(162),
  /* template */
  __webpack_require__(434),
  /* scopeId */
  "data-v-88f23c12",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//

exports.default = {
  name: 'swiper-slide',
  ready: function ready() {
    this.update();
  },
  mounted: function mounted() {
    this.update();
  },
  updated: function updated() {
    this.update();
  },
  attached: function attached() {
    this.update();
  },

  methods: {
    update: function update() {
      if (this.$parent && this.$parent.swiper) {
        this.$parent.swiper.update(true);
        if (this.$parent.options.loop) {
          this.$parent.swiper.destroyLoop();
          this.$parent.swiper.createLoop();
        }
      }
    }
  }
};

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var browser = typeof window !== 'undefined';
if (browser) {
  window.Swiper = __webpack_require__(126);
  __webpack_require__(363);
}
exports.default = {
  name: 'swiper',
  props: {
    options: {
      type: Object,
      default: function _default() {
        return {
          autoplay: 3500
        };
      }
    }
  },
  ready: function ready() {
    if (!this.swiper && browser) {
      this.swiper = new Swiper(this.$el, this.options);
    }
  },
  mounted: function mounted() {
    var self = this;
    var mount = function mount() {
      if (!self.swiper && browser) {
        delete self.options.notNextTick;
        self.swiper = new Swiper(self.$el, self.options);
      }
    };
    this.options.notNextTick ? mount() : this.$nextTick(mount);
  },
  updated: function updated() {
    this.swiper.update();
  },
  beforeDestroy: function beforeDestroy() {
    if (!!this.swiper) {
      this.swiper.destroy();
      delete this.swiper;
    }
  }
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

//
//
//
//

var debounce = __webpack_require__(390);
var monacoLoader = __webpack_require__(438);
module.exports = {

  props: {
    width: { type: [String, Number], default: '100%' },
    height: { type: [String, Number], default: '100%' },
    code: { type: String, default: '// code \n' },
    srcPath: { type: String },
    language: { type: String, default: 'javascript' },
    theme: { type: String, default: 'vs-dark' }, // vs, hc-black
    options: { type: Object, default: function _default() {} },
    highlighted: { type: Array, default: function _default() {
        return [{
          number: 0,
          class: ''
        }];
      } },
    changeThrottle: { type: Number, default: 0 }
  },
  mounted: function mounted() {
    this.fetchEditor();
  },
  destroyed: function destroyed() {
    this.destroyMonaco();
  },

  computed: {
    editorOptions: function editorOptions() {
      return Object.assign({}, this.defaults, this.options, {
        value: this.code,
        language: this.language,
        theme: this.theme
      });
    }
  },
  data: function data() {
    return {
      defaults: {
        selectOnLineNumbers: true,
        roundedSelection: false,
        readOnly: false,
        cursorStyle: 'line',
        automaticLayout: false,
        glyphMargin: true
      }
    };
  },

  watch: {
    highlighted: {
      handler: function handler(lines) {
        this.highlightLines(lines);
      },

      deep: true
    }
  },
  methods: {
    highlightLines: function highlightLines(lines) {
      var _this = this;

      if (!this.editor) {
        return;
      }
      lines.forEach(function (line) {
        var className = line.class;
        var highlighted = _this.$el.querySelector('.' + className);

        if (highlighted) {
          highlighted.classList.remove(className);
        }

        var number = parseInt(line.number);
        if (!_this.editor && number < 1 || isNaN(number)) {
          return;
        }

        var selectedLine = _this.$el.querySelector('.view-lines [linenumber="' + number + '"]');
        if (selectedLine) {
          selectedLine.classList.add(className);
        }
      });
    },
    editorHasLoaded: function editorHasLoaded(editor, monaco) {
      var _this2 = this;

      this.editor = editor;
      this.monaco = monaco;
      this.editor.onDidChangeModelContent(function (event) {
        return _this2.codeChangeHandler(editor, event);
      });
      this.$emit('mounted', editor);
    },

    codeChangeHandler: function codeChangeHandler(editor) {
      if (this.codeChangeEmitter) {
        this.codeChangeEmitter(editor);
      } else {
        this.codeChangeEmitter = debounce(function (editor) {
          this.$emit('codeChange', editor);
        }, this.changeThrottle);
        this.codeChangeEmitter(editor);
      }
    },
    fetchEditor: function fetchEditor() {
      monacoLoader.load(this.srcPath, this.createMonaco);
    },
    createMonaco: function createMonaco() {
      this.editor = window.monaco.editor.create(this.$el, this.editorOptions);
      this.editorHasLoaded(this.editor, window.monaco);
    },
    destroyMonaco: function destroyMonaco() {
      if (typeof this.editor !== 'undefined') {
        this.editor.dispose();
      }
    }
  }
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

var inBrowser = typeof window !== 'undefined';
exports.default = {
    name: 'VueProgress',
    serverCacheKey: function serverCacheKey() {
        return 'Progress';
    },
    computed: {
        style: function style() {
            var location = this.progress.options.location;
            var style = {
                'background-color': this.progress.options.canSuccess ? this.progress.options.color : this.progress.options.failedColor,
                'opacity': this.progress.options.show ? 1 : 0
            };
            if (location == 'top' || location == 'bottom') {
                location === 'top' ? style.top = '0px' : style.bottom = '0px';
                if (!this.progress.options.inverse) {
                    style.left = '0px';
                } else {
                    style.right = '0px';
                }
                style.width = this.progress.percent + '%';
                style.height = this.progress.options.thickness;
                style.transition = "width " + this.progress.options.transition.speed + ", opacity " + this.progress.options.transition.opacity;
            } else if (location == 'left' || location == 'right') {
                location === 'left' ? style.left = '0px' : style.right = '0px';
                if (!this.progress.options.inverse) {
                    style.bottom = '0px';
                } else {
                    style.top = '0px';
                }
                style.height = this.progress.percent + '%';
                style.width = this.progress.options.thickness;
                style.transition = "height " + this.progress.options.transition.speed + ", opacity " + this.progress.options.transition.opacity;
            }
            return style;
        },
        progress: function progress() {
            if (inBrowser) {
                return window.VueProgressBarEventBus.RADON_LOADING_BAR;
            } else {
                return {
                    percent: 0,
                    options: {
                        canSuccess: true,
                        show: false,
                        color: 'rgb(19, 91, 55)',
                        failedColor: 'red',
                        thickness: '2px',
                        transition: {
                            speed: '0.2s',
                            opacity: '0.6s'
                        },
                        location: 'top',
                        autoRevert: true,
                        inverse: false
                    }
                };
            }
        }
    }
};

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//
//
//
//
//

exports.default = {

  name: 'PulseLoader',

  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#5dc596'
    },
    size: {
      type: String,
      default: '15px'
    },
    margin: {
      type: String,
      default: '2px'
    },
    radius: {
      type: String,
      default: '100%'
    }
  },
  data: function data() {
    return {
      spinnerStyle: {
        backgroundColor: this.color,
        width: this.size,
        height: this.size,
        margin: this.margin,
        borderRadius: this.radius,
        display: 'inline-block',
        animationName: 'v-pulseStretchDelay',
        animationDuration: '0.75s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'cubic-bezier(.2,.68,.18,1.08)',
        animationFillMode: 'both'
      },
      spinnerDelay1: {
        animationDelay: '0.12s'
      },
      spinnerDelay2: {
        animationDelay: '0.24s'
      },
      spinnerDelay3: {
        animationDelay: '0.36s'
      }
    };
  }
};

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; //
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

var _vueRecaptcha = __webpack_require__(439);

var _vueRecaptcha2 = _interopRequireDefault(_vueRecaptcha);

var _PulseLoader = __webpack_require__(414);

var _PulseLoader2 = _interopRequireDefault(_PulseLoader);

var _vuex = __webpack_require__(51);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    VueRecaptcha: _vueRecaptcha2.default,
    PulseLoader: _PulseLoader2.default
  },
  props: {
    loading: {
      type: Boolean,
      default: true
    },
    color: {
      type: String,
      default: '#5dc596'
    },
    size: {
      type: String,
      default: '15px'
    },
    margin: {
      type: String,
      default: '0 auto'
    },
    radius: {
      type: String,
      default: '100%'
    }
  },
  data: function data() {
    return {
      loginState: false,
      signState: true,
      userid: '',
      password: '',
      username: '',
      studentcode: '',
      loginResult: '',
      userToken: '',
      userRating: '',
      linkInfo: '',
      scrolled: false,
      scrollMenu: false,
      solveMenu: false,
      on: false,
      infoSubmit: false,
      userCount: 0,
      opts: {
        sitekey: '6LejvBgUAAAAAE_F7SjXLPzPiyroAqAdXvBhk7IG'
      }
    };
  },
  mounted: function mounted() {
    console.log('ss');
  },

  computed: {
    loadingState: function loadingState() {
      return this.$store.state.loadingState;
    }
  },
  created: function created() {
    var _this = this;

    this.$router.beforeEach(function (to, from, next) {
      if (to.meta.progress !== undefined) {
        var meta = to.meta.progress;
        _this.$Progress.parseMeta(meta);
      }
      _this.$store.dispatch('loadingOn');
      _this.$Progress.start();
      next();
    });
    this.$Progress.finish();
    var ROOT_URL = 'https://algorithm.ayanami.kr/api';
    this.$http.defaults.baseURL = ROOT_URL;
    //      토큰 테스트
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken != null) {
      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('users/my-info').then(function (resInfo) {
        _this.userRating = resInfo.data.user.rating;
        _this.username = resInfo.data.user.username;
        _this.loginState = true;
      }).catch(function (error) {
        _this.$swal({
          title: '유저 조회 실패',
          text: error,
          type: 'error'
        });
      });
    }
    window.addEventListener('scroll', this.scrollFunction);
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.scrollFunction);
  },

  methods: _extends({}, (0, _vuex.mapActions)(['loadingOn', 'loadingOff']), {
    scrollFunction: function scrollFunction() {
      this.scrolled = window.scrollY;
      if (this.scrolled > 200) {
        this.scrollMenu = true;
      } else {
        this.scrollMenu = false;
      }
    },
    problemLoginCheck: function problemLoginCheck() {
      if (this.$cookie.get('userToken') == null) {
        this.$swal('입장 불가', '로그인을 하셨나요?', 'error');
      } else {
        this.$router.push({
          name: 'problems'
        });
      }
    },
    rankLoginCheck: function rankLoginCheck() {
      if (this.$cookie.get('userToken') == null) {
        this.$swal('입장 불가', '로그인을 하셨나요?', 'error');
      } else {
        this.$router.push({
          name: 'rank'
        });
      }
    },
    cookieDel: function cookieDel() {
      // 쿠키 삭제
      this.$cookie.delete('userToken');
      this.$cookie.delete('userRating');
      this.$cookie.delete('userName');
    },
    isNumber: function isNumber(number) {
      var evt = number || window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
        return false;
      }
      return true;
    },
    logout: function logout() {
      this.$swal({
        title: '로그아웃합니다',
        text: '이 상자는 2초후에 사라집니다',
        timer: 2000
      });
      this.cookieDel();
      this.$router.push({
        name: 'index'
      });
      this.loginState = false;
    },

    // 폼 모달
    openModal: function openModal() {
      $('.ui.modal').modal('show');
    },
    closeModal: function closeModal() {
      $('.ui.modal').modal('hide');
    },
    onloadCallback: function onloadCallback() {
      alert('grecaptcha is ready!');
    },
    onVerify: function onVerify(response) {
      console.log('Verify:  + ' + response);
    },
    onExpired: function onExpired() {
      console.log('Expired');
    },
    resetRecaptcha: function resetRecaptcha() {
      this.$refs.recaptcha.reset(); // Direct call reset method
    },
    submit: function submit() {
      var _this2 = this;

      var errMsg = void 0;
      if (this.signState === true) {
        this.$http.post('users/signin', {
          userid: this.userid,
          password: this.password
        }).then(function (resSign) {
          _this2.userToken = resSign.data.token;
          _this2.$http.defaults.headers.common.Authorization = _this2.userToken;
          // 헤더 토큰 등록
          _this2.$http.get('users/my-info')
          // 로그인 성공
          .then(function (resInfo) {
            if (resInfo.status === 200) {
              _this2.loginState = true;
              _this2.username = resInfo.data.user.username;
              _this2.closeModal();
              _this2.loginState = true;
              _this2.userRating = resInfo.data.user.rating;
              // Cookie : 이름 , 내용 , 만료기간 , 도메인
              _this2.$cookie.set('userToken', _this2.userToken, 1);
              // 쿠키 값 출력
              _this2.$swal('로그인 성공', '안녕하세요!', 'success');
            }
          })
          // 토큰인증 실패
          .catch(function (err) {
            _this2.closeModal();
            _this2.$swal({
              title: '로그인 실패',
              text: err,
              type: 'error'
            });
          });
        }).catch(function (err) {
          if (err.response.data.message === 'account false') {
            errMsg = '관리자의 승인을 기다려주세요';
          } else if (err.response.data.message === 'login fail') {
            errMsg = '아이디 또는 비밀번호가 잘못되었습니다';
          } else if (err.response.data.message === 'validation error') {
            errMsg = '정보를 모두 입력해주세요';
          } else if (err.response.data.message === 'fail rating excess') {
            errMsg = '5회 이상 틀려 확인정보를 입력해 주세요';
            _this2.infoSubmit = true;
          }
          _this2.$swal({
            title: '로그인 실패',
            text: errMsg,
            type: 'error'
          }).then(function () {
            if (_this2.infoSubmit === true) {
              _this2.failReset();
              _this2.infoSubmit = '';
            }
          });
        });
      } else {
        // 회원가입
        this.$http.post('users/signup', {
          username: this.username,
          userid: this.userid,
          password: this.password,
          studentcode: this.studentcode
        }).then(function (resRegister) {
          _this2.closeModal();
          var username = resRegister.data.username;
          _this2.$swal({
            title: '회원가입 성공',
            text: '\uC548\uB155\uD558\uC138\uC694 ' + username + '\uB2D8',
            type: 'success'
          });
        }).catch(function (error) {
          _this2.closeModal();
          if (error.response.data.message === 'validation error') {
            errMsg = '정보를 제대로 기입해주세요';
          }
          _this2.$swal({
            title: '회원가입 실패',
            text: errMsg,
            type: 'error'
          });
        });
      }
    },
    failReset: function failReset() {
      var _this3 = this;

      this.$swal.setDefaults({
        input: 'text',
        confirmButtonText: '다음',
        cancelButtonText: '취소',
        showCancelButton: true,
        animation: true,
        progressSteps: ['1', '2', '3']
      });
      var steps = ['아이디를 입력해주세요', '이름을 입력해주세요', '학번을 입력해주세요'];
      this.$swal.queue(steps).then(function (result) {
        _this3.$swal.resetDefaults();
        _this3.$http.post('users/failReset', {
          userid: result[0],
          username: result[1],
          studentcode: result[2]
        }).then(function () {
          _this3.$swal({
            title: '확인 완료되었습니다',
            text: '다시 로그인 해주세요',
            type: 'success'
          });
        }).catch(function () {
          _this3.$swal({
            title: '확인 실패하였습니다',
            text: '다시 시도해주세요',
            type: 'error'
          }).then(function () {
            _this3.failReset();
          });
        });
      });
    }
  })
};

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _member = __webpack_require__(395);

var _member2 = _interopRequireDefault(_member);

var _problemmange = __webpack_require__(398);

var _problemmange2 = _interopRequireDefault(_problemmange);

var _noticemanage = __webpack_require__(397);

var _noticemanage2 = _interopRequireDefault(_noticemanage);

var _nonaccount = __webpack_require__(396);

var _nonaccount2 = _interopRequireDefault(_nonaccount);

var _problemresult = __webpack_require__(399);

var _problemresult2 = _interopRequireDefault(_problemresult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'admin',
  components: {
    member: _member2.default,
    problemmanage: _problemmange2.default,
    notice: _noticemanage2.default,
    nonaccount: _nonaccount2.default,
    problemresult: _problemresult2.default
  },
  data: function data() {
    return {
      entering: false,
      memberState: true,
      nonaccountState: false,
      problemState: false,
      listState: false,
      adminState: false,
      problemresultState: false,
      userRating: '',
      members: [],
      problems: [],
      notice: [],
      userToken: ''
    };
  },
  updated: function updated() {
    this.$Progress.finish();
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    //          토큰 테스트
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken != null) {
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('users/my-info').then(function (resInfo) {
        _this.userRating = resInfo.data.user.rating;
        if (_this.userRating === 1) {
          _this.$swal({
            title: '입장 실패',
            text: '어드민이 아닙니다',
            type: 'error'
          }).then(function () {
            location.href = '/';
          });
        } else {
          _this.adminState = true;
          _this.entering = true;
        }
      }).catch(function (error) {
        _this.$swal({
          title: '유저 정보 조회 실패',
          text: error,
          type: 'error'
        }).then(function () {
          location.href = '/';
        });
      });
    } else {
      this.$swal({
        title: '입장 실패',
        text: '로그인을 해주세요',
        type: 'error'
      }).then(function () {
        location.href = '/';
      });
    }
  },

  methods: {
    click_problem: function click_problem() {
      this.memberState = false;
      this.problemState = true;
      this.listState = false;
      this.nonaccountState = false;
      this.problemresultState = false;
    },
    click_member: function click_member() {
      this.memberState = true;
      this.problemState = false;
      this.listState = false;
      this.nonaccountState = false;
      this.problemresultState = false;
    },
    click_nonaccount: function click_nonaccount() {
      this.nonaccountState = true;
      this.memberState = false;
      this.problemState = false;
      this.listState = false;
      this.problemresultState = false;
    },
    click_list: function click_list() {
      this.memberState = false;
      this.problemState = false;
      this.listState = true;
      this.nonaccountState = false;
      this.problemresultState = false;
    },
    click_result: function click_result() {
      this.memberState = false;
      this.problemState = false;
      this.listState = false;
      this.nonaccountState = false;
      this.problemresultState = true;
    }
  }
}; //
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

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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


exports.default = {
  data: function data() {
    return {
      members: [],
      enteringMember: false
    };
  },
  created: function created() {
    //토큰테스트
    this.getMember();
  },
  beforeCreate: function beforeCreate() {
    this.$Progress.start();
  },
  updated: function updated() {
    this.$Progress.finish();
  },

  methods: {
    deleteuser: function deleteuser(userid, member) {
      var _this = this;

      this.$swal({
        title: '유저 삭제',
        text: '정말로 삭제하시겠습니까?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소'
      }).then(function () {
        _this.$http.delete('users/' + userid).then(function () {
          _this.$swal({
            title: '삭제 완료',
            text: userid + ' \uB2D8\uC758 \uACC4\uC815\uC774 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4',
            type: 'success'
          });
          _this.members.splice(_this.members.indexOf(member), 1);
        }).catch(function (err) {
          _this.$swal({
            title: '삭제 실패',
            text: err,
            type: 'error'
          });
        });
      }).catch(function () {
        _this.$swal({
          title: '삭제 실패',
          text: err,
          type: 'error'
        });
      });
    },

    //            문제리스트
    getMember: function getMember() {
      var _this2 = this;

      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('users').then(function (res) {
        var i = 0;
        while (i < res.data.users.length) {
          _this2.members.push({
            userid: res.data.users[i].userId,
            username: res.data.users[i].username,
            studentcode: res.data.users[i].studentCode,
            score: res.data.users[i].score
          });
          i += 1;
        }
        _this2.enteringMember = true;
      }).catch(function (err) {
        _this2.$swal({
          title: '유저 로드 실패',
          text: err,
          type: 'error'
        });
      });
    }
  }
};

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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


exports.default = {
  data: function data() {
    return {
      members: [],
      enteringNon: false
    };
  },
  created: function created() {
    this.userToken = this.$cookie.get('userToken');
    console.log(this.userToken);
    this.getMember();
  },
  beforeCreate: function beforeCreate() {
    this.$Progress.start();
  },
  updated: function updated() {
    this.$Progress.finish();
  },

  methods: {
    account: function account(userid, member) {
      var _this = this;

      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('users/account/' + userid).then(function (res) {
        console.log(res);
        _this.$swal({
          title: '승인 완료',
          text: userid + '\uB2D8\uC744 \uC2B9\uC778\uD558\uC600\uC2B5\uB2C8\uB2E4',
          type: 'success'
        });
        _this.members.splice(_this.members.indexOf(member), 1);
      });
    },
    deletenonuser: function deletenonuser(userid, member) {
      var _this2 = this;

      this.$swal({
        title: '유저 삭제',
        text: '정말로 삭제하시겠습니까?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소'
      }).then(function () {
        _this2.$http.delete('users/' + userid).then(function () {
          _this2.$swal({
            title: '삭제 완료',
            text: userid + '\uB2D8\uC758 \uACC4\uC815\uC774 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4',
            type: 'success'
          });
          _this2.members.splice(_this2.members.indexOf(member), 1);
        }).catch(function (err) {
          _this2.$swal({
            title: '삭제 실패',
            text: err,
            type: 'error'
          });
        });
      }).catch(function () {
        _this2.$swal({
          title: '삭제 실패',
          text: err,
          type: 'error'
        });
      });
    },
    getMember: function getMember() {
      var _this3 = this;

      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('users/non-account').then(function (res) {
        var i = 0;
        while (i < res.data.users.length) {
          _this3.members.push({
            userid: res.data.users[i].userId,
            username: res.data.users[i].username,
            studentcode: res.data.users[i].studentCode,
            rating: res.data.users[i].rating,
            account: res.data.users[i].account
          });
          i += 1;
        }
        _this3.enteringNon = true;
      });
    }
  }
};

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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


exports.default = {
  name: 'noticemanage',
  data: function data() {
    return {
      noticeAddState: false,
      noticeMsg: '공지 등록하기',
      name: '',
      num: '',
      content: '',
      type: 'notice',
      noticeList: [],
      noticeModify: false,
      lastNotice: 0,
      enteringNoticemanage: false
    };
  },
  created: function created() {
    this.loadNotice();
  },
  beforeCreate: function beforeCreate() {
    this.$Progress.start();
  },
  updated: function updated() {
    this.$Progress.finish();
  },

  methods: {
    modify: function modify() {
      var _this = this;

      this.$http.put('notices', {
        num: this.num,
        noticeName: this.name,
        contents: this.content,
        type: this.type
      }).then(function () {
        _this.$swal({
          title: '수정 성공',
          text: '공지를 수정하였습니다',
          type: 'success'
        });
      }).catch(function (err) {
        var errMsgs = void 0;
        if (err.response.data.message === 'validation error') {
          errMsgs = '모든 정보를 입력해주세요';
        }
        _this.$swal({
          title: '수정 실패',
          text: errMsgs,
          type: 'error'
        });
      });
    },
    noticeAdd: function noticeAdd() {
      this.noticeAddState = !this.noticeAddState;
      if (this.noticeAddState) {
        this.noticeMsg = '닫기';
      } else {
        this.noticeMsg = '공지 등록하기';
      }
    },
    modifyNotice: function modifyNotice(num) {
      var _this2 = this;

      this.$http.get('notices/' + num).then(function (res) {
        _this2.noticeModify = !_this2.noticeModify;
        _this2.num = res.data.notice.num;
        _this2.name = res.data.notice.noticeName;
        _this2.content = res.data.notice.contents;
        _this2.type = res.data.notice.type;
      }).catch(function (err) {
        _this2.$swal({
          title: '공지 조회 실패',
          text: err,
          type: 'error'
        });
      });
    },
    deleteNotice: function deleteNotice(num, notice) {
      var _this3 = this;

      this.$swal({
        title: '공 삭제',
        text: '정말로 삭제하시겠습니까?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소'
      }).then(function () {
        _this3.$http.delete('notices/' + num).then(function () {
          _this3.$swal({
            title: '삭제 완료',
            test: num + '\uBC88 \uACF5\uC9C0\uB97C \uC0AD\uC81C\uD558\uC168\uC2B5\uB2C8\uB2E4',
            type: 'success'
          });
          _this3.noticeList.splice(_this3.noticeList.indexOf(notice), 1);
        }).catch(function (err) {
          _this3.$swal({
            title: '삭제 실패',
            text: err,
            type: 'error'
          });
        });
      }).catch(function () {
        _this3.$swal({
          title: '삭제 실패',
          text: err,
          type: 'error'
        });
      });
    },
    loadNotice: function loadNotice() {
      var _this4 = this;

      this.$http.get('notices').then(function (res) {
        var i = 0;
        while (i < res.data.notices.length) {
          _this4.noticeList.push({
            name: res.data.notices[i].noticeName,
            content: res.data.notices[i].contents,
            type: res.data.notices[i].type,
            num: res.data.notices[i].num
          });
          _this4.lastNotice = res.data.notices[i].num;
          i += 1;
        }
        _this4.enteringNoticemanage = true;
      }).catch(function (err) {
        _this4.$swal({
          title: '공지 로드 실패',
          text: err.response.data.message,
          type: 'error'
        });
      });
    },
    addNotice: function addNotice() {
      var _this5 = this;

      console.log('add');
      this.$http.post('notices', {
        noticename: this.name,
        contents: this.content,
        type: this.type
      }).then(function () {
        _this5.$swal('등록 성공', '공지를 등록하였습니다', 'success');
        _this5.noticeList.push({
          num: _this5.lastNotice + 1,
          name: _this5.name,
          content: _this5.content,
          type: _this5.type
        });
      }).catch(function (err) {
        var errMsg = void 0;
        if (err.response.data.message === 'validation error') {
          errMsg = '정보를 모두 입력해주세요';
        }
        _this5.$swal({
          title: '등록 실패',
          text: errMsg,
          type: 'error'
        });
      });
    }
  }
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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


exports.default = {
  data: function data() {
    return {
      items: [],
      problemData: [],
      solveList: [],
      problemName: '',
      problemNum: '',
      source: '',
      explanation: '',
      inputExample: '',
      inputExample2: '',
      outputExample: '',
      outputExample2: '',
      timeLimit: '',
      memoryLimit: '',
      score: '',
      addState: false,
      addMsg: '문제 등록하기',
      modifyState: false,
      lastNum: 0,
      problemType: 'normal',
      enteringProblemmanage: false
    };
  },
  created: function created() {
    //토큰테스트
    this.userToken = this.$cookie.get('userToken');
    this.$http.defaults.headers.common.Authorization = this.userToken;
    this.fetchData();
  },
  beforeCreate: function beforeCreate() {
    this.$Progress.start();
  },
  updated: function updated() {
    this.$Progress.finish();
  },

  methods: {
    openAdd: function openAdd() {
      this.addState = !this.addState;
      if (this.addState) {
        this.addMsg = '닫기';
      } else {
        this.addMsg = '문제 등록하기';
      }
    },
    deleteData: function deleteData(num, item) {
      var _this = this;

      this.$swal({
        title: '문제 삭제',
        text: '정말로 삭제하시겠습니까?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소'
      }).then(function () {
        _this.userToken = _this.$cookie.get('userToken');
        _this.$http.defaults.headers.common.Authorization = _this.userToken;
        _this.$http.delete('problems/' + num).then(function () {
          _this.$swal({
            title: '삭제 완료',
            text: num + '\uBC88 \uBB38\uC81C\uB97C \uC0AD\uC81C\uD558\uC168\uC2B5\uB2C8\uB2E4',
            type: 'success'
          });
          _this.items.splice(_this.items.indexOf(item), 1);
        }).catch(function (err) {
          _this.$swal({
            title: '삭제 실패',
            text: err,
            type: 'error'
          });
        });
      }).catch(function () {
        _this.$swal({
          title: '삭제 실패',
          text: err,
          type: 'error'
        });
      });
    },
    modify: function modify() {
      var _this2 = this;

      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.put('problems', {
        problemnum: this.problemNum,
        problemname: this.problemName,
        source: this.source,
        explanation: this.explanation,
        inputexample: this.inputExample,
        inputexample2: this.inputExample2,
        outputexample: this.outputExample,
        outputexample2: this.outputExample2,
        timelimit: this.timeLimit,
        memorylimit: this.memoryLimit,
        score: this.score,
        type: this.type
      }).then(function () {
        _this2.$swal({
          title: '수정 성공',
          text: '문제를 수정하였습니다',
          type: 'success'
        });
      }).catch(function (err) {
        var errMsgs = void 0;
        if (err.response.data.message === 'validation error') {
          errMsgs = '모든 정보를 입력해주세요';
        }
        _this2.$swal({
          title: '수정 실페',
          text: errMsgs,
          type: 'error'
        });
      });
    },
    modifyData: function modifyData(num) {
      var _this3 = this;

      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('problems/' + num).then(function (res) {
        _this3.modifyState = !_this3.modifyState;
        _this3.problemName = res.data.problem.problemName;
        _this3.source = res.data.problem.source;
        _this3.inputExample = res.data.problem.problemData.inputExample;
        _this3.inputExample2 = res.data.problem.problemData.inputExample2;
        _this3.outputExample = res.data.problem.problemData.outputExample;
        _this3.outputExample2 = res.data.problem.problemData.outputExample2;
        _this3.memoryLimit = res.data.problem.problemData.memoryLimit;
        _this3.timeLimit = res.data.problem.problemData.memoryLimit;
        _this3.problemNum = res.data.problem.num;
        _this3.score = res.data.problem.score;
        _this3.explanation = res.data.problem.explanation;
        _this3.type = res.data.problem.type;
      }).catch(function (err) {
        _this3.$swal({
          title: '문제 조회 실패',
          text: err,
          type: 'error'
        });
      });
    },
    solveListData: function solveListData(num) {
      var _this4 = this;

      this.solveList = [];
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('solution').then(function (res) {
        var i = 0;
        var username = void 0;
        var id = void 0;
        var studentcode = void 0;
        var result = void 0;
        var date = void 0;
        var code = void 0;
        while (i < res.data.resolves.length) {
          if (res.data.resolves[i].resolveData.problemNum === num) {
            id = res.data.resolves[i].userId;
            result = res.data.resolves[i].resolveData.result;
            date = res.data.resolves[i].resolveData.date;
            code = res.data.resolves[i].resolveData.code;
            _this4.$http.defaults.headers.common.Authorization = _this4.userToken;
            _this4.$http.get('users/search/' + id).then(function (userInfo) {
              username = userInfo.data.users.username;
              studentcode = userInfo.data.users.studentCode;
              _this4.solveList.push({
                username: username,
                studentcode: studentcode,
                result: result,
                date: date,
                code: code
              });
            });
          }
          i += 1;
        }
      }).catch(function (err) {
        _this4.$swal({
          title: '결과 로드 실패',
          text: err,
          type: 'error'
        });
      });
    },
    isNumber: function isNumber(number) {
      var evt = number || window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
        return false;
      }
      return true;
    },
    add: function add() {
      var _this5 = this;

      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.post('problems', {
        type: this.problemType,
        problemname: this.problemName,
        source: this.source,
        explanation: this.explanation,
        inputexample: this.inputExample,
        inputexample2: this.inputExample2,
        outputexample: this.outputExample,
        outputexample2: this.outputExample2,
        timelimit: this.timeLimit,
        memorylimit: this.memoryLimit,
        score: this.score
      }).then(function () {
        _this5.$swal('등록 성공', '문제를 등록하였습니다', 'success');
        _this5.items.push({
          num: _this5.lastNum + 1,
          name: _this5.problemName,
          source: _this5.source
        });
      }).catch(function (err) {
        var errMsg = void 0;
        if (err.response.data.message === 'validation error') {
          errMsg = '정보가 부족합니다';
        }
        _this5.$swal({
          title: '등록 실패',
          text: errMsg,
          type: 'error'
        });
      });
    },
    fetchData: function fetchData() {
      var _this6 = this;

      //토큰테스트
      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('problems').then(function (res) {
        var i = 0;
        while (i < res.data.problems.length) {
          _this6.items.push({
            num: res.data.problems[i].num,
            name: res.data.problems[i].problemName,
            source: res.data.problems[i].source
          });
          _this6.lastNum = res.data.problems[i].num;
          i += 1;
        }
        _this6.enteringProblemmanage = true;
      }).catch(function (err) {
        _this6.$swal({
          title: '문제 로드 실패',
          text: err,
          type: 'error'
        });
      });
    }
  }
};

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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


exports.default = {
  data: function data() {
    return {
      problemData: [],
      ratioData: [],
      enteringProblemresult: false
    };
  },
  created: function created() {
    this.ratio();
  },
  beforeCreate: function beforeCreate() {
    this.$Progress.start();
  },
  updated: function updated() {
    this.$Progress.finish();
  },

  methods: {
    ratio: function ratio() {
      var _this = this;

      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('solution').then(function (res) {
        var i = 0;
        while (i < res.data.resolves.length) {
          var date = res.data.resolves[i].resolveData.date.replace('T', ', ');
          _this.problemData.push({
            userid: res.data.resolves[i].userId,
            code: res.data.resolves[i].resolveData.code,
            date: date.substring(0, date.length - 8),
            lang: res.data.resolves[i].resolveData.language,
            memory: res.data.resolves[i].resolveData.memory,
            num: res.data.resolves[i].resolveData.problemNum,
            result: res.data.resolves[i].resolveData.result,
            time: res.data.resolves[i].resolveData.time
          });
          _this.ratioData.push(_defineProperty({}, i, res.data.resolves[i].resolveData.problemNum));
          i += 1;
        }
        _this.enteringProblemresult = true;
      }).catch(function (err) {
        _this.$swal({
          title: '문제 결과 로드 실패',
          text: err,
          type: 'error'
        });
      });
    }
  }
};

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _timeline = __webpack_require__(402);

var _timeline2 = _interopRequireDefault(_timeline);

var _main = __webpack_require__(401);

var _main2 = _interopRequireDefault(_main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

exports.default = {
  name: 'index',
  components: {
    parallax: _main2.default,
    timeline: _timeline2.default
  },
  data: function data() {
    return {};
  },
  beforeCreate: function beforeCreate() {
    this.loadState = true;
    this.$Progress.start();
  },
  mounted: function mounted() {
    this.loadState = false;
    this.$Progress.finish();
  }
};

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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
//
//
//
//
//
//
//

exports.default = {
  name: 'parallax',
  data: function data() {
    return {
      swiperOption: {
        parallax: true,
        speed: 600,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
      }
    };
  }
};

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {
  name: 'sigo',
  data: function data() {
    return {};
  },
  created: function created() {}
};

/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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
//
//
//
//
//
//
//

exports.default = {
    name: 'index',
    data: function data() {
        return {
            userToken: '',
            userid: '',
            username: '',
            studentcode: '',
            successCount: 0,
            recentProblem: [],
            entering: false
        };
    },
    updated: function updated() {
        this.$Progress.finish();
    },
    beforeCreate: function beforeCreate() {
        var _this = this;

        //          토큰 테스트
        this.userToken = this.$cookie.get('userToken');
        if (this.userToken != null) {
            this.userToken = this.$cookie.get('userToken');
            this.$http.defaults.headers.common.Authorization = this.userToken;
            this.$http.get('users/my-info').then(function (resInfo) {
                _this.userid = resInfo.data.user.userId;
                _this.username = resInfo.data.user.username;
                _this.studentcode = resInfo.data.user.studentCode;
                _this.$http.get('solution/resultsuccess/' + userid).then(function (res) {
                    console.log(res);
                    _this.entering = true;
                }).catch(function (err) {
                    _this.$swal({
                        title: '문제 정답 로드 실패',
                        text: err,
                        type: 'error'
                    });
                });
            }).catch(function (error) {
                _this.$swal({
                    title: '유저 조회 실패',
                    text: error,
                    type: 'error'
                }).then(function () {
                    location.href = '/';
                });
            });
        } else {
            this.$swal({
                title: '입장 실패',
                text: '로그인을 해주세요',
                type: 'error'
            }).then(function () {
                location.href = '/';
            });
        }
    }
};

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
//
//
//
//
//

exports.default = {
  data: function data() {
    return {};
  }
};

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vuex = __webpack_require__(51);

exports.default = {
  name: 'notice',
  data: function data() {
    return {
      notices: [],
      entering: false
    };
  },
  updated: function updated() {
    this.$store.dispatch('loadingOff');
    console.log(this.$store.state.loadingState);
    this.$Progress.finish();
  },
  created: function created() {
    var _this = this;

    this.$http.get('notices').then(function (res) {
      var i = 0;
      while (i < res.data.notices.length) {
        var date = res.data.notices[i].date.replace('T', ', ');
        date = date.substring(0, date.length - 8);
        if (res.data.notices[i].type === 'notice') {
          _this.notices.push({
            num: res.data.notices[i].num,
            noticename: res.data.notices[i].noticeName,
            date: date
          });
        }
        i += 1;
      }
      _this.entering = true;
    }).catch(function (err) {
      alert(err);
    });
  },

  methods: {
    open: function open(num) {
      this.$router.push({
        path: 'notices/' + num
      });
    }
  }
}; //
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

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

exports.default = {
  name: 'openNotice',
  data: function data() {
    return {
      num: '',
      name: '',
      contents: '',
      date: '',
      entering: false
    };
  },
  updated: function updated() {
    this.$Progress.finish();
  },
  created: function created() {
    var _this = this;

    var num = this.$route.params.num;
    console.log(num);
    this.$http.get('notices/' + num).then(function (res) {
      _this.num = res.data.notice.num;
      _this.name = res.data.notice.noticeName;
      _this.contents = res.data.notice.contents;
      _this.date = res.data.notice.date.replace('T', ', ');
      _this.date = _this.date.substring(0, _this.date.length - 8);
      _this.entering = true;
    }).catch(function (err) {
      console.log(err);
    });
  }
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var i = 0;
var end = 10;
var length = void 0;
exports.default = {
  name: 'index',
  data: function data() {
    return {
      test: 'test',
      items: [],
      loadState: true,
      entering: false,
      lineheight: ''
    };
  },
  updated: function updated() {
    this.$Progress.finish();
  },
  created: function created() {
    var _this = this;

    i = 0;
    end = 10;
    //토큰테스트
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken != null) {
      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('users/my-info').then(function (resInfo) {
        _this.userid = resInfo.data.user.userId;
        _this.$http.defaults.headers.common.Authorization = _this.userToken;
        _this.$http.get('problems').then(function (res) {
          length = res.data.problems.length;
          //문제 결과 로드
          _this.$http.defaults.headers.common.Authorization = _this.userToken;
          _this.$http.get('solution').then(function (resRatio) {
            //문제 개수 반복
            if (length < 10) {
              end = length;
            }
            while (i < end) {
              var num = res.data.problems[i].num;
              var name = res.data.problems[i].problemName;
              var source = res.data.problems[i].source;
              var score = res.data.problems[i].score;
              var count = 0;
              var success = 0;
              var fail = 0;
              var ratio = 0;
              var j = 0;
              //문제 결과 수 반복
              while (j < resRatio.data.resolves.length) {
                //문제 번호 === 문제 결과 번호
                if (i === resRatio.data.resolves[j].resolveData.problemNum) {
                  //문제 결과 카운트
                  if (resRatio.data.resolves[j].resolveData.result === 'success') {
                    success += 1;
                  } else {
                    fail += 1;
                  }
                  count += 1;
                }
                j += 1;
              }
              //결과 수정
              ratio = success / count;
              if (isNaN(ratio)) {
                ratio = 0 + ' %';
              } else if (ratio === 0) {
                ratio = 0 + ' %';
              } else if (ratio !== 0) {
                ratio = parseInt(ratio * 100, 10) + ' %';
              }
              _this.lineheight = 55 * i;
              _this.items.push({
                num: num,
                name: name,
                source: source,
                score: score,
                success: success,
                fail: fail,
                count: count,
                ratio: ratio
              });
              i += 1;
            }
            _this.entering = true;
          }).catch(function (err) {
            _this.$swal({
              title: '문제 기록 로드 실패',
              text: err,
              type: 'error'
            }).then(function () {
              location.href = '/';
            });
          });
        }).catch(function (err) {
          _this.$swal({
            title: '문제 로드 실패',
            text: err,
            type: 'error'
          }).then(function () {
            location.href = '/';
          });
        });
      }).catch(function (error) {
        _this.$swal({
          title: '입장 실패',
          text: '유저 조회 실패',
          type: 'error'
        }).then(function () {
          location.href = '/';
        });
      });
    } else {
      this.$swal({
        title: '입장 실패',
        text: '로그인을 해주세요',
        type: 'error'
      }).then(function () {
        location.href = '/';
      });
    }
  },

  methods: {
    shuffle: function shuffle() {
      this.items = _.shuffle(this.items);
    },
    loadList: function loadList() {
      var _this2 = this;

      //문제 로드
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('problems').then(function (res) {
        i = end;
        end += 10;
        if (i / 10 === parseInt(length / 10, 10)) {
          end = length;
          _this2.loadState = false;
        } else if (end === length) {
          _this2.loadState = false;
        }
        //문제 결과 로드
        _this2.$http.defaults.headers.common.Authorization = _this2.userToken;
        _this2.$http.get('solution').then(function (resRatio) {
          //문제 개수 반복
          while (i < end) {
            var num = res.data.problems[i].num;
            var name = res.data.problems[i].problemName;
            var source = res.data.problems[i].source;
            var score = res.data.problems[i].score;
            var count = 0;
            var success = 0;
            var fail = 0;
            var ratio = 0;
            var j = 0;
            //문제 결과 수 반복
            while (j < resRatio.data.resolves.length) {
              //문제 번호 === 문제 결과 번호
              if (i === resRatio.data.resolves[j].resolveData.problemNum) {
                //문제 결과 카운트
                if (resRatio.data.resolves[j].resolveData.result === 'success') {
                  success += 1;
                } else {
                  fail += 1;
                }
                count += 1;
              }
              j += 1;
            }
            //결과 수정
            ratio = success / count;
            if (isNaN(ratio)) {
              ratio = 0 + ' %';
            } else if (ratio === 0) {
              ratio = 0 + ' %';
            } else {
              ratio = ratio.toString().substring(2, 4) + ' %';
            }
            _this2.lineheight = 55 * i;
            _this2.items.push({
              num: num,
              name: name,
              source: source,
              score: score,
              success: success,
              fail: fail,
              count: count,
              ratio: ratio
            });
            i += 1;
          }
        }).catch(function (err) {
          _this2.$swal({
            title: '문제 기록 로드 실패',
            text: err,
            type: 'error'
          }).then(function () {
            location.href = '/';
          });
        });
      }).catch(function (err) {
        _this2.$swal({
          title: '문제 로드 실패',
          text: err,
          type: 'error'
        }).then(function () {
          location.href = '/';
        });
      });
    },
    result: function result(num) {
      var _this3 = this;

      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('solution/findsuccess/' + this.userid + '/' + num).then(function (resresult) {
        if (resresult.data.result === true) {
          _this3.$swal('입장 실패', '이미 푼 문제입니다', 'warning');
        } else {
          _this3.$router.push({
            path: 'problems/' + num
          });
        }
      }).catch(function (err) {
        _this3.$swal('결과 조회 실패', err, 'error');
      });
    }
  }
};

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueMonacoEditor = __webpack_require__(437);

var _vueMonacoEditor2 = _interopRequireDefault(_vueMonacoEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'solve',
  components: {
    MonacoEditor: _vueMonacoEditor2.default
  },
  data: function data() {
    return {
      userid: '',
      urlParams: '',
      items: [],
      lang: 'c',
      printf: null,
      scanf: null,
      codeResult: '',
      compileResult: '',
      code: 'int main() {\n      //\uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\n}',
      runState: false,
      runMsg: '실행 결과가 이곳에 나타납니다',
      options: {
        selectOnLineNumbers: true,
        cursorBlinking: 'smooth',
        fontSize: 15,
        fontWeight: 'lighter',
        lineHeight: 15,
        mouseWheelScrollSensitivity: 2,
        mouseWheelZoom: true,
        parameterHints: true,
        tabCompletion: true,
        language: this.lang,
        contextmenu: false
      }
    };
  },
  created: function created() {
    var _this = this;

    //      토큰 테스트
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken != null) {
      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('users/my-info').then(function (resInfo) {
        _this.userid = resInfo.data.user.userId;
        var id = _this.$route.params.num;
        _this.$http.defaults.headers.common.Authorization = _this.userToken;
        _this.$http.get('problems/' + id).then(function (res) {
          _this.items.push({
            num: res.data.problem.num,
            name: res.data.problem.problemName,
            source: res.data.problem.source,
            explanation: res.data.problem.explanation,
            inputex: res.data.problem.problemData.inputExample,
            outputex: res.data.problem.problemData.outputExample,
            time: res.data.problem.problemData.timeLimit,
            memorylimit: res.data.problem.problemData.memoryLimit
          });
        });
      }).catch(function (error) {
        _this.$swal({
          title: '유저 조회 실패',
          text: error,
          type: 'error'
        }).then(function () {
          location.href = '/';
        });
      });
    } else {
      this.$swal({
        title: '입장 실패',
        text: '로그인을 해주세요',
        type: 'error'
      }).then(function () {
        location.href = '/';
      });
    }
  },
  destroy: function destroy() {
    this.solveMenu = false;
  },
  updated: function updated() {
    this.$Progress.finish();
  },

  methods: {
    onMounted: function onMounted(editor) {
      this.editor = editor;
    },
    onCodeChange: function onCodeChange(editor) {
      this.code = editor.getValue();
    },
    codeReset: function codeReset() {
      this.editor.setValue('');
      this.code = '';
      this.runMsg = '실행 결과가 이곳에 나타납니다';
      this.codeResult = '';
    },
    codeRun: function codeRun() {
      var _this2 = this;

      if (this.code.replace(/^\s*/, '') === '') {
        this.$swal('컴파일오류', '코드를 입력해주세요', 'error');
        this.runMsg = 'ERROR';
        return;
      }
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.post('solution', {
        userid: this.userid,
        problemnum: this.items[0].num,
        inputcode: this.code,
        name: 'problem',
        lang: this.lang,
        mode: true
      }).then(function (resSubmit) {
        _this2.codeResult = resSubmit.data.result;
        _this2.runMsg = '실행 결과 ';
      }).catch(function (err) {
        if (err.response.data.result === 'compile error') {
          _this2.runMsg = '컴파일 에러';
          _this2.codeResult = err.response.data.message;
        } else if (err.response.data.result === 'error') {
          _this2.runMsg = '에러';
          _this2.codeResult = err.response.data.message;
        }
      });
    },
    codeSubmit: function codeSubmit() {
      var _this3 = this;

      if (this.code.replace(/^\s*/, '') === '') {
        this.$swal('컴파일오류', '코드를 입력해주세요', 'error');
        this.runMsg = 'ERROR';
        return;
      }
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.post('solution', {
        userid: this.userid,
        problemnum: this.items[0].num,
        inputcode: this.code,
        name: 'problem',
        lang: this.lang
      }).then(function (resSubmit) {
        var result = resSubmit.data.result;
        if (result === 'success') {
          _this3.runMsg = 'SUCCESS';
          _this3.$swal({
            title: '정답',
            text: '다른 문제도 풀어보세요',
            type: 'success'
          }).then(function () {
            location.href = '/problems';
          });
        } else {
          _this3.runMsg = 'FAIL';
          _this3.$swal('실패', '다시 도전해 보세요', 'error');
        }
      }).catch(function (err) {
        _this3.$swal({
          title: '문제 제출 실패',
          text: err,
          type: 'error'
        });
      });
    }
  }
}; //
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

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
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

var i = 0;
var end = 10;
var length = void 0;
exports.default = {
  name: 'rank',
  data: function data() {
    return {
      userToken: '',
      data: [],
      loadState: true,
      entering: false,
      ranker: [],
      users: []
    };
  },
  created: function created() {
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken == null) {
      alert('로그인 해주세요');
      location.href = '/';
    }
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    //          토큰 테스트
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken != null) {
      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('users/my-info').then(function (resInfo) {
        _this.userid = resInfo.data.user.userId;
        _this.$http.get('users').then(function (res) {
          i = 0;
          length = res.data.users.length;
          if (length < 10) {
            end = length;
          }
          while (i < length) {
            _this.data.push({
              name: res.data.users[i].username,
              score: res.data.users[i].score
            });
            i += 1;
          }
          var sort = 'score';
          _this.data.sort(function (a, b) {
            return b[sort] - a[sort];
          });
          i = 0;
          while (i < end) {
            _this.users.push({
              name: _this.data[i].name,
              score: _this.data[i].score
            });
            i += 1;
          }
          i = 0;
          while (i < 3) {
            _this.ranker.push({
              name: _this.users[i].name,
              score: _this.users[i].score
            });
            i += 1;
          }
          _this.entering = true;
        }).catch(function (err) {
          _this.$swal({
            title: '유저 정보 조회 실패',
            text: err,
            type: 'error'
          }).then(function () {
            location.href = '/';
          });
        });
      }).catch(function (error) {
        _this.$swal({
          title: '유저 조회 실패',
          text: error,
          type: 'error'
        }).then(function () {
          location.href = '/';
        });
      });
    } else {
      this.$swal({
        title: '입장 실패',
        text: '로그인을 해주세요',
        type: 'error'
      }).then(function () {
        location.href = '/';
      });
    }
  },
  updated: function updated() {
    this.$Progress.finish();
  },

  methods: {
    loadList: function loadList() {
      var _this2 = this;

      this.$http.get('users').then(function (res) {
        i = end;
        end += 10;
        if (i / 10 === parseInt(length / 10, 10)) {
          end = length;
          _this2.loadState = false;
        } else if (end === length) {
          _this2.loadState = false;
        }
        console.log(i);
        console.log(end);
        while (i < end) {
          _this2.users.push({
            name: _this2.data[i].name,
            score: _this2.data[i].score
          });
          i += 1;
        }
      }).catch(function (err) {
        _this2.$swal({
          title: '유저 로드 실패',
          text: err,
          type: 'error'
        }).then(function () {
          location.href = '/';
        });
      });
    }
  }
};

/***/ }),
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 364 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 365 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 366 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 367 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 368 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 369 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 370 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 371 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 372 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 373 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 374 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 375 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 376 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 377 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 378 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 379 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 380 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 381 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 382 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 383 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 384 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 385 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 386 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 387 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(369)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(163),
  /* template */
  __webpack_require__(419),
  /* scopeId */
  "data-v-1fb4ac10",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(377)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(164),
  /* template */
  __webpack_require__(429),
  /* scopeId */
  "data-v-608cdfa9",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(387)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(165),
  /* template */
  __webpack_require__(436),
  /* scopeId */
  "data-v-90766562",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(386)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(166),
  /* template */
  __webpack_require__(435),
  /* scopeId */
  "data-v-8fe46ee8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(371)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(167),
  /* template */
  __webpack_require__(422),
  /* scopeId */
  "data-v-3b8f64c8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(374)
__webpack_require__(375)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(168),
  /* template */
  __webpack_require__(425),
  /* scopeId */
  "data-v-4886e8bd",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(373)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(169),
  /* template */
  __webpack_require__(424),
  /* scopeId */
  "data-v-41509454",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(382)
__webpack_require__(383)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(170),
  /* template */
  __webpack_require__(433),
  /* scopeId */
  "data-v-7bcd82e5",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(370)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(171),
  /* template */
  __webpack_require__(421),
  /* scopeId */
  "data-v-32d9b926",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(379)
__webpack_require__(380)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(172),
  /* template */
  __webpack_require__(431),
  /* scopeId */
  "data-v-637a59d0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(368)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(173),
  /* template */
  __webpack_require__(418),
  /* scopeId */
  "data-v-1f1cf6d0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(365)
__webpack_require__(364)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(174),
  /* template */
  __webpack_require__(415),
  /* scopeId */
  "data-v-0a41af30",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(378)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(175),
  /* template */
  __webpack_require__(430),
  /* scopeId */
  "data-v-6209be0c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(372)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(176),
  /* template */
  __webpack_require__(423),
  /* scopeId */
  "data-v-3f6ebf20",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(376)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(177),
  /* template */
  __webpack_require__(427),
  /* scopeId */
  "data-v-572d1fb3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(366)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(178),
  /* template */
  __webpack_require__(416),
  /* scopeId */
  "data-v-0f75cc20",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(157),
  /* template */
  __webpack_require__(428),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(158),
  /* template */
  __webpack_require__(426),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(159),
  /* template */
  __webpack_require__(420),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(367)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(160),
  /* template */
  __webpack_require__(417),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(381)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(161),
  /* template */
  __webpack_require__(432),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 415 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.entering) ? _c('div', {
    attrs: {
      "id": "notice"
    }
  }, [_c('div', {
    staticClass: "noticen"
  }, [_c('div', {
    staticClass: "not-main"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "ui bottom attached tab segment active",
    attrs: {
      "data-tab": "first"
    }
  }, [_vm._m(2), _vm._v(" "), _c('transition-group', {
    attrs: {
      "name": "noticeList"
    }
  }, _vm._l((_vm.notices), function(notice) {
    return _c('div', {
      key: _vm.notices,
      staticClass: "ui items"
    }, [_c('div', {
      staticClass: "item"
    }, [_c('div', {
      staticClass: "content",
      on: {
        "click": function($event) {
          _vm.open(notice.num)
        }
      }
    }, [_c('p', {
      staticClass: "header",
      attrs: {
        "id": "pollist"
      }
    }, [_c('span', [_vm._v(_vm._s(notice.num))])]), _vm._v(" "), _c('a', {
      staticClass: "ui header",
      attrs: {
        "id": "destent"
      }
    }, [_c('span', [_vm._v(_vm._s(notice.noticename))])]), _vm._v(" "), _c('p', {
      staticClass: "notdate"
    }, [_c('span', [_vm._v(_vm._s(notice.date))])])])])])
  }))], 1), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4)])])]) : _vm._e()
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "ui center aligned header",
    attrs: {
      "id": "not-head"
    }
  }, [_vm._v(" 공지사항\n              "), _c('div', {
    staticClass: "sub header"
  }, [_vm._v("SIGO의 알림를 외칩니다!")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui top attached tabular menu"
  }, [_c('p', {
    staticClass: "item active",
    attrs: {
      "data-tab": "first",
      "id": "item"
    }
  }, [_vm._v("목록")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui items"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "ui top attached tabular menu",
    attrs: {
      "id": "pob"
    }
  }, [_c('p', {
    staticClass: "item",
    attrs: {
      "id": "ltemone"
    }
  }, [_vm._v("번호")]), _vm._v(" "), _c('p', {
    staticClass: "item",
    attrs: {
      "id": "ltemtwo"
    }
  }, [_vm._v("제목")]), _vm._v(" "), _c('p', {
    staticClass: "item",
    attrs: {
      "id": "ltemthr"
    }
  }, [_vm._v("날짜")])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "huge chevron circle up icon"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('button', {
    staticClass: "ui button"
  }, [_c('i', {
    staticClass: "large chevron down icon"
  })])
}]}

/***/ }),
/* 416 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.entering) ? _c('div', {
    attrs: {
      "id": "index"
    }
  }, [_c('div', {
    staticClass: "ranksys"
  }, [_c('div', {
    staticClass: "rank-main"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "rank-top"
  }, [_c('div', {
    staticClass: "rank1"
  }, [_vm._m(1), _vm._v(" "), _c('p', {
    staticClass: "rant1"
  }, [_vm._v("2등")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', {
    staticClass: "rant2"
  }, [_vm._v(_vm._s(_vm.ranker[1].name))]), _vm._v(" "), _c('p', {
    staticClass: "rant2"
  }, [_vm._v("2st")])]), _vm._v(" "), _c('div', {
    staticClass: "rank2"
  }, [_vm._m(2), _vm._v(" "), _c('p', {
    staticClass: "rant1"
  }, [_vm._v("1등")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', {
    staticClass: "rant2"
  }, [_vm._v(_vm._s(_vm.ranker[0].name))]), _vm._v(" "), _c('p', {
    staticClass: "rant2"
  }, [_vm._v("1st")])]), _vm._v(" "), _c('div', {
    staticClass: "rank3"
  }, [_vm._m(3), _vm._v(" "), _c('p', {
    staticClass: "rant1"
  }, [_vm._v("3등")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('p', {
    staticClass: "rant2"
  }, [_vm._v(_vm._s(_vm.ranker[2].name))]), _vm._v(" "), _c('p', {
    staticClass: "rant2"
  }, [_vm._v("3st")])])]), _vm._v(" "), _vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "ui bottom attached tab segment active"
  }, [_vm._m(5), _vm._v(" "), _vm._l((_vm.users), function(user, rank) {
    return _c('div', {
      staticClass: "propol"
    }, [_c('div', {
      staticClass: "ui items"
    }, [_c('div', {
      staticClass: "item"
    }, [_c('div', {
      staticClass: "content"
    }, [_c('p', {
      staticClass: "header",
      attrs: {
        "id": "pollist"
      }
    }, [_c('span', [_vm._v(_vm._s(rank + 1))]), _vm._v("등")]), _vm._v(" "), _c('p', {
      staticClass: "ui disabled header"
    }, [_c('span', [_vm._v(_vm._s(user.name))])]), _vm._v(" "), _c('p', {
      staticClass: "sub header",
      attrs: {
        "id": "subder"
      }
    }, [_c('span', [_vm._v(_vm._s(user.score))])])])])])])
  })], 2), _vm._v(" "), _vm._m(6), _vm._v(" "), (_vm.loadState) ? _c('button', {
    staticClass: "ui button",
    on: {
      "click": _vm.loadList
    }
  }, [_c('i', {
    staticClass: "large chevron down icon"
  })]) : _vm._e()])])]) : _vm._e()
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "ui center aligned header",
    attrs: {
      "id": "rankhead"
    }
  }, [_vm._v(" 랭킹 시스템\n                "), _c('div', {
    staticClass: "sub header"
  }, [_vm._v("1등을 목표로 문제를 풀면서 친구들을 이겨보세요!")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rankge1"
  }, [_c('img', {
    attrs: {
      "src": "image1.jpg"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rankge2"
  }, [_c('img', {
    attrs: {
      "src": "image1.jpg"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rankge3"
  }, [_c('img', {
    attrs: {
      "src": "image1.jpg"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui top attached tabular menu"
  }, [_c('a', {
    staticClass: "item active",
    attrs: {
      "data-tab": "first",
      "id": "item"
    }
  }, [_vm._v("순위")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui items"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "ui top attached tabular menu",
    attrs: {
      "id": "pob"
    }
  }, [_c('div', {
    staticClass: "ui grid"
  }, [_c('div', {
    staticClass: "two wide column"
  }, [_c('p', {
    staticClass: "item",
    attrs: {
      "id": "ltemone"
    }
  }, [_vm._v("등수")])]), _vm._v(" "), _c('div', {
    staticClass: "four wide column"
  }, [_c('p', {
    staticClass: "item",
    attrs: {
      "id": "ltemtwo"
    }
  }, [_vm._v("학번")])]), _vm._v(" "), _c('div', {
    staticClass: "five wide column"
  }, [_c('p', {
    staticClass: "item",
    attrs: {
      "id": "ltemthr"
    }
  }, [_vm._v("이름")])]), _vm._v(" "), _c('div', {
    staticClass: "five wide column"
  }, [_c('p', {
    staticClass: "item",
    attrs: {
      "id": "ltemfou"
    }
  }, [_vm._v("점수")])])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "huge chevron circle up icon"
  })])
}]}

/***/ }),
/* 417 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "__cov-progress",
    style: (_vm.style)
  })
},staticRenderFns: []}

/***/ }),
/* 418 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "notfound"
  }, [_vm._v("\n404 NOT FOUND\n")])
},staticRenderFns: []}

/***/ }),
/* 419 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.entering) ? _c('div', {
    attrs: {
      "id": "admin"
    }
  }, [_c('div', {
    staticClass: "sigo_container"
  }, [(_vm.adminState) ? _c('div', {
    staticClass: "adminPage",
    staticStyle: {
      "background-color": "white",
      "color": "black"
    }
  }, [_c('div', {
    staticClass: "ui"
  }, [_c('h1', {
    staticClass: "ui header admin"
  }, [_vm._v("ADMINPAGE")]), _vm._v(" "), _c('div', {
    staticClass: "ui secondary pointing menu"
  }, [_c('a', {
    staticClass: "item",
    on: {
      "click": _vm.click_member
    }
  }, [_vm._v("회원관리")]), _vm._v(" "), _c('a', {
    staticClass: "item",
    on: {
      "click": _vm.click_nonaccount
    }
  }, [_vm._v("비승인 회원관리")]), _vm._v(" "), _c('a', {
    staticClass: "item",
    on: {
      "click": _vm.click_list
    }
  }, [_vm._v("게시판관리")]), _vm._v(" "), _c('a', {
    staticClass: "item",
    on: {
      "click": _vm.click_problem
    }
  }, [_vm._v("문제관리")]), _vm._v(" "), _c('a', {
    staticClass: "item",
    on: {
      "click": _vm.click_result
    }
  }, [_vm._v("문제결과")])]), _vm._v(" "), _c('div', {
    staticClass: "twelve wide stretched column"
  }, [(_vm.memberState) ? _c('member') : _vm._e(), _vm._v(" "), (_vm.nonaccountState) ? _c('nonaccount') : _vm._e(), _vm._v(" "), (_vm.problemState) ? _c('problemmanage') : _vm._e(), _vm._v(" "), (_vm.listState) ? _c('notice') : _vm._e(), _vm._v(" "), (_vm.problemresultState) ? _c('problemresult') : _vm._e()], 1)])]) : _vm._e()])]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 420 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div')
},staticRenderFns: []}

/***/ }),
/* 421 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "timeline"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    attrs: {
      "id": "footer"
    }
  }, [_c('div', {
    staticClass: "fomain"
  }, [_c('div', {
    staticClass: "ui grid"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "three wide column"
  }), _vm._v(" "), _c('div', {
    staticClass: "five wide column",
    attrs: {
      "id": "two"
    }
  }, [_c('div', {
    staticClass: "footlist1"
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "ui middle aligned animated list"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('router-link', {
    attrs: {
      "to": "/problems"
    }
  }, [_vm._v("문제")])], 1)])]), _vm._v(" "), _vm._m(3), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5), _vm._v(" "), _vm._m(6)])]), _vm._v(" "), _c('div', {
    staticClass: "footlist2"
  }, [_vm._m(7), _vm._v(" "), _c('div', {
    staticClass: "ui middle aligned animated list"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('router-link', {
    attrs: {
      "to": "/rank"
    }
  }, [_vm._v("랭킹")])], 1)])]), _vm._v(" "), _vm._m(8), _vm._v(" "), _vm._m(9)])])]), _vm._v(" "), _vm._m(10)])]), _vm._v(" "), _vm._m(11)])])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "content"
    }
  }, [_c('div', {
    staticClass: "ui grid",
    attrs: {
      "id": "micon"
    }
  }, [_c('div', {
    staticClass: "five wide column"
  }, [_c('i', {
    staticClass: "massive write icon"
  }), _vm._v(" "), _c('h1', {
    staticClass: "ui header"
  }, [_vm._v("제일 많이 푼 문제\n                 "), _c('div', {
    staticClass: "sub header"
  }, [_c('p', [_vm._v("100번 문제")]), _vm._v(" "), _c('p', {
    staticClass: "iconpol"
  }, [_c('i', {
    staticClass: "caret right icon"
  }), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("풀러가기")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "six wide column"
  }, [_c('i', {
    staticClass: "massive thumbs  up icon"
  }), _vm._v(" "), _c('h1', {
    staticClass: "ui header"
  }, [_vm._v("인기있는 문제\n                 "), _c('div', {
    staticClass: "sub header"
  }, [_c('p', [_vm._v("100번 문제")]), _vm._v(" "), _c('p', {
    staticClass: "iconpol"
  }, [_c('i', {
    staticClass: "caret right icon"
  }), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("풀러가기")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "five wide column"
  }, [_c('i', {
    staticClass: "massive student icon"
  }), _vm._v(" "), _c('h1', {
    staticClass: "ui header"
  }, [_vm._v("도전 해볼만한 문제\n                 "), _c('div', {
    staticClass: "sub header"
  }, [_c('p', [_vm._v("100번 문제")]), _vm._v(" "), _c('p', {
    staticClass: "iconpol"
  }, [_c('i', {
    staticClass: "caret right icon"
  }), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("풀러가기")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "mainproblom"
  }, [_c('h3', {
    staticClass: "ui header"
  }, [_vm._v("뉴스피드")]), _vm._v(" "), _c('div', {
    staticClass: "ui card"
  }, [_c('div', {
    staticClass: "ui grid"
  }, [_c('div', {
    staticClass: "fifteen wide column",
    attrs: {
      "id": "eleven"
    }
  }, [_c('div', {
    staticClass: "prolist"
  }, [_c('div', {
    staticClass: "navlist"
  }, [_c('p', {
    staticClass: "pheader"
  }, [_vm._v("OOO님이 100번 문제를 풀었습니다!")]), _vm._v(" "), _c('div', {
    staticClass: "meta"
  }, [_c('a', [_vm._v("나도 풀어보기")])])]), _vm._v(" "), _c('hr', {
    staticClass: "hr"
  }), _vm._v(" "), _c('div', {
    staticClass: "navlist"
  }, [_c('p', {
    staticClass: "pheader"
  }, [_vm._v("OOO님이 100번 문제를 첫 번째로 풀었습니다!")]), _vm._v(" "), _c('div', {
    staticClass: "meta"
  }, [_c('a', [_vm._v("나도 풀러가기")])])]), _vm._v(" "), _c('hr', {
    staticClass: "hr"
  }), _vm._v(" "), _c('div', {
    staticClass: "navlist"
  }, [_c('p', {
    staticClass: "pheader"
  }, [_vm._v("OOO님이 100번 문제를 10번 풀었습니다!")]), _vm._v(" "), _c('div', {
    staticClass: "meta"
  }, [_c('a', [_vm._v("2014.10.04")])])]), _vm._v(" "), _c('hr', {
    staticClass: "hr"
  }), _vm._v(" "), _c('button', {
    staticClass: "fluid ui button"
  }, [_vm._v("더 보기")])])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "three wide column",
    attrs: {
      "id": "one"
    }
  }, [_c('h3', {
    attrs: {
      "id": "lefth"
    }
  }, [_vm._v("\n                SIGO는?\n              ")]), _vm._v(" "), _c('p', {
    attrs: {
      "id": "leftp"
    }
  }, [_vm._v("서울아이티고등학교 학생들이 만든 알고리즘 사이트 입니다.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "foheader"
  }, [_c('h3', [_vm._v("문제풀이")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("출처")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("단계")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("최근문제")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("기타")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "foheader"
  }, [_c('h3', [_vm._v("랭킹")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("페이지")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("아이템")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "five wide column",
    attrs: {
      "id": "three"
    }
  }, [_c('div', {
    staticClass: "footlist1"
  }, [_c('div', {
    staticClass: "foheader"
  }, [_c('h3', [_vm._v("문의하기")]), _vm._v(" "), _c('p', [_vm._v(" 불편한점이나 개선되어야할 점, 버그 등은 문의해주세요.")])]), _vm._v(" "), _c('div', {
    staticClass: "ui list"
  }, [_c('a', {
    staticClass: "item",
    attrs: {
      "href": "https://www.facebook.com/%EC%84%9C%EC%9A%B8%EC%95%84%EC%9D%B4%ED%8B%B0%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90-SIGO-1529061383780127/",
      "id": "saws"
    }
  }, [_vm._v("문의 하기")])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "footsub"
  }, [_c('div', {
    staticClass: "fosub"
  }, [_c('div', {
    staticClass: "ddd"
  }, [_c('a', {
    attrs: {
      "href": "https://www.facebook.com/%EC%84%9C%EC%9A%B8%EC%95%84%EC%9D%B4%ED%8B%B0%EA%B3%A0%EB%93%B1%ED%95%99%EA%B5%90-SIGO-1529061383780127/"
    }
  }, [_c('i', {
    staticClass: "big facebook icon"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://github.com/shitKorea/shit-algorithm"
    }
  }, [_c('i', {
    staticClass: "big github icon"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "ccc"
  }, [_c('p', [_vm._v("2017 SiGO. All rights reserved.")])])])])
}]}

/***/ }),
/* 422 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.enteringProblemmanage) ? _c('div', {
    staticClass: "probleminput"
  }, [_c('div', {
    staticClass: "problem"
  }, [_c('button', {
    on: {
      "click": _vm.openAdd
    }
  }, [_vm._v(_vm._s(_vm.addMsg))]), _vm._v(" "), (_vm.addState) ? _c('div', {
    staticClass: "addProblem"
  }, [_c('div', {
    staticClass: "input"
  }, [_c('label', {
    attrs: {
      "for": "problemName"
    }
  }, [_vm._v("problemName : ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.problemName),
      expression: "problemName"
    }],
    attrs: {
      "type": "text",
      "id": "problemName"
    },
    domProps: {
      "value": (_vm.problemName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.problemName = $event.target.value
      }
    }
  }), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "for": "source"
    }
  }, [_vm._v("source : ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.source),
      expression: "source"
    }],
    attrs: {
      "type": "text",
      "id": "source"
    },
    domProps: {
      "value": (_vm.source)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.source = $event.target.value
      }
    }
  }), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "for": "explanation"
    }
  }, [_vm._v("explanation : ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.explanation),
      expression: "explanation"
    }],
    attrs: {
      "type": "text",
      "id": "explanation"
    },
    domProps: {
      "value": (_vm.explanation)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.explanation = $event.target.value
      }
    }
  }), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "for": "score"
    }
  }, [_vm._v("score : ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.score),
      expression: "score"
    }],
    attrs: {
      "type": "text",
      "id": "score"
    },
    domProps: {
      "value": (_vm.score)
    },
    on: {
      "keypress": function($event) {
        _vm.isNumber(_vm.event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.score = $event.target.value
      }
    }
  }), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "for": "inputExample"
    }
  }, [_vm._v("inputExample : ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputExample),
      expression: "inputExample"
    }],
    attrs: {
      "type": "text",
      "id": "inputExample"
    },
    domProps: {
      "value": (_vm.inputExample)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inputExample = $event.target.value
      }
    }
  }), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "for": "inputExample2"
    }
  }, [_vm._v("inputExample2 : ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.inputExample2),
      expression: "inputExample2"
    }],
    attrs: {
      "type": "text",
      "id": "inputExample2"
    },
    domProps: {
      "value": (_vm.inputExample2)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.inputExample2 = $event.target.value
      }
    }
  }), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "for": "outputExample"
    }
  }, [_vm._v("outputExample : ")]), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.outputExample),
      expression: "outputExample"
    }],
    attrs: {
      "type": "text",
      "id": "outputExample"
    },
    domProps: {
      "value": (_vm.outputExample)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.outputExample = $event.target.value
      }
    }
  }), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "for": "outputExample2"
    }
  }, [_vm._v("outputExample2 : ")]), _c('textarea', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.outputExample2),
      expression: "outputExample2"
    }],
    attrs: {
      "type": "text",
      "id": "outputExample2"
    },
    domProps: {
      "value": (_vm.outputExample2)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.outputExample2 = $event.target.value
      }
    }
  }), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "for": "timeLimit"
    }
  }, [_vm._v("timeLimit : ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.timeLimit),
      expression: "timeLimit"
    }],
    attrs: {
      "type": "text",
      "id": "timeLimit"
    },
    domProps: {
      "value": (_vm.timeLimit)
    },
    on: {
      "keypress": function($event) {
        _vm.isNumber(_vm.event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.timeLimit = $event.target.value
      }
    }
  }), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "for": "memoryLimit"
    }
  }, [_vm._v("memoryLimit : ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.memoryLimit),
      expression: "memoryLimit"
    }],
    attrs: {
      "type": "text",
      "id": "memoryLimit"
    },
    domProps: {
      "value": (_vm.memoryLimit)
    },
    on: {
      "keypress": function($event) {
        _vm.isNumber(_vm.event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.memoryLimit = $event.target.value
      }
    }
  }), _c('br')]), _vm._v(" "), _c('div', {
    staticClass: "example"
  }, [_c('p', [_vm._v("문제이름 :" + _vm._s(_vm.problemName))]), _vm._v(" "), _c('p', [_vm._v("소스 : " + _vm._s(_vm.source))]), _vm._v(" "), _c('p', [_vm._v("설명 : " + _vm._s(_vm.explanation))]), _vm._v(" "), _c('p', [_vm._v("점수 : " + _vm._s(_vm.score))]), _vm._v(" "), _c('p', [_vm._v("입력예제 : " + _vm._s(_vm.inputExample))]), _vm._v(" "), _c('p', [_vm._v("입력예제2 : " + _vm._s(_vm.inputExample2))]), _vm._v(" "), _c('p', [_vm._v("출력예제 : " + _vm._s(_vm.outputExample))]), _vm._v(" "), _c('p', [_vm._v("출력예제2 : " + _vm._s(_vm.outputExample2))]), _vm._v(" "), _c('p', [_vm._v("시간 : " + _vm._s(_vm.timeLimit))]), _vm._v(" "), _c('p', [_vm._v("메모리 : " + _vm._s(_vm.memoryLimit))])]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.add
    }
  }, [_vm._v("문제 등록")]), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.problemType),
      expression: "problemType"
    }],
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.problemType = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "normal"
    }
  }, [_vm._v("일반")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "contest"
    }
  }, [_vm._v("대회")])])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('div', {
    staticClass: "problemList"
  }, [_c('ul', [_vm._l((_vm.items), function(item) {
    return _c('li', [_c('p', [_vm._v("번호 : " + _vm._s(item.num))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("이름 : " + _vm._s(item.name))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("소스 : " + _vm._s(item.source))]), _c('br'), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.solveListData(item.num)
        }
      }
    }, [_vm._v("제출목록")]), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.modifyData(item.num)
        }
      }
    }, [_vm._v("문제수정")]), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.deleteData(item.num, item)
        }
      }
    }, [_vm._v("문제삭제")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br'), _vm._v(" "), (item.num == _vm.problemNum && _vm.modifyState) ? _c('div', {
      staticClass: "modify"
    }, [_c('label', {
      attrs: {
        "for": "problemName"
      }
    }, [_vm._v("problemName : ")]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.problemName),
        expression: "problemName"
      }],
      attrs: {
        "type": "text",
        "id": "problemName"
      },
      domProps: {
        "value": (_vm.problemName)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.problemName = $event.target.value
        }
      }
    }), _c('br'), _vm._v(" "), _c('label', {
      attrs: {
        "for": "source"
      }
    }, [_vm._v("source : ")]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.source),
        expression: "source"
      }],
      attrs: {
        "type": "text",
        "id": "source"
      },
      domProps: {
        "value": (_vm.source)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.source = $event.target.value
        }
      }
    }), _c('br'), _vm._v(" "), _c('label', {
      attrs: {
        "for": "explanation"
      }
    }, [_vm._v("explanation : ")]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.explanation),
        expression: "explanation"
      }],
      attrs: {
        "type": "text",
        "id": "explanation"
      },
      domProps: {
        "value": (_vm.explanation)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.explanation = $event.target.value
        }
      }
    }), _c('br'), _vm._v(" "), _c('label', {
      attrs: {
        "for": "score"
      }
    }, [_vm._v("score : ")]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.score),
        expression: "score"
      }],
      attrs: {
        "type": "text",
        "id": "score"
      },
      domProps: {
        "value": (_vm.score)
      },
      on: {
        "keypress": function($event) {
          _vm.isNumber(_vm.event)
        },
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.score = $event.target.value
        }
      }
    }), _c('br'), _vm._v(" "), _c('label', {
      attrs: {
        "for": "inputExample"
      }
    }, [_vm._v("inputExample : ")]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.inputExample),
        expression: "inputExample"
      }],
      attrs: {
        "type": "text",
        "id": "inputExample"
      },
      domProps: {
        "value": (_vm.inputExample)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.inputExample = $event.target.value
        }
      }
    }), _c('br'), _vm._v(" "), _c('label', {
      attrs: {
        "for": "inputExample2"
      }
    }, [_vm._v("inputExample2 : ")]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.inputExample2),
        expression: "inputExample2"
      }],
      attrs: {
        "type": "text",
        "id": "inputExample2"
      },
      domProps: {
        "value": (_vm.inputExample2)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.inputExample2 = $event.target.value
        }
      }
    }), _c('br'), _vm._v(" "), _c('label', {
      attrs: {
        "for": "outputExample"
      }
    }, [_vm._v("outputExample : ")]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.outputExample),
        expression: "outputExample"
      }],
      attrs: {
        "type": "text",
        "id": "outputExample"
      },
      domProps: {
        "value": (_vm.outputExample)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.outputExample = $event.target.value
        }
      }
    }), _c('br'), _vm._v(" "), _c('label', {
      attrs: {
        "for": "outputExample2"
      }
    }, [_vm._v("outputExample2 : ")]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.outputExample2),
        expression: "outputExample2"
      }],
      attrs: {
        "type": "text",
        "id": "outputExample2"
      },
      domProps: {
        "value": (_vm.outputExample2)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.outputExample2 = $event.target.value
        }
      }
    }), _c('br'), _vm._v(" "), _c('label', {
      attrs: {
        "for": "timeLimit"
      }
    }, [_vm._v("timeLimit : ")]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.timeLimit),
        expression: "timeLimit"
      }],
      attrs: {
        "type": "text",
        "id": "timeLimit"
      },
      domProps: {
        "value": (_vm.timeLimit)
      },
      on: {
        "keypress": function($event) {
          _vm.isNumber(_vm.event)
        },
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.timeLimit = $event.target.value
        }
      }
    }), _c('br'), _vm._v(" "), _c('label', {
      attrs: {
        "for": "memoryLimit"
      }
    }, [_vm._v("memoryLimit : ")]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.memoryLimit),
        expression: "memoryLimit"
      }],
      attrs: {
        "type": "text",
        "id": "memoryLimit"
      },
      domProps: {
        "value": (_vm.memoryLimit)
      },
      on: {
        "keypress": function($event) {
          _vm.isNumber(_vm.event)
        },
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.memoryLimit = $event.target.value
        }
      }
    }), _c('br'), _vm._v(" "), _c('label', {
      attrs: {
        "for": "type"
      }
    }, [_vm._v("type : ")]), _vm._v(" "), _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.problemType),
        expression: "problemType"
      }],
      on: {
        "change": function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          _vm.problemType = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
        }
      }
    }, [_c('option', {
      attrs: {
        "value": "normal"
      }
    }, [_vm._v("일반")]), _vm._v(" "), _c('option', {
      attrs: {
        "value": "contest"
      }
    }, [_vm._v("대회")])]), _vm._v(" "), _c('button', {
      on: {
        "click": _vm.modify
      }
    }, [_vm._v("수정하기")])]) : _vm._e()])
  }), _vm._v(" "), _c('br')], 2)])]), _vm._v(" "), _c('div', {
    staticClass: "solveList"
  }, [_c('transition-group', {
    attrs: {
      "name": "problemmanage",
      "tag": "div"
    }
  }, _vm._l((_vm.solveList), function(list) {
    return _c('ul', {
      key: list
    }, [_c('li', [_vm._v("이름 : " + _vm._s(list.username))]), _vm._v(" "), _c('li', [_vm._v("학번 : " + _vm._s(list.studentcode))]), _vm._v(" "), _c('li', [_vm._v("결과 : " + _vm._s(list.result))]), _vm._v(" "), _c('li', [_vm._v("날짜 : " + _vm._s(list.date))]), _vm._v(" "), _c('li', [_vm._v("코드 : " + _vm._s(list.code))])])
  }))], 1)])]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 423 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.entering) ? _c('div', {
    attrs: {
      "id": "problems"
    }
  }, [_c('div', {
    staticClass: "container"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "ui top attached tabular menu"
  }, [_c('a', {
    staticClass: "item active",
    attrs: {
      "data-tab": "first",
      "id": "item"
    }
  }, [_vm._v("최근 문제")]), _vm._v(" "), _c('a', {
    staticClass: "item",
    attrs: {
      "data-tab": "second"
    }
  }, [_vm._v("출처")]), _vm._v(" "), _c('a', {
    staticClass: "item",
    attrs: {
      "data-tab": "third"
    }
  }, [_vm._v("난이도")]), _vm._v(" "), _c('a', {
    staticClass: "item",
    attrs: {
      "data-tab": "fourth"
    },
    on: {
      "click": _vm.shuffle
    }
  }, [_vm._v("랜덤문제")])]), _vm._v(" "), _c('div', {
    staticClass: "ui bottom attached tab segment active",
    style: ({
      'max-height': _vm.lineheight + 'px'
    }),
    attrs: {
      "data-tab": "first"
    }
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "ui bottom attached tab segment active",
    style: ({
      'max-height': _vm.lineheight + 'px',
      'min-height': _vm.lineheight + 'px',
      'overflow': 'hidden'
    }),
    attrs: {
      "id": "list",
      "data-tab": "first"
    }
  }, [_c('transition-group', {
    attrs: {
      "name": "flip-list, problemlist",
      "tag": "ul"
    }
  }, _vm._l((_vm.items), function(item) {
    return _c('div', {
      key: item,
      staticClass: "ui items"
    }, [_c('div', {
      staticClass: "item"
    }, [_c('div', {
      staticClass: "content",
      on: {
        "click": function($event) {
          _vm.result(item.num)
        }
      }
    }, [_c('div', {
      staticClass: "ui grid"
    }, [_c('div', {
      staticClass: "three wide column"
    }, [_c('p', {
      staticClass: "header"
    }, [_c('span', [_vm._v(_vm._s(item.num))])])]), _vm._v(" "), _c('div', {
      staticClass: "five wide column"
    }, [_c('a', {
      staticClass: "ui disabled header"
    }, [_c('span', [_vm._v(_vm._s(item.name))])])]), _vm._v(" "), _c('div', {
      staticClass: "eight wide column"
    }, [_c('div', {
      staticClass: "description"
    }, [_c('p', [_c('span', [_vm._v(_vm._s(item.source))]), _vm._v(" "), _c('span', [_vm._v("난이도")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.score))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.success))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.fail))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(item.ratio))])])])])])])])])
  }))], 1)]), _vm._v(" "), _vm._m(2), _vm._v(" "), (_vm.loadState) ? _c('button', {
    staticClass: "ui button",
    on: {
      "click": _vm.loadList
    }
  }, [_c('i', {
    staticClass: "large chevron down icon"
  })]) : _vm._e()])]) : _vm._e()
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "ui center aligned header"
  }, [_vm._v(" 문제풀기\n            "), _c('div', {
    staticClass: "sub header"
  }, [_vm._v("프로그래밍 문제를 풀고 맞추어 보는 곳 입니다.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ui items",
    attrs: {
      "id": "mnit"
    }
  }, [_c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "ui top attached tabular menu",
    attrs: {
      "id": "pob"
    }
  }, [_c('div', {
    staticClass: "ui grid"
  }, [_c('div', {
    staticClass: "three wide column"
  }, [_c('p', {
    attrs: {
      "id": "ltemone"
    }
  }, [_vm._v("번호")])]), _vm._v(" "), _c('div', {
    staticClass: "five wide column"
  }, [_c('p', {
    attrs: {
      "id": "ltemtwo"
    }
  }, [_vm._v("문제 이름")])]), _vm._v(" "), _c('div', {
    staticClass: "two wide column"
  }, [_c('p', {
    attrs: {
      "id": "ltemthr"
    }
  }, [_vm._v("푼 횟수")])]), _vm._v(" "), _c('div', {
    staticClass: "two wide column"
  }, [_c('p', {
    attrs: {
      "id": "ltemfou"
    }
  }, [_vm._v("정답자 수")])]), _vm._v(" "), _c('div', {
    staticClass: "two wide column"
  }, [_c('p', {
    attrs: {
      "id": "ltemfiv"
    }
  }, [_vm._v("틀린사람 수")])]), _vm._v(" "), _c('div', {
    staticClass: "two wide column"
  }, [_c('p', {
    attrs: {
      "id": "ltemsix"
    }
  }, [_vm._v("정답률")])])])])])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "huge chevron circle up icon"
  })])
}]}

/***/ }),
/* 424 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "index"
    }
  }, [_c('div', {
    staticClass: "sigo_container"
  }, [_c('parallax')], 1), _vm._v(" "), _c('div', {
    staticClass: "sigo_container"
  }, [_c('timeline')], 1)])
},staticRenderFns: []}

/***/ }),
/* 425 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.enteringProblemresult) ? _c('div', {
    staticClass: "probleminput"
  }, [_c('ul', [_vm._l((_vm.problemData), function(data) {
    return _c('li', [_c('p', [_vm._v("ID : " + _vm._s(data.userid))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("Num : " + _vm._s(data.num))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("language : " + _vm._s(data.lang))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("Date : " + _vm._s(data.date))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("Code : " + _vm._s(data.code))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("Result : " + _vm._s(data.result))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("Time : " + _vm._s(data.time))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("Memory : " + _vm._s(data.memory))]), _c('br'), _vm._v(" "), _c('br')])
  }), _vm._v(" "), _c('br')], 2)]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 426 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-container"
  }, [_vm._t("parallax-bg"), _vm._v(" "), _c('div', {
    staticClass: "swiper-wrapper"
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("pagination"), _vm._v(" "), _vm._t("button-prev"), _vm._v(" "), _vm._t("button-next"), _vm._v(" "), _vm._t("scrollbar")], 2)
},staticRenderFns: []}

/***/ }),
/* 427 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "solve"
    }
  }, _vm._l((_vm.items), function(item) {
    return _c('div', {
      staticClass: "sigo_container"
    }, [_c('div', {
      staticClass: "solve_title"
    }, [_c('div', {
      staticClass: "solve_num"
    }, [_vm._v("\n                " + _vm._s(item.num) + " 번 -\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "solve_name"
    }, [_vm._v("\n                " + _vm._s(item.name) + " 문제를 풀어봅시다\n            ")])]), _vm._v(" "), _c('hr', {
      attrs: {
        "id": "head-hr"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "solve_sidebar"
    }, [_vm._m(0, true), _vm._v(" "), _c('div', {
      staticClass: "solve_explain"
    }, [_vm._v("\n                " + _vm._s(item.explanation) + "\n            ")]), _vm._v(" "), _c('div', {
      staticClass: "solve_inputex"
    }, [_c('p', [_vm._v("입력 값 예제")]), _vm._v(" "), _c('pre', [_vm._v(_vm._s(item.inputex))])]), _vm._v(" "), _c('div', {
      staticClass: "solve_outputex"
    }, [_c('p', [_vm._v("출력 값 예제")]), _vm._v(" "), _c('pre', [_vm._v(_vm._s(item.outputex))])])]), _vm._v(" "), _c('div', {
      staticClass: "solve_main"
    }, [_c('div', {
      staticClass: "solve_input",
      on: {
        "keydown": function($event) {
          if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
          _vm.enter($event)
        }
      }
    }, [_c('monaco-editor', {
      staticClass: "monacoEditor",
      attrs: {
        "width": "100%",
        "language": "c",
        "code": _vm.code,
        "editorOptions": _vm.options
      },
      on: {
        "mounted": _vm.onMounted,
        "codeChange": _vm.onCodeChange
      }
    })], 1), _vm._v(" "), _c('div', {
      staticClass: "solve_footer"
    }, [_c('div', {
      staticClass: "solve_output"
    }, [_c('p', [_vm._v(_vm._s(_vm.runMsg))]), _c('br'), _vm._v(" "), _c('pre', [_vm._v(_vm._s(_vm.codeResult))])]), _vm._v(" "), _c('div', {
      staticClass: "solve_button"
    }, [_c('div', {
      staticClass: "solve_run",
      on: {
        "click": _vm.codeRun
      }
    }, [_vm._v("\n                        실행하기\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "solve_reset",
      on: {
        "click": _vm.codeReset
      }
    }, [_vm._v("\n                        초기화하기\n                    ")]), _vm._v(" "), _c('div', {
      staticClass: "solve_submit",
      on: {
        "click": _vm.codeSubmit
      }
    }, [_vm._v("\n                        제출하기\n                    ")])])])]), _vm._v(" "), _vm._m(1, true)])
  }))
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "sidebar_title"
  }, [_c('h3', [_vm._v("문제 설명")]), _vm._v(" "), _c('hr', {
    attrs: {
      "id": "sub-hr"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pageicon"
  }, [_c('a', {
    attrs: {
      "href": "/problems"
    }
  }, [_c('i', {
    staticClass: "big reply icon"
  })])])
}]}

/***/ }),
/* 428 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-slide"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 429 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.enteringMember) ? _c('div', {
    staticClass: "member"
  }, [_c('ul', [_vm._l((_vm.members), function(member) {
    return _c('li', [_vm._v("\n            아이디: "), _c('span', [_vm._v(_vm._s(member.userid))]), _c('br'), _vm._v("\n            이름: "), _c('span', [_vm._v(_vm._s(member.username))]), _c('br'), _vm._v("\n            학번 : "), _c('span', [_vm._v(_vm._s(member.studentcode))]), _c('br'), _vm._v("\n            점수 : "), _c('span', [_vm._v(_vm._s(member.score))]), _c('br'), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.deleteuser(member.userid, member)
        }
      }
    }, [_vm._v("유저 삭제")]), _vm._v(" "), _c('br')])
  }), _vm._v(" "), _c('br')], 2)]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 430 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.entering) ? _c('div', {
    staticClass: "openNotice"
  }, [_c('p', [_vm._v("번호 : " + _vm._s(_vm.num))]), _vm._v(" "), _c('p', [_vm._v("제목 : " + _vm._s(_vm.name))]), _vm._v(" "), _c('p', [_vm._v("내용 : " + _vm._s(_vm.contents))]), _vm._v(" "), _c('p', [_vm._v("날짜 : " + _vm._s(_vm.date))]), _vm._v(" "), _c('div', {
    directives: [{
      name: "i",
      rawName: "v-i",
      value: (_vm.entering),
      expression: "entering"
    }],
    staticClass: "openNotice"
  }, [_c('div', {
    staticClass: "notipoll"
  }, [_c('div', {
    staticClass: "notipen"
  }, [_c('div', {
    staticClass: "noti-head"
  }, [_c('p', [_vm._v(_vm._s(_vm.name))])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "noti-main"
  }, [_c('p', [_vm._v(_vm._s(_vm.contents))])])]), _vm._v(" "), _c('div', {
    staticClass: "noti-tag"
  }, [_c('div', {
    staticClass: "noti1"
  }, [_c('p', [_vm._v(_vm._s(_vm.num))])]), _vm._v(" "), _c('div', {
    staticClass: "noti2"
  }, [_c('p', [_vm._v(_vm._s(_vm.date))])])])])]), _vm._v(" "), _vm._m(0)]) : _vm._e()
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pageicon"
  }, [_c('a', {
    attrs: {
      "href": "/notice"
    }
  }, [_c('i', {
    staticClass: "big reply icon"
  })])])
}]}

/***/ }),
/* 431 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.entering) ? _c('div', {
    attrs: {
      "id": "mypage"
    }
  }, [_vm._m(0)]) : _vm._e()
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "myinfo"
  }, [_c('div', {
    attrs: {
      "id": "userpage"
    }
  }, [_c('div', {
    staticClass: "usps"
  }, [_c('div', {
    staticClass: "ui link cards"
  }, [_c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_vm._v("내 정보")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "description"
  }, [_c('p', [_vm._v("내 아이디 : "), _c('span', [_vm._v("testting")])]), _vm._v(" "), _c('p', [_vm._v("내 이름 : "), _c('span', [_vm._v("아이티")])]), _vm._v(" "), _c('p', [_vm._v("학번 : "), _c('span', [_vm._v("10214")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_vm._v("내 활동")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "description"
  }, [_c('p', [_vm._v("내 점수 : "), _c('span', [_vm._v("1,212")])]), _vm._v(" "), _c('p', [_vm._v("문제 푼 수 : "), _c('span', [_vm._v("12")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_vm._v("최근 푼 문제")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "description"
  }, [_c('p', [_c('span', [_vm._v("1")]), _vm._v(" : 번 문제")])])])])])])])])
}]}

/***/ }),
/* 432 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.loading),
      expression: "loading"
    }],
    staticClass: "v-spinner"
  }, [_c('div', {
    staticClass: "v-pulse v-pulse1",
    style: ([_vm.spinnerStyle, _vm.spinnerDelay1])
  }), _c('div', {
    staticClass: "v-pulse v-pulse2",
    style: ([_vm.spinnerStyle, _vm.spinnerDelay2])
  }), _c('div', {
    staticClass: "v-pulse v-pulse3",
    style: ([_vm.spinnerStyle, _vm.spinnerDelay3])
  })])
},staticRenderFns: []}

/***/ }),
/* 433 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "main"
  }, [_c('div', {
    staticClass: "parallax"
  }, [_c('swiper', {
    attrs: {
      "options": _vm.swiperOption
    }
  }, [_c('div', {
    staticClass: "parallax-bg",
    attrs: {
      "data-swiper-parallax": "-23%"
    },
    slot: "parallax-bg"
  }), _vm._v(" "), _c('swiper-slide', [_c('div', {
    attrs: {
      "data-swiper-parallax": "-100"
    }
  }, [_c('vue-typer', {
    attrs: {
      "text": "대회시스템",
      "repeat": Infinity,
      "shuffle": false,
      "initial-action": "typing",
      "pre-type-delay": 70,
      "type-delay": 70,
      "pre-erase-delay": 2000,
      "erase-delay": 250,
      "erase-style": "backspace",
      "erase-on-complete": false,
      "caret-animation": "smooth"
    }
  })], 1), _vm._v(" "), _c('br')]), _vm._v(" "), _c('swiper-slide', [_c('div', {
    attrs: {
      "data-swiper-parallax": "-100"
    }
  }, [_c('vue-typer', {
    attrs: {
      "text": "메세지2",
      "repeat": Infinity,
      "shuffle": false,
      "initial-action": "typing",
      "pre-type-delay": 70,
      "type-delay": 70,
      "pre-erase-delay": 2000,
      "erase-delay": 250,
      "erase-style": "backspace",
      "erase-on-complete": false,
      "caret-animation": "smooth"
    }
  })], 1)]), _vm._v(" "), _c('swiper-slide', [_c('div', {
    attrs: {
      "data-swiper-parallax": "-100"
    }
  }, [_c('vue-typer', {
    attrs: {
      "text": "메세지3",
      "repeat": Infinity,
      "shuffle": false,
      "initial-action": "typing",
      "pre-type-delay": 70,
      "type-delay": 70,
      "pre-erase-delay": 2000,
      "erase-delay": 250,
      "erase-style": "backspace",
      "erase-on-complete": false,
      "caret-animation": "smooth"
    }
  })], 1)])], 1)], 1)])
},staticRenderFns: []}

/***/ }),
/* 434 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('div', {
    staticClass: "ui secondary menu",
    class: {
      menu_show: _vm.scrollMenu
    },
    attrs: {
      "id": "menu"
    }
  }, [_c('ul', {
    attrs: {
      "id": "mainmn"
    }
  }, [_c('li', [_c('router-link', {
    class: {
      menu_show_font: _vm.scrolled > 200
    },
    attrs: {
      "to": "/"
    }
  }, [_vm._v(_vm._s(_vm.$store.state.loadingState))])], 1)]), _vm._v(" "), _c('ul', {
    attrs: {
      "id": "submn"
    }
  }, [_c('li', [_c('router-link', {
    class: {
      menu_show_font: _vm.scrolled > 200
    },
    attrs: {
      "to": "/notice"
    }
  }, [_vm._v("공지사항")])], 1), _vm._v(" "), _c('li', [_c('a', {
    class: {
      menu_show_font: _vm.scrolled > 200
    },
    on: {
      "click": _vm.problemLoginCheck
    }
  }, [_vm._v("문제")])]), _vm._v(" "), _c('li', [_c('a', {
    class: {
      menu_show_font: _vm.scrolled > 200
    },
    on: {
      "click": _vm.rankLoginCheck
    }
  }, [_vm._v("랭킹")])]), _vm._v(" "), (_vm.loginState) ? _c('li', [(_vm.userRating == 3) ? _c('router-link', {
    class: {
      menu_show_font: _vm.scrolled > 200
    },
    attrs: {
      "to": "/admin"
    }
  }, [_vm._v("관리자페이지 - " + _vm._s(_vm.username) + "님")]) : _c('router-link', {
    class: {
      menu_show_font: _vm.scrolled > 200
    },
    attrs: {
      "to": "/mypage"
    }
  }, [_vm._v(_vm._s(_vm.username) + "님")]), _vm._v(" "), _c('a', {
    class: {
      menu_show_font: _vm.scrolled > 200
    },
    on: {
      "click": _vm.logout
    }
  }, [_vm._v("로그아웃")])], 1) : _vm._e(), _vm._v(" "), (_vm.loginState == false) ? _c('li', [_c('a', {
    class: {
      menu_show_font: _vm.scrolled > 200
    },
    on: {
      "click": _vm.openModal
    }
  }, [_vm._v("SIGN")])]) : _vm._e()])]), _vm._v(" "), (_vm.loginState == false) ? _c('div', {
    attrs: {
      "id": "sign"
    }
  }, [_c('div', {
    staticClass: "ui modal"
  }, [_c('div', {
    staticClass: "conclo"
  }), _vm._v(" "), (_vm.signState) ? _c('div', {
    staticClass: "login_form"
  }, [_c('div', {
    staticClass: "description"
  }, [_c('div', {
    staticClass: "ui two column centered grid"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "culnmn"
  }, [_vm._m(0), _vm._v(" "), _c('form', {
    staticClass: "ui large form"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "ui left icon input"
  }, [_c('i', {
    staticClass: "user icon"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userid),
      expression: "userid"
    }],
    attrs: {
      "type": "text",
      "name": "userid",
      "placeholder": "아이디"
    },
    domProps: {
      "value": (_vm.userid)
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.submit($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userid = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "ui left icon input"
  }, [_c('i', {
    staticClass: "lock icon"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    attrs: {
      "type": "password",
      "name": "password",
      "placeholder": "비밀번호"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.submit($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('button', {
    staticClass: "ui fluid large teal submit button submitButton",
    attrs: {
      "type": "button"
    },
    on: {
      "click": _vm.submit
    }
  }, [_vm._v("\n                                        로그인\n                                    ")])]), _vm._v(" "), _c('button', {
    staticClass: "ui button black signButton",
    on: {
      "click": function($event) {
        _vm.signState = false
      }
    }
  }, [_vm._v("\n                                    회원가입하기\n                                ")])])])])])]) : _c('div', {
    staticClass: "register_form"
  }, [_c('div', {
    staticClass: "description"
  }, [_c('div', {
    staticClass: "ui two column centered grid"
  }, [_c('div', {
    staticClass: "container"
  }, [_c('div', {
    staticClass: "culnmn"
  }, [_c('div', {
    staticClass: "signhead"
  }, [_c('h1', {
    staticClass: "ui grey header"
  }, [_vm._v("회원가입")])]), _vm._v(" "), _c('form', {
    staticClass: "ui large form"
  }, [_c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "ui left icon input"
  }, [_c('i', {
    staticClass: "user icon"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userid),
      expression: "userid"
    }],
    attrs: {
      "type": "text",
      "name": "userid",
      "placeholder": "아이디"
    },
    domProps: {
      "value": (_vm.userid)
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.submit($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userid = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "ui left icon input"
  }, [_c('i', {
    staticClass: "lock icon"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.password),
      expression: "password"
    }],
    attrs: {
      "type": "password",
      "name": "password",
      "placeholder": "비밀번호"
    },
    domProps: {
      "value": (_vm.password)
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.submit($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.password = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "ui left icon input"
  }, [_c('i', {
    staticClass: "user icon"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.username),
      expression: "username"
    }],
    attrs: {
      "type": "text",
      "name": "username",
      "placeholder": "이름"
    },
    domProps: {
      "value": (_vm.username)
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.submit($event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.username = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "ui left icon input"
  }, [_c('i', {
    staticClass: "student icon"
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.studentcode),
      expression: "studentcode"
    }],
    attrs: {
      "type": "text",
      "name": "studentcode",
      "placeholder": "학번"
    },
    domProps: {
      "value": (_vm.studentcode)
    },
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.submit($event)
      },
      "keypress": function($event) {
        _vm.isNumber(_vm.event)
      },
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.studentcode = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "field"
  }, [_c('div', {
    staticClass: "ul left icon input"
  }, [_c('div', {
    staticClass: "lock icon"
  }, [_c('vue-recaptcha', {
    attrs: {
      "sitekey": "6LejvBgUAAAAAE_F7SjXLPzPiyroAqAdXvBhk7IG"
    }
  })], 1)])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "html_element"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "ui fluid large teal submit button submitButton",
    on: {
      "click": _vm.submit,
      "keyup": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.submit($event)
      }
    }
  }, [_vm._v("\n                                        회원가입\n                                    ")])]), _vm._v(" "), _c('button', {
    staticClass: "ui button black signButton",
    on: {
      "click": function($event) {
        _vm.signState = true
      }
    }
  }, [_vm._v("\n                                    로그인하기\n                                ")])])])])])])])]) : _vm._e(), _vm._v(" "), _c('vue-progress-bar'), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "sigoPage",
      "mode": "out-in"
    }
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "signhead"
  }, [_c('h1', {
    staticClass: "ui grey header"
  }, [_vm._v("로그인")])])
}]}

/***/ }),
/* 435 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.enteringNoticemanage) ? _c('div', {
    staticClass: "noticemanage"
  }, [_c('button', {
    on: {
      "click": _vm.noticeAdd
    }
  }, [_vm._v(_vm._s(_vm.noticeMsg))]), _vm._v(" "), (_vm.noticeAddState) ? _c('div', {
    staticClass: "addNotice"
  }, [_c('div', {
    staticClass: "inputNotice"
  }, [_c('label', {
    attrs: {
      "for": "name"
    }
  }, [_vm._v("name : ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.name),
      expression: "name"
    }],
    attrs: {
      "type": "text",
      "id": "name"
    },
    domProps: {
      "value": (_vm.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.name = $event.target.value
      }
    }
  }), _c('br'), _vm._v(" "), _c('label', {
    attrs: {
      "for": "content"
    }
  }, [_vm._v("content : ")]), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.content),
      expression: "content"
    }],
    attrs: {
      "type": "text",
      "id": "content"
    },
    domProps: {
      "value": (_vm.content)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.content = $event.target.value
      }
    }
  }), _c('br'), _vm._v(" "), _c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.type),
      expression: "type"
    }],
    on: {
      "change": function($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
          return o.selected
        }).map(function(o) {
          var val = "_value" in o ? o._value : o.value;
          return val
        });
        _vm.type = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "notice"
    }
  }, [_vm._v("공지")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "news"
    }
  }, [_vm._v("뉴스피드")])])]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.addNotice
    }
  }, [_vm._v("등록하기")])]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "listNotice"
  }, [_c('ul', [_vm._l((_vm.noticeList), function(notice) {
    return _c('li', [_c('p', [_vm._v("번호 : " + _vm._s(notice.num))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("제목 : " + _vm._s(notice.name))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("내용 : " + _vm._s(notice.content))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("타입 : " + _vm._s(notice.type))]), _c('br'), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.modifyNotice(notice.num)
        }
      }
    }, [_vm._v("공자수정")]), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.deleteNotice(notice.num, notice)
        }
      }
    }, [_vm._v("공지삭제")]), _vm._v(" "), (notice.num == _vm.num && _vm.noticeModify) ? _c('div', {
      staticClass: "noticeModify"
    }, [_c('label', {
      attrs: {
        "for": "name"
      }
    }, [_vm._v("name : ")]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.name),
        expression: "name"
      }],
      attrs: {
        "type": "name",
        "id": "name"
      },
      domProps: {
        "value": (_vm.name)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.name = $event.target.value
        }
      }
    }), _c('br'), _vm._v(" "), _c('label', {
      attrs: {
        "for": "content"
      }
    }, [_vm._v("content : ")]), _c('input', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.content),
        expression: "content"
      }],
      attrs: {
        "type": "content",
        "id": "content"
      },
      domProps: {
        "value": (_vm.content)
      },
      on: {
        "input": function($event) {
          if ($event.target.composing) { return; }
          _vm.content = $event.target.value
        }
      }
    }), _c('br'), _vm._v(" "), _c('label', {
      attrs: {
        "for": "type"
      }
    }, [_vm._v("type : ")]), _vm._v(" "), _c('select', {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: (_vm.type),
        expression: "type"
      }],
      on: {
        "change": function($event) {
          var $$selectedVal = Array.prototype.filter.call($event.target.options, function(o) {
            return o.selected
          }).map(function(o) {
            var val = "_value" in o ? o._value : o.value;
            return val
          });
          _vm.type = $event.target.multiple ? $$selectedVal : $$selectedVal[0]
        }
      }
    }, [_c('option', {
      attrs: {
        "value": "notice"
      }
    }, [_vm._v("공지")]), _vm._v(" "), _c('option', {
      attrs: {
        "value": "news"
      }
    }, [_vm._v("뉴스")])]), _vm._v(" "), _c('button', {
      on: {
        "click": _vm.modify
      }
    }, [_vm._v("수정하기")])]) : _vm._e(), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])
  }), _vm._v(" "), _c('br')], 2)])]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 436 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.enteringNon) ? _c('div', {
    staticClass: "nonaccount"
  }, [_c('ul', [_vm._l((_vm.members), function(member) {
    return _c('li', [_vm._v("\n      아이디: "), _c('span', [_vm._v(_vm._s(member.userid))]), _c('br'), _vm._v("\n      이름: "), _c('span', [_vm._v(_vm._s(member.username))]), _c('br'), _vm._v("\n      학번 : "), _c('span', [_vm._v(_vm._s(member.studentcode))]), _c('br'), _vm._v("\n      등급 : "), _c('span', [_vm._v(_vm._s(member.rating))]), _c('br'), _vm._v("\n      승인여부 : "), _c('span', [_vm._v(_vm._s(member.account))]), _c('br'), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.account(member.userid, member)
        }
      }
    }, [_vm._v("승인하기")]), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.deletenonuser(member.userid, member)
        }
      }
    }, [_vm._v("유저삭제")]), _vm._v(" "), _c('br')])
  }), _vm._v(" "), _c('br')], 2)]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueTyper = __webpack_require__(139);

var _vueTyper2 = _interopRequireDefault(_vueTyper);

var _axios = __webpack_require__(127);

var _axios2 = _interopRequireDefault(_axios);

var _vueCookie = __webpack_require__(135);

var _vueCookie2 = _interopRequireDefault(_vueCookie);

var _vueAwesomeSwiper = __webpack_require__(134);

var _vueAwesomeSwiper2 = _interopRequireDefault(_vueAwesomeSwiper);

var _jquery = __webpack_require__(63);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(133);

__webpack_require__(131);

var _vuex = __webpack_require__(51);

var _vuex2 = _interopRequireDefault(_vuex);

var _vue = __webpack_require__(64);

var _vue2 = _interopRequireDefault(_vue);

var _router = __webpack_require__(128);

var _router2 = _interopRequireDefault(_router);

var _App = __webpack_require__(136);

var _App2 = _interopRequireDefault(_App);

var _index = __webpack_require__(129);

var _index2 = _interopRequireDefault(_index);

var _vueSweetalert = __webpack_require__(138);

var _vueSweetalert2 = _interopRequireDefault(_vueSweetalert);

var _vueProgressbar = __webpack_require__(137);

var _vueProgressbar2 = _interopRequireDefault(_vueProgressbar);

__webpack_require__(130);

var _lodash = __webpack_require__(132);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.$ = _jquery2.default;

_vue2.default.use(_lodash2.default);
_vue2.default.use(_vueCookie2.default);
_vue2.default.use(_vueProgressbar2.default, {
	color: 'rgb(247, 119, 97)',
	failedColor: 'red',
	thickness: '4px',
	transition: {
		speed: '.1ms',
		opacity: '1s'
	}
});
_vue2.default.use(_vuex2.default);
_vue2.default.use(_axios2.default);
_vue2.default.use(_vueAwesomeSwiper2.default);
_vue2.default.use(_vueTyper2.default);
_vue2.default.use(_vueSweetalert2.default);

_vue2.default.prototype.$http = _axios2.default;

/* eslint-disable no-new */
new _vue2.default({
	el: '#app',
	store: _index2.default,
	router: _router2.default,
	template: '<App/>',
	components: { App: _App2.default }
});

/***/ })
]),[443]);
//# sourceMappingURL=main.8489b726936635a1d10a.js.map