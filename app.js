  /* 홈 : 글자 하나씩 */
  /*
  const homeText = document.querySelector('.home_title');
  const content = 'console.log("hello, eunseo-world!")';
  let count = 0;
  function typing() {
    homeText.innerText += content[count++];
    if (count > content.length) {
      homeText.innerText = '';
      count = 0;
      
    }
  }
  setInterval(typing, 100);*/
  
  
  /*모달창*/
  const modal1 = document.querySelector('#modal_personality');
  const keyword1 = document.querySelector('#personality');
  keyword1.addEventListener("click", (e) => {
    console.log("hihi");
    modal1.style.display = "flex";
  });

  modal1.addEventListener("click", (e)=> {
    console.log(e.target.className);
    
    if (e.target.className == 'modal') {
      modal1.style.display = "none";
    }
  });



  const modal2 = document.querySelector('#modal_education');

  const keyword2 = document.querySelector('#education');
  keyword2.addEventListener("click", (e) => {
    console.log("hihi");
    modal2.style.display = "flex";
  });

  modal2.addEventListener("click", (e)=> {
    console.log(e.target.className);
    
    if (e.target.className == 'modal') {
      modal2.style.display = "none";
    }
  });

  const modal3 = document.querySelector('#modal_study');

  const keyword3 = document.querySelector('#study');
  keyword3.addEventListener("click", (e) => {
    console.log("hihi");
    modal3.style.display = "flex";
  });

  modal3.addEventListener("click", (e)=> {
    console.log(e.target.className);
    
    if (e.target.className == 'modal') {
      modal3.style.display = "none";
    }
  });


  const modal4 = document.querySelector('#modal_motivation');

  const keyword4 = document.querySelector('#motivation');
  keyword4.addEventListener("click", (e) => {
    console.log("hihi");
    modal4.style.display = "flex";
  });

  modal4.addEventListener("click", (e)=> {
    console.log(e.target.className);
    
    if (e.target.className == 'modal') {
      modal4.style.display = "none";
    }
  });


  const modal5 = document.querySelector('#modal_likes');

  const keyword5 = document.querySelector('#likes');
  keyword5.addEventListener("click", (e) => {
    console.log("hihi");
    modal5.style.display = "flex";
  });

  modal5.addEventListener("click", (e)=> {
    console.log(e.target.className);
    
    if (e.target.className == 'modal') {
      modal5.style.display = "none";
    }
  });




  

/* 캐러셀 만들기 */
const cellSize = document.querySelectorAll(".cell").length;
console.log(cellSize);
let current = 0;

const carousel = document.querySelector(".carousel");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");
console.log("current" + current);
//다음 버튼을 누르면 다음 사진으로 넘어가는 캐러셀 구조
nextBtn.addEventListener("click", (e) => {
  current = (current + 1)%cellSize;
  carousel.style.transform = `translateX(${(current) * -370}px)`;
  console.log("next 버튼 동작, current" + current);
})

//이전 버튼을 누르면 전에 있는 사진으로 넘어가는 캐러셀 구조
prevBtn.addEventListener("click", (e) => {
    carousel.style.transform = `translateX(${(current) * -370}px)`;
    current = current - 1;
    if (current < 0) {
      current = cellSize-1;
    }
    /*carousel.style.transform = `translateX(${(current) * -370}px)`;*/
    console.log("prev 버튼 동작, current" + current);
  }
)

