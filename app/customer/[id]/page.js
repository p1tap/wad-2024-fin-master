"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { APIBASE } from '../../config';

export default function CustomerDetail() {
  const [customer, setCustomer] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchCustomer() {
      const response = await fetch(`${APIBASE}/customer/${params.id}`);
      const data = await response.json();
      setCustomer(data);
    }
    fetchCustomer();
  }, [params.id]);

  if (!customer) return <div>Loading...</div>;

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold mb-4">Customer Details</h1>
      <p><strong>Name:</strong> {customer.name}</p>
      <p><strong>Date of Birth:</strong> {new Date(customer.dateOfBirth).toLocaleDateString()}</p>
      <p><strong>Member Number:</strong> {customer.memberNumber}</p>
      <p><strong>Interests:</strong> {customer.interests}</p>
    </div>
  );
}