import Category from "@/models/Category";

export async function GET() {
  const categories = await Category.find().sort({ order: -1 });
  return Response.json(categories);
}

export async function POST(request) {
  const body = await request.json();
  const category = new Category(body);
  await category.save();
  return Response.json({ message: "Category created successfully", category });
}

export async function PUT(request) {
  const body = await request.json();
  const category = await Category.findByIdAndUpdate(body._id, body, { new: true });
  if (!category) {
    return new Response("Category not found", { status: 404 });
  }
  return Response.json({ message: "Category updated successfully", category });
}