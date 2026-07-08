import { ImageResponse } from "next/og";

// กำหนดประเภทและขนาดพิกเซลที่ต้องการให้ Next.js ส่งออกไป
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: "26px",
        background: "black",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "20%",
      }}
    >
      Q
    </div>,
    {
      ...size,
    },
  );
}
