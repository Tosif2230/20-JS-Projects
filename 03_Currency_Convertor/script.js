const selectFirstEL = document.getElementById("select-first");

const inputFirstEL = document.getElementById("inp-first");

const selectSecondEL = document.getElementById("select-second");

const inputSecondEL = document.getElementById("inp-second");

const resultVal = document.getElementById("refrance");

function UpdateResult() {
  fetch(
    `https://v6.exchangerate-api.com/v6/3564e18ae89415f9719436a4/latest/${selectFirstEL.value}`,
  )
    .then((res) => res.json())
    .then((data) => {
      const rate = data.conversion_rates[selectSecondEL.value];
      inputSecondEL.value = (Number(inputFirstEL.value) * rate).toFixed(2);

      resultVal.innerText = `1 ${selectFirstEL.value} = ${rate} ${selectSecondEL.value}`;
    });
}

selectFirstEL.addEventListener("input", UpdateResult);
selectSecondEL.addEventListener("input", UpdateResult);
inputFirstEL.addEventListener("input", UpdateResult);
UpdateResult();
