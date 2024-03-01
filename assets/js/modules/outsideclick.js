export default function outsideClick(elementsMenu, eventos, callback) {
  const html = document.documentElement;
  const outside = "data-outside";

  if (!elementsMenu.hasAttribute(outside)) {
    eventos.forEach((evento) => {
      setTimeout(() => {
        html.addEventListener(evento, handleClickOutside);
      });
      elementsMenu.setAttribute(outside, "");
    });
  }

  function handleClickOutside(event) {
    if (!elementsMenu.contains(event.target)) {
      elementsMenu.removeAttribute(outside);

      eventos.forEach((evento) => {
        html.removeEventListener(evento, handleClickOutside);
      });
      callback();
    }
  }
}
