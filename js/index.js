
// define the images in an array og objects
const images = [
  {
    id: 1,
    src: "https://images.pexels.com/photos/26455238/pexels-photo-26455238/free-photo-of-underwater-photo-of-a-shark.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 2,
    src: "https://images.pexels.com/photos/26570912/pexels-photo-26570912/free-photo-of-sea-turtle-over-coral-on-seabed.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 3,
    src: "https://images.pexels.com/photos/27372380/pexels-photo-27372380/free-photo-of-repsol-gas-station-in-spain.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 4,
    src: "https://images.pexels.com/photos/27777788/pexels-photo-27777788/free-photo-of-photo-of-a-ray-fish.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
  },
  {
    id: 5,
    src: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];


// get the images from html file
const main_image = document.getElementById("main-image")

const prev_image = document.getElementById("prev-image");
const next_image = document.getElementById("next-image");

// get the gallery container to control the automatic image move
const gallery = document.getElementById('gallery')

// create variable to control the index
let index = 0

// give src and data_id to the images in the first
prev_image.src = images[images.length - 1].src
prev_image.dataset.id = images[images.length - 1].id;

main_image.src = images[index].src;
main_image.dataset.id = images[index].id

next_image.src =  images[(index + 1) % images.length].src;
next_image.dataset.id = images[(index + 1) % images.length].id;

// get the dots container to create dots
const dots = document.getElementById('dots')

// create dot for every image and create click event for every dot
for (i=0; i < images.length; i++){
  const dot = document.createElement("span");
  dot.classList.add('dot')
  dot.dataset.id = i

  dot.addEventListener('click', () => {
    index = Number(dot.dataset.id);

    prev_image.src = images[(index - 1 + images.length) % images.length].src;
    prev_image.dataset.id =
      images[(index - 1 + images.length) % images.length].id;

    main_image.src = images[index].src;
    main_image.dataset.id = images[index].id;

    next_image.src = images[(index + 1) % images.length].src;
    next_image.dataset.id = images[(index + 1) % images.length].id;


    main_image.classList.add("fade");
    next_image.classList.add("fade");
    prev_image.classList.add("fade");

    for (let j = 0; j < dots.children.length; j++) {
      dots.children[j].classList.remove('active')
    }
    dot.classList.add('active')


    setTimeout(() => {
      main_image.classList.remove("fade");
      next_image.classList.remove("fade");
      prev_image.classList.remove("fade");
    }, 1000);
  })

  dots.appendChild(dot)
}

// create a function for previous event
const prev_slide = () => {
  index = (index - 1 + images.length) % images.length;

  prev_image.src = images[(index - 1 + images.length) % images.length].src;
  prev_image.dataset.id =
    images[(index - 1 + images.length) % images.length].id;
  prev_image.classList.add("fade");
  
  main_image.src = images[index].src;
  main_image.dataset.id = images[index].id;
  main_image.classList.add("fade");

  next_image.src = images[(index + 1) % images.length].src;
  next_image.dataset.id = images[(index + 1) % images.length].id;
  next_image.classList.add("fade");

  const dot = document.getElementsByClassName("dot")[index];
  dot.dataset.id = index;


  for (let j = 0; j < dots.children.length; j++) {
    dots.children[j].classList.remove("active");
  }
  dot.classList.add("active");


  setTimeout(() => {
    main_image.classList.remove("fade");
    next_image.classList.remove("fade");
    prev_image.classList.remove("fade");
  }, 1000);
}


// create a function for next event
const next_slide =  () => {
  
  index = (index + 1) % images.length

  prev_image.src = images[(index - 1 + images.length) % images.length].src;
  prev_image.dataset.id =
    images[(index - 1 + images.length) % images.length].id;
  prev_image.classList.add("fade");

  main_image.src = images[index].src;
  main_image.dataset.id = images[index].id;
  main_image.classList.add("fade")

  next_image.src = images[(index + 1) % images.length].src;
  next_image.dataset.id = images[(index + 1) % images.length].id;
  next_image.classList.add('fade')

  const dot = document.getElementsByClassName('dot')[index]
  dot.dataset.id = index;

  for (let j = 0; j < dots.children.length; j++) {
    dots.children[j].classList.remove("active");
  }
  dot.classList.add("active");



  setTimeout(() => {
    main_image.classList.remove("fade");
    next_image.classList.remove("fade");
    prev_image.classList.remove("fade");
  } , 1000)
};


const prev = document.getElementById("prev");
const next = document.getElementById("next");



const imgs = document.getElementsByClassName('img')

// main_image.addEventListener("change", () => {
//   main_image.classList.add("fade")
// })

// create a click event to previous image
prev_image.addEventListener('click', () => {
  index = prev_image.dataset.id - 1

  prev_image.src = images[(index - 1 + images.length) % images.length].src;
  prev_image.dataset.id =
    images[(index - 1 + images.length) % images.length].id;

  main_image.src = images[index].src;
  main_image.dataset.id = images[index].id;

  next_image.src = images[(index + 1) % images.length].src;
  next_image.dataset.id = images[(index + 1) % images.length].id;

  main_image.classList.add("fade");
  next_image.classList.add("fade");
  prev_image.classList.add("fade");

  for (let j = 0; j < dots.children.length; j++) {
    dots.children[j].classList.remove("active");
    }
    const dot = document.getElementsByClassName('dot')[index]
    dot.classList.add("active");


    setTimeout(() => {
      main_image.classList.remove("fade");
      next_image.classList.remove("fade");
      prev_image.classList.remove("fade");
    }, 1000);
})

// create a click event to next image
next_image.addEventListener("click", () => {
  index = next_image.dataset.id - 1

  prev_image.src = images[(index - 1 + images.length) % images.length].src;
  prev_image.dataset.id =
    images[(index - 1 + images.length) % images.length].id;

  main_image.src = images[index].src;
  main_image.dataset.id = images[index].id;

  next_image.src = images[(index + 1) % images.length].src;
  next_image.dataset.id = images[(index + 1) % images.length].id;

  main_image.classList.add("fade");
  next_image.classList.add("fade");
  prev_image.classList.add("fade");

  for (let j = 0; j < dots.children.length; j++) {
    dots.children[j].classList.remove("active");
  }
  const dot = document.getElementsByClassName("dot")[index];
  dot.classList.add("active");


  setTimeout(() => {
    main_image.classList.remove("fade");
    next_image.classList.remove("fade");
    prev_image.classList.remove("fade");
  }, 1000);
});


window.addEventListener("DOMContentLoaded", () => {
  const active_dot = document
    .getElementsByClassName("dot")
    [index]

    active_dot.classList.add("active");


  let interval = setInterval(next_slide, 3000);

  // automatic movement for the slider
  gallery.addEventListener("mouseover", () => {
    clearInterval(interval);
  });

  gallery.addEventListener("mouseleave" , () => {
    interval = setInterval(next_slide, 3000);
  });

  next.addEventListener("click", next_slide);
  prev.addEventListener("click", prev_slide);
});


let clientx = 0
let diff = 0

// handle touch movement
main_image.addEventListener('touchstart', (e) => {
 clientx = e.touches[0].clientX
})

main_image.addEventListener("touchmove", (e) => {
  let x = e.touches[0].clientX
  diff = x - clientx
})

main_image.addEventListener("touchend", () => {
  if (diff > 0) {
    prev_slide();
  }
  if (diff < 0) {
    next_slide();
  }
})