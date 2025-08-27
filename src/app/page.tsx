import { Layout } from "~/components/layouts/layout";

const Home = async () => {
  return (
    <Layout>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <div className="space-y-8 p-8 text-center">
          {/* 404 Error Image */}
          <div className="flex justify-center">
            <img
              src="/images/404 Error-rafiki.png"
              alt="404 Error"
              className="h-64 w-64 object-contain"
            />
          </div>

          {/* Error Text */}
          <div className="space-y-4">
            <h1 className="text-6xl font-bold text-white">404</h1>
            <h2 className="text-2xl font-semibold text-gray-300">
              Page Not Found
            </h2>
            <p className="mx-auto max-w-md text-lg text-gray-400">
              We're currently updating our website. Please check back soon for
              the new and improved experience!
            </p>
          </div>

          {/* Contact Info */}
          <div className="border-t border-gray-700 pt-8">
            <p className="text-gray-500">
              For urgent inquiries, please contact us at{" "}
              <a
                href="mailto:contact@aientrepreneurs.org"
                className="text-blue-400 transition-colors hover:text-blue-300"
              >
                contact@aientrepreneurs.org
              </a>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
