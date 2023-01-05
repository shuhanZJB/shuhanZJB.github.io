(function(a, d, c) {
	a.HoverDir = function(f, e) {
		this.$el = a(e);
		this._init(f)
	};
	a.HoverDir.defaults = {
		speed: 300,
		easing: "ease",
		hoverDelay: 0,
		inverse: false
	};
	a.HoverDir.prototype = {
		_init: function(e) {
			this.options = a.extend(true, {}, a.HoverDir.defaults, e);
			this.transitionProp = "all " + this.options.speed + "ms " + this.options.easing;
			this.support = Modernizr.csstransitions;
			this._loadEvents()
		},
		_loadEvents: function() {
			var e = this;
			this.$el.on("mouseenter.hoverdir, mouseleave.hoverdir", function(i) {
				var f = a(this),
					g = f.find("div"),
					h = e._getDir(f, {
						x: i.pageX,
						y: i.pageY
					}),
					j = e._getStyle(h);
				if (i.type === "mouseenter") {
					g.hide().css(j.from);
					clearTimeout(e.tmhover);
					e.tmhover = setTimeout(function() {
						g.show(0, function() {
							var k = a(this);
							if (e.support) {
								k.css("transition", e.transitionProp)
							}
							e._applyAnimation(k, j.to, e.options.speed)
						})
					}, e.options.hoverDelay)
				} else {
					if (e.support) {
						g.css("transition", e.transitionProp)
					}
					clearTimeout(e.tmhover);
					e._applyAnimation(g, j.from, e.options.speed)
				}
			})
		},
		_getDir: function(e, f) {
			var j = e.width(),
				i = e.height(),
				k = (f.x - e.offset().left - (j / 2)) * (j > i ? (i / j) : 1),
				l = (f.y - e.offset().top - (i / 2)) * (i > j ? (j / i) : 1),
				g = Math.round((((Math.atan2(l, k) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
			return g
		},
		_getStyle: function(e) {
			var f, m, j = {
					left: "0px",
					top: "-100%"
				},
				g = {
					left: "0px",
					top: "100%"
				},
				h = {
					left: "-100%",
					top: "0px"
				},
				i = {
					left: "100%",
					top: "0px"
				},
				l = {
					top: "0px"
				},
				k = {
					left: "0px"
				};
			switch (e) {
				case 0:
					f = !this.options.inverse ? j : g;
					m = l;
					break;
				case 1:
					f = !this.options.inverse ? i : h;
					m = k;
					break;
				case 2:
					f = !this.options.inverse ? g : j;
					m = l;
					break;
				case 3:
					f = !this.options.inverse ? h : i;
					m = k;
					break
			}
			return {
				from: f,
				to: m
			}
		},
		_applyAnimation: function(e, g, f) {
			a.fn.applyStyle = this.support ? a.fn.css : a.fn.animate;
			e.stop().applyStyle(g, a.extend(true, [], {
				duration: f + "ms"
			}))
		},
	};
	var b = function(e) {
		if (d.console) {
			d.console.error(e)
		}
	};
	a.fn.hoverdir = function(g) {
		var f = a.data(this, "hoverdir");
		if (typeof g === "string") {
			var e = Array.prototype.slice.call(arguments, 1);
			this.each(function() {
				if (!f) {
					b("cannot call methods on hoverdir prior to initialization; attempted to call method '" +
						g + "'");
					return
				}
				if (!a.isFunction(f[g]) || g.charAt(0) === "_") {
					b("no such method '" + g + "' for hoverdir instance");
					return
				}
				f[g].apply(f, e)
			})
		} else {
			this.each(function() {
				if (f) {
					f._init()
				} else {
					f = a.data(this, "hoverdir", new a.HoverDir(g, this))
				}
			})
		}
		return f
	}
})(jQuery, window);