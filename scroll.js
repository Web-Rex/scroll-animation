const img = [];

window.onload = () => {
  for (let i = 0; i < 202; i++) {
    let name = `./img/Comp 1_00000.png`;

    if (i < 10) {
      name = `./img/Comp 1_0000${i}.png`;
    } else if ((i < 100) & (i >= 10)) {
      name = `./img/Comp 1_000${i}.png`;
    } else {
      name = `./img/Comp 1_00${i}.png`;
    }

    img.push(name);
  }
};

window.onscroll = () => {
  const up = document.querySelector(".up");
  const down = document.querySelector(".down");

  // if (Math.round(this.scrollY) < 490) {
  // up.style.transform = `translateY(${Math.round(this.scrollY)}px)`;
  // down.style.transform = `translateY(-${Math.round(this.scrollY)}px)`;
  // }
  // }

  document.querySelector(".img").src = img[Math.round(this.scrollY)];

  console.log(img[Math.round(this.scrollY)]);
};
