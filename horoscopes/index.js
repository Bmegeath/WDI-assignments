$(document).ready(function () {


	function setHoroscope (sign) {
		$.ajax({
          url: 'https://node-horoscopes.herokuapp.com/api/horoscopes/today/'+sign,
          success: function(response) {
           
            $('.dailyInfo').text(response.horoscope)
          },
          error: function (error) {
          }
		});
	}


	$('#image1').click(function (sign) {
		setHoroscope('aquarius');
		getCelebrity('aquarius');
		getMatch('aquarius','cancer')
	});
	$('#image2').click(function (sign) {
		setHoroscope('aries');
		getCelebrity('aries');
        getMatch('aries','capricorn')
	});
	$('#image3').click(function (sign) {
		setHoroscope('cancer');
		getCelebrity('cancer');
		getMatch('cancer', 'leo')
	});
	$('#image4').click(function (sign) {
		setHoroscope('capricorn');
		getCelebrity('capricorn');
		getMatch('capricorn', 'leo')
	});
	$('#image5').click(function (sign) {
		setHoroscope('leo');
		getCelebrity('leo');
		getMatch('leo','gemini')
	});
	$('#image6').click(function (sign) {
		setHoroscope('gemini');
		getCelebrity('gemini');
		getMatch('gemini','libra')
	});
	$('#image7').click(function (sign) {
		setHoroscope('libra');
		getCelebrity('libra');
		getMatch('libra', 'pices')

	});
	$('#image8').click(function (sign) {
		setHoroscope('pices')
		getCelebrity('pices')
		getMatch('gemini','sagittarius')

	});
	$('#image9').click(function (sign) {
		setHoroscope('sagittarius')
		getCelebrity('sagittarius')
		getMatch('scorpio','taurus')

	});
	$('#image10').click(function (sign) {
		setHoroscope('scorpio')
		getCelebrity('scorpio')
		getMatch('scorpio','taurus')

	});
	$('#image11').click(function (sign) {
		setHoroscope('taurus')
		getCelebrity('taurus')
		getMatch('taurus','aquarius')
	});
	$('#image12').click(function (sign) {
		setHoroscope('virgo')
		getCelebrity('virgo')
		getMatch('virgo', 'aries')
	});

function getMatch (sign1,sign2) {
	// Example
        $.ajax({
          url: 'https://node-horoscopes.herokuapp.com/api/horoscopes/dating/'+sign1+'/'+sign2,
          success: function(response) {
          	$('.match').text(response.text)
            // response:
            //  {
            //    text:"the compatibility horoscope"
            //  }
          },
          error: function (error) {
          }
        });
    }
		


function getCelebrity (name) {
	$.ajax({
          url: 'https://node-horoscopes.herokuapp.com/api/horoscopes/celebrities/'+name,
          success: function(response) {

          	$(".celebrityHoroscopes").text(response.actors[0].name + '  ' + response.actors[0].age + ', ' + response.actors[1].name + '  ' + response.actors[1].age)

            // response:
            // {
            //    sign:"leo",
            //    actors:[{
            //      imageUrl:"http://www.famousbirthdays.com/thumbnails/radcliffe-daniel-large.jpg",
            //      name:"Daniel Radcliffe",
            //      age:"27"
            //    }]
            //  }
          },
          error: function (error) {
          }
        });
	}


})

