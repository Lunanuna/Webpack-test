import _ from 'lodash'
import './style.css';
import Icon from './icon.jpeg';
import printMe from './print';

if (process.env.NODE_ENV !== 'production') {
    console.log('Looks like we are in development mode!');
  }
  
function component() {
    const element = document.createElement('div');
    const btn = document.createElement('button')

      // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    //Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;

    element.appendChild(myIcon);

    //add button
    btn.innerHTML = 'Click me and check the console!';
    btn.onclick = printMe;

    element.appendChild(btn);

    return element;
  }
  
  document.body.appendChild(component());
  