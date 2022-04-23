import ApiError from "../util/ApiClass.js";

const isAuth = (req, res, next) => {
  if (req.Authorization) {
    next();
  } else {
    throw new ApiError("un auth", 401);
  }
};

export default isAuth;
