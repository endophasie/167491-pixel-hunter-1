import {render} from './js/util.js';

const template = `
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
const element = render(template);

export default element;
