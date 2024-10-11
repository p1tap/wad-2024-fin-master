import Customer from "@/models/Customer";

export async function GET(request, { params }) {
  const id = params.id;
  const customer = await Customer.findById(id);
  if (!customer) {
    return Response.json({ error: "Customer not found" }, { status: 404 });
  }
  return Response.json(customer);
}

export async function DELETE(request, { params }) {
  const id = params.id;
  const customer = await Customer.findByIdAndDelete(id);
  if (!customer) {
    return Response.json({ error: "Customer not found" }, { status: 404 });
  }
  return Response.json({ message: "Customer deleted successfully" });
}