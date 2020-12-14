'use strict'

const activeClass = 'active'

document.onload = check()

function check() {
  const allSlideElement = document.querySelectorAll('.js-slider.slider-home')
  const listOfLeftArrows = document.querySelectorAll(
    '.js-prev.slider-arrows.slider-arrows--prev'
  )
  const listOfRightArrows = document.querySelectorAll(
    '.js-next.slider-arrows.slider-arrows--next'
  )
  ;[].forEach.call(allSlideElement, (item, index) => {
    console.log(item.children.length)
    if (item.children.length > 1) {
      listOfLeftArrows[index].style.display = 'block'
      listOfRightArrows[index].style.display = 'block'
    }
  })
}

function slideBtn(id, dir) {
  //debugger;
  let i = 0
  const slide = document.querySelectorAll(`#${id} .js-slider .js-slider-item`)
  for (let y = 0; y < slide.length; y++) {
    if (slide[y].classList.contains(activeClass)) i = y
  }
  slide[i].classList.remove(activeClass)

  if (dir === 'prev') {
    i--
    if (i < 0) {
      i = slide.length - 1
    }
  } else if (dir === 'next') {
    i++
    if (i >= slide.length) {
      i = 0
    }
  }

  slide[i].classList.add(activeClass)

  return false
}
