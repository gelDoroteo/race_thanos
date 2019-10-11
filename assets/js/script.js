//player object

const player = {
	character: $("#player"),
	playerPos: 0

}
// console.log(player)

const ai = {
	character: $("#ai"),
	aiPos: 0
}

// console.log(ai)

let playerPosition = 0;
let aiPosition = 0;


// Move the player function
player.character.click(function(){
	console.log($(this))

	$(this).animate({
		'zoom' : (playerPosition+=0.2)
	}, 1000)
	player.playerPos = playerPosition

	console.log(player)
	result()
})

const aiMove = () => {
	if(ai.aiPos < 2) {
		ai.character.animate({
			'zoom' : (aiPosition+=0.2)
		}, 2000)
	} else {
		return true
	}
	ai.aiPos = aiPosition
	setTimeout(aiMove, 1000)
	result()

}




//move the ai
$("#start").click(function(){
	aiMove()
})



const result = () => {
	if(player.playerPos > 2) {
		alert('Nakatakas kay Mama')
		return true
	}

	if(ai.aiPos > 2	) {
		alert('Niyari ni Mama')
		return true
	}
}








// let buttons = document.querySelectorAll(".btn");


// // this will not work with vanilla JS
// // buttons.addEventListener("click", function(){
// // 	alert("hi");
// // })


// // for(let x = 0; x<buttons.length; x++) {
// // 	buttons[x].addEventListener("click", function() {
// // 		alert("HI!");
// // 	})
// // }

// /*
// jQuery basic syntax:
// document.querySelector/All 						$()
// document.querySelector.action					$().click()
// this											$(this)
// document.querySelector.value					$().val()
// .style											.css()
// .style.fontWeight = 'bold'						.css('font-weight', 'bold')
// .innerHTML										.html()
// .innerHTML = 'new value'						.html('new value')	
// .style.display = 'none'							.hide()
// .style.display = 'block'						.show()
// selector.classList.add('classToBeAdded')		(Js)
// selector.addClass('classToBeAddedd')			(Jq)
// selector.classList.remove('classToBeRemoved')	(Js)
// selector.removeClass('classToBeRemoved')		(Jq)
// selector.toggleClass()							(Jq)
// */

// $(".btn").click(function(){
// 	// alert("HI!");
	
// 	// this will refer to the element that triggered the event
// 	console.log($(this))
// 	// gets the value that triggered the event
// 	console.log($(this).val())

// 	$(this).css('border', '2px solid black');
// 	$(this).css('font-weight', 'bold')

// 	// $(this).html('clicked')
// })

// // $("#btn3").click(function(){
// // 	$("h1").hide()
// // })

// // $("#btn3").dblclick(function(){
// // 	$("h1").show()
// // })

// $("#btn3").dblclick(function(){
// 	$("h1").toggle(1000)
// 	// $("h1").toggle(500) //0.5s
// });

// $("li").mouseenter(function(){
// 	$(this).css('font-weight', 'bold')
// });

// $("li").mouseleave(function(){
// 	$(this).css('font-weight', 'normal')
// });

// $(".hello").click(function(){
// 	$(this).animate({
// 		'left' : '100px',
// 		'bottom' : '100px',
// 		'font-size' : '24px'
// 	});
// });


// // $("li").click(function(){
// // 	$(this).addClass("done")
// // })



// // $("li").dblclick(function(){
// // 	$(this).removeClass("done")
// // })

// // toggleClass
// $("li").click(function(){
// 	$(this).toggleClass('done')
// })