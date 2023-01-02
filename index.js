function Voting(question, smiles) {
  this.question = question;
  this.smiles = smiles;
  this.counter = {};
  this.render = () => {
    const container = document.createElement("div");
    container.className = "voteContainer";
    const questionContainer = document.createElement("p");
    questionContainer.innerText = this.question;
    questionContainer.className = "voteContainer__question";
    container.append(questionContainer);

    this.smiles.forEach((smile) => {
      const button = document.createElement("button");
      button.innerHTML = smile;
      button.className = "voteContainer__smile";

      const counterContainer = document.createElement("span");
      this.counter[smile] = 0;
      button.onclick = () => {
        this.counter[smile] += 1;
        counterContainer.innerText = this.counter[smile];
      };
      counterContainer.className = "voteContainer__counter";
      button.append(counterContainer);

      container.append(button);
    });
    document.body.append(container);
  };
}

const vote1 = new Voting("How are you?", ["&#128561;", "&#128522;"]);
vote1.render();
const vote2 = new Voting("Question#2", [
  "&#128561;",
  "&#128522;",
  "&#128532;",
  "&#128528;",
  "&#128545;",
]);
vote2.render();
