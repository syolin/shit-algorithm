webpackJsonp([1,2],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_index_vue__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_index_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_index_index_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_admin_admin_vue__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_admin_admin_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_admin_admin_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_problems_problems_vue__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_problems_problems_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_problems_problems_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_rank_rank_vue__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_rank_rank_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_rank_rank_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_problems_solve_vue__ = __webpack_require__(403);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_problems_solve_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__components_problems_solve_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_mypage_mypage_vue__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_mypage_mypage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__components_mypage_mypage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_notice_notice_vue__ = __webpack_require__(400);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_notice_notice_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__components_notice_notice_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_notice_opennotice_vue__ = __webpack_require__(401);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_notice_opennotice_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__components_notice_opennotice_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_notfound_notfound_vue__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_notfound_notfound_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__components_notfound_notfound_vue__);












__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'index',
    component: __WEBPACK_IMPORTED_MODULE_2__components_index_index_vue___default.a
  }, {
    path: '/admin',
    name: 'admin',
    component: __WEBPACK_IMPORTED_MODULE_3__components_admin_admin_vue___default.a
  }, {
    path: '/problems',
    name: 'problems',
    component: __WEBPACK_IMPORTED_MODULE_4__components_problems_problems_vue___default.a
  }, {
    path: '/rank',
    name: 'rank',
    component: __WEBPACK_IMPORTED_MODULE_5__components_rank_rank_vue___default.a
  }, {
    path: '/problems/:num',
    name: 'solve',
    component: __WEBPACK_IMPORTED_MODULE_6__components_problems_solve_vue___default.a
  }, {
    path: '/mypage',
    name: 'mypage',
    component: __WEBPACK_IMPORTED_MODULE_7__components_mypage_mypage_vue___default.a
  }, {
    path: '/notice',
    name: 'notice',
    component: __WEBPACK_IMPORTED_MODULE_8__components_notice_notice_vue___default.a
  }, {
    path: '/notices/:num',
    name: 'openNotice',
    component: __WEBPACK_IMPORTED_MODULE_9__components_notice_opennotice_vue___default.a
  }, {
    path: '/404',
    name: '404',
    component: __WEBPACK_IMPORTED_MODULE_10__components_notfound_notfound_vue___default.a
  }, {
    path: '/*',
    redirect: { name: '404' }
  }]
});

/***/ }),

