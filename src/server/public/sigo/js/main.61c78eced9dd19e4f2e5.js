webpackJsonp([1,2],Array(93).concat([
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sigo/img/bg.91b13c4.jpg";

/***/ }),
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(63);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(454);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _index = __webpack_require__(410);

var _index2 = _interopRequireDefault(_index);

var _admin = __webpack_require__(404);

var _admin2 = _interopRequireDefault(_admin);

var _problems = __webpack_require__(419);

var _problems2 = _interopRequireDefault(_problems);

var _rank = __webpack_require__(421);

var _rank2 = _interopRequireDefault(_rank);

var _solve = __webpack_require__(420);

var _solve2 = _interopRequireDefault(_solve);

var _mypage = __webpack_require__(415);

var _mypage2 = _interopRequireDefault(_mypage);

var _notice = __webpack_require__(417);

var _notice2 = _interopRequireDefault(_notice);

var _opennotice = __webpack_require__(418);

var _opennotice2 = _interopRequireDefault(_opennotice);

var _notfound = __webpack_require__(416);

var _notfound2 = _interopRequireDefault(_notfound);

var _monitor = __webpack_require__(414);

var _monitor2 = _interopRequireDefault(_monitor);

var _contestintro = __webpack_require__(413);

var _contestintro2 = _interopRequireDefault(_contestintro);

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
    path: '/notice/:num',
    name: 'openNotice',
    component: _opennotice2.default
  }, {
    path: '/contestIntro',
    name: 'contestIntro',
    component: _contestintro2.default
  }, {
    path: '/404',
    name: 'notfound',
    component: _notfound2.default
  }, {
    path: '/monitor',
    name: 'monitor',
    component: _monitor2.default
  }, {
    path: '/*',
    redirect: { name: 'notfound' }
  }]
});

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(63);

var _vue2 = _interopRequireDefault(_vue);

var _vuex = __webpack_require__(64);

var _vuex2 = _interopRequireDefault(_vuex);

var _getters = __webpack_require__(159);

var getters = _interopRequireWildcard(_getters);

var _actions = __webpack_require__(158);

var actions = _interopRequireWildcard(_actions);

var _mutations = __webpack_require__(160);

var mutations = _interopRequireWildcard(_mutations);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vuex2.default);

var state = {
  loadingState: false
};

var store = new _vuex2.default.Store({
  state: state,
  getters: getters,
  actions: actions,
  mutations: mutations
});

exports.default = store;

/***/ }),
/* 131 */,
/* 132 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(393)
__webpack_require__(392)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(166),
  /* template */
  __webpack_require__(448),
  /* scopeId */
  "data-v-88f23c12",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
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
/* 157 */,
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var loadingOn = exports.loadingOn = function loadingOn(_ref) {
  var commit = _ref.commit;
  return commit('loadingOn');
};
var loadingOff = exports.loadingOff = function loadingOff(_ref2) {
  var commit = _ref2.commit;
  return commit('loadingOff');
};

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getterLoadingState = exports.getterLoadingState = function getterLoadingState(state) {
  return state.getterLoadingState;
};

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var loadingOn = exports.loadingOn = function loadingOn(state) {
  state.loadingState = true;
};

