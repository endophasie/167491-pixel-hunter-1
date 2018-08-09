const RIGHT_ARROW = 37;
const LEFT_ARROW = 39;

const mainContainer = document.querySelector('#main');

const selectSlide = (slide) => {
  mainContainer.innerHTML = '';
  mainContainer.appendChild(slide.cloneNode(true));
};

const screens = Array.from(document.querySelectorAll('template')).map((it) => it.content);

let current = 0;
const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(screens[current]);
};

document.addEventListener('keydown', (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
  }
});

document.addEventListener('click', (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
  }
});

select(0);

const arrowsTpl = `
	<div class="arrows__wrap">
	  <style>
	    .arrows__wrap {
	      position: absolute;
	      top: 95px;
	      left: 50%;
	      margin-left: -56px;
	    }
	    .arrows__btn {
	      background: none;
	      border: 2px solid black;
	      padding: 5px 20px;
	    }
	  </style>
	  <button class="arrows__btn js-btn-prev"><-</button>
	  <button class="arrows__btn js-btn-next">-></button>
	</div>`;

document.body.insertAdjacentHTML('beforeend', arrowsTpl);

const arrows = document.querySelector('.arrows__wrap');

arrows.addEventListener('click', (evt) => {
	evt.target.classList.contains('js-btn-prev') ? select(current - 1) : select(current + 1);
});
