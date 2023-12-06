$(document).ready(function() {
    function loadData(fileName) {
        $("main").empty();

        var jsonFilePath = "json_files/" + fileName + ".json";

        $.ajax({
            url: jsonFilePath,
            dataType: "json",
            success: function(data) {
                $.each(data.speakers, function(index, speaker) {
                    var speakerHTML =
                        '<h1>' + speaker.title + '</h1>' +
                        '<h2>' + speaker.month + '</h2>' +
                        '<h3>' + speaker.speaker + '</h3>' +
                        '<img src="' + speaker.image + '" alt="' + speaker.title + '">' +
                        '<p>' + speaker.text + '</p>';

                    $("main").append(speakerHTML);
                });
            },
            error: function() {
                console.error("Error loading data from " + jsonFilePath);
            }
        });
    }

    $("#nav_list a").on("click", function(e) {
        e.preventDefault();

        var fileName = $(this).attr("title");

        loadData(fileName);
    });

    loadData("toobin");
});
$("main").empty();