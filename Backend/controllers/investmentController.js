const Investment = require('../models/Investment');

exports.invest = async (req, res) => {
  try {
    const { item } = req.body;
    const investment = new Investment({
      user: req.user.id,
      item,
    });
    await investment.save();
    res.status(201).json(investment);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

exports.getInvestments = async (req, res) => {
  try {
    const investments = await Investment.find({ user: req.user.id });
    res.json(investments);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
