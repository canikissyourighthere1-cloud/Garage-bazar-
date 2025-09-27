

export default function Categories() {
  const categories = ["Engines","Gearboxes","Lights","Bumpers","Wheels","Batteries"];
  return (
    <section id="categories" className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Shop by Category</h2>
      <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6 px-4">
        {categories.map((cat)=>(
          <div key={cat} className="bg-white p-6 rounded shadow hover:shadow-xl transform hover:-translate-y-2 transition">
            <div className="h-24 mb-4 bg-gray-300 rounded flex items-center justify-center">Icon</div>
            <h3 className="font-semibold">{cat}</h3>
            <button className="mt-2 bg-orange-500 px-4 py-2 rounded hover:brightness-110 transition">Quick Order</button>
          </div>
        ))}
      </div>
    </section>
  );
}


---
