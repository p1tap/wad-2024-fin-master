import Customer from "@/models/Customer";

export async function GET() {
  const customers = await Customer.find().sort({ memberNumber: 1 });
  return Response.json(customers);
}

export async function POST(request) {
  const body = await request.json();
  const customer = new Customer(body);
  await customer.save();
  return Response.json({ message: "Customer created successfully", customer });
}

export async function PUT(request) {
  const body = await request.json();
  const customer = await Customer.findByIdAndUpdate(body._id, body, { new: true });
  if (!customer) {
    return new Response("Customer not found", { status: 404 });
  }
  return Response.json({ message: "Customer updated successfully", customer });
}