import Contact from '../models/Contact.js';

export const submitContactForm = async (req, res) => {
  try {
    console.log("📩 Incoming request:",req.body);
    const { name, email, message } = req.body;
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(201).json({ message: 'Message received. We will get back to you soon!' });
  } catch (error) {
    console.error(" ❌Server Error:", error);
    res.status(500).json({ message: 'Something went wrong!', error });
  }
};
