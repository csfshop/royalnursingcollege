let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;
next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active =active + 1 >= countItem ? 0 : active + 1;
    other_1 =active - 1 < 0 ? countItem -1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
}
prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}
const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if(itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if(itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if(itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        // e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        // e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 20000);
}
let autoPlay = setInterval(() => {
    next.click();
}, 20000);



const flipContainer = document.getElementById('carousel_div');
let startX = 0;
const swipeThreshold = 50; // Minimum px difference to register a swipe

// Record the starting touch position
flipContainer.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

// Compare the starting and ending positions on touchend
flipContainer.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  const swipeDistance = endX - startX;

  if (swipeDistance > swipeThreshold) {
   
    console.log('right')


    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active =active + 1 >= countItem ? 0 : active + 1;
    other_1 =active - 1 < 0 ? countItem -1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();


  } else if (swipeDistance < -swipeThreshold) {
   
    console.log('left')

    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
  }
});
// Compare the starting and ending positions on touchend





// number counts

let allValues = document.querySelectorAll(".home_counter_value");

// Start the forEach loop for displaying the values
function home_count_fn(){
  allValues.forEach((singleValue) => {
  let startValue = 0;
  let endValue = parseInt(singleValue.getAttribute("data-value"));
  let duration = Math.floor(2000 / endValue);

  // Counter for increaing the values & display
  let counter = setInterval(function () {
    startValue += 1;
    singleValue.textContent = startValue;
    // Clearing the interval
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});
}

// 1. Grab all the elements you want to watch
    const boxes = document.querySelectorAll('.home_counts_div');

    // 2. Create the observer
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
         
          console.log('it here')
          home_count_fn()
          
        }
      });
    }, {
      root: null,           // viewport
      threshold: 0.1        // 10% visible
    });

    // 3. Tell the observer which elements to watch
    boxes.forEach(box => observer.observe(box));






// testimonials



const testimonials = [
            {
                quote: "I was nervous on day one, but the hands-on labs and caring instructors made me a confident, compassionate nurse.",
                name: "Akosua Mensah",
                designation: "Diploma in Nursing",
                src:'images/gg_1.jpg',
            },
            {
                quote: "Instructors treated me like family, offering extra help and career advice whenever I needed it.",
                name: "Yaa Badu",
                designation: "Diploma in Medical Laboratory Tech",
                src: "images/gg_2.jpg",
            },
            {
                quote: "The up-to-date curriculum and clinical rotations had me fully prepared for my first hospital job.",
                name: "Ama Serwaa",
                designation: "Health Care Assistant",
                src: "images/gg_3.jpg",
            },
        ];

        let activeIndex = 0;
        const imageContainer = document.getElementById('image-container');
        const nameElement = document.getElementById('name');
        const designationElement = document.getElementById('designation');
        const quoteElement = document.getElementById('quote');
        const prevButton = document.getElementById('prev-button');
        const nextButton = document.getElementById('next-button');

        function updateTestimonial(direction) {
            const oldIndex = activeIndex;
            activeIndex = (activeIndex + direction + testimonials.length) % testimonials.length;

            testimonials.forEach((testimonial, index) => {
                let img = imageContainer.querySelector(`[data-index="${index}"]`);
                if (!img) {
                    img = document.createElement('img');
                    img.src = testimonial.src;
                    img.alt = testimonial.name;
                    img.classList.add('testimonial-image');
                    img.dataset.index = index;
                    imageContainer.appendChild(img);
                }

                const offset = index - activeIndex;
                const absOffset = Math.abs(offset);
                const zIndex = testimonials.length - absOffset;
                const opacity = index === activeIndex ? 1 : 0.7;
                const scale = 1 - (absOffset * 0.15);
                const translateY = offset === -1 ? '-20%' : offset === 1 ? '20%' : '0%';
                const rotateY = offset === -1 ? '15deg' : offset === 1 ? '-15deg' : '0deg';

                img.style.zIndex = zIndex;
                img.style.opacity = opacity;
                img.style.transform = `translateY(${translateY}) scale(${scale}) rotateY(${rotateY})`;
            });

            nameElement.textContent = testimonials[activeIndex].name;
            designationElement.textContent = testimonials[activeIndex].designation;
            quoteElement.innerHTML = testimonials[activeIndex].quote.split(' ').map(word => `<span class="word">${word}</span>`).join(' ');

            animateWords();
        }

        function animateWords() {
            const words = quoteElement.querySelectorAll('.word');
            words.forEach((word, index) => {
                word.style.opacity = '0';
                word.style.transform = 'translateY(10px)';
                word.style.filter = 'blur(10px)';
                setTimeout(() => {
                    word.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out, filter 0.2s ease-in-out';
                    word.style.opacity = '1';
                    word.style.transform = 'translateY(0)';
                    word.style.filter = 'blur(0)';
                }, index * 20);
            });
        }

        function handleNext() {
            updateTestimonial(1);
        }

        function handlePrev() {
            updateTestimonial(-1);
        }

        prevButton.addEventListener('click', handlePrev);
        nextButton.addEventListener('click', handleNext);

        // Initial setup
        updateTestimonial(0);

        // Autoplay functionality
        const autoplayInterval = setInterval(handleNext, 5000);

        // Stop autoplay on user interaction
        [prevButton, nextButton].forEach(button => {
            button.addEventListener('click', () => {
                clearInterval(autoplayInterval);
            });
        });