var loadingOff = exports.loadingOff = function loadingOff(state) {
  state.loadingState = false;
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
/* 162 */
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
  window.Swiper = __webpack_require__(127);
  __webpack_require__(369);
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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

//
//
//
//

var debounce = __webpack_require__(398);
var monacoLoader = __webpack_require__(452);
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

exports.default = {

  name: 'BounceLoader',

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
      default: '60px'
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
        height: this.size,
        width: this.size,
        borderRadius: this.radius,
        opacity: 0.6,
        position: 'absolute',
        top: 0,
        left: 0
      }
    };
  },

  computed: {
    spinnerBasicStyle: function spinnerBasicStyle() {
      return {
        height: this.size,
        width: this.size,
        position: 'relative'
      };
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
//
//
//
//
//
//
//
//
//
//
//
//

var _vueRecaptcha = __webpack_require__(453);

var _vueRecaptcha2 = _interopRequireDefault(_vueRecaptcha);

var _BounceLoader = __webpack_require__(426);

var _BounceLoader2 = _interopRequireDefault(_BounceLoader);

var _vuex = __webpack_require__(64);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  components: {
    VueRecaptcha: _vueRecaptcha2.default,
    BounceLoader: _BounceLoader2.default
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

  computed: _extends({}, (0, _vuex.mapGetters)(['getterLoadingState']), {
    //로딩 스피너 상태 값
    loadingState: function loadingState() {
      return this.$store.state.loadingState;
    }
  }),
  beforeCreate: function beforeCreate() {
    var _this = this;

    //프로그레스바 시작
    this.$Progress.start();
    //메인은 로딩스피너가 생기지 않음
    if (this.$route.name !== 'index') {
      this.$store.commit('loadingOn');
    }
    //기본 URL 설정
    var ROOT_URL = 'https://algorithm.seoulit.kr/api';
    this.$http.defaults.baseURL = ROOT_URL;
    //쿠키에 저장되있는 토큰을 가져옴
    this.userToken = this.$cookie.get('userToken');
    //쿠키에 토큰이 저장되있는 경우
    if (this.userToken != null) {
      //헤더에 토큰을 추가
      this.$http.defaults.headers.common.Authorization = this.userToken;
      //쿠키에서 받은 토큰값으로 정보를 받아와 로그인 상태를 유지
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
    //라우팅 시 이동히가진 메소드 호출
    this.$router.beforeEach(function (to, from, next) {
      next();
      if (to.name !== 'index') {
        // 로딩창 시작
        _this.$store.commit('loadingOn');
      }
      // 프로그레스바 시작
      _this.$Progress.start();
    });
    // 스코롤 이벤트 리스너 등록
    window.addEventListener('scroll', this.scrollFunction);
  },
  destroyed: function destroyed() {
    window.removeEventListener('scroll', this.scrollFunction);
  },

  methods: _extends({}, (0, _vuex.mapActions)(['loadingOn', 'loadingOff']), {
    scrollFunction: function scrollFunction() {
      // 스크롤 메뉴 변경
      this.scrolled = window.scrollY;
      if (this.scrolled > 200) {
        this.scrollMenu = true;
      } else {
        this.scrollMenu = false;
      }
    },
    problemLoginCheck: function problemLoginCheck() {
      // 문제리스트 입장 체크
      if (this.$cookie.get('userToken') == null) {
        this.$swal('입장 불가', '로그인을 하셨나요?', 'error');
      } else {
        this.$router.push({
          name: 'problems'
        });
      }
    },
    rankLoginCheck: function rankLoginCheck() {
      // 랭킹 입장 체크
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
      // 회원가입 학번 숫자 체크
      var evt = number || window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
        return false;
      }
      return true;
    },
    logout: function logout() {
      // 로그아웃
      this.$swal({
        title: '로그아웃합니다',
        text: '이 상자는 2초후에 사라집니다',
        timer: 2000
      });
      this.cookieDel();
      // 쿠키삭제
      this.$router.push({
        // 메인으로 이동
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

    // 켑챠 함수
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

    // 폼 제출
    submit: function submit() {
      var _this2 = this;

      var errMsg = void 0;
      if (this.signState === true) {
        // 로그인
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
              // 로그인 성공 모달
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
          // 에러시 모달 메세지
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
          // 에러 모달
          _this2.$swal({
            title: '로그인 실패',
            text: errMsg,
            type: 'error'
          }).then(function () {
            if (_this2.infoSubmit === true) {
              // 로그인 5회 실패시 회원 정보를 물어보는 모달
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
          // 회원가입 성공
          _this2.closeModal();
          var username = resRegister.data.username;
          _this2.$swal({
            // 회원가입 성공 모달
            title: '회원가입 성공',
            text: '\uC548\uB155\uD558\uC138\uC694 ' + username + '\uB2D8',
            type: 'success'
          });
        }).catch(function (error) {
          _this2.closeModal();
          // 에러시 모달 메세지
          if (error.response.data.message === 'validation error') {
            errMsg = '정보를 제대로 기입해주세요';
          }
          // 에러 모달
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

      // 로그인 5회 실패시 회원 정보를 물어보는 모달
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
            // 인증 성공
            title: '확인 완료되었습니다',
            text: '다시 로그인 해주세요',
            type: 'success'
          });
        }).catch(function () {
          _this3.$swal({
            // 인증 실패
            title: '확인 실패하였습니다',
            text: '다시 시도해주세요',
            type: 'error'
          }).then(function () {
            // 다시 인증
            _this3.failReset();
          });
        });
      });
    }
  })
};

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _member = __webpack_require__(405);

var _member2 = _interopRequireDefault(_member);

var _problemmanage = __webpack_require__(408);

var _problemmanage2 = _interopRequireDefault(_problemmanage);

var _noticemanage = __webpack_require__(407);

var _noticemanage2 = _interopRequireDefault(_noticemanage);

var _nonaccount = __webpack_require__(406);

var _nonaccount2 = _interopRequireDefault(_nonaccount);

var _problemresult = __webpack_require__(409);

var _problemresult2 = _interopRequireDefault(_problemresult);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  name: 'admin',
  components: {
    // 컴포넌트 등록
    member: _member2.default,
    problemmanage: _problemmanage2.default,
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
    var _this = this;

    this.$nextTick(function () {
      // 데이터 갱신 완료시 프로그레스바, 로딩창 종료
      _this.$store.commit('loadingOff');
      _this.$Progress.finish();
    });
  },
  beforeCreate: function beforeCreate() {
    var _this2 = this;

    // 토큰 테스트
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken != null) {
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('users/my-info').then(function (resInfo) {
        // 유저 정보 확인
        _this2.userRating = resInfo.data.user.rating;
        if (_this2.userRating !== 3) {
          // 어드민이 아닐 경우
          _this2.$swal({
            // 입장 실패 모달
            title: '입장 실패',
            text: '어드민이 아닙니다',
            type: 'error',
            allowOutsideClick: false
          }).then(function () {
            // 메인으로 이동
            location.href = '/';
          });
        } else {
          // 어드민인 경우
          _this2.adminState = true;
          _this2.entering = true;
        }
      }).catch(function (error) {
        // 유저 정보 확인
        _this2.$swal({
          // 입장 실패 모달
          title: '유저 정보 조회 실패',
          text: error,
          type: 'error',
          allowOutsideClick: false
        }).then(function () {
          // 메인으로 이동
          location.href = '/';
        });
      });
    } else {
      // 토큰 인증 실패시
      this.$swal({
        // 입장 실패 모달
        title: '입장 실패',
        text: '로그인을 해주세요',
        type: 'error',
        allowOutsideClick: false
      }).then(function () {
        // 메인으로 이동
        location.href = '/';
      });
    }
  },

  methods: {
    // 메뉴 컴포넌트 클릭 함수
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

/***/ }),
/* 168 */
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

exports.default = {
  data: function data() {
    return {
      members: [],
      enteringMember: false
    };
  },
  created: function created() {
    // 유저 정보 로드
    this.getMember();
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      // 데이터 갱신 완료시 프로그레스바, 로딩창 종료
      _this.$store.commit('loadingOff');
      _this.$Progress.finish();
    });
  },

  methods: {
    deleteuser: function deleteuser(userid, member) {
      var _this2 = this;

      // 유저 삭제
      this.$swal({
        // 삭제 확인 모달
        title: '유저 삭제',
        text: '정말로 삭제하시겠습니까?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소'
      }).then(function () {
        _this2.$http.delete('users/' + userid).then(function () {
          // 삭제 완료
          _this2.$swal({
            // 삭제 완료 모달
            title: '삭제 완료',
            text: userid + ' \uB2D8\uC758 \uACC4\uC815\uC774 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4',
            type: 'success'
          });
          // 리스트의 해당 인덱스의 유저 삭제
          _this2.members.splice(_this2.members.indexOf(member), 1);
        }).catch(function (err) {
          // 삭제 실패
          _this2.$swal({
            // 삭제 실패 모달
            title: '삭제 실패',
            text: err,
            type: 'error'
          });
        });
      }).catch(function () {
        // 삭제 실패
        _this2.$swal({
          // 삭제 실패 모달
          title: '삭제 실패',
          text: err,
          type: 'error'
        });
      });
    },
    getMember: function getMember() {
      var _this3 = this;

      // 유저 정보 로드
      this.$http.get('users').then(function (res) {
        // 로드 성공
        var i = 0;
        while (i < res.data.users.length) {
          // 데이터 추가
          _this3.members.push({
            userid: res.data.users[i].userId,
            username: res.data.users[i].username,
            studentcode: res.data.users[i].studentCode,
            score: res.data.users[i].score
          });
          i += 1;
        }
        _this3.enteringMember = true;
      }).catch(function (err) {
        // 유저 정보 로드 실패
        _this3.$swal({
          // 로드 실패 모달
          title: '유저 로드 실패',
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
//
//
//
//
//
//
//
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
    // 유저 정보 로드
    this.userToken = this.$cookie.get('userToken');
    this.getMember();
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      // 데이터 갱신 완료시 프로그레스바, 로딩창 종료
      _this.$store.commit('loadingOff');
      _this.$Progress.finish();
    });
  },

  methods: {
    account: function account(userid, member) {
      var _this2 = this;

      // 유저 승인
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('users/account/' + userid).then(function (res) {
        // 승인 성공
        _this2.$swal({
          // 성공 모달
          title: '승인 완료',
          text: userid + '\uB2D8\uC744 \uC2B9\uC778\uD558\uC600\uC2B5\uB2C8\uB2E4',
          type: 'success'
        });
        // 리스트의 해당 인덱스의 유저 삭제
        _this2.members.splice(_this2.members.indexOf(member), 1);
      });
    },
    deletenonuser: function deletenonuser(userid, member) {
      var _this3 = this;

      // 유저 삭제
      this.$swal({
        // 확인 모달
        title: '유저 삭제',
        text: '정말로 삭제하시겠습니까?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소'
      }).then(function () {
        // 유저 삭제 확인
        _this3.$http.delete('users/' + userid).then(function () {
          // 삭제 성공
          _this3.$swal({
            // 성공 모달
            title: '삭제 완료',
            text: userid + '\uB2D8\uC758 \uACC4\uC815\uC774 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4',
            type: 'success'
          });
          // 리스트의 해당 인덱스의 유저 삭제
          _this3.members.splice(_this3.members.indexOf(member), 1);
        }).catch(function (err) {
          // 삭제 실패
          _this3.$swal({
            // 실패 모달
            title: '삭제 실패',
            text: err,
            type: 'error'
          });
        });
      }).catch(function () {
        // 삭제 실패
        _this3.$swal({
          // 실패 모달
          title: '삭제 실패',
          text: err,
          type: 'error'
        });
      });
    },
    getMember: function getMember() {
      var _this4 = this;

      // 유저 정보 로드
      this.$http.defaults.headers.common.Authorization = this.userToken;
      // 승인되지 않은 유저 정보 로드
      this.$http.get('users/non-account').then(function (res) {
        var i = 0;
        while (i < res.data.users.length) {
          // 데이터 추가
          _this4.members.push({
            userid: res.data.users[i].userId,
            username: res.data.users[i].username,
            studentcode: res.data.users[i].studentCode,
            rating: res.data.users[i].rating,
            account: res.data.users[i].account
          });
          i += 1;
        }
        _this4.enteringNon = true;
      });
    }
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
    // 공지 로드
    this.loadNotice();
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      // 데이터 갱신 완료시 프로그레스바, 로딩창 종료
      _this.$store.commit('loadingOff');
      _this.$Progress.finish();
    });
  },

  methods: {
    modify: function modify() {
      var _this2 = this;

      // 공지 수정
      var date = new Date();
      this.$http.put('notices', {
        noticenum: this.num,
        noticename: this.name,
        contents: this.content
      }).then(function () {
        // 수정 성공
        _this2.$swal({
          // 성공 모달
          title: '수정 성공',
          text: '공지를 수정하였습니다',
          type: 'success'
        });
      }).catch(function (err) {
        // 수정 실패
        var errMsgs = void 0;
        if (err.response.data.message === 'validation error') {
          errMsgs = '모든 정보를 입력해주세요';
        }
        _this2.$swal({
          // 실패 모달
          title: '수정 실패',
          text: errMsgs,
          type: 'error'
        });
      });
    },
    noticeAdd: function noticeAdd() {
      // 공지 추가 버튼
      this.noticeAddState = !this.noticeAddState;
      if (this.noticeAddState) {
        this.noticeMsg = '닫기';
      } else {
        this.noticeMsg = '공지 등록하기';
      }
    },
    modifyNotice: function modifyNotice(num) {
      var _this3 = this;

      // 공지 수정 정보 로드
      this.noticeAddState = false;
      this.noticeMsg = '공지 등록하기';
      this.$http.get('notices/' + num).then(function (res) {
        // 공지 정보 로드 성공 

        _this3.noticeModify = !_this3.noticeModify;
        _this3.num = res.data.notice.num;
        _this3.name = res.data.notice.noticeName;
        _this3.content = res.data.notice.contents;
        _this3.type = res.data.notice.type;
      }).catch(function (err) {
        // 공지 정보 로드 실패
        _this3.$swal({
          // 실패 모달
          title: '공지 조회 실패',
          text: err,
          type: 'error'
        });
      });
    },
    deleteNotice: function deleteNotice(num, notice) {
      var _this4 = this;

      // 공지 삭제
      this.$swal({
        // 삭제 확인 모달
        title: '공지 삭제',
        text: '정말로 삭제하시겠습니까?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소'
      }).then(function () {
        // 삭제 확인
        _this4.$http.delete('notices/' + num).then(function () {
          // 삭제 완료
          _this4.$swal({
            // 성공 모달
            title: '삭제 완료',
            test: num + '\uBC88 \uACF5\uC9C0\uB97C \uC0AD\uC81C\uD558\uC168\uC2B5\uB2C8\uB2E4',
            type: 'success'
          });
          // 리스트의 해당 인덱스의 공지 삭제
          _this4.noticeList.splice(_this4.noticeList.indexOf(notice), 1);
        }).catch(function (err) {
          //삭제 실패
          _this4.$swal({
            // 실패 모달
            title: '삭제 실패',
            text: err,
            type: 'error'
          });
        });
      }).catch(function () {
        // 삭제 실패
        _this4.$swal({
          // 실패 모달
          title: '삭제 실패',
          text: err,
          type: 'error'
        });
      });
    },
    loadNotice: function loadNotice() {
      var _this5 = this;

      // 공지 로드
      this.$http.get('notices').then(function (res) {
        var i = 0;
        while (i < res.data.notices.length) {
          // 데이터 추가
          _this5.noticeList.push({
            name: res.data.notices[i].noticeName,
            content: res.data.notices[i].contents,
            type: res.data.notices[i].type,
            num: res.data.notices[i].num
          });
          _this5.lastNotice = res.data.notices[i].num;
          i += 1;
        }
        _this5.enteringNoticemanage = true;
      }).catch(function (err) {
        // 공지 로드 실패
        _this5.$swal({
          // 실패 모달
          title: '공지 로드 실패',
          text: err.response.data.message,
          type: 'error'
        });
      });
    },
    addNotice: function addNotice() {
      var _this6 = this;

      // 공지 등록
      this.$http.post('notices', {
        noticename: this.name,
        contents: this.content,
        type: this.type
      }).then(function () {
        // 등록 성공
        _this6.$swal(
        //성공 모달
        '등록 성공', '공지를 등록하였습니다', 'success');
        // 데이터 추가
        _this6.noticeList.push({
          num: _this6.lastNotice + 1,
          name: _this6.name,
          content: _this6.content,
          type: _this6.type
        });
      }).catch(function (err) {
        // 등록 실패
        var errMsg = void 0;
        if (err.response.data.message === 'validation error') {
          errMsg = '정보를 모두 입력해주세요';
        }
        _this6.$swal({
          // 실패 모달
          title: '등록 실패',
          text: errMsg,
          type: 'error'
        });
      });
    }
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

exports.default = {
  data: function data() {
    return {
      data: [],
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
    // 문제 로드
    this.fetchData();
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      // 데이터 갱신 완료시 프로그레스바, 로딩창 종료
      _this.$store.commit('loadingOff');
      _this.$Progress.finish();
    });
  },

  methods: {
    openAdd: function openAdd() {
      // 문제 등록 버튼
      this.addState = !this.addState;
      if (this.addState) {
        this.addMsg = '닫기';
      } else {
        this.addMsg = '문제 등록하기';
      }
    },
    deleteData: function deleteData(num, item) {
      var _this2 = this;

      // 문제 삭제
      this.$swal({
        // 삭제 확인 모달
        title: '문제 삭제',
        text: '정말로 삭제하시겠습니까?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소'
      }).then(function () {
        // 삭제 확인
        _this2.userToken = _this2.$cookie.get('userToken');
        _this2.$http.defaults.headers.common.Authorization = _this2.userToken;
        _this2.$http.delete('problems/' + num).then(function () {
          // 삭제 성공
          _this2.$swal({
            // 성공 모달
            title: '삭제 완료',
            text: num + '\uBC88 \uBB38\uC81C\uB97C \uC0AD\uC81C\uD558\uC168\uC2B5\uB2C8\uB2E4',
            type: 'success'
          });
          // 리스트의 해당 인덱스의 문제 삭제
          _this2.items.splice(_this2.items.indexOf(item), 1);
        }).catch(function (err) {
          // 삭제 실패
          _this2.$swal({
            // 실패 모달
            title: '삭제 실패',
            text: err,
            type: 'error'
          });
        });
      }).catch(function () {
        // 삭제 실패
        _this2.$swal({
          // 실패 모달
          title: '삭제 실패',
          text: err,
          type: 'error'
        });
      });
    },
    modify: function modify() {
      var _this3 = this;

      // 문제 수정
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
        type: this.problemType
      }).then(function () {
        // 수정 성공
        _this3.$swal({
          // 성공 모달
          title: '수정 성공',
          text: '문제를 수정하였습니다',
          type: 'success'
        });
      }).catch(function (err) {
        // 수정 실패
        var errMsgs = void 0;
        if (err.response.data.message === 'validation error') {
          errMsgs = '모든 정보를 입력해주세요';
        }
        _this3.$swal({
          // 실패 모달
          title: '수정 실페',
          text: errMsgs,
          type: 'error'
        });
      });
    },
    modifyData: function modifyData(num) {
      var _this4 = this;

      // 해당 문제 정보 로드
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('problems/' + num).then(function (res) {
        // 문제 정보 로드 성공
        _this4.addState = false;
        _this4.addMsg = '문제 등록하기';
        _this4.modifyState = !_this4.modifyState;
        _this4.problemName = res.data.problem.problemName;
        _this4.source = res.data.problem.source;
        _this4.inputExample = res.data.problem.problemData.inputExample;
        _this4.inputExample2 = res.data.problem.problemData.inputExample2;
        _this4.outputExample = res.data.problem.problemData.outputExample;
        _this4.outputExample2 = res.data.problem.problemData.outputExample2;
        _this4.memoryLimit = res.data.problem.problemData.memoryLimit;
        _this4.timeLimit = res.data.problem.problemData.memoryLimit;
        _this4.problemNum = res.data.problem.num;
        _this4.score = res.data.problem.score;
        _this4.explanation = res.data.problem.explanation;
        _this4.type = res.data.problem.type;
      }).catch(function (err) {
        // 로드 실패
        _this4.$swal({
          title: '문제 조회 실패',
          text: err,
          type: 'error'
        });
      });
    },
    solveListData: function solveListData(num) {
      var _this5 = this;

      // 해당 문제 결과 로드
      this.solveList = [];
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('solution').then(function (res) {
        // 문제 결과 로드 성공
        var i = 0;
        var username = void 0;
        var id = void 0;
        var studentcode = void 0;
        var result = void 0;
        var date = void 0;
        var code = void 0;
        while (i < res.data.resolves.length) {
          if (res.data.resolves[i].resolveData.problemNum === num) {
            // 문제 결과의 번호와 해당 문제의 번호가 맞으면 데이터 추가
            id = res.data.resolves[i].userId;
            result = res.data.resolves[i].resolveData.result;
            date = res.data.resolves[i].resolveData.date;
            code = res.data.resolves[i].resolveData.code;
            _this5.$http.defaults.headers.common.Authorization = _this5.userToken;
            // 해당 아이디의 정보 로드
            date = res.data.resolves[i].resolveData.date.replace('T', ', ');
            date = date.substring(0, date.length - 8);

            _this5.$http.get('users/search/' + id).then(function (userInfo) {
              username = userInfo.data.users.username;
              studentcode = userInfo.data.users.studentCode;
            });
            // 데이터 추가                  
            _this5.solveList.push({
              username: username,
              studentcode: studentcode,
              result: result,
              date: date,
              code: code
            });
          }
          i += 1;
        }
      }).catch(function (err) {
        // 문제 결과 로드 실패
        _this5.$swal({
          // 실패 모달
          title: '결과 로드 실패',
          text: err,
          type: 'error'
        });
      });
    },
    isNumber: function isNumber(number) {
      // 문제 수정 추가시, 메모리, 시간 제한 숫자 체크
      var evt = number || window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
        return false;
      }
      return true;
    },
    add: function add() {
      var _this6 = this;

      // 문제 등록
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
        // 등록 성공
        _this6.$swal(
        // 성공 모달
        '등록 성공', '문제를 등록하였습니다', 'success');
        // 데이터 추가
        _this6.items.push({
          num: _this6.lastNum + 1,
          name: _this6.problemName,
          source: _this6.source
        });
      }).catch(function (err) {
        // 등록 실패
        var errMsg = void 0;
        if (err.response.data.message === 'validation error') {
          errMsg = '정보가 부족합니다';
        }
        _this6.$swal({
          // 실패 모달
          title: '등록 실패',
          text: errMsg,
          type: 'error'
        });
      });
    },
    fetchData: function fetchData() {
      var _this7 = this;

      // 문제 로드
      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('problems').then(function (res) {
        var i = 0;
        console.log(res);
        while (i < res.data.problems.length) {
          // 데이터 추가
          _this7.data.push({
            num: res.data.problems[i].num,
            name: res.data.problems[i].problemName,
            source: res.data.problems[i].source
          });
          i += 1;
        }
        _this7.$http.get('problems/contest')
        // 대회 문제 로드
        .then(function (resContest) {
          var j = 0;
          while (j < resContest.data.problems.length) {
            _this7.data.push({
              num: resContest.data.problems[j].num,
              name: resContest.data.problems[j].problemName,
              source: resContest.data.problems[j].source
            });
            j += 1;
          }
          if (j === resContest.data.problems.length) {
            // 문제 리스트 정렬                  
            var sort = 'num';
            _this7.data.sort(function (a, b) {
              return a[sort] - b[sort];
            });
            i = 0;
            while (i < _this7.data.length) {
              // 데이터 추가
              _this7.items.push({
                num: _this7.data[i].num,
                name: _this7.data[i].name,
                source: _this7.data[i].source
              });
              i += 1;
            }
          }
        }).catch(function (err) {
          // 문제 로드 실패
          _this7.$swal({
            // 실패 모달
            title: '문제 로드 실패',
            text: err,
            type: 'error'
          });
        });
        _this7.enteringProblemmanage = true;
      }).catch(function (err) {
        // 문제 로드 실패
        _this7.$swal({
          // 실패 모달
          title: '문제 로드 실패',
          text: err,
          type: 'error'
        });
      });
    }
  }
};

