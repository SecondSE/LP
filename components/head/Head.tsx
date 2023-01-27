import Head from "next/head";
import MobileImage from "../../public/img/mobileLogo.png";

export default function MetaHead() {
  return (
    <Head>
      {/* default deets */}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="Second Sight is a brand experience agency connecting people culture and your brand."
      />
      <meta charSet="utf-8" />
      <meta
        property="og:url"
        content="https://secondsightexperience.nyc"
        key="ogurl"
      />
      <meta
        property="og:image"
        content="/../../public/img/mobileLogo.png"
        key="ogimage"
      />
      <meta
        property="og:site_name"
        content="Second Sight Experience"
        key="ogsitename"
      />
      <meta property="og:title" content="Second Sight Experience" key="title" />
      <title>2nd Sight Exp.</title>
    </Head>
  );
}
