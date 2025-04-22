// AJAX request implementation for the About page
// Used activity 14 as a reference
// Modifications to the code made: I made my own data-type called 'data-title' because 
// the 'tooltips' widget uses the data in the 'title' attributes to represent the the text
// displayed in the tooltip dialog. This prevents me from having to modify the javascript source files.

$(document).ready(function() {
    $('#employees a').click(function(event) {
        let name_url = "json_files/" + $(this).attr('data-title') + ".json";
        $.ajax({
            type: "get",
            url: name_url,
            timeout: 10000,
            dataType: "json"
        })
        .done(
            function(data) {
                let employee = data.employees[0]
                $('main img').attr('src', employee.image);
                $('main h2').html(employee.name);
                $('main h3').html(employee.title);
                $('main p').html(employee.text);
        })
        .fail(function(xhr, status, error) {
                alert("Error: " + xhr.status + " - " + error);
        });
    });
}); // end ready