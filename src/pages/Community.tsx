import { useState } from "react";
import { useTranslation } from "react-i18next";
import { MessageCircle, Stethoscope, ArrowRight, ArrowLeft } from "lucide-react";
import WadAlHalalAvatar from "@/components/WadAlHalalAvatar";
import { cn } from "@/lib/utils";

const ROOMS = [
  {
    id: "diary",
    icon: MessageCircle,
    titleAr: "يوميات ممرض",
    titleEn: "Diary of a Nurse",
    descAr: "غرفة لنشر ومشاركة الأفكار والآراء المهنية بين الزملاء.",
    descEn: "A room for sharing professional thoughts and opinions among colleagues.",
  },
  {
    id: "consultation",
    icon: Stethoscope,
    titleAr: "الاستشارة الطبية",
    titleEn: "Medical Consultation",
    descAr: "غرفة مخصصة للدردشة التفاعلية وتقديم الاستشارات الطبية السريعة.",
    descEn: "A dedicated room for interactive chat and quick medical consultations.",
  },
];

const Community = () => {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const [activeRoom, setActiveRoom] = useState<string | null>(null);

  if (activeRoom) {
    const room = ROOMS.find((r) => r.id === activeRoom);
    return (
      <div className="min-h-screen p-4 md:p-8" style={{ fontFamily: "'Cairo', sans-serif" }}>
        <button
          onClick={() => setActiveRoom(null)}
          className="flex items-center gap-2 text-sm text-primary hover:underline mb-6 font-medium"
        >
          {isAr ? <ArrowRight className="h-4 w-4" /> : <ArrowLeft className="h-4 w-4" />}
          {isAr ? "رجوع للغرف" : "Back to rooms"}
        </button>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/10">
            {room && <room.icon className="h-10 w-10 text-primary" />}
          </div>
          <h2 className="text-2xl font-bold text-foreground">
            {isAr ? room?.titleAr : room?.titleEn}
          </h2>
          <p className="text-muted-foreground">
            {isAr ? "🚧 قريباً — سيتم إطلاق هذه الغرفة قريباً!" : "🚧 Coming Soon — This room will launch soon!"}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ fontFamily: "'Cairo', sans-serif" }}>
      {/* Header */}
      <div className="flex items-center gap-4 mb-10">
        <WadAlHalalAvatar size={48} />
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            {isAr ? "مجتمع التمريض" : "Nurse Community"}
          </h1>
          <p className="text-sm text-muted-foreground">
            {isAr ? "اختر غرفة للانضمام والمشاركة" : "Choose a room to join and participate"}
          </p>
        </div>
      </div>

      {/* Two Large Room Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
        {ROOMS.map((room) => {
          const Icon = room.icon;
          return (
            <button
              key={room.id}
              onClick={() => setActiveRoom(room.id)}
              className={cn(
                "group relative flex flex-col items-center justify-center text-center gap-5",
                "p-8 md:p-10 rounded-2xl aspect-square",
                "bg-primary/10 border border-primary/20",
                "shadow-md hover:shadow-xl",
                "transition-all duration-300 ease-out",
                "hover:scale-[1.04] active:scale-[0.97]",
                "cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-ring"
              )}
            >
              <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-primary/15 group-hover:bg-primary/25 transition-colors duration-300">
                <Icon className="h-10 w-10 text-primary" strokeWidth={1.8} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground leading-tight">
                {isAr ? room.titleAr : room.titleEn}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[240px]">
                {isAr ? room.descAr : room.descEn}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Community;
