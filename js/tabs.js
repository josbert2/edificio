function openTabs(evt, openTabs) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(openTabs).style.display = "block";
    evt.currentTarget.className += " active";
    var i = $("#" + openTabs).data("img");
    var t = $("#" + openTabs).data("name");
    var m = $('#' + openTabs + ' #img_tabs');
    $('#tabs-img').css('background-image', 'url(' + i + ')');
    $('#tabs_text').html(t);
    m.css('background-image', 'url(' + i + ')');
    console.log(i)
}

function openTabsP(evt, openTabsP) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(openTabsP).style.display = "block";
    evt.currentTarget.className += " active";
    var i = $("#" + openTabsP).data("img");
    var t = $("#" + openTabsP).data("name");
    var m = $('#' + openTabsP + ' #img_tabs');

    m.css('background-image', 'url(' + i + ')');
    $('#contentThree #tabs-img').css('background-image', 'url(' + i + ')');
    $('#contentThree #tabs_text').html(t)
    console.log(m)
}

function openTabsRules(evt, openTabsRules) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontentRule");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinksRule");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(openTabsRules).style.display = "block";
    evt.currentTarget.className += " active";


}