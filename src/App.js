import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4841635049282195";
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100px", width: "100%", backgroundColor: "#f1f1f1" }}>
        <h2>Advertisement Banner</h2>
      </div>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        value={url}
        placeholder="Enter a URL"
        onChange={(e) => setUrl(e.target.value)}
        style={{ marginBottom: "20px" }}
      />
      <button onClick={generateQRCode} style={{ marginTop: "20px" }}>Generate QR Code</button>
      {qrCodeDataUrl && <img src={qrCodeDataUrl} alt="QR Code" style={{ height: "400px", width: "400px", marginTop: "20px" }} />}
    </div>
  );
}

export default QRCodeGenerator;
