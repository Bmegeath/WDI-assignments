$(document).ready(function(){
	var player = $('#player')[0];

	var songs = [{
				title: 'Right In',				
				artist: 'Skrillex',
				fileName: '01 Right In.m4a',},

				{
					title: 'Miles Away',
					artist: 'Zomboy',
					fileName:'MilesAwayZomboy.wav',
				},
				
				{
					title: 'NRG (Radio Edit)',
					artist: 'A-Trak',
					fileName: '01 NRG (Radio Edit).m4a',


				}]

				



	// , 'MilesAwayZomboy.wav', '01 NRG (Radio Edit).m4a']


	var currentIndex = 0;

	$('#next').click(function () {
		currentIndex++;
		if (currentIndex > songs.length - 1) {
			currentIndex = 0;
		}
		$('#player').attr('src', songs[currentIndex].fileName)
		player.play();

	});


	$('#play').click(function () {
		
		player.play();

	});
	$('#pause').click(function () {
		
		player.pause();

	});

	$('#prev').click(function () {
		currentIndex--;
		if (currentIndex == -1){
			currentIndex = songs.length - 1;
		}
		$('#player').attr('src', songs[currentIndex].fileName)
		player.play();


	});



	


});







