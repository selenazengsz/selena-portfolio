import { content } from "../content.js";
import "./Marquee.css";

// 无缝横向跑马灯：两组相同内容并排，轨道平移 -50% 即可首尾相接。
export default function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {[0, 1].map((group) => (
          <div className="marquee-group" key={group}>
            {content.marquee.map((text) => (
              <span key={text}>{text}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
