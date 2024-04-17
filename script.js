const items = document.querySelectorAll('.card');

document.querySelector('#breakfastBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'breakfast') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#saladBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'salad') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#desertBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'desert') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#burgerBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'burger') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});





document.querySelector('#veganBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'vegan') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#riceBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'rice') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#appBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'app') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#tigerBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'tiger') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#seabreamBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'sea') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#lauriatBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'lauriat') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#chickenBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'chicken') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#beefBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'beef') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#soupBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'soup') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#nsoupBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'nsoup') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#lunchBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'lunch') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});

document.querySelector('#dinnerBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'dinner') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#BubbleBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'bubble') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});
document.querySelector('#shakesBtn').addEventListener('click', function() {
    items.forEach(item => {
        // console.log(item);
        if (item.id != 'shakes') {
            item.style.display = 'none';
        } else {
            item.style.display = 'grid';
        }
    });
});


document.querySelector('#allBtn').addEventListener('click', function() {
    items.forEach(element => {
        element.style.display = 'grid';
    });
})