// -----------------------------------------------------------------------------------

function gameObject() {
  let obj = {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["black", "white"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },

    away: {
      teamName: "Charlotte Hornets",
      colors: ["turquoise", "purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
  return obj;
}

//------------------------------------------------------------------------------------

function numPointsScored(name) {
  let pointsScored = gameObject();
  if (pointsScored.home.players[name]) {
    return pointsScored.home.players[name].points;
  } else if (pointsScored.away.players[name]) {
    return pointsScored.away.players[name].points;
  }
  return "Player not recognised!";
}

//------------------------------------------------------------------------------------

function shoeSize(name) {
  let sizeofShoe = gameObject();
  if (sizeofShoe.home.players[name]) {
    return sizeofShoe.home.players[name].shoe;
  } else if (sizeofShoe.away.players[name]) {
    return sizeofShoe.away.players[name].shoe;
  }
  return "Player not recognised!";
}

//------------------------------------------------------------------------------------

function teamColors(teamName) {
  let colours = gameObject();
  if (colours.home.teamName === teamName) {
    return colours.home.colors;
  } else if (colours.away.teamName === teamName) {
    return colours.away.colors;
  }
  return "Team not recognised!";
}

//------------------------------------------------------------------------------------

function teamNames(teamName) {
  let teams = gameObject();
  return [teams.home.teamName, teams.away.teamName];
}

// -----------------------------------------------------------------------------------

function getPlayerNumber(name) {
  let object = gameObject();
  if (object.home.players[name]) {
    return object.home.players[name].number;
  } else if (object.away.players[name]) {
    return object.away.players[name].number;
  } else {
    return "Not this player!";
  }
}

// -----------------------------------------------------------------------------------

function playerStats(name) {
  let stats = gameObject();
  if (stats.home.players[name]) {
    return stats.home.players[name];
  } else if (stats.away.players[name]) {
    return stats.away.players[name];
  }
  return "Player not recognised!";
}

// -----------------------------------------------------------------------------------

function bigShoeRebounds(name) {
  let shoeRebounds = gameObject();
  let biggestShoeSize = 0;
  let playerRebounds = 0;

  for (let player in shoeRebounds.home.players) {
    let playersShoe = shoeRebounds.home.players[player];
    if (playersShoe.shoe > biggestShoeSize) {
      biggestShoeSize = playersShoe.shoe;
      playerRebounds = playersShoe.rebounds;
    }
  }

  for (let player in shoeRebounds.away.players) {
    let playersShoe = shoeRebounds.away.players[player];
    if (playersShoe.shoe > biggestShoeSize) {
      biggestShoeSize = playersShoe.shoe;
      playerRebounds = playersShoe.rebounds;
    }
  }

  return playerRebounds;
}

// -----------------------------------------------------------------------------------

function mostPointsScored() {
  let game = gameObject();
  let maxPoints = 0;
  let topScorer = "";

  for (let player in game.home.players) {
    let playerData = game.home.players[player];
    if (playerData.points > maxPoints) {
      maxPoints = playerData.points;
      topScorer = player;
    }
  }

  for (let player in game.away.players) {
    let playerData = game.away.players[player];
    if (playerData.points > maxPoints) {
      maxPoints = playerData.points;
      topScorer = player;
    }
  }

  return topScorer;
}

// -----------------------------------------------------------------------------------

function winningTeam() {
  let gameScore = gameObject();
  let homePoints = 0;
  let awayPoints = 0;

  for (let player in gameScore.home.players) {
    homePoints += gameScore.home.players[player].points;
  }

  for (let player in gameScore.away.players) {
    awayPoints += gameScore.away.players[player].points;
  }
  if (homePoints > awayPoints) {
    return `The NBA Finals Champions for 2025 are the ${gameScore.home.teamName}!`;
  } else if (awayPoints > homePoints) {
    return `The NBA Finals Champions for 2025 are the ${gameScore.away.teamName}!`;
  } else {
    return "It's a tie!";
  }
}

// -----------------------------------------------------------------------------------

function playerWithLongestName() {
  let game = gameObject();
  let longestName = "";

  for (let team of [game.home, game.away]) {
    for (let player in team.players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }

  return longestName;
}
console.log(playerWithLongestName());

// -----------------------------------------------------------------------------------

function doesLongNameStealATon() {
  let game = gameObject();
  let longestName = "";
  let mostSteals = 0;
  let topStealer = "";

  for (let team of [game.home, game.away]) {
    for (let player in team.players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }

  for (let team of [game.home, game.away]) {
    for (let player in team.players) {
      if (team.players[player].steals > mostSteals) {
        mostSteals = team.players[player].steals;
        topStealer = player;
      }
    }
  }

  return longestName === topStealer;
}

console.log(doesLongNameStealATon());
