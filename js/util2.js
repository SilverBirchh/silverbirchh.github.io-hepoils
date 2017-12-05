---
---
jQuery(function(a) {
    function b(d) {
      const e = a(d.target).closest('div'),
        f = e.children()[0];
      return f.innerHTML
    }

    function c(d) {
      const e = decodeURIComponent(window.location.search.substring(1)),
        f = e.split('&');
      let g, h;
      for (h = 0; h < f.length; h++)
        if (g = f[h].split('='), g[0] === d) return void 0 === g[1] || g[1]
    }(function() {
      if (location.pathname.includes('quote')) {
        let d = c('message'),
          e = c('type');
        a('#message').val(d), a(`#${e}`).prop('checked', !0)
      }
    })(), a('.enquire').click(function(d) {
      const e = `I would like to enquire about a supply of ${b(d)}.`;
      location.href = '{{ site.url }}' + `quote/?message=${e}&type=oil-col`
    })
  }),
  function() {
    function a(d, e) {
      this.selector = null, e ? this.nodes = e : 'string' == typeof d ? (this.selector = d, this.nodes = document.querySelectorAll(d)) : this.nodes = [d], this.length = this.nodes.length, this.el = this.nodes[0]
    }

    function b(d) {
      return new a(d)
    }

    function c(d, e) {
      function f(da, ea, hb) {
        da = da || {}, g(), !1 !== ea && j(), Q = P = O = null, R = -1, V = U = T = S = null, W = !1, X = null, Y = !1, Z = null, i(da), k(), F(O.transition_type, !0), P.find('#' + d + ' .ism-caption').css('visibility', 'hidden'), t(), x(), m(O.play_type), C(), setTimeout(function() {
          !0 !== hb && h()
        }, 1E3)
      }

      function g() {
        b('#' + d + '-ism-loading-mask').remove();
        var da = document.createElement('DIV');
        da.id = d + '-ism-loading-mask', da.style.position = 'absolute', da.style.zIndex = 0, da.style.top = 0, da.style.bottom = 0, da.style.left = 0, da.style.right = 0, da.style.backgroundColor = '#eee', b('#' + d).el.appendChild(da)
      }

      function h() {
        b('#' + d).show(), 1 == b('#' + d + '-ism-loading-mask').length && b('#' + d + '-ism-loading-mask').fadeOut(400, function() {
          b('#' + d + '-ism-loading-mask').remove(), K(0), M(0)
        })
      }

      function i(da) {
        for (var ea in aa) {
          var hb = typeof aa[ea];
          void 0 == da[ea] && 'object' != hb && (hb = b('#' + d).data(ea), void 0 != hb && ('true' === hb ? hb = !0 : 'false' == hb && (hb = !1), da[ea] = hb))
        }
        for (ea in O = da || {}, aa) void 0 == O[ea] && (O[ea] = aa[ea]);
        for (O.captions = ['Taking care of your cooking oil supply and collection', 'Collecting all types of kitchen waste', 'Delivering the finest grade produce', 'Operating in eco-friendly manner'], da = b('#' + d + ' ol > li'), ea = da.length, hb = 0; hb < ea; hb++) {
          O.captions[hb] = [];
          for (var ib = 0; 3 > ib; ib++) {
            var jb = {
                enable: ba[ib].enable,
                delay: ba[ib].delay
              },
              kb = b(da.get(hb)).find('.ism-caption-' + ib);
            1 == kb.length && (jb.enable = !0, kb = kb.data('delay'), isNaN(kb) || (jb.delay = parseInt(kb))), O.captions[hb][ib] = jb
          }
        }
      }

      function j() {
        for (q(), L(), Z && Z.unbindEventListeners(), u(), b('#' + d + ' .ism-radios input.ism-radio, #' + d + ' .ism-radios .ism-radio-label').off('click', y), b('#' + d + ' .ism-radios input.ism-radio, #' + d + ' .ism-radios .ism-radio-label').off('touchstart', y), A(), b('#' + d + ' .ism-button').remove(), b('#' + d + ' .ism-radios').remove(), b('#' + d + ' .ism-cloned').remove(), b('#' + d + ' .ism-tmp-clone').remove(); 0 < b('#' + d + ' .ism-frame').length;) b('#' + d + ' .ism-slides').unwrap();
        0 < b('#' + d + ' .ism-img-frame').length && b('#' + d + ' .ism-img').unwrap(), b('#' + d + ' .ism-caption').removeAttr('style'), b('#' + d + ' .ism-slide').show(), b('#' + d + ' .ism-slide').removeAttr('style'), b('#' + d + ' .ism-slides').removeAttr('style'), b('#' + d + ' .ism-img').removeClass('ism-img'), b('#' + d + ' .ism-slide').removeClass('ism-slide ism-slide-0 ism-slide-1 ism-slide-2 ism-slide-3 ism-slide-4 ism-slide-5 ism-slide-6 ism-slide-7 ism-slide-8 ism-slide-9'), b('#' + d + ' .ism-slides').removeClass('ism-slides'), b('#' + d).removeClass('active')
      }

      function k() {
        P = b('#' + d + ' ol'), Q = 100 / b('#' + d + ' ol > li').length, R = 0, P.addClass('ism-slides'), b('#' + d + ' .ism-slides > li').addClass('ism-slide'), b('#' + d + ' .ism-slides > .ism-slide > img, #' + d + ' .ism-slides > .ism-slide > a > img').addClass('ism-img'), P.find('li').each(function(da) {
          this.addClass('ism-slide-' + da)
        }), b('#' + d).wrapInner('<div class=\'ism-frame\'></div>'), P = b('#' + d + ' ol.ism-slides'), b('#' + d + ' .ism-img').wrap('<div class=\'ism-img-frame\'></div>')
      }

      function l() {
        return b('#' + d + ' .ism-slide').length
      }

      function m(da) {
        O.play_type = da, A(), b('#' + d + ' .ism-pause-button').remove(), O.pause_button && 'manual' != O.play_type && (P.after('<div class=\'ism-pause-button\'>&nbsp;</div>'), V = b('#' + d + ' .ism-pause-button'), V.on('click', B), V.on('touchstart', B)), n()
      }

      function n() {
        W = !0, b('#' + d + ' .ism-pause-button').removeClass('ism-play'), 'manual' != O.play_type && (clearTimeout(X), X = setTimeout(p, O.interval))
      }

      function o(da) {
        const ea = document.getElementById('home_caption');
        da = 4 === da ? 0 : da, da = -1 === da ? 3 : da, ea.text = ['Taking care of your cooking oil needs.', 'Collecting all types of kitchen waste.', 'Delivering the finest grade produce.', 'Operating in eco-friendly manner.'][da]
      }

      function p() {
        var da = R + 1;
        W && 'manual' != O.play_type && ('once' == O.play_type && R == l() - 2 ? (G(da), q()) : 'once-rewind' == O.play_type && R == l() - 1 ? (G(0), q()) : ('loop' == O.play_type && R == l() - 1 ? G(0) : G(da), n()))
      }

      function q() {
        W = !1, clearTimeout(X), X = null, b('#' + d + ' .ism-pause-button').addClass('ism-play')
      }

      function r(da, ea) {
        da != R && (q(), G(da, ea))
      }

      function t() {
        O.buttons && (P.after('<div class=\'ism-button ism-button-prev\'>&nbsp;</div><div class=\'ism-button ism-button-next\'>&nbsp;</div>'), S = b('#' + d + ' .ism-button-prev'), T = b('#' + d + ' .ism-button-next'), S.on('click', v), S.on('touchstart', v), T.on('click', w), T.on('touchstart', w))
      }

      function u() {
        b('#' + d + ' .ism-button-prev').off('click', v), b('#' + d + ' .ism-button-prev').off('touchstart', v), b('#' + d + ' .ism-button-next').off('click', w), b('#' + d + ' .ism-button-next').off('touchstart', w)
      }

      function v(da) {
        da && da.preventDefault && da.preventDefault(), da && da.stopPropagation && da.stopPropagation(), r(R - 1)
      }

      function w(da) {
        da && da.preventDefault && da.preventDefault(), da && da.stopPropagation && da.stopPropagation(), r(R + 1)
      }

      function x() {
        if (O.radios) {
          b('#' + d).append('<ul class=\'ism-radios\'></ul>'), U = b('#' + d + ' .ism-radios'), 'thumbnail' == O.radio_type && U.addClass('ism-radios-as-thumbnails');
          for (var da = 0; da < l(); da++) 0 == da ? U.append('<li class=\'ism-radio-' + da + ' active\'><input type=\'radio\' name=\'ism-radio\' class=\'ism-radio\' id=\'ism-radio-' + da + '\' checked=\'checked\' /><label class=\'ism-radio-label\' for=\'ism-radio-' + da + '\'></label></li>') : U.append('<li class=\'ism-radio-' + da + '\'><input type=\'radio\' name=\'ism-radio\' class=\'ism-radio\' id=\'ism-radio-' + da + '\' /><label class=\'ism-radio-label\' for=\'ism-radio-' + da + '\'></label></li>');
          b('#' + d + ' .ism-radios input.ism-radio, #' + d + ' .ism-radios .ism-radio-label').on('click', y), b('#' + d + ' .ism-radios input.ism-radio, #' + d + ' .ism-radios .ism-radio-label').on('touchstart', y)
        }
      }

      function y(da) {
        da.preventDefault && da.preventDefault(), da.stopPropagation && da.stopPropagation(), da = b(da.target.parentNode).index(), r(da)
      }

      function z(da) {
        O.radios && (b('#' + d + ' .ism-radios li').removeClass('active'), da = b('#' + d + ' .ism-radios li').get(da), b(da).addClass('active'), b(da).find('input').attr('checked', 'checked'))
      }

      function A() {
        b('#' + d + ' .ism-pause-button').off('click', B), b('#' + d + ' .ism-pause-button').off('touchstart', B)
      }

      function B(da) {
        da.preventDefault(), da.stopPropagation(), W ? q() : n()
      }

      function C() {
        var da = b('#' + d).get(0),
          ea = P.get(0);
        Z = new Dragdealer(da, ea, {
          steps: l(),
          x: 0,
          speed: .2,
          loose: !0,
          requestAnimationFrame: !0,
          dragStartCallback: function() {
            q()
          },
          dragStopCallback: function() {
            new_slide_index = 0;
            var hb = new_slide_index,
              ib = R;
            R = hb, E('afterswipe', [hb]), z(hb), J(ib, hb, !1)
          },
          onAfterGlide: function() {
            Z.setStep(R + 1, 1, !0)
          }
        }), window.onload = function() {
          setTimeout(function() {
            Z.reflow()
          }, 150), setTimeout(function() {
            Z.reflow()
          }, 600)
        }
      }

      function D() {
        Z && (Z.setStep(R + 1, 1, !0), Z.reflow())
      }

      function E(da, ea) {
        ca[da] && ca[da].apply(this, ea)
      }

      function F(da, ea) {
        if (1 == ea || da != O.transition_type) {
          O.transition_type = da, b('#' + d + ' .ism-slide').removeClass('ism-zoom-in'), b('#' + d + ' .ism-slide').show();
          var hb = l();
          P.css('width', 100 * hb + '%'), P.find('.ism-slide').each(function(ib) {
            ib = Q * ib + '%', this.css('width', 100 / hb + '%'), this.css('left', ib)
          })
        }
      }

      function G(da, ea) {
        if (o(da), !0 != Y && da != R) {
          Y = !0;
          var hb = R;
          da = parseInt(da), 0 > da ? da = l() - 1 : da >= l() && (da = 0);
          var ib = da;
          z(ib), R = ib, E('beforetransition', [ib]), 'instant' == O.transition_type ? (ib = da, Z.setStep(ib + 1, 1, !0), J(hb, ib, !0, ea)) : 'slide' == O.transition_type ? H(hb, da, ea) : 'fade' == O.transition_type ? I(hb, da, !1, ea) : 'zoom' == O.transition_type && I(hb, da, !0, ea)
        }
      }

      function H(da, ea, hb) {
        var ib = ea / (l() - 1);
        Z.startSlide(ib, function() {
          J(da, ea, !0, hb)
        })
      }

      function I(da, ea, hb, ib) {
        b('#' + d + ' li.ism-slide').removeClass('ism-zoom-in');
        var jb = b('#' + d + ' li.ism-slide-' + da),
          kb = P.clone();
        kb.addClass('ism-slides-clone');
        var lb = ea / (l() - 1),
          lb = Z.getOffsetsByRatios([lb, 0]);
        kb.css('transform', 'translateX(' + lb[0] + 'px)'), kb.insertAfter(P.el), hb && jb.addClass('ism-zoom-in'), hb = kb.get(0), P.fadeInto(hb, 2 * O.transition_duration, function() {
          Z.setStep(ea + 1, 1, !0), b('#' + d + ' .ism-slides-clone').remove(), b('#' + d + ' .ism-slides').show(), b('#' + d + ' .ism-slides').css('opacity', null), J(da, ea, !0, ib)
        })
      }

      function J(da, ea, hb, ib) {
        ea = parseInt(ea), b('#' + d + ' .ism-slides-clone').remove(), b('#' + d + ' .ism-slides').show(), b('#' + d + ' li.ism-slide').removeClass('ism-zoom-in'), hb && D(), ib && ib(), K(ea), M(ea), Y = !1, E('aftertransition', [ea])
      }

      function K(da) {
        L(), 'none' != O.image_fx && ('zoompan' == O.image_fx ? b('#' + d + ' .ism-slide-' + da + ' .ism-img-frame').addClass('ism-zoom-pan') : 'zoomrotate' == O.image_fx && b('#' + d + ' .ism-slide-' + da + ' .ism-img-frame').addClass('ism-zoom-rotate'))
      }

      function L() {
        b('#' + d + ' .ism-slide .ism-img-frame').removeClass('ism-zoom-pan'), b('#' + d + ' .ism-slide .ism-img-frame').removeClass('ism-zoom-rotate')
      }

      function M(da) {
        P.find('.ism-caption').css('visibility', 'hidden'), P.find('.ism-caption').removeClass('ism-caption-anim'), N(da, 0), N(da, 1), N(da, 2)
      }

      function N(da, ea) {
        O.captions[da] && 1 == O.captions[da][ea].enable && setTimeout(function() {
          P.find('.ism-slide-' + da + ' .ism-caption-' + ea).css('visibility', 'visible'), P.find('.ism-slide-' + da + ' .ism-caption-' + ea).addClass('ism-caption-anim')
        }, O.captions[da][ea].delay)
      }
      var O, P, Q, R, S, T, U, V, W, X, Y, Z, aa = {
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
        ba = [{
          enable: !1,
          delay: 0
        }, {
          enable: !1,
          delay: 200
        }, {
          enable: !1,
          delay: 400
        }],
        ca = {};
      f(e, !1, e.prevent_stop_loading || !1), this.init = f, this.deinit = j, this.stopLoading = h, this.transition = G, this.listen = function(da, ea) {
        ca[da] = ea
      }, this.reflow = D, this.setTransitionType = F, this.setPlayType = m, this.setInterval = function(da) {
        O.interval = da
      }, this.setImageFx = function(da) {
        da == O.image_fx ? O.image_fx = da : (O.image_fx = da, K(R))
      }, this.setCaptionEnable = function(da, ea) {
        O.captions[da][ea].enable = 1
      }, this.setCaptionDelay = function(da, ea) {
        O.captions[da][ea].delay = 1
      }, this.enableButtons = function(da) {
        !0 !== da || O.buttons || (u(), b('#' + d + ' .ism-button').remove(), t())
      }, this.enableRadios = function() {}, this.setRadioType = function(da) {
        'thumbnail' == da ? b('#' + d + ' .ism-radios').addClass('ism-radios-as-thumbnails') : b('#' + d + ' .ism-radios').removeClass('ism-radios-as-thumbnails')
      }, this.getSlideCount = l, this.getActiveSlideIndex = function() {
        return R
      }, this.setElementId = function(da) {
        d = document.getElementById(d).id = da
      }
    }
    a.prototype.get = function(d) {
      return this.nodes[d]
    }, a.prototype.find = function(d) {
      return d = this.el.querySelectorAll(d), new a(null, d)
    }, a.prototype.index = function() {
      document.getElementById('header_bar').style.zIndex = "5000000000";
      for (var d = this.el, e = 0; null != (d = d.previousSibling);) e++;
      return e
    }, a.prototype.each = function(d) {
      for (var e, f = 0; f < this.nodes.length; f++) e = new a(this.nodes[f]), d.call(e, f, e)
    }, a.prototype.remove = function() {
      for (var d, e = 0; e < this.nodes.length; e++) d = this.nodes[e], d.parentNode.removeChild(d)
    }, a.prototype.removeAttr = function(d) {
      for (var e = 0; e < this.nodes.length; e++) this.nodes[e].removeAttribute(d)
    }, a.prototype.attr = function(d, e) {
      var f = this.el;
      return void 0 == e ? f.getAttribute(d) : void f.setAttribute(d, e)
    }, a.prototype.data = function(d) {
      return this.el.getAttribute('data-' + d)
    }, a.prototype.hasClass = function(d) {
      var e = this.el;
      return e.classList ? e.classList.contains(d) : new RegExp('(^| )' + d + '( |$)', 'gi').test(e.className)
    }, a.prototype.addClass = function(d) {
      for (var e, f = 0; f < this.nodes.length; f++) e = this.nodes[f], e.classList ? e.classList.add(d) : e.className += ' ' + d
    }, a.prototype.removeClass = function(d) {
      for (var e, f = 0; f < this.nodes.length; f++) e = this.nodes[f], e.classList ? e.classList.remove(d.split(' ')) : e.className = e.className.replace(new RegExp('(^|\\b)' + d.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
    }, a.prototype.show = function() {
      for (var d, e = 0; e < this.nodes.length; e++) d = this.nodes[e], d && d.style && (d.style.display = '')
    }, a.prototype.hide = function() {
      for (var d, e = 0; e < this.nodes.length; e++) d = this.el, d && d.style && (d.style.display = 'none')
    }, a.prototype.css = function(d, e) {
      for (var f = 0; f < this.nodes.length; f++) this.nodes[f].style[d] = e
    }, a.prototype.fadeOut = function(d, e) {
      a.crossFade(this.el, null, d, e)
    }, a.prototype.fadeIn = function(d, e) {
      a.crossFade(null, this.el, d, e)
    }, a.prototype.fadeInto = function(d, e, f) {
      a.crossFade(this.el, d, e, f)
    }, a.crossFade = function(d, e, f, g) {
      d = d || {
        style: {}
      }, e = e || {
        style: {}
      }, f = f || 400;
      var h = 1,
        i = 0;
      d.style.opacity = h, e.style.opacity = i, d.style.filter = '', e.style.filter = '';
      var j, k = +new Date,
        l = function() {
          j = (new Date - k) / f, h -= j, i += j, d.style.opacity = h, e.style.opacity = i, d.style.filter = 'alpha(opacity=' + 100 * h | NaN, e.style.filter = 'alpha(opacity=' + 100 * i | NaN, k = +new Date, 0 < h ? window.requestAnimationFrame && requestAnimationFrame(l) || setTimeout(l, 16) : (d.style.opacity = 0, e.style.opacity = 1, d.style.filter = '', e.style.filter = '', g && g())
        };
      l()
    }, a.prototype.wrap = function(d) {
      for (var e = 0; e < this.nodes.length; e++) {
        var f = this.nodes[e],
          g = new a(f).index(),
          h = f.outerHTML,
          i = f.parentNode;
        f.insertAdjacentHTML('beforebegin', d), i.removeChild(f), i.childNodes[g].innerHTML = h
      }
    }, a.prototype.wrapInner = function(d) {
      var e = this.el,
        f = e.innerHTML;
      e.innerHTML = d, e.firstChild.innerHTML = f
    }, a.prototype.unwrap = function() {
      var d = this.el;
      d.parentNode.outerHTML = d.parentNode.innerHTML
    }, a.prototype.after = function(d) {
      this.el.insertAdjacentHTML('afterend', d)
    }, a.prototype.append = function(d) {
      this.el.insertAdjacentHTML('beforeend', d)
    }, a.prototype.insertAfter = function(d) {
      d.parentNode.insertBefore(this.el, d.nextSibling)
    }, a.prototype.clone = function() {
      return new a(this.el.cloneNode(!0))
    }, a.prototype.on = function(d, e) {
      for (var f, g = 0; g < this.nodes.length; g++) f = this.nodes[g], f.addEventListener ? f.addEventListener(d, e) : f.attachEvent('on' + d, function() {
        e.call(f)
      })
    }, a.prototype.off = function(d, e) {
      for (var f, g = 0; g < this.nodes.length; g++) f = this.nodes[g], f && (f.removeEventListener ? f.removeEventListener(d, e) : f.detachEvent('on' + d, e))
    }, b.ready = function(d) {
      'complete' === document.readyState ? setTimeout(d, 1) : document.addEventListener ? document.addEventListener('DOMContentLoaded', d, !1) : document.attachEvent('onreadystatechange', function() {
        'complete' === document.readyState && d()
      })
    }, window.ISM = window.ISM || {}, window.ISM.Slider = c, window.ISM.Config = window.ISM.Config || {}, window.ISM.instances = [], b.ready(function() {
      if (!0 !== window.ISM.Config.no_instantiation)
        for (var d, e = b('.ism-slider'), f = 0; f < e.length; f++) d = e.get(f), d.id = d.id || 'ism-slider-' + f, window.ISM.instances.push(new c(d.id, {}))
    })
  }(),
  function(a, b) {
    'function' == typeof define && define.amd ? define(b) : a.Dragdealer = b()
  }(this, function() {
    function a(o) {
      var p = ['Webkit', 'Moz', 'ms', 'O'],
        q = document.documentElement.style;
      if (void 0 !== q[o]) return o;
      o = o.charAt(0).toUpperCase() + o.substr(1);
      for (var r = 0; r < p.length; r++)
        if (void 0 !== q[p[r] + o]) return p[r] + o
    }
    var b = function(o, p, q) {
      this.options = this.applyDefaults(q || {}), this.bindMethods(), this.wrapper = o, this.handle = p, this.init(), this.bindEventListeners()
    };
    b.prototype = {
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
          var o = this.handle;
          j.backfaceVisibility && j.perspective && (o.style[j.perspective] = '1000px', o.style[j.backfaceVisibility] = 'hidden')
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
      applyDefaults: function(o) {
        for (var p in this.defaults) o.hasOwnProperty(p) || (o[p] = this.defaults[p]);
        return o
      },
      calculateStepRatios: function() {
        var o = [];
        if (1 <= this.options.steps)
          for (var p = 0; p <= this.options.steps - 1; p++) o[p] = 1 < this.options.steps ? p / (this.options.steps - 1) : 0;
        return o
      },
      setWrapperOffset: function() {
        this.offset.wrapper = i.get(this.wrapper)
      },
      calculateBounds: function() {
        var o = {
          top: this.options.top || 0,
          bottom: -(this.options.bottom || 0) + this.wrapper.offsetHeight,
          left: this.options.left || 0,
          right: -(this.options.right || 0) + this.wrapper.offsetWidth
        };
        return o.availWidth = o.right - o.left - this.handle.offsetWidth, o.availHeight = o.bottom - o.top - this.handle.offsetHeight, o
      },
      calculateValuePrecision: function() {
        var o = this.options.xPrecision || Math.abs(this.bounds.availWidth),
          p = this.options.yPrecision || Math.abs(this.bounds.availHeight);
        return [o ? 1 / o : 0, p ? 1 / p : 0]
      },
      bindMethods: function() {
        this.requestAnimationFrame = 'function' == typeof this.options.customRequestAnimationFrame ? c(this.options.customRequestAnimationFrame, window) : c(l, window), this.cancelAnimationFrame = 'function' == typeof this.options.customCancelAnimationFrame ? c(this.options.customCancelAnimationFrame, window) : c(m, window), this.animateWithRequestAnimationFrame = c(this.animateWithRequestAnimationFrame, this), this.animate = c(this.animate, this), this.onHandleMouseDown = c(this.onHandleMouseDown, this), this.onHandleTouchStart = c(this.onHandleTouchStart, this), this.onDocumentMouseMove = c(this.onDocumentMouseMove, this), this.onWrapperTouchMove = c(this.onWrapperTouchMove, this), this.onWrapperMouseDown = c(this.onWrapperMouseDown, this), this.onWrapperTouchStart = c(this.onWrapperTouchStart, this), this.onDocumentMouseUp = c(this.onDocumentMouseUp, this), this.onDocumentTouchEnd = c(this.onDocumentTouchEnd, this), this.onHandleClick = c(this.onHandleClick, this), this.onWindowResize = c(this.onWindowResize, this)
      },
      bindEventListeners: function() {
        d(this.handle, 'mousedown', this.onHandleMouseDown), d(this.handle, 'touchstart', this.onHandleTouchStart), d(document, 'mousemove', this.onDocumentMouseMove), d(this.wrapper, 'touchmove', this.onWrapperTouchMove), d(this.wrapper, 'mousedown', this.onWrapperMouseDown), d(this.wrapper, 'touchstart', this.onWrapperTouchStart), d(document, 'mouseup', this.onDocumentMouseUp), d(document, 'touchend', this.onDocumentTouchEnd), d(this.handle, 'click', this.onHandleClick), d(window, 'resize', this.onWindowResize), this.animate(!1, !0), this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame)
      },
      unbindEventListeners: function() {
        e(this.handle, 'mousedown', this.onHandleMouseDown), e(this.handle, 'touchstart', this.onHandleTouchStart), e(document, 'mousemove', this.onDocumentMouseMove), e(this.wrapper, 'touchmove', this.onWrapperTouchMove), e(this.wrapper, 'mousedown', this.onWrapperMouseDown), e(this.wrapper, 'touchstart', this.onWrapperTouchStart), e(document, 'mouseup', this.onDocumentMouseUp), e(document, 'touchend', this.onDocumentTouchEnd), e(this.handle, 'click', this.onHandleClick), e(window, 'resize', this.onWindowResize), this.cancelAnimationFrame(this.interval)
      },
      onHandleMouseDown: function(o) {
        o.target && 'A' == o.target.tagName && 0 <= o.target.className.search(/ism-caption/) && (document.location = o.target.href), h.refresh(o), f(o), g(o), this.activity = !1, this.startDrag()
      },
      onHandleTouchStart: function(o) {
        o.target && 'A' == o.target.tagName && 0 <= o.target.className.search(/ism-caption/) && (document.location = o.target.href), h.refresh(o), g(o), this.activity = !1, this.startDrag()
      },
      onDocumentMouseMove: function(o) {
        h.refresh(o), this.dragging && (this.activity = !0, f(o))
      },
      onWrapperTouchMove: function(o) {
        h.refresh(o), !this.activity && this.draggingOnDisabledAxis() ? this.dragging && this.stopDrag() : (f(o), this.activity = !0)
      },
      onWrapperMouseDown: function(o) {
        o.target && 0 <= o.target.className.search(/ism-(button|radio|caption)/) || (h.refresh(o), f(o), this.startTap())
      },
      onWrapperTouchStart: function(o) {
        h.refresh(o), f(o), this.startTap()
        if (o.target == document.getElementById('services_link')) {
          location.href = '{{ site.url }}' + `#services`;
        } else if (o.target == document.getElementById('quote')) {
          location.href = '{{ site.url }}' + `/quote`;
        } else if (o.target == document.getElementById('home_caption')) {
          location.href = '{{ site.url }}' + `#products`;
        }
      },
      onDocumentMouseUp: function(o) {
        this.stopDrag(), this.stopTap(), o.target && 0 <= o.target.className.search(/ism-(button|radio|caption)/) || this.options.afterSwipeCallback()
      },
      onDocumentTouchEnd: function() {
        this.stopDrag(), this.stopTap(), this.options.afterSwipeCallback()
      },
      onHandleClick: function(o) {
        o.target && 0 <= o.target.className.search(/ism-(button|radio)/) || !this.activity || (f(o), g(o))
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
      setStep: function(o, p, q) {
        this.setValue(this.options.steps && 1 < o ? (o - 1) / (this.options.steps - 1) : 0, this.options.steps && 1 < p ? (p - 1) / (this.options.steps - 1) : 0, q)
      },
      setValue: function(o, p, q) {
        this.setTargetValue([o, p || 0]), q && (this.groupCopy(this.value.current, this.value.target), this.updateOffsetFromValue(), this.callAnimationCallback())
      },
      startTap: function() {
        !this.disabled && this.options.tapping && (this.tapping = !0, this.setWrapperOffset(), this.setTargetValueByOffset([h.x - this.offset.wrapper[0] - this.handle.offsetWidth / 2, h.y - this.offset.wrapper[1] - this.handle.offsetHeight / 2]))
      },
      stopTap: function() {
        !this.disabled && this.tapping && (this.tapping = !1, this.setTargetValue(this.value.current))
      },
      startDrag: function() {
        this.disabled || (this.dragging = !0, this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame), this.setWrapperOffset(), this.offset.mouse = [h.x - i.get(this.handle)[0], h.y - i.get(this.handle)[1]], this.wrapper.className.match(this.options.activeClass) || (this.wrapper.className += ' ' + this.options.activeClass), this.callDragStartCallback())
      },
      stopDrag: function() {
        if (!this.disabled && this.dragging) {
          this.dragging = !1;
          var o = this.groupClone(this.value.current);
          if (this.options.slide) {
            var p = this.change;
            o[0] += 4 * p[0], o[1] += 4 * p[1]
          }
          this.setTargetValue(o), this.wrapper.className = this.wrapper.className.replace(' ' + this.options.activeClass, ''), this.callDragStopCallback()
        }
      },
      callAnimationCallback: function() {
        var o = this.value.current;
        this.options.snap && 1 < this.options.steps && (o = this.getClosestSteps(o)), this.groupCompare(o, this.value.prev) || ('function' == typeof this.options.animationCallback && this.options.animationCallback.call(this, o[0], o[1]), this.groupCopy(this.value.prev, o))
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
      startSlide: function(o, p) {
        this.slide_callback = p, this.sliding = !0, this.value.target[0] = o, this.slide_start = this.value.current[0], this.step_size = Math.abs(this.value.target[0] - this.value.current[0]), this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame)
      },
      animateWithRequestAnimationFrame: function(o) {
        o ? (this.timeOffset = this.timeStamp ? o - this.timeStamp : 0, this.timeStamp = o) : this.timeOffset = 25, this.sliding ? this.animateSlide() : this.animate(), this.sliding || this.dragging || this.value.target[0] != this.value.current[0] ? this.interval = this.requestAnimationFrame(this.animateWithRequestAnimationFrame) : this.options.onAfterGlide()
      },
      animate: function(o, p) {
        if (!o || this.dragging) {
          if (this.dragging) {
            var q = this.groupClone(this.value.target);
            this.setTargetValueByOffset([h.x - this.offset.wrapper[0] - this.offset.mouse[0], h.y - this.offset.wrapper[1] - this.offset.mouse[1]], this.options.loose), this.change = [this.value.target[0] - q[0], this.value.target[1] - q[1]]
          }(this.dragging || p) && this.groupCopy(this.value.current, this.value.target), (this.dragging || this.glide() || p) && (this.updateOffsetFromValue(), this.callAnimationCallback())
        }
      },
      glide: function() {
        var o = [this.value.target[0] - this.value.current[0], this.value.target[1] - this.value.current[1]];
        return (o[0] || o[1]) && (Math.abs(o[0]) > this.valuePrecision[0] || Math.abs(o[1]) > this.valuePrecision[1] ? (this.value.current[0] += o[0] * Math.min(this.options.speed * this.timeOffset / 25, 1), this.value.current[1] += o[1] * Math.min(this.options.speed * this.timeOffset / 25, 1)) : this.groupCopy(this.value.current, this.value.target), !0)
      },
      animateSlide: function() {
        for (var o = this.value.target[0] - this.value.current[0], p = 0 <= o ? 1 : -1, o = Math.abs(o), q = (this.value.current[0] - this.slide_start) / (this.value.target[0] - this.slide_start), r = q - .5, r = .08 * ((-3 * r * r + .8) * this.step_size); r > o;) r *= .5;
        .995 < q ? (this.groupCopy(this.value.current, this.value.target), this.sliding = !1, this.slide_callback()) : this.value.current[0] += p * r, this.updateOffsetFromValue(), this.renderHandlePosition(), isNaN(q)
      },
      updateOffsetFromValue: function() {
        this.offset.current = this.options.snap ? this.getOffsetsByRatios(this.getClosestSteps(this.value.current)) : this.getOffsetsByRatios(this.value.current), this.groupCompare(this.offset.current, this.offset.prev) || (this.renderHandlePosition(), this.groupCopy(this.offset.prev, this.offset.current))
      },
      renderHandlePosition: function() {
        var o = '';
        this.options.css3 && j.transform ? (this.options.horizontal && (o += 'translateX(' + this.offset.current[0] + 'px)'), this.handle.style[j.transform] = o) : this.options.horizontal && (this.handle.style.left = this.offset.current[0] + 'px')
      },
      setTargetValue: function(o, p) {
        var q = p ? this.getLooseValue(o) : this.getProperValue(o);
        this.groupCopy(this.value.target, q), this.offset.target = this.getOffsetsByRatios(q), this.callTargetCallback()
      },
      setTargetValueByOffset: function(o, p) {
        var q = this.getRatiosByOffsets(o),
          q = p ? this.getLooseValue(q) : this.getProperValue(q);
        this.groupCopy(this.value.target, q), this.offset.target = this.getOffsetsByRatios(q)
      },
      getLooseValue: function(o) {
        var p = this.getProperValue(o);
        return [p[0] + (o[0] - p[0]) / 4, p[1] + (o[1] - p[1]) / 4]
      },
      getProperValue: function(o) {
        return o = this.groupClone(o), o[0] = Math.max(o[0], 0), o[1] = Math.max(o[1], 0), o[0] = Math.min(o[0], 1), o[1] = Math.min(o[1], 1), (!this.dragging && !this.tapping || this.options.snap) && 1 < this.options.steps && (o = this.getClosestSteps(o)), o
      },
      getRatiosByOffsets: function(o) {
        return [this.getRatioByOffset(o[0], this.bounds.availWidth, this.bounds.left), this.getRatioByOffset(o[1], this.bounds.availHeight, this.bounds.top)]
      },
      getRatioByOffset: function(o, p, q) {
        return p ? (o - q) / p : 0
      },
      getOffsetsByRatios: function(o) {
        return [this.getOffsetByRatio(o[0], this.bounds.availWidth, this.bounds.left), this.getOffsetByRatio(o[1], this.bounds.availHeight, this.bounds.top)]
      },
      getOffsetByRatio: function(o, p, q) {
        return Math.round(o * p) + q
      },
      getStepNumber: function(o) {
        return this.getClosestStep(o) * (this.options.steps - 1) + 1
      },
      getClosestSteps: function(o) {
        return [this.getClosestStep(o[0]), this.getClosestStep(o[1])]
      },
      getClosestStep: function(o) {
        for (var p = 0, q = 1, r = 0; r <= this.options.steps - 1; r++) Math.abs(this.stepRatios[r] - o) < q && (q = Math.abs(this.stepRatios[r] - o), p = r);
        return this.stepRatios[p]
      },
      groupCompare: function(o, p) {
        return o[0] == p[0] && o[1] == p[1]
      },
      groupCopy: function(o, p) {
        o[0] = p[0], o[1] = p[1]
      },
      groupClone: function(o) {
        return [o[0], o[1]]
      },
      draggingOnDisabledAxis: function() {
        return !this.options.horizontal && h.xDiff > h.yDiff || !this.options.vertical && h.yDiff > h.xDiff
      }
    };
    for (var c = function(o, p) {
        return function() {
          return o.apply(p, arguments)
        }
      }, d = function(o, p, q) {
        o.addEventListener ? o.addEventListener(p, q, !1) : o.attachEvent && o.attachEvent('on' + p, q)
      }, e = function(o, p, q) {
        o.removeEventListener ? o.removeEventListener(p, q, !1) : o.detachEvent && o.detachEvent('on' + p, q)
      }, f = function(o) {
        o || (o = window.event), o.preventDefault && o.preventDefault(), o.returnValue = !1
      }, g = function(o) {
        o || (o = window.event), o.stopPropagation && o.stopPropagation(), o.cancelBubble = !0
      }, h = {
        x: 0,
        y: 0,
        xDiff: 0,
        yDiff: 0,
        refresh: function(o) {
          o || (o = window.event), 'mousemove' == o.type ? this.set(o) : o.touches && this.set(o.touches[0])
        },
        set: function(o) {
          var p = this.x,
            q = this.y;
          o.clientX || o.clientY ? (this.x = o.clientX, this.y = o.clientY) : (o.pageX || o.pageY) && (this.x = o.pageX - document.body.scrollLeft - document.documentElement.scrollLeft, this.y = o.pageY - document.body.scrollTop - document.documentElement.scrollTop), this.xDiff = Math.abs(this.x - p), this.yDiff = Math.abs(this.y - q)
        }
      }, i = {
        get: function(o) {
          var p = {
            left: 0,
            top: 0
          };
          return void 0 !== o.getBoundingClientRect && (p = o.getBoundingClientRect()), [p.left, p.top]
        }
      }, j = {
        transform: a('transform'),
        perspective: a('perspective'),
        backfaceVisibility: a('backfaceVisibility')
      }, k = ['webkit', 'moz'], l = window.requestAnimationFrame, m = window.cancelAnimationFrame, n = 0; n < k.length && !l; ++n) l = window[k[n] + 'RequestAnimationFrame'], m = window[k[n] + 'CancelAnimationFrame'] || window[k[n] + 'CancelRequestAnimationFrame'];
    return l || (l = function(o) {
      return setTimeout(o, 25)
    }, m = clearTimeout), b
  });
