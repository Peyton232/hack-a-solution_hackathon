//parrallax - doesn't seem to work as intended
unction EasyParallax() {
	scrollPos = $(this).scrollTop();
	$('.p1').css({
		'background-position' : '50% ' + (-scrollPos/4)+"px"
	});
  $('.p2').css({
		'background-position' : '50% ' + (-scrollPos/8)+"px"
	});
  $('.p3').css({
		'background-position' : '70% ' + (-scrollPos/16)+"px"
	});
	$('.parallax-text').css({
		'margin-top': (scrollPos/2)+"px",
		'opacity': 1-(scrollPos/230)
	});
}
$(document).ready(function(){
	$(window).scroll(function() {
		EasyParallax();
	});
});

function myFunction() {
      var name = "Billy's Shop";
      document.getElementById("myText").innerHTML = name;


    }

function makeList() {
    // Establish the array which acts as a data source for the list
    let listData = [
        'Blue',
        'Red',
        'White',
        'Green',
        'Black',
        'Orange',
        'greenish'
    ],
    // Make a container element for the list
    listContainer = document.createElement('div'),
    // Make the list
    listElement = document.createElement('ol'),
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = listData.length,
    listItem,
    i;

    // Add it to the page
    document.getElementsByTagName('ol')[0].appendChild(listContainer);
    listContainer.appendChild(listElement);

    for (i = 0; i < numberOfListItems; i++) {
        // create an item for each one
        listItem = document.createElement('li');

        // Add the item text
        listItem.innerHTML = listData[i];

        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
}