/***/ 129:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(380)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(160),
  /* template */
  __webpack_require__(427),
  /* scopeId */
  "data-v-88f23c12",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'swiper-slide',
  ready() {
    this.update();
  },
  mounted() {
    this.update();
  },
  updated() {
    this.update();
  },
  attached() {
    this.update();
  },
  methods: {
    update() {
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

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
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
  window.Swiper = __webpack_require__(125);
  __webpack_require__(361);
}
/* harmony default export */ __webpack_exports__["default"] = {
  name: 'swiper',
  props: {
    options: {
      type: Object,
      default() {
        return {
          autoplay: 3500
        };
      }
    }
  },
  ready() {
    if (!this.swiper && browser) {
      this.swiper = new Swiper(this.$el, this.options);
    }
  },
  mounted() {
    var self = this;
    var mount = function () {
      if (!self.swiper && browser) {
        delete self.options.notNextTick;
        self.swiper = new Swiper(self.$el, self.options);
      }
    };
    this.options.notNextTick ? mount() : this.$nextTick(mount);
  },
  updated() {
    this.swiper.update();
  },
  beforeDestroy() {
    if (!!this.swiper) {
      this.swiper.destroy();
      delete this.swiper;
    }
  }
};

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

//
//
//
//

var debounce = __webpack_require__(385);
var monacoLoader = __webpack_require__(431);
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

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//

const inBrowser = typeof window !== 'undefined';
/* harmony default export */ __webpack_exports__["default"] = {
    name: 'VueProgress',
    serverCacheKey: () => 'Progress',
    computed: {
        style() {
            let location = this.progress.options.location;
            let style = {
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
        progress() {
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

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_recaptcha__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_recaptcha__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  components: { VueRecaptcha: __WEBPACK_IMPORTED_MODULE_0_vue_recaptcha___default.a },
  data() {
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
  created() {
    this.$Progress.start();
    //  hook the progress bar to start before we move router-view
    this.$router.beforeEach((to, from, next) => {
      //  does the page we want to go to have a meta.progress object
      if (to.meta.progress !== undefined) {
        const meta = to.meta.progress;
        // parse meta tags
        this.$Progress.parseMeta(meta);
      }
      //  start the progress bar
      this.$Progress.start();
      //  continue to next page
      next();
    });
    const ROOT_URL = 'http://121.186.23.245:9999';
    this.$http.defaults.baseURL = ROOT_URL;

    //      토큰 테스트
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken != null) {
      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('/api/users/my-info').then(resInfo => {
        this.userRating = resInfo.data.user.rating;
        this.username = resInfo.data.user.username;
        this.loginState = true;
      }).catch(error => {
        this.$swal({
          title: '유저 조회 실패',
          text: error,
          type: 'error'
        });
      });
    }
    this.$router.afterEach((to, from) => {
      //  finish the progress bar
      this.$Progress.finish();
    });
    this.$Progress.finish();
    window.addEventListener('scroll', this.scrollFunction);
  },
  destroyed() {
    window.removeEventListener('scroll', this.scrollFunction);
  },
  methods: {
    scrollFunction() {
      this.scrolled = window.scrollY;
      if (this.scrolled > 200) {
        this.scrollMenu = true;
      } else {
        this.scrollMenu = false;
      }
    },
    problemLoginCheck() {
      if (this.$cookie.get('userToken') == null) {
        this.$swal('입장 불가', '로그인을 하셨나요?', 'error');
      } else {
        this.$router.push({
          name: 'problems'
        });
      }
    },
    rankLoginCheck() {
      if (this.$cookie.get('userToken') == null) {
        this.$swal('입장 불가', '로그인을 하셨나요?', 'error');
      } else {
        this.$router.push({
          name: 'rank'
        });
      }
    },
    cookieDel() {
      // 쿠키 삭제
      this.$cookie.delete('userToken');
      this.$cookie.delete('userRating');
      this.$cookie.delete('userName');
    },
    isNumber(number) {
      const evt = number || window.event;
      const charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
        return false;
      }
      return true;
    },
    logout() {
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
    openModal() {
      $('.ui.modal').modal('show');
    },
    closeModal() {
      $('.ui.modal').modal('hide');
    },
    onloadCallback() {
      alert('grecaptcha is ready!');
    },
    onVerify(response) {
      console.log(`Verify:  + ${response}`);
    },
    onExpired() {
      console.log('Expired');
    },
    resetRecaptcha() {
      this.$refs.recaptcha.reset(); // Direct call reset method
    },
    submit() {
      let errMsg;
      if (this.signState === true) {
        this.$http.post('api/users/signin', {
          userid: this.userid,
          password: this.password
        }).then(resSign => {
          this.userToken = resSign.data.token;
          // 헤더 토큰 등록
          this.$http.defaults.headers.common.Authorization = this.userToken;
          // 토큰 테스트
          this.$http.get('/api/users/my-info')
          // 로그인 성공
          .then(resInfo => {
            if (resInfo.status === 200) {
              this.loginState = true;
              this.username = resInfo.data.user.username;
              this.closeModal();
              this.loginState = true;
              this.userRating = resInfo.data.user.rating;
              // Cookie : 이름 , 내용 , 만료기간 , 도메인
              this.$cookie.set('userToken', this.userToken, 1);
              // 쿠키 값 출력
              this.$swal('로그인 성공', '안녕하세요!', 'success');
            }
          })
          // 토큰인증 실패
          .catch(err => {
            this.closeModal();
            this.$swal({
              title: '로그인 실패',
              text: err,
              type: 'error'
            });
          });
        }).catch(err => {
          if (err.response.data.message === 'account false') {
            errMsg = '관리자의 승인을 기다려주세요';
          } else if (err.response.data.message === 'login fail') {
            errMsg = '아이디 또는 비밀번호가 잘못되었습니다';
          } else if (err.response.data.message === 'validation error') {
            errMsg = '정보를 모두 입력해주세요';
          } else if (err.response.data.message === 'fail rating excess') {
            errMsg = '비밀번호를 자주틀려 확인 정보를 입력해주세요';
          } else if (err.response.data.message === 'fail rating excess') {
            errMsg = '5회 이상 틀려 확인정보를 입력해 주세요';
            this.infoSubmit = true;
          }
          this.$swal({
            title: '로그인 실패',
            text: errMsg,
            type: 'error'
          }).then(() => {
            if (this.infoSubmit === true) {
              alert('ss');
              this.$swal({
                input: 'text',
                confirmButtonText: 'Next &rarr;',
                showCancelButton: true,
                animation: false,
                progressSteps: ['1', '2', '3']
              });
              const steps = [{
                title: 'Question 1',
                text: 'Chaining swal2 modals is easy'
              }, 'Question 2', 'Question 3'];
              this.$swal.queue(steps).then(function (result) {
                this.$swal.resetDefaults();
                this.$swal({
                  title: 'All done!',
                  html: `Your answers: <pre> +
                                  JSON.stringify(result) +
                                  </pre>`,
                  confirmButtonText: 'Lovely!',
                  showCancelButton: false
                });
              }, function () {
                this.$swal.resetDefaults();
              });
            }
          });
        });
      } else {
        // 회원가입
        this.$http.defaults.headers.common.Authorization = this.userToken;
        this.$http.post('/api/users/signup', {
          username: this.username,
          userid: this.userid,
          password: this.password,
          studentcode: this.studentcode
        }).then(resRegister => {
          this.closeModal();
          const username = resRegister.data.username;
          this.$swal({
            title: '회원가입 성공',
            text: `안녕하세요 ${username}님`,
            type: 'success'
          });
        }).catch(error => {
          this.closeModal();
          if (error.response.data.message === 'validation error') {
            errMsg = '정보를 제대로 기입해주세요';
          }
          this.$swal({
            title: '회원가입 실패',
            text: errMsg,
            type: 'error'
          });
        });
      }
    }
  }
};

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__member_vue__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__member_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__member_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__problemmange_vue__ = __webpack_require__(393);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__problemmange_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__problemmange_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noticemanage_vue__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__noticemanage_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__noticemanage_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nonaccount_vue__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nonaccount_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__nonaccount_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__problemresult_vue__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__problemresult_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__problemresult_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







/* harmony default export */ __webpack_exports__["default"] = {
  name: 'admin',
  components: {
    member: __WEBPACK_IMPORTED_MODULE_0__member_vue___default.a,
    problemmanage: __WEBPACK_IMPORTED_MODULE_1__problemmange_vue___default.a,
    notice: __WEBPACK_IMPORTED_MODULE_2__noticemanage_vue___default.a,
    nonaccount: __WEBPACK_IMPORTED_MODULE_3__nonaccount_vue___default.a,
    problemresult: __WEBPACK_IMPORTED_MODULE_4__problemresult_vue___default.a
  },
  data() {
    return {
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
  beforeCreate() {
    //          토큰 테스트
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken != null) {
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('/api/users/my-info').then(resInfo => {
        this.userRating = resInfo.data.user.rating;
        if (this.userRating === 1) {
          this.$swal({
            title: '입장 실패',
            text: '어드민이 아닙니다',
            type: 'error'
          }).then(() => {
            location.href = '/';
          });
        } else {
          this.adminState = true;
        }
      }).catch(error => {
        this.$swal({
          title: '유저 정보 조회 실패',
          text: error,
          type: 'error'
        }).then(() => {
          location.href = '/';
        });
      });
    } else {
      this.$swal({
        title: '입장 실패',
        text: '로그인을 해주세요',
        type: 'error'
      }).then(() => {
        location.href = '/';
      });
    }
  },
  methods: {
    click_problem() {
      this.memberState = false;
      this.problemState = true;
      this.listState = false;
      this.nonaccountState = false;
      this.problemresultState = false;
    },
    click_member() {
      this.memberState = true;
      this.problemState = false;
      this.listState = false;
      this.nonaccountState = false;
      this.problemresultState = false;
    },
    click_nonaccount() {
      this.nonaccountState = true;
      this.memberState = false;
      this.problemState = false;
      this.listState = false;
      this.problemresultState = false;
    },
    click_list() {
      this.memberState = false;
      this.problemState = false;
      this.listState = true;
      this.nonaccountState = false;
      this.problemresultState = false;
    },
    click_result() {
      this.memberState = false;
      this.problemState = false;
      this.listState = false;
      this.nonaccountState = false;
      this.problemresultState = true;
    }
  }
};

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
		data() {
				return {
						members: []
				};
		},
		created() {
				//토큰테스트
				this.getMember();
		},
		methods: {
				deleteuser(userid, member) {
						this.$swal({
								title: '유저 삭제',
								text: '정말로 삭제하시겠습니까?',
								type: 'question',
								showCancelButton: true,
								confirmButtonText: '삭제',
								cancelButtonText: '취소'
						}).then(() => {
								this.$http.delete(`api/users/${userid}`).then(() => {
										this.$swal({
												title: '삭제 완료',
												text: `${userid} 님의 계정이 삭제되었습니다`,
												type: 'success'
										});
										this.members.splice(this.members.indexOf(member), 1);
								}).catch(err => {
										this.$swal({
												title: '삭제 실패',
												text: err,
												type: 'error'
										});
								});
						}).catch(() => {
								this.$swal({
										title: '삭제 실패',
										text: err,
										type: 'error'
								});
						});
				},
				//            문제리스트
				getMember() {
						this.userToken = this.$cookie.get('userToken');
						this.$http.defaults.headers.common.Authorization = this.userToken;
						this.$http.get('api/users').then(res => {
								let i = 0;
								while (i < res.data.users.length) {
										this.members.push({
												userid: res.data.users[i].userId,
												username: res.data.users[i].username,
												studentcode: res.data.users[i].studentCode,
												score: res.data.users[i].score
										});
										i += 1;
								}
						}).catch(err => {
								this.$swal({
										title: '유저 로드 실패',
										text: err,
										type: 'error'
								});
						});
				}
		}
};

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
  data() {
    return {
      members: []
    };
  },
  created() {
    this.userToken = this.$cookie.get('userToken');
    console.log(this.userToken);
    this.getMember();
  },
  methods: {
    account(userid, member) {
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get(`api/users/account/${userid}`).then(res => {
        console.log(res);
        this.$swal({
          title: '승인 완료',
          text: `${userid}님을 승인하였습니다`,
          type: 'success'
        });
        this.members.splice(this.members.indexOf(member), 1);
      });
    },
    deletenonuser(userid, member) {
      this.$swal({
        title: '유저 삭제',
        text: '정말로 삭제하시겠습니까?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소'
      }).then(() => {
        this.$http.delete(`api/users/${userid}`).then(() => {
          this.$swal({
            title: '삭제 완료',
            text: `${userid}님의 계정이 삭제되었습니다`,
            type: 'success'
          });
          this.members.splice(this.members.indexOf(member), 1);
        }).catch(err => {
          this.$swal({
            title: '삭제 실패',
            text: err,
            type: 'error'
          });
        });
      }).catch(() => {
        this.$swal({
          title: '삭제 실패',
          text: err,
          type: 'error'
        });
      });
    },
    getMember() {
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('api/users/non-account').then(res => {
        let i = 0;
        while (i < res.data.users.length) {
          this.members.push({
            userid: res.data.users[i].userId,
            username: res.data.users[i].username,
            studentcode: res.data.users[i].studentCode,
            rating: res.data.users[i].rating,
            account: res.data.users[i].account
          });
          i += 1;
        }
      });
    }
  }
};

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
  name: 'noticemanage',
  data() {
    return {
      noticeAddState: false,
      noticeMsg: '공지 등록하기',
      name: '',
      num: '',
      content: '',
      type: 'notice',
      noticeList: [],
      noticeModify: false,
      lastNotice: 0
    };
  },
  created() {
    this.loadNotice();
  },
  methods: {
    modify() {
      this.$http.put('api/notices', {
        num: this.num,
        noticename: this.problemNum,
        contents: this.problemName,
        type: this.source
      }).then(() => {
        this.$swal({
          title: '수정 성공',
          text: '공지를 수정하였습니다',
          type: 'success'
        });
      }).catch(err => {
        let errMsgs;
        if (err.response.data.message === 'validation error') {
          errMsgs = '모든 정보를 입력해주세요';
        }
        this.$swal({
          title: '수정 실페',
          text: errMsgs,
          type: 'error'
        });
      });
    },
    noticeAdd() {
      this.noticeAddState = !this.noticeAddState;
      if (this.noticeAddState) {
        this.noticeMsg = '닫기';
      } else {
        this.noticeMsg = '공지 등록하기';
      }
    },
    modifyNotice(num) {
      this.$http.get(`api/notices/${num}`).then(res => {
        this.noticeModify = !this.noticeModify;
        this.num = res.data.notice.num;
        this.name = res.data.notice.noticeName;
        this.content = res.data.notice.contents;
        this.type = res.data.notice.type;
      }).catch(err => {
        this.$swal({
          title: '공지 조회 실패',
          text: err,
          type: 'error'
        });
      });
    },
    deleteNotice(num, notice) {
      this.$swal({
        title: '문제 삭제',
        text: '정말로 삭제하시겠습니까?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소'
      }).then(() => {
        this.$http.delete(`api/notices/${num}`).then(() => {
          this.$swal({
            title: '삭제 완료',
            test: `${num}번 공지를 삭제하셨습니다`,
            type: 'success'
          });
          this.noticeList.splice(this.noticeList.indexOf(notice), 1);
        }).catch(err => {
          this.$swal({
            title: '삭제 실패',
            text: err,
            type: 'error'
          });
        });
      }).catch(() => {
        this.$swal({
          title: '삭제 실패',
          text: err,
          type: 'error'
        });
      });
    },
    loadNotice() {
      console.log('load');
      this.$http.get('api/notices').then(res => {
        let i = 0;
        while (i < res.data.notices.length) {
          this.noticeList.push({
            name: res.data.notices[i].noticeName,
            content: res.data.notices[i].contents,
            type: res.data.notices[i].type,
            num: res.data.notices[i].num
          });
          this.lastNotice = res.data.notices[i].num;
          i += 1;
        }
      }).catch(err => {
        this.$swal({
          title: '공지 로드 실패',
          text: err.response.data.message,
          type: 'error'
        });
      });
    },
    addNotice() {
      console.log('add');
      this.$http.post('api/notices', {
        noticename: this.name,
        contents: this.content,
        type: this.type
      }).then(() => {
        this.$swal('등록 성공', '공지를 등록하였습니다', 'success');
        this.noticeList.push({
          num: this.lastNotice + 1,
          name: this.name,
          content: this.content,
          type: this.type
        });
      }).catch(err => {
        let errMsg;
        if (err.response.data.message === 'validation error') {
          errMsg = '정보를 모두 입력해주세요';
        }
        this.$swal({
          title: '등록 실패',
          text: errMsg,
          type: 'error'
        });
      });
    }
  }
};

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
  data() {
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
      problemType: 'normal'
    };
  },
  created() {
    //토큰테스트
    this.userToken = this.$cookie.get('userToken');
    this.$http.defaults.headers.common.Authorization = this.userToken;
    this.fetchData();
  },
  methods: {
    openAdd() {
      this.addState = !this.addState;
      if (this.addState) {
        this.addMsg = '닫기';
      } else {
        this.addMsg = '문제 등록하기';
      }
    },
    deleteData(num, item) {
      this.$swal({
        title: '문제 삭제',
        text: '정말로 삭제하시겠습니까?',
        type: 'question',
        showCancelButton: true,
        confirmButtonText: '삭제',
        cancelButtonText: '취소'
      }).then(() => {
        this.userToken = this.$cookie.get('userToken');
        this.$http.defaults.headers.common.Authorization = this.userToken;
        this.$http.delete(`api/problems/${num}`).then(() => {
          this.$swal({
            title: '삭제 완료',
            text: `${num}번 문제를 삭제하셨습니다`,
            type: 'success'
          });
          this.items.splice(this.items.indexOf(item), 1);
        }).catch(err => {
          this.$swal({
            title: '삭제 실패',
            text: err,
            type: 'error'
          });
        });
      }).catch(() => {
        this.$swal({
          title: '삭제 실패',
          text: err,
          type: 'error'
        });
      });
    },
    modify() {
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.put('api/problems', {
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
      }).then(() => {
        this.$swal({
          title: '수정 성공',
          text: '문제를 수정하였습니다',
          type: 'success'
        });
      }).catch(err => {
        let errMsgs;
        if (err.response.data.message === 'validation error') {
          errMsgs = '모든 정보를 입력해주세요';
        }
        this.$swal({
          title: '수정 실페',
          text: errMsgs,
          type: 'error'
        });
      });
    },
    modifyData(num) {
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get(`api/problems/${num}`).then(res => {
        this.modifyState = !this.modifyState;
        this.problemName = res.data.problem.problemName;
        this.source = res.data.problem.source;
        this.inputExample = res.data.problem.problemData.inputExample;
        this.inputExample2 = res.data.problem.problemData.inputExample2;
        this.outputExample = res.data.problem.problemData.outputExample;
        this.outputExample2 = res.data.problem.problemData.outputExample2;
        this.memoryLimit = res.data.problem.problemData.memoryLimit;
        this.timeLimit = res.data.problem.problemData.memoryLimit;
        this.problemNum = res.data.problem.num;
        this.score = res.data.problem.score;
        this.explanation = res.data.problem.explanation;
        this.type = res.data.problem.type;
      }).catch(err => {
        this.$swal({
          title: '문제 조회 실패',
          text: err,
          type: 'error'
        });
      });
    },
    solveListData(num) {
      this.solveList = [];
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('api/solution').then(res => {
        let i = 0;
        let username;
        let id;
        let studentcode;
        let result;
        let date;
        let code;
        while (i < res.data.resolves.length) {
          if (res.data.resolves[i].resolveData.problemNum === num) {
            id = res.data.resolves[i].userId;
            result = res.data.resolves[i].resolveData.result;
            date = res.data.resolves[i].resolveData.date;
            code = res.data.resolves[i].resolveData.code;
            this.$http.defaults.headers.common.Authorization = this.userToken;
            this.$http.get(`api/users/search/${id}`).then(userInfo => {
              username = userInfo.data.users.username;
              studentcode = userInfo.data.users.studentCode;
              this.solveList.push({
                username,
                studentcode,
                result,
                date,
                code
              });
            });
          }
          i += 1;
        }
      }).catch(err => {
        this.$swal({
          title: '결과 로드 실패',
          text: err,
          type: 'error'
        });
      });
    },
    isNumber(number) {
      const evt = number || window.event;
      const charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
        return false;
      }
      return true;
    },
    add() {
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.post('api/problems', {
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
      }).then(() => {
        this.$swal('등록 성공', '문제를 등록하였습니다', 'success');
        this.items.push({
          num: this.lastNum + 1,
          name: this.problemName,
          source: this.source
        });
      }).catch(err => {
        let errMsg;
        if (err.response.data.message === 'validation error') {
          errMsg = '정보가 부족합니다';
        }
        this.$swal({
          title: '등록 실패',
          text: errMsg,
          type: 'error'
        });
      });
    },
    fetchData() {
      //토큰테스트
      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('api/problems').then(res => {
        let i = 0;
        while (i < res.data.problems.length) {
          this.items.push({
            num: res.data.problems[i].num,
            name: res.data.problems[i].problemName,
            source: res.data.problems[i].source
          });
          this.lastNum = res.data.problems[i].num;
          i += 1;
        }
      }).catch(err => {
        this.$swal({
          title: '문제 로드 실패',
          text: err,
          type: 'error'
        });
      });
    }
  }
};

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
	data() {
		return {
			problemData: [],
			ratioData: []
		};
	},
	created() {
		this.ratio();
	},
	methods: {
		ratio() {
			this.userToken = this.$cookie.get('userToken');
			this.$http.defaults.headers.common.Authorization = this.userToken;
			this.$http.get('api/solution').then(res => {
				let i = 0;
				while (i < res.data.resolves.length) {
					const date = res.data.resolves[i].resolveData.date.replace('T', ', ');
					this.problemData.push({
						userid: res.data.resolves[i].userId,
						code: res.data.resolves[i].resolveData.code,
						date: date.substring(0, date.length - 8),
						lang: res.data.resolves[i].resolveData.language,
						memory: res.data.resolves[i].resolveData.memory,
						num: res.data.resolves[i].resolveData.problemNum,
						result: res.data.resolves[i].resolveData.result,
						time: res.data.resolves[i].resolveData.time
					});
					this.ratioData.push({
						[i]: res.data.resolves[i].resolveData.problemNum
					});
					i += 1;
				}
				console.log(res);
				console.log(this.ratioData);
			});
		}
	}
};

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timeline_vue__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__timeline_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__timeline_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_vue__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__main_vue__);
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = {
  name: 'index',
  components: {
    parallax: __WEBPACK_IMPORTED_MODULE_1__main_vue___default.a,
    timeline: __WEBPACK_IMPORTED_MODULE_0__timeline_vue___default.a
  },
  data() {
    return {};
  }
};

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'parallax',
  data() {
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

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'sigo',
  data() {
    return {
      userCount: ''
    };
  },
  created() {
    //      const ROOT_URL = 'http://121.186.23.245:9999';
    //      this.$http.defaults.baseURL = ROOT_URL;
    //      this.$http.get('./api/users')
    //        .then((resUserInfo) => {
    //          this.userCount = resUserInfo.data.users.length;
    //        <!--});-->
    //      console.log(this.userCount);
  }
};

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
    name: 'index',
    data() {
        return {
            userToken: '',
            userid: '',
            username: '',
            studentcode: '',
            successCount: 0,
            recentProblem: []
        };
    },
    beforeCreate() {
        const ROOT_URL = 'http://121.186.23.245:9999';
        this.$http.defaults.baseURL = ROOT_URL;

        //          토큰 테스트
        this.userToken = this.$cookie.get('userToken');
        if (this.userToken != null) {
            this.userToken = this.$cookie.get('userToken');
            this.$http.defaults.headers.common.Authorization = this.userToken;
            this.$http.get('/api/users/my-info').then(resInfo => {
                this.userid = resInfo.data.user.userId;
                this.username = resInfo.data.user.username;
                this.studentcode = resInfo.data.user.studentCode;
                this.$http.get('api/solution').then(res => {
                    let i = 0;
                    while (i < res.data.resolves.length) {
                        this.$http.get(`api/solution/findsuccess/${this.userid}/${i}`).then(resFind => {
                            if (resFind.data.result === 'true') {
                                this.successCount += 1;
                            }
                        }).catch(err => {
                            this.$swal({
                                title: '문제 정답 로드 실패',
                                text: err,
                                type: 'error'
                            });
                        });
                        i += 1;
                    }
                    console.log(this.successCount);
                }).catch(err => {
                    this.$swal({
                        title: '문제 결과 로드 실패',
                        text: err,
                        type: 'error'
                    });
                });
            }).catch(error => {
                this.$swal({
                    title: '유저 조회 실패',
                    text: error,
                    type: 'error'
                }).then(() => {
                    location.href = '/';
                });
            });
        } else {
            this.$swal({
                title: '입장 실패',
                text: '로그인을 해주세요',
                type: 'error'
            }).then(() => {
                location.href = '/';
            });
        }
    }
};

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  data() {
    return {};
  }
};

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'notice',
  data() {
    return {
      notices: []
    };
  },
  created() {
    this.$http.get('api/notices').then(res => {
      let i = 0;
      console.log(res);
      while (i < res.data.notices.length) {
        if (res.data.notices[i].type === 'notice') {
          this.notices.push({
            num: res.data.notices[i].num,
            noticename: res.data.notices[i].noticeName,
            date: res.data.notices[i].date
          });
        }
        i += 1;
      }
    }).catch(err => {
      alert(err);
    });
  },
  methods: {
    open(num) {
      this.$router.push({
        path: `notices/${num}`
      });
    }
  }
};

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'openNotice',
  data() {
    return {
      num: '',
      name: '',
      contents: '',
      date: ''
    };
  },
  created() {
    const num = this.$route.params.num;
    this.noticenum = num;
    console.log(num);
    this.$http.get(`api/notices/${num}`).then(res => {
      this.num = res.data.notice.num;
      this.name = res.data.notice.noticeName;
      this.contents = res.data.notice.contents;
      this.date = res.data.notice.date;
    }).catch(err => {
      console.log(err);
    });
  }
};

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

