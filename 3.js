const getTLD = (url) => {
  const hostname = new URL(url).hostname;
  const regex = /\www.(.*?)\./;
  return hostname.replace(regex, "");
};

console.log(getTLD("http://www.google.de/something")); // de
console.log(getTLD("http://www.amazon.co.uk/something")); // co.uk
