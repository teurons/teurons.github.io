import type { ReactNode } from "react";
import SimpleHeader from "@/app/stripe/(components)/headers/simple";
import { SimpleNavigationMenu } from "@/app/stripe/(components)/navigation-menus/simple-horizontal";
import { VerticalNavigationMenu } from "@/app/stripe/(components)/navigation-menus/simple-vertical";
import BigFooter from "@/app/stripe/(components)/footers/big";
import { Icons } from "@/components/icons";
import StripeCanvas from "./(components)/canvas";

export default function Layout({ children }: { children: ReactNode }) {
  const navigationItems = [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "#" },
  ];

  const navigationMenu = <SimpleNavigationMenu items={navigationItems} />;

  const verticalNavigationMenu = (
    <VerticalNavigationMenu items={navigationItems} loginHref="#" />
  );

  // Footer navigation configuration
  const footerNavigation = {
    solutions: [
      { name: "Marketing", href: "/marketing" },
      { name: "Analytics", href: "/analytics" },
      { name: "Automation", href: "/automation" },
      { name: "Commerce", href: "/commerce" },
    ],
    support: [
      { name: "Documentation", href: "/docs" },
      { name: "Guides", href: "/guides" },
      { name: "API Status", href: "/api-status" },
    ],
    company: [
      { name: "About", href: "/about" },
      { name: "Blog", href: "/blog" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact" },
    ],
    legal: [
      { name: "Privacy", href: "/privacy" },
      { name: "Terms", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
    social: [
      {
        name: "Twitter",
        href: "https://twitter.com/company",
        icon: Icons.x,
      },
      {
        name: "GitHub",
        href: "https://github.com/company",
        icon: Icons.github,
      },
      {
        name: "YouTube",
        href: "https://youtube.com/company",
        icon: Icons.youtube,
      },
    ],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SimpleHeader
        navigationMenu={navigationMenu}
        verticalNavigationMenu={verticalNavigationMenu}
      />
      <StripeCanvas />
      {children}
      <BigFooter
        solutions={footerNavigation.solutions}
        support={footerNavigation.support}
        company={footerNavigation.company}
        legal={footerNavigation.legal}
        social={footerNavigation.social}
        companyName="SaaS Foundations"
        companyDescription="Building the foundation for your next SaaS product."
      />
    </div>
  );
}
