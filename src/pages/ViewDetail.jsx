import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function ViewDetail() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div className="text-center mt-10">
        <p className="text-lg text-gray-600">No data found. Please fill the form first.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-6 px-6 py-2 bg-blue-600 text-white font-medium rounded-full shadow hover:bg-blue-700"
        >
          Go to Form
        </button>
      </div>
    );
  }

  // Save Contact (VCF)
  const saveContact = () => {
    const vcardData = `
BEGIN:VCARD
VERSION:3.0
FN:${data.name}
PHOTO:${data.photoPreview}
TITLE:${data.job}
TEL:${data.phone}
EMAIL:${data.email}
URL:${data.website}
X-INSTAGRAM:${data.instagram}
X-UPI:${data.upiId},
END:VCARD
    `.trim();

    const blob = new Blob([vcardData], { type: "text/vcard" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${data.name}.vcf`;
    a.click();
    URL.revokeObjectURL(url);
  };

  // Save PDF
  const savePDF = () => {
    const content = document.getElementById("pdf-content");
    html2canvas(content, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const width = pdf.internal.pageSize.getWidth();
      const height = (canvas.height * width) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, width, height);
      pdf.save(`${data.name}_details.pdf`);
    });
  };

  // Share API
  const shareProfile = () => {
    const text = `Check out ${data.name}'s profile!\nphotoPreview: ${data.photoPreview} \nPhone: ${data.phone}\nEmail: ${data.email}\nWebsite: ${data.website}`;
    if (navigator.share) {
      navigator
        .share({
          title: `${data.name}'s Profile`,
          text,
          url: window.location.href,
        })
        .catch((err) => console.log("Share failed:", err));
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className=" justify-center items-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 p-4">

              <div
          id="pdf-content"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center items-start w-full bg-white rounded-2xl shadow-xl text-center p-8"
        >
          {/* Box 1 - Profile Image & Buttons */}
          <div className="p-6 flex flex-col items-center justify-center  ">
            {/* Profile Image */}
            <img
              src={data.photoPreview || "https://via.placeholder.com/120"}
              alt="Profile"
              className="w-28 h-28 rounded-full border-4 border-blue-500 shadow-md"
            />
            <h2 className="text-2xl font-bold mt-4">{data.name}</h2>
            <p className="text-gray-600">{data.job}</p>

            {/* Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {data.phone && (
                <a
                  href={`tel:${data.phone}`}
                  className="px-5 py-2 border rounded-full bg-gray-50 hover:bg-blue-100 transition"
                >
                  📞 Call
                </a>
              )}
              {data.email && (
                <a
                  href={`mailto:${data.email}`}
                  className="px-5 py-2 border rounded-full bg-gray-50 hover:bg-blue-100 transition"
                >
                  ✉️ Email
                </a>
              )}
              {data.website && (
                <a
                  href={data.website}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 border rounded-full bg-gray-50 hover:bg-purple-100 transition"
                >
                  🌐 Website
                </a>
              )}
              <button
                onClick={saveContact}
                className="px-5 py-2 border rounded-full bg-gray-50 hover:bg-yellow-100 transition"
              >
                💾 Save Contact
              </button>
            </div>
          </div>

          {/* Box 2 - Profile Details */}
          <div className="p-6 ">
            <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
            <p className="py-1"><strong>Name:</strong> {data?.name}</p>
            <p className="py-1"><strong>Email:</strong> {data?.email}</p>

            {data?.instagram && (
              <p className="py-3">
                <a
                  href={data.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 border rounded-full bg-gray-50 hover:bg-pink-100 transition"
                >
                  📸 Instagram
                </a>
              </p>
            )}

            {data?.linkedin && (
              <p className="py-3">
                <a
                  href={data.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2 border rounded-full bg-gray-50 hover:bg-blue-100 transition"
                >
                  💼 LinkedIn
                </a>
              </p>
            )}
          </div>

          {/* Box 3 - Payment Details */}
          <div className="p-6  ">
            <h3 className="text-xl font-semibold mb-4">💳 Pay Me</h3>
            {data?.upiId && <p className="py-2"><strong>UPI ID:</strong> {data.upiId}</p>}
            {data?.qrCode && (
              <div className="py-3">
                <p><strong>Scan QR:</strong></p>
                <img
                  src={URL.createObjectURL(data.qrCode)}
                  alt="UPI QR"
                  className="w-40 h-40 object-contain border p-2 mx-auto"
                />
              </div>
            )}
            {data?.paypal && (
              <p className="py-2">
                <a href={data.paypal} target="_blank" rel="noreferrer" className="bg-blue-500 text-white px-3 py-1 rounded">
                  Pay via PayPal
                </a>
              </p>
            )}
            {data?.stripe && (
              <p className="py-2">
                <a href={data.stripe} target="_blank" rel="noreferrer" className="bg-purple-500 text-white px-3 py-1 rounded">
                  Pay via Stripe
                </a>
              </p>
            )}
            {data?.bankDetails && (
              <p className="py-2"><strong>Bank:</strong> {data.bankDetails}</p>
            )}
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={savePDF}
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            📄 Save PDF
          </button>
          <button
            onClick={shareProfile}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          >
            🔗 Share
          </button>
          <Link to="/NFCdetail" className="bg-gray-600 text-white px-4 py-2 rounded">
            ⬅️ Back
          </Link>
        </div>  



    </div>
  );
}

export default ViewDetail;
