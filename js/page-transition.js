var PageTransitions = (function(a) {
	var j = 0,
		e = {
			WebkitAnimation: "webkitAnimationEnd",
			OAnimation: "oAnimationEnd",
			msAnimation: "MSAnimationEnd",
			animation: "animationend"
		},
		d = e[Modernizr.prefixed("animation")],
		k = Modernizr.cssanimations;

	function b() {
		var m = location.hash.substr(1);
		var l = a("#page-ajax-loaded");

		function o() {
			l.removeClass("fadeOutLeft");
			l.show();
			l.addClass("fadeInLeft")
		}
		var n = a("#portfolio_grid figure a").each(function() {
			n = a(this).attr("href");
			if (m == "portfolio/" + n.substr(0, n.length - 5)) {
				var p = a(this).attr("href");
				o();
				l.load(p);
				return false
			}
		});
		a(".subpages .ajax-page-load").click(function() {
			var p = a(this).attr("href");
			window.location.hash = "portfolio/" + a(this).attr("href").substr(0, a(this).attr("href")
				.length - 5);
			return false
		})
	}

	function g(o) {
		a(".pt-page").each(function() {
			var q = a(this);
			q.data("originalClassList", q.attr("class"))
		});
		a(".subpages").each(function() {
			var q = a(this);
			q.data("current", 0);
			q.data("isAnimating", false);
			q.children(".pt-page").eq(j).addClass("pt-page-current")
		});
		a(".pt-trigger").click(function() {
			var q = a(this);
			c(q);
			a(l + " li").removeClass("active");
			a(this.parentNode).addClass("active");
			a(".pt-wrapper").animate({
				scrollTop: 0
			}, 300)
		});
		window.onhashchange = function(q) {
			if (location.hash) {
				a(l + " li").removeClass("active");
				var r = a(l + ' a[href*="' + location.hash.split("/")[0] + '"]'),
					s = r["0"];
				s = a(s.parentNode);
				s.addClass("active");
				c(r);
				a(".pt-wrapper").animate({
					scrollTop: 0
				}, 300);
				a("#page-ajax-loaded").addClass("fadeOutLeft");
				a("#page-ajax-loaded > div").detach();
				b()
			}
		};
		var l = o.menu,
			p = f();
		if (location.hash === "") {
			location.hash = p;
			var m = a(l + ' a[href*="' + location.hash.split("/")[0] + '"]'),
				n = m["0"];
			n = a(n.parentNode);
			n.addClass("active")
		} else {
			var m = a(l + ' a[href*="' + p + '"]'),
				n = m["0"];
			n = a(n.parentNode);
			n.addClass("active");
			c(m)
		}
		a("#page").append('<div id="page-ajax-loaded" class="page-ajax-loaded animated fadeInLeft"></div>');
		b();
		a(document).on("click", "#portfolio-close-button", function() {
			a("#page-ajax-loaded").addClass("fadeOutLeft");
			a("#page-ajax-loaded > div").detach()
		})
	}

	function f(l) {
		if (location.hash !== "") {
			return location.hash.split("/")[0]
		} else {
			if (l) {
				return l
			} else {
				return "#" + a(".pt-page-current").attr("data-id")
			}
		}
	}

	function c(o) {
		if (!(o.attr("data-animation"))) {
			alert("Invalid attribute configuration. \n\n 'data-animation' attribute not found");
			return false
		} else {
			if (!(o.attr("data-goto"))) {
				alert("Invalid attribute configuration. \n\n 'data-goto' attribute not found");
				return false
			}
		}
		var q = o.data("animation").toString(),
			u, v, w, z;
		if (q.indexOf("-") != -1) {
			var y = q.split("-");
			z = parseInt(y[(Math.floor(Math.random() * y.length))])
		} else {
			z = parseInt(q)
		}
		if (z > 67) {
			alert(
				"Transition.js : Invalid 'data-animation' attribute configuration. Animation number should not be greater than 67");
			return false
		}
		switch (z) {
			case 1:
				v = "pt-page-moveFromRight";
				w = "pt-page-moveToLeft";
				break;
			case 2:
				v = "pt-page-moveFromLeft";
				w = "pt-page-moveToRight";
				break;
			case 3:
				v = "pt-page-moveFromBottom";
				w = "pt-page-moveToTop";
				break;
			case 4:
				v = "pt-page-moveFromTop";
				w = "pt-page-moveToBottom";
				break;
			case 5:
				v = "pt-page-moveFromRight pt-page-ontop";
				w = "pt-page-fade";
				break;
			case 6:
				v = "pt-page-moveFromLeft pt-page-ontop";
				w = "pt-page-fade";
				break;
			case 7:
				v = "pt-page-moveFromBottom pt-page-ontop";
				w = "pt-page-fade";
				break;
			case 8:
				v = "pt-page-moveFromTop pt-page-ontop";
				w = "pt-page-fade";
				break;
			case 9:
				v = "pt-page-moveFromRightFade";
				w = "pt-page-moveToLeftFade";
				break;
			case 10:
				v = "pt-page-moveFromLeftFade";
				w = "pt-page-moveToRightFade";
				break;
			case 11:
				v = "pt-page-moveFromBottomFade";
				w = "pt-page-moveToTopFade";
				break;
			case 12:
				v = "pt-page-moveFromTopFade";
				w = "pt-page-moveToBottomFade";
				break;
			case 13:
				v = "pt-page-moveFromRight";
				w = "pt-page-moveToLeftEasing pt-page-ontop";
				break;
			case 14:
				v = "pt-page-moveFromLeft";
				w = "pt-page-moveToRightEasing pt-page-ontop";
				break;
			case 15:
				v = "pt-page-moveFromBottom";
				w = "pt-page-moveToTopEasing pt-page-ontop";
				break;
			case 16:
				v = "pt-page-moveFromTop";
				w = "pt-page-moveToBottomEasing pt-page-ontop";
				break;
			case 17:
				v = "pt-page-moveFromRight pt-page-ontop";
				w = "pt-page-scaleDown";
				break;
			case 18:
				v = "pt-page-moveFromLeft pt-page-ontop";
				w = "pt-page-scaleDown";
				break;
			case 19:
				v = "pt-page-moveFromBottom pt-page-ontop";
				w = "pt-page-scaleDown";
				break;
			case 20:
				v = "pt-page-moveFromTop pt-page-ontop";
				w = "pt-page-scaleDown";
				break;
			case 21:
				v = "pt-page-scaleUpDown pt-page-delay300";
				w = "pt-page-scaleDown";
				break;
			case 22:
				v = "pt-page-scaleUp pt-page-delay300";
				w = "pt-page-scaleDownUp";
				break;
			case 23:
				v = "pt-page-scaleUp";
				w = "pt-page-moveToLeft pt-page-ontop";
				break;
			case 24:
				v = "pt-page-scaleUp";
				w = "pt-page-moveToRight pt-page-ontop";
				break;
			case 25:
				v = "pt-page-scaleUp";
				w = "pt-page-moveToTop pt-page-ontop";
				break;
			case 26:
				v = "pt-page-scaleUp";
				w = "pt-page-moveToBottom pt-page-ontop";
				break;
			case 27:
				v = "pt-page-scaleUpCenter pt-page-delay400";
				w = "pt-page-scaleDownCenter";
				break;
			case 28:
				v = "pt-page-moveFromRight pt-page-delay200 pt-page-ontop";
				w = "pt-page-rotateRightSideFirst";
				break;
			case 29:
				v = "pt-page-moveFromLeft pt-page-delay200 pt-page-ontop";
				w = "pt-page-rotateLeftSideFirst";
				break;
			case 30:
				v = "pt-page-moveFromTop pt-page-delay200 pt-page-ontop";
				w = "pt-page-rotateTopSideFirst";
				break;
			case 31:
				v = "pt-page-moveFromBottom pt-page-delay200 pt-page-ontop";
				w = "pt-page-rotateBottomSideFirst";
				break;
			case 32:
				v = "pt-page-flipInLeft pt-page-delay500";
				w = "pt-page-flipOutRight";
				break;
			case 33:
				v = "pt-page-flipInRight pt-page-delay500";
				w = "pt-page-flipOutLeft";
				break;
			case 34:
				v = "pt-page-flipInBottom pt-page-delay500";
				w = "pt-page-flipOutTop";
				break;
			case 35:
				v = "pt-page-flipInTop pt-page-delay500";
				w = "pt-page-flipOutBottom";
				break;
			case 36:
				v = "pt-page-scaleUp";
				w = "pt-page-rotateFall pt-page-ontop";
				break;
			case 37:
				v = "pt-page-rotateInNewspaper pt-page-delay500";
				w = "pt-page-rotateOutNewspaper";
				break;
			case 38:
				v = "pt-page-moveFromRight";
				w = "pt-page-rotatePushLeft";
				break;
			case 39:
				v = "pt-page-moveFromLeft";
				w = "pt-page-rotatePushRight";
				break;
			case 40:
				v = "pt-page-moveFromBottom";
				w = "pt-page-rotatePushTop";
				break;
			case 41:
				v = "pt-page-moveFromTop";
				w = "pt-page-rotatePushBottom";
				break;
			case 42:
				v = "pt-page-rotatePullRight pt-page-delay180";
				w = "pt-page-rotatePushLeft";
				break;
			case 43:
				v = "pt-page-rotatePullLeft pt-page-delay180";
				w = "pt-page-rotatePushRight";
				break;
			case 44:
				v = "pt-page-rotatePullBottom pt-page-delay180";
				w = "pt-page-rotatePushTop";
				break;
			case 45:
				v = "pt-page-rotatePullTop pt-page-delay180";
				w = "pt-page-rotatePushBottom";
				break;
			case 46:
				v = "pt-page-moveFromRightFade";
				w = "pt-page-rotateFoldLeft";
				break;
			case 47:
				v = "pt-page-moveFromLeftFade";
				w = "pt-page-rotateFoldRight";
				break;
			case 48:
				v = "pt-page-moveFromBottomFade";
				w = "pt-page-rotateFoldTop";
				break;
			case 49:
				v = "pt-page-moveFromTopFade";
				w = "pt-page-rotateFoldBottom";
				break;
			case 50:
				v = "pt-page-rotateUnfoldLeft";
				w = "pt-page-moveToRightFade";
				break;
			case 51:
				v = "pt-page-rotateUnfoldRight";
				w = "pt-page-moveToLeftFade";
				break;
			case 52:
				v = "pt-page-rotateUnfoldTop";
				w = "pt-page-moveToBottomFade";
				break;
			case 53:
				v = "pt-page-rotateUnfoldBottom";
				w = "pt-page-moveToTopFade";
				break;
			case 54:
				v = "pt-page-rotateRoomLeftIn";
				w = "pt-page-rotateRoomLeftOut pt-page-ontop";
				break;
			case 55:
				v = "pt-page-rotateRoomRightIn";
				w = "pt-page-rotateRoomRightOut pt-page-ontop";
				break;
			case 56:
				v = "pt-page-rotateRoomTopIn";
				w = "pt-page-rotateRoomTopOut pt-page-ontop";
				break;
			case 57:
				v = "pt-page-rotateRoomBottomIn";
				w = "pt-page-rotateRoomBottomOut pt-page-ontop";
				break;
			case 58:
				v = "pt-page-rotateCubeLeftIn";
				w = "pt-page-rotateCubeLeftOut pt-page-ontop";
				break;
			case 59:
				v = "pt-page-rotateCubeRightIn";
				w = "pt-page-rotateCubeRightOut pt-page-ontop";
				break;
			case 60:
				v = "pt-page-rotateCubeTopIn";
				w = "pt-page-rotateCubeTopOut pt-page-ontop";
				break;
			case 61:
				v = "pt-page-rotateCubeBottomIn";
				w = "pt-page-rotateCubeBottomOut pt-page-ontop";
				break;
			case 62:
				v = "pt-page-rotateCarouselLeftIn";
				w = "pt-page-rotateCarouselLeftOut pt-page-ontop";
				break;
			case 63:
				v = "pt-page-rotateCarouselRightIn";
				w = "pt-page-rotateCarouselRightOut pt-page-ontop";
				break;
			case 64:
				v = "pt-page-rotateCarouselTopIn";
				w = "pt-page-rotateCarouselTopOut pt-page-ontop";
				break;
			case 65:
				v = "pt-page-rotateCarouselBottomIn";
				w = "pt-page-rotateCarouselBottomOut pt-page-ontop";
				break;
			case 66:
				v = "pt-page-rotateSidesIn pt-page-delay200";
				w = "pt-page-rotateSidesOut";
				break;
			case 67:
				v = "pt-page-rotateSlideIn";
				w = "pt-page-rotateSlideOut";
				break
		}
		var p = a(".subpages");
		var r = p.data("current"),
			A, n = p.children("section.pt-page"),
			x = n.length,
			s = false,
			t = false;
		u = parseInt(o.data("goto"));
		if (x >= u) {
			A = r;
			if (p.data("isAnimating")) {
				return false
			}
			p.data("isAnimating", false);
			var l = n.eq(r);
			if (u == -1) {
				if (r < x - 1) {
					++r
				} else {
					r = 0
				}
			} else {
				if (u == -2) {
					if (r === 0) {
						r = x - 1
					} else {
						if (r <= x - 1) {
							--r
						} else {
							r = 0
						}
					}
				} else {
					r = u - 1
				}
			}
			if (A != r) {
				p.data("current", r);
				var m = n.eq(r).addClass("pt-page-current");
				l.addClass(w).on(d, function() {
					l.off(d);
					s = true;
					if (t) {
						h(p, m, l)
					}
				});
				m.addClass(v).on(d, function() {
					m.off(d);
					t = true;
					if (s) {
						h(p, m, l)
					}
				})
			} else {
				p.data("isAnimating", false)
			}
		} else {
			alert("Transition.js : Invalid 'data-goto' attribute configuration.")
		}
		if (!k) {
			h(l, m)
		}
	}

	function h(n, m, l) {
		i(m, l);
		n.data("isAnimating", false)
	}

	function i(m, l) {
		l.attr("class", l.data("originalClassList"));
		m.attr("class", m.data("originalClassList") + " pt-page-current")
	}
	return {
		init: g,
	}
})(jQuery);
$(document).ready(function() {
	var a = $(".subpages");
	if (a[0]) {
		PageTransitions.init({
			menu: "ul.site-main-menu",
		})
	}
});
