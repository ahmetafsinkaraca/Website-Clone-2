/* Calender yapılmakta */
document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
    timeZone: 'UTC',
    themeSystem: 'bootstrap5',
    headerToolbar: {
      left: 'prevYear,prev,next,nextYear today',      
      center: 'title',
      right: 'dayGridMonth,dayGridWeek,dayGridDay'
    },
    locale:'tr',
    initialDate: '2024-07-17',
    navLinks: true,
    editable: true,
    weekNumbers: true,
    dayMaxEvents: true,
    events: [
      {
        title: 'Çevre Koruma Günü',
        start: '2024-07-17',
        end: '2024-07-19',
        color: 'green'
      },
      {
        title: 'İklim Koruma Günü',
        start: '2024-07-18',
        end: '2024-07-20'
      },
    ],

    eventClick: function(info) {
      let eventTitle = info.event.title;
      var eventStart = info.event.start.toLocaleDateString('tr-TR');
      var eventEnd = info.event.end.toLocaleDateString('tr-TR');

    
      let offcanvasContent = document.querySelector('.body-offcanvas-text .output');
      if (offcanvasContent) {
        offcanvasContent.innerHTML = `
        ${eventTitle}<br>
        Başlangıç: ${eventStart}<br>
        Bitiş: ${eventEnd}
      `;
      } else {
        console.error('Offcanvas content element not found');
      }
    
      let offcanvas = new bootstrap.Offcanvas(document.getElementById('staticBackdrop1'));
      offcanvas.show();
    }
    
  });


  calendar.render();
});



/* Accordion sidebar işlemi yapılmakta */
$(document).ready(function () {
  var currentLocation = window.location.href;
  $('.body-sidebar-list-accordion-link').each(function () {
    if ($(this).attr('href') === currentLocation) {
      $(this).addClass('accordion-active');
    }
  });
});

$(document).ready(function () {
  const currentLocation = location.href;
  const menuItems = $('.body-sidebar-list-accordion-link');

  menuItems.each(function () {
      if (this.href === currentLocation) {
          $(this).addClass('accordion-active');

          let parent = $(this).closest('.accordion-collapse');
          while (parent.length) {
              let parentButton = parent.prev().find('.accordion-button');
              if (parentButton.length && parent.hasClass('collapse')) {
                  let collapseInstance = bootstrap.Collapse.getOrCreateInstance(parent[0], {
                      toggle: false
                  });
                  collapseInstance.show();

                  parentButton.removeClass('collapsed').addClass('accordion-active');
              }
              parent = parent.parent().closest('.accordion-collapse');
          }
      }
  });

  const outerAccordionButtons = $('.accordion-button.outer-accordion');
  outerAccordionButtons.on('click', function () {
      outerAccordionButtons.removeClass('accordion-active');
      const target = $($(this).data('bs-target'));
      if (target.length) {
          let collapseInstance = bootstrap.Collapse.getOrCreateInstance(target[0], {
              toggle: true
          });
          collapseInstance.toggle();

          $(this).toggleClass('accordion-active');
      }
  });

  const innerAccordionButtons = $('.accordion-button');
  innerAccordionButtons.on('click', function () {
      const target = $($(this).data('bs-target'));
      if (target.length) {
          let collapseInstance = bootstrap.Collapse.getOrCreateInstance(target[0], {
              toggle: true
          });
          collapseInstance.toggle();

          if (target.hasClass('show')) {
              $(this).addClass('accordion-active');
          } else {
              $(this).removeClass('accordion-active');
          }
      }
  });
});

