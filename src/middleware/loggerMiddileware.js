export const myLogger = function (req, res, next) {
  console.log("LOGGED", new Date(Date.now()));
  next();
};
