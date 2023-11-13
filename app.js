  /*모달창*/
  const modal = document.querySelector('.modal');
  const btnOpenModal=document.querySelector('.btn-open-modal');

  const keywordList = document.querySelectorAll('.words');

  keywordList.forEach(function(item) {
    item.addEventListener('click', function() {
      console.log("hihi");
      modal.style.display = "flex";
    });
  });

  modal.addEventListener("click", (e)=> {
    console.log(e.target.className);
    
    if (e.target.className == 'modal') {
      modal.style.display = "none";
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
    carousel.style.transform = `translateX(${(current) * -370}px)`;
    console.log("prev 버튼 동작, current" + current);
  }
)