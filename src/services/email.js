import emailjs from "@emailjs/browser";

export const sendEmail = async (data) => {

try {

const response =
await emailjs.send(

import.meta.env.VITE_SERVICE_ID,

import.meta.env.VITE_TEMPLATE_ID,

{
name: data.name,

email: data.email,

subject: data.subject,

message: data.message,
},

import.meta.env.VITE_PUBLIC_KEY

);

return response;

}

catch(error){

console.log(
"Email error:",
error
);

throw error;

}

};