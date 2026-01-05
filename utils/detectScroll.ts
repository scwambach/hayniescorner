const detectScroll = (setScrollDirection: any) => {
  window.onscroll = () => {
    window.oldScroll > window.scrollY
      ? setScrollDirection("up")
      : setScrollDirection("down");
    window.oldScroll = window.scrollY;
  };
};

export { detectScroll };
export default detectScroll;
