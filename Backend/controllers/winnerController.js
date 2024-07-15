const Investment = require('../models/Investment');
const User = require('../auth/model/User');  // Update the path according to your structure

exports.calculateWinner = async (req, res) => {
  try {
    const items = await Investment.aggregate([
      { $group: { _id: '$item', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 1 },
    ]);
    const winningItem = items[0]._id;

    const winners = await Investment.find({ item: winningItem });

    for (let winner of winners) {
      await User.findByIdAndUpdate(winner.user, { $inc: { coins: 10 } });
    }

    res.json({ winningItem, winners });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
