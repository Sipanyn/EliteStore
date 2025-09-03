function btnclick(e) {
  const el = e.currentTarget;
  el.classList.add("scale-120");
  setTimeout(() => {
    el.classList.remove("scale-120");
  }, 150);
}
export default btnclick;