/***/ }),
/* 172 */
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
    // 문제 결과 로드
    this.ratio();
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      // 데이터 갱신 완료시 프로그레스바, 로딩창 종료
      _this.$store.commit('loadingOff');
      _this.$Progress.finish();
    });
  },

  methods: {
    ratio: function ratio() {
      var _this2 = this;

      // 문제 결과 로드
      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('solution').then(function (res) {
        // 로드 성공
        var i = 0;
        while (i < res.data.resolves.length) {
          var date = res.data.resolves[i].resolveData.date.replace('T', ', ');
          _this2.problemData.push({
            userid: res.data.resolves[i].userId,
            code: res.data.resolves[i].resolveData.code,
            date: date.substring(0, date.length - 8),
            lang: res.data.resolves[i].resolveData.language,
            memory: res.data.resolves[i].resolveData.memory,
            num: res.data.resolves[i].resolveData.problemNum,
            result: res.data.resolves[i].resolveData.result,
            time: res.data.resolves[i].resolveData.time
          });
          // 데이터 추가
          _this2.ratioData.push(_defineProperty({}, i, res.data.resolves[i].resolveData.problemNum));
          i += 1;
        }
        _this2.enteringProblemresult = true;
      }).catch(function (err) {
        // 문제 결과 로드 실패
        _this2.$swal({
          // 실페 모달
          title: '문제 결과 로드 실패',
          text: err,
          type: 'error'
        });
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

var _timeline = __webpack_require__(412);

var _timeline2 = _interopRequireDefault(_timeline);

var _main = __webpack_require__(411);

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
    // 컴포넌트 등록
    parallax: _main2.default,
    timeline: _timeline2.default
  },
  data: function data() {
    return {};
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      // 데이터 갱신 완료시 프로그레스바, 로딩창 종료
      _this.$store.commit('loadingOff');
      _this.$Progress.finish();
    });
  }
};

/***/ }),
/* 174 */
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

exports.default = {
  name: 'parallax',
  data: function data() {
    return {
      swiperOption: {
        // 스와이퍼 옵션
        parallax: true,
        speed: 600,
        autoplay: 5000,
        autoplayDisableOnInteraction: false
      }
    };
  }
};

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

exports.default = {
  name: 'sigo',
  data: function data() {
    return {};
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

exports.default = {
  name: 'contestIntroduce',
  data: function data() {
    return {};
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      // 데이터 갱신 완료시 프로그레스바, 로딩창 종료
      _this.$store.commit('loadingOff');
      _this.$Progress.finish();
    });
  }
};

/***/ }),
/* 177 */
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

var i = 0;
var monitoring = null;
exports.default = {
    name: 'monitor',
    data: function data() {
        return {
            entering: false,
            monitorState: 'normal',
            monitorData: [],
            count: 0,
            success: 0,
            fail: 0,
            compileError: 0,
            resolveLength: 0
        };
    },
    created: function created() {
        var _this = this;

        // 토큰 테스트
        this.userToken = this.$cookie.get('userToken');
        if (this.userToken != null) {
            this.$http.defaults.headers.common.Authorization = this.userToken;
            this.$http.get('users/my-info').then(function (resInfo) {
                // 유저정보 확인
                _this.userRating = resInfo.data.user.rating;
                if (_this.userRating !== 3) {
                    // 어드민이 아닌 경우
                    _this.$swal({
                        // 실패 모달
                        title: '입장 실패',
                        text: '어드민이 아닙니다',
                        type: 'error',
                        allowOutsideClick: false
                    }).then(function () {
                        // 메인으로 이동
                        location.href = '/';
                    });
                } else {
                    // 어드민인 경우
                    _this.entering = true;
                    // 모니터링 시작                            
                    _this.monitoring('first');
                    monitoring = setInterval(function () {
                        // 3초마다 모니터링 시작
                        _this.monitoring('more');
                    }, 3000);
                }
            }).catch(function (error) {
                // 유저 정보 조회 실패
                _this.$swal({
                    // 실패 모달
                    title: '유저 정보 조회 실패',
                    text: error,
                    type: 'error',
                    allowOutsideClick: false
                }).then(function () {
                    // 메인으로 이동
                    location.href = '/';
                });
            });
        } else {
            // 토큰 테스트 실패
            this.$swal({
                // 실패 모달
                title: '입장 실패',
                text: '로그인을 해주세요',
                type: 'error',
                allowOutsideClick: false
            }).then(function () {
                // 메인으로 이동
                location.href = '/';
            });
        }
    },
    mounted: function mounted() {
        var _this2 = this;

        this.$nextTick(function () {
            // 데이터 갱신 완료시 프로그레스바, 로딩창 종료
            _this2.$store.commit('loadingOff');
            _this2.$Progress.finish();
        });
    },

    methods: {
        normalMonitor: function normalMonitor() {
            var _this3 = this;

            // 일반 모니터링
            this.monitorState = 'normal';
            this.monitorData = [];
            i = 0;
            this.monitoring('first');
            clearInterval(monitoring);
            monitoring = setInterval(function () {
                _this3.monitoring('more');
            }, 3000);
        },
        contestMonitor: function contestMonitor() {
            var _this4 = this;

            // 대회 모니터링
            this.monitorState = 'contest';
            this.monitorData = [];
            i = 0;
            this.monitoring('first');
            clearInterval(monitoring);
            monitoring = setInterval(function () {
                _this4.monitoring('more');
            }, 3000);
        },
        codeView: function codeView(item) {
            this.$swal({
                title: 'Code',
                html: '<pre style="text-align:left;">' + item.code + '</pre>'
            });
        },
        contestOpen: function contestOpen() {
            var _this5 = this;

            this.$http.get('users/contest/true').then(function () {
                _this5.$swal('대회 오픈', '대회가 시작되었습니다.', 'success');
            }).catch(function (err) {
                _this5.$swal({
                    title: '대회 오픈 실패',
                    text: err,
                    type: 'error'
                });
            });
        },
        contestClose: function contestClose() {
            var _this6 = this;

            this.$http.get('users/contest/false').then(function () {
                _this6.$swal('대회 종료', '대회가 종료되었습니다.', 'success');
            }).catch(function (err) {
                _this6.$swal({
                    title: '대회 종료 실패',
                    text: err,
                    type: 'error'
                });
            });
        },
        monitoring: function monitoring(state) {
            var _this7 = this;

            // 문제 결과 로드
            this.$http.get('solution').then(function (res) {
                // 로드 성공
                if (state === 'first') {
                    // 처음 모니터링하는 경우
                    _this7.success = 0;
                    _this7.fail = 0;
                    _this7.count = 0;
                    _this7.compileError = 0;
                    _this7.resolveLength = 0;
                    while (i < res.data.resolves.length) {
                        if (_this7.monitorState === 'normal') {
                            // 일반 모니터링인 경우
                            if (res.data.resolves[i].resolveData.problemType === 'normal') {
                                var data = res.data.resolves[i].resolveData.date.replace('T', ', ');
                                // 성공 실패 총 결과 
                                if (res.data.resolves[i].resolveData.result === 'success') {
                                    _this7.success += 1;
                                } else if (res.data.resolves[i].resolveData.result === 'fail') {
                                    _this7.fail += 1;
                                } else if (res.data.resolves[i].resolveData.result === 'compile error') {
                                    _this7.compileError += 1;
                                }
                                _this7.count += 1;
                                // 데이터 추가
                                _this7.monitorData.push({
                                    userid: res.data.resolves[i].userId,
                                    code: res.data.resolves[i].resolveData.code,
                                    date: data.substring(0, data.length - 8),
                                    memory: res.data.resolves[i].resolveData.memory,
                                    num: res.data.resolves[i].resolveData.problemNum,
                                    result: res.data.resolves[i].resolveData.result,
                                    time: res.data.resolves[i].resolveData.time
                                });
                            }
                        } else if (_this7.monitorState === 'contest') {
                            // 대회 모니터링인 경우
                            if (res.data.resolves[i].resolveData.problemType === 'contest') {
                                var _data = res.data.resolves[i].resolveData.date.replace('T', ', ');
                                // 성공 실패 총 결과                                         
                                if (res.data.resolves[i].resolveData.result === 'success') {
                                    _this7.success += 1;
                                } else if (res.data.resolves[i].resolveData.result === 'fail') {
                                    _this7.fail += 1;
                                } else if (res.data.resolves[i].resolveData.result === 'compile error') {
                                    _this7.compileError += 1;
                                }
                                _this7.count += 1;
                                // 데이터 추가
                                _this7.monitorData.push({
                                    userid: res.data.resolves[i].userId,
                                    code: res.data.resolves[i].resolveData.code,
                                    date: _data.substring(0, _data.length - 8),
                                    memory: res.data.resolves[i].resolveData.memory,
                                    num: res.data.resolves[i].resolveData.problemNum,
                                    result: res.data.resolves[i].resolveData.result,
                                    time: res.data.resolves[i].resolveData.time
                                });
                            }
                        }
                        i += 1;
                        // 현재 개수 저장
                        _this7.resolveLength = _this7.count;
                    }
                } else if (state === 'more') {
                    // 처음 이후 모니터링
                    i = 0;
                    _this7.count = 0;
                    if (_this7.monitorState === 'normal') {
                        // 일반 모니터링인 경우
                        while (i < res.data.resolves.length) {
                            // 문제 결과 개수 로드                                    
                            if (res.data.resolves[i].resolveData.problemType === 'normal') {
                                _this7.count += 1;
                            }
                            i += 1;
                        }
                    } else if (_this7.monitorState === 'contest') {
                        // 대회 모니터링인 경우
                        while (i < res.data.resolves.length) {
                            // 문제 결과 개수 로드
                            if (res.data.resolves[i].resolveData.problemType === 'contest') {
                                _this7.count += 1;
                            }
                            i += 1;
                        }
                    }
                    if (_this7.resolveLength !== _this7.count) {
                        // 전의 문제결과 개수와 현재 문제결과의 개수가 다른 경우
                        // 최신문제가 인덱스 0 이므로 0부터 시작
                        i = _this7.count - 1 - _this7.resolveLength;
                        while (i >= 0) {
                            if (_this7.monitorState === 'normal') {
                                // 일반 모니터링인 경우
                                if (res.data.resolves[i].resolveData.problemType === 'normal') {
                                    var _data2 = res.data.resolves[i].resolveData.date.replace('T', ', ');
                                    // 성공 샐피 총 결과
                                    if (res.data.resolves[i].resolveData.result === 'success') {
                                        _this7.success += 1;
                                    } else if (res.data.resolves[i].resolveData.result === 'fail') {
                                        _this7.fail += 1;
                                    } else if (res.data.resolves[i].resolveData.result === 'compile error') {
                                        _this7.compileError += 1;
                                    }
                                    // 데이터를 앞에서부터 추가
                                    _this7.monitorData.unshift({
                                        userid: res.data.resolves[i].userId,
                                        code: res.data.resolves[i].resolveData.code,
                                        date: _data2.substring(0, _data2.length - 8),
                                        memory: res.data.resolves[i].resolveData.memory,
                                        num: res.data.resolves[i].resolveData.problemNum,
                                        result: res.data.resolves[i].resolveData.result,
                                        time: res.data.resolves[i].resolveData.time
                                    });
                                }
                            } else if (_this7.monitorState === 'contest') {
                                if (res.data.resolves[i].resolveData.problemType === 'contest') {
                                    var _data3 = res.data.resolves[i].resolveData.date.replace('T', ', ');
                                    // 성공 실패 총 결과
                                    if (res.data.resolves[i].resolveData.result === 'success') {
                                        _this7.success += 1;
                                    } else if (res.data.resolves[i].resolveData.result === 'fail') {
                                        _this7.fail += 1;
                                    } else if (res.data.resolves[i].resolveData.result === 'compile error') {
                                        _this7.compileError += 1;
                                    }
                                    // 데이터를 앞에서부터 추가
                                    _this7.monitorData.unshift({
                                        userid: res.data.resolves[i].userId,
                                        code: res.data.resolves[i].resolveData.code,
                                        date: _data3.substring(0, _data3.length - 8),
                                        memory: res.data.resolves[i].resolveData.memory,
                                        num: res.data.resolves[i].resolveData.problemNum,
                                        result: res.data.resolves[i].resolveData.result,
                                        time: res.data.resolves[i].resolveData.time
                                    });
                                }
                            }
                            i -= 1;
                        }
                        // 현재 개수 저장
                        _this7.resolveLength = _this7.count;
                    }
                }
            }).catch(function (err) {
                // 문제 결과 로드 실패
                _this7.$swal({
                    // 실패 모달
                    title: '모니터링 페이지 오류',
                    text: err,
                    type: 'error'
                }).then(function () {
                    // 메인으로 이동
                    location.href = '/';
                });
            });
        }
    }
};

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
      entering: false,
      score: 0
    };
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      // 데이터 갱신 완료시 프로그레스바, 로딩창 종료
      _this.$store.commit('loadingOff');
      _this.$Progress.finish();
    });
  },
  beforeCreate: function beforeCreate() {
    var _this2 = this;

    //          토큰 테스트
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken != null) {
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('users/my-info').then(function (resInfo) {
        _this2.username = resInfo.data.user.username;
        _this2.studentcode = resInfo.data.user.studentCode;
        _this2.userid = resInfo.data.user.userId;
        _this2.score = resInfo.data.user.score;
        _this2.$http.get('solution/resultsuccess').then(function (res) {
          if (res.resolves != null) {
            // 문제 푼 결과가 있는 경우
            _this2.successCount = res.data.resolves.length;
            // 최근 5문제만 출력
            var i = res.data.resolves.length - 5;
            while (i < res.data.resolves.length) {
              var date = res.data.resolves[i].resolveData.date.replace('T', ', ');
              date = date.substring(0, date.length - 8);
              // 데이터 추가
              _this2.recentProblem.push({
                num: res.data.resolves[i].resolveData.problemNum,
                date: date
              });
              i += 1;
            }
          }
          _this2.entering = true;
        }).catch(function (err) {
          // 문제 결과 조회 실패
          _this2.$swal({
            // 실패 모달
            title: '문제 결과 조회 실패',
            text: err,
            type: 'error',
            allowOutsideClick: false
          }).then(function () {
            // 메인으로 이동
            location.href = '/';
          });
        });
      }).catch(function (error) {
        // 유저 조회 실패
        _this2.$swal({
          // 실패 모달
          title: '유저 조회 실패',
          text: error,
          type: 'error',
          allowOutsideClick: false
        }).then(function () {
          // 메인으로 이동
          location.href = '/';
        });
      });
    } else {
      // 토큰 인증 실패
      this.$swal({
        // 실패 모달
        title: '입장 실패',
        text: '로그인을 해주세요',
        type: 'error',
        allowOutsideClick: false
      }).then(function () {
        // 메인으로 이동
        location.href = '/';
      });
    }
  }
};

