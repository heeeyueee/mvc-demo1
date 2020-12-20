import $ from "jquery"
import "./app2.css"

const $tarBar = $("#tab-bar")
const $tarContent = $("#tab-content")
$tarBar.on("click", "li", e => {
    const $li = $(e.currentTarget);
    $li
        .addClass("selected")
        .siblings()
        .removeClass("selected");
    const index = $li.index();
    $tarContent
        .children()
        .eq(index)
        .addClass("active")
        .siblings()
        .removeClass("active");
})
$tarBar.children().eq(0).trigger('click')