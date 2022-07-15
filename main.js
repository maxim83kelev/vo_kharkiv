/*about*/
const text = document.querySelector('.about p');

const splitText = (el) => {
	el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
  return `<span class="word">` +
			m.replace(/(-|#|@)?\S(-|#|@)?/g, "<span class='letter'>$&</span>") +
			`</span>`;
	});
	return el;
};
splitText(text);

gsap.from(".letter", {
    opacity: 0,
    //scale: .1,
    duration:.1,
    delay:1,
    //x: random(-500, 500),
    //y: random(-500, 500),
    //z:random(-500,500),
    repeat: Infinity,
    repeatDelay: 60,
    stagger: {
        each: .1,
        //from:'random',
        //repeat: 2,
        yoyo:true,
    }
});
gsap.from(".main__title h1", {
  opacity: 0,
  y: 55,
  duration:5,
  delay:1.5,
  }
);
gsap.from("#main__link__Left", {
  opacity: 0,
  x: 55,
  duration:3,
  delay:2,
  }
);
gsap.from("#main__link__Right", {
  opacity: 0,
  x: -55,
  duration:3,
  delay:2,
  }
);
gsap.from("#card__two", {
  opacity: 0,
  x: -320,
  duration:3,
  delay:2,
  }
);



/*counter*/
for ( let i of document.querySelectorAll(".number") ) {

    let numberTop = i.getBoundingClientRect().top,
        start = +i.innerHTML,
        end = +i.dataset.max;
  
    window.addEventListener('scroll', function onScroll() {
      if(window.pageYOffset > numberTop - window.innerHeight / 2) {
        this.removeEventListener('scroll', onScroll);
        let interval = this.setInterval(function() {
          i.innerHTML = ++start;
          if(start == end) {
            clearInterval(interval);
          }
      }, 1);
      }
    });
}
/*form validate */
let validation = new JustValidate('#form')
let selector = document.querySelector('#tel')
let im = new Inputmask("+389999999999")
im.mask(selector)



validation.addField("#name", [
  {
    rule: 'required',
    errorMessage: 'Поле не заповнене'
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Вас насправді так звати?'
  },
])
.addField("#tel", [
  {
    validator: (value) => {
      const tel = selector.inputmask.unmaskedvalue();
      return Boolean(Number(tel) && tel.length > 0);
    },
    errorMessage: 'Поле не заповнене'
  },
  {
    validator: (value) => {
      const tel = selector.inputmask.unmaskedvalue();
      return Boolean(Number(tel) && tel.length === 10);
    },
    errorMessage: 'Поле заповнене не вірно'
  },
])

.addField("#message", [
  {
    rule: 'required',
    errorMessage: 'Поле не заповнене'
  },
  {
    rule: 'minLength',
    value: 10,
    errorMessage: 'Введіть мінімум 10 символів'
  },
])
