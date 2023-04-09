import React, { useState, useEffect } from "react";
import QRCode from "qrcode";
import { Helmet } from "react-helmet";

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
    script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    document.body.appendChild(script);

    const ins = document.createElement("ins");
    ins.className = "adsbygoogle";
    ins.style.display = "block";
    ins.setAttribute("data-ad-client", "ca-pub-4841635049282195");
    ins.setAttribute("data-ad-slot", "8047351066");
    ins.setAttribute("data-ad-format", "auto");
    ins.setAttribute("data-full-width-responsive", "true");
    document.body.appendChild(ins);

    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <div className="qr-code-generator-container">
      <Helmet>
        <title>QR Code Generator</title>
      </Helmet>
      <h1>QR Code Generator</h1>
      <ins className="adsbygoogle"
           style={{ display: "block" }}
           data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
           data-ad-slot="1234567890"
           data-ad-format="auto"
           data-full-width-responsive="true"></ins>
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
