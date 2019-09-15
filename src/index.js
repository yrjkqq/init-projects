// import printMe from './print.js';
// import './styles.css';

/**
 * caching
 */
import _ from 'lodash';
// import Print from './print';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.onclick = Print.bind(null, 'Hello webpack!');

  return element;
}

document.body.appendChild(component());

/**
 * lazy loading
 */
// import _ from 'lodash';

// function component() {
//   const element = document.createElement('div');
//   const button = document.createElement('button');
//   const br = document.createElement('br');
//   button.innerHTML = 'Click me and look ad the console!';
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   element.appendChild(br);
//   element.appendChild(button);

//   button.onclick = () =>
//     // eslint-disable-next-line implicit-arrow-linebreak
//     import(/* webpackChunkName: "print" */ './print').then((module) => {
//       const print = module.default;
//       print();
//     });

//   return element;
// }

// document.body.appendChild(component());

/**
 * code splitting
 */

// async function getComponent() {
//   const { default: _ } = await import(
//     /* webpackChunkName: "lodash" */ 'lodash'
//   );
//   const element = document.createElement('div');
//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//   return element;
// }

// getComponent()
//   .then((component) => {
//     document.body.appendChild(component);
//   })
//   .catch((error) => {
//     console.error(error);
//   });

/**
 * HMR
 */

// function component() {
//   const element = document.createElement('div');
//   const btn = document.createElement('button');

//   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//   btn.innerHTML = 'Click me and check the console!';
//   btn.onclick = printMe;

//   element.appendChild(btn);

//   return element;
// }

// document.body.appendChild(component());
// let element = component();
// document.body.appendChild(element);

// if (module.hot) {
//   module.hot.accept('./print.js', () => {
//     // eslint-disable-next-line no-console
//     console.log('Accepting the updated printMe module!');
//     // printMe();
//     document.body.removeChild(element);
//     element = component();
//     document.body.appendChild(element);
//   });
// }