let i = 0;
let end = 10;
let length;
/* harmony default export */ __webpack_exports__["default"] = {
  name: 'index',
  data() {
    return {
      test: 'test',
      items: [],
      loadState: true,
      entering: false,
      lineheight: 0
    };
  },
  created() {
    i = 0;
    end = 10;
    const ROOT_URL = 'http://121.186.23.245:9999';
    this.$http.defaults.baseURL = ROOT_URL;
    //토큰테스트
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken != null) {
      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('/api/users/my-info').then(resInfo => {
        this.userid = resInfo.data.user.userId;
        this.$http.defaults.headers.common.Authorization = this.userToken;
        this.$http.get('api/problems').then(res => {
          length = res.data.problems.length;
          //문제 결과 로드
          this.$http.defaults.headers.common.Authorization = this.userToken;
          this.$http.get('api/solution').then(resRatio => {
            //문제 개수 반복
            if (length < 10) {
              end = length;
            }
            while (i < end) {
              const num = res.data.problems[i].num;
              const name = res.data.problems[i].problemName;
              const source = res.data.problems[i].source;
              const score = res.data.problems[i].score;
              let count = 0;
              let success = 0;
              let fail = 0;
              let ratio = 0;
              let j = 0;
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
                ratio = `${0} %`;
              } else if (ratio === 0) {
                ratio = `${0} %`;
              } else if (ratio !== 0) {
                ratio = `${parseInt(ratio * 100, 10)} %`;
              }
              this.lineheight = 45 * i;
              this.items.push({
                num,
                name,
                source,
                score,
                success,
                fail,
                count,
                ratio
              });
              i += 1;
            }
            this.entering = true;
          }).catch(err => {
            this.$swal({
              title: '문제 기록 로드 실패',
              text: err,
              type: 'error'
            }).then(() => {
              location.href = '/';
            });
          });
        }).catch(err => {
          this.$swal({
            title: '문제 로드 실패',
            text: err,
            type: 'error'
          }).then(() => {
            location.href = '/';
          });
        });
      }).catch(error => {
        this.$swal({
          title: '입장 실패',
          text: '유저 조회 실패',
          type: 'error'
        }).then(() => {
          location.href = '/';
        });
      });
    } else {
      this.$swal({
        title: '입장 실패',
        text: '로그인을 해주세요',
        type: 'error'
      }).then(() => {
        location.href = '/';
      });
    }
  },
  methods: {
    shuffle() {
      this.items = _.shuffle(this.items);
    },
    loadList() {
      //문제 로드
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('api/problems').then(res => {
        i = end;
        end += 10;
        if (i / 10 === parseInt(length / 10, 10)) {
          end = length;
          this.loadState = false;
        }
        //문제 결과 로드
        this.$http.defaults.headers.common.Authorization = this.userToken;
        this.$http.get('api/solution').then(resRatio => {
          //문제 개수 반복
          while (i < end) {
            const num = res.data.problems[i].num;
            const name = res.data.problems[i].problemName;
            const source = res.data.problems[i].source;
            const score = res.data.problems[i].score;
            let count = 0;
            let success = 0;
            let fail = 0;
            let ratio = 0;
            let j = 0;
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
              ratio = `${0} %`;
            } else if (ratio === 0) {
              ratio = `${0} %`;
            } else {
              ratio = `${ratio.toString().substring(2, 4)} %`;
            }
            this.lineheight = 45 * i;
            console.log(this.lineheight);
            this.items.push({
              num,
              name,
              source,
              score,
              success,
              fail,
              count,
              ratio
            });
            i += 1;
          }
        }).catch(err => {
          this.$swal({
            title: '문제 기록 로드 실패',
            text: err,
            type: 'error'
          }).then(() => {
            location.href = '/';
          });
        });
      }).catch(err => {
        this.$swal({
          title: '문제 로드 실패',
          text: err,
          type: 'error'
        }).then(() => {
          location.href = '/';
        });
      });
    },
    result(num) {
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get(`api/solution/findsuccess/${this.userid}/${num}`).then(resresult => {
        if (resresult.data.result === true) {
          this.$swal('입장 실패', '이미 푼 문제입니다', 'warning');
        } else {
          this.$router.push({
            path: `problems/${num}`
          });
        }
      }).catch(err => {
        this.$swal('결과 조회 실패', err, 'error');
      });
    }
  }
};

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_monaco_editor__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_monaco_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_monaco_editor__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  name: 'solve',
  components: {
    MonacoEditor: __WEBPACK_IMPORTED_MODULE_0_vue_monaco_editor___default.a
  },
  data() {
    return {
      userid: '',
      problemUrl: '"../api/problems/"',
      urlParams: '',
      items: [],
      lang: 'c',
      printf: null,
      scanf: null,
      codeResult: '',
      compileResult: '',
      code: '',
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
  created() {
    const ROOT_URL = 'http://121.186.23.245:9999';
    this.$http.defaults.baseURL = ROOT_URL;
    //      토큰 테스트
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken != null) {
      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('/api/users/my-info').then(resInfo => {
        this.userid = resInfo.data.user.userId;
        const id = this.$route.params.num;
        this.$http.defaults.headers.common.Authorization = this.userToken;
        this.$http.get(`/api/problems/${id}`).then(res => {
          this.items.push({
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
      }).catch(error => {
        this.$swal({
          title: '유저 조회 실패',
          text: error,
          type: 'error'
        }).then(() => {
          location.href = '/';
        });
      });
    } else {
      this.$swal({
        title: '입장 실패',
        text: '로그인을 해주세요',
        type: 'error'
      }).then(() => {
        location.href = '/';
      });
    }
  },
  destroy() {
    this.solveMenu = false;
  },
  methods: {
    enter() {
      //		  const line = this.editor.getPosition();
      //		  const endcolumn = this.editor.getSelection().endColumn;
      //		  const range = new monaco.Range(line.lineNumber, endcolumn, line.lineNumber, endcolumn);
      //		  const text = '￦n';
      //		  const linechange = { range, text, forceMoveMarkers: true };
      //		  this.editor.executeEdits('code', [linechange]);
    },
    onMounted(editor) {
      this.editor = editor;
    },
    onCodeChange(editor) {
      this.code = editor.getValue();
      console.log(this.code);
    },
    codeReset() {
      this.editor.setValue('');
      this.code = '';
      this.runMsg = '실행 결과가 이곳에 나타납니다';
      this.codeResult = '';
    },
    codeRun() {
      if (this.code.replace(/^\s*/, '') === '') {
        this.$swal('컴파일오류', '코드를 입력해주세요', 'error');
        this.runMsg = 'ERROR';
        return;
      }
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.post('/api/solution', {
        userid: this.userid,
        problemnum: this.items[0].num,
        inputcode: this.code,
        name: 'problem',
        lang: this.lang,
        mode: true
      }).then(resSubmit => {
        this.codeResult = resSubmit.data.result;
        this.runMsg = '실행 결과 ';
      }).catch(err => {
        if (err.response.data.result === 'compile error') {
          this.runMsg = '컴파일 에러';
          this.codeResult = err.response.data.message;
        } else if (err.response.data.result === 'error') {
          this.runMsg = '에러';
          this.codeResult = err.response.data.message;
        }
      });
    },
    codeSubmit() {
      if (this.code.replace(/^\s*/, '') === '') {
        this.$swal('컴파일오류', '코드를 입력해주세요', 'error');
        this.runMsg = 'ERROR';
        return;
      }
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.post('/api/solution', {
        userid: this.userid,
        problemnum: this.items[0].num,
        inputcode: this.code,
        name: 'problem',
        lang: this.lang
      }).then(resSubmit => {
        const result = resSubmit.data.result;
        if (result === 'success') {
          this.runMsg = 'SUCCESS';
          this.$swal({
            title: '정답',
            text: '다른 문제도 풀어보세요',
            type: 'success'
          }).then(() => {
            location.href = '/problems';
          });
        } else {
          this.runMsg = 'FAIL';
          this.$swal('실패', '다시 도전해 보세요', 'error');
        }
      }).catch(err => {
        this.$swal({
          title: '문제 제출 실패',
          text: err,
          type: 'error'
        });
      });
    }
  }
};

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
  name: 'rank',
  data() {
    return {
      userToken: '',
      users: []
    };
  },
  created() {
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken == null) {
      alert('로그인 해주세요');
      location.href = '/';
    }
  },

  beforeCreate() {
    const ROOT_URL = 'http://121.186.23.245:9999';
    this.$http.defaults.baseURL = ROOT_URL;

    //          토큰 테스트
    this.userToken = this.$cookie.get('userToken');
    if (this.userToken != null) {
      this.userToken = this.$cookie.get('userToken');
      this.$http.defaults.headers.common.Authorization = this.userToken;
      this.$http.get('/api/users/my-info').then(resInfo => {
        this.userid = resInfo.data.user.userId;
        this.$http.get('api/users').then(res => {
          console.log(res);
          const length = res.data.users.length;
          let i = 0;
          while (i < length) {
            this.users.push({
              name: res.data.users[i].username,
              score: res.data.users[i].score
            });
            i += 1;
          }
          const sort = 'score';
          this.users.sort(function (a, b) {
            return b[sort] - a[sort];
          });
        }).catch(err => {
          console.log(err);
        });
      }).catch(error => {
        this.$swal({
          title: '유저 조회 실패',
          text: error,
          type: 'error'
        }).then(() => {
          location.href = '/';
        });
      });
    } else {
      this.$swal({
        title: '입장 실패',
        text: '로그인을 해주세요',
        type: 'error'
      }).then(() => {
        location.href = '/';
      });
    }
  }
};

/***/ }),

