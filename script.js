let dc601390 = document.getElementsByClassName("dc601390")[0];
dc601390.addEventListener("mouseover", () => {
  dc601390.children[1].style.cssText =
    "color:black; font-weight:600; margin:10px";
});

let dc601610 = document.getElementsByClassName("dc601610")[0];
dc601610.addEventListener("mouseover", () => {
  dc601610.children[1].style.cssText =
    "color:black; font-weight:600; margin:10px";
});

let dc601905 = document.getElementsByClassName("dc601905")[0];
dc601905.addEventListener("mouseover", () => {
  dc601905.children[1].style.cssText =
    "color:black; font-weight:600; margin:10px";
});

function b3Size() {
  let trackSize = document.querySelectorAll(".b3-size");

  let trackSizeArr = [trackSize];

   for(i=0; i < trackSizeArr[0].length; i++)
    {

        trackSizeArr[0][i].style.cssText=`display:block`;

    }
}
function b3BmSize() {
    let trackSize = document.querySelectorAll(".b3bm-size");
  
    let trackSizeArr = [trackSize];
  
     for(i=0; i < trackSizeArr[0].length; i++)
      {
  
          trackSizeArr[0][i].style.cssText=`display:block`;
  
      }
  }
function b1Size() {
    let trackSize = document.querySelectorAll(".b1-size");
  
    let trackSizeArr = [trackSize];
  
     for(i=0; i < trackSizeArr[0].length; i++)
      {
  
          trackSizeArr[0][i].style.cssText=`display:block`;
  
      }
  }
  function b2Size() {
    let trackSize = document.querySelectorAll(".b2-size");
  
    let trackSizeArr = [trackSize];
  
     for(i=0; i < trackSizeArr[0].length; i++)
      {
  
          trackSizeArr[0][i].style.cssText=`display:block`;
  
      }
  }