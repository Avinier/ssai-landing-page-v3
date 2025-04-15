"use client";

const CodeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Code snippet */}
          <div className="order-2 md:order-1">
            <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="px-4 py-2 bg-gray-800 border-b border-gray-700">
                <div className="text-xs text-gray-400">app/users/page.tsx</div>
              </div>
              <div className="p-4">
                <pre className="text-sm text-gray-300 font-mono">
                  <code>
                    {`export default async function Page() {\n  const data = await sql\`SELECT * from USERS\`;\n  return (\n    <>\n      <h1>Users</h1>\n      <ul>\n        {data.map(user => (\n          <li key={user.id}>\n            {user.name}\n          </li>\n        ))}\n      </ul>\n    </>\n  );\n}`}
                  </code>
                </pre>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6">
              Bridging the best of Client and Server Rendering.
            </h2>
            <p className="text-gray-600">
              Experience seamless integration, optimized performance, and reduced bundle sizes like never before.
            </p>
            <div className="mt-8">
              <a
                href="/features/edge-functions"
                className="text-sm font-medium text-gray-900 hover:text-gray-700"
              >
                More about Rendering
              </a>
            </div>
          </div>
        </div>

        {/* Data section */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">All the data.</h2>
          <p className="text-gray-600 mx-auto max-w-2xl mb-8">
            Connect with content, commerce or database platforms.
          </p>
          <a
            href="/integrations"
            className="text-sm font-medium text-gray-900 hover:text-gray-700"
          >
            Discover Integrations
          </a>
        </div>
      </div>
    </section>
  );
};

export default CodeSection;
