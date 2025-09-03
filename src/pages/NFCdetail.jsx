import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function NFCdetail() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    phone: "",
    email: "",
    whatsapp: "",
    website: "",
    instagram: "",
    linkedin: "",
    photo: null,
    photoPreview: "",
    upiId: "",
    paypal: "",
    stripe: "",
    bankDetails: "",
    qrCode: null,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "qrCode") {
      setFormData({ ...formData, qrCode: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }

    // clear error for the field being edited
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        photo: file,
        photoPreview: URL.createObjectURL(file),
      });
      setErrors((prev) => ({ ...prev, photo: "" }));
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
      setFormData({
        ...formData,
        photo: file,
        photoPreview: URL.createObjectURL(file),
      });
      setErrors((prev) => ({ ...prev, photo: "" }));
    }
  };

  // ✅ Proper validateStep function
  const validateStep = () => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.name.trim()) newErrors.name = "Full Name is required";
      if (!formData.job.trim()) newErrors.job = "Job Title / Company is required";
      if (!formData.whatsapp.trim()) newErrors.whatsapp = "WhatsApp Number is required";     

      // Email validation
      if (!formData.email.trim()) {
        newErrors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Enter a valid email address";
      }
    }

    if (step === 2) {
      if (!formData.website.trim()) newErrors.website = "Website URL is required";
    }

    if (step === 3) {
      if (!formData.upiId.trim()) newErrors.upiId = "UPI ID is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      navigate("/view", { state: formData });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      <div className="flex items-center gap-4 justify-start w-full px-5">
        <a href="/">
          <button className="bg-gray-600 text-white px-4 py-2 rounded">⬅️ Back</button>
        </a>
      </div>

      <div className="max-w-lg w-full p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Step {step} of 3</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* STEP 1 */}
          {step === 1 && (
            <>
              <p className="text-xl text-center font-semibold">Business Info</p>
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

              <input
                type="text"
                name="job"
                placeholder="Job Title / Company"
                value={formData.job}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />
              {errors.job && <p className="text-red-500 text-sm">{errors.job}</p>}

              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

              <input
                type="text"
                name="whatsapp"
                placeholder="WhatsApp Number"
                value={formData.whatsapp}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />
              {errors.whatsapp && <p className="text-red-500 text-sm">{errors.whatsapp}</p>}

              {/* Upload Photo */}
              <div
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
                className="border-2 border-dashed rounded-lg p-6 text-center cursor-pointer hover:bg-gray-50"
              >
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                  id="photoUpload"
                />
                <label htmlFor="photoUpload" className="cursor-pointer text-gray-600">
                  {formData.photoPreview ? (
                    <img
                      src={formData.photoPreview}
                      alt="Preview"
                      className="mx-auto w-24 h-24 object-cover rounded-full border-2 border-blue-500"
                    />
                  ) : (
                    "Drag & drop or click to upload photo"
                  )}
                </label>
              </div>             
            </>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <>
              <p className="text-xl text-center font-semibold">Online Presence</p>
              <input
                type="url"
                name="website"
                placeholder="Website URL"
                value={formData.website}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />
              {errors.website && <p className="text-red-500 text-sm">{errors.website}</p>}

              <input
                type="url"
                name="instagram"
                placeholder="Instagram Profile URL"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />
              <input
                type="url"
                name="linkedin"
                placeholder="LinkedIn Profile URL"
                value={formData.linkedin}
                onChange={handleChange}
                className="w-full border p-3 rounded"
              />
            </>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <>
              <p className="text-xl text-center font-semibold">Payments</p>
              <input
                type="text"
                name="upiId"
                placeholder="UPI ID (e.g. name@upi)"
                value={formData.upiId}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.upiId && <p className="text-red-500 text-sm">{errors.upiId}</p>}

              <p className="text-md font-bold">QR Code Image Upload</p>
              <input
                type="file"
                name="qrCode"
                accept="image/*"
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />

              <input
                type="url"
                name="paypal"
                placeholder="PayPal Link"
                value={formData.paypal}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <input
                type="url"
                name="stripe"
                placeholder="Stripe Link"
                value={formData.stripe}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              <textarea
                name="bankDetails"
                placeholder="Bank Transfer Details"
                value={formData.bankDetails}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
            </>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-4">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep(step - 1)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Back
              </button>
            )}

            {step < 3 && (
              <button
                type="button"
                onClick={handleNext}
                className="ml-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Next
              </button>
            )}

            {step === 3 && (
              <button
                type="submit"
                className="ml-auto px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Generate Profile
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default NFCdetail;
