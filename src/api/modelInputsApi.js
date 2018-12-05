export function getAll() {
  // Return array of data from localStorage, or if that's empty, return an empty array.
  const all = JSON.parse(window.localStorage.getItem("modelInputs")) || [];
  return new Promise((resolve, reject) => resolve(all));
}

export function deleteInput(id) {
  getAll().then(allInputs => {
    debugger;
    const inputsWithoutThatDeletedOne = allInputs.filter(i => i.id !== id);
    window.localStorage.setItem(
      "modelInputs",
      JSON.stringify(inputsWithoutThatDeletedOne)
    );
  });
}

export function save(modelInput) {
  // In a real app, this would make an HTTP call to save the data
  // to a DB. But we're just going to save to localStorage.
  return getAll().then(modelInputs => {
    const savedModelInput = { ...modelInput, id: guid() };
    window.localStorage.setItem(
      "modelInputs",
      JSON.stringify([...modelInputs, savedModelInput])
    );
    // Pretend this came back from the server in a real app
    debugger;
    return new Promise((resolve, reject) => resolve(savedModelInput));
  });
}

function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
}
