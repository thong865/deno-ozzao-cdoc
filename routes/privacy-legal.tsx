import { Head } from "$fresh/runtime.ts";
import { LangDropDown } from "../components/Dropdown.tsx";
import { i18n } from "../i18n.ts";
export default function PrivacyLegal() {
  return (
    <>
      <section className="h-screen w-full bg-gradient-to-r to-[#240b36] from-[#c31432] ">
        <div className="lg:w-8/12  md:w-8/12 container mx-auto py-3 flex justify-between">
          <div className="flex">
            <img
              src="./android-chrome-192x192.png"
              className="w-16 h-16"
              alt=""
              srcset=""
            />
            <div className="px-1">
              <h1 className="text-2xl font-semibold text-white">OZZAO</h1>
              <h1 className="text-md font-semibold text-white">
                ປອດໄພ ແລະ ໃສ່ໃຈການບໍລິການ
              </h1>
            </div>
          </div>
          <div className="mt-3">
            <LangDropDown />
          </div>
        </div>
        <div className="backdrop-opacity-10 backdrop-invert bg-white lg:w-8/12  md:w-8/12 container mx-auto px-5 py-5 rounded-3xl">
          <h1 className="text-3xl">Privacy Legal</h1>
          <p>
            The privacy of users is of utmost importance to Ozzao. We strive to
            comply with all applicable laws and regulations in protecting our
            users personal data, including GDPR and the California Consumer
            Privacy Act.
          </p>
          <p>
            We collect personal information from users, such as name, email
            address, and payment information, so that we can provide the best
            experience for our users. We also may collect technical information,
            such as IP address, device information, and browser type, to allow
            us to optimize the user experience.
          </p>
          <p>
            We also have implemented reasonable measures to protect data. We use
            SSL/TLS encryption methods, access controls, and secure
            authentication protocols to secure information collected from users.
          </p>
          <p>
            Users may manage or opt-out of certain data collection via the
            settings menu in our product. Additionally, users can contact us
            with any privacy-related requests through our support page.
          </p>
          <p>
            We do not sell or rent user data to third parties. We do, however,
            use third parties, such as payment platforms and service providers,
            to provide the best user experience possible. All third-party
            services that we use are GDPR compliant, and all collected data
            remains within our control and protection.
          </p>
        </div>
      </section>
    </>
  );
}
