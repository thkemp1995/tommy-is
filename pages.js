//data for holding which page we are on
let pageNumber = 0

//have hte content for the "pages"

const pages = [
  {
    copy: 'a Long Island-based web designer',
    background: '#edc7a9',
    circle: '#3e78ed'
  },
  {
    copy: "Mr Hazeltine's biggest fan",
    background: '#a1fffe',
    circle: '#e34a47'
  },
  {
    copy: 'looking for a job right now',
    background: '#d3c7f3',
    circle: '#f7fe00'
  },
  {
    copy: 'letting you <a href="http://www.tommykdesigns.com">download his resume</a>',
    background: '#faffb8',
    circle: '#b472e6'
  }
]

//select the relevant tags from html
const nextTag = document.querySelector('footer img.next')
const outputTag = document.querySelector('h2')
const previousTag = document.querySelector('footer img.prev')
const randomTag = document.querySelector('footer img.random')
const circleTag = document.querySelector('section div.circle')
const bodyTag = document.querySelector('body')

//make a next function to increase the pageNumber
const next = function() {
  pageNumber = pageNumber + 1

  if (pageNumber > pages.length - 1) {
    pageNumber = 0
  }

  updateSection()
}

//make a previous function to decrease the pageNumber
const previous = function() {
  pageNumber = pageNumber - 1

  if (pageNumber < 0) {
    pageNumber = pages.length - 1
  }

  updateSection()
}

//pick a random slide
const random = function() {
  pageNumber = Math.floor(Math.random() * pages.length)

  updateSection()
}
// this will update the section's content and style
const updateSection = function() {
  outputTag.innerHTML = pages[pageNumber].copy
  circleTag.style.backgroundColor = pages[pageNumber].circle
  bodyTag.style.backgroundColor = pages[pageNumber].background
}

//on click of nextTag, run this
nextTag.addEventListener('click', function() {
  next()
})

//on click of previousTag, run this
previousTag.addEventListener('click', function() {
  previous()
})

// on click of randomTag, run this

randomTag.addEventListener('click', function() {
  random()
})

// when a user presses a key, check for arrow left or right
// and do next or prev accordingly
document.addEventListener('keyup', function(event) {
  // if key being pressed is ArrowRight
  if (event.key == 'ArrowRight') {
    next()
  }

  //if key being pressed is ArrowLeft
  if (event.key == 'ArrowLeft') {
    prev()
  }
})
