function gameObject(){
    let obj = {
        home:{
            teamName: "Brooklyn Nets" 
            colors: ["black","white"]
            players: {
                "Alan Anderson" : {
                    number : 0,
                    shoe : 16,
                    points : 22,
                    rebounds : 12,
                    assists : 12,
                    steals : 3,
                    blocks : 1,
                    slamDunks : 1,

                },
                "Reggie Evans" : {
                    number : ,
                    shoe : ,
                    points : ,
                    rebounds : ,
                    assists : ,
                    steals : ,
                    blocks : ,
                    slamDunks : ,

                }
            }
        },


        away:{
            teamName: "Brooklyn Nets" 
            colors: ["black","white"]
            players: {
                "Alan Anderson" : {
                    number : 0,
                    shoe : 16,
                    points : 22,
                    rebounds : 12,
                    assists : 12,
                    steals : 3,
                    blocks : 1,
                    slamDunks : 1,

                },
                "Reggie Evans" : {
                    number : ,
                    shoe : ,
                    points : ,
                    rebounds : ,
                    assists : ,
                    steals : ,
                    blocks : ,
                    slamDunks : ,

                }
            }
        }
    }
    return obj
}

console.log(gameObject());


function getPlayerNumber(name){
    let object = gameObject();
    if(object.home.players[name]){
        return object.home.players[name].number
    } else if(object.away.players[name]) {
        return object.away.players[name].number
    } else {
        return "Not this player!"
    }
}