/* $(document).ready(function () {
  const currentLocation = location.href;
  const menuItems = $('.body-sidebar-list-accordion-link');

  menuItems.each(function () {
      if (this.href === currentLocation) {
          $(this).addClass('accordion-active');

          let parent = $(this).closest('.accordion-collapse');
          while (parent.length) {
              let parentButton = parent.prev().find('.accordion-button');
              if (parentButton.length && parent.hasClass('collapse')) {
                  let collapseInstance = bootstrap.Collapse.getOrCreateInstance(parent[0], {
                      toggle: false
                  });
                  collapseInstance.show();

                  parentButton.removeClass('collapsed').addClass('accordion-active');
              }
              parent = parent.parent().closest('.accordion-collapse');
          }
      }
  });

  const outerAccordionButtons = $('.accordion-button.outer-accordion');
  outerAccordionButtons.on('click', function () {
      outerAccordionButtons.removeClass('accordion-active');
      const target = $($(this).data('bs-target'));
      if (target.length) {
          let collapseInstance = bootstrap.Collapse.getOrCreateInstance(target[0], {
              toggle: true
          });
          collapseInstance.toggle();

          $(this).toggleClass('accordion-active');
      }
  });

  const outerAccordionButtons1 = $('.accordion-button.outer-accordion');
  outerAccordionButtons1.on('click', function () {
      const target = $($(this).data('bs-target'));
      if (target.length) {
          let collapseInstance = bootstrap.Collapse.getOrCreateInstance(target[0], {
              toggle: true
          });
          collapseInstance.toggle();

          $(this).toggleClass('accordion-active');
      }
  });

  const innerAccordionButtons = $('.accordion-button.inner-accordion');
  innerAccordionButtons.each(function () {
      const target = $($(this).data('bs-target'));
      if (target.length) {
          let collapseInstance = bootstrap.Collapse.getOrCreateInstance(target[0], {
              toggle: false
          });
          collapseInstance.show();
          $(this).addClass('accordion-active');
      }
  });
}); */


/* $(document).ready(function() {
  const activeLinks = $('.body-sidebar-list-accordion-link.accordion-active');

  function expandParentAccordions(element) {
      let parentAccordion = $(element).closest('.accordion-collapse');
      while (parentAccordion.length > 0) {
          const parentAccordionButton = parentAccordion.prev('.accordion-header').find('.body-sidebar-list-accordion-button');
          if (parentAccordionButton.length > 0) {
              const collapseInstance = new bootstrap.Collapse(parentAccordion[0], {
                  toggle: false
              });
              collapseInstance.show();

              parentAccordionButton.addClass('accordion-active').removeClass('collapsed');
          }
          parentAccordion = parentAccordion.parent().closest('.accordion-collapse');
      }
  }

  activeLinks.each(function() {
      expandParentAccordions(this);
  });
}); */



/* offcanvas kapandığında accordion kapatma işlemi yapılmakta*/
function closeAllAccordions() {
  $('.accordion-collapse').each(function() {
      var bsAccordion = new bootstrap.Collapse($(this), { toggle: false });
      bsAccordion.hide();
  });
}

$('#staticBackdrop').on('hidden.bs.offcanvas', function () {
    closeAllAccordions();
});

$(document).ready(function () {
    var accordions = document.querySelectorAll('.accordion-collapse');
    accordions.forEach(function (accordion) {
        new bootstrap.Collapse(accordion, {
            toggle: false
        });
    });
});



/* Accordion kapandığında diğer accordion kapatma işlemi yapılmakta*/
$(document).ready(function () {

  $('.accordion-button').click(function () {

    var $accordion = $(this).parents('.accordion-item');

    $('.accordion-item').not($accordion).find('.accordion-collapse').collapse('hide');
  });
});



/* Burada yukarı taşıma işlemi yapılmakta */
$(document).ready(function() {
  let goTopBtn = $("#scrollTopBtn");

  function scrollFunction() {
      if ($(window).scrollTop() > 500) {
          goTopBtn.css("display", "flex");
      } else {
          goTopBtn.css("display", "none");
      }
  }

  $(window).on("scroll", scrollFunction);
  scrollFunction(); // sayfa yüklendiğinde çalıştır
});

/* Burada search yazı silme işlemi yapılmakta */
$(document).ready(function() {
  $(document).on('click', function(event) {
    var input = $('#dropdown-menu-search');
    var targetElement = event.target;

    if (!$(targetElement).is(input) && input.val() !== '') {
      input.val('');
    }
  });
});

/* Burada carousel işlemi yapılmakta */
$(document).ready(function () {
    $('.owl-carousel-main').owlCarousel({
        autoplay: true,
        autoplayTimeout: 5000,
        dots: true,
        dotsEach: true, // Her nokta için bir sayı ekleme
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        },
        onInitialized: function(event) {
            // dots içindeki içeriği sayıya dönüştürme
            $('.owl-dot').each(function(index) {
              $(this).text((index) + 1);
            });
        },
    });
});



