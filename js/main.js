(function(a) {
	function c() {
		var e = a("#portfolio_grid"),
			d = a("#portfolio_filters");
		if (e) {
			e.shuffle({
				speed: 450,
				itemSelector: "figure"
			});
			a(".site-main-menu").on("click", "a", function(f) {
				e.shuffle("update")
			});
			d.on("click", ".filter", function(f) {
				e.shuffle("update");
				f.preventDefault();
				a("#portfolio_filters .filter").parent().removeClass("active");
				a(this).parent().addClass("active");
				e.shuffle("shuffle", a(this).attr("data-group"))
			})
		}
	}
	a(function() {
		a("#contact-form").validator();
		a("#contact-form").on("submit", function(d) {
			if (!d.isDefaultPrevented()) {
				var f = "contact_form/contact_form.php";
				a.ajax({
					type: "POST",
					url: f,
					data: a(this).serialize(),
					success: function(g) {
						var h = "alert-" + g.type;
						var i = g.message;
						var e = '<div class="alert ' + h +
							' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' +
							i + "</div>";
						if (h && i) {
							a("#contact-form").find(".messages").html(e);
							if (h == "alert-success") {
								a("#contact-form")[0].reset()
							}
						}
					}
				});
				return false
			}
		})
	});

	function b() {
		var d = a(window).width();
		if (d < 1024) {
			a(".site-nav").addClass("mobile-menu-hide")
		}
	}
	a(document).ready(function() {
		var e = a(".portfolio-grid");
		e.imagesLoaded(function() {
			c(this)
		});
		a(" #portfolio_grid > figure > a ").each(function() {
			a(this).hoverdir()
		});
		a(".menu-toggle").click(function() {
			a(".site-nav").toggleClass("mobile-menu-hide")
		});
		a(".testimonials.owl-carousel").owlCarousel({
			nav: true,
			items: 1,
			loop: true,
			navText: false,
			margin: 10,
		});
		var d = a(".blog-masonry");
		d.imagesLoaded(function() {
			d.masonry()
		});
		a(".site-main-menu").on("click", "a", function(g) {
			var f = a(".blog-masonry");
			f.masonry()
		});
		a(".lightbox").magnificPopup({
			type: "image",
			removalDelay: 300,
			mainClass: "mfp-fade",
			image: {
				titleSrc: "title"
			},
			iframe: {
				markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe><div class="mfp-title mfp-bottom-iframe-title"></div></div>',
				patterns: {
					youtube: {
						index: "youtube.com/",
						id: "v=",
						src: "//www.youtube.com/embed/%id%?autoplay=1"
					},
					vimeo: {
						index: "vimeo.com/",
						id: "/",
						src: "//player.vimeo.com/video/%id%?autoplay=1"
					},
					gmaps: {
						index: "//maps.google.",
						src: "%id%&output=embed"
					}
				},
				srcAction: "iframe_src",
			},
			callbacks: {
				markupParse: function(g, h, f) {
					h.title = f.el.attr("title")
				}
			},
		})
	});
	a(window).on("load", function() {
		a(".preloader").fadeOut("slow")
	});
	a(window).on("resize", function() {
		b()
	});
	a(".site-main-menu").on("click", "a", function(d) {
		b()
	})
})(jQuery);