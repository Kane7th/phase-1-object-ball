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

const gameData = gameObject();

function numPointsScored(name) {
  return (
    gameData.home.players[name]?.points ||
    gameData.away.players[name]?.points ||
    "Player not recognised!"
  );
}

function shoeSize(name) {
  return (
    gameData.home.players[name]?.shoe ||
    gameData.away.players[name]?.shoe ||
    "Player not recognised!"
  );
}

function teamColors(teamName) {
  return gameData.home.teamName === teamName
    ? gameData.home.colors
    : gameData.away.teamName === teamName
    ? gameData.away.colors
    : "Team not recognised!";
}

function teamNames() {
  return [gameData.home.teamName, gameData.away.teamName];
}

function getPlayerNumber(name) {
  return (
    gameData.home.players[name]?.number ||
    gameData.away.players[name]?.number ||
    "Not this player!"
  );
}

function playerStats(name) {
  return (
    gameData.home.players[name] ||
    gameData.away.players[name] ||
    "Player not recognised!"
  );
}

function bigShoeRebounds() {
  let biggestShoe = 0;
  let rebounds = 0;

  for (let team of [gameData.home, gameData.away]) {
    for (let player in team.players) {
      let playerData = team.players[player];
      if (playerData.shoe > biggestShoe) {
        biggestShoe = playerData.shoe;
        rebounds = playerData.rebounds;
      }
    }
  }
  return rebounds;
}

function mostPointsScored() {
  let maxPoints = 0;
  let topScorer = "";

  for (let team of [gameData.home, gameData.away]) {
    for (let player in team.players) {
      let playerData = team.players[player];
      if (playerData.points > maxPoints) {
        maxPoints = playerData.points;
        topScorer = player;
      }
    }
  }
  return topScorer;
}

function winningTeam() {
  let scores = { home: 0, away: 0 };

  for (let teamKey in scores) {
    for (let player in gameData[teamKey].players) {
      scores[teamKey] += gameData[teamKey].players[player].points;
    }
  }

  return scores.home > scores.away
    ? `The NBA Finals Champions for 2025 are the ${gameData.home.teamName}!`
    : scores.away > scores.home
    ? `The NBA Finals Champions for 2025 are the ${gameData.away.teamName}!`
    : "It's a tie!";
}

function playerWithLongestName() {
  return Object.keys({
    ...gameData.home.players,
    ...gameData.away.players,
  }).reduce(
    (longest, player) => (player.length > longest.length ? player : longest),
    ""
  );
}

function doesLongNameStealATon() {
  let longestName = "";
  let mostSteals = 0;
  let topStealer = "";

  for (let team of [gameData.home, gameData.away]) {
    for (let player in team.players) {
      let playerData = team.players[player];
      if (player.length > longestName.length) {
        longestName = player;
      }
      if (playerData.steals > mostSteals) {
        mostSteals = playerData.steals;
        topStealer = player;
      }
    }
  }
  return longestName === topStealer;
}
