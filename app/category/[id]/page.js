"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { APIBASE } from '../../config';

export default function CategoryDetail() {
  const [category, setCategory] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchCategory() {
      const response = await fetch(`${APIBASE}/category/${params.id}`);
      const data = await response.json();
      setCategory(data);
    }
    fetchCategory();
  }, [params.id]);

  if (!category) return <div>Loading...</div>;

  return (
    <div className="m-4">
      <h1 className="text-2xl font-bold mb-4">Category Details</h1>
      <p><strong>Name:</strong> {category.name}</p>
      <p><strong>Order:</strong> {category.order}</p>
      <p><strong>ID:</strong> {category._id}</p>
    </div>
  );
}