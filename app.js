  const modal = document.querySelector('.modal');
  const btnOpenModal=document.querySelector('.btn-open-modal');

  const words = document.querySelector('.words');


  modal.addEventListener("click", (e)=> {
    console.log(e.target.className);
    
    if (e.target.className == 'modal') {
      modal.style.display = "none";
    }
  });

//word를 클릭하면 모달이 떠 있음
  words.addEventListener("click", (e) => {
    console.log("hi");
    modal.style.display = "flex";
  });

/*
  ('a').click(function(event){
    event.preventDefault(); 
  });*/