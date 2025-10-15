import { clerkClient } from "@clerk/express";

export const protectAdmin = async (req, res, next) => {
  try {
    const { userId } = req.auth(); // Get the user ID from Clerk auth

    const user = await clerkClient.users.getUser(userId); // Fetch user info from Clerk

    // Check if user has admin role
    if (user.privateMetadata.role !== "admin") {
      return res.json({ success: false, message: "not authorized" });
    }

    next(); 
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: "Unauthorized access!" });
  }
};
