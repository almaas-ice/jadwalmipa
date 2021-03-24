
export function render(element,target) {
  document.querySelector(`${target}`).innerHTML += element
};

export function normalizeCss() {
  if (window.navigator.onLine) {
    const link = document.createElement('link');
    link.rel = "stylesheet";
    link.href ="https://necolas.github.io/normalize.css/latest/normalize.css";
    document.getElementsByTagName('head')[0].appendChild(link);
  } else {
    document.head.innerHTML += `
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
    </style>`
  }
}

export function style(eachStyle) {
  if (window.allStyle == undefined) {
    window.allStyle = eachStyle;
  } else {
    window.allStyle += eachStyle;
  }
};
export function renderStyle() {
  const css = document.createElement('style');
  document.head.appendChild(css);
  const arrStyle = allStyle.split("---")
  arrStyle.pop()
  arrStyle.map(eachStyle=>css.sheet.insertRule(`${eachStyle}`))
  delete window.allStyle;
}
export function font(url) {
  if (url.includes("fonts.googleapis.com")) {
    const fontPreconnect = document.createElement('link');
    fontPreconnect.setAttribute('rel', 'preconnect')
    fontPreconnect.setAttribute('url', 'https://fonts.gstatic.com')
    document.head.appendChild(fontPreconnect)
  }
  const fontTag = document.createElement('link');
  fontTag.setAttribute('rel', 'stylesheet');
  fontTag.setAttribute('type', 'text/css');
  fontTag.setAttribute('href', url);
  document.head.appendChild(fontTag);
};