// end testimonials




// image gallery
// Floating caption
const imgContent = document.querySelectorAll(".gallery__image__caption");
var x, y;

function showImgContent(e) {
    for (var i = 0; i < imgContent.length; i++) {
        x = e.pageX;
        y = e.pageY;
        imgContent[i].style.transform = `translate(${x}px, ${y}px)`;
    }
}

document.addEventListener("mousemove", showImgContent);

// Lightbox modal
const body = document.body;
const item_s = document.querySelectorAll(".gallery__item");
const modal = document.createElement("section");
const modalImg = document.createElement("img");
const modalPrev = createButton(prevItem);
const modalNext = createButton(nextItem);
const modalClose = createButton(closeModal);
let currentItem = 0;
let modalInstance;

modal.classList.add("gallery__modal");
modalPrev.classList.add("gallery__navigation--prev");
modalNext.classList.add("gallery__navigation--next");
modalClose.classList.add("gallery__navigation--close");

function createButton(action) {
    const button = document.createElement("button");
    button.addEventListener("click", action);
    return button;
}

function prevItem() {
    currentItem = (currentItem - 1 + item_s.length) % item_s.length;
    showModal();
}

function nextItem() {
    currentItem = (currentItem + 1) % item_s.length;
    showModal();
}

function closeModal() {
    modal.remove();
}

function showModal() {
    modalImg.image = item_s[currentItem].querySelector("img");
    modalImg.src = modalImg.image.src;
    modalImg.alt = modalImg.image.alt;
    modal.append(modalImg, modalPrev, modalNext, modalClose);
    document.body.appendChild(modal);
}

item_s.forEach(function (image) {
    image.addEventListener(
        "click",
        function () {
            /* Detect the image class name */
            var overlayOpen = this.className === "gallery__item";

            /**
             * Storing a reference to the opening image
             */
            if (overlayOpen) {
                modalInstance = this;
            }

            /**
             * Toggle the aria-hidden state on the overlay and the
             * no-scroll class on the body
             */
            modal.setAttribute("aria-hidden", !overlayOpen);
            body.classList.toggle("noscroll", overlayOpen);

            /**
             * Run the function that creates the modal content
             * and that appends it to the body
             */
            showModal();

            /**
             * On some mobile browser when the overlay was previously
             * opened and scrolled, if you open it again it doesn't
             * reset its scrollTop property
             */
            modal.scrollTop = 0;

            /**
             * Forcing focus for Assistive technologies.
             * Note that:
             * - if the modal has just a phrase and a button move the
             *   focus on the button,
             * - if the modal has a long text inside (e.g. a privacy
             *   statement) move the focus on the first heading inside
             *   the modal,
             * - otherwise just focus the modal.
             *
             * When you close the overlay restore the focus on the
             * button that opened the modal.
             */
            if (overlayOpen) {
                modal.focus();
            } else {
                modalInstance.focus();
                modalInstance = null;
            }
        },
        false
    );
});

/**
 * Attach class `noscroll` to the body to prevent background scrolling
 * and set `aria` attributes for accessible devices
 */
document.body.addEventListener("keyup", (ev) => {
    if (ev.key === "Escape" && modal.getAttribute("aria-hidden") === "false") {
        modal.setAttribute("aria-hidden", "true");
        body.classList.toggle("noscroll", false);
        modalInstance.focus();
        modalInstance = null;
    }
});



// end image gallery







// faq home

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      const answer = item.querySelector('.faq-answer');

      question.addEventListener('click', () => {
        const isOpen = answer.classList.contains('open');

        // Close all open answers
        document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
        document.querySelectorAll('.eye.close').forEach(a => a.classList.remove('active'));
        document.querySelectorAll('.eye.open').forEach(a => a.classList.add('active'));
        document.querySelectorAll('.faq-question').forEach(a => a.classList.remove('active'));
        

        // Toggle current item
        if (!isOpen) {
          answer.classList.add('open');
            const specials_close = question.querySelector('.eye.close');
            const specials_open = question.querySelector('.eye.open');
            question.classList.add('active')
            specials_open.classList.remove('active')
            specials_close.classList.add('active')


        }
      });
    });



// end faq home








