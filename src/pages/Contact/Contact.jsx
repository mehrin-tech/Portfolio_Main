import React, { useState } from "react";
import { sendEmail } from "../../services/email";
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const update = (field) => (e) =>
    setForm((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

  
try{

await sendEmail(form);

alert("Mail Sent Successfully");

setForm({
name:"",
email:"",
subject:"",
message:"",
});

}

catch(error){

console.log(error);

alert("Mail Failed");

}

finally{

setLoading(false);

}

};
   
  

  return (
    <section id="contact" className="min-h-screen bg-[#050816] pt-32 pb-20 px-6">

      <div className="max-w-7xl mx-auto">

        <div className="grid lg:grid-cols-2 gap-12">

          {/* LEFT */}

          <div>

            <p className="text-violet-400 uppercase tracking-[4px] text-xl font-bold">
              Contact
            </p>

            <h1 className="text-white text-5xl font-bold mt-4">
              Get In Touch
            </h1>

            <p className="text-slate-400 mt-8 leading-8 text-lg">
              I’m always interested in new opportunities,
              creative projects, and collaborations.
              Feel free to reach out if you’d like to connect.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-4">

              <a
                href="https://github.com/"
                target="_blank"
                className="
                bg-[#0D0F1A]/80
                border
                border-violet-500/20
                rounded-2xl
                p-5
                hover:border-violet-400
                hover:translate-x-2
                transition
                text-white
                "
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/mehrin-t-67611a330/"
                target="_blank"
                className="
                bg-[#0D0F1A]/80
                border
                border-violet-500/20
                rounded-2xl
                p-5
                hover:border-pink-400
                hover:translate-x-2
                transition
                text-white
                "
              >
                LinkedIn
              </a>

              <a
                href="mailto:meharinmehr2@gmail.com"
                className="
                bg-[#0D0F1A]/80
                border
                border-violet-500/20
                rounded-2xl
                p-5
                hover:border-violet-400
                hover:translate-x-2
                transition
                text-white
                "
              >
                Email
              </a>

            </div>

          </div>

          {/* RIGHT */}

          <div
            className="
            bg-[#0D0F1A]/70
            backdrop-blur-xl
            rounded-3xl
            p-8
            border
            border-violet-500/20
            shadow-[0_0_50px_rgba(139,92,246,0.1)]
            "
          >

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                placeholder="Full Name"
                value={form.name}
                onChange={update("name")}
                className="
                w-full
                bg-transparent
                border
                border-violet-500/20
                rounded-xl
                p-4
                text-white
                "
              />

              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={update("email")}
                className="
                w-full
                bg-transparent
                border
                border-violet-500/20
                rounded-xl
                p-4
                text-white
                "
              />

              <input
                placeholder="Subject"
                value={form.subject}
                onChange={update("subject")}
                className="
                w-full
                bg-transparent
                border
                border-violet-500/20
                rounded-xl
                p-4
                text-white
                "
              />

              <textarea
                rows="6"
                placeholder="Message"
                value={form.message}
                onChange={update("message")}
                className="
                w-full
                bg-transparent
                border
                border-violet-500/20
                rounded-xl
                p-4
                text-white
                "
              />

              <button
                type="submit"
                disabled={loading}
                className="
                w-full
                py-4
                rounded-xl
                text-white
                font-semibold
                bg-gradient-to-r
                from-violet-600
                to-pink-600
                hover:scale-[1.02]
                transition
                "
              >
                {loading
                  ? "Sending..."
                  : "Send Message"}
              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}