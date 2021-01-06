exports.sayHello = (req, res, next) => {
  console.log('start');
  res.render('navigation.ejs');
};