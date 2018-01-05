
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedList = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < rankedList.length; i++ ) {
    rankedList[i].innerHTML = parseInt(rankedList[i].innerHTML) + n
  }
}

function deepestChild() {
  var grandNode = document.querySelector('#grand-node');
  var deepChild = grandNode.children[0];
  
}