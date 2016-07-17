var menu = {
    items: [{
        title: 'item1',
        link: '#'
    }, {
        title: 'item 2',
        link: '#'
    }, {
        title: 'item 3',
        link: '#',
        children: [{
            title: 'child3 item1',
            link: '#'
        }, {
            title: 'child3 item 2',
            link: '#'
        }]
    }, {
        title: 'item 4',
        link: '#',
        children: [{
            title: 'child4 item1',
            link: '#'
        }, {
            title: 'child4 item 2',
            link: '#'
        }]

    }, {
        title: 'item 5',
        link: '#'
    }, {
        title: 'item 6',
        link: '#'
    }, {
        title: 'item 7',
        link: '#'
    }, {
        title: 'item 8',
        link: '#'
    }, {
        title: 'item 8',
        link: '#'
    }, {
        title: 'item 9',
        link: '#'
    }, {
        title: 'item 10',
        link: '#'
    }]
};

function render(items) {
    var nodes = items.map(function(item) {
        var a = '<a href="' + item.link + '">' + item.title + '</a>';

        if (item.hasOwnProperty('children') && item.children) {
            return '<li>' + a + render(item.children) + '</li>';
        }

        return '<li>' + a + '</li>';
    });

    return '<ul>' + nodes.join('\n') + '</ul>';
}

document.getElementById('root').innerHTML = render(menu.items);
var doc = document;
var scrTopBtn = createButton('&#708;', 'scrTopBtn');
var scrDownBtn = createButton('&#709;', 'scrDownBtn');

var rootItem = doc.querySelector('#root ul');
var root = doc.getElementById("root");
var rootItemAll = doc.querySelectorAll('#root ul');
var rootParentA;
rootItem.style.height='200px';
root.insertBefore(scrTopBtn, root.childNodes[0]);
root.appendChild(scrDownBtn);

scrTopBtn.style.visibility = "hidden";

setIdChildren();

//Functions
function createButton(s, idName) {
    var element = doc.createElement('li');
    var button = doc.createElement('a');
    button.innerHTML+=s;
    button.setAttribute('id', idName);
    button.setAttribute('href', '');
    element.appendChild(button);
    return element;
};

function setIdChildren() {
    for (var i = 1; i < rootItemAll.length; i++) {
        console.log(rootItemAll[i]);
        rootItemAll[i].classList.add('children');
        rootItemAll[i].parentElement.classList.add('parent');
    }
    rootParentA = doc.querySelectorAll('.parent>a');
    [].map.call(rootParentA, function addArow(e) {
        e.innerHTML += '  &#8250';

    })
}
//Events
scrDownBtn.addEventListener('click', function(e) {
    e.preventDefault();
    rootItem.scrollTop += 10;
});

scrTopBtn.addEventListener('click', function(e) {
    e.preventDefault();
    rootItem.scrollTop -= 10;
});

rootItem.addEventListener('scroll', function(e) {
    e.preventDefault();
    if (rootItem.scrollTop > 0) {
        scrTopBtn.style.visibility = "visible";
    } else {
        scrTopBtn.style.visibility = "hidden";
    }
    console.log(rootItem.clientHeight);
    if (rootItem.scrollTop==rootItem.scrollHeight-rootItem.clientHeight){
      scrDownBtn.style.visibility = "hidden";
    }else{
      scrDownBtn.style.visibility = "visible";

    }
});
