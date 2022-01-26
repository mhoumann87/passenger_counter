let count = 0;
const countEl = document.getElementById('count-el');
const saveEl = document.getElementById('save-el');

const increment = () => {
  count += 1;

  countEl.textContent = count;
};

const save = () => {
  let savedCount = count + ' - ';

  saveEl.textContent += savedCount;

  count = 0;

  countEl.textContent = count;
};
