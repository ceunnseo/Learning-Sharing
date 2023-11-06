  const modal = document.querySelector('.modal');
  const btnOpenModal=document.querySelector('.btn-open-modal');

  btnOpenModal.addEventListener("click", ()=>{
      modal.style.display="flex";
  });
  modal.addEventListener("click", (e)=> {
    if (e.target.className != 'modal_body') {
      modal.style.display = "none";
    }
  });
  

/*
  ('a').click(function(event){
    event.preventDefault(); 
  });*/