/***/ 361:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 362:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 364:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 365:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 366:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 367:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 368:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 369:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 370:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 371:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 372:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 373:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 374:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 375:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 376:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 378:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 379:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 380:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 381:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 382:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(366)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(161),
  /* template */
  __webpack_require__(413),
  /* scopeId */
  "data-v-1fb4ac10",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(374)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(162),
  /* template */
  __webpack_require__(423),
  /* scopeId */
  "data-v-608cdfa9",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(382)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(163),
  /* template */
  __webpack_require__(429),
  /* scopeId */
  "data-v-90766562",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(381)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(164),
  /* template */
  __webpack_require__(428),
  /* scopeId */
  "data-v-8fe46ee8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(368)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(165),
  /* template */
  __webpack_require__(416),
  /* scopeId */
  "data-v-3b8f64c8",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(371)
__webpack_require__(372)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(166),
  /* template */
  __webpack_require__(419),
  /* scopeId */
  "data-v-4886e8bd",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 395:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(370)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(167),
  /* template */
  __webpack_require__(418),
  /* scopeId */
  "data-v-41509454",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 396:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(378)
__webpack_require__(379)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(168),
  /* template */
  __webpack_require__(426),
  /* scopeId */
  "data-v-7bcd82e5",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(367)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(169),
  /* template */
  __webpack_require__(415),
  /* scopeId */
  "data-v-32d9b926",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 398:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(376)
