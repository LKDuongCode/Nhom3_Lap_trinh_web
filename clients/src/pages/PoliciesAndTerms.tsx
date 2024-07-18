import React from "react";
import { useNavigate } from "react-router-dom";

export default function PoliciesAndTerms() {
  const navigate = useNavigate();
  return (
    <>
      <div className="m-10 flex flex-col gap-14">
        {/* 1 */}
        <div>
          <h1 className="rounded-e-2xl bg-black text-white p-3 mb-5 flex gap-10 ">
            <div
              className="flex items-center gap-2  "
              onClick={() => navigate(-1)}
            >
              <svg
                className="h-10 w-10 text-indigo-500 p-1 bg-indigo-300 rounded-full hover:text-indigo-100 hover:bg-indigo-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />{" "}
                <polyline points="12 19 5 12 12 5" />
              </svg>
              <span className="font-semibold text-lg text-white">Go Back</span>
            </div>
            <p> Policies and Terms</p>
          </h1>
          <h2 className="bg-black pl-3 py-1 w-max pr-10 rounded-e-2xl text-white mb-5">
            1. Introduction
          </h2>
          <p className="font-medium text-base">
            Welcome to Duong's Shop. By accessing and using our website, you
            agree to be bound by the following terms and conditions. Please read
            them carefully. If you do not agree to these terms, you should not
            use our website.
          </p>
        </div>

        {/* 2 */}
        <div className="flex gap-5 flex-col">
          <h2 className="bg-black pl-3 py-1 w-max pr-10 rounded-e-2xl text-white">
            2. Privacy Policy
          </h2>
          <div className="flex gap-5 flex-col">
            <h3>2.1 Data Collection</h3>
            <p className="font-medium text-base">
              We collect personal information that you provide to us directly,
              such as when you create an account, make a purchase, or contact us
              for support. This information may include your name, email
              address, phone number, and payment information.
            </p>
          </div>
          <div className="flex gap-5 flex-col">
            <h3>2.2 Data Use</h3>
            <p className="font-semibold text-base">
              We use the information we collect to:
            </p>
            <ul className="font-medium text-base pl-10 flex gap-5 flex-col">
              <li className="list-disc">
                Provide, operate, and maintain our services
              </li>
              <li className="list-disc">
                Process transactions and send related information
              </li>
              <li className="list-disc">
                Improve and personalize our services
              </li>
              <li className="list-disc">
                Communicate with you, including for customer service and support
              </li>
              <li className="list-disc">
                Send you marketing and promotional messages
              </li>
            </ul>
          </div>
        </div>
        {/* 3 */}
        <div className="flex gap-5 flex-col">
          <h2 className="bg-black pl-3 py-1 w-max pr-10 rounded-e-2xl text-white">
            3. Terms of Service
          </h2>
          <div className="flex gap-5 flex-col">
            <h3>3.1 Account Responsibilities</h3>
            <p className="font-medium text-base">
              You are responsible for maintaining the confidentiality of your
              account information, including your password, and for all
              activities that occur under your account. You agree to notify us
              immediately of any unauthorized use of your account.
            </p>
          </div>
          <div className="flex gap-5 flex-col">
            <h3>3.2 Termination</h3>
            <p className="font-medium text-base">
              We reserve the right to terminate or suspend your account and
              access to our services at our discretion, without notice, for
              conduct that we believe violates these terms or is harmful to our
              interests or the interests of others.
            </p>
          </div>
        </div>
        {/* 4 */}

        <div className="flex gap-5 flex-col">
          <h2 className="bg-black pl-3 py-1 w-max pr-10 rounded-e-2xl text-white">
            4. Intellectual Property
          </h2>
          <p className="font-medium text-base">
            All content on our website, including text, graphics, logos, and
            software, is the property of Duong'sShop or its content suppliers
            and is protected by intellectual property laws. You may not use,
            reproduce, or distribute any content from our website without our
            express written permission.
          </p>
        </div>
        <div className="flex gap-5 flex-col">
          <h2 className="bg-black pl-3 py-1 w-max pr-10 rounded-e-2xl text-white">
            5. Disclaimer of Warranties
          </h2>
          <p className="font-medium text-base">
            Our services are provided "as is" and "as available" without any
            warranties of any kind, either express or implied. We do not warrant
            that our services will be uninterrupted or error-free, nor do we
            make any warranties as to the results that may be obtained from the
            use of our services.
          </p>
        </div>
      </div>
    </>
  );
}
