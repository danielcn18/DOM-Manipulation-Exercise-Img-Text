var People = [
    {title: 'Ada Lovelace',
     img: 'images/ada.jpeg',
     
    },
    {title: 'Alan Turing',
     img: 'images/alan.jpg',
    }];

for (var i = 0; i < People.length; i++) {
    var PeopleP = document.createElement('div');
    var PeopleImg = document.createElement('img');
    PeopleImg.src=People[i].img;
    PeopleImg.style.width="300px";
    PeopleImg.style.height="400px";
    PeopleP.appendChild(PeopleImg)
    var PeopleTitle = document.createTextNode(People[i].title);
    PeopleP.appendChild(PeopleTitle);
    document.body.appendChild(PeopleP);
    
}