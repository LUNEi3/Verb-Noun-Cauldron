import type { Viewport } from "next";

// ใช้เฉพาะหน้า battle: ให้เว็บวาดเต็มจอถึงขอบ แล้วเราเว้นขอบเองตาม safe area
// (Dynamic Island / รอยบาก / แถบ Home) — ค่า env(safe-area-inset-*) จะมีผลก็ต่อเมื่อตั้ง cover
export const viewport: Viewport = {
  viewportFit: "cover",
  themeColor: "#20171c", // สีแถบเบราว์เซอร์บนมือถือ ให้กลืนกับขอบภาพพื้นหลัง (= --background)
};

export default function BattleLayout({ children }: LayoutProps<"/battle">) {
  // ล็อกทั้งหน้าไม่ให้เลื่อน แถบ URL จะได้ไม่หดขยายจนหน้ากระตุกระหว่างลากการ์ด
  // พื้นหลังจาก art (180×320) ขยายเต็มจอแบบหน้าอื่นของผู้เล่น — หน้านี้ใช้ภาพของ battle เอง
  return (
    <div className="fixed inset-0 overflow-hidden overscroll-none bg-[url('/background/background_battle.png')] bg-cover bg-center [image-rendering:pixelated]">
      {children}
    </div>
  );
}
