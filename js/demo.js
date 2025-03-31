{
	setTimeout(() => document.body.classList.add('render'), 60);
	const navdemos = Array.from(document.querySelectorAll('nav.demos > .demo'));
	const total = navdemos.length;
	const current = navdemos.findIndex(el => el.classList.contains('demo--current'));
	const navigate = (linkEl) => {
		document.body.classList.remove('render');
		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
	};
	navdemos.forEach(link => link.addEventListener('click', (ev) => {
		ev.preventDefault();
		navigate(ev.target);
	}));
	document.addEventListener('keydown', (ev) => {
		const keyCode = ev.keyCode || ev.which;
		let linkEl;
		if ( keyCode === 37 ) {
			linkEl = current > 0 ? navdemos[current-1] : navdemos[total-1];
		}
		else if ( keyCode === 39 ) {
			linkEl = current < total-1 ? navdemos[current+1] : navdemos[0];
		}
		else {
			return false;
		}
		navigate(linkEl);
	});
}

// balls

// Some random colors
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 50;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 95)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 85)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;

  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});
