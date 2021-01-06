exports.satHello = (req, res, next) => {
  console.log('hello from controller');
  res.redirect('/');
};