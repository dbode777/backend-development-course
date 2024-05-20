/* 
    For this question you will write a JavaScript function called: friends . This function will accept a parameter called "people" that contains a list of objects. These objects will have two properties, the first is "person" and the second is a list of strings called "friends". Your job will be to determine which person has the most loyal friends. A loyal friend is one that a person has in their friends list that also has that person in their friends list. For example, if John has Susan in his friends list and Susan has John in her friends list then they are "loyal friends". On the ontrary, if John has Mike in his friends list but Mike does not have John in his friends list they are not loyal friends.
*/

peeps = [
    { "person": "Tim", "friends": ["John", "Sally"], "loyalFriendsCount": 0 },
    { "person": "John", "friends": ["Tim", "Mike"], "loyalFriendsCount": 0 },
    { "person": "Mike", "friends": [], "loyalFriendsCount": 0 },
    { "person": "Sally", "friends": ["Tim"], "loyalFriendsCount": 0 }
];

/**
 * Takes in a list of objects representing people and determines who the most loyal friend is. A loyal friend is someone who has a person in their frineds list that also has them in their friends list.
 * @param {object[]} people List of objects where each object is a person. The person object should have the person's name for keyword "person", a list of strings containing their "friends", and their loyalFriendsCount.
 * @returns {string} person with the most loyal friends
 */
const friends = (people) => {
    for (person = 0; person < people.length; person++) {
        for (friendsList = 0; friendsList < people.length; friendsList++) {
            if (people[friendsList]["friends"].includes(people[person]["person"]) && (people[person]["friends"].includes(people[friendsList]["person"]))) {
                // Add to the loyal friend counter
                people[person]["loyalFriendsCount"] += 1
                console.log(`Adding to friendsCounter: ${people[person]["person"]}, ${people[person]["loyalFriendsCount"]}`)
            };
        };
    };
    const mostLoyalFriends = people.filter((loyalCounter) => loyalCounter["loyalFriendsCount"] === Math.max(...people.map((x) => x['loyalFriendsCount']))).map((friend) => friend["person"])
    console.log(mostLoyalFriends.join(", "))

    return mostLoyalFriends.join(", ")
}

friends(peeps);