import People from "@/components/People/people";
import Breadcrumb from "@/components/Common/Breadcrumb";


const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="about dss"
        // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In varius eros eget sapien consectetur ultrices. Ut quis dapibus libero."
      />
      <People />
    </>
  );
};

export default AboutPage;