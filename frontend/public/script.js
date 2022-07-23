window.addEventListener('DOMContentLoaded', () => {
  // Responsive html font size
  let iw = window.innerWidth;
  let rootScreenWidth = 1366;
  let rootFontPercentage = 44.46;

  let my_html = document.querySelector("html");
  my_html.style.fontSize = rootFontPercentage + "%"
  let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;

  if (iw > 1366) {
    my_html.style.fontSize = `${currentFontSize}%`;
  } else {
    my_html.style.fontSize = `${rootFontPercentage}%`;
  }

  window.addEventListener('resize', () => {
    let iw = window.innerWidth;
    let rootScreenWidth = 1366;
    let rootFontPercentage = 44.46;

    let my_html = document.querySelector("html");
    my_html.style.fontSize = rootFontPercentage + "%"
    let currentFontSize = (rootFontPercentage * iw) / rootScreenWidth;
    if (iw > 1366) {
      my_html.style.fontSize = `${currentFontSize}%`;
    } else {
      my_html.style.fontSize = `${rootFontPercentage}%`;
    }

    // Responsive html font size end
  })

})
