import * as hello from './helloo.js';

import * as event from './components/events.js';
import {navbar} from './components/navbar.js';
import {main} from './components/main-page.js';


const app = () => {
  return`
    <div>
      ${ navbar() }
      ${ main() }
    </div>`
};
hello.font`https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap`
hello.style`
  :root {
    width: 100vw;
    height: 100vh;
    font-family: 'DM Sans', sans-serif;
    color: #666;
    text-align: center;
    background-color: #fafafa;
  } --- `


//play!
hello.normalizeCss();
hello.renderStyle();
hello.render(app(),'div#app');