/***/ }),
/* 179 */
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
  data: function data() {
    return {};
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    this.$nextTick(function () {
      // 데이터 갱신 완료시 프로그레스바, 로딩창 종료
      _this.$store.commit('loadingOff');
      _this.$Progress.finish();
    });
  }
};

/***/ }),
/* 180 */
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

var i = 0;
var end = 10;
var length = void 0;
exports.default = {
  name: 'notice',
  data: function data() {
    return {
      notices: [],
      entering: false,
      loadState: true
    };
  },
  updated: function updated() {
    var _this = this;

    this.$nextTick(function () {
      // 데이터 갱신 완료시 프로그레스바, 로딩창 종료
      _this.$store.commit('loadingOff');
      _this.$Progress.finish();
    });
  },
  created: function created() {
    var _this2 = this;

    // 공지 로드
    this.$http.get('notices').then(function (res) {
      i = 0;
      length = res.data.notices.length;
      if (length <= 10) {
        // 공지가 10개 이하인 경우
        end = length;
        _this2.loadState = false;
      }
      while (i < end) {
        var date = res.data.notices[i].date.replace('T', ', ');
        date = date.substring(0, date.length - 8);
        if (res.data.notices[i].type === 'notice') {
          // 데이터 추가
          _this2.notices.push({
            num: res.data.notices[i].num,
            noticename: res.data.notices[i].noticeName,
            date: date
          });
        }
        i += 1;
      }
      _this2.entering = true;
    }).catch(function (err) {
      // 공지 로드 실패
      _this2.$swal({
        // 실패 모달
        title: '공지 로드 실패',
        text: err,
        type: 'error',
        allowOutsideClick: false
      }).then(function (res) {
        // 메인으로 이동
        location.href = '/';
      });
    });
  },

  methods: {
    scrollUp: function scrollUp() {
      // 화면 상단으로 스크롤 애니메이션
      $('html, body').stop().animate({
        scrollTop: 0
      }, 500);
    },
    open: function open(num) {
      // 공지 클릭 시
      location.href = 'https://algorithm.seoulit.kr/notice/' + num;
    },
    loadList: function loadList() {
      var _this3 = this;

      // 공지 추가 로드
      this.$http.get('notices').then(function (res) {
        // 처음 공지 로드의 마지막부터 시작
        i = end;
        end += 10;
        if (i / 10 === parseInt(length / 10, 10)) {
          /**
            공지가 끝난경우 ex) i = 10, length = 18
            i / 10 = 1, paseInt(length / 10, 10) = 1
            end를 총 공지 갯수만큼 변경
           */
          console.log(i);
          console.log(length);
          end = length;
          _this3.loadState = false;
        } else if (end === length) {
          // 10의 배수로 끝난 경우
          _this3.loadState = false;
        }
        while (i < end) {
          var date = res.data.notices[i].date.replace('T', ', ');
          date = date.substring(0, date.length - 8);
          // 데이터 추가
          _this3.notices.push({
            num: res.data.notices[i].num,
            noticename: res.data.notices[i].noticeName,
            date: date
          });
          i += 1;
        }
      }).catch(function (err) {
        // 공지 로드 실패
        _this3.$swal({
          // 실패 모달
          title: '공지 로드 실패',
          text: err,
          type: 'error',
          allowOutsideClick: false
        }).then(function () {
          location.href = '/';
        });
      });
    }
  }
};

/***/ }),
/* 181 */
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
        var _this = this;

        this.$nextTick(function () {
            // 데이터 갱신 완료시 프로그레스바, 로딩창 종료
            _this.$store.commit('loadingOff');
            _this.$Progress.finish();
        });
    },
    created: function created() {
        var _this2 = this;

        // 선택한 공지 로드            
        var num = this.$route.params.num;
        // 해당라우터의 파람값으로 공지를 로드
        this.$http.get('notices/' + num).then(function (res) {
            _this2.num = res.data.notice.num;
            _this2.name = res.data.notice.noticeName;
            _this2.contents = res.data.notice.contents;
            _this2.date = res.data.notice.date.replace('T', ', ');
            _this2.date = _this2.date.substring(0, _this2.date.length - 8);
            _this2.entering = true;
        }).catch(function (err) {
            // 공지 로드 실패
            _this2.$swal({
                // 실패 모달
                title: _this2.num + '\uBC88 \uACF5\uC9C0 \uB85C\uB4DC \uC2E4\uD328',
                text: err,
                type: 'error',
                allowOutsideClick: false
            }).then(function () {
                location.href = '/notice';
            });
        });
    }
};

/***/ }),
/* 182 */
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

