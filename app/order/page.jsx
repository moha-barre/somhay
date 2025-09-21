import Image from "next/image";
import MultiStepOrderForm from "@/components/StepOrder";
import Condition from "@/components/Condition";

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-back py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center text-gray-300 mb-8">
          Place Your Order
        </h1>

        <div className="mb-8">
          <Image
            src="/order.jpg"
            alt="Order illustration"
            width={1200}
            height={600}
            className="rounded-2xl shadow-lg object-cover w-full"
            priority
          />
        </div>

        <MultiStepOrderForm />
        <Condition />
      </div>
    </main>
  );
}