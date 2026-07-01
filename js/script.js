// ハンバーガー
$(function() {
  $('.hamburger').click(function() {

    $('.menu').toggleClass('open');

    $(this).toggleClass('active');
  });
});

// モーダルーダル
const thumbnails = document.querySelectorAll('.thumbnail');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = thumbnail.src;
  });
});

modal.addEventListener('click', () => {
  modal.style.display = 'none';
});

