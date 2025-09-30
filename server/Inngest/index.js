import { Inngest } from "inngest";
// import User from "../models/User"; // <- Uncomment and adjust path to your User model

// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking" });

// Inngest Function to save user data to a database
export const syncUserCreation = inngest.createFunction(
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

    // TODO: Save userData to your database
    // await User.create(userData);

    console.log("User Data Synced:", userData);

    return { success: true, userData };
  }
);

// Inngest Function to delete user from database
export const syncUserDeletion = inngest.createFunction(
  { id: "delete-user-with-clerk" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    const { id } = event.data;

    // TODO: Delete user from your database
    // await User.findByIdAndDelete(id);

    console.log(`User with ID ${id} deleted from database`);

    return { success: true, deletedId: id };
  }
);
