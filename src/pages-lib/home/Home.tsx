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
  const [hideChat, setHideChat] = useState(false);
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
          <Image
            src={'/home/pumpkin.svg'}
            alt={'Dungeons and Dragons Logo'}
            width={128}
            height={128}
            className="hidden md:block md:w-16 md:h-16 h-12 w-12 lg:w-24 lg:h-24 xl:w-32 xl:h-32 owl absolute left-[20px] top-[20px]"
          />
          <Image
            src={'/home/pumpkin.svg'}
            alt={'Dungeons and Dragons Logo'}
            width={128}
            height={128}
            className="hidden md:block md:w-16 md:h-16 h-12 w-12 lg:w-24 lg:h-24 xl:w-32 xl:h-32 owl absolute right-[20px] top-[20px]"
          />
          <div className="hidden absolute left-[12%] bottom-[100px] md:flex flex-col items-center justify-start spider">
            <div className="h-screen w-[2px] bg-gray-700 relative top-2"></div>
            <Image
              src={'/home/spider.svg'}
              alt={'Dungeons and Dragons Logo'}
              width={128}
              height={128}
              className=" md:w-12 md:h-12 h-6 w-6 lg:w-18 lg:h-18 xl:w-24 xl:h-24"
            />
          </div>
          <div className="hidden  fixed top-50 right-[-10px] md:flex flex-row items-center">
            <div className="chat chat-end top-[-32px] relative chat-sm">
              <div
                className={`chat-bubble opacity-0 w-64 ${hideChat && 'opacity-100'}`}
              >
                Happy Halloween! <br /> 🎃 - Maxy - 🎃
              </div>
            </div>
            <Image
              onMouseEnter={() => setHideChat(true)}
              onMouseLeave={() => setHideChat(false)}
              src={'/home/owl.svg'}
              alt={'Dungeons and Dragons Logo'}
              width={128}
              height={128}
              className=" md:w-16 md:h-16 h-12 w-12 lg:w-24 lg:h-24  xl:w-32 xl:h-32 owl"
            />
          </div>
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
              <h3 className="text-center divider">
                Latest Update: The Gremlin
              </h3>

              <time className="text-center w-full italic">
                October 14th, 2024
              </time>
              <ul className="list-disc list-inside">
                <li>
                  Created The Gremlin, a Discord bot to query the wiki and roll
                  dice.
                </li>
                <li>Home Screen Display Bug Fix</li>
                <li>
                  Added a discord webhook to announce new users and comments
                </li>
              </ul>
              <time className="text-center w-full italic">
                October 13th, 2024
              </time>
              <div className="divider"></div>
              <ul className="list-disc list-inside">
                <li>Added 17 more creatures</li>
                <li>Added Legendary Actions to creatures</li>
                <li>
                  Creatures with spells that can be cast at a certain interval
                  no longer display them as spell slots (ex: Deva (1/day))
                </li>
                <li>Alignment correctly display an accurate description</li>
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
