window.onload = function () {
    var male = 0;
    var female = 0;
    function load() {
        $(".panel-body").each(function (index) {
            $.ajax({
                url: 'https://randomuser.me/api/',
                dataType: 'json',
                success: function (data) {
                    $(".img img").eq(index).attr("src", data.results[0].picture.thumbnail);
                    $(".last").eq(index).html(data.results[0].name.last);
                    $(".panel-heading .first").eq(index).html(data.results[0].name.first);
                    $(".panel-heading .username").eq(index).html(data.results[0].login.username);
                    $(".panel-heading .phone").eq(index).html(data.results[0].phone);
                    $(".location").eq(index).html(data.results[0].location.state);
                    $(".bigimg img").eq(index).attr("src", data.results[0].picture.large);
                    $(".reg").eq(index).html("<b>Registered:</b>  " + data.results[0].registered);
                    $(".email").eq(index).html("<b>Email:</b> " + data.results[0].email);
                    $(".address").eq(index).html("<b>Address:</b> " + data.results[0].location.street);
                    $(".city").eq(index).html("<b>City:</b> " + data.results[0].location.city);
                    $(".zip").eq(index).html("<b>Zip Code:</b> " + data.results[0].location.postcode);
                    $(".bithday").eq(index).html("<b>Birthday:</b> " + data.results[0].dob);
                    $(".cell").eq(index).html("<b>Cell:</b> " + data.results[0].cell);
                    $(".panel-body .username").eq(index).html("<b>Username:</b> " + data.results[0].login.username);
                    $(".panel-body .phone").eq(index).html("<b>Phone:</b> " + data.results[0].phone);
                    $(".panel-body .first").eq(index).html("<h2>Name: " + data.results[0].name.first + ' '+"<img class='gender' />" + "</h2>");
                    $gender = data.results[0].gender;
                    if ($gender == "male") {
                        $(".gender").eq(index).attr("src", "men.png");
                        male++;
                    }
                    else {
                        $(".gender").eq(index).attr("src", "women.png");
                        female++;
                    }
                }
            });
        })
        $("#btn").css("display", "block");
    }
    
    function click() {
        $(".panel-heading").each(function (index) {
            $(this).on("click", function () {
                if ($(this).hasClass("collapsed")) {
                    $(".img2 img").eq(index - 1).attr("src", "Minus_sign.png");
                }
                else {
                    $(".img2 img").eq(index - 1).attr("src", "Plus_sign.png");
                }
            })
        })
    }

    function remove() {
            $(".collapsed .img2 img").attr("src", "Plus_sign.png");

    }
    load();
    click();
    setInterval(remove, 100);
    $("#btn").on("click", function () {
        male = male/10*100;
        female = female/10*100;
        let CHART = document.getElementById("polarChart");
        CHART.height = 130;
        const dataPolar = {
            labels: ['male, %', 'female, %'],
            datasets: [
                {
                    label: 'Gender',
                    backgroundColor: ['#00ff00', '#ff0000'],
                    data: [male, female]
                }
            ]
        };
        let polarChart = new Chart(CHART, {
            type: 'pie',
            data: dataPolar
        });
    })
    
}