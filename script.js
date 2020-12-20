'use strict';

const modal = document.querySelector('.modal');//class 명 : modal
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');//button 3개 all

const openModal = function () {
    console.log('button clicked');
    modal.classList.remove('hidden')//hidden 클래스 제거하기 it's for open the popup
    overlay.classList.remove('hidden');//hidden 클래스 제거하기 it's for open the popup
    //현재 style.css에서는 display:none으로 선언되어 있으며 
    //이걸 visuable 하게 하려면 block 이라고 선언해야함!
    //modal.style.display = 'block';
}


const closeModal = function () {
    modal.classList.add('hidden');//hidden class back on!
    overlay.classList.add('hidden');//hidden class back on!
};


for (let i = 0; i < btnsOpenModal.length; i++)
    btnsOpenModal[i].addEventListener('click', openModal);


btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);


//일단 아무 키보드 자판을 누르면 눌려졌다고 console창에 띄어짐..
//esc 키 누르면 팝업창 사라지게 하기
document.addEventListener('keydown', function (e) {
    console.log(e.key);// 워...뭘 눌렸는지 콘솔창에서 다 알수있따.... 워....
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        //if the modal doesn't cantain the hidden class, then close the modal
        //내가 선언한 특정 키보드버튼을 누르면 popup창이 사라지는것
        closeModal();//메소드!!!(이미 위에서 const closeModal 위에 선언했음!!)
    }
});

/*
/////중복되는 코드들이 많다...////////////////////////////////////
//popup창에 나오는 X표 누르면 창이 사라지게 하는 기능 활성화시키기
btnCloseModal.addEventListener('click', function () {
    modal.classList.add('hidden');//hidden class back on!
    overlay.classList.add('hidden');//hidden class back on!
});
//popup 창에 나오는 X표 안누르고 팝업창 외 화면클릭시 자동으로 꺼지게 하는기능
overlay.addEventListener('click', function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
});
*/