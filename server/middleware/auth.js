import {clerkCilient} from '@clerk/express'


export const protectAdmin = async (req, res, next) => {
  try {
    const { userId } = req.auth(); // Get the user ID from Clerk auth

    const user = await clerkClient.users.getUser(userId); // Fetch user info from Clerk

    // Check if user has admin role
    if (user.privateMetadata.role !== "admin") {
      return res.status(403).json({ message: "Access denied! Admins only." });
    }