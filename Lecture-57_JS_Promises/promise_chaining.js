const doHomeWork = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Homework done!");
    }, 2000);
  });
};
const revision = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Revision Completed!");
    }, 1500);
  });
};
const playGames = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Played Games");
    }, 1000);
  });
};

const dailyRoutine = async () => {
  try {
    let homeworkStatus = await doHomeWork();
    console.log(homeworkStatus);

    let revisionStatus = await revision();
    console.log(revisionStatus);

    let playGamesStatus = await playGames();
    console.log(playGamesStatus);
  } catch (error) {
    console.log(error);
  }
};

dailyRoutine();

// doHomeWork()
//   .then((res) => {
//     console.log(res);
//     return revision();
//   })
//   .then((res) => {
//     console.log(res);
//     return playGames();
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));
