import { useState } from "react";
import { FaBoxOpen, FaUserAlt, FaClock, FaTruck } from "react-icons/fa";
import "./faq.css";

const faqs = [
  {
    question: "Is it possible to order posters in bulk for my outlet or any other setting?",
    icon: <FaBoxOpen />,
    answer: "Yes! We cater to bulk orders, especially for businesses. Simply drop us a message on WhatsApp for special rates and assistance.",
  },
  {
    question: "How can I order my own design as a print?",
    icon: <FaUserAlt />,
    answer: "Absolutely! We offer a custom print option, conveniently located in the menu tab. Simply upload your artwork for a poster and leave the rest to us. We'll ensure your design is beautifully printed and delivered to your doorstep.",
  },
  {
    question: "How many days taken for delivery?",
    icon: <FaClock />,
    answer: "Delivery typically takes 5-7 days, depending on your location.",
  },
  {
    question: "How can I check the status of my order?",
    icon: <FaTruck />,
    answer: "Tracking your order is easy! Once your order is placed, you'll receive both a WhatsApp notification and an email confirming your purchase, complete with a tracking ID. Additionally, you'll get another WhatsApp message when your order is picked up by our courier partner. Keep an eye on your WhatsApp and email for regular updates on your order's progress!",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-left">
          <div className="faq-title">
            <img src="faq icon.webp" alt="FAQ Icon" className="faq-images" />
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`faq-item ${openIndex === index ? "active" : ""}`}
              >
                <button onClick={() => toggleFAQ(index)} className="faq-question">
                  <div className="faq-icon-text">
                    <span className="faq-icon">{faq.icon}</span>
                    <span className="faq-text">{faq.question}</span>
                  </div>
                  <span className="faq-toggle">{openIndex === index ? "▲" : "▼"}</span>
                </button>
                {openIndex === index && <p className="faq-answer">{faq.answer}</p>}
              </div>
            ))}
          </div>
        </div>
        <div className="faq-right">
          <img src="/faq.webp" alt="FAQ Illustration" className="faq-image" />
        </div>
      </div>
    </section>
  );
}
