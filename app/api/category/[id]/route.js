import Category from "@/models/Category";

export async function GET(request, { params }) {
    const id = params.id;
    const category = await Category.findById(id);
    if (!category) {
        return Response.json({ error: "Category not found" }, { status: 404 });
    }
    return Response.json(category);
}

export async function DELETE(request, { params }) {
    const id = params.id;
    const category = await Category.findByIdAndDelete(id);
    if (!category) {
        return Response.json({ error: "Category not found" }, { status: 404 });
    }
    return Response.json({ message: "Category deleted successfully" });
}