import "./app1.css"
import $ from "jquery"
let result = parseInt($("#output")[0].innerText)
console.log(result);
$("#add1").on("click", () => {
    result += 1
    $("#output").text(result)
})
$("#min1").on("click", () => {
    result = result - 1
    $("#output").text(result)
})
$("#mul2").on("click", () => {
    result = result * 2
    $("#output").text(result)
})
$("#div2").on("click", () => {
    result = result / 2
    $("#output").text(result)
})