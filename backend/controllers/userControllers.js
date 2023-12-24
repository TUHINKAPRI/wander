const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.update = async (req, res, next) => {
  // console.log(req.user.id)
  if (req.user.id !== req.params.id) {
    return next(new Error("diff account"));
  }
  try {
    if (req.body.password) {
      req.body.password = bcrypt.hashSync(req.body.password, 10);
    }
    const updateUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      {new:true}
     
    );
    const { password, ...rest } = updateUser?._doc;
    res.status(200).json({
      status:"Success",
      data:rest
    });
  } catch (err) {
    next(err);
  }
};
