import { z } from "zod";

const UserSChema = z.object({
    name: z.string({required_error: "Name is required"}).min(3),
    email: z.string({required_error: "Email is required"}).email()
});

export default UserSChema;