let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    const menusection = document.querySelector(".menu-section");
    const header = document.querySelector(".header");
    if (currentScroll <= 0 && menusection.classList.contains("sticky")) {
      menusection.classList.remove("sticky");
      menusection.firstElementChild.style.display = "none";
      header.classList.remove("m-t");
      return;
    }
    if (currentScroll > 120 && !menusection.classList.contains("sticky")) {
      menusection.classList.add("sticky");
      menusection.firstElementChild.style.display = "flex";
      header.classList.add("m-t");
    }
  });
  // SLIDER IMAGE 
  var counter = 0;
  const slider = document.querySelectorAll(".slider-image img");
  slider.forEach((slide, ind) => {
    console.log(slide);
    console.log(ind);
    slide.style.left = `${ind * 100}%`;
  });
  const prev = () => {
    counter--;
    slideImage();
  };
  const next = () => {
    counter++;
    slideImage();
  };
  const slideImage = () => {
    slider.forEach((imgs) => {
      if (counter == 3) {
        counter = 0;
      } else if (counter < 0) {
        counter = 2;
      }
      imgs.style.transform = `translateX(-${counter * 100}%)`;
    });
  };
  
  document.querySelectorAll(".counter").forEach((element,i)=>{
    
    animateValue(element,0,element.id,5000);
      element.innerHTML = Number(element.innerHTML) + 1;
      if (element.innerHTML == element.id)
      {
        clearInterval(i+1);
      }
    
  });


  function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  
  // SIDE-NOTICE BOARD

  document.querySelector(".side-noticeBoard .toggle-btn").addEventListener("click", () => {
    console.log("Notice Button is Clicked");
    document.querySelector(".side-noticeBoard").classList.toggle("active");
  });

  // NOTICE BOARD END
  