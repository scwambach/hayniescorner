export const parseCompanies = (data) => {
  let parsedString = '';

  data.forEach((obj, index) => {
    if (data.length === 1) {
      if (obj.url) {
        parsedString += `<a href="${obj.url}"target="_blank" rel="noopener noreferrer">${obj.title}</a>`;
      } else {
        parsedString += `${obj.title}`;
      }
    } else {
      if (index !== data.length - 1) {
        if (obj.url) {
          parsedString += `<a href="${
            obj.url
          }"target="_blank" rel="noopener noreferrer">${obj.title}</a>${
            data.length !== 2 ? ', ' : ' '
          } `;
        } else {
          parsedString += `${obj.title}${data.length !== 2 ? ', ' : ' '} `;
        }
      } else {
        if (obj.url) {
          parsedString += `and <a href="${obj.url}"target="_blank" rel="noopener noreferrer">${obj.title}</a>`;
        } else {
          parsedString += `and ${obj.title}`;
        }
      }
    }
  });

  return parsedString;
};
