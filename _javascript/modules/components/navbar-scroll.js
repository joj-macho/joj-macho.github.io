export function navbarScroll() {
  const navbar = document.getElementById('navbar-wrapper');

  if (!navbar) return;

  let lastScrollTop = 0;
  const shrinkThreshold = 50;

  const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > shrinkThreshold) {
      navbar.classList.add('scroll');
    } else {
      navbar.classList.remove('scroll');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Prevent negative scroll
  };

  window.addEventListener('scroll', handleScroll);

  // Initial check to apply the shrink effect if needed
  handleScroll();
}
