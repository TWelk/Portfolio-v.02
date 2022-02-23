// This is the eventlistener for developer card to flip
const card = document.querySelector(".card__inner")
const cardMore = document.querySelector(".more")
const cardBack = document.querySelector(".back")
const resume = document.querySelector("#resLink")

cardMore.addEventListener("click", function() {
    card.classList.toggle("is-flipped")
})


cardBack.addEventListener("click", function() {
    card.classList.toggle("is-flipped")
})

const slideShow = document.querySelector(".slideShow")
var carousel = document.getElementById('carousel'),
    slideTitle = document.querySelector(".slideTiltes")
titles = ["Anonymous Alcoholics", "Weather Dashboard", "Code Quize", "Rock, Paper, Sicissors", "Password Generator"],
    githubRepos = ["https://github.com/grdnd/group-project", "https://github.com/TWelk/WeatherDashboard", "https://github.com/TWelk/CodeQuiz", "https://github.com/TWelk/rpsproject", "https://github.com/TWelk/PassGen-v.02"],
    pics = ["./Assets/Images/Anonymous Alcoholics.jpg", "./Assets/Images/WeatherDashboard.jpg", "./Assets/Images/CodeQuiz.jpg", "./Assets/Images/RockPaperScissors.jpg", "./Assets/Images/PassGen.jpg"],
    items = ['https://grdnd.github.io/group-project', 'https://twelk.github.io/WeatherDashboard/', 'https://twelk.github.io/CodeQuiz/', 'https://twelk.github.io/rpsproject', 'https://twelk.github.io/PassGen-v.02'],
    nextbtn = document.getElementById('nextButton'),
    prevbtn = document.getElementById('prevButton'),
    paginator = document.getElementById('carousel-pagination'),
    pageCounter = 0;

function makeList(arr, arr2, arr3, arr4) {
    var list = document.createElement('ul'),
        tList = document.createElement('ul'),
        pager = document.createElement('ul'),
        itemCount = arr.length;

    for (var i = 0; i < itemCount; i++) {
        var link = document.createElement('a'),
            link2 = document.createElement('a'),
            item = document.createElement('img'),
            gitLink = document.createElement('a'),
            gitText = document.createElement('p'),
            gitApp = document.createElement('p'),
            head2 = document.createElement('p'),
            head = document.createElement('li')
        circle = document.createElement('li');
        link.href = arr[i];
        link2.href = arr[i];
        item.src = arr2[i];
        gitLink.href = arr4[i];
        gitText.textContent = "GitHub/Repo";
        gitApp.textContent = "Application";
        gitLink.appendChild(gitText);
        link2.appendChild(gitApp);
        head2.textContent = arr3[i];
        head.append(head2, gitLink, link2)
        link.appendChild(item);
        list.appendChild(link);
        tList.appendChild(head)
        slideTitle.append(tList)
        pager.appendChild(circle);
        paginator.appendChild(pager);
    }

    list.setAttribute('id', 'carousel-items');
    tList.setAttribute('id', 'projectNames');
    tList.childNodes[0].classList.add('active-circle');
    pager.setAttribute('id', 'carousel-pagination-items');
    pager.childNodes[0].classList.add('active-circle');

    return list;
}
carousel.appendChild(makeList(items, pics, titles, githubRepos));

function nextSlide() {
    var listItems = document.getElementById('carousel-items'),
        firstItem = listItems.childNodes[0],
        titleList = document.getElementById('projectNames');
    pageList = document.getElementById('carousel-pagination-items');
    listItems.insertBefore(firstItem, listItems.lastChild.nextSibling);

    // change to next pagination circle
    titleList.childNodes[pageCounter].classList.remove('active-circle');
    pageList.childNodes[pageCounter].classList.remove('active-circle');
    pageCounter++;
    if (pageCounter > items.length - 1) {
        pageCounter = 0;
    }
    titleList.childNodes[pageCounter].classList.add('active-circle');
    pageList.childNodes[pageCounter].classList.add('active-circle');

}

function prevSlide() {
    var listItems = document.getElementById('carousel-items'),
        lastItem = listItems.lastChild,
        pageList = document.getElementById('carousel-pagination-items');
    titleList = document.getElementById('projectNames');
    listItems.insertBefore(lastItem, listItems.childNodes[0]);

    // change to next pagination circle
    titleList.childNodes[pageCounter].classList.remove('active-circle');
    pageList.childNodes[pageCounter].classList.remove('active-circle');
    pageCounter--;
    if (pageCounter < 0) {
        pageCounter = items.length - 1;
    }
    titleList.childNodes[pageCounter].classList.add('active-circle');
    pageList.childNodes[pageCounter].classList.add('active-circle');
}

// add button events for next and previous
nextbtn.addEventListener('click', nextSlide, false);
prevbtn.addEventListener('click', prevSlide, false);

resume.addEventListener("click", function() {
    document.location.href = "./Tyler Welker - Resume2.pdf"
})