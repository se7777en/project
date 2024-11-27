
// Set the x and y point then we add listener to the slider

let touchstartX = 0;
let touchstartY = 0;
let touchendX = 0;
let touchendY = 0;

// Get the slider, set the slider length, slider width and current index








const slider = document.querySelector('.slider')
const sliderWrapper = document.querySelector('.slider__items');
const sliderLength = document.querySelectorAll('.slider__item').length
const sliderWidth = window.innerWidth; // menyaem
const sliderToShow = 2; // menyaem
let index = 0;


// set the current slider process, touched handler, and animated handler
let sliderProcess = 0
let touched = false;
let notAnimated = true;

slider.addEventListener('touchstart', function(event) {
    event.preventDefault()
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
    touched = true;
},  false );

slider.addEventListener('touchmove', function(event) {
    if(touched) {
      touchendX = event.changedTouches[0].screenX;
      touchendY = event.changedTouches[0].screenY;
      swipe();
    }
},  false );

slider.addEventListener('touchout', function(event) {
  if(touched && notAnimated)  {
     snap((touchendX - touchstartX));
  }
},  false );

slider.addEventListener('touchend', function(event) {
    if(touched && notAnimated) {
     snap((touchendX - touchstartX));
  }
},  false ); 

// The listener to handle when a left click
// on mouse button occur, and get it's coordinate

slider.addEventListener('mousedown', function(event) {
  // event.button === 0 to check if the left button is registered
  if (event.button === 0) {
    event.preventDefault()
    // set the coordinate start point
    touchstartX = event.clientX;
    touchstartY = event.clientY;
    // set the touched to true
    touched = true
  }
},  false );

// The listener to handle when the event is hover above the slider element
slider.addEventListener('mousemove', function(event) {
  // only triggered if the slider is touched, 
  //not in animated and the event comming from left click
    if(touched && notAnimated && event.button === 0) {
      // set the coordinate end point, 
      touchendX = event.clientX;
      touchendY = event.clientY;
      // tigger the swipe function
      swipe();
    }
},  false );

// The listener to handle when the event is exit the slider element

slider.addEventListener('mouseout', function(event) {
  // only triggered if the slider is touched, 
  // not in animated and the event comming from left click
  if(touched && notAnimated && event.button === 0) {
    // tigger the snap function
    snap((touchendX - touchstartX));
  }
},  false );

// The listener to handle when the event is not touching with the slider element

document.addEventListener('mouseup', function(event) {
  if(touched && notAnimated && event.button === 0) {
     // tigger the snap function
    snap((touchendX - touchstartX));
  }
},  false );

// this function will handle the current index of the slider

const snap = (value) => {
  // check the value from the slide, 
  // to decide the slider to slide in which direction
  if (value < -60 && index < sliderLength - sliderToShow) {/*menyaem kolichestvo slaidov*/
      index += 1;
    } else if (value > 60 && index > 0) {
      index -= 1;
    }  
    // slideAndSnap function called and update the current pixels
    slideAndSnap()
    sliderProcess = sliderWidth * index * - 1 ;
}


// this function only be called by snap function

const slideAndSnap = () => {
  // slide the slider
  window.requestAnimationFrame(function () {
    sliderWrapper.style.transform = 
      'translate3d(-' + sliderWidth * index  + 'px, 0,0)';
  })
  // add the transition class and set the notAnimated to false
  sliderWrapper.classList.add('transition')
  notAnimated = false;
  
  // remove the transition class and set the touched and notAnimated to true
  setTimeout(() => {
    sliderWrapper.classList.remove('transition')
    notAnimated = true;
    touched = false
   }, 1500)
}

// this function will handle when there is a drag motion
const swipe = () => {
  let value = touchendX - touchstartX
  let holdValue = 0
  // check if it's the last of the first element to apply 'heavy slide' effect
  if ((
      index  === sliderLength - 1 && value < 0) || 
(index === 0 && value > 1)) 
  {
    holdValue += (value - holdValue) / 6;
    sliderSlide(sliderProcess + holdValue)
    return ;
  } 
  sliderSlide(sliderProcess + value)
  
}

// this function will aplly the style to slider when its dragged  
const sliderSlide = (value) => {
  window.requestAnimationFrame(function () {
      sliderWrapper.style.transform= 'translate3d(' + value + 'px, 0,0)';
    })
}

