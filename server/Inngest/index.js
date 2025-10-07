import { Inngest } from "inngest";
import User from "../models/User.js";

// Create Inngest client
export const inngest = new Inngest({ id: "movie-ticket-booking" });

// Function: Sync new Clerk user
const syncUserCreation = inngest.createFunction(
  { id: "sync-user-from-clerk" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;

    const userData = {
      _id: id,
      email: email_addresses[0]?.email_address || "",
      name: `${first_name} ${last_name}`,
      image: image_url || "",
    };

    console.log("✅ User Synced:", userData);
    // await User.create(userData);
    return { success: true, userData };
  }
);

// Function: Delete user
const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;
    console.log("🗑️ Deleting user:", id);
    // await User.findByIdAndDelete(id);
  }
);

// Function: Update user
const syncUserUpdation = inngest.createFunction(
  { id: "update-user-with-clerk" },
  { event: "clerk/user.updated" },
  async ({ event }) => {
    const { id, first_name, last_name, email_addresses, image_url } = event.data;
    const userData = {
      _id: id,
      email: email_addresses[0]?.email_address || "",
      name: `${first_name} ${last_name}`,
      image: image_url || "",
    };

    console.log("🔄 Updating user:", userData);
    // await User.findByIdAndUpdate(id, userData);
  }
);

// Export all functions for Inngest Express middleware
export const functions = [syncUserCreation, syncUserDeletion, syncUserUpdation];
