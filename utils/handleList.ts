/* eslint-disable no-console */
export const handleList = (body: any) => {
  fetch(`${process.env.SITE_URL}api/list`, {
    method: "POST",
    body,
  })
    .then((response) => response.json())
    .then((listData) => {
      console.log("Campaign List:", listData);
    })

    .catch((error) => {
      console.error("Error:", error);
    });
};
