$(window).on('load', function () {
    if ($('#preloader').length) {
        $('#preloader').delay(1000).fadeOut('slow', function () {
            $(this).remove();
        });
    }
});

//When button 1 is clicked, run AJAX call to PHP routine "Ocean"

$('#btn-1').click(function() {

    if ($('#lat-ocean').val() > 90 || $('#lat-ocean').val() < -90 ) {
        $('#results').text('Latitude out of range please stay between 90 and -90');
    } else if ($('#lng-ocean').val() > 180 || $('#lng-ocean').val() < -180 ) {
        $('#results').text('Longitude out of range please stay between 90 and -90');
    } else {
    $.ajax({
        url: "libs/php/Oceans.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat-ocean').val(),
            lng: $('#lng-ocean').val()
        },
        success: function(result) {
            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {
                $('#results').text('Name: ' + result['data']['name'] + '. Distance: ' + result['data']['distance']); 
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown)
        }
    });
}
});


$('#btn-2').click(function() {

    if ($('#lat-time').val() > 90 || $('#lat-time').val() < -90 ) {
        $('#results').text('Latitude out of range please stay between 90 and -90');
    } else if ($('#lng-time').val() > 180 || $('#lng-time').val() < -180 ) {
        $('#results').text('Longitude out of range please stay between 90 and -90');
    } else {
    $.ajax({
        url: "libs/php/TimeZones.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat-time').val(),
            lng: $('#lng-time').val()
        },
        success: function(result) {
            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {
                $('#results').text('Sunrise: ' + result['data']['sunrise'] 
                + '. Sunset: ' +  result['data']['sunset'] 
                + ". Timezone ID: " + result['data']['timezoneId'] 
                + ". Country: " + result['data']['countryName'] 
                + '. Current Time: ' + result['data']['time']); 
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown)
        }
    });

    }
});


$('#btn-3').click(function() {

    $.ajax({
        url: "libs/php/CountryCodes.php",
        type: 'POST',
        dataType: 'json',
        data: {
            lat: $('#lat-country').val(),
            lng: $('#lng-country').val()
        },
        success: function(result) {
            console.log(JSON.stringify(result));

            if (result.status.name == "ok") {
                $('#results').text('Languages: ' + result['data']['languages'] 
                + '. Country Code: ' + result['data']['countryCode'] 
                + '. Country Name: ' + result['data']['countryName'])
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            console.log(errorThrown)
        }
    });

});