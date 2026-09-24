export const handleSmoothScroll = (event, path, offset = 50) => {
  event.preventDefault();

  const elementId = path.split('#')[1];
  const element = document.getElementById(elementId || '');

  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });

    window.history.pushState(null, '', path);
  } else {
    window.location.href = path;
  }
};
