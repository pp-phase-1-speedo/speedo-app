const moneyFormatter = (money) => {
  return `Rp. ${money.toLocaleString("id-ID")}`;
};

module.exports = moneyFormatter;
