import { cn } from "@/lib/utils";

const Logo = ({
  className,
  showTagline = true,
}: {
  className?: string;
  showTagline?: boolean;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1.5 sm:gap-2 leading-none",
        className
      )}
    >
      {/* ICON */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 730 740"
        className="h-10 w-auto sm:h-12"
      >
        <defs>
          <linearGradient
            id="linear-gradient"
            x1="672.366"
            y1="411.878"
            x2="246.409"
            y2="657.805"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#21a2dc" />
            <stop offset="1" stopColor="#1e4995" />
          </linearGradient>
          <linearGradient
            id="linear-gradient-2"
            x1="726.672"
            y1="267.564"
            x2="336.384"
            y2="492.897"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-3"
            x1="630.451"
            y1="100.911"
            x2="403.576"
            y2="231.897"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-4"
            x1="481.083"
            y1="81.502"
            x2="55.126"
            y2="327.428"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-5"
            x1="389.912"
            y1="245.362"
            x2="-0.376"
            y2="470.695"
            xlinkHref="#linear-gradient"
          />
          <linearGradient
            id="linear-gradient-6"
            x1="324.001"
            y1="507.71"
            x2="97.125"
            y2="638.697"
            xlinkHref="#linear-gradient"
          />
        </defs>
        <g id="final_logo" data-name="final logo">
          <polygon
            points="207.212 589.913 207.212 475.319 472.516 631.104 716.216 487.828 630.006 639.693 461.519 738.727 207.212 589.913"
            stroke="#1d1d1b"
            strokeMiterlimit="10"
            fill="url(#linear-gradient)"
          />
          <polygon
            points="471.926 615.951 374.349 558.654 639.653 402.869 639.502 116.582 725.711 268.447 725.796 466.366 471.926 615.951"
            stroke="#1d1d1b"
            strokeMiterlimit="10"
            fill="url(#linear-gradient-2)"
          />
          <polygon
            points="630.054 397.863 532.477 455.16 532.477 143.59 288.626 0.58 461.045 0.58 629.616 99.464 630.054 397.863"
            stroke="#1d1d1b"
            strokeMiterlimit="10"
            fill="url(#linear-gradient-3)"
          />
          <polygon
            points="520.28 149.393 520.28 263.987 254.976 108.202 11.277 251.479 97.486 99.613 265.973 0.58 520.28 149.393"
            stroke="#1d1d1b"
            strokeMiterlimit="10"
            fill="url(#linear-gradient-4)"
          />
          <polygon
            points="254.37 122.308 351.947 179.605 86.643 335.39 86.794 621.677 0.585 469.812 0.5 271.893 254.37 122.308"
            stroke="#1d1d1b"
            strokeMiterlimit="10"
            fill="url(#linear-gradient-5)"
          />
          <polygon
            points="97.522 341.744 195.1 284.447 195.1 596.018 438.95 739.028 266.531 739.028 97.96 640.143 97.522 341.744"
            stroke="#1d1d1b"
            strokeMiterlimit="10"
            fill="url(#linear-gradient-6)"
          />
        </g>
      </svg>

      {/* TEXT */}
      {showTagline && (
        <div className="flex flex-col justify-center leading-tight">
          <span className="font-extrabold text-[1.25rem] sm:text-[1.4rem] tracking-wide text-[#0c1d3b]">
            OPTVSN JOURNEY
          </span>
          <span className="text-[0.72rem] sm:text-[0.8rem] tracking-[0.15em] text-gray-500 font-medium">
            LEARNING TO LEADING PRODUCTS
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;