var i = 0;
var end = 10;
var length = void 0;
exports.default = {
  name: 'index',
  data: function data() {
    return {
      normal_problem: true,
      contest_problem: false,
      random_problem: false,
      test: 'test',
      items: [],
      loadState: true,
      entering: false,
      lineheight: 1,
      changeLoad: false
    };
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
      // 유저 정보 로드
      this.$http.get('users/my-info').then(function (resInfo) {
        _this.userid = resInfo.data.user.userId;
        _this.$http.defaults.headers.common.Authorization = _this.userToken;
        // 공지 로드
        _this.$http.get('problems').then(function (res) {
          length = res.data.problems.length;
          //문제 결과 로드
          _this.$http.defaults.headers.common.Authorization = _this.userToken;
          // 문제 결과 로드
          _this.$http.get('solution').then(function (resRatio) {
            //문제 개수 반복
            if (length <= 10) {
              // 문제가 10개 이하인 경우
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
                if (i + 101 === resRatio.data.resolves[j].resolveData.problemNum) {
                  // 문제 번호 101번 부터 시작

                  //문제 결과 카운트
                  if (resRatio.data.resolves[j].resolveData.result === 'success') {
                    // 성공
                    success += 1;
                  } else if (resRatio.data.resolves[j].resolveData.result === 'fail') {
                    // 실패
                    fail += 1;
                  }
                  count += 1;
                }
                j += 1;
              }
              // 결과 비율
              ratio = success / count;
              if (isNaN(ratio)) {
                ratio = 0 + ' %';
              } else if (ratio === 0) {
                ratio = 0 + ' %';
              } else if (ratio !== 0) {
                ratio = parseInt(ratio * 100, 10) + ' %';
              }
              // 데이터 추가
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
            // 문제 개수만큼 높이 변경
            _this.lineheight = 45 * _this.items.length;
            _this.entering = true;
          }).catch(function (err) {
            // 문제 기록 로드 실패
            _this.$swal({
              // 실패 모달
              title: '문제 기록 로드 실패',
              text: err,
              type: 'error',
              allowOutsideClick: false
            }).then(function () {
              // 메인으로 이동
              location.href = '/';
            });
          });
        }).catch(function (err) {
          // 문제 로드 실패
          _this.$swal({
            // 실패 모달
            title: '문제 로드 실패',
            text: err,
            type: 'error',
            allowOutsideClick: false
          }).then(function () {
            // 메인으로 이동
            location.href = '/';
          });
        });
      }).catch(function (error) {
        // 유저 조회 실패
        _this.$swal({
          // 실패 모달
          title: '입장 실패',
          text: '유저 조회 실패',
          type: 'error',
          allowOutsideClick: false
        }).then(function () {
          // 메인으로 이동
          location.href = '/';
        });
      });
    } else {
      // 토큰 인증 실패
      this.$swal({
        // 실패 모달
        title: '입장 실패',
        text: '로그인을 해주세요',
        type: 'error',
        allowOutsideClick: false
      }).then(function () {
        // 메인으로 이동
        location.href = '/';
      });
    }
  },
  updated: function updated() {
    var _this2 = this;

    this.$nextTick(function () {
      // 데이터 갱신 완료시 프로그레스바, 로딩창 종료
      _this2.$store.commit('loadingOff');
      _this2.$Progress.finish();
    });
  },

  methods: {
    clickNormal: function clickNormal() {
      // 일반문제 클릭
      if (!this.changeLoad) {
        this.normal_problem = true;
        this.contest_problem = false;
        this.random_problem = false;
        this.changeLoad = true;
        this.loadList(this.changeLoad);
      }
    },
    clickContest: function clickContest() {
      // 대회문제 클릭
      if (!this.changeLoad) {
        this.normal_problem = false;
        this.contest_problem = true;
        this.random_problem = false;
        this.changeLoad = true;
        this.loadList(this.changeLoad);
      }
    },
    scrollUp: function scrollUp() {
      // 상단으로 스크롤
      $('html, body').stop().animate({
        scrollTop: 0
      }, 500);
    },
    shuffle: function shuffle() {
      // 문제 섞기
      this.normal_problem = false;
      this.contest_problem = false;
      this.random_problem = true;
      this.items = _.shuffle(this.items);
    },
    loadList: function loadList(changeLoad) {
      var _this3 = this;

      this.loadState = false;
      var endOf = false;
      // 문제 추가 로드
      if (changeLoad) {
        // 문제 종류가 바뀐 경우 처음부터 로드
        i = 0;
        end = 10;
        this.items = [];
        this.lineheight = 0;
      } else if (!changeLoad) {
        // 같은 문제종류의 추가 로드인경우
        i = end;
        end += 10;
      }
      this.$http.defaults.headers.common.Authorization = this.userToken;
      if (this.contest_problem === true) {
        //대회 문제
        this.$http.get('problems/contest').then(function (res) {
          length = res.data.problems.length;
          if (i / 10 === parseInt(length / 10, 10)) {
            /**
              문제가 끝난경우 ex) i = 10, length = 18
              i / 10 = 1, paseInt(length / 10, 10) = 1
              end를 총 공지 갯수만큼 변경
             */
            end = length;
            _this3.loadState = false;
          } else if (end === length) {
            // 10의 배수로 끝난 경우
            _this3.loadState = false;
          } else {
            endOf = true;
          }
          //문제 결과 로드
          _this3.$http.defaults.headers.common.Authorization = _this3.userToken;
          _this3.$http.get('solution').then(function (resRatio) {
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
                if (i + 121 === resRatio.data.resolves[j].resolveData.problemNum) {
                  //문제 결과 카운트
                  if (resRatio.data.resolves[j].resolveData.result === 'success') {
                    // 성공
                    success += 1;
                  } else {
                    // 실패
                    fail += 1;
                  }
                  count += 1;
                }
                j += 1;
              }
              // 문제 비율
              ratio = success / count;
              if (isNaN(ratio)) {
                ratio = 0 + ' %';
              } else if (ratio === 0) {
                ratio = 0 + ' %';
              } else {
                ratio = ratio.toString().substring(2, 4) + ' %';
              }
              // 데이터 추가
              _this3.items.push({
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
              // 문제 갯수 만큼 높이 변경
              _this3.lineheight = 45 * _this3.items.length;
            }
            _this3.changeLoad = false;
            if (endOf) {
              _this3.loadState = true;
            }
          }).catch(function (err) {
            // 문제 기록 로드 실패
            _this3.$swal({
              // 실패 모달
              title: '문제 기록 로드 실패',
              text: err,
              type: 'error',
              allowOutsideClick: false
            }).then(function () {
              // 메인으로 이동
              location.href = '/';
            });
          });
        }).catch(function (err) {
          // 대회문제 로드 실패
          if (err.response.data.message === '아직 오픈되지 않았습니다.') {
            // 대회기간이 아닌 경우
            err = '대회기간이 아닙니다.';
            _this3.$swal({
              // 실패 모달
              title: '문제 로드 실패',
              text: err,
              type: 'error',
              allowOutsideClick: false
            }).then(function () {
              // 일반문제로 이동
              _this3.changeLoad = false;
              _this3.loadState = true;
              _this3.clickNormal();
              return;
            });
          } else {
            _this3.$swal({
              // 실패 모달
              title: '문제 로드 실패',
              text: err,
              type: 'error',
              allowOutsideClick: false
            }).then(function () {
              // 메인으로 이동
              location.href = '/';
            });
          }
        });
      } else {
        //일반 문제
        this.$http.get('problems').then(function (res) {
          length = res.data.problems.length;
          if (i / 10 === parseInt(length / 10, 10)) {
            /**
              문제가 끝난경우 ex) i = 10, length = 18
              i / 10 = 1, paseInt(length / 10, 10) = 1
              end를 총 공지 갯수만큼 변경
             */
            end = length;
            _this3.loadState = false;
          } else if (end === length) {
            // 10의 배수로 끝난 경우
            _this3.loadState = false;
          } else {
            endOf = true;
          }
          //문제 결과 로드
          _this3.$http.defaults.headers.common.Authorization = _this3.userToken;
          _this3.$http.get('solution').then(function (resRatio) {
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
                if (i + 101 === resRatio.data.resolves[j].resolveData.problemNum) {
                  //문제 결과 카운트
                  if (resRatio.data.resolves[j].resolveData.result === 'success') {
                    // 성공
                    success += 1;
                  } else {
                    // 실패
                    fail += 1;
                  }
                  count += 1;
                }
                j += 1;
              }
              // 결과 비율
              ratio = success / count;
              if (isNaN(ratio)) {
                ratio = 0 + ' %';
              } else if (ratio === 0) {
                ratio = 0 + ' %';
              } else {
                ratio = ratio.toString().substring(2, 4) + ' %';
              }
              // 데이터 추가
              _this3.items.push({
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
              // 문제 갯수만큼 높이 변경
              _this3.lineheight = 45 * _this3.items.length;
            }
            _this3.changeLoad = false;
            if (endOf) {
              _this3.loadState = true;
            }
          }).catch(function (err) {
            // 문제 기록 로드 실패
            _this3.$swal({
              // 실패 모달
              title: '문제 기록 로드 실패',
              text: err,
              type: 'error',
              allowOutsideClick: false
            }).then(function () {
              // 메인으로 이동
              location.href = '/';
            });
          });
        }).catch(function (err) {
          // 문제 로드 실패
          _this3.$swal({
            // 실패 모달
            title: '문제 로드 실패',
            text: err,
            type: 'error',
            allowOutsideClick: false
          }).then(function () {
            // 메인으로 이동
            location.href = '/';
          });
        });
      }
    },
    result: function result(num) {
      var _this4 = this;

      // 문제 입장
      this.$http.defaults.headers.common.Authorization = this.userToken;
      // 푼 문제인지 체크
      this.$http.get('solution/findsuccess/' + this.userid + '/' + num).then(function (resresult) {
        if (resresult.data.result === true) {
          // 이미 푼 문제인 경우
          _this4.$swal('입장 실패', '이미 푼 문제입니다', 'warning');
        } else {
          // 아닌경우 -> 입장
          location.href = 'https://algorithm.seoulit.kr/problems/' + num;
        }
      }).catch(function (err) {
        // 문제 결과 조회 실패
        _this4.$swal('결과 조회 실패', err, 'error');
      });
    }
  }
};

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vueMonacoEditor = __webpack_require__(451);

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
      code: '/*\n* 1. \uC785\uB825\uBC1B\uC744 \uACBD\uC6B0 scanf \uB294 \uB2E8 \uD55C\uBC88\uB9CC \uC0AC\uC6A9\uD55C\uB2E4.\n* 2. printf \uB294 \uBA87\uBC88\uC744 \uC0AC\uC6A9\uD574\uB3C4 \uC0C1\uAD00\uC5C6\uC73C\uB098, \uCD9C\uB825 \uAC19\uC774 \uC608\uC81C\uC640 \uB098\uC624\uB3C4\uB85D \uAD6C\uD604\uD55C\uB2E4.\n* 3. \uD30C\uC77C\uC774\uB098 \uC2DC\uC2A4\uD15C\uC744 \uB2E4\uB8E8\uB294 \uD568\uC218\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC73C\uBA70, \uD639\uC5EC\uB098 \uC0AC\uC6A9\uC2DC Runtime error\uB97C \uB744\uC6C0.\n* 4. \uACB0\uACFC\uB97C \uCD9C\uB825\uD558\uB294 \uCF54\uB4DC\uB97C \uC791\uC131\uD560 \uB54C, \uCD9C\uB825 \uC608\uC81C \uAC12\uACFC \uB3D9\uC77C\uD55C \uD615\uC2DD\uC73C\uB85C \uB098\uC624\uB3C4\uB85D \uD574\uC57C\uD55C\uB2E4.\n* 4-1. \uCD9C\uB825 \uC608\uC81C\uB97C \uC798 \uBCF4\uACE0, \\n \uACFC \uAC19\uC740 \uC904\uB118\uAE40\uACFC \uB744\uC5B4\uC4F0\uAE30\uB97C \uC8FC\uC758\uD558\uC5EC \uC791\uC131\uD55C\uB2E4.\n* 5. stdio.h, math.h \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB294 \uC120\uC5B8\uB418\uC5B4 \uC788\uB294 \uC0C1\uD0DC\uC774\uB2E4.\n* 6. \uC2E4\uD589\uD558\uAE30\uB294 \uBBF8\uB9AC \uAC12\uC744 \uD14C\uC2A4\uD2B8 \uD574\uBCF4\uB294 \uAC83\uC73C\uB85C \uC791\uC131\uD55C \uCF54\uB4DC\uC5D0 \uC785\uB825 \uAC12 \uC608\uC81C\uAC00 \uB4E4\uC5B4\uAC00\uACE0, \uCD9C\uB825 \uAC12 \uC608\uC81C\uC640 \uAC19\uC740 \uC815\uB2F5\uC774 \uB418\uC5B4\uC57C\uD558\uB294 \uC54C\uACE0\uB9AC\uC998\uC744 \uC791\uC131\uD574\uC57C\uD55C\uB2E4.\n* 7. \uC785\uB825 \uAC12\uC740 \uC608\uC81C\uC5D0 \uC788\uB294 \uAC12\uB4E4\uC758 \uC67C\uCABD\uC5D0\uC11C\uBD80\uD130 \uC624\uB978\uCABD\uC21C\uC73C\uB85C \uAC12\uC774 \uB4E4\uC5B4\uAC04\uB2E4\n*/      \nint main() {\n      //\uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\n}\n',
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
  beforeCreate: function beforeCreate() {
    var _this = this;

    //      토큰 테스트
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken != null) {
      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      // 유저 정보 조회
      this.$http.get('users/my-info').then(function (resInfo) {
        _this.userid = resInfo.data.user.userId;
        var id = _this.$route.params.num;
        _this.$http.defaults.headers.common.Authorization = _this.userToken;
        // 해당 라우터 파람의 값으로 문제 로드
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
        }).catch(function (err) {
          if (err.response.data.message === '아직 오픈되지 않았습니다.') {
            // 대회기간이 아닌 경우
            _this.$swal({
              // 실패 모달
              title: '문제 로드 실패',
              text: '대회기간이 아닙니다',
              type: 'error',
              allowOutsideClick: false
            }).then(function () {
              // 문제페이지로 이동
              location.href = '/problems';
            });
          }
        });
      }).catch(function (error) {
        // 유저 조회 실패
        _this.$swal({
          // 실패 모달
          title: '유저 조회 실패',
          text: error,
          type: 'error',
          allowOutsideClick: false
        }).then(function () {
          // 메인으로 이동
          location.href = '/';
        });
      });
    } else {
      // 토큰 인증 실패
      this.$swal({
        // 실패 모달
        title: '입장 실패',
        text: '로그인을 해주세요',
        type: 'error',
        allowOutsideClick: false
      }).then(function () {
        // 메인으로 이동
        location.href = '/';
      });
    }
  },
  updated: function updated() {
    var _this2 = this;

    this.$nextTick(function () {
      // 데이터 갱신 완료시 프로그레스바, 로딩창 종료
      _this2.$store.commit('loadingOff');
      _this2.$Progress.finish();
    });
  },

  methods: {
    onMounted: function onMounted(editor) {
      // 에디터 생성
      this.editor = editor;
    },
    onCodeChange: function onCodeChange(editor) {
      // 에디터 감지
      this.code = editor.getValue();
    },
    codeReset: function codeReset() {
      // 에디터 초기화
      this.editor.setValue('/*\n* 1. \uC785\uB825\uBC1B\uC744 \uACBD\uC6B0 scanf \uB294 \uB2E8 \uD55C\uBC88\uB9CC \uC0AC\uC6A9\uD55C\uB2E4.\n* 2. printf \uB294 \uBA87\uBC88\uC744 \uC0AC\uC6A9\uD574\uB3C4 \uC0C1\uAD00\uC5C6\uC73C\uB098, \uCD9C\uB825 \uC608\uC81C\uC640 \uAC19\uC774 \uB098\uC624\uB3C4\uB85D \uAD6C\uD604\uD55C\uB2E4.\n* 3. \uD30C\uC77C\uC774\uB098 \uC2DC\uC2A4\uD15C\uC744 \uB2E4\uB8E8\uB294 \uD568\uC218\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC73C\uBA70, \uD639\uC5EC\uB098 \uC0AC\uC6A9\uC2DC Runtime error\uB97C \uB744\uC6C0.\n* 4. \uACB0\uACFC\uB97C \uCD9C\uB825\uD558\uB294 \uCF54\uB4DC\uB97C \uC791\uC131\uD560 \uB54C, \uCD9C\uB825 \uC608\uC81C \uAC12\uACFC \uB3D9\uC77C\uD55C \uD615\uC2DD\uC73C\uB85C \uB098\uC624\uB3C4\uB85D \uD574\uC57C\uD55C\uB2E4.\n* 4-1. \uCD9C\uB825 \uC608\uC81C\uB97C \uC798 \uBCF4\uACE0, \\n \uACFC \uAC19\uC740 \uC904\uB118\uAE40\uACFC \uB744\uC5B4\uC4F0\uAE30\uB97C \uC8FC\uC758\uD558\uC5EC \uC791\uC131\uD55C\uB2E4.\n* 5. stdio.h, math.h \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB294 \uC120\uC5B8\uB418\uC5B4 \uC788\uB294 \uC0C1\uD0DC\uC774\uB2E4.\n* 6. \uC2E4\uD589\uD558\uAE30\uB294 \uBBF8\uB9AC \uAC12\uC744 \uD14C\uC2A4\uD2B8 \uD574\uBCF4\uB294 \uAC83\uC73C\uB85C \uC791\uC131\uD55C \uCF54\uB4DC\uC5D0 \uC785\uB825 \uAC12 \uC608\uC81C\uAC00 \uB4E4\uC5B4\uAC00\uACE0, \uCD9C\uB825 \uAC12 \uC608\uC81C\uC640 \uAC19\uC740 \uC815\uB2F5\uC774 \uB418\uC5B4\uC57C\uD558\uB294 \uC54C\uACE0\uB9AC\uC998\uC744 \uC791\uC131\uD574\uC57C\uD55C\uB2E4.\n* 7. \uC785\uB825 \uAC12\uC740 \uC608\uC81C\uC5D0 \uC788\uB294 \uAC12\uB4E4\uC758 \uC67C\uCABD\uC5D0\uC11C\uBD80\uD130 \uC624\uB978\uCABD\uC21C\uC73C\uB85C \uAC12\uC774 \uB4E4\uC5B4\uAC04\uB2E4\n*/        \nint main() {\n      //\uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\n}\n');
      this.code = '/*\n* 1. \uC785\uB825\uBC1B\uC744 \uACBD\uC6B0 scanf \uB294 \uB2E8 \uD55C\uBC88\uB9CC \uC0AC\uC6A9\uD55C\uB2E4.\n* 2. printf \uB294 \uBA87\uBC88\uC744 \uC0AC\uC6A9\uD574\uB3C4 \uC0C1\uAD00\uC5C6\uC73C\uB098, \uCD9C\uB825 \uC608\uC81C\uC640 \uAC19\uC774 \uB098\uC624\uB3C4\uB85D \uAD6C\uD604\uD55C\uB2E4.\n* 3. \uD30C\uC77C\uC774\uB098 \uC2DC\uC2A4\uD15C\uC744 \uB2E4\uB8E8\uB294 \uD568\uC218\uB97C \uC0AC\uC6A9\uD560 \uC218 \uC5C6\uC73C\uBA70, \uD639\uC5EC\uB098 \uC0AC\uC6A9\uC2DC Runtime error\uB97C \uB744\uC6C0.\n* 4. \uACB0\uACFC\uB97C \uCD9C\uB825\uD558\uB294 \uCF54\uB4DC\uB97C \uC791\uC131\uD560 \uB54C, \uCD9C\uB825 \uC608\uC81C \uAC12\uACFC \uB3D9\uC77C\uD55C \uD615\uC2DD\uC73C\uB85C \uB098\uC624\uB3C4\uB85D \uD574\uC57C\uD55C\uB2E4.\n* 4-1. \uCD9C\uB825 \uC608\uC81C\uB97C \uC798 \uBCF4\uACE0, \\n \uACFC \uAC19\uC740 \uC904\uB118\uAE40\uACFC \uB744\uC5B4\uC4F0\uAE30\uB97C \uC8FC\uC758\uD558\uC5EC \uC791\uC131\uD55C\uB2E4.\n* 5. stdio.h, math.h \uB77C\uC774\uBE0C\uB7EC\uB9AC\uB294 \uC120\uC5B8\uB418\uC5B4 \uC788\uB294 \uC0C1\uD0DC\uC774\uB2E4.\n* 6. \uC2E4\uD589\uD558\uAE30\uB294 \uBBF8\uB9AC \uAC12\uC744 \uD14C\uC2A4\uD2B8 \uD574\uBCF4\uB294 \uAC83\uC73C\uB85C \uC791\uC131\uD55C \uCF54\uB4DC\uC5D0 \uC785\uB825 \uAC12 \uC608\uC81C\uAC00 \uB4E4\uC5B4\uAC00\uACE0, \uCD9C\uB825 \uAC12 \uC608\uC81C\uC640 \uAC19\uC740 \uC815\uB2F5\uC774 \uB418\uC5B4\uC57C\uD558\uB294 \uC54C\uACE0\uB9AC\uC998\uC744 \uC791\uC131\uD574\uC57C\uD55C\uB2E4.\n* 7. \uC785\uB825 \uAC12\uC740 \uC608\uC81C\uC5D0 \uC788\uB294 \uAC12\uB4E4\uC758 \uC67C\uCABD\uC5D0\uC11C\uBD80\uD130 \uC624\uB978\uCABD\uC21C\uC73C\uB85C \uAC12\uC774 \uB4E4\uC5B4\uAC04\uB2E4\n*/      \nint main() {\n      //\uCF54\uB4DC\uB97C \uC785\uB825\uD574\uC8FC\uC138\uC694\n}\n';
      this.runMsg = '실행 결과가 이곳에 나타납니다';
      this.codeResult = '';
    },
    codeRun: function codeRun() {
      var _this3 = this;

      // 에디터 실행
      if (this.code.replace(/^\s*/, '') === '') {
        // 공백만있는 경우
        this.$swal('컴파일오류', '코드를 입력해주세요', 'error');
        this.runMsg = 'ERROR';
        return;
      }
      this.$http.post('solution', {
        problemnum: this.items[0].num,
        inputcode: this.code,
        name: 'problem',
        lang: this.lang,
        mode: true
      }).then(function (resSubmit) {
        // 실행 성공
        _this3.codeResult = resSubmit.data.result;
        _this3.runMsg = '실행 결과 ';
      }).catch(function (err) {
        // 실행 실패
        if (err.response.data.result === 'compile error') {
          _this3.runMsg = '컴파일 에러';
          _this3.codeResult = err.response.data.message;
        } else if (err.response.data.result === 'error') {
          _this3.runMsg = '에러';
          _this3.codeResult = err.response.data.message;
        }
      });
    },
    codeSubmit: function codeSubmit() {
      var _this4 = this;

      // 코드 제출
      if (this.code.replace(/^\s*/, '') === '') {
        this.$swal(
        // 실패 모달
        '컴파일오류', '코드를 입력해주세요', 'error');
        this.runMsg = 'ERROR';
        return;
      }
      this.$http.post('solution', {
        problemnum: this.items[0].num,
        inputcode: this.code,
        name: 'problem',
        lang: this.lang
      }).then(function (resSubmit) {
        // 제출 성공
        var result = resSubmit.data.result;
        if (result === 'success') {
          // 실패
          _this4.runMsg = 'SUCCESS';
          _this4.$swal({
            // 성공 모달
            title: '정답',
            text: '다른 문제도 풀어보세요',
            type: 'success',
            allowOutsideClick: false
          }).then(function () {
            // 문제페이지로 이동
            location.href = '/problems';
          });
        } else {
          // 실패
          _this4.runMsg = 'FAIL';
          _this4.$swal(
          // 실패 모달
          '실패', '다시 도전해 보세요', 'error');
        }
      }).catch(function (err) {
        // 제출 실패
        _this4.$swal({
          // 실패 모달
          title: '실패',
          text: '다시 도전해 보세요',
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
//
//
//
//

/***/ }),
/* 184 */
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
      users: [],
      normal_rank: true,
      contest_rank: false,
      rank: true
    };
  },
  beforeCreate: function beforeCreate() {
    var _this = this;

    //          토큰 테스트
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken != null) {
      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      // 유저 정보 조회
      this.$http.get('users/my-info').then(function (resInfo) {
        _this.userid = resInfo.data.user.userId;
        _this.$http.get('users').then(function (res) {
          i = 0;
          length = res.data.users.length;
          if (i / 10 === parseInt(length / 10, 10)) {
            /**
              유저가 끝난경우 ex) i = 10, length = 18
              i / 10 = 1, paseInt(length / 10, 10) = 1
              end를 총 공지 갯수만큼 변경
             */
            end = length;
            _this.loadState = false;
          } else if (end === length) {
            // 10의 배수로 끝난 경우
            _this.loadState = false;
          }
          while (i < length) {
            // 데이터 추가
            _this.data.push({
              name: res.data.users[i].username,
              score: res.data.users[i].score,
              contestScore: res.data.users[i].contestScore
            });
            i += 1;
          }
          // 랭크 정렬
          var sort = 'score';
          _this.data.sort(function (a, b) {
            return b[sort] - a[sort];
          });
          i = 0;
          while (i < end) {
            // 유저데이터 추가
            _this.users.push({
              name: _this.data[i].name,
              score: _this.data[i].score
            });
            i += 1;
          }
          i = 0;
          while (i < 3) {
            // 랭킹 3위 추가
            if (_this.users[i] != null) {
              _this.ranker.push({
                name: _this.users[i].name,
                score: 'sss'
              });
            } else {
              _this.ranker.push({
                // 랭킹에 유저가 없는 경우
                name: i + 1 + '\uB4F1\uC5D0 \uB3C4\uC804\uD574\uBCF4\uC138\uC694'
              });
            }
            i += 1;
          }
          _this.entering = true;
        }).catch(function (err) {
          _this.$swal({
            title: '유저 정보 조회 실패',
            text: err,
            type: 'error',
            allowOutsideClick: false
          }).then(function () {
            location.href = '/';
          });
        });
      }).catch(function (error) {
        _this.$swal({
          title: '유저 조회 실패',
          text: error,
          type: 'error',
          allowOutsideClick: false
        }).then(function () {
          location.href = '/';
        });
      });
    } else {
      this.$swal({
        title: '입장 실패',
        text: '로그인을 해주세요',
        type: 'error',
        allowOutsideClick: false
      }).then(function () {
        location.href = '/';
      });
    }
  },
  updated: function updated() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.$store.commit('loadingOff');
      _this2.$Progress.finish();
    });
  },

  methods: {
    clickNormal: function clickNormal() {
      this.normal_rank = true;
      this.contest_rank = false;
      this.changeLoad = true;
      this.loadList(this.changeLoad);
    },
    clickContest: function clickContest() {
      this.normal_rank = false;
      this.contest_rank = true;
      this.changeLoad = true;
      this.loadList(this.changeLoad);
    },
    scrollUp: function scrollUp() {
      $('html, body').stop().animate({
        scrollTop: 0
      }, 500);
    },
    loadList: function loadList(changeLoad) {
      var _this3 = this;

      if (changeLoad) {
        i = 0;
        end = 10;
        this.lineheight = 0;
        this.rank = false;
        this.ranker = [];
        this.users = [];
        this.loadState = true;
      } else {
        i = end;
        end += 10;
      }
      if (this.contest_rank === true) {
        // 대회 랭크
        this.$http.get('users').then(function (res) {
          if (i / 10 === parseInt(length / 10, 10)) {
            end = length;
            _this3.loadState = false;
          } else if (end === length) {
            _this3.loadState = false;
          }
          var sort = 'contestScore';
          _this3.data.sort(function (a, b) {
            return b[sort] - a[sort];
          });
          while (i < end) {
            var score = 0;
            if (_this3.data[i].contestScore === 0) {
              score = 0;
            } else {
              score = _this3.data[i].contestScore;
            }
            _this3.users.push({
              name: _this3.data[i].name,
              score: score
            });
            i += 1;
          }

          i = 0;
          while (i < 3) {
            if (_this3.users[i] != null) {
              _this3.ranker.push({
                name: _this3.users[i].name,
                score: 'sss'
              });
            } else {
              _this3.ranker.push({
                name: i + 1 + '\uB4F1\uC5D0 \uB3C4\uC804\uD574\uBCF4\uC138\uC694'
              });
            }
            i += 1;
            if (i === 3) {
              _this3.rank = true;
            }
          }
        }).catch(function (err) {
          _this3.$swal({
            title: '유저 로드 실패',
            text: err,
            type: 'error',
            allowOutsideClick: false
          }).then(function () {
            location.href = '/';
          });
        });
      } else {
        // 일반 랭크
        this.$http.get('users').then(function (res) {
          if (i / 10 === parseInt(length / 10, 10)) {
            end = length;
            _this3.loadState = false;
          } else if (end === length) {
            _this3.loadState = false;
          }
          var sort = 'score';
          _this3.data.sort(function (a, b) {
            return b[sort] - a[sort];
          });
          while (i < end) {
            _this3.users.push({
              name: _this3.data[i].name,
              score: _this3.data[i].score
            });
            i += 1;
          }

          i = 0;
          while (i < 3) {
            if (_this3.users[i] != null) {
              _this3.ranker.push({
                name: _this3.users[i].name,
                score: 'sss'
              });
            } else {
              _this3.ranker.push({
                name: i + 1 + '\uB4F1\uC5D0 \uB3C4\uC804\uD574\uBCF4\uC138\uC694'
              });
            }
            i += 1;
            if (i === 3) {
              _this3.rank = true;
            }
          }
        }).catch(function (err) {
          _this3.$swal({
            title: '유저 로드 실패',
            text: err,
            type: 'error',
            allowOutsideClick: false
          }).then(function () {
            location.href = '/';
          });
        });
      }
    }
  }
};

