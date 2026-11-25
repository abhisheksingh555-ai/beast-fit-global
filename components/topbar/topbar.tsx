import { HugeiconsIcon } from "@hugeicons/react";
import { topBar} from "@/constants/topbar";
import SocialMediaIcon from "../social-media/social-media";

export default function Topbar() {
  return (
    <div className="mx-auto flex h-full max-w-360 items-center justify-between px-10 text-[14px]">
      {/* Topbar Information */}
      <div className="flex items-center gap-5">
        {topBar.map((item, i) => (
          <div key={item.id} className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <HugeiconsIcon
                icon={item.icon}
                size={17}
                strokeWidth={1.7}
                className="text-white/80"
              />

              {item.href ? (
                <a
                  href={item.href}
                  className="transition-colors hover:text-white/70"
                >
                  {item.value}
                </a>
              ) : (
                <span>{item.value}</span>
              )}
            </div>

            {i < topBar.length - 1 && <span className="h-4 w-px bg-white/40" />}
          </div>
        ))}
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-5 text-[16px]">
        <SocialMediaIcon
          size={24}
          gap={4}
          className="text-white"
          iconClassName="hover:text-pink-400"
        />
      </div>
    </div>
  );
}
