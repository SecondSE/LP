import Head from "next/head";
import MobileImage from "../../public/img/mobileLogo.png";

export default function MetaHead() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        property="og:description"
        content="Second Sight is a brand experience agency connecting people culture and your brand."
      />
      <meta
        property="og:url"
        content="https://secondsightexperience.nyc"
        key="ogurl"
      />
      <meta
        property="og:image"
        content="https://user-images.githubusercontent.com/105324058/215009956-a3454bd4-867c-4931-86e2-c2ecea788cba.png"
        key="ogimage"
      />
      <meta
        property="og:site_name"
        content="Second Sight Experience"
        key="ogsitename"
      />
      <meta property="og:title" content="Second Sight Experience" key="title" />

      <title>Second Sight Experience</title>
    </Head>
  );
}