/***/ }),
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
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
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
/* 388 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 389 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 390 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 391 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 392 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 393 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 394 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 395 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sigo/img/sigo_404.70233b0.png";

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "sigo/img/sigoing.0e04ef2.png";

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(377)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(167),
  /* template */
  __webpack_require__(433),
  /* scopeId */
  "data-v-1fb4ac10",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(386)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(168),
  /* template */
  __webpack_require__(444),
  /* scopeId */
  "data-v-608cdfa9",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(395)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(169),
  /* template */
  __webpack_require__(450),
  /* scopeId */
  "data-v-90766562",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(394)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(170),
  /* template */
  __webpack_require__(449),
  /* scopeId */
  "data-v-8fe46ee8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(370)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(171),
  /* template */
  __webpack_require__(427),
  /* scopeId */
  "data-v-01704bf6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(382)
__webpack_require__(383)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(172),
  /* template */
  __webpack_require__(439),
  /* scopeId */
  "data-v-4886e8bd",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(380)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(173),
  /* template */
  __webpack_require__(437),
  /* scopeId */
  "data-v-41509454",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(390)
__webpack_require__(391)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(174),
  /* template */
  __webpack_require__(447),
  /* scopeId */
  "data-v-7bcd82e5",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(378)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(175),
  /* template */
  __webpack_require__(435),
  /* scopeId */
  "data-v-32d9b926",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(381)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(176),
  /* template */
  __webpack_require__(438),
  /* scopeId */
  "data-v-427d4f57",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(373)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(177),
  /* template */
  __webpack_require__(429),
  /* scopeId */
  "data-v-0e30bda6",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(388)
