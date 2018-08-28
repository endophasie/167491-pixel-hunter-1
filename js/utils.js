const mainContainer = document.querySelector(`#main`);

const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();

  return wrapper;
};

const changeScreen = (element) => {
  mainContainer.innerHTML = ``;
  mainContainer.appendChild(element);
};

export {render, changeScreen};
