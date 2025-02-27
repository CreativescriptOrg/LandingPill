// Frontend Code - App.js
import React, { useState } from 'react';
import axios from 'axios';

const RazorpayCheckout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [amount, setAmount] = useState(1000); // Amount in paise (₹10)

  // Function to load the Razorpay script dynamically
  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  // Function to initiate payment
  const initiatePayment = async () => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(null);

      // 1. Load the Razorpay script
      const isScriptLoaded = await loadRazorpayScript();
      if (!isScriptLoaded) {
        throw new Error('Razorpay SDK failed to load');
      }

      // 2. Make API call to the backend to create an order
      const orderResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/create-order`, {
        amount: amount,
        currency: 'INR',
        receipt: 'receipt_' + Date.now()
      });

      const { id, key_id } = orderResponse?.data?.data;
      const order_id = id;
      // 3. Configure Razorpay options
      const options = {
        key: key_id,
        amount: amount,
        currency: 'INR',
        name: 'Your Company Name',
        description: 'Payment for your product/service',
        order_id: order_id,
        handler: async function (response) {
          try {
            console.log('response',response);
            // 4. On successful payment, verify with the backend
            const verificationResponse = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/verify-payment`, {
              razorpay_payment_id: response?.razorpay_payment_id,
              razorpay_order_id: response?.razorpay_order_id,
              razorpay_signature: response?.razorpay_signature
            });
            
            console.log('verificationResponse',verificationResponse);
            if (verificationResponse.data.success) {
              setSuccess('Payment was successful! Order ID: ' + response?.razorpay_order_id);
            } else {
              setError('Payment verification failed');
            }
          } catch (error) {
            setError('Error verifying payment: ' + error?.message);
          }
        },
        prefill: {
          name: 'Customer Name',
          email: 'customer@example.com',
          contact: '9999999999'
        },
        notes: {
          address: 'Customer Address'
        },
        theme: {
          color: '#3399cc'
        }
      };

      // 5. Create and open Razorpay payment form
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
      
      // Handle payment failure
      razorpayInstance.on('payment.failed', function (response) {
        setError(`Payment failed: ${response?.error.code} - ${response?.error.description}`);
      });
      
    } catch (error) {
      setError('Error initiating payment: ' + error?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="card max-w-md mx-auto p-6">
        
        <h1 className="text-2xl font-bold mb-4">Razorpay Payment</h1>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Amount (₹):</label>
          <input
            type="number"
            value={amount / 100}
            onChange={(e) => setAmount(Math.round(parseFloat(e.target.value) * 100))}
            className="w-full p-2 border rounded"
            min="1"
          />
          <p className="text-sm text-gray-500 mt-1">Amount in paise: {amount}</p>
        </div>
        
        <button
          onClick={initiatePayment}
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          {loading ? 'Processing...' : 'Pay Now'}
        </button>
        
        {error && (
          <div className="mt-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}
        
        {success && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
            {success}
          </div>
        )}
      </div>
    </div>
  );
};

export default RazorpayCheckout;