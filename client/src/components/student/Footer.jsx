import React from "react";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-200 w-full mt-10">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.2fr] gap-10 border-b border-slate-700 pb-10">
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <img
                src={assets.logo_dark}
                alt="Edemy logo"
                className="h-20 w-20"
              />
              <h2 className="text-xl font-semibold text-white">Edemy</h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry&apos;s standard dummy
              text.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Company</h3>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">
              Subscribe to our newsletter
            </h3>
            <p className="text-sm leading-7 text-slate-400">
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </p>
            <form className="flex flex-col sm:flex-row sm:items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-600/30"
              />
              <button
                type="submit"
                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-slate-500">
          Copyright 2026 © GreatStack. All Right Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
