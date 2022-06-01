const detectScroll = (setScrollDirection) => {
  window.onscroll = () => {
    window.oldScroll > window.scrollY
      ? setScrollDirection('up')
      : setScrollDirection('down');
    window.oldScroll = window.scrollY;
  };
};

export { detectScroll };
export default detectScroll;
