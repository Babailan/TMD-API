async function TEST(req, res) {
  res.status(200).send({ message: "HI" });
  res.end();
}

export default TEST;
