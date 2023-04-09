import React, { useState } from "react";
import QRCode from "qrcode";

function QRCodeGenerator() {
  const [url, setUrl] = useState("");
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState("");

  const generateQRCode = async () => {
    try {
      const qrCodeDataUrl = await QRCode.toDataURL(url);
      setQrCodeDataUrl(qrCodeDataUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="qr-code-generator-container">
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={url}
        placeholder="Enter a URL"
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={generateQRCode}>Generate QR Code</button>
      {qrCodeDataUrl && <img src={qrCodeDataUrl} alt="QR Code" />}
    </div>
  );
}

export default QRCodeGenerator;
