window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;
  
    if (verticalScrollPx < 500) {
      document.getElementById('szinv').style.backgroundColor = '#FBF0B2';
    } else if (verticalScrollPx > 500 && verticalScrollPx < 1000) {
        document.getElementById('szinv').style.backgroundColor = '#FFC7EA';
    } else if (verticalScrollPx > 1000 && verticalScrollPx < 1500) {
        document.getElementById('szinv').style.backgroundColor = '#FBF0B2';
    }else if (verticalScrollPx > 1500 && verticalScrollPx < 2000) {
        document.getElementById('szinv').style.backgroundColor = '#FBF0B2';
    }else if (verticalScrollPx > 2500 && verticalScrollPx < 3000) {
        document.getElementById('szinv').style.backgroundColor = '#F7C8E0';
    }else if (verticalScrollPx > 3500 && verticalScrollPx < 4000) {
        document.getElementById('szinv').style.backgroundColor = '#F7C8E0';
    }else {
        document.getElementById('szinv').style.backgroundColor = '#F7C8E0';
    }
  });