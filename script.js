const card1 = document.getElementById('card-1')
const card2 = document.getElementById('card-2')
const card3 = document.getElementById('card-3')

card1.addEventListener('click', function () {
    this.classList.add('active');
    card2.classList.remove('active')
    card3.classList.remove('active')
    

})
card2.addEventListener('click', function () {
    this.classList.add('active');
    card1.classList.remove('active')
    card3.classList.remove('active')
})
card3.addEventListener('click', function () {
    this.classList.add('active');
    card2.classList.remove('active')
    card1.classList.remove('active')
})