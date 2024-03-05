// Easy selector helper function
const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };
  
  // Easy event listener function
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
  
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };
  
  // Scrolls to an element with header offset
  const scrollto = el => {
    const headerOffset = 50; // Adjust based on your header height
    const elementPosition = select(el).offsetTop;
    const offsetPosition = elementPosition - headerOffset;
  
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  };

  // Mobile nav toggle function
  const toggleMobileNav = () => {
    const navbar = select('#navbar');
    navbar.classList.toggle('navbar-mobile');
    select('.mobile-nav-toggle').classList.toggle('bi-list');
    select('.mobile-nav-toggle').classList.toggle('bi-x');  
    const navLinks = select('ul', true);
    navLinks.forEach(ul => ul.classList.toggle('active'));
  };

  // Attach event listener for mobile nav toggle
  on('click', '.mobile-nav-toggle', function (e) {
    e.stopPropagation(); // Stop event propagation
    toggleMobileNav();
  });

  // Scroll with offset on links with a class name .scrollto
  on('click', '#navbar .nav-link', function (e) {
    e.preventDefault();
    const hash = this.getAttribute('href');

    if (hash) {
      const header = select('#header');
      const sections = select('section', true);
      const navlinks = select('#navbar .nav-link', true);

      navlinks.forEach(item => {
        item.classList.remove('active');
      });

      this.classList.add('active');

      if (hash === '#header') {
        header.classList.remove('header-top');
        sections.forEach(item => {
          item.classList.remove('section-show');
        });
      } else {
        if (!header.classList.contains('header-top')) {
          header.classList.add('header-top');
          setTimeout(function () {
            sections.forEach(item => {
              item.classList.remove('section-show');
            });
            select(hash).classList.add('section-show');
          }, 350);
        } else {
          sections.forEach(item => {
            item.classList.remove('section-show');
          });
          select(hash).classList.add('section-show');
        }
      }

      scrollto(hash);
      window.history.pushState({}, '', hash); // Update the URL without refreshing the page
    }
  }, true);


  
  // Activate/show sections on load with hash links
  window.addEventListener('load', () => {
    if (window.location.hash) {
      const initial_nav = select(window.location.hash);
  
      if (initial_nav) {
        const header = select('#header');
        const navlinks = select('#navbar .nav-link', true);
  
        header.classList.add('header-top');
  
        navlinks.forEach(item => {
          if (item.getAttribute('href') == window.location.hash) {
            item.classList.add('active');
          } else {
            item.classList.remove('active');
          }
        });
  
        setTimeout(function () {
          initial_nav.classList.add('section-show');
        }, 350);
  
        scrollto(window.location.hash);
      }
    }
  });
  