/* Burada card pagination ayarları yapılmakta */
/* function getPageList(totalPages, page, maxLength) {
    function range(start, end) {
        return Array.from(Array(end - start + 1), (_, i) => i + start);
    }

    var sideWidth = maxLength < 9 ? 1 : 2;
    var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
    var rigthWidth = (maxLength - sideWidth * 2 - 3) >> 1;

    if (totalPages <= maxLength) {
        return range(1, totalPages);
    }

    if (page <= maxLength - sideWidth - 2 - rigthWidth) {
        return range(1, maxLength - 4, sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
    }

    if (page >= totalPages - sideWidth  - rigthWidth) {
        return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rigthWidth - leftWidth +2, totalPages));
    }

    return range(1, sideWidth).concat(0, range(page - leftWidth, page + rigthWidth), 0, range(totalPages - sideWidth + 1, totalPages));
} */

/* function initPagination(limitPerPage) {
    var numberOfItems = $(".card-content .card").length;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var paginationSize = 7;
    var currentPage;

    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        $(".card-content .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        $(".body-pagination li").slice(2, -2).remove();

        getPageList(totalPages, currentPage, paginationSize).forEach(item => {
            $("<li>").addClass("page-item").addClass(item ? "body-pagination-current-page" : "body-pagination-dots")
                .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
                .attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".body-pagination-next-page");
        });

        $(".body-pagination-first-page a").attr("href", "javascript:void(0)")
         $(".body-pagination-first-page").toggleClass("disable", currentPage === 1);
         $(".body-pagination-previous-page a").attr("href", "javascript:void(0)")
         $(".body-pagination-previous-page").toggleClass("disable", currentPage === 1);
         $(".body-pagination-next-page").toggleClass("disable", currentPage === totalPages);
         $(".body-pagination-last-page").toggleClass("disable", currentPage === totalPages);
         $("html, body").animate({ scrollTop: 0 }, "fast");
        return true;
    }

    $(".body-pagination").append(
        $("<li>").addClass("page-item").addClass("body-pagination-first-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-left"))),
        $("<li>").addClass("page-item").addClass("body-pagination-previous-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-left"))),
        $("<li>").addClass("page-item").addClass("body-pagination-next-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-right"))),
        $("<li>").addClass("page-item").addClass("body-pagination-last-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-right")))

     );

    $(".card-content").show();
    showPage(1);

    $(document).on("click", ".body-pagination li.body-pagination-current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });

    $(".body-pagination-next-page").on("click", function () {
        return showPage(currentPage + 1)
    });

    $(".body-pagination-previous-page").on("click", function () {
        return showPage(currentPage - 1)
    });

    $(".body-pagination-first-page").on("click", function () {
        return showPage(1);
    });

    $(".body-pagination-last-page").on("click", function () {
        return showPage(totalPages);
    }); 

}; */

// Burada küçük sayfa için pagination yapılmakta
/* function initPaginations(limitPerPage) {
    var numberOfItems = $(".card-content .card").length;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var currentPage;

    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        $(".card-content .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        $(".body-pagination-small-screen li").slice(2, -2).remove();


        $(".body-pagination-first-page-small-screen a").attr("href", "javascript:void(0)")
         $(".body-pagination-first-page-small-screen").toggleClass("disable", currentPage === 1);
         $(".body-pagination-previous-page-small-screen a").attr("href", "javascript:void(0)")
         $(".body-pagination-previous-page-small-screen").toggleClass("disable", currentPage === 1);
         $(".body-pagination-next-page-small-screen").toggleClass("disable", currentPage === totalPages);
         $(".body-pagination-last-page-small-screen").toggleClass("disable", currentPage === totalPages);
         $("html, body").animate({ scrollTop: 0 }, "fast");
        return true;
    }

    $(".body-pagination-small-screen").append(
        $("<li>").addClass("page-item").addClass("body-pagination-first-page-small-screen").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-left"))),
        $("<li>").addClass("page-item").addClass("body-pagination-previous-page-small-screen").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-left"))),
        $("<li>").addClass("page-item").addClass("body-pagination-next-page-small-screen").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-right"))),
        $("<li>").addClass("page-item").addClass("body-pagination-last-page-small-screen").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-right")))

     );

    $(".card-content").show();
    showPage(1);

    $(document).on("click", ".body-pagination-small-screen li.body-pagination-current-page:not(.active)", function () {
        return showPage(+$(this).text());
    });

    $(".body-pagination-next-page-small-screen").on("click", function () {
        return showPage(currentPage + 1)
    });

    $(".body-pagination-previous-page-small-screen").on("click", function () {
        return showPage(currentPage - 1)
    });

    $(".body-pagination-first-page-small-screen").on("click", function () {
        return showPage(1);
    });

    $(".body-pagination-last-page-small-screen").on("click", function () {
        return showPage(totalPages);
    }); 

};  */



