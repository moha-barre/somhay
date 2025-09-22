"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function MultiStepOrderForm() {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    // Product Info
    productImage: null,
    productName: "",
    productUrl: "",
    quantity: "",
    orderType: "normal",
    shippingMethod: "air",
    notes: "",
    // Person Info
    fullName: "",
    businessName: "",
    location: "",
    email: "",
    phone: "",
  });

  const [preview, setPreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm({ ...form, [name]: files[0] });
      setPreview(URL.createObjectURL(files[0]));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const validateStep = () => {
    if (step === 1) return form.productName && form.quantity;
    if (step === 2) return form.fullName && form.location && form.email && form.phone;
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess(false);
    setErrorMsg("");

    let imageUrl = null;

    if (form.productImage) {
      const fileName = `${Date.now()}-${form.productImage.name}`;

      const { error: uploadError } = await supabase.storage
        .from("order-images")
        .upload(fileName, form.productImage);

      if (uploadError) {
        setErrorMsg(uploadError.message);
        setSubmitting(false);
        return;
      }

      const { data, error: urlError } = supabase.storage
        .from("order-images")
        .getPublicUrl(fileName);

      if (urlError) {
        setErrorMsg(urlError.message);
        setSubmitting(false);
        return;
      }

      imageUrl = data.publicUrl;
    }

    const { error } = await supabase.from("orders").insert([
      {
        product_image: imageUrl,
        product_name: form.productName,
        product_url: form.productUrl,
        quantity: parseInt(form.quantity),
        order_type: form.orderType,
        shipping_method: form.shippingMethod,
        notes: form.notes,
        full_name: form.fullName,
        business_name: form.businessName,
        location: form.location,
        email: form.email,
        phone: form.phone,
      },
    ]);

    if (error) {
      setErrorMsg(error.message);
    } else {
      setSuccess(true);
      setForm({
        productImage: null,
        productName: "",
        productUrl: "",
        quantity: "",
        orderType: "normal",
        shippingMethod: "air",
        notes: "",
        fullName: "",
        businessName: "",
        location: "",
        email: "",
        phone: "",
      });
      setPreview(null);
      setStep(1);
    }

    setSubmitting(false);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Step Indicator */}
        <div className="flex justify-center space-x-2 mb-6">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`w-3 h-3 rounded-full ${
                step === s ? "bg-blue-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        {/* Step 1: Product Info */}
        {step === 1 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Product Details
            </h2>

            {/* Image Upload */}
            <div className="flex flex-col items-center">
              <label
                htmlFor="productImage"
                className="w-full border-2 border-dashed border-gray-300 rounded-xl p-6 flex flex-col items-center justify-center cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition"
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-32 h-32 max-h-40 object-contain rounded-lg mb-2"
                  />
                ) : (
                  <span className="text-gray-500 text-sm">📷 Click to upload image</span>
                )}
                <input
                  type="file"
                  id="productImage"
                  name="productImage"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"
                />
              </label>
              {preview && (
                <button
                  type="button"
                  onClick={() => {
                    setForm({ ...form, productImage: null });
                    setPreview(null);
                  }}
                  className="mt-2 text-xs text-red-500 hover:underline"
                >
                  Remove
                </button>
              )}
            </div>

            <input
              type="text"
              name="productName"
              placeholder="Product Name *"
              value={form.productName}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            />

            <input
              type="url"
              name="productUrl"
              placeholder="Product URL (optional)"
              value={form.productUrl}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />

            <input
              type="number"
              name="quantity"
              placeholder="Quantity *"
              value={form.quantity}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            />

            <select
              name="orderType"
              value={form.orderType}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="normal">Normal Order</option>
              <option value="bulk">Bulk Order</option>
            </select>

            <select
              name="shippingMethod"
              value={form.shippingMethod}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            >
              <option value="air">Air Freight</option>
              <option value="sea">Sea Freight</option>
            </select>

            <textarea
              name="notes"
              placeholder="Additional Notes"
              value={form.notes}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              rows={3}
            />

            <button
              type="button"
              disabled={!validateStep()}
              onClick={nextStep}
              className={`w-full py-2 rounded-lg text-white ${
                validateStep()
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Next
            </button>
          </div>
        )}

        {/* Step 2: Person Info */}
        {step === 2 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Your Information
            </h2>

            <input
              type="text"
              name="fullName"
              placeholder="Full Name *"
              value={form.fullName}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            />

            <input
              type="text"
              name="businessName"
              placeholder="Business Name (optional)"
              value={form.businessName}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />

            <input
              type="text"
              name="location"
              placeholder="Location* eg: Banadir_Yaqshid_fagax"
              value={form.location}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email *"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone / WhatsApp *"
              value={form.phone}
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
              required
            />

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg"
              >
                Back
              </button>
              <button
                type="button"
                disabled={!validateStep()}
                onClick={nextStep}
                className={`py-2 px-6 rounded-lg text-white ${
                  validateStep()
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Review & Submit */}
        {step === 3 && (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-700">
              Review Your Order
            </h2>
            <p className="text-gray-600 mb-4">
              Please confirm the details before submitting.
            </p>

            <div className="bg-gray-100 p-4 rounded-lg space-y-3 text-sm">
              <div>
                <strong>Product:</strong> {form.productName} ({form.quantity})
              </div>
              {form.productUrl && (
                <div>
                  <strong>URL:</strong> {form.productUrl}
                </div>
              )}
              <div>
                <strong>Order Type:</strong> {form.orderType}
              </div>
              <div>
                <strong>Shipping:</strong> {form.shippingMethod}
              </div>
              {form.notes && (
                <div>
                  <strong>Notes:</strong> {form.notes}
                </div>
              )}
              <hr />
              <div>
                <strong>Name:</strong> {form.fullName}
              </div>
              {form.businessName && (
                <div>
                  <strong>Business:</strong> {form.businessName}
                </div>
              )}
              <div>
                <strong>Location:</strong> {form.location}
              </div>
              <div>
                <strong>Email:</strong> {form.email}
              </div>
              <div>
                <strong>Phone:</strong> {form.phone}
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-2 mt-2">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg"
              >
                Back
              </button>

              <button
                type="submit"
                className={`w-full md:w-auto py-2 rounded-lg text-white ${
                  submitting ? "bg-gray-400 cursor-not-allowed" : "bg-green-600 hover:bg-green-700"
                }`}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Order"}
              </button>
            </div>

            {/* Feedback */}
            {success && <p className="text-green-600 mt-2">✅ Order submitted successfully!</p>}
            {errorMsg && <p className="text-red-500 mt-2">❌ {errorMsg}</p>}
          </div>
        )}
      </form>
    </div>
  );
               }
