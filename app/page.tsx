"use client";

import { useState, useRef, useEffect } from "react";

export default function QRCodePage() {
  const [url, setUrl] = useState("https://example.com");
  const [error, setError] = useState("");
  const [qrCodeInstance, setQrCodeInstance] = useState<
    import("qr-code-styling-node").default | null
  >(null);
  const qrRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import("qr-code-styling-node").then(({ default: QRCodeStyling }) => {
      const qrCode = new QRCodeStyling({
        width: 280,
        height: 280,
        type: "canvas",
        data: url,
        dotsOptions: {
          color: "#18181b",
          type: "square",
        },
        backgroundOptions: {
          color: "#ffffff",
        },
        cornersSquareOptions: {
          type: "square",
          color: "#18181b",
        },
        cornersDotOptions: {
          type: "square",
          color: "#18181b",
        },
      });

      setQrCodeInstance(qrCode);
    });
  }, []);

  useEffect(() => {
    if (qrRef.current && qrCodeInstance) {
      qrRef.current.innerHTML = "";
      qrCodeInstance.append(qrRef.current);
    }
  }, [qrCodeInstance]);

  const handleGenerate = (newUrl: string) => {
    const trimmed = newUrl.trim();

    setError("");
    if (qrCodeInstance) {
      qrCodeInstance.update({ data: trimmed });
    }
  };

  const handleDownload = () => {
    if (qrCodeInstance && !error) {
      qrCodeInstance.download({ name: "qr-code", extension: "png" });
    }
  };

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-zinc-900">
      <div className="w-full max-w-sm flex flex-col items-center">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-xl font-light tracking-wide text-zinc-900">
            QR Ghost
          </h1>
          <p className="text-xs text-zinc-400 mt-1 tracking-widest uppercase">
            Free and Open Source QR Code Generator
          </p>
        </div>

        <div className="w-full mb-2">
          <input
            type="text"
            className={`w-full px-0 py-2 bg-transparent border-0 border-b focus:outline-none transition-colors duration-300 text-sm placeholder:text-zinc-300 ${"border-zinc-200 focus:border-zinc-900"}
            `}
            placeholder="https://example.com"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              handleGenerate(e.target.value);
            }}
          />
        </div>

        <div className="p-6 border border-zinc-100 mb-10">
          <div ref={qrRef} />
        </div>

        <button
          onClick={handleDownload}
          disabled={!!error}
          className="w-full mt-4 rounded-lg bg-zinc-100 px-4 py-3 text-center text-xs font-semibold uppercase tracking-widest text-zinc-900 transition-colors duration-300 hover:bg-zinc-200 disabled:cursor-not-allowed disabled:opacity-50"
          type="button"
        >
          Download PNG
        </button>
      </div>
    </main>
  );
}
