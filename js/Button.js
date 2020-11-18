var state = true;

$(function newElement() {
    // Open window for new elements
    $(".sideBarBtn").button();

    // Menu Btn
    $("#menuBtn").click(function (event) {
        //Button content
        document.getElementById("newMenu").style.display = "block";

        state = true;
        ChangeBtnState();
    });

    // Checkbox Btn
    $("#checkboxBtn").click(function (event) {
        //Button content
        document.getElementById("newCheckbox").style.display = "block";

        state = true;
        ChangeBtnState();
    });

    // Drop-Down Btn
    $("#dropDownBtn").click(function (event) {
        //Button content
        document.getElementById("newDropDown").style.display = "block";

        state = true;
        ChangeBtnState();
    });

    // File-Type Btn
    $("#fileTypeBtn").click(function (event) {
        //Button content

        document.getElementById("newFileElement").style.display = "block";

        state = true;
        ChangeBtnState();

        //var div = document.createElement("div");
        //var newContent = document.createElement("button");
        //newContent.className += "newContent";

        //div.className += "draggable";
        //div.appendChild(newContent);

        //const currentDiv = document.getElementById("new");
        //document.body.insertBefore(div, currentDiv);

        //$(function () {
        //    $(".draggable").draggable({ grid: [20, 20] });
        //});
    });

    // Close making new element and enable buttons
    $(".btnCancel").button();

    // Menu Btn
    $("#menuCancel").click(function (event) {
        document.getElementById("newMenu").style.display = "none";

        state = false;
        ChangeBtnState();
    });

    // Checkbox Btn
    $("#CbCancel").click(function (event) {
        document.getElementById("newCheckbox").style.display = "none";

        state = false;
        ChangeBtnState();
    });

    // Drop-Down Btn
    $("#DDCancel").click(function (event) {
        document.getElementById("newDropDown").style.display = "none";

        state = false;
        ChangeBtnState();
    });

    // File-Type Btn
    $("#FTCancel").click(function (event) {
        document.getElementById("newFileElement").style.display = "none";

        state = false;
        ChangeBtnState();
    });

    // Enable/Disable buttons
    function ChangeBtnState() {
        $("#menuBtn").prop('disabled', state);
        $("#checkboxBtn").prop('disabled', state);
        $("#dropDownBtn").prop('disabled', state);
        $("#fileTypeBtn").prop('disabled', state);
    }
});