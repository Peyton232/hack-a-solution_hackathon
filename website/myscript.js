

function myFunction() {
      var name = "Johnny's Shop";
      document.getElementById("myText").innerHTML = name;

      var orderNum = "507c35dd8fada716c89d0013";

      var totPrice = "19.99";
      document.getElementById("price").innerHTML = totPrice;

    }

function makeList() {
    // Establish the array which acts as a data source for the list
    let listData = [
        'Bagel',
        'Coffee',
        'Pancakes',
        'Sausage',
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