__webpack_require__(389)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(178),
  /* template */
  __webpack_require__(446),
  /* scopeId */
  "data-v-637a59d0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(376)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(179),
  /* template */
  __webpack_require__(432),
  /* scopeId */
  "data-v-1f1cf6d0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(372)
__webpack_require__(371)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(180),
  /* template */
  __webpack_require__(428),
  /* scopeId */
  "data-v-0a41af30",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(387)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(181),
  /* template */
  __webpack_require__(445),
  /* scopeId */
  "data-v-6209be0c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(379)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(182),
  /* template */
  __webpack_require__(436),
  /* scopeId */
  "data-v-3f6ebf20",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(384)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(183),
  /* template */
  __webpack_require__(441),
  /* scopeId */
  "data-v-572d1fb3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(374)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(184),
  /* template */
  __webpack_require__(430),
  /* scopeId */
  "data-v-0f75cc20",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(161),
  /* template */
  __webpack_require__(443),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(162),
  /* template */
  __webpack_require__(440),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(163),
  /* template */
  __webpack_require__(434),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(375)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(164),
  /* template */
  __webpack_require__(431),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(385)

var Component = __webpack_require__(6)(
  /* script */
  __webpack_require__(165),
  /* template */
  __webpack_require__(442),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 427 */
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
    staticClass: "addProblemButton",
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
    }, [_vm._v("explanation : ")]), _c('textarea', {
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
    }, [_c('li', [_vm._v("이름 : " + _vm._s(list.username))]), _vm._v(" "), _c('li', [_vm._v("학번 : " + _vm._s(list.studentcode))]), _vm._v(" "), _c('li', [_vm._v("결과 : " + _vm._s(list.result))]), _vm._v(" "), _c('li', [_vm._v("날짜 : " + _vm._s(list.date))]), _vm._v(" "), _c('li', [_c('pre', [_vm._v("코드 : " + _vm._s(list.code))])])])
  }))], 1)])]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 428 */
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
  }, [_vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "notice_wrap"
  }, [_c('transition-group', {
    attrs: {
      "name": "noticeList",
      "tag": "div"
    }
  }, _vm._l((_vm.notices), function(notice) {
    return _c('div', {
      key: notice,
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
  }))], 1)]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "huge chevron circle up icon",
    on: {
      "click": _vm.scrollUp
    }
  })]), _vm._v(" "), (_vm.loadState) ? _c('button', {
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
      "id": "not-head"
    }
  }, [_vm._v(" 공지사항\n        "), _c('div', {
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
}]}

/***/ }),
/* 429 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.entering) ? _c('div', {
    attrs: {
      "id": "monitor"
    }
  }, [_c('div', {
    staticClass: "button"
  }, [_c('div', {
    staticClass: "wrapper"
  }, [_c('div', {
    staticClass: "four"
  }, [_c('div', {
    staticClass: "btn"
  }, [_c('button', {
    staticClass: "ui button",
    on: {
      "click": _vm.contestOpen
    }
  }, [_vm._v("On")]), _vm._v(" "), _c('button', {
    staticClass: "ui button",
    on: {
      "click": _vm.contestClose
    }
  }, [_vm._v("Off")])]), _vm._v(" "), _c('div', {
    staticClass: "ui cards"
  }, [_c('div', {
    staticClass: "card",
    attrs: {
      "id": "mncard"
    }
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header",
    on: {
      "click": _vm.normalMonitor
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("일반문제")])]), _vm._v(" "), _c('div', {
    staticClass: "header",
    on: {
      "click": _vm.contestMonitor
    }
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("대회문제")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "ui cards"
  }, [_c('div', {
    staticClass: "card",
    attrs: {
      "id": "topcard"
    }
  }, [_c('div', {
    staticClass: "content"
  }, [_vm._m(0), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "contentin"
  }, [_c('p', [_vm._v(_vm._s(_vm.count))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.success))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.fail))]), _vm._v(" "), _c('p', [_vm._v(_vm._s(_vm.compileError))])])])])])]), _vm._v(" "), _c('transition-group', {
    staticClass: "ui cards",
    attrs: {
      "name": "monitorlist",
      "tag": "ul"
    }
  }, _vm._l((_vm.monitorData), function(monitor) {
    return _c('div', {
      key: monitor,
      staticClass: "card",
      on: {
        "click": function($event) {
          _vm.codeView(monitor)
        }
      }
    }, [_c('div', {
      staticClass: "content"
    }, [_c('div', {
      staticClass: "header"
    }, [_c('p', [_vm._v("아이디 : "), _c('span', [_vm._v(_vm._s(monitor.userid))])])]), _vm._v(" "), _c('div', {
      staticClass: "meta"
    }, [_c('p', [_vm._v("번호 : "), _c('span', [_vm._v(_vm._s(monitor.num))])])]), _vm._v(" "), _c('div', {
      staticClass: "meta"
    }, [_c('p', [_vm._v("결과 : "), _c('span', [_vm._v(_vm._s(monitor.result))])])]), _vm._v(" "), _c('div', {
      staticClass: "meta"
    }, [_c('p', [_vm._v("날짜 : "), _c('span', [_vm._v(_vm._s(monitor.date))])])]), _vm._v(" "), _c('div', {
      staticClass: "meta"
    }, [_c('p', [_vm._v("시간/메모리 : "), _c('span', [_vm._v(_vm._s(monitor.time) + " / " + _vm._s(monitor.memory))])])])])])
  }))], 1)])])]) : _vm._e()
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "contentin"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('p', [_vm._v("푼 문제")])]), _vm._v(" "), _c('div', {
    staticClass: "header"
  }, [_c('p', [_vm._v("맞춘 문제")])]), _vm._v(" "), _c('div', {
    staticClass: "header"
  }, [_c('p', [_vm._v("틀린 문제")])]), _vm._v(" "), _c('div', {
    staticClass: "header"
  }, [_c('p', [_vm._v("컴파일 에러")])])])
}]}

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

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
  }, [_vm._v("2등")]), _vm._v(" "), _c('hr'), _vm._v(" "), (_vm.rank) ? _c('p', {
    staticClass: "rant2"
  }, [_vm._v(_vm._s(_vm.ranker[1].name))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "rank2"
  }, [_vm._m(2), _vm._v(" "), _c('p', {
    staticClass: "rant1"
  }, [_vm._v("1등")]), _vm._v(" "), _c('hr'), _vm._v(" "), (_vm.rank) ? _c('p', {
    staticClass: "rant2"
  }, [_vm._v(_vm._s(_vm.ranker[0].name))]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "rank3"
  }, [_vm._m(3), _vm._v(" "), _c('p', {
    staticClass: "rant1"
  }, [_vm._v("3등")]), _vm._v(" "), _c('hr'), _vm._v(" "), (_vm.rank) ? _c('p', {
    staticClass: "rant2"
  }, [_vm._v(_vm._s(_vm.ranker[2].name))]) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "ui top attached tabular menu",
    attrs: {
      "id": "topmn"
    }
  }, [_c('a', {
    staticClass: "item",
    class: {
      active: _vm.normal_rank
    },
    attrs: {
      "data-tab": "first"
    },
    on: {
      "click": _vm.clickNormal
    }
  }, [_vm._v("순위")]), _vm._v(" "), _c('a', {
    staticClass: "item",
    class: {
      active: _vm.contest_rank
    },
    attrs: {
      "data-tab": "first"
    },
    on: {
      "click": _vm.clickContest
    }
  }, [_vm._v("대회 순위")])]), _vm._v(" "), _c('div', {
    staticClass: "ui bottom attached tab segment active"
  }, [_vm._m(4), _vm._v(" "), _c('transition-group', {
    attrs: {
      "name": "flip-list, ranklist",
      "tag": "ul"
    }
  }, _vm._l((_vm.users), function(user, rank) {
    return _c('div', {
      key: user,
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
  }))], 1), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "huge chevron circle up icon",
    on: {
      "click": _vm.scrollUp
    }
  })]), _vm._v(" "), (_vm.loadState) ? _c('button', {
    staticClass: "ui button",
    on: {
      "click": function($event) {
        _vm.loadList(false)
      }
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
  }, [_vm._v(" 랭킹 시스템\n        "), _c('div', {
    staticClass: "sub header"
  }, [_vm._v("1등을 목표로 문제를 풀면서 친구들을 이겨보세요!")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rankge1"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(93)
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rankge2"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(93)
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "rankge3"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(93)
    }
  })])
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
    staticClass: "three wide column"
  }, [_c('p', {
    staticClass: "item",
    attrs: {
      "id": "ltemone"
    }
  }, [_vm._v("등수")])]), _vm._v(" "), _c('div', {
    staticClass: "six wide column"
  }, [_c('p', {
    staticClass: "item",
    attrs: {
      "id": "ltemthr"
    }
  }, [_vm._v("이름")])]), _vm._v(" "), _c('div', {
    staticClass: "seven wide column"
  }, [_c('p', {
    staticClass: "item",
    attrs: {
      "id": "ltemfou"
    }
  }, [_vm._v("점수")])])])])])])])
}]}

/***/ }),
/* 431 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "__cov-progress",
    style: (_vm.style)
  })
},staticRenderFns: []}

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "notfound"
  }, [_c('div', {
    staticClass: "notfound_container"
  }, [_c('img', {
    attrs: {
      "src": __webpack_require__(402),
      "alt": ""
    }
  }), _vm._v(" "), _c('span', [_vm._v("페이지가 존재하지 않습니다.")])])])
}]}

/***/ }),
/* 433 */
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
  }, [_c('div', {
    staticClass: "adminmn"
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
  }, [_vm._v("문제결과")])])]), _vm._v(" "), _c('div', {
    staticClass: "twelve wide stretched column"
  }, [(_vm.memberState) ? _c('member') : _vm._e(), _vm._v(" "), (_vm.nonaccountState) ? _c('nonaccount') : _vm._e(), _vm._v(" "), (_vm.problemState) ? _c('problemmanage') : _vm._e(), _vm._v(" "), (_vm.listState) ? _c('notice') : _vm._e(), _vm._v(" "), (_vm.problemresultState) ? _c('problemresult') : _vm._e()], 1)])]) : _vm._e()])]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 434 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div')
},staticRenderFns: []}

/***/ }),
/* 435 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "timeline"
  }, [_c('div', {
    attrs: {
      "id": "footer"
    }
  }, [_c('div', {
    staticClass: "footer"
  }, [_c('div', {
    staticClass: "left"
  }, [_c('div', {
    staticClass: "tople"
  }, [_c('p', [_vm._v("SIGO")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("공지사항")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("문제")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("랭킹")]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("마이페이지")])]), _vm._v(" "), _c('div', {
    staticClass: "botle"
  }, [_c('p', [_vm._v("© 2017 SIGO. All rights reserved.")])])]), _vm._v(" "), _c('div', {
    staticClass: "right"
  }, [_c('div', {
    staticClass: "foico"
  }, [_c('a', {
    attrs: {
      "href": "https://www.facebook.com/shitsigo/"
    }
  }, [_c('i', {
    staticClass: "big facebook f icon"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "https://github.com/shitKorea/shit-algorithm"
    }
  }, [_c('i', {
    staticClass: "big git icon"
  })])])])])])])
}]}

/***/ }),
/* 436 */
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
    staticClass: "item ",
    class: {
      active: _vm.normal_problem
    },
    attrs: {
      "data-tab": "first",
      "id": "item"
    },
    on: {
      "click": _vm.clickNormal
    }
  }, [_vm._v("일반 문제")]), _vm._v(" "), _c('a', {
    staticClass: "item",
    class: {
      active: _vm.contest_problem
    },
    attrs: {
      "data-tab": "third"
    },
    on: {
      "click": _vm.clickContest
    }
  }, [_vm._v("대회 문제")]), _vm._v(" "), _c('a', {
    staticClass: "item",
    class: {
      active: _vm.random_problem
    },
    attrs: {
      "data-tab": "fourth"
    },
    on: {
      "click": _vm.shuffle
    }
  }, [_vm._v("문제 섞기")])]), _vm._v(" "), _c('div', {
    staticClass: "ui bottom attached tab segment active",
    attrs: {
      "data-tab": "first"
    }
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "ui bottom attached tab segment active",
    attrs: {
      "id": "list",
      "data-tab": "first"
    }
  }, [_c('transition-group', {
    style: ({
      'max-height': _vm.lineheight + 'px',
      'min-height': _vm.lineheight + 'px',
      'overflow': 'hidden'
    }),
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
      staticClass: "ui grid",
      attrs: {
        "id": "blemlist"
      }
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
    }, [_c('div', {
      staticClass: "ui grid"
    }, [_c('div', {
      staticClass: "four wide column",
      attrs: {
        "id": "one"
      }
    }, [_c('span', [_vm._v(_vm._s(item.count))])]), _vm._v(" "), _c('div', {
      staticClass: "four wide column",
      attrs: {
        "id": "second"
      }
    }, [_c('span', [_vm._v(_vm._s(item.success))])]), _vm._v(" "), _c('div', {
      staticClass: "four wide column",
      attrs: {
        "id": "three"
      }
    }, [_c('span', [_vm._v(_vm._s(item.fail))])]), _vm._v(" "), _c('div', {
      staticClass: "four wide column",
      attrs: {
        "id": "fooo"
      }
    }, [_c('span', [_vm._v(_vm._s(item.ratio))])])])])])])])])])
  }))], 1)]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "huge chevron circle up icon",
    on: {
      "click": _vm.scrollUp
    }
  })]), _vm._v(" "), (_vm.loadState) ? _c('button', {
    staticClass: "ui button",
    on: {
      "click": function($event) {
        _vm.loadList(false)
      }
    }
  }, [_c('i', {
    staticClass: "large chevron down icon"
  })]) : _vm._e()])]) : _vm._e()
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "ui center aligned header"
  }, [_vm._v(" 문제풀기\n      "), _c('div', {
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
}]}

