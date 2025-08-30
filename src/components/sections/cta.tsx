import { CircularText } from "~/components/ui/circular-text";
import { Prism } from "~/components/ui/prism";

export const CTA = () => (
  <section className="bg-background relative -top-24 pt-72">
    <div className="relative container h-[1000px] px-0">
      <div className="relative">
        <Prism
          animationType="hover"
          timeScale={0.5}
          height={3.5}
          baseWidth={5}
          scale={1.8}
          suspendWhenOffscreen={true}
          hoverStrength={1}
          hueShift={0}
          colorFrequency={1}
          noise={0}
          glow={1.5}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <CircularText
            text="AI✦Entrepreneurs✦at✦Berkeley✦"
            onHover="goBonkers"
            className="place-content-center"
          />
        </div>
      </div>
    </div>
  </section>
);
