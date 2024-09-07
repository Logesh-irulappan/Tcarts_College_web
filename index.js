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
  
  // SIDE-NOTICE BOARD Script Starts

  document.querySelector(".side-noticeBoard .toggle-btn").addEventListener("click", () => {
    console.log("Notice Button is Clicked");
    document.querySelector(".side-noticeBoard").classList.toggle("active");
  });

  // NOTICE BOARD Script END

  // GRAPH'S Script 

  // Define your chart data and configuration
  var xValues = ["2016", "2017", "2018", "2019", "2020", "2021", "2022"];
  var barColors = ["red", "green", "blue", "orange", "brown", "lightblue", "grey"];
  var yValues = [192, 542, 616, 512, 456, 518, 577];
  var x = ["Boys", "Girls"];
  var y = [2327, 3000];
  var b = ["#f7dc6f", "#5dade2"];
  
  // Function to create or update the bar chart
  function createBarChart() {
    new Chart("myChart", {
      type: "bar",
      data: {
        labels: xValues,
        datasets: [{
          backgroundColor: barColors,
          data: yValues,
        }]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: "Placement",
          fontSize: 18,
          fontColor: "black",
          position: 'top',
        },
        plugins: {
          datalabels: {
            anchor: 'end',
            align: 'end',
            color: 'black',
            font: {
              weight: 'bold'
            },
            formatter: function(value) {
              return value;
            }
          }
        }
      },
      plugins: [ChartDataLabels]
    });
  }
  
  // Function to create or update the pie chart
  function createPieChart() {
    new Chart("pieChart", {
      type: "pie",
      data: {
        labels: x,
        datasets: [{
          backgroundColor: b,
          data: y
        }]
      },
      options: {
        title: {
          display: true,
          text: "Student strength",
          fontSize: 18,
          fontColor: "black",
        }
      }
    });
  }
  
  // Intersection Observer to detect when the chart container is visible
  var chartContainer = document.querySelector('.charts'); // Replace with your chart container element's ID
  
  var observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        createBarChart();
        createPieChart();
        observer.unobserve(entry.target); // Stop observing after charts are created
      }
    });
  }, { threshold: 0.1 }); // Adjust threshold as needed
  
  observer.observe(chartContainer);
  