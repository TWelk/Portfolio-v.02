// This is the eventlistener for developer card to flip
const card = document.querySelector(".card__inner")
const cardMore = document.querySelector(".more")
const cardBack = document.querySelector(".back")
const bCard = document.querySelector(".businessCard__inner")

cardMore.addEventListener("click", function() {
    card.classList.toggle("is-flipped")
})


cardBack.addEventListener("click", function() {
    card.classList.toggle("is-flipped")
})

bCard.addEventListener("click", function() {
    bCard.classList.toggle("is-flipped")
})

const slideShow = document.querySelector(".slideShow")
var carousel = document.getElementById('carousel'),
    pics = ["./Assets/Images/Anonymous Alcoholics.jpg", "./Assets/Images/WeatherDashboard.jpg", "./Assets/Images/CodeQuiz.jpg", "./Assets/Images/RockPaperScissors.jpg", "./Assets/Images/PassGen.jpg"],
    items = ['https://grdnd.github.io/group-project', 'https://twelk.github.io/WeatherDashboard/', 'https://twelk.github.io/CodeQuiz/', 'https://twelk.github.io/rpsproject', 'https://twelk.github.io/PassGen-v.02'];
nextbtn = document.getElementById('nextButton'),
    prevbtn = document.getElementById('prevButton'),
    paginator = document.getElementById('carousel-pagination'),
    pageCounter = 0;

function makeList(arr, arr2) {
    var list = document.createElement('ul'),
        pager = document.createElement('ul'),
        itemCount = arr.length;

    for (var i = 0; i < itemCount; i++) {
        var link = document.createElement('a'),
            item = document.createElement('img'),
            circle = document.createElement('li');
        link.href = arr[i];
        item.src = arr2[i]
        link.appendChild(item)
        list.appendChild(link);
        pager.appendChild(circle);

        paginator.appendChild(pager);
    }
    list.setAttribute('id', 'carousel-items');
    pager.setAttribute('id', 'carousel-pagination-items');
    pager.childNodes[0].classList.add('active-circle');

    return list;
}
carousel.appendChild(makeList(items, pics));

function nextSlide() {
    var listItems = document.getElementById('carousel-items'),
        firstItem = listItems.childNodes[0],
        pageList = document.getElementById('carousel-pagination-items');
    listItems.insertBefore(firstItem, listItems.lastChild.nextSibling);

    // change to next pagination circle
    pageList.childNodes[pageCounter].classList.remove('active-circle');
    pageCounter++;
    if (pageCounter > items.length - 1) {
        pageCounter = 0;
    }
    pageList.childNodes[pageCounter].classList.add('active-circle');

}

function prevSlide() {
    var listItems = document.getElementById('carousel-items');
    var lastItem = listItems.lastChild,
        pageList = document.getElementById('carousel-pagination-items');
    listItems.insertBefore(lastItem, listItems.childNodes[0]);

    // change to next pagination circle
    pageList.childNodes[pageCounter].classList.remove('active-circle');
    pageCounter--;
    if (pageCounter < 0) {
        pageCounter = items.length - 1;
    }
    pageList.childNodes[pageCounter].classList.add('active-circle');
}

// add button events for next and previous
nextbtn.addEventListener('click', nextSlide, false);
prevbtn.addEventListener('click', prevSlide, false);

setInterval(function() {
        if (slideShow.matches(':hover')) {
            clearInterval()
        } else {
            nextSlide()
        }
    },
    3000);
