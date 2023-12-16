import React from "react";
import Image from "next/image";
import SliderContainer, { SliderItem } from "./slider";

const ClientLogos: React.FC = () => (
  <>
    <SliderContainer className="" contentWidth={1290} initialOffsetX={0}>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/paypal.png"
          width={150}
          height={50}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/amazon-pay.png"
          width={150}
          height={50}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/google-pay.png"
          width={150}
          height={50}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/paypal.png"
          width={150}
          height={50}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/samsung.png"
          width={150}
          height={50}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/social.png"
          width={150}
          height={50}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/stripe.png"
          width={150}
          height={50}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/visa.png"
          width={150}
          height={50}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/zoom.png"
          width={150}
          height={50}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>
      <SliderItem width={150}>
        <Image
          src="/assets/trustedby/paypal.png"
          width={150}
          height={50}
          alt="logo"
          objectFit="contain"
        />
      </SliderItem>

    </SliderContainer>
  </>
);

export default ClientLogos;
