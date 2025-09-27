

export default function FeaturedProducts() {
  const products = [
    {name:"Engine A", price:"₹15,000"},
    {name:"Gearbox B", price:"₹12,500"},
    {name:"Headlight C", price:"₹3,500"},
    {name:"Battery D", price:"₹4,200"}
  ];
  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {products.map((p,i)=>(
          <div key={i} className="bg-gray-100 p-6 rounded shadow hover:shadow-lg transition hover:-translate-y-1">
            <div className="h-40 bg-gray-300 mb-4 rounded flex items-center justify-center">Image/360°</div>
            <h3 className="font-semibold">{p.name}</h3>
            <p className="text-orange-500 font-bold">{p.price}</p>
            <button className="mt-2 bg-lime-500 px-4 py-2 rounded hover:brightness-110 transition">Prepay</button>
          </div>
        ))}
      </div>
    </section>
  );
}

