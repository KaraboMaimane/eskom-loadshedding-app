import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "wgniv1i7", // find this at manage.sanity.io or in your sanity.json
  dataset: "plug-majita", // this is from those question during 'sanity init'
  useCdn: true,
});