
/* Accordion sidebar işlemi yapılmakta */
document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.body-sidebar-list-accordion-link');
    
    menuItems.forEach(item => {
      if (item.href === currentLocation) {
        item.classList.add("accordion-active");
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.body-sidebar-list-accordion-link');
  
    menuItems.forEach(item => {
      if (item.href === currentLocation) {
        item.classList.add("accordion-active");
  
        let parent = item.closest('.accordion-collapse');
        while (parent) {
          let parentButton = parent.previousElementSibling.querySelector('.accordion-button');
          if (parentButton && parent.classList.contains('collapse')) {
            let collapseInstance = bootstrap.Collapse.getOrCreateInstance(parent, {
              toggle: false
            });
            collapseInstance.show();
  
            parentButton.classList.remove('collapsed');
            parentButton.classList.add('accordion-active');
          }
          parent = parent.parentElement.closest('.accordion-collapse');
        }
      }
    });

    const outerAccordionButtons = document.querySelectorAll('.accordion-button.outer-accordion');
    outerAccordionButtons.forEach(button => {
      button.addEventListener('click', function () {
        outerAccordionButtons.forEach(btn => btn.classList.remove('accordion-active'));
        const target = document.querySelector(this.getAttribute('data-bs-target'));
        if (target) {
          let collapseInstance = bootstrap.Collapse.getOrCreateInstance(target, {
            toggle: true
          });
          collapseInstance.toggle();
  
          this.classList.toggle('accordion-active');
        }
      });
    });
  
    const innerAccordionButtons = document.querySelectorAll('.accordion-button');
    innerAccordionButtons.forEach(button => {
      button.addEventListener('click', function() {
        const target = document.querySelector(this.getAttribute('data-bs-target'));
        if (target) {
          let collapseInstance = bootstrap.Collapse.getOrCreateInstance(target, {
            toggle: true
          });
          collapseInstance.toggle();
  
          if (target.classList.contains('show')) {
            this.classList.add('accordion-active');
          } else {
            this.classList.remove('accordion-active');
          }
        }
      });
    });
  });
  
/* document.addEventListener('DOMContentLoaded', function () {
  const currentLocation = location.href;
  const menuItems = document.querySelectorAll('.body-sidebar-list-accordion-link');

  menuItems.forEach(item => {
    if (item.href === currentLocation) {
      item.classList.add("accordion-active");

      let parent = item.closest('.accordion-collapse');
      while (parent) {
        let parentButton = parent.previousElementSibling.querySelector('.accordion-button');
        if (parentButton && parent.classList.contains('collapse')) {
          let collapseInstance = bootstrap.Collapse.getOrCreateInstance(parent, {
            toggle: false
          });
          collapseInstance.show();

          parentButton.classList.remove('collapsed');
          parentButton.classList.add('accordion-active');
        }
        parent = parent.parentElement.closest('.accordion-collapse');
      }
    }
  });

  const outerAccordionButtons = document.querySelectorAll('.accordion-button.outer-accordion');
  outerAccordionButtons.forEach(button => {
    button.addEventListener('click', function () {
      outerAccordionButtons.forEach(btn => btn.classList.remove('accordion-active'));
      const target = document.querySelector(this.getAttribute('data-bs-target'));
      if (target) {
        let collapseInstance = bootstrap.Collapse.getOrCreateInstance(target, {
          toggle: true
        });
        collapseInstance.toggle();

        this.classList.toggle('accordion-active');
      }
    });
  });

  const outerAccordionButtons1 = document.querySelectorAll('.accordion-button.outer-accordion');
  outerAccordionButtons1.forEach(button => {
    button.addEventListener('click', function () {

      const target = document.querySelector(this.getAttribute('data-bs-target'));
      if (target) {
        let collapseInstance = bootstrap.Collapse.getOrCreateInstance(target, {
          toggle: true
        });
        collapseInstance.toggle();

        this.classList.toggle('accordion-active');
      }
    });
  });

  const innerAccordionButtons = document.querySelectorAll('.accordion-button.inner-accordion');
  innerAccordionButtons.forEach(button => {
    const target = document.querySelector(button.getAttribute('data-bs-target'));
    if (target) {
      let collapseInstance = bootstrap.Collapse.getOrCreateInstance(target, {
        toggle: false
      });
      collapseInstance.show();
      button.classList.add('accordion-active');
    }
  });
}); */

/* document.addEventListener('DOMContentLoaded', function() {
  const activeLinks = document.querySelectorAll('.body-sidebar-list-accordion-link.accordion-active');

  function expandParentAccordions(element) {
    let parentAccordion = element.closest('.accordion-collapse');
    while (parentAccordion) {
      const parentAccordionButton = parentAccordion.previousElementSibling.querySelector('.body-sidebar-list-accordion-button');
      if (parentAccordionButton) {
        const collapseInstance = new bootstrap.Collapse(parentAccordion, {
          toggle: false
        });
        collapseInstance.show();

        // Add the active class to the button
        parentAccordionButton.classList.add('accordion-active');
        parentAccordionButton.classList.remove('collapsed');

      }
      parentAccordion = parentAccordion.parentElement.closest('.accordion-collapse');
    }
  }

  activeLinks.forEach(link => {
    expandParentAccordions(link);
  });
}); */


/* offcanvas kapandığında accordion kapatma işlemi yapılmakta*/
function closeAllAccordions() {
    var accordions = document.querySelectorAll('.accordion-collapse');
    accordions.forEach(function (accordion) {
        var bsAccordion = new bootstrap.Collapse(accordion, { toggle: false });
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
$(document).ready(function() {
    
    $('.accordion-button').click(function() {
      
      var $accordion = $(this).parents('.accordion-item');
  
      $('.accordion-item').not($accordion).find('.accordion-collapse').collapse('hide');
    });
  });
  

/* Burada yukarı tRANDOMma işlemi yapılmakta */
let goTopBtn = document.getElementById("scrollTopBtn");

window.onload = scrollFunction;
window.onscroll = scrollFunction;

function scrollFunction() {
    if (window.pageYOffset > 500) {
        goTopBtn.style.display = "flex";
    } else {
        goTopBtn.style.display = "none";
    }
}

/* Burada search yazı silme işlemi yapılmakta */
document.addEventListener('DOMContentLoaded', function() {
    // Kodunuz buraya gelecek
    document.addEventListener('click', function(event) {
        var input = document.getElementById('dropdown-menu-search');
        var targetElement = event.target;
    
        // Eğer tıklanan hedef element input alanı değilse ve input alanının içeriği de boş değilse
        if (targetElement !== input && input.value !== '') {
            // Input alanının içeriğini temizle
            input.value = '';
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
function getPageList(totalPages, page, maxLength) {
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
}

function initPagination(limitPerPage) {
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

         $(".body-pagination-first-page").toggleClass("disable", currentPage === 1);
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

};
/* Burada küçük sayfa için pagination yapılmakta  */
function initPaginations(limitPerPage) {
    var numberOfItems = $(".card-content .card").length;
    var totalPages = Math.ceil(numberOfItems / limitPerPage);
    var currentPage;

    function showPage(whichPage) {
        if (whichPage < 1 || whichPage > totalPages) return false;

        currentPage = whichPage;

        $(".card-content .card").hide().slice((currentPage - 1) * limitPerPage, currentPage * limitPerPage).show();

        $(".body-pagination-small-screen li").slice(2, -2).remove();


         $(".body-pagination-first-page-small-screen").toggleClass("disable", currentPage === 1);
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

}; 


/* Burada Bilgilendirme yapılmakta */
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.card-body-calender-item-body-button');
  
    buttons.forEach(function(button) {
      button.addEventListener('click', function() {
        const buttonText = button.querySelector('.card-body-calender-item-body-button-text').textContent;
        writeToOutput(buttonText);
      });
    });
  
    function writeToOutput(content) {
      const output = document.getElementById('output');
      if (output) {
        output.textContent = content;
      } else {
        console.error('Output element not found.');
      }
    }
  });


/* Burada lightbox2 yapılmakta */
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'albumLabel': "%1 / %2",
    'disableScrolling': false,
    'fadeDuration': 600,
    'fitImagesInViewport': true,
    'imageFadeDuration': 600,
  /*'maxWidth': 800,
    'maxHeight': 600,*/
    'positionFromTop': 50,
    'showImageNumberLabel': true
  });

document.querySelectorAll('p[data-lightbox]').forEach(function(paragraph, index) {
    paragraph.addEventListener('click', function(event) {
        event.preventDefault(); // Varsayılan davranışı engelle
        event.stopPropagation(); // Olayın diğer elemanlara ulaşmasını engelle

        var gallery = this.getAttribute('data-lightbox');
        var images = document.querySelectorAll('p[data-lightbox="' + gallery + '"] img');

        // Tüm resim href ve title'larını topla
        var items = Array.from(images).map(function(img) {
            var parent = img.parentNode;
            return {
                href: parent.getAttribute('href'),
                title: parent.getAttribute('data-title')
            };
        });

        // Özel bir olay oluştur ve gerekli bilgileri ekle
        var customEvent = new CustomEvent('lightbox-gallery-trigger', {
            detail: {
                items: items,
                gallery: gallery,
                startIndex: index // Başlangıç indeksini ekle
            }
        });

        // Özel olayı tetikle
        document.dispatchEvent(customEvent);
    });
});

document.addEventListener('lightbox-gallery-trigger', function(event) {
    var items = event.detail.items;
    var gallery = event.detail.gallery;
    var startIndex = event.detail.startIndex;

    // Geçici a etiketleri oluştur ve body'ye ekle
    items.forEach(function(item, i) {
        var lightboxLink = document.createElement('a');
        lightboxLink.href = item.href;
        lightboxLink.setAttribute('data-lightbox', gallery);
        lightboxLink.setAttribute('data-title', item.title);
        if (i === startIndex) {
            lightboxLink.setAttribute('data-start', 'true'); // Başlangıç resmini işaretle
        }
        document.body.appendChild(lightboxLink);
    });

    // İşaretli resmi tıklatarak lightbox galerisini başlat
    var startLightboxLink = document.querySelector('a[data-lightbox="' + gallery + '"][data-start="true"]');
    if (startLightboxLink) {
        startLightboxLink.click();
    }

    // Tüm geçici a etiketlerini kaldır
    items.forEach(function(item) {
        var lightboxLink = document.querySelector('a[href="' + item.href + '"]');
        if (lightboxLink) {
            document.body.removeChild(lightboxLink);
        }
    });
});

