import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/md-tahmid-chowdhury-731737146/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/tahmid-12" Icon={FiGithub} />
      <SingleContactSocial link="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2Fmd.tahmidchowdhury%3Ffbclid%3DIwZXh0bgNhZW0CMTAAYnJpZBExaFVMTms2UXR5MWdabnIzagEeCl39xjvaTv2T317wH9xwOeAbjYvnGTJmHfS-tQTf0NN1sAsGz9kYh5Xc6QU_aem_9EpxUBTlGCU7ISEIsTlaDw&h=AT3DWiFeQQll97Bi4yk6KExTjhYZMfvehC0TeBTWSeBmznGT0GWz5IPbdhJdDbKVlilW8htF7WuyTDNZE2D62mR9z3Jz3QUa2SkD7DCJYS4xJ1yl_aW9DnRm_69by_5_K2Us" Icon={FaInstagram} />
    </div>
  );
};

export default ContactSocial;