/***/ }),
/* 437 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "index"
    }
  }, [_c('div', {
    staticClass: "sigo_container"
  }, [_c('parallax'), _vm._v(" "), _c('timeline')], 1)])
},staticRenderFns: []}

/***/ }),
/* 438 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "contest_intro"
    }
  }, [_vm._v("\n  대회 소개 페이지\n")])
},staticRenderFns: []}

/***/ }),
/* 439 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.enteringProblemresult) ? _c('div', {
    staticClass: "probleminput"
  }, [_c('ul', [_vm._l((_vm.problemData), function(data) {
    return _c('li', [_c('p', [_vm._v("ID : " + _vm._s(data.userid))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', [_vm._v("Num : " + _vm._s(data.num))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', [_vm._v("language : " + _vm._s(data.lang))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', [_vm._v("Date : " + _vm._s(data.date))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('pre', [_vm._v("Code : " + _vm._s(data.code))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', [_vm._v("Result : " + _vm._s(data.result))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', [_vm._v("Time : " + _vm._s(data.time))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('p', [_vm._v("Memory : " + _vm._s(data.memory))]), _vm._v(" "), _c('br'), _vm._v(" "), _c('br')])
  }), _vm._v(" "), _c('br')], 2)]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 440 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-container"
  }, [_vm._t("parallax-bg"), _vm._v(" "), _c('div', {
    staticClass: "swiper-wrapper"
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("pagination"), _vm._v(" "), _vm._t("button-prev"), _vm._v(" "), _vm._t("button-next"), _vm._v(" "), _vm._t("scrollbar")], 2)
},staticRenderFns: []}

/***/ }),
/* 441 */
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
    }, [_vm._v("\n        " + _vm._s(item.num) + " 번 -\n      ")]), _vm._v(" "), _c('div', {
      staticClass: "solve_name"
    }, [_vm._v("\n        " + _vm._s(item.name) + " 문제를 풀어봅시다\n      ")])]), _vm._v(" "), _c('hr', {
      attrs: {
        "id": "head-hr"
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "solve_sidebar"
    }, [_vm._m(0, true), _vm._v(" "), _c('div', {
      staticClass: "solve_explain"
    }, [_c('div', {
      staticClass: "solve_explainner"
    }, [_vm._v("\n          " + _vm._s(item.explanation) + "\n        ")])]), _vm._v(" "), _c('div', {
      staticClass: "solve_inputex"
    }, [_c('p', [_vm._v("입력 값 예제")]), _vm._v(" "), _c('pre', [_vm._v(_vm._s(item.inputex))])]), _vm._v(" "), _c('div', {
      staticClass: "solve_outputex"
    }, [_c('p', [_vm._v("출력 값 예제")]), _vm._v(" "), _c('pre', [_vm._v(_vm._s(item.outputex))])])]), _vm._v(" "), _c('div', {
      staticClass: "solve_main"
    }, [_c('div', {
      staticClass: "solve_input"
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
    }, [_c('p', [_vm._v(_vm._s(_vm.runMsg))]), _vm._v(" "), _c('div', {
      staticClass: "solve-outputner"
    }, [_c('pre', [_vm._v(_vm._s(_vm.codeResult))])])]), _vm._v(" "), _c('div', {
      staticClass: "solve_button"
    }, [_c('div', {
      staticClass: "solve_run",
      on: {
        "click": _vm.codeRun
      }
    }, [_vm._v("\n            실행하기\n          ")]), _vm._v(" "), _c('div', {
      staticClass: "solve_reset",
      on: {
        "click": _vm.codeReset
      }
    }, [_vm._v("\n            초기화하기\n          ")]), _vm._v(" "), _c('div', {
      staticClass: "solve_submit",
      on: {
        "click": _vm.codeSubmit
      }
    }, [_vm._v("\n            제출하기\n          ")])])])]), _vm._v(" "), _vm._m(1, true)])
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
/* 442 */
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
    staticClass: "v-bounce v-bounce1",
    style: (_vm.spinnerBasicStyle)
  }, [_c('div', {
    staticClass: "v-bounce v-bounce2",
    style: (_vm.spinnerStyle)
  }), _c('div', {
    staticClass: "v-bounce v-bounce3",
    style: (_vm.spinnerStyle)
  })])])
},staticRenderFns: []}

/***/ }),
/* 443 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-slide"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),
/* 444 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.enteringMember) ? _c('div', {
    staticClass: "member"
  }, [_c('ul', [_vm._l((_vm.members), function(member) {
    return _c('li', [_vm._v("\n      아이디: "), _c('span', [_vm._v(_vm._s(member.userid))]), _c('br'), _vm._v(" 이름: "), _c('span', [_vm._v(_vm._s(member.username))]), _c('br'), _vm._v(" 학번 : "), _c('span', [_vm._v(_vm._s(member.studentcode))]), _c('br'), _vm._v(" 점수 : "), _c('span', [_vm._v(_vm._s(member.score))]), _c('br'), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.deleteuser(member.userid, member)
        }
      }
    }, [_vm._v("유저 삭제")]), _vm._v(" "), _c('br')])
  }), _vm._v(" "), _c('br')], 2)]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 445 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "openNotice"
  }, [(_vm.entering) ? _c('div', {
    staticClass: "notice"
  }, [_c('div', {
    staticClass: "notipoll"
  }, [_c('div', {
    staticClass: "notipen"
  }, [_c('div', {
    staticClass: "noti-head"
  }, [_c('p', [_vm._v(_vm._s(_vm.name))])]), _vm._v(" "), _c('div', {
    staticClass: "noti-main"
  }, [_c('div', {
    staticClass: "noti-in"
  }, [_c('p', [_vm._v(_vm._s(_vm.contents))])]), _vm._v(" "), _c('div', {
    staticClass: "noti-sub"
  }, [_c('p', [_c('span', [_vm._v(_vm._s(_vm.num))]), _vm._v("번")]), _vm._v(" "), _c('p', [_c('span', [_vm._v(_vm._s(_vm.date))])])])])])])]) : _vm._e(), _vm._v(" "), _vm._m(0)])
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
/* 446 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.entering) ? _c('div', {
    attrs: {
      "id": "mypage"
    }
  }, [_c('div', {
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
  }, [_c('p', [_vm._v("내 아이디 : "), _c('span', [_vm._v(_vm._s(_vm.userid))])]), _vm._v(" "), _c('p', [_vm._v("내 이름 : "), _c('span', [_vm._v(_vm._s(_vm.username))])]), _vm._v(" "), _c('p', [_vm._v("학번 : "), _c('span', [_vm._v(_vm._s(_vm.studentcode))])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_vm._v("내 활동")]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
    staticClass: "description"
  }, [_c('p', [_vm._v("내 점수 : "), _c('span', [_vm._v(_vm._s(_vm.score) + " 점")])]), _vm._v(" "), _c('p', [_vm._v("문제 푼 수 : "), _c('span', [_vm._v(_vm._s(_vm.successCount) + " 개")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "card"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_vm._v("최근 푼 문제")]), _vm._v(" "), _c('hr'), _vm._v(" "), _vm._l((_vm.recentProblem), function(i) {
    return _c('div', {
      staticClass: "description"
    }, [_c('p', [_c('span', [_vm._v(_vm._s(i.num))]), _vm._v(" : 번 문제 "), _c('span', [_vm._v(_vm._s(i.date))])])])
  })], 2)])])])])])]) : _vm._e()
},staticRenderFns: []}

/***/ }),
/* 447 */
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
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

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
  }, [_c('img', {
    staticStyle: {
      "width": "10%",
      "height": "10%",
      "padding-top": "50px"
    },
    attrs: {
      "src": __webpack_require__(403),
      "alt": ""
    }
  })])], 1)]), _vm._v(" "), _c('ul', {
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
  }, [_vm._v("로그인")])]) : _vm._e()])]), _vm._v(" "), (_vm.loginState == false) ? _c('div', {
    attrs: {
      "id": "sign"
    }
  }, [_c('div', {
    staticClass: "ui modal"
  }, [(_vm.signState) ? _c('div', {
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
  }, [_vm._v("\n                      로그인\n                    ")])]), _vm._v(" "), _c('button', {
    staticClass: "ui button black signButton",
    on: {
      "click": function($event) {
        _vm.signState = false
      }
    }
  }, [_vm._v("\n                    회원가입하기\n                  ")])])])])])]) : _c('div', {
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
  }, [_vm._v("\n                    회원가입\n                  ")])]), _vm._v(" "), _c('button', {
    staticClass: "ui button black signButton",
    on: {
      "click": function($event) {
        _vm.signState = true
      }
    }
  }, [_vm._v("\n                    로그인하기\n                  ")])])])])])])])]) : _vm._e(), _vm._v(" "), _c('vue-progress-bar'), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "spinner",
      "mode": "out-in"
    }
  }, [(_vm.loadingState) ? _c('div', {
    staticClass: "openSpinner"
  }, [_c('bounce-loader', {
    attrs: {
      "loading": _vm.loading
    }
  })], 1) : _vm._e()]), _vm._v(" "), _c('transition', {
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
/* 449 */
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
/* 450 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.enteringNon) ? _c('div', {
    staticClass: "nonaccount"
  }, [_c('ul', [_vm._l((_vm.members), function(member) {
    return _c('li', [_vm._v("\n      아이디: "), _c('span', [_vm._v(_vm._s(member.userid))]), _c('br'), _vm._v(" 이름: "), _c('span', [_vm._v(_vm._s(member.username))]), _c('br'), _vm._v(" 학번 : "), _c('span', [_vm._v(_vm._s(member.studentcode))]), _c('br'), _vm._v(" 등급 : "), _c('span', [_vm._v(_vm._s(member.rating))]), _c('br'), _vm._v(" 승인여부 : "), _c('span', [_vm._v(_vm._s(member.account))]), _c('br'), _vm._v(" "), _c('button', {
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
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vueTyper = __webpack_require__(140);

var _vueTyper2 = _interopRequireDefault(_vueTyper);

var _axios = __webpack_require__(128);

var _axios2 = _interopRequireDefault(_axios);

var _vueCookie = __webpack_require__(136);

var _vueCookie2 = _interopRequireDefault(_vueCookie);

var _vueAwesomeSwiper = __webpack_require__(135);

var _vueAwesomeSwiper2 = _interopRequireDefault(_vueAwesomeSwiper);

var _jquery = __webpack_require__(62);

var _jquery2 = _interopRequireDefault(_jquery);

__webpack_require__(134);

__webpack_require__(132);

var _vuex = __webpack_require__(64);

var _vuex2 = _interopRequireDefault(_vuex);

var _vue = __webpack_require__(63);

var _vue2 = _interopRequireDefault(_vue);

var _router = __webpack_require__(129);

var _router2 = _interopRequireDefault(_router);

var _App = __webpack_require__(137);

var _App2 = _interopRequireDefault(_App);

var _index = __webpack_require__(130);

var _index2 = _interopRequireDefault(_index);

var _vueSweetalert = __webpack_require__(139);

var _vueSweetalert2 = _interopRequireDefault(_vueSweetalert);

var _vueProgressbar = __webpack_require__(138);

var _vueProgressbar2 = _interopRequireDefault(_vueProgressbar);

__webpack_require__(131);

var _lodash = __webpack_require__(133);

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
]),[457]);
//# sourceMappingURL=main.61c78eced9dd19e4f2e5.js.map