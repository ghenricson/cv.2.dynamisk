
/* import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js"; */

/*  document.getElementById('parallax').animate(
    { transform: ['translateY(0)', 'translateY(100px)']},
    { duration: 10000, // Totally arbitrary!
      fill: 'both',
      timeline: new ScrollTimeline({
          scrollOffsets: [
              new CSSUnitValue(0, 'px'),
              new CSSUnitValue(200, 'px')
          ]
      })
    });  */

/* const scrollTracker = document.querySelector(".scroll-tracker");

const scrollTrackingTimeline = new ScrollTimeline({
    source: document.scrollingElement,
    orientation: "block",
    scrollOffsets: [CSS.percent(0),CSS.percent(100)]
});

scrollTracker.animate(
  {
    transform: ['scaleX(0)', 'scaleX(1)']
  },
  {
    duration: 1,
    timeline: scrollTrackingTimeline,
  }  
);  */


/* let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {

  document.documentElement.scrollTop = 0;
} */

/*-------- JSON ATTACHEMENT -------*/

// fetch
const getInfo = async () => {

  const request = new Request('/cv.json');
  //fetch() starts a request and returns a promise. When the request completes, the promise is resolved with the Response object. 
  //If the request fails due to some network problems, the promise is rejected.


  const response = await fetch(request);
 // await fetch('/cvjson') starts an HTTP request to '/movies' URL. Because the await keyword is present, 
 //the asynchronous function is paused until the request completes.
  const cvObj = await response.json();
  //response.json() is a method on the Response object that lets you extract a JSON object from the response. 
  //The method returns a promise, so you have to wait for the JSON: await response.json().
  
  console.log(cvObj)
  return cvObj; 
}

const populateCv = (cvObj) => {
  let employmentHtml = ``;
  
cvObj.employment.forEach(element => {
    const listItem = `
    <li>
    <h2>${element.time}</h2>
    <h3>${element.job}</h3>
    <h4>${element.jobTitle}</h4>
    <p>${element.text}</p>
    </li>`;
  
    employmentHtml +=listItem
    /* console.log(cvObj.employment) */
});
document.getElementById('employmentList').innerHTML = employmentHtml;

let educationHtml = ``;
cvObj.education.forEach(element => {
    const listItem = `
    <li>
    <h2>${element.time}</h2>
    <h3>${element.school}</h3>
    <p>${element.text}</p>
    </li>`;

    educationHtml +=listItem
    //console.log(cvObj.education);
});

document.getElementById('educationList').innerHTML = educationHtml;
}
const cvObj = await getInfo();
populateCv(cvObj);