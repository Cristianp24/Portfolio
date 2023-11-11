import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import Modal from "react-modal"; // Importa react-modal
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

Modal.setAppElement("#root"); // Establece el elemento raíz de tu aplicación

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false); // Estado para controlar la visibilidad del modal

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("https://formspree.io/f/mrgwdnwn", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setLoading(false);
        openModal(); // Abre el modal en caso de éxito

        setForm({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setLoading(false);
      console.error(error);

      openModal(); // Abre el modal en caso de error
    }
  };

 // ... (Código anterior)

 return (
  <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
    <motion.div
      variants={slideIn("left", "tween", 0.2, 1)}
      className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
    >
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact.</h3>

      <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Name</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email address?"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">Your Message</span>
          <textarea
            rows={7}
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Write your message here"
            className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
          />
        </label>

        <button
          type="submit"
          className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:scale-105"
        >
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
    </motion.div>

    {/* Modal */}
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Message Sent Modal"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
        content: {
          width: '300px',
          height: '180px', // Tamaño del modal
          margin: 'auto',
          backgroundColor: '#151030',
          borderRadius: '8px',
          padding: '20px',
        },
      }}
    >
      <div>
        {loading ? (
          <p>Sending...</p>
        ) : (
          <div>
            <p>Thank you.I will get back to you as soon as possible.</p> <br />
            <button  className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary hover:scale-105"  onClick={closeModal}>Close</button>
          </div>
        )}
      </div>
    </Modal>
  </div>
);
};

export default SectionWrapper(Contact, "contact");
