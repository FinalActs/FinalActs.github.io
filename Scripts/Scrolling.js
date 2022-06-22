function scrollToItem(item) {
    var diff=(item.offsetTop-window.scrollY)/30;
    if(!window._lastDiff){
        window._lastDiff = 0;
    }

    if (Math.abs(diff)>2) {
        window.scrollTo(0, (window.scrollY+diff))
        clearTimeout(window._TO)

        if(diff !== window._lastDiff){
            window._lastDiff = diff;
            window._TO=setTimeout(scrollToItem, 1, item);
        }
    } else {
        window.scrollTo(0, item.offsetTop - 155)
    }
}