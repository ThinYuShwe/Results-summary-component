fetch("data.json") //*taking the imformation from the json file
  .then((res) => res.json()) //*do something after you get the data
  .then((data) => {
    data.forEach((item) => {
      const category = item.category.toLowerCase();
      const scoreElement = document.querySelector(`.${category} strong`);

      if (scoreElement) {
        scoreElement.textContent = item.score;
      }
    });
  });
