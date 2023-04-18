export const getLastLetter = (url) => {
  let lastLetter = url.charAt(url.length - 1);
  let lastWord = url.split("/");
  if (lastLetter === "/") {
    return lastWord[lastWord.length - 2];
  } else {
    return lastWord[lastWord.length - 1];
  }
};
