
// zoom in intersection
console.log('heel tran')
const all_zoom_hidden = document.querySelectorAll('.zoom_hidden')

const zoomInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('zoom_show')
        
        
      }else{
        entry.target.classList.remove('zoom_show')

      }
    });
  }, {
    threshold: 0.1   // fire when 10% of the element is visible
  });

all_zoom_hidden.forEach((el)=>{
    zoomInObserver.observe(el)
})

// end zoom in




// rotate y in intersection

const all_rotate_hidden = document.querySelectorAll('.rotate_hidden')

const rotateInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('rotate_show')
        
        
      }else{
        entry.target.classList.remove('rotate_show')
      }
    });
  }, {
    threshold: 0.1   // fire when 10% of the element is visible
  });

all_rotate_hidden.forEach((el)=>{
    rotateInObserver.observe(el)
})

// end rotate y in




// bounce y in intersection

const all_bounce_hidden = document.querySelectorAll('.bounce_hidden')

const bounceInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('bounce_show')
        
        
      }else{
        entry.target.classList.remove('bounce_show')
      }
    });
  }, {
    threshold: 0.1   // fire when 10% of the element is visible
  });

all_bounce_hidden.forEach((el)=>{
    bounceInObserver.observe(el)
})

// end bounce



// slide_bottom y in intersection

const all_slide_bottom_hidden = document.querySelectorAll('.slide_bottom_hidden')

const slide_bottomInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('slide_bottom_show')
        
        
      }else{
        entry.target.classList.remove('slide_bottom_show')
      }
    });
  }, {
    threshold: 0.1   // fire when 10% of the element is visible
  });

all_slide_bottom_hidden.forEach((el)=>{
    slide_bottomInObserver.observe(el)
})

// end slide bottom



// slide_up y in intersection

const all_slide_up_hidden = document.querySelectorAll('.slide_up_hidden')

const slide_upInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('slide_up_show')
        
        
      }else{
        entry.target.classList.remove('slide_up_show')
      }
    });
  }, {
    threshold: 0.1   // fire when 10% of the element is visible
  });

    all_slide_up_hidden.forEach((el)=>{
    slide_upInObserver.observe(el)
})

// end slide up



// flip y in intersection

const all_flip_hidden = document.querySelectorAll('.flip_hidden')

const flipInObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add('flip_show')
        
        
      }else{
        entry.target.classList.remove('flip_show')
      }
    });
  }, {
    threshold: 0.1   // fire when 10% of the element is visible
  });

    all_flip_hidden.forEach((el)=>{
    flipInObserver.observe(el)
})

// end flip