import Product from "@/models/Product";

export async function GET(request, { params }) {
  const id = params.id;
  const product = await Product.findById(id);
  if (!product) {
    return Response.json({ error: "Product not found" }, { status: 404 });
  }
  return Response.json(product);
}

export async function DELETE(request, { params }) {
  const id = params.id;
  const product = await Product.findByIdAndDelete(id);
  if (!product) {
    return Response.json({ error: "Product not found" }, { status: 404 });
  }
  return Response.json({ message: "Product deleted successfully" });
}