/* Burada list pagination ayarları yapılmakta */
/* function getPageListGroup(totalPages, page, maxLength) {
  function range(start, end) {
      return Array.from(Array(end - start + 1), (_, i) => i + start);
  }

  var sideWidth = maxLength < 9 ? 1 : 2;
  var leftWidth = (maxLength - sideWidth * 2 - 3) >> 1;
  var rigthWidth = (maxLength - sideWidth * 2 - 3) >> 1;

  if (totalPages <= maxLength) {
      return range(1, totalPages);
  }

  if (page <= maxLength - sideWidth - 2 - rigthWidth) {
      return range(1, maxLength - 4, sideWidth - 1).concat(0, range(totalPages - sideWidth + 1, totalPages));
  }

  if (page >= totalPages - sideWidth  - rigthWidth) {
      return range(1, sideWidth).concat(0, range(totalPages - sideWidth - 1 - rigthWidth - leftWidth +2, totalPages));
  }

  return range(1, sideWidth).concat(0, range(page - leftWidth, page + rigthWidth), 0, range(totalPages - sideWidth + 1, totalPages));
} */

/* function initPaginationList(limitPerPage) {
  var numberOfItems = $(".list-group .list-group-item").length;
  var totalPages = Math.ceil(numberOfItems / limitPerPage);
  var paginationSize = 7;
  var currentPage;

  function showPage(whichPage) {
    if (whichPage < 1 || whichPage > totalPages) return false;

    currentPage = whichPage;

    $(".list-group .list-group-item").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

    $(".body-pagination li").slice(2, -2).remove();

    getPageList(totalPages, currentPage, paginationSize).forEach(item => {
      $("<li>").addClass("page-item").addClass(item ? "body-pagination-current-page" : "body-pagination-dots")
        .toggleClass("active", item === currentPage).append($("<a>").addClass("page-link")
          .attr({ href: "javascript:void(0)" }).text(item || "...")).insertBefore(".body-pagination-next-page");
    });

    $(".body-pagination-first-page a").attr("href", "javascript:void(0)")
    $(".body-pagination-first-page").toggleClass("disable", currentPage === 1);
    $(".body-pagination-previous-page a").attr("href", "javascript:void(0)")
    $(".body-pagination-previous-page").toggleClass("disable", currentPage === 1);
    $(".body-pagination-next-page").toggleClass("disable", currentPage === totalPages);
    $(".body-pagination-last-page").toggleClass("disable", currentPage === totalPages);
    $("html, body").animate({ scrollTop: 0 }, "fast");
    return true;
  }

  $(".body-pagination").append(
      $("<li>").addClass("page-item").addClass("body-pagination-first-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-left"))),
      $("<li>").addClass("page-item").addClass("body-pagination-previous-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-left"))),
      $("<li>").addClass("page-item").addClass("body-pagination-next-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-right"))),
      $("<li>").addClass("page-item").addClass("body-pagination-last-page").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-right")))
 
   );

  $(".list-group").show();
  showPage(1);

  $(document).on("click", ".body-pagination li.body-pagination-current-page:not(.active)", function () {
      return showPage(+$(this).text());
  });

  $(".body-pagination-next-page").on("click", function () {
      return showPage(currentPage + 1)
  });

  $(".body-pagination-previous-page").on("click", function () {
      return showPage(currentPage - 1)
  });

  $(".body-pagination-first-page").on("click", function () {
      return showPage(1);
  });

  $(".body-pagination-last-page").on("click", function () {
      return showPage(totalPages);
  }); 

}; */

// Burada küçük sayfa için pagination yapılmakta
/* function initPaginationsList(limitPerPage) {
  var numberOfItems = $(".list-group .list-group-item").length;
  var totalPages = Math.ceil(numberOfItems / limitPerPage);
  var currentPage;

  function showPage(whichPage) {
      if (whichPage < 1 || whichPage > totalPages) return false;

      currentPage = whichPage;

      $(".list-group .list-group-item").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

      $(".body-pagination-small-screen li").slice(2, -2).remove();

      $(".body-pagination-first-page-small-screen a").attr("href", "javascript:void(0)")
      $(".body-pagination-first-page-small-screen").toggleClass("disable", currentPage === 1);
      $(".body-pagination-previous-page-small-screen a").attr("href", "javascript:void(0)")
      $(".body-pagination-previous-page-small-screen").toggleClass("disable", currentPage === 1);
      $(".body-pagination-next-page-small-screen").toggleClass("disable", currentPage === totalPages);
      $(".body-pagination-last-page-small-screen").toggleClass("disable", currentPage === totalPages);
      $("html, body").animate({ scrollTop: 0 }, "fast");
     return true;
 }

  $(".body-pagination-small-screen").append(
    $("<li>").addClass("page-item").addClass("body-pagination-first-page-small-screen").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-left"))),
    $("<li>").addClass("page-item").addClass("body-pagination-previous-page-small-screen").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-left"))),
    $("<li>").addClass("page-item").addClass("body-pagination-next-page-small-screen").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-right"))),
    $("<li>").addClass("page-item").addClass("body-pagination-last-page-small-screen").append($("<a>").addClass("page-link").attr({ href: "javascript:void(0)" }).append($("<i>").addClass("fas fa-angle-double-right")))

   );

  $(".list-group").show();
  showPage(1);

  $(document).on("click", ".body-pagination-small-screen li.body-pagination-current-page:not(.active)", function () {
    return showPage(+$(this).text());
  });

  $(".body-pagination-next-page-small-screen").on("click", function () {
    return showPage(currentPage + 1)
  });

  $(".body-pagination-previous-page-small-screen").on("click", function () {
    return showPage(currentPage - 1)
  });

  $(".body-pagination-first-page-small-screen").on("click", function () {
    return showPage(1);
  });

  $(".body-pagination-last-page-small-screen").on("click", function () {
    return showPage(totalPages);
  }); 

};  */



/* Burada Bilgilendirme yapılmakta */
$(document).ready(function () {
  $('.card-body-calender-item-body-button').on('click', function () {
    var buttonText = $(this).find('.card-body-calender-item-body-button-text').text();
    writeToOutput(buttonText);
  });

  function writeToOutput(content) {
    var output = $('#output');
    if (output.length) {
      output.text(content);
    } else {
      console.error('Output element not found.');
    }
  }
});



/* Burada lightbox2 yapılmakta */
$(document).ready(function() {
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': "%1 / %2",
    'disableScrolling': false,
    'fadeDuration': 600,
    'fitImagesInViewport': true,
    'imageFadeDuration': 600,
    'positionFromTop': 50,
    'showImageNumberLabel': true
  });
});

$(document).ready(function () {
  $('p[data-lightbox]').each(function (index) {
    $(this).on('click', function (event) {
      event.preventDefault(); // Varsayılan davranışı engelle
      event.stopPropagation(); // Olayın diğer elemanlara ulaşmasını engelle

      var gallery = $(this).attr('data-lightbox');
      var images = $('p[data-lightbox="' + gallery + '"] img');

      // Tüm resim href ve title'larını topla
      var items = images.map(function () {
        var parent = $(this).parent();
        return {
          href: parent.attr('href'),
          title: parent.attr('data-title')
        };
      }).get();

      // Özel bir olay oluştur ve gerekli bilgileri ekle
      var customEvent = $.Event('lightbox-gallery-trigger', {
        detail: {
          items: items,
          gallery: gallery,
          startIndex: index // Başlangıç indeksini ekle
        }
      });

      // Özel olayı tetikle
      $(document).trigger(customEvent);
    });
  });
});

$(document).on('lightbox-gallery-trigger', function (event) {
  var items = event.detail.items;
  var gallery = event.detail.gallery;
  var startIndex = event.detail.startIndex;

  // Geçici a etiketleri oluştur ve body'ye ekle
  $.each(items, function (i, item) {
    var lightboxLink = $('<a>')
      .attr('href', item.href)
      .attr('data-lightbox', gallery)
      .attr('data-title', item.title);

    if (i === startIndex) {
      lightboxLink.attr('data-start', 'true'); // Başlangıç resmini işaretle
    }

    $('body').append(lightboxLink);
  });

  // İşaretli resmi tıklatarak lightbox galerisini başlat
  var startLightboxLink = $('a[data-lightbox="' + gallery + '"][data-start="true"]');
  if (startLightboxLink.length > 0) {
    startLightboxLink.get(0).click();
  }

  // Tüm geçici a etiketlerini kaldır
  $.each(items, function (i, item) {
    var lightboxLink = $('a[href="' + item.href + '"]');
    if (lightboxLink.length > 0) {
      lightboxLink.remove();
    }
  });
});





