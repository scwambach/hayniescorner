const newRatio = (crop, originalDimensions) => {
  const heightPercentRemoved = crop ? crop.top + crop.bottom : 0;
  const widthPercentRemoved = crop ? crop.left + crop.right : 0;

  const newHeight =
    originalDimensions.height -
    originalDimensions.height * heightPercentRemoved;
  const newWidth =
    originalDimensions.width - originalDimensions.width * widthPercentRemoved;

  return { height: newHeight, width: newWidth };
};

export { newRatio };
export default newRatio;