__webpack_require__(377)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(170),
  /* template */
  __webpack_require__(425),
  /* scopeId */
  "data-v-637a59d0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(365)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(171),
  /* template */
  __webpack_require__(412),
  /* scopeId */
  "data-v-1f1cf6d0",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(362)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(172),
  /* template */
  __webpack_require__(409),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(375)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(173),
  /* template */
  __webpack_require__(424),
  /* scopeId */
  "data-v-6209be0c",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(369)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(174),
  /* template */
  __webpack_require__(417),
  /* scopeId */
  "data-v-3f6ebf20",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(373)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(175),
  /* template */
  __webpack_require__(421),
  /* scopeId */
  "data-v-572d1fb3",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(363)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(176),
  /* template */
  __webpack_require__(410),
  /* scopeId */
  "data-v-0f75cc20",
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(156),
  /* template */
  __webpack_require__(422),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(157),
  /* template */
  __webpack_require__(420),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(158),
  /* template */
  __webpack_require__(414),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(364)

var Component = __webpack_require__(8)(
  /* script */
  __webpack_require__(159),
  /* template */
  __webpack_require__(411),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),

/***/ 409:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "notice"
    }
  }, [_c('div', {
    staticClass: "ui bottom attached tab segment active",
    attrs: {
      "data-tab": "first"
    }
  }, [_c('transition-group', {
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
      staticClass: "header"
    }, [_c('span', [_vm._v(_vm._s(notice.num))]), _vm._v("번 ")]), _vm._v(" "), _c('a', {
      staticClass: "ui disabled header"
    }, [_vm._v("\n                            이름 : "), _c('span', [_vm._v(_vm._s(notice.noticename))]), _vm._v("\n                            날짜 : "), _c('span', [_vm._v(_vm._s(notice.date))])])])])])
  }))], 1)])
},staticRenderFns: []}

