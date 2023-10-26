//Func for Smooth Scroll to Anchor
// element with attribute 'anchor' -> *scroll to* -> element with id which value equal value in 'anchor' attribute
// <div anchor="#a1"></div> -> *scroll to* -> <div id="a1"></div>

export const smoothScrollUp = (e) => {
    e.preventDefault()
    const id = e.currentTarget.getAttribute('anchor').substr(1)
    
    document.getElementById(id).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
}

// new Date(date) -> dd.mm.yyyy
// date in ms
export const getDate = (date) => new Date(date).toLocaleDateString('en-GB').replace(/\//g, ".")

// string1 -> String1
export const uppercaseFirstLetter = (string) => string.charAt(0).toUpperCase() + string.slice(1);



//Func for block scrolling

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
// const keys = {37: 1, 38: 1, 39: 1, 40: 1};

// function preventDefault(e) {
//   e.preventDefault();
// }

// function preventDefaultForScrollKeys(e) {
//   if (keys[e.keyCode]) {
//     preventDefault(e);
//     return false;
//   }
// }

// // modern Chrome requires { passive: false } when adding event
// let supportsPassive = false;
// try {
//   window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
//     get: function () { supportsPassive = true; } 
//   }));
// } catch(e) {}

// const wheelOpt = supportsPassive ? { passive: false } : false;
// const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// // call this to Disable
// export function disableScroll() {
//   window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
//   window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
//   window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
//   window.addEventListener('keydown', preventDefaultForScrollKeys, false);
// }

// // call this to Enable
// export function enableScroll() {
//   window.removeEventListener('DOMMouseScroll', preventDefault, false);
//   window.removeEventListener(wheelEvent, preventDefault, wheelOpt); 
//   window.removeEventListener('touchmove', preventDefault, wheelOpt);
//   window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
// }