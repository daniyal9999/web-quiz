$(function(){
    console.log("JQ Working")
    $("#jquery").click(handleclick);
});
function handleclick(){
    $(".underline").addClass("underlinne")
    $("#jquery").remove()
}

