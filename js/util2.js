---
---
jQuery(function(i) {
    function o($) {
      const _ = i($.target).closest('div'),
        fa = _.children()[0];
      return fa.innerHTML
    }

    function s($) {
      const _ = decodeURIComponent(window.location.search.substring(1)),
        fa = _.split('&');
      let ga, ha;
      for (ha = 0; ha < fa.length; ha++)
        if (ga = fa[ha].split('='), ga[0] === $) return void 0 === ga[1] || ga[1]
    }(function() {
      if (location.pathname.includes('quote')) {
        let $ = s('message'),
          _ = s('type');
        i('#message').val($), i(`#${_}`).prop('checked', !0)
      }
    })(), i('.enquire').click(function($) {
      const _ = `I would like to enquire about a supply of ${o($)}.`;
      console.log({{ site | jsonify }});
      location.href = '{{ site.baseurl }}' + `quote/?message=${_}&type=oil-col`
    })
  }),
  function() {
    function i($, _) {
      this.selector = null, _ ? this.nodes = _ : 'string' == typeof $ ? (this.selector = $, this.nodes = document.querySelectorAll($)) : this.nodes = [$], this.length = this.nodes.length, this.el = this.nodes[0]
    }

    function o($) {
      return new i($)
    }

    function s($, _) {
      function fa(ab, bb, cb) {
        ab = ab || {}, ga(), !1 !== bb && ja(), Ra = Qa = Pa = null, Sa = -1, Wa = Va = Ua = Ta = null, Xa = !1, Ya = null, Za = !1, $a = null, ia(ab), ka(), Ea(Pa.transition_type, !0), Qa.find('#' + $ + ' .ism-caption').css('visibility', 'hidden'), sa(), wa(), ma(Pa.play_type), Ba(), setTimeout(function() {
          !0 !== cb && ha()
        }, 1E3)
      }

      function ga() {
        o('#' + $ + '-ism-loading-mask').remove();
        var ab = document.createElement('DIV');
        ab.id = $ + '-ism-loading-mask', ab.style.position = 'absolute', ab.style.zIndex = 10, ab.style.top = 0, ab.style.bottom = 0, ab.style.left = 0, ab.style.right = 0, ab.style.backgroundColor = '#eee', o('#' + $).el.appendChild(ab)
      }

      function ha() {
        o('#' + $).show(), 1 == o('#' + $ + '-ism-loading-mask').length && o('#' + $ + '-ism-loading-mask').fadeOut(400, function() {
          o('#' + $ + '-ism-loading-mask').remove(), Ja(0), La(0)
        })
      }

      function ia(ab) {
        for (var bb in Na) {
          var cb = typeof Na[bb];
          void 0 == ab[bb] && 'object' != cb && (cb = o('#' + $).data(bb), void 0 != cb && ('true' === cb ? cb = !0 : 'false' == cb && (cb = !1), ab[bb] = cb))
        }
        for (bb in Pa = ab || {}, Na) void 0 == Pa[bb] && (Pa[bb] = Na[bb]);
        for (Pa.captions = ['Taking care of your cooking oil supply and collection', 'Collecting all types of kitchen waste', 'Delivering the finest grade produce', 'Operating in eco-friendly manner'], ab = o('#' + $ + ' ol > li'), bb = ab.length, cb = 0; cb < bb; cb++) {
          Pa.captions[cb] = [];
          for (var db = 0; 3 > db; db++) {
            var eb = {
                enable: Oa[db].enable,
                delay: Oa[db].delay
              },
              fb = o(ab.get(cb)).find('.ism-caption-' + db);
            1 == fb.length && (eb.enable = !0, fb = fb.data('delay'), isNaN(fb) || (eb.delay = parseInt(fb))), Pa.captions[cb][db] = eb
          }
        }
      }

      function ja() {
        for (qa(), Ka(), $a && $a.unbindEventListeners(), ta(), o('#' + $ + ' .ism-radios input.ism-radio, #' + $ + ' .ism-radios .ism-radio-label').off('click', xa), o('#' + $ + ' .ism-radios input.ism-radio, #' + $ + ' .ism-radios .ism-radio-label').off('touchstart', xa), za(), o('#' + $ + ' .ism-button').remove(), o('#' + $ + ' .ism-radios').remove(), o('#' + $ + ' .ism-cloned').remove(), o('#' + $ + ' .ism-tmp-clone').remove(); 0 < o('#' + $ + ' .ism-frame').length;) o('#' + $ + ' .ism-slides').unwrap();
        0 < o('#' + $ + ' .ism-img-frame').length && o('#' + $ + ' .ism-img').unwrap(), o('#' + $ + ' .ism-caption').removeAttr('style'), o('#' + $ + ' .ism-slide').show(), o('#' + $ + ' .ism-slide').removeAttr('style'), o('#' + $ + ' .ism-slides').removeAttr('style'), o('#' + $ + ' .ism-img').removeClass('ism-img'), o('#' + $ + ' .ism-slide').removeClass('ism-slide ism-slide-0 ism-slide-1 ism-slide-2 ism-slide-3 ism-slide-4 ism-slide-5 ism-slide-6 ism-slide-7 ism-slide-8 ism-slide-9'), o('#' + $ + ' .ism-slides').removeClass('ism-slides'), o('#' + $).removeClass('active')
      }

      function ka() {
        Qa = o('#' + $ + ' ol'), Ra = 100 / o('#' + $ + ' ol > li').length, Sa = 0, Qa.addClass('ism-slides'), o('#' + $ + ' .ism-slides > li').addClass('ism-slide'), o('#' + $ + ' .ism-slides > .ism-slide > img, #' + $ + ' .ism-slides > .ism-slide > a > img').addClass('ism-img'), Qa.find('li').each(function(ab) {
          this.addClass('ism-slide-' + ab)
        }), o('#' + $).wrapInner('<div class=\'ism-frame\'></div>'), Qa = o('#' + $ + ' ol.ism-slides'), o('#' + $ + ' .ism-img').wrap('<div class=\'ism-img-frame\'></div>')
      }

      function la() {
        return o('#' + $ + ' .ism-slide').length
      }

      function ma(ab) {
        Pa.play_type = ab, za(), o('#' + $ + ' .ism-pause-button').remove(), Pa.pause_button && 'manual' != Pa.play_type && (Qa.after('<div class=\'ism-pause-button\'>&nbsp;</div>'), Wa = o('#' + $ + ' .ism-pause-button'), Wa.on('click', Aa), Wa.on('touchstart', Aa)), na()
      }

      function na() {
        Xa = !0, o('#' + $ + ' .ism-pause-button').removeClass('ism-play'), 'manual' != Pa.play_type && (clearTimeout(Ya), Ya = setTimeout(pa, Pa.interval))
      }

      function oa(ab) {
        const cb = document.getElementById('home_caption');
        ab = 4 === ab ? 0 : ab, ab = -1 === ab ? 3 : ab, cb.text = ['Taking care of your cooking oil needs.', 'Collecting all types of kitchen waste.', 'Delivering the finest grade produce.', 'Operating in eco-friendly manner.'][ab]
      }

      function pa() {
        var ab = Sa + 1;
        Xa && 'manual' != Pa.play_type && ('once' == Pa.play_type && Sa == la() - 2 ? (Fa(ab), qa()) : 'once-rewind' == Pa.play_type && Sa == la() - 1 ? (Fa(0), qa()) : ('loop' == Pa.play_type && Sa == la() - 1 ? Fa(0) : Fa(ab), na()))
      }

      function qa() {
        Xa = !1, clearTimeout(Ya), Ya = null, o('#' + $ + ' .ism-pause-button').addClass('ism-play')
      }

      function ra(ab, bb) {
        ab != Sa && (qa(), Fa(ab, bb))
      }

      function sa() {
        Pa.buttons && (Qa.after('<div class=\'ism-button ism-button-prev\'>&nbsp;</div><div class=\'ism-button ism-button-next\'>&nbsp;</div>'), Ta = o('#' + $ + ' .ism-button-prev'), Ua = o('#' + $ + ' .ism-button-next'), Ta.on('click', ua), Ta.on('touchstart', ua), Ua.on('click', va), Ua.on('touchstart', va))
      }

      function ta() {
        o('#' + $ + ' .ism-button-prev').off('click', ua), o('#' + $ + ' .ism-button-prev').off('touchstart', ua), o('#' + $ + ' .ism-button-next').off('click', va), o('#' + $ + ' .ism-button-next').off('touchstart', va)
      }

      function ua(ab) {
        ab && ab.preventDefault && ab.preventDefault(), ab && ab.stopPropagation && ab.stopPropagation(), ra(Sa - 1)
      }

      function va(ab) {
        ab && ab.preventDefault && ab.preventDefault(), ab && ab.stopPropagation && ab.stopPropagation(), ra(Sa + 1)
      }

      function wa() {
        if (Pa.radios) {
          o('#' + $).append('<ul class=\'ism-radios\'></ul>'), Va = o('#' + $ + ' .ism-radios'), 'thumbnail' == Pa.radio_type && Va.addClass('ism-radios-as-thumbnails');
          for (var ab = 0; ab < la(); ab++) 0 == ab ? Va.append('<li class=\'ism-radio-' + ab + ' active\'><input type=\'radio\' name=\'ism-radio\' class=\'ism-radio\' id=\'ism-radio-' + ab + '\' checked=\'checked\' /><label class=\'ism-radio-label\' for=\'ism-radio-' + ab + '\'></label></li>') : Va.append('<li class=\'ism-radio-' + ab + '\'><input type=\'radio\' name=\'ism-radio\' class=\'ism-radio\' id=\'ism-radio-' + ab + '\' /><label class=\'ism-radio-label\' for=\'ism-radio-' + ab + '\'></label></li>');
          o('#' + $ + ' .ism-radios input.ism-radio, #' + $ + ' .ism-radios .ism-radio-label').on('click', xa), o('#' + $ + ' .ism-radios input.ism-radio, #' + $ + ' .ism-radios .ism-radio-label').on('touchstart', xa)
        }
      }

      function xa(ab) {
        ab.preventDefault && ab.preventDefault(), ab.stopPropagation && ab.stopPropagation(), ab = o(ab.target.parentNode).index(), ra(ab)
      }

      function ya(ab) {
        Pa.radios && (o('#' + $ + ' .ism-radios li').removeClass('active'), ab = o('#' + $ + ' .ism-radios li').get(ab), o(ab).addClass('active'), o(ab).find('input').attr('checked', 'checked'))
      }

      function za() {
        o('#' + $ + ' .ism-pause-button').off('click', Aa), o('#' + $ + ' .ism-pause-button').off('touchstart', Aa)
      }

      function Aa(ab) {
        ab.preventDefault(), ab.stopPropagation(), Xa ? qa() : na()
      }

      function Ba() {
        var ab = o('#' + $).get(0),
          bb = Qa.get(0);
        $a = new Dragdealer(ab, bb, {
          steps: la(),
          x: 0,
          speed: .2,
          loose: !0,
          requestAnimationFrame: !0,
          dragStartCallback: function() {
            qa()
          },
          dragStopCallback: function() {
            new_slide_index = $a.getStep()[0] - 1, Pa.pause_button ? qa() : na();
            var eb = new_slide_index,
              fb = Sa;
            Sa = eb, Da('afterswipe', [eb]), ya(eb), Ia(fb, eb, !1)
          },
          onAfterGlide: function() {
            $a.setStep(Sa + 1, 1, !0)
          }
        }), window.onload = function() {
          setTimeout(function() {
            $a.reflow()
          }, 150), setTimeout(function() {
            $a.reflow()
          }, 600)
        }
      }

      function Ca() {
        $a && ($a.setStep(Sa + 1, 1, !0), $a.reflow())
      }

      function Da(ab, bb) {
        _a[ab] && _a[ab].apply(this, bb)
      }

      function Ea(ab, bb) {
        if (1 == bb || ab != Pa.transition_type) {
          Pa.transition_type = ab, o('#' + $ + ' .ism-slide').removeClass('ism-zoom-in'), o('#' + $ + ' .ism-slide').show();
          var cb = la();
          Qa.css('width', 100 * cb + '%'), Qa.find('.ism-slide').each(function(db) {
            db = Ra * db + '%', this.css('width', 100 / cb + '%'), this.css('left', db)
          })
        }
      }

      function Fa(ab, bb) {
        if (oa(ab), !0 != Za && ab != Sa) {
          Za = !0;
          var cb = Sa;
          ab = parseInt(ab), 0 > ab ? ab = la() - 1 : ab >= la() && (ab = 0);
          var db = ab;
          ya(db), Sa = db, Da('beforetransition', [db]), 'instant' == Pa.transition_type ? (db = ab, $a.setStep(db + 1, 1, !0), Ia(cb, db, !0, bb)) : 'slide' == Pa.transition_type ? Ga(cb, ab, bb) : 'fade' == Pa.transition_type ? Ha(cb, ab, !1, bb) : 'zoom' == Pa.transition_type && Ha(cb, ab, !0, bb)
        }
      }

      function Ga(ab, bb, cb) {
        var db = bb / (la() - 1);
        $a.startSlide(db, function() {
          Ia(ab, bb, !0, cb)
        })
      }

      function Ha(ab, bb, cb, db) {
        o('#' + $ + ' li.ism-slide').removeClass('ism-zoom-in');
        var eb = o('#' + $ + ' li.ism-slide-' + ab),
          fb = Qa.clone();
        fb.addClass('ism-slides-clone');
        var gb = bb / (la() - 1),
          gb = $a.getOffsetsByRatios([gb, 0]);
        fb.css('transform', 'translateX(' + gb[0] + 'px)'), fb.insertAfter(Qa.el), cb && eb.addClass('ism-zoom-in'), cb = fb.get(0), Qa.fadeInto(cb, 2 * Pa.transition_duration, function() {
          $a.setStep(bb + 1, 1, !0), o('#' + $ + ' .ism-slides-clone').remove(), o('#' + $ + ' .ism-slides').show(), o('#' + $ + ' .ism-slides').css('opacity', null), Ia(ab, bb, !0, db)
        })
      }

      function Ia(ab, bb, cb, db) {
        bb = parseInt(bb), o('#' + $ + ' .ism-slides-clone').remove(), o('#' + $ + ' .ism-slides').show(), o('#' + $ + ' li.ism-slide').removeClass('ism-zoom-in'), cb && Ca(), db && db(), Ja(bb), La(bb), Za = !1, Da('aftertransition', [bb])
      }

      function Ja(ab) {
        Ka(), 'none' != Pa.image_fx && ('zoompan' == Pa.image_fx ? o('#' + $ + ' .ism-slide-' + ab + ' .ism-img-frame').addClass('ism-zoom-pan') : 'zoomrotate' == Pa.image_fx && o('#' + $ + ' .ism-slide-' + ab + ' .ism-img-frame').addClass('ism-zoom-rotate'))
      }

      function Ka() {
        o('#' + $ + ' .ism-slide .ism-img-frame').removeClass('ism-zoom-pan'), o('#' + $ + ' .ism-slide .ism-img-frame').removeClass('ism-zoom-rotate')
      }

      function La(ab) {
        Qa.find('.ism-caption').css('visibility', 'hidden'), Qa.find('.ism-caption').removeClass('ism-caption-anim'), Ma(ab, 0), Ma(ab, 1), Ma(ab, 2)
      }

      function Ma(ab, bb) {
        Pa.captions[ab] && 1 == Pa.captions[ab][bb].enable && setTimeout(function() {
          Qa.find('.ism-slide-' + ab + ' .ism-caption-' + bb).css('visibility', 'visible'), Qa.find('.ism-slide-' + ab + ' .ism-caption-' + bb).addClass('ism-caption-anim')
        }, Pa.captions[ab][bb].delay)
      }
      var Pa, Qa, Ra, Sa, Ta, Ua, Va, Wa, Xa, Ya, Za, $a, Na = {
          transition_type: 'slide',
          play_type: 'manual',
          interval: 7E3,
          image_fx: 'none',
          buttons: !0,
          radios: !0,
          radio_type: 'button',
          pause_button: !0,
          transition_duration: 350,
          swipe: !0
        },
        Oa = [{
          enable: !1,
          delay: 0
        }, {
          enable: !1,
          delay: 200
        }, {
          enable: !1,
          delay: 400
        }],
        _a = {};
      fa(_, !1, _.prevent_stop_loading || !1), this.init = fa, this.deinit = ja, this.stopLoading = ha, this.transition = Fa, this.listen = function(ab, bb) {
        _a[ab] = bb
      }, this.reflow = Ca, this.setTransitionType = Ea, this.setPlayType = ma, this.setInterval = function(ab) {
        Pa.interval = ab
      }, this.setImageFx = function(ab) {
        ab == Pa.image_fx ? Pa.image_fx = ab : (Pa.image_fx = ab, Ja(Sa))
      }, this.setCaptionEnable = function(ab, bb) {
        Pa.captions[ab][bb].enable = 1
      }, this.setCaptionDelay = function(ab, bb) {
        Pa.captions[ab][bb].delay = 1
      }, this.enableButtons = function(ab) {
        !0 !== ab || Pa.buttons || (ta(), o('#' + $ + ' .ism-button').remove(), sa())
      }, this.enableRadios = function() {}, this.setRadioType = function(ab) {
        'thumbnail' == ab ? o('#' + $ + ' .ism-radios').addClass('ism-radios-as-thumbnails') : o('#' + $ + ' .ism-radios').removeClass('ism-radios-as-thumbnails')
      }, this.getSlideCount = la, this.getActiveSlideIndex = function() {
        return Sa
      }, this.setElementId = function(ab) {
        $ = document.getElementById($).id = ab
      }
    }
    i.prototype.get = function($) {
      return this.nodes[$]
    }, i.prototype.find = function($) {
      return $ = this.el.querySelectorAll($), new i(null, $)
    }, i.prototype.index = function() {
      for (var $ = this.el, _ = 0; null != ($ = $.previousSibling);) _++;
      return _
    }, i.prototype.each = function($) {
      for (var fa, _ = 0; _ < this.nodes.length; _++) fa = new i(this.nodes[_]), $.call(fa, _, fa)
    }, i.prototype.remove = function() {
      for (var _, $ = 0; $ < this.nodes.length; $++) _ = this.nodes[$], _.parentNode.removeChild(_)
    }, i.prototype.removeAttr = function($) {
      for (var _ = 0; _ < this.nodes.length; _++) this.nodes[_].removeAttribute($)
    }, i.prototype.attr = function($, _) {
      var fa = this.el;
      return void 0 == _ ? fa.getAttribute($) : void fa.setAttribute($, _)
    }, i.prototype.data = function($) {
      return this.el.getAttribute('data-' + $)
    }, i.prototype.hasClass = function($) {
      var _ = this.el;
      return _.classList ? _.classList.contains($) : new RegExp('(^| )' + $ + '( |$)', 'gi').test(_.className)
    }, i.prototype.addClass = function($) {
      for (var fa, _ = 0; _ < this.nodes.length; _++) fa = this.nodes[_], fa.classList ? fa.classList.add($) : fa.className += ' ' + $
    }, i.prototype.removeClass = function($) {
      for (var fa, _ = 0; _ < this.nodes.length; _++) fa = this.nodes[_], fa.classList ? fa.classList.remove($.split(' ')) : fa.className = fa.className.replace(new RegExp('(^|\\b)' + $.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
    }, i.prototype.show = function() {
      for (var _, $ = 0; $ < this.nodes.length; $++) _ = this.nodes[$], _ && _.style && (_.style.display = '')
    }, i.prototype.hide = function() {
      for (var _, $ = 0; $ < this.nodes.length; $++) _ = this.el, _ && _.style && (_.style.display = 'none')
    }, i.prototype.css = function($, _) {
      for (var fa = 0; fa < this.nodes.length; fa++) this.nodes[fa].style[$] = _
    }, i.prototype.fadeOut = function($, _) {
      i.crossFade(this.el, null, $, _)
    }, i.prototype.fadeIn = function($, _) {
      i.crossFade(null, this.el, $, _)
    }, i.prototype.fadeInto = function($, _, fa) {
      i.crossFade(this.el, $, _, fa)
    }, i.crossFade = function($, _, fa, ga) {
      $ = $ || {
        style: {}
      }, _ = _ || {
        style: {}
      }, fa = fa || 400;
      var ha = 1,
        ia = 0;
      $.style.opacity = ha, _.style.opacity = ia, $.style.filter = '', _.style.filter = '';
      var ka, ja = +new Date,
        la = function() {
          ka = (new Date - ja) / fa, ha -= ka, ia += ka, $.style.opacity = ha, _.style.opacity = ia, $.style.filter = 'alpha(opacity=' + 100 * ha | NaN, _.style.filter = 'alpha(opacity=' + 100 * ia | NaN, ja = +new Date, 0 < ha ? window.requestAnimationFrame && requestAnimationFrame(la) || setTimeout(la, 16) : ($.style.opacity = 0, _.style.opacity = 1, $.style.filter = '', _.style.filter = '', ga && ga())
        };
      la()
    }, i.prototype.wrap = function($) {
      for (var _ = 0; _ < this.nodes.length; _++) {
        var fa = this.nodes[_],
          ga = new i(fa).index(),
          ha = fa.outerHTML,
          ia = fa.parentNode;
        fa.insertAdjacentHTML('beforebegin', $), ia.removeChild(fa), ia.childNodes[ga].innerHTML = ha
      }
    }, i.prototype.wrapInner = function($) {
      var _ = this.el,
        fa = _.innerHTML;
      _.innerHTML = $, _.firstChild.innerHTML = fa
    }, i.prototype.unwrap = function() {
      var $ = this.el;
      $.parentNode.outerHTML = $.parentNode.innerHTML
    }, i.prototype.after = function($) {
      this.el.insertAdjacentHTML('afterend', $)
    }, i.prototype.append = function($) {
      this.el.insertAdjacentHTML('beforeend', $)
    }, i.prototype.insertAfter = function($) {
      $.parentNode.insertBefore(this.el, $.nextSibling)
    }, i.prototype.clone = function() {
      return new i(this.el.cloneNode(!0))
    }, i.prototype.on = function($, _) {
      for (var ga, fa = 0; fa < this.nodes.length; fa++) ga = this.nodes[fa], ga.addEventListener ? ga.addEventListener($, _) : ga.attachEvent('on' + $, function() {
        _.call(ga)
      })
    }, i.prototype.off = function($, _) {
      for (var ga, fa = 0; fa < this.nodes.length; fa++) ga = this.nodes[fa], ga && (ga.removeEventListener ? ga.removeEventListener($, _) : ga.detachEvent('on' + $, _))
    }, o.ready = function($) {
      'complete' === document.readyState ? setTimeout($, 1) : document.addEventListener ? document.addEventListener('DOMContentLoaded', $, !1) : document.attachEvent('onreadystatechange', function() {
        'complete' === document.readyState && $()
      })
    }, window.ISM = window.ISM || {}, window.ISM.Slider = s, window.ISM.Config = window.ISM.Config || {}, window.ISM.instances = [], o.ready(function() {
      if (!0 !== window.ISM.Config.no_instantiation)
        for (var fa, $ = o('.ism-slider'), _ = 0; _ < $.length; _++) fa = $.get(_), fa.id = fa.id || 'ism-slider-' + _, window.ISM.instances.push(new s(fa.id, {}))
    })
  }(),
  function(i, o) {
    'function' == typeof define && define.amd ? define(o) : i.Dragdealer = o()
  }(this, function() {
    function i(oa) {
      var pa = ['Webkit', 'Moz', 'ms', 'O'],
        qa = document.documentElement.style;
      if (void 0 !== qa[oa]) return oa;
      oa = oa.charAt(0).toUpperCase() + oa.substr(1);
      for (var ra = 0; ra < pa.length; ra++)
        if (void 0 !== qa[pa[ra] + oa]) return pa[ra] + oa
    }
    var o = function(oa, pa, qa) {
      this.options = this.applyDefaults(qa || {}), this.bindMethods(), this.wrapper = oa, this.handle = pa, this.init(), this.bindEventListeners()
    };
    o.prototype = {
      defaults: {
        disabled: !1,
        horizontal: !0,
        vertical: !1,
        slide: !0,
        steps: 0,
        snap: !1,
        loose: !1,
        speed: .1,
        xPrecision: 0,
        yPrecision: 0,
        activeClass: 'active',
        css3: !0,
        tapping: !0,
        afterSwipeCallback: function() {}
      },
      init: function() {
        if (this.options.css3) {
          var oa = this.handle;
          ja.backfaceVisibility && ja.perspective && (oa.style[ja.perspective] = '1000px', oa.style[ja.backfaceVisibility] = 'hidden')
        }
        this.value = {
          prev: [-1, -1],
          current: [this.options.x || 0, this.options.y || 0],
          target: [this.options.x || 0, this.options.y || 0]
        }, this.offset = {
          wrapper: [0, 0],
          mouse: [0, 0],
          prev: [-999999, -999999],
          current: [0, 0],
          target: [0, 0]
        }, this.change = [0, 0], this.stepRatios = this.calculateStepRatios(), this.sliding = this.tapping = this.dragging = this.activity = !1, this.slide_count = 0, this.reflow(), this.options.disabled && this.disable()
      },
      applyDefaults: function(oa) {
        for (var pa in this.defaults) oa.hasOwnProperty(pa) || (oa[pa] = this.defaults[pa]);
        return oa
      },
      calculateStepRatios: function() {
        var oa = [];
        if (1 <= this.options.steps)
          for (var pa = 0; pa <= this.options.steps - 1; pa++) oa[pa] = 1 < this.options.steps ? pa / (this.options.steps - 1) : 0;
        return oa
      },
      setWrapperOffset: function() {
        this.offset.wrapper = ia.get(this.wrapper)
      },
      calculateBounds: function() {
        var oa = {
          top: this.options.top || 0,
          bottom: -(this.options.bottom || 0) + this.wrapper.offsetHeight,
          left: this.options.left || 0,
          right: -(this.options.right || 0) + this.wrapper.offsetWidth
        };
        return oa.availWidth = oa.right - oa.left - this.handle.offsetWidth, oa.availHeight = oa.bottom - oa.top - this.handle.offsetHeight, oa
      },
      calculateValuePrecision: function() {
        var oa = this.options.xPrecision || Math.abs(this.bounds.availWidth),
          pa = this.options.yPrecision || Math.abs(this.bounds.availHeight);
        return [oa ? 1 / oa : 0, pa ? 1 / pa : 0]
      },
      bindMethods: function() {
        this.requestAnimationFrame = 'function' == typeof this.options.customRequestAnimationFrame ? s(this.options.customRequestAnimationFrame, window) : s(la, window), this.cancelAnimationFrame = 'function' == typeof this.options.customCancelAnimationFrame ? s(this.options.customCancelAnimationFrame, window) : s(ma, window), this.animateWithRequestAnimationFrame = s(this.animateWithRequestAnimationFrame, this), this.animate = s(this.animate, this), this.onHandleMouseDown = s(this.onHandleMouseDown, this), this.onHandleTouchStart = s(this.onHandleTouchStart, this), this.onDocumentMouseMove = s(this.onDocumentMouseMove, this), this.onWrapperTouchMove = s(this.onWrapperTouchMove, this), this.onWrapperMouseDown = s(this.onWrapperMouseDown, this), this.onWrapperTouchStart = s(this.onWrapperTouchStart, this), this.onDocumentMouseUp = s(this.onDocumentMouseUp, this), this.onDocumentTouchEnd = s(this.onDocumentTouchEnd, this), this.onHandleClick = s(this.onHandleClick, this), this.onWindowResize = s(this.onWindowResize, this)
      },
      bindEventListeners: function() {
        $(this.handle, 'mousedown', this.onHandleMouseDown), $(this.handle, 'touchstart', this.onHandleTouchStart), $(document, 'mousemove', this.onDocumentMouseMove), $(this.wrapper, 'touchmove', this.onWrapperTouchMove), $(this.wrapper, 'mousedown', this.onWrapperMouseDown), $(this.wrapper, 'touchstart', this.onWrapperTouchStart), $(document, 'mouseup', this.onDocumentMouseUp), $(document, 'touchend', this.onDocumentTouchEnd), $(this.handle, 'click', this.onHandleClick), $(window, 'resize', this.onWindowResize), this.animate(!1, !0), this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame)
      },
      unbindEventListeners: function() {
        _(this.handle, 'mousedown', this.onHandleMouseDown), _(this.handle, 'touchstart', this.onHandleTouchStart), _(document, 'mousemove', this.onDocumentMouseMove), _(this.wrapper, 'touchmove', this.onWrapperTouchMove), _(this.wrapper, 'mousedown', this.onWrapperMouseDown), _(this.wrapper, 'touchstart', this.onWrapperTouchStart), _(document, 'mouseup', this.onDocumentMouseUp), _(document, 'touchend', this.onDocumentTouchEnd), _(this.handle, 'click', this.onHandleClick), _(window, 'resize', this.onWindowResize), this.cancelAnimationFrame(this.interval)
      },
      onHandleMouseDown: function(oa) {
        oa.target && 'A' == oa.target.tagName && 0 <= oa.target.className.search(/ism-caption/) && (document.location = oa.target.href), ha.refresh(oa), fa(oa), ga(oa), this.activity = !1, this.startDrag()
      },
      onHandleTouchStart: function(oa) {
        oa.target && 'A' == oa.target.tagName && 0 <= oa.target.className.search(/ism-caption/) && (document.location = oa.target.href), ha.refresh(oa), ga(oa), this.activity = !1, this.startDrag()
      },
      onDocumentMouseMove: function(oa) {
        ha.refresh(oa), this.dragging && (this.activity = !0, fa(oa))
      },
      onWrapperTouchMove: function(oa) {
        ha.refresh(oa), !this.activity && this.draggingOnDisabledAxis() ? this.dragging && this.stopDrag() : (fa(oa), this.activity = !0)
      },
      onWrapperMouseDown: function(oa) {
        oa.target && 0 <= oa.target.className.search(/ism-(button|radio|caption)/) || (ha.refresh(oa), fa(oa), this.startTap())
      },
      onWrapperTouchStart: function(oa) {
        ha.refresh(oa), fa(oa), this.startTap()
      },
      onDocumentMouseUp: function(oa) {
        this.stopDrag(), this.stopTap(), oa.target && 0 <= oa.target.className.search(/ism-(button|radio|caption)/) || this.options.afterSwipeCallback()
      },
      onDocumentTouchEnd: function() {
        this.stopDrag(), this.stopTap(), this.options.afterSwipeCallback()
      },
      onHandleClick: function(oa) {
        oa.target && 0 <= oa.target.className.search(/ism-(button|radio)/) || !this.activity || (fa(oa), ga(oa))
      },
      onWindowResize: function() {
        this.reflow()
      },
      enable: function() {
        this.disabled = !1, this.handle.className = this.handle.className.replace(/\s?disabled/g, '')
      },
      disable: function() {
        this.disabled = !0, this.handle.className += ' disabled'
      },
      reflow: function() {
        this.setWrapperOffset(), this.bounds = this.calculateBounds(), this.valuePrecision = this.calculateValuePrecision(), this.updateOffsetFromValue()
      },
      getStep: function() {
        return [this.getStepNumber(this.value.target[0]), this.getStepNumber(this.value.target[1])]
      },
      getValue: function() {
        return this.value.target
      },
      setStep: function(oa, pa, qa) {
        this.setValue(this.options.steps && 1 < oa ? (oa - 1) / (this.options.steps - 1) : 0, this.options.steps && 1 < pa ? (pa - 1) / (this.options.steps - 1) : 0, qa)
      },
      setValue: function(oa, pa, qa) {
        this.setTargetValue([oa, pa || 0]), qa && (this.groupCopy(this.value.current, this.value.target), this.updateOffsetFromValue(), this.callAnimationCallback())
      },
      startTap: function() {
        !this.disabled && this.options.tapping && (this.tapping = !0, this.setWrapperOffset(), this.setTargetValueByOffset([ha.x - this.offset.wrapper[0] - this.handle.offsetWidth / 2, ha.y - this.offset.wrapper[1] - this.handle.offsetHeight / 2]))
      },
      stopTap: function() {
        !this.disabled && this.tapping && (this.tapping = !1, this.setTargetValue(this.value.current))
      },
      startDrag: function() {
        this.disabled || (this.dragging = !0, this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame), this.setWrapperOffset(), this.offset.mouse = [ha.x - ia.get(this.handle)[0], ha.y - ia.get(this.handle)[1]], this.wrapper.className.match(this.options.activeClass) || (this.wrapper.className += ' ' + this.options.activeClass), this.callDragStartCallback())
      },
      stopDrag: function() {
        if (!this.disabled && this.dragging) {
          this.dragging = !1;
          var oa = this.groupClone(this.value.current);
          if (this.options.slide) {
            var pa = this.change;
            oa[0] += 4 * pa[0], oa[1] += 4 * pa[1]
          }
          this.setTargetValue(oa), this.wrapper.className = this.wrapper.className.replace(' ' + this.options.activeClass, ''), this.callDragStopCallback()
        }
      },
      callAnimationCallback: function() {
        var oa = this.value.current;
        this.options.snap && 1 < this.options.steps && (oa = this.getClosestSteps(oa)), this.groupCompare(oa, this.value.prev) || ('function' == typeof this.options.animationCallback && this.options.animationCallback.call(this, oa[0], oa[1]), this.groupCopy(this.value.prev, oa))
      },
      callTargetCallback: function() {
        'function' == typeof this.options.callback && this.options.callback.call(this, this.value.target[0], this.value.target[1])
      },
      callDragStartCallback: function() {
        'function' == typeof this.options.dragStartCallback && this.options.dragStartCallback.call(this, this.value.target[0], this.value.target[1])
      },
      callDragStopCallback: function() {
        'function' == typeof this.options.dragStopCallback && this.options.dragStopCallback.call(this, this.value.target[0], this.value.target[1])
      },
      startSlide: function(oa, pa) {
        this.slide_callback = pa, this.sliding = !0, this.value.target[0] = oa, this.slide_start = this.value.current[0], this.step_size = Math.abs(this.value.target[0] - this.value.current[0]), this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame)
      },
      animateWithRequestAnimationFrame: function(oa) {
        oa ? (this.timeOffset = this.timeStamp ? oa - this.timeStamp : 0, this.timeStamp = oa) : this.timeOffset = 25, this.sliding ? this.animateSlide() : this.animate(), this.sliding || this.dragging || this.value.target[0] != this.value.current[0] ? this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame) : this.options.onAfterGlide()
      },
      animate: function(oa, pa) {
        if (!oa || this.dragging) {
          if (this.dragging) {
            var qa = this.groupClone(this.value.target);
            this.setTargetValueByOffset([ha.x - this.offset.wrapper[0] - this.offset.mouse[0], ha.y - this.offset.wrapper[1] - this.offset.mouse[1]], this.options.loose), this.change = [this.value.target[0] - qa[0], this.value.target[1] - qa[1]]
          }(this.dragging || pa) && this.groupCopy(this.value.current, this.value.target), (this.dragging || this.glide() || pa) && (this.updateOffsetFromValue(), this.callAnimationCallback())
        }
      },
      glide: function() {
        var oa = [this.value.target[0] - this.value.current[0], this.value.target[1] - this.value.current[1]];
        return (oa[0] || oa[1]) && (Math.abs(oa[0]) > this.valuePrecision[0] || Math.abs(oa[1]) > this.valuePrecision[1] ? (this.value.current[0] += oa[0] * Math.min(this.options.speed * this.timeOffset / 25, 1), this.value.current[1] += oa[1] * Math.min(this.options.speed * this.timeOffset / 25, 1)) : this.groupCopy(this.value.current, this.value.target), !0)
      },
      animateSlide: function() {
        for (var oa = this.value.target[0] - this.value.current[0], pa = 0 <= oa ? 1 : -1, oa = Math.abs(oa), qa = (this.value.current[0] - this.slide_start) / (this.value.target[0] - this.slide_start), ra = qa - .5, ra = .08 * ((-3 * ra * ra + .8) * this.step_size); ra > oa;) ra *= .5;
        .995 < qa ? (this.groupCopy(this.value.current, this.value.target), this.sliding = !1, this.slide_callback()) : this.value.current[0] += pa * ra, this.updateOffsetFromValue(), this.renderHandlePosition(), isNaN(qa)
      },
      updateOffsetFromValue: function() {
        this.offset.current = this.options.snap ? this.getOffsetsByRatios(this.getClosestSteps(this.value.current)) : this.getOffsetsByRatios(this.value.current), this.groupCompare(this.offset.current, this.offset.prev) || (this.renderHandlePosition(), this.groupCopy(this.offset.prev, this.offset.current))
      },
      renderHandlePosition: function() {
        var oa = '';
        this.options.css3 && ja.transform ? (this.options.horizontal && (oa += 'translateX(' + this.offset.current[0] + 'px)'), this.handle.style[ja.transform] = oa) : this.options.horizontal && (this.handle.style.left = this.offset.current[0] + 'px')
      },
      setTargetValue: function(oa, pa) {
        var qa = pa ? this.getLooseValue(oa) : this.getProperValue(oa);
        this.groupCopy(this.value.target, qa), this.offset.target = this.getOffsetsByRatios(qa), this.callTargetCallback()
      },
      setTargetValueByOffset: function(oa, pa) {
        var qa = this.getRatiosByOffsets(oa),
          qa = pa ? this.getLooseValue(qa) : this.getProperValue(qa);
        this.groupCopy(this.value.target, qa), this.offset.target = this.getOffsetsByRatios(qa)
      },
      getLooseValue: function(oa) {
        var pa = this.getProperValue(oa);
        return [pa[0] + (oa[0] - pa[0]) / 4, pa[1] + (oa[1] - pa[1]) / 4]
      },
      getProperValue: function(oa) {
        return oa = this.groupClone(oa), oa[0] = Math.max(oa[0], 0), oa[1] = Math.max(oa[1], 0), oa[0] = Math.min(oa[0], 1), oa[1] = Math.min(oa[1], 1), (!this.dragging && !this.tapping || this.options.snap) && 1 < this.options.steps && (oa = this.getClosestSteps(oa)), oa
      },
      getRatiosByOffsets: function(oa) {
        return [this.getRatioByOffset(oa[0], this.bounds.availWidth, this.bounds.left), this.getRatioByOffset(oa[1], this.bounds.availHeight, this.bounds.top)]
      },
      getRatioByOffset: function(oa, pa, qa) {
        return pa ? (oa - qa) / pa : 0
      },
      getOffsetsByRatios: function(oa) {
        return [this.getOffsetByRatio(oa[0], this.bounds.availWidth, this.bounds.left), this.getOffsetByRatio(oa[1], this.bounds.availHeight, this.bounds.top)]
      },
      getOffsetByRatio: function(oa, pa, qa) {
        return Math.round(oa * pa) + qa
      },
      getStepNumber: function(oa) {
        return this.getClosestStep(oa) * (this.options.steps - 1) + 1
      },
      getClosestSteps: function(oa) {
        return [this.getClosestStep(oa[0]), this.getClosestStep(oa[1])]
      },
      getClosestStep: function(oa) {
        for (var pa = 0, qa = 1, ra = 0; ra <= this.options.steps - 1; ra++) Math.abs(this.stepRatios[ra] - oa) < qa && (qa = Math.abs(this.stepRatios[ra] - oa), pa = ra);
        return this.stepRatios[pa]
      },
      groupCompare: function(oa, pa) {
        return oa[0] == pa[0] && oa[1] == pa[1]
      },
      groupCopy: function(oa, pa) {
        oa[0] = pa[0], oa[1] = pa[1]
      },
      groupClone: function(oa) {
        return [oa[0], oa[1]]
      },
      draggingOnDisabledAxis: function() {
        return !this.options.horizontal && ha.xDiff > ha.yDiff || !this.options.vertical && ha.yDiff > ha.xDiff
      }
    };
    for (var s = function(oa, pa) {
        return function() {
          return oa.apply(pa, arguments)
        }
      }, $ = function(oa, pa, qa) {
        oa.addEventListener ? oa.addEventListener(pa, qa, !1) : oa.attachEvent && oa.attachEvent('on' + pa, qa)
      }, _ = function(oa, pa, qa) {
        oa.removeEventListener ? oa.removeEventListener(pa, qa, !1) : oa.detachEvent && oa.detachEvent('on' + pa, qa)
      }, fa = function(oa) {
        oa || (oa = window.event), oa.preventDefault && oa.preventDefault(), oa.returnValue = !1
      }, ga = function(oa) {
        oa || (oa = window.event), oa.stopPropagation && oa.stopPropagation(), oa.cancelBubble = !0
      }, ha = {
        x: 0,
        y: 0,
        xDiff: 0,
        yDiff: 0,
        refresh: function(oa) {
          oa || (oa = window.event), 'mousemove' == oa.type ? this.set(oa) : oa.touches && this.set(oa.touches[0])
        },
        set: function(oa) {
          var pa = this.x,
            qa = this.y;
          oa.clientX || oa.clientY ? (this.x = oa.clientX, this.y = oa.clientY) : (oa.pageX || oa.pageY) && (this.x = oa.pageX - document.body.scrollLeft - document.documentElement.scrollLeft, this.y = oa.pageY - document.body.scrollTop - document.documentElement.scrollTop), this.xDiff = Math.abs(this.x - pa), this.yDiff = Math.abs(this.y - qa)
        }
      }, ia = {
        get: function(oa) {
          var pa = {
            left: 0,
            top: 0
          };
          return void 0 !== oa.getBoundingClientRect && (pa = oa.getBoundingClientRect()), [pa.left, pa.top]
        }
      }, ja = {
        transform: i('transform'),
        perspective: i('perspective'),
        backfaceVisibility: i('backfaceVisibility')
      }, ka = ['webkit', 'moz'], la = window.requestAnimationFrame, ma = window.cancelAnimationFrame, na = 0; na < ka.length && !la; ++na) la = window[ka[na] + 'RequestAnimationFrame'], ma = window[ka[na] + 'CancelAnimationFrame'] || window[ka[na] + 'CancelRequestAnimationFrame'];
    return la || (la = function(oa) {
      return setTimeout(oa, 25)
    }, ma = clearTimeout), o
  });