/***/ }),

/***/ 410:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "index"
    }
  }, [_c('div', {
    staticClass: "ranksys"
  }, [_c('div', {
    staticClass: "rank-main"
  }, [_vm._m(0), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2), _vm._v(" "), _c('div', {
    staticClass: "ui bottom attached tab segment active"
  }, [_vm._m(3), _vm._v(" "), _vm._l((_vm.users), function(user, rank) {
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
    }, [_c('span', [_vm._v(_vm._s(rank))]), _vm._v("등")]), _vm._v(" "), _c('p', {
      staticClass: "ui disabled header"
    }, [_c('span', [_vm._v(_vm._s(user.name))])]), _vm._v(" "), _c('p', {
      staticClass: "sub header",
      attrs: {
        "id": "subder"
      }
    }, [_c('span', [_vm._v(_vm._s(user.score))])])])])])])
  })], 2), _vm._v(" "), _vm._m(4), _vm._v(" "), _vm._m(5)])])])
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
    staticClass: "rank-top"
  }, [_c('div', {
    staticClass: "rank1"
  }, [_c('div', {
    staticClass: "onerank"
  }, [_vm._v("\n                        2등 : 아이티\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "rank2"
  }, [_c('div', {
    staticClass: "tworank"
  }, [_vm._v("\n                        1등 : 솔루션\n                    ")])]), _vm._v(" "), _c('div', {
    staticClass: "rank3"
  }, [_c('div', {
    staticClass: "thrrank"
  }, [_vm._v("\n                        3등 : 시스템\n                    ")])])])
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
  }, [_c('p', {
    staticClass: "item",
    attrs: {
      "id": "ltemone"
    }
  }, [_vm._v("등수")]), _vm._v(" "), _c('p', {
    staticClass: "item",
    attrs: {
      "id": "ltemtwo"
    }
  }, [_vm._v("이름")]), _vm._v(" "), _c('p', {
    staticClass: "item",
    attrs: {
      "id": "ltemthr"
    }
  }, [_vm._v("점수")])])])])])
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

