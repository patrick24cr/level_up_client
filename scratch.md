const getSingleGame = (gameId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/games/${gameId}`)
    .then((response) => response.json())
    .then((data) => {
      resolve({
        id: data.id,
        skillLevel: data.skill_level,
        numberOfPlayers: data.number_of_players,
        title: data.title,
        maker: data.maker,
        gameTypeId: data.game_type,
      });
    })
    .catch((error) => reject(error));
});

const createGame = (user, game) => new Promise((resolve, reject) => {
  const gameObj = {
    maker: game.maker,
    title: game.title,
    number_of_players: Number(game.numberOfPlayers),
    skill_level: Number(game.skillLevel),
    game_type: Number(game.gameTypeId),
    user_id: user.uid,
  };
  fetch(`${clientCredentials.databaseURL}/games`, {
    method: 'POST',
    body: JSON.stringify(gameObj),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => resolve(response.json()))
    .catch((error) => reject(error));
});

const updateGame = (user, game, id) => new Promise((resolve, reject) => {
  const gameObj = {
    maker: game.maker,
    title: game.title,
    number_of_players: Number(game.numberOfPlayers),
    skill_level: Number(game.skillLevel),
    game_type: Number(game.gameTypeId),
    user_id: user.uid,
  };
  fetch(`${clientCredentials.databaseURL}/games/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(gameObj),
  })
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});
