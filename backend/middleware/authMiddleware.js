// AUTH MIDDLEWARE
export function requireLogin(req, res, next) {
  try {
    if (!req.session?.userId) {
      
      return res.status(401).json({
        success: false,
        message: "Authentication required. PleaseLogin to continue.",
      });
    }
    next();
  } catch (error) {
    console.error("Error in requireLogin middleware:", error);
    return res.status(500).json({
      success: false,
      message: "Authentication error. Please try again.",
      error: process.env.NODE_ENV === "development" ? error.message : undefined,
    });
  }
}
