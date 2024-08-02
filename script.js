function deleteItem(button) {
    // Remove the parent list item (li) from the DOM
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}