/***/ 411:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "__cov-progress",
    style: (_vm.style)
  })
},staticRenderFns: []}

/***/ }),

/***/ 412:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "notfound"
  }, [_vm._v("\n404 NOT FOUND\n")])
},staticRenderFns: []}

/***/ }),

/***/ 413:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
  }, [_vm._v("개시판관리")]), _vm._v(" "), _c('a', {
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
  }, [(_vm.memberState) ? _c('member') : _vm._e(), _vm._v(" "), (_vm.nonaccountState) ? _c('nonaccount') : _vm._e(), _vm._v(" "), (_vm.problemState) ? _c('problemmanage') : _vm._e(), _vm._v(" "), (_vm.listState) ? _c('notice') : _vm._e(), _vm._v(" "), (_vm.problemresultState) ? _c('problemresult') : _vm._e()], 1)])]) : _vm._e()])])
},staticRenderFns: []}

/***/ }),

/***/ 414:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div')
},staticRenderFns: []}

/***/ }),

/***/ 415:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "timeline"
  }, [_c('div', {
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
  }, [_vm._v("더 보기")])])])])])])]), _vm._v(" "), _c('div', {
    attrs: {
      "id": "footer"
    }
  }, [_c('div', {
    staticClass: "fomain"
  }, [_c('div', {
    staticClass: "ui grid"
  }, [_c('div', {
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
  }, [_vm._v("서울아이티고등학교 학생들이 만든 알고리즘 사이트 입니다.")])]), _vm._v(" "), _c('div', {
    staticClass: "three wide column"
  }), _vm._v(" "), _c('div', {
    staticClass: "five wide column",
    attrs: {
      "id": "two"
    }
  }, [_c('div', {
    staticClass: "footlist1"
  }, [_c('div', {
    staticClass: "foheader"
  }, [_c('h3', [_vm._v("문제풀이")])]), _vm._v(" "), _c('div', {
    staticClass: "ui middle aligned animated list"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("문제")])])])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("출처")])])])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("단계")])])])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("최근문제")])])])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("기타")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "footlist2"
  }, [_c('div', {
    staticClass: "foheader"
  }, [_c('h3', [_vm._v("랭킹")])]), _vm._v(" "), _c('div', {
    staticClass: "ui middle aligned animated list"
  }, [_c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("랭킹")])])])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("페이지")])])])]), _vm._v(" "), _c('div', {
    staticClass: "item"
  }, [_c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "header"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_vm._v("아이템")])])])])])])]), _vm._v(" "), _c('div', {
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
      "href": "#",
      "id": "saws"
    }
  }, [_vm._v("문의 하기")])])])])])]), _vm._v(" "), _c('div', {
    staticClass: "footsub"
  }, [_c('div', {
    staticClass: "fosub"
  }, [_c('div', {
    staticClass: "ddd"
  }, [_c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "big facebook icon"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "big github icon"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "big twitter icon"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "big youtube icon"
  })]), _vm._v(" "), _c('a', {
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "big google Plus icon"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "ccc"
  }, [_c('p', [_vm._v("2017 SiGO. All rights reserved.")])])])])])])
}]}

/***/ }),

/***/ 416:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "probleminput"
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
  }), _vm._v(" "), _c('br')], 2)]), _vm._v(" "), _c('div', {
    staticClass: "solveList"
  }, [_c('transition-group', {
    attrs: {
      "name": "problemmanage"
    }
  }, _vm._l((_vm.solveList), function(list) {
    return _c('ul', {
      key: list
    }, [_c('li', [_vm._v("이름 : " + _vm._s(list.username))]), _vm._v(" "), _c('li', [_vm._v("학번 : " + _vm._s(list.studentcode))]), _vm._v(" "), _c('li', [_vm._v("결과 : " + _vm._s(list.result))]), _vm._v(" "), _c('li', [_vm._v("날짜 : " + _vm._s(list.date))]), _vm._v(" "), _c('li', [_vm._v("코드 : " + _vm._s(list.code))])])
  }))], 1)])])
},staticRenderFns: []}

/***/ }),

/***/ 417:
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
  }, [_vm._v("문제")]), _vm._v(" "), _c('a', {
    staticClass: "item",
    attrs: {
      "data-tab": "second"
    }
  }, [_vm._v("출처")]), _vm._v(" "), _c('a', {
    staticClass: "item",
    attrs: {
      "data-tab": "third"
    }
  }, [_vm._v("단계")]), _vm._v(" "), _c('a', {
    staticClass: "item",
    attrs: {
      "data-tab": "four"
    }
  }, [_vm._v("최근 문제")]), _vm._v(" "), _c('a', {
    staticClass: "item",
    attrs: {
      "data-tab": "five"
    }
  }, [_vm._v("기타")]), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.shuffle
    }
  }, [_vm._v("Shuffle")])]), _vm._v(" "), _c('div', {
    staticClass: "ui bottom attached tab segment active",
    style: ({
      'max-height': _vm.lineheight + 'px',
      'min-height': _vm.lineheight + 'px'
    }),
    attrs: {
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
    }, [_c('p', {
      staticClass: "header"
    }, [_c('span', [_vm._v(_vm._s(item.num))]), _vm._v("번 문제")]), _vm._v(" "), _c('a', {
      staticClass: "ui disabled header"
    }, [_vm._v("\n                            이름 : "), _c('span', [_vm._v(_vm._s(item.name))])]), _vm._v(" "), _c('div', {
      staticClass: "description"
    }, [_c('p', [_vm._v("소스 : "), _c('span', [_vm._v(_vm._s(item.source))]), _vm._v("\n                            난이도 : "), _c('span', [_vm._v("난이도")]), _vm._v("\n                            점수 : "), _c('span', [_vm._v(_vm._s(item.score))]), _vm._v("\n                            성공 : "), _c('span', [_vm._v(_vm._s(item.success))]), _vm._v("\n                            실패 : "), _c('span', [_vm._v(_vm._s(item.fail))]), _vm._v("\n                            정답률 : "), _c('span', [_vm._v(_vm._s(item.ratio))])])])])])])
  }))], 1), _vm._v(" "), _c('div', {
    staticClass: "ui pagination menu"
  }, [_vm._m(1), _vm._v(" "), _c('a', {
    staticClass: "active item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v(" 1 ")]), _vm._v(" "), _c('a', {
    staticClass: "active item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v(" 2 ")]), _vm._v(" "), _c('a', {
    staticClass: "active item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v(" 3 ")]), _vm._v(" "), _c('a', {
    staticClass: "active item",
    attrs: {
      "href": "#"
    }
  }, [_vm._v(" 4 ")]), _vm._v(" "), (_vm.loadState) ? _c('a', {
    staticClass: "active item",
    attrs: {
      "href": "#"
    },
    on: {
      "click": _vm.loadList
    }
  }, [_c('i', {
    staticClass: "angle right icon"
  })]) : _vm._e()])])]) : _vm._e()
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('h2', {
    staticClass: "ui center aligned header"
  }, [_vm._v(" 문제풀기\n            "), _c('div', {
    staticClass: "sub header"
  }, [_vm._v("Manage your account settings and set e-mail preferences.")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('a', {
    staticClass: "active item",
    attrs: {
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "angle left icon"
  })])
}]}

