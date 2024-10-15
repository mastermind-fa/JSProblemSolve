var friends = ["rahim", "karim", "abdul", "sadsd", "heroAlom"];
var temp = friends[0];

for (var i = 1; i < friends.length; i++) {
    if(friends[i].length>temp.length){
        temp = friends[i];
    }
}
console.log(temp);
