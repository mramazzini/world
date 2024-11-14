'use client';

import { DISCORD_INVITE, wikiLinks } from '@/lib/globalVars';

import Image from 'next/image';
import Link from 'next/link';
import { Suspense, useEffect, useState } from 'react';
import { getBlogposts } from '@/lib/actions/db/blogpost/read.actions';
import { BlogPost } from '@prisma/client';
import HomeSearchBar from '@/components/UI/HomeSearchBar';
import BlogPostPreview from '@/components/HomePage/BlogPostPreview';
import Stats from '@/components/HomePage/Stats';
import Trivia from '@/components/HomePage/Trivia';

const HomePage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  useEffect(() => {
    getBlogposts().then((res) => {
      res.sort((a, b) => {
        return (
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      });
      setBlogPosts(res);
    });
  }, []);
  return (
    <>
      <main className="p-4 md:p-8 flex flex-col bg-base-100 items-center relative min-h-screen">
        <div className="bg-base-300 p-4 w-full rounded-xl h-full flex flex-col items-center justify-center gap-4 relative">
          <h1 className="text-center">Max&apos;s DnD</h1>
          <p className="text-center w-[75%]">
            Welcome to Max&apos;s DnD! Here you can find information on any and
            all things Dungeons and Dragons 5th Edition.
          </p>

          <div className="divider m-0"></div>
          <div className="flex flex-wrap justify-center">
            {wikiLinks.map((link, index) => (
              <Link key={index} href={link.href}>
                <div className="btn m-2">{link.name}</div>
              </Link>
            ))}
          </div>
          <div className="relative flex flex-col justify-center items-center">
            {/* searchabar */}
            <Suspense>
              <div className="hidden md:flex justify-center items-center ">
                <HomeSearchBar />
              </div>
              <div className="flex md:hidden justify-center items-center ">
                <HomeSearchBar small />
              </div>
            </Suspense>
          </div>
          <div className="w-full flex flex-col md:flex-row  justify-between items-center md:items-end gap-4">
            {/* <Link href={""} className="link link-primary">
            Want to contribute? Click Here!
          </Link> */}
            <Link
              href={DISCORD_INVITE}
              className="btn btn-ghost border-gray-500"
            >
              Join our Discord -&gt;
            </Link>
            <div className="flex flex-col items-center ">
              <p>
                <em>Need a character sheet?</em>
              </p>
              <div className="divider m-0"></div>
              <Link
                href={'/dashboard'}
                className="btn btn-secondary font-bold w-[90%] "
              >
                Start here -&gt;
              </Link>
            </div>
          </div>
          <div className="divider m-0"></div>
        </div>
        <h2 className="text-center my-8 divider divider-primary">Whats New</h2>
        <div className="grid grid-cols-12 w-full gap-4">
          <section className="col-span-12 md:col-span-7 xl:col-span-4 lg:col-span-5 row-span-1 md:row-span-2 xl:row-span-3 bg-base-300 p-4 rounded-xl">
            <Stats />
          </section>
          <section className="col-span-12 md:col-span-5 xl:col-span-8 lg:col-span-7 row-span-1  bg-base-300 p-4 rounded-xl">
            {/* blogpost 1 */}
            {blogPosts[0] && <BlogPostPreview blogPost={blogPosts[0]} />}
          </section>
          <section className="col-span-12 md:col-span-5 xl:col-span-8 lg:col-span-7 row-span-1 bg-base-300 p-4 rounded-xl ">
            {/* blogpost 2 */}
            {blogPosts[1] && <BlogPostPreview blogPost={blogPosts[1]} />}
          </section>
          <section className="col-span-12 md:col-span-12  lg:col-span-12  xl:col-span-8 row-span-1 bg-base-300 p-4 rounded-xl">
            <div className="bg-base-300 p-4 rounded-xl w-full flex flex-col">
              <h3 className="text-center">Latest Update: The Workshop</h3>
              <div className="text-center divider mt-0 italic">
                November 13th, 2024
              </div>
              <time className="text-center w-full italic mb-2"></time>
              <ul className="list-disc list-inside">
                <li>
                  Created the Workshop, a place to create and edit and publish
                  your own homebrew content. Check it out in the navbar!
                </li>
                <li>Reworked URL routes for all pages to be more readable</li>
              </ul>

              <div className="divider">
                <Link
                  href="/changelog"
                  className="btn btn-ghost border border-gray-500"
                >
                  View all changes -&gt;
                </Link>
              </div>
            </div>
          </section>
          {/* Gremlin bot */}
          <section className="col-span-12 md:col-span-8 bg-base-300 p-4 rounded-xl">
            <div className="flex flex-col items-center">
              <h3 className="text-center divider">The Gremlin</h3>
              <p>
                <strong>The Gremlin</strong> is a discord bot that can help you
                with your Dungeons and Dragons needs. It can roll dice, look up
                spells, and query this wiki for any info you may need.{' '}
              </p>
              <div className="divider"></div>
              <div className="bg-base-200 p-4 rounded-xl flex flex-col lg:flex-row items-center">
                <Image
                  src={'/home/gremlin.webp'}
                  alt={'Gremlin Bot'}
                  width={256}
                  height={256}
                  className="rounded-xl m-4"
                />
                <div className="divider divider-horizontal"></div>
                <div className="flex flex-col gap-4">
                  <p>
                    <strong>Invite The Gremlin to your server!</strong>
                  </p>

                  <Link
                    href="https://discord.com/oauth2/authorize?client_id=1295232285804597299&permissions=8&integration_type=0&scope=bot+applications.commands"
                    className="btn btn-ghost border-gray-500"
                  >
                    Invite Gremlin -&gt;
                  </Link>
                </div>
              </div>
            </div>
          </section>
          <section className="col-span-12 md:col-span-4 bg-base-300 p-4 rounded-xl">
            <Trivia />
          </section>
        </div>
      </main>
    </>
  );
};

export default HomePage;
