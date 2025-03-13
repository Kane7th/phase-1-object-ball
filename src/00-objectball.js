const gameData = gameObject();

function numPointsScored(name) {
  return gameData.home.players[name]?.points || gameData.away.players[name]?.points || "Player not recognised!";
}

function shoeSize(name) {
  return gameData.home.players[name]?.shoe || gameData.away.players[name]?.shoe || "Player not recognised!";
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
  return gameData.home.players[name]?.number || gameData.away.players[name]?.number || "Not this player!";
}

function playerStats(name) {
  return gameData.home.players[name] || gameData.away.players[name] || "Player not recognised!";
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
  return Object.keys({ ...gameData.home.players, ...gameData.away.players })
    .reduce((longest, player) => (player.length > longest.length ? player : longest), "");
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
