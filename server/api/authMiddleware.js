function isAdmin(req, res, next){
    if(req.user){
      if (req.user.dataValues.admin) return next();
    }
    let err = new Error('UNAUTHORIZED')
    err.status = 401;
    next(err);
}

module.exports = isAdmin;