import Head from "next/head";
import MobileImage from "../../public/img/mobileLogo.png";

export default function MetaHead() {
  return (
    <Head>
      {/* default deets */}
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <meta
        property="description"
        name="description"
        content="Second Sight is a brand experience agency connecting people culture and your brand."
      />
      <meta
        property="og:url"
        content="https://secondsightexperience.nyc"
        key="ogurl"
      />
      <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/105324058/215006670-e80967e5-b6d0-47ee-b730-d4ac8ff85669.png"
        key="ogimage"
      />
      <meta
        property="og:site_name"
        content="Second Sight Experience"
        key="ogsitename"
      />
      <meta property="og:title" content="Second Sight Experience" key="title" />

      <title>2nd Sight Experience</title>
    </Head>
  );
}
