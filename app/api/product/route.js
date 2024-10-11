import Product from "@/models/Product";

export async function GET() {
  const products = await Product.find();
  return Response.json(products);
}

export async function POST(request) {
  const body = await request.json();
  const product = new Product(body);
  await product.save();
  return Response.json({ message: "Product created successfully", product });
}

export async function PUT(request) {
  const body = await request.json();
  const { _id, ...updateData } = body;
  const product = await Product.findByIdAndUpdate(_id, updateData, { new: true });
  if (!product) {
    return new Response("Product not found", { status: 404 });
  }
  return Response.json({ message: "Product updated successfully", product });
}

export async function PATCH(request) {
  const body = await request.json();
  const { _id, ...updateData } = body;
  const product = await Product.findByIdAndUpdate(_id, updateData, { new: true });
  if (!product) {
    return new Response("Product not found", { status: 404 });
  }
  return Response.json({ message: "Product partially updated successfully", product });
}