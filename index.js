import BackLink from "./components/links/back.astro";
import Banner from "./components/banner.astro";
import Label from "./components/label.astro";
import Labels from "./components/labels.astro";
import OutlineButton from "./components/buttons/outline.astro";
import OutlineLink from "./components/links/outline.astro";
import Skiplink from "./components/skiplink.astro";

import PersonalData from "./data/personal";
import SeoData from "./data/seo";

let data = {
  personal: PersonalData,
  seo: SeoData,
};

export {
  BackLink,
  Banner,
  Label,
  Labels,
  OutlineButton,
  OutlineLink,
  Skiplink,
  data,
};
