$(document).ready(function() {

    $.ajax({
        type: "get",
        url: "facultyList.json",
        beforeSend: function() {
            $("#faculty").html("Loading...");
        },
        timeout: 10000,
        dataType: "json"
    })
    .done(
        function(data) {
            $("#faculty").html("");
            data.facultymembers.forEach(function(m) {
                $("#faculty").append
                ('<img src="' + m.image + '" />' + "<br>" +
                 "<h2>" + m.full_name + "</h2>"  +
                 "<h3>" + m.department + "</h3>" +
                 "<p>" + m.bio + "</p>")
            });
    })
    .fail(function(xhr, status, error) {
        alert("Error: " + xhr.status + " - " + error);
    });

});
