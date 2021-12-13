<template>
  <section class="home">
    <Header />
    <Main />
    <OurAbout />
    <Service />
    <Faq />
    <Help />
    <Choose-us />
    <OurProject />
    <Process />
    <Company-price />
    <Company-partner />
    <Blog-post />
    <Footer />
  </section>
</template>

<script>
import Header from "@/components/Header.vue";
import Main from "../components/Main.vue";
import OurAbout from "../components/OurAbout.vue";
import Service from "../components/Service.vue";
import Faq from "../components/Faq.vue";
import Help from "../components/Help.vue";
import ChooseUs from "../components/ChooseUs.vue";
import OurProject from "../components/OurProject.vue";
import Process from "../components/Process.vue";
import CompanyPrice from "../components/CompanyPrice.vue";
import CompanyPartner from "../components/CompanyPartner.vue";
import BlogPost from "../components/BlogPost.vue";
import Footer from "../components/Footer.vue";
export default {
  name: "Home",
  components: {
    Header,
    Main,
    OurAbout,
    Service,
    Faq,
    Help,
    ChooseUs,
    OurProject,
    Process,
    CompanyPrice,
    CompanyPartner,
    BlogPost,
    Footer,
  },
};
</script>

<style lang="scss">
.home {
  overflow: hidden;
}
</style>