/***/ }),

/***/ 418:
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

/***/ 419:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "probleminput"
  }, [_c('ul', [_vm._l((_vm.problemData), function(data) {
    return _c('li', [_c('p', [_vm._v("ID : " + _vm._s(data.userid))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("Num : " + _vm._s(data.num))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("language : " + _vm._s(data.lang))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("Date : " + _vm._s(data.date))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("Code : " + _vm._s(data.code))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("Result : " + _vm._s(data.result))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("Time : " + _vm._s(data.time))]), _c('br'), _vm._v(" "), _c('p', [_vm._v("Memory : " + _vm._s(data.memory))]), _c('br'), _vm._v(" "), _c('br')])
  }), _vm._v(" "), _c('br')], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 420:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-container"
  }, [_vm._t("parallax-bg"), _vm._v(" "), _c('div', {
    staticClass: "swiper-wrapper"
  }, [_vm._t("default")], 2), _vm._v(" "), _vm._t("pagination"), _vm._v(" "), _vm._t("button-prev"), _vm._v(" "), _vm._t("button-next"), _vm._v(" "), _vm._t("scrollbar")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 421:
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
    }, [_vm._m(0, true), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
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
      "href": "#"
    }
  }, [_c('i', {
    staticClass: "big reply icon"
  })])])
}]}

/***/ }),

/***/ 422:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "swiper-slide"
  }, [_vm._t("default")], 2)
},staticRenderFns: []}

/***/ }),

/***/ 423:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "member"
  }, [_c('ul', [_vm._l((_vm.members), function(member) {
    return _c('li', [_vm._v("\n            아이디: "), _c('span', [_vm._v(_vm._s(member.userid))]), _c('br'), _vm._v("\n            이름: "), _c('span', [_vm._v(_vm._s(member.username))]), _c('br'), _vm._v("\n            학번 : "), _c('span', [_vm._v(_vm._s(member.studentcode))]), _c('br'), _vm._v("\n            점수 : "), _c('span', [_vm._v(_vm._s(member.score))]), _c('br'), _vm._v(" "), _c('button', {
      on: {
        "click": function($event) {
          _vm.deleteuser(member.userid, member)
        }
      }
    }, [_vm._v("유저 삭제")]), _vm._v(" "), _c('br')])
  }), _vm._v(" "), _c('br')], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 424:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "openNotice"
  }, [_c('p', [_vm._v("번호 : " + _vm._s(_vm.num))]), _vm._v(" "), _c('p', [_vm._v("제목 : " + _vm._s(_vm.name))]), _vm._v(" "), _c('p', [_vm._v("내용 : " + _vm._s(_vm.contents))]), _vm._v(" "), _c('p', [_vm._v("날짜 : " + _vm._s(_vm.date))])])
},staticRenderFns: []}

/***/ }),

/***/ 425:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
  }, [_c('p', [_c('span', [_vm._v("1")]), _vm._v(" : 번 문제")])])])])])])])])])
}]}

/***/ }),

/***/ 426:
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

/***/ 427:
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
  }, [_vm._v("MAIN")])], 1)]), _vm._v(" "), _c('ul', {
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
  }, [_vm._v("리스트")])]), _vm._v(" "), _c('li', [_c('a', {
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
  }, [_c('i', {
    staticClass: "close icon",
    on: {
      "click": _vm.closeModal
    }
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
  }, [_c('h1', {
    staticClass: "ui grey header"
  }, [_vm._v("회원가입")]), _vm._v(" "), _c('form', {
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
  }), _vm._v(" "), _c('button', {
    on: {
      "click": _vm.resetRecaptcha
    }
  }, [_vm._v(" Reset ReCAPTCHA ")])], 1)])]), _vm._v(" "), _c('div', {
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

/***/ 428:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
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
  }), _vm._v(" "), _c('br')], 2)])])
},staticRenderFns: []}

/***/ }),

/***/ 429:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "nonaccount"
  }, [_vm._v("\n  nonaccount\n  "), _c('ul', [_vm._l((_vm.members), function(member) {
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
  }), _vm._v(" "), _c('br')], 2)])
},staticRenderFns: []}

/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_typer__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue_typer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue_typer__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_cookie__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_awesome_swiper__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_awesome_swiper___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vue_awesome_swiper__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_dist_semantic_min__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_dist_semantic_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_dist_semantic_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_dist_semantic_min_css__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_semantic_ui_dist_semantic_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_semantic_ui_dist_semantic_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vuex__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__router__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__App_vue__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__App_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vue_sweetalert__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_vue_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_vue_sweetalert__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_vue_progressbar__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_vue_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_vue_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_babel_polyfill__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_lodash__);
















window.$ = __WEBPACK_IMPORTED_MODULE_4_jquery___default.a;

__WEBPACK_IMPORTED_MODULE_8_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_14_lodash___default.a);
__WEBPACK_IMPORTED_MODULE_8_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vue_cookie___default.a);
__WEBPACK_IMPORTED_MODULE_8_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_12_vue_progressbar___default.a, {
	color: 'rgb(143, 255, 199)',
	failedColor: 'red',
	height: '2px',
	transition: {
		speed: '.7s',
		opacity: '1s'
	}
});
__WEBPACK_IMPORTED_MODULE_8_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_7_vuex__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_8_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_axios___default.a);
__WEBPACK_IMPORTED_MODULE_8_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_awesome_swiper___default.a);
__WEBPACK_IMPORTED_MODULE_8_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_0_vue_typer___default.a);
__WEBPACK_IMPORTED_MODULE_8_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_11_vue_sweetalert___default.a);

__WEBPACK_IMPORTED_MODULE_8_vue___default.a.prototype.$http = __WEBPACK_IMPORTED_MODULE_1_axios___default.a;

/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_8_vue___default.a({
	el: '#app',
	router: __WEBPACK_IMPORTED_MODULE_9__router__["a" /* default */],
	template: '<App/>',
	components: { App: __WEBPACK_IMPORTED_MODULE_10__App_vue___default.a }
});

/***/ })

},[436]);
//# sourceMappingURL=main.5602dbdaada5a7f1e392.js.map