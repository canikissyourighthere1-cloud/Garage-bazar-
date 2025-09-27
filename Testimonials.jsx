

import { motion } from "framer-motion";

export default function Testimonials() {
  const reviews = [
    {name:"Rohit", text:"Genuine parts, fast delivery!"},
    {name:"Anjali", text:"Very trustworthy, high quality engines."},
    {name:"Vikram", text:"Excellent service, recommended!"}
  ];
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">What Customers Say</h2>
      <div className="flex flex-col md:flex-row justify-center gap-6">
        {reviews.map((r,i)=>(
          <motion.div key={i} className="bg-white p-6 rounded shadow w-72"
            initial={{opacity:0, y:50}} animate={{opacity:1, y:0}} transition={{delay:i*0.3}}>
            <p>"{r.text}"</p>
            <h4 className="font-semibold mt-2">{r.name}</h4>
          </motion.div>
        ))}
      </div>
    </section>
  );
}


---
