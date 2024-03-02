import outsideClick from "./outsideclick.js"

export default function initMenuMobile() {
  const buttonMenu = document.querySelector(".logo-menu");
  const menuMobal = document.querySelector(".menu-mobal");
  const eventsMenu = ["click", "touchstart"];

  eventsMenu.forEach((event) => {
    function openMenu(event) {
      buttonMenu.classList.toggle("ativo");
      menuMobal.classList.add('ativo');
      outsideClick(menuMobal, eventsMenu, () => {
        buttonMenu.classList.remove('ativo');
        menuMobal.classList.remove('ativo');
      })
    }
    buttonMenu.addEventListener(event, openMenu);
  });
}
