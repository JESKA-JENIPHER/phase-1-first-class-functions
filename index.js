const receivesAFunction = (callback) => {
  callback();
};
const namedFunction = () => {};
const returnsANamedFunction = () => {
  return namedFunction;
}; 
const returnsAnAnonymousFunction = () => {
  return () => {};
};

