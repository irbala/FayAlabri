$(function () {
    // When the DOM is ready
    $('nav li a').filter(function () {
        // Filter the navigation links
        return this.href === location.href; // Compare link href with current page URL
    }).addClass('active'); // Add "active" class to the matching link
});

$(function () {
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500);
    });
});

$(function () {
    $.ajax({
        url: 'https://api.example.com/data',
        method: 'GET',
        success: function (data) {
            console.log(data);
        },
        error: function (error) {
            if (error.status === 404) {
                window.location.href = '/404.html'; // Redirect to custom 404 page
            } else {
                console.error('Error fetching data:', error);
            }
        }
    });
});