//@desc     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access  Public
exports.getBootcamps = (req,res,next) => {
  res
  .status(200)
  .json({success: 'true', msg:'Show all bootcamps'})
}

//@desc     Get single bootcamps
//@route    GET /api/v1/bootcamps:/id
//@access  Public
exports.getBootcamp = (req,res,next) => {
  res
    .status(200)
    .json({success: 'true', msg:`Show single bootcamps ${req.params.id}`})
}

//@desc     Create new bootcamps
//@route    POST /api/v1/bootcamps:/id
//@access  Public
exports.createBootcamp = (req,res,next) => {
  res
  .status(200)
  .json({success: 'true', msg:'Create new bootcamps'})
}

//@desc    Update bootcamps
//@route   PUT /api/v1/bootcamps:/id
//@access  private
exports.updateBootcamp = (req,res,next) => {
  res
  .status(200)
  .json({success: 'true', msg:`Update bootcamps ${req.params.id}`})
}

//@desc    delete bootcamps
//@route   DELETE /api/v1/bootcamps:/id
//@access  private
exports.deleteBootcamp = (req,res,next) => {
  res
  .status(200)
  .json({success: 'true', msg:`Delete bootcamps ${req.params.id}`})
}

