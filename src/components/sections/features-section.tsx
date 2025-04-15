"use client";

import ScrollAnimation from "@/components/util/scroll-animation";

const FeaturesSection = () => {
  const features = [
    {
      title: "Git-connected Deploys",
      subtitle: "From localhost to https, in seconds.",
      description: "Deploy from Git or your CLI.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-700"
        >
          <path
            d="M5 12V19C5 19.5523 5.44772 20 6 20H18C18.5523 20 19 19.5523 19 19V12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 4V15M12 4L8 8M12 4L16 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      imagePlaceholder: (
        <div className="relative h-64 rounded-lg bg-gray-100 p-4 overflow-hidden">
          <pre className="text-xs text-gray-700 p-4 bg-white rounded-md shadow-sm">
            <code>
              $ vercel deploy<br/>
              {">"} Deploying project<br/>
              {">"} Ready! Deployed to https://my-project.vercel.app [2s]
            </code>
          </pre>
        </div>
      )
    },
    {
      title: "Collaborative pre-production",
      subtitle: "Every deploy is remarkable.",
      description: "Chat with your team on real, production-grade UI, not just designs.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-700"
        >
          <path
            d="M8 12H8.01M12 12H12.01M16 12H16.01M21 12C21 16.4183 16.9706 20 12 20C10.4607 20 9.01172 19.6565 7.74467 19.0511L3 20L4.39499 16.28C3.51156 15.0423 3 13.5743 3 12C3 7.58172 7.02944 4 12 4C16.9706 4 21 7.58172 21 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      imagePlaceholder: (
        <div className="relative h-64 rounded-lg bg-gray-100 p-4 overflow-hidden">
          <div className="absolute top-4 right-4 flex space-x-2">
            <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-600">JD</div>
            <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center text-xs font-medium text-green-600">TK</div>
          </div>
          <div className="mt-12 ml-4 p-3 bg-white rounded-lg shadow-sm w-48 relative">
            <div className="text-xs text-gray-700">Great work on the new hero section!</div>
            <div className="absolute -left-2 top-3 w-2 h-2 bg-white transform rotate-45"></div>
          </div>
        </div>
      )
    },
    {
      title: "Frontend Observability",
      subtitle: "Privacy-friendly, lightweight Analytics.",
      description: "Upgrade your post-launch workflow with actionable, real-time insights.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-700"
        >
          <path
            d="M9 17L5 13M9 17L13 13M9 17V7M15 7L19 11M15 7L11 11M15 7V17"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      imagePlaceholder: (
        <div className="relative h-64 rounded-lg bg-gray-100 p-4 overflow-hidden">
          <div className="flex items-end h-40 space-x-2 pt-8">
            <div className="w-8 h-20 bg-blue-500 opacity-80 rounded-t-md"></div>
            <div className="w-8 h-32 bg-blue-500 opacity-80 rounded-t-md"></div>
            <div className="w-8 h-24 bg-blue-500 opacity-80 rounded-t-md"></div>
            <div className="w-8 h-36 bg-blue-500 opacity-80 rounded-t-md"></div>
            <div className="w-8 h-28 bg-blue-500 opacity-80 rounded-t-md"></div>
            <div className="w-8 h-40 bg-blue-500 opacity-80 rounded-t-md"></div>
          </div>
        </div>
      )
    },
    {
      title: "Instant Rollbacks",
      subtitle: "Go ahead, deploy on Friday.",
      description: "Instantly rollback to a working deployment.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-700"
        >
          <path
            d="M4 7H20M10 11V17M14 11V17M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      imagePlaceholder: (
        <div className="relative h-64 rounded-lg bg-gray-100 p-4 overflow-hidden">
          <div className="flex flex-col space-y-2">
            <div className="p-3 bg-white rounded-md shadow-sm flex items-center">
              <div className="h-3 w-3 bg-green-500 rounded-full mr-3"></div>
              <div className="text-xs text-gray-700">Production (Latest)</div>
              <div className="ml-auto text-xs text-gray-500">2 min ago</div>
            </div>
            <div className="p-3 bg-white rounded-md shadow-sm flex items-center border-2 border-blue-500">
              <div className="h-3 w-3 bg-blue-500 rounded-full mr-3"></div>
              <div className="text-xs text-gray-700">Preview Deployment</div>
              <div className="ml-auto text-xs text-gray-500">10 min ago</div>
            </div>
            <div className="p-3 bg-white rounded-md shadow-sm flex items-center opacity-70">
              <div className="h-3 w-3 bg-gray-500 rounded-full mr-3"></div>
              <div className="text-xs text-gray-700">Previous Deployment</div>
              <div className="ml-auto text-xs text-gray-500">1 hour ago</div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <div className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Rollback</div>
          </div>
        </div>
      )
    },
    {
      title: "Conformance",
      subtitle: "Move fast, don't break things.",
      description: "Keep quality high while maintaining velocity with Enterprise Monorepos.",
      icon: (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-gray-700"
        >
          <path
            d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      imagePlaceholder: (
        <div className="relative h-64 rounded-lg bg-gray-100 p-4 overflow-hidden">
          <div className="flex flex-col space-y-3 mt-2">
            <div className="bg-white rounded-md shadow-sm p-3">
              <div className="flex items-center">
                <div className="h-4 w-4 bg-green-500 rounded-full mr-3"></div>
                <div className="text-xs text-gray-700 font-medium">Type Check</div>
                <div className="ml-auto text-xs text-gray-500">Passed</div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-sm p-3">
              <div className="flex items-center">
                <div className="h-4 w-4 bg-green-500 rounded-full mr-3"></div>
                <div className="text-xs text-gray-700 font-medium">Linting</div>
                <div className="ml-auto text-xs text-gray-500">Passed</div>
              </div>
            </div>
            <div className="bg-white rounded-md shadow-sm p-3">
              <div className="flex items-center">
                <div className="h-4 w-4 bg-green-500 rounded-full mr-3"></div>
                <div className="text-xs text-gray-700 font-medium">Tests</div>
                <div className="ml-auto text-xs text-gray-500">32/32 Passed</div>
              </div>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {features.map((feature, index) => (
            <ScrollAnimation
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:col-start-1" : "md:col-start-2"
              }`}
              delay={index * 150}
            >
              <div className="mb-3 text-gray-700">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>
              <h4 className="text-base font-medium text-gray-800 mb-2">
                {feature.subtitle}
              </h4>
              <p className="text-sm text-gray-600 mb-6">
                {feature.description}
              </p>

              <div className="mt-auto scale-on-hover transition">
                {feature.imagePlaceholder}
              </div>
            </ScrollAnimation>
          ))}
        </div>

        {/* Scale section with gradient text */}
        <ScrollAnimation className="mt-24 text-center" delay={300}>
          <h2 className="text-2xl font-semibold mb-1">Scale your</h2>
          <a
            href="/enterprise"
            className="text-2xl font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            Enterprise
          </a>
          <h2 className="text-2xl font-semibold mb-4">without compromising</h2>
          <a
            href="/security"
            className="text-2xl font-semibold text-blue-600 hover:text-blue-700 transition-colors duration-200"
          >
            Security
          </a>
        </ScrollAnimation>
      </div>
    </section>
  );
};

export default FeaturesSection;
