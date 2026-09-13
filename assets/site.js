
document.querySelectorAll('[data-tabs]').forEach((tabs) => {
  const buttons = tabs.querySelectorAll('[data-tab]');
  const panels = tabs.querySelectorAll('[data-panel]');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((item) => item.classList.toggle('active', item === button));
      panels.forEach((panel) => panel.hidden = panel.dataset.panel !== button.dataset.tab);
    });
  });
});
