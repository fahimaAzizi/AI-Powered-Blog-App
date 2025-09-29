import { Inngest } from "inngest";

// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking" });

// Inngest Function to save user data to a database
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
    // Webhook listener for deleting user
const syncUserDeletion = {
  id: 'delete-user-with-clerk',
  event: 'clerk/user.deleted',
  async (event) => {
    const { id } = event.data;
    await User.findByIdAndDelete(id);
  }
};

// Ingest Function to delete user from database
const syncUserDeletionFn = ingest.createFunction(
  { id: 'delete-user-with-clerk' },
  { event: 'clerk/user.deleted' },
  async (event) => {
    const { id } = event.data;
    await User.findByIdAndDelete(id);
  }
);


    // TODO: Save userData to your database
    console.log("User Data Synced:", userData);

    return { success: true, userData };
  }
);
