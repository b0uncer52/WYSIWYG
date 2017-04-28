var famousPeeps = [{
  title: "Samurai",
  name: "Tomoe Gozen",
  bio: "Serving under Minamoto Yoshinaka, Tomoe was one of his finest soldiers, and her skills in battle dwarfed many of those held by even the strongest men in her unit.",
  image: "https://upload.wikimedia.org/wikipedia/commons/4/48/Tomoe-Gozen.jpg",
  lifespan: {
    birth: 1747,
    death: 1797
  }
},
{
	title: "Crippled kid",
	name: "Timmy",
	bio: "Short life has sucked so far, yet he remains optimistic and persistent in hopes of bumming off the wealthy.",
	image: "http://southparkstudios.mtvnimages.com/images/shows/south-park/clip-thumbnails/season-5/0503/south-park-s05e03c12-jimmy-is-gay-16x9.jpg?",
	lifespan: {
		birth: 1997,
		death: 2018
	}
},
{
	title: "Tragic Idiot",
	name: "Ethan Frome",
	bio: "Distracted by the skirt of his sister-in-law, he attempts to leave his bombshell, but sickly wife.  Because he is a broke-ass bitch, he can't and instead he and the in-law try to commit suicide together.  Well, this smuck attempts this by crashing a snowsled into a tree. What a moron, now he and the slooze are half paralyzed in the care of the now healthy wife. Rip loser",
	image: "https://i.ytimg.com/vi/b6PiivQb1-U/maxresdefault.jpg",
	lifespan: {
		birth: 1911,
		death: 1971
	}
},
{
	title: "Baller",
	name: "Jay Gatsby",
	bio: "Cool dude, in another time would've scored part for Dos Equis's most interesting man.  In his time, though, he was merely like a fly-by-night rich boy, garnering minimal respect.  Despite his cool demeanor, his tragedy is his failure to stay cool. Should have let the spoiled girl go and found himself someone who isn't an abuser.",
	image: "http://i.gr-assets.com/images/S/compressed.photo.goodreads.com/hostedimages/1380334543i/693798._SX540_.jpg",
	lifespan: {
		birth: 1895,
		death: 1922
	}
}];
var peopleDiv = document.getElementById("people");
for(person in famousPeeps) {
	var peep = famousPeeps[person];
	var header = `<div class="person"><header>${peep.name} - ${peep.title}</header>`;
	var section = `<section>${peep.bio}</section><img src=${peep.image} />`;
	var footer = `<footer>Birth: ${peep.lifespan.birth}<br>Death: ${peep.lifespan.death}</footer></div>`;
	peopleDiv.innerHTML += header + section + footer;
}

var input = document.getElementById("input");

function handleClick(event) {
	console.log(event);
	for(p in peopleClass) {
		peopleClass.item(p).classList.remove("clicked");
	}
	event.target.parentElement.classList.add("clicked");
	function keypress(keyin) {
		if(keyin.keyCode == 13) {
			input.removeEventListener("keyup", keypress)
			input.blur();
			input.value = "";
		}
		else{
			event.target.parentElement.children[1].innerHTML = keyin.target.value;
		}
	}
	input.addEventListener("keyup", keypress);
	input.focus();
}
var peopleClass = document.getElementsByClassName("person");
for(p in peopleClass) {
	peopleClass.item(p).addEventListener("click", handleClick);
}