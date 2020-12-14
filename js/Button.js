/*
 The Button.js script handles button inputs 
 from the sidebar aswell as the button inputs for
 adding new elements to the html canvas.
 
 */

var state = true;
var i = 0;


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

    // Button Btn
    $("#buttonBtn").click(function (event) {
        //Button content
        document.getElementById("newButton").style.display = "block";

        state = true;
        ChangeBtnState();
    });

    // File-Type Btn
    $("#linkBtn").click(function (event) {
        //Button content

        document.getElementById("newLinkElement").style.display = "block";

        state = true;
        ChangeBtnState();
    });

//=========================================================================================\\

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

    // Button Btn
    $("#buttonCancel").click(function (event) {
        document.getElementById("newButton").style.display = "none";

        state = false;
        ChangeBtnState();
    });

    // File-Type Btn
    $("#linkCancel").click(function (event) {
        document.getElementById("newLinkElement").style.display = "none";

        state = false;
        ChangeBtnState();
    });
    $(".btnCancel").button();

//=========================================================================================\\

    // Close making new element and enable buttons and spawn wanted items
    $(".acptBtn").button();

    // Menu Btn
    $("#menuAcpt").click(function (event) {
        document.getElementById("newMenu").style.display = "none";

        state = false;
        ChangeBtnState();
    });

    // Checkbox Btn
    $("#CbAcpt").click(function (event) {
        document.getElementById("newCheckbox").style.display = "none";

        state = false;
        ChangeBtnState();

        if ($('input[name="listBox"]:checked').length > 0) {
            var div = document.createElement("div");
            for (var i = 0; i < document.getElementById("cbAmount").value; i++) {
                //Add content here

                var newContent = document.createElement("INPUT");
                newContent.setAttribute("type", "checkbox");
                newContent.className += "newContent";
                newContent.className += "checkList";

                div.appendChild(newContent);
            }
            div.className += "draggable";
            const currentDiv = document.getElementById("new");
            document.body.insertBefore(div, currentDiv);

            $(function () {
                $(".draggable").draggable({ grid: [20, 20] });
            });
        }
        else {
            for (var i = 0; i < document.getElementById("cbAmount").value; i++) {
                //Add content here

                var div = document.createElement("div");

                var newContent = document.createElement("INPUT");
                newContent.setAttribute("type", "checkbox");

                newContent.className += "newContent";

                div.className += "draggable";
                div.appendChild(newContent);

                const currentDiv = document.getElementById("new");
                document.body.insertBefore(div, currentDiv);

                $(function () {
                    $(".draggable").draggable({ grid: [20, 20] });
                });
            }
        }
    });

    // Drop-Down Btn
    $("#DDAcpt").click(function (event) {
        document.getElementById("newDropDown").style.display = "none";

        state = false;
        ChangeBtnState();
    });

    // Button Btn
    $("#buttonAcpt").click(function (event) {
        document.getElementById("newButton").style.display = "none";

        state = false;
        ChangeBtnState();

        var div = document.createElement("div");

        var newContent = document.createElement("button");
        newContent.textContent = document.getElementById("btnText").value;

        newContent.onclick = document.getElementById("buttonLink").value;

        newContent.className += "newContent";

        div.className += "draggable";
        div.appendChild(newContent);

        const currentDiv = document.getElementById("new");
        document.body.insertBefore(div, currentDiv);

        $(function () {
            $(".draggable").draggable({ grid: [20, 20] });
        });
    });

    // File-Type Btn
    $("#linkAcpt").click(function (event) {
        if (document.getElementById("btnLink").value == "Enter link here!") {
            alert("Enter a link");
        }
        else {
            document.getElementById("newLinkElement").style.display = "none";

            state = false;
            ChangeBtnState();
            var div = document.createElement("div");

            var a = document.createElement("a");
            a.href = document.getElementById("btnLink").value;

            var img = document.createElement("img");
            img.src = document.getElementById("btnLinkImg").value;

            img.className += "newContent";

            div.className += "draggable";
            a.appendChild(img);
            div.appendChild(a);

            const currentDiv = document.getElementById("new");
            document.body.insertBefore(div, currentDiv);

            $(function () {
                $(".draggable").draggable({ grid: [20, 20] });
            });
        }
        document.getElementById("btnLink").value = "Enter link here!";
        document.getElementById("btnLinkImg").value = "Enter link here!";
    });

    // Enable/Disable buttons
    function ChangeBtnState() {
        if(state == true)
            document.getElementById("newElementDim").style.display = "block";
        else
            document.getElementById("newElementDim").style.display = "none";
    }
});