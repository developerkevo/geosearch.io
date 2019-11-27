//creating dom objects to get element
//jquery for the weather return

$(document).ready(function(){
	document.getElementById("weather").addEventListener("click", function() {
			let place = $("#place").val();
			$('#name').html(place);

			if (place != ''){

				$.ajax({

					url: 'https://api.openweathermap.org/data/2.5/weather?q=' + place + "&units=metric" + "&appid=78f65a2fbe7edec82f699c57b8367bcb",
					type: "GET",
					dataType: "jsonp",
					success: function(data){
						show(data);
						$("#place").val('');
					}
				});

			}else{
				$("#error").html('Enter a valid City Name');
			}
		});
});



//function to get the results and output them to dom
function show(data) {
  //create variables to hold the data
        let main=data.weather.main;
        let temp = data.main.temp + ' Degree celcius'; 
        let  cloud = data.clouds.all+ ' % cloudness'; 
        let windDirection = data.wind.deg +' deg';
        let windspeed = data.wind.speed+ ' meter per second';
        let hum = data.main.humidity+ ' % humidity';
        

        //output the data to the dom neededs
        $(".desc").html(main);
        $(".temp").html(temp);
        $(".cloud").html(cloud);
        $(".windDirection").html(windDirection);
        $(".windspeed").html(windspeed);
        $(".hum").html(hum);
        

        //for dev testing  if it works
       console.log(temp);
        console.log(cloud); 
        console.log(windDirection); 
        console.log(windspeed);
        console.log(hum);

    }