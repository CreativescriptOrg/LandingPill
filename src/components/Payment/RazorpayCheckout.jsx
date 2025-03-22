import React, { useState, useEffect } from "react";
import axios from "axios";
import SuccessModal from "../ConfirmationModal/SuccessModal";
import { Crown } from "../../../screens/AuditGuide/Icon";
import { ALL_LINKS } from "../../../config";

const RazorpayCheckout = ({ orderId, email }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [countryCode, setCountryCode] = useState("US");

  // Function to load the Razorpay script dynamically
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const getUserRegionCurrency = async () => {
    try {
      const response = await axios.get("https://ipapi.co/json/");
      const regionCode = response.data.country_code;

      setCountryCode(regionCode);
    } catch (error) {
      console.error("Error fetching user region:", error);
    }
  };

  useEffect(() => {
    getUserRegionCurrency();
  }, []);

  // Function to initiate payment
  const initiatePayment = async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);

      // 1. Load the Razorpay script
      const isScriptLoaded = await loadRazorpayScript();
      if (!isScriptLoaded) {
        throw new Error("Razorpay SDK failed to load");
      }

      // 2. Make API call to the backend to create an order
      const orderResponse = await axios.post(
        `${ALL_LINKS.BASE_URL}/api/create-order`,
        {
          countryCode: countryCode,
          id: orderId,
          email: email,
        }
      );

      const { id, key_id, uniqueId } = orderResponse?.data?.data;
      const order_id = id;

      // 3. Configure Razorpay options
      const options = {
        key: key_id,
        name: "Your Company Name",
        description: "Payment for your product/service",
        order_id: order_id,
        handler: async function (response) {
          try {
            console.log("response", response);
            // 4. On successful payment, verify with the backend
            const verificationResponse = await axios.post(
              `${ALL_LINKS.BASE_URL}/api/verify-payment`,
              {
                razorpay_payment_id: response?.razorpay_payment_id,
                razorpay_order_id: response?.razorpay_order_id,
                razorpay_signature: response?.razorpay_signature,
                uniqueId,
              }
            );

            console.log("verificationResponse", verificationResponse);
            if (verificationResponse.data.success) {
              setSuccess(true);
            } else {
              setError("Payment verification failed");
            }
          } catch (error) {
            setError("Error verifying payment: " + error?.message);
          }
        },
        prefill: {
          name: "Customer Name",
          email: "customer@example.com",
          contact: "9999999999",
        },
        notes: {
          address: "Customer Address",
        },
        theme: {
          color: "#3399cc",
        },
      };

      // 5. Create and open Razorpay payment form
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();

      // Handle payment failure
      razorpayInstance.on("payment.failed", function (response) {
        setError(
          `Payment failed: ${response?.error.code} - ${response?.error.description}`
        );
      });
    } catch (error) {
      setError("Error initiating payment: " + error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4">
        <div className="card max-w-md mx-auto p-6">
          <button
            onClick={initiatePayment}
            disabled={loading}
            className="purple_button"
          >
            {loading ? "Processing..." : "Get full Report"}
            {!loading && <Crown />}
          </button>

          {error && (
            <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
              {error}
            </div>
          )}
        </div>
      </div>
      <SuccessModal
        subtitle="You will get your health check 
		report in 10min on your mail."
        open={success}
        setOpen={setSuccess}
      />
    </>
  );
};

export default RazorpayCheckout;
