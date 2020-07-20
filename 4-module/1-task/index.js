/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let friendsListElement = document.createElement("ul");
  let friendsNames = friends.map(friend => {
    let li = document.createElement("li");
    li.innerText = friend.firstName + ' ' + friend.lastName;

    return li;
  });
  
  for (let friend of friendsNames) {
   friendsListElement.append(friend);
  }

  return friendsListElement;
}
