import * as Yup from "yup"

export const formSchemas = Yup.object({
    name: Yup.string().min(3).required("please inter your name"),
    email: Yup.string().email().required("please inter your email"),
    subject:  Yup.string().min(3).required("please inter the subject"),
    message:  Yup.string().min(3).required("please inter your message")
});