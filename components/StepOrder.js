"use client";

import { useState } from "react";

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

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value });
  };

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Final Form Data:", form);
    alert("✅ Order submitted successfully!");
  };

  // Validation for each step
  const validateStep = () => {
    if (step === 1) {
      return form.productName && form.quantity;
    }
    if (step === 2) {
      return form.fullName && form.location && form.email && form.phone;
    }
    return true;
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

            <input
              type="file"
              name="productImage"
              onChange={handleChange}
              className="w-full border rounded-lg p-2"
            />

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
              placeholder="Location*eg: Banadir_Yaqshid_fagax"
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

            <div className="flex justify-between">
              <button
                type="button"
                onClick={prevStep}
                className="bg-gray-300 text-gray-800 py-2 px-6 rounded-lg"
              >
                Back
              </button>
              <button
                type="submit"
                className="bg-green-600 text-white py-2 px-6 rounded-lg"
              >
                Submit Order
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
}