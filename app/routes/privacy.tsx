import type { MetaFunction } from "@remix-run/node";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import PrivacyPolicy from "~/markdown/privacy_policy.mdx";
import TermsCondition from "~/markdown/terms_conditions.mdx";

export const meta: MetaFunction = () => {
  return [
    { title: "Swingers | Golf Matchmaking Platform" },
    { name: "description", content: "Welcome to Swingers!" },
  ];
};

const Privacy = () => {
    return (
        <section>
            <PrivacyPolicy className="markdown-content"/>
        </section>
    )
};

const Terms = () => {
    return (
        <section>
            <TermsCondition className="markdown-content"/>
        </section>
    )
};

export default function Index() {
  return (
    <>
    <Header/>
    <main>
      <Privacy />
      <Terms />
    </main>
    <Footer/>
    </>
  );
}
