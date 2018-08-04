var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
            content.style.borderBottom = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.borderBottom = '1px solid #e0e0e0';
            console.log(content)
        }
    });
}

/*=========================================================================
   FAQS
=========================================================================*/
var c = document.getElementsByClassName("paper__article-preview");
var i;

for (i = 0; i < c.length; i++) {
    c[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var side = this.nextElementSibling;
        if (side.style.maxHeight) {
            side.style.maxHeight = null;


        } else {
            side.style.maxHeight = side.scrollHeight + "px";


            console.log(side)
        }
    });
}