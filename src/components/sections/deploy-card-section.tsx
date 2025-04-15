"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

const DeployCardSection = () => {
  const templates = [
    {
      name: "Next.js",
      link: "/templates/nextjs",
    },
    {
      name: "React",
      link: "/templates/react",
    },
    {
      name: "Astro",
      link: "/templates/astro",
    },
    {
      name: "Svelte",
      link: "/templates/svelte",
    },
    {
      name: "Nuxt",
      link: "/templates/nuxt",
    },
    {
      name: "Python",
      link: "/templates/python",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-sm p-8 lg:p-12 max-w-4xl mx-auto border border-gray-100">
          <h2 className="text-2xl font-bold mb-8">
            Deploy your first app in seconds.
          </h2>

          <ul className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-1 h-1 rounded-full bg-gray-500" />
              <span className="text-sm text-gray-600">
                Deploy automatically <strong>from git</strong> or with{" "}
                <strong>our CLI</strong>
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-1 h-1 rounded-full bg-gray-500" />
              <span className="text-sm text-gray-600">
                <strong>Wide range</strong> support for the most popular
                frameworks
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-1 h-1 rounded-full bg-gray-500" />
              <span className="text-sm text-gray-600">
                <strong>Previews</strong> for every push
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="flex-shrink-0 w-1 h-1 rounded-full bg-gray-500" />
              <span className="text-sm text-gray-600">
                <strong>Automatic HTTPS</strong> for all your domains
              </span>
            </li>
          </ul>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
            {templates.map((template, index) => (
              <Link
                key={index}
                href={template.link}
                className="py-3 px-4 text-sm font-medium text-center border border-gray-200 bg-white hover:bg-gray-50 rounded-lg transition"
              >
                {template.name} Templates
              </Link>
            ))}
          </div>

          <div className="flex justify-center">
            <Button
              asChild
              className="bg-black text-white hover:bg-gray-800 px-6"
              size="lg"
            >
              <Link href="/new">Start Deploying</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeployCardSection;
