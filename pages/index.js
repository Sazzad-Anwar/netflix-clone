import Head from 'next/head'
import Image from 'next/image';
import { useState } from 'react';
import Accordion from '../components/Accordion';
import Layout from '../components/Layout';
import faqData from '../faq.json';

export default function Home() {

  return (
    <Layout>

      {/* hero section */}
      <section className='relative z-0'>
        <div className='hidden lg:block'>
          <Image
            src='/hero-image.jpg'
            layout="responsive"
            quality={100}
            height={745}
            width={1920}
            objectFit='cover'
            className='filter brightness-[.30]'
            alt="hero-img"
          />
        </div>
        <div className='block lg:hidden'>
          <Image
            src='/hero-image.jpg'
            layout="responsive"
            quality={100}
            height={513}
            width={480}
            objectFit='cover'
            className='filter brightness-[.30]'
            alt='hero-img'
          />
        </div>
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:pt-16'>
          <div className='w-screen px-[2rem] lg:px-0 lg:w-[47rem]'>
            <h1 className='xl:mt-0 text-[1.75rem] lg:text-[3.125rem] xl:text-[4rem] leading-tight text-center text-white font-bold'>Unlimited movies, TV shows, and more.</h1>
            <h2 className='text-lg lg:text-[1.2rem] xl:text-[1.65rem] text-center text-white my-2'>Watch anywhere. Cancel anytime.</h2>
            <p className='text-lg px-10 mb-2 lg:px-0 lg:text-[1.2rem] text-center text-white mt-3 lg:mt-9 lg:mb-5'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='h-auto lg:h-[4.37rem] w-full flex flex-col lg:flex-row items-center'>
              <input type="text" className='focus:outline-none pl-5 h-[3.125rem] lg:h-full w-full lg:w-2/3 lg:rounded-none' placeholder='Email address' />
              <button type='button' className='bg-[#E50914] text-white text-base h-[2.5rem] lg:text-[1.8rem] mt-3 lg:mt-0 lg:h-full w-1/3 rounded lg:rounded-none'>Get Started <i className="bi bi-chevron-right"></i></button>
            </div>
          </div>
        </div>
        <div className='bg-[#222222] h-2'></div>
      </section>

      {/* enjoy your tv section */}
      <section className='bg-black'>
        <div className="container mx-auto py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
            <div className='flex justify-center items-center'>
              <div className='mb-3'>
                <h1 className='text-center mb-3 lg:mb-0 lg:text-left text-[1.625rem] lg:text-[3.12rem] font-medium text-white'>Enjoy on your TV.</h1>
                <p className='text-center lg:text-left text-[1.125rem] lg:text-[1.6rem] text-white lg:w-[31.75rem]'>Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</p>
              </div>
            </div>
            <div className='relative'>
              <Image
                src="/tv-frame.png"
                layout="intrinsic"
                width={530}
                height={398}
                className='z-10'
                alt="tv-frame"
              />
              <div className='absolute top-[5.25rem] left-[4.5rem]'>
                <video autoPlay playsInline muted loop className='w-[24rem] z-0'>
                  <source src="/tv-video.m4v" />
                </video>
              </div>
            </div>
          </div>
        </div>
        <div className='bg-[#222222] h-2'></div>
      </section>

      {/* download your shows */}
      <section className='bg-black'>
        <div className="container mx-auto py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
            <div className='relative '>
              <div className="flex justify-start">
                <div>
                  <div className="flex justify-center items-center">
                    <Image
                      src="/image-1.jpg"
                      layout='intrinsic'
                      height={379}
                      width={505}
                      className='text-left'
                      alt='image-1'
                    />
                  </div>
                  <div className="flex justify-center items-center">
                    <div className='absolute w-[20.62rem] bottom-[1.87rem] flex justify-between items-center rounded-xl border-2 bg-black border-[#222222] px-3 py-2'>
                      <Image
                        src="/image-3.png"
                        layout='intrinsic'
                        height={80}
                        width={57}
                        alt='image-3'
                      />
                      <div>
                        <h3 className='text-sm text-white'>Stranger Things</h3>
                        <h4 className='text-xs text-blue-700'>Downloading...</h4>
                      </div>

                      <Image
                        src="/download-animation.gif"
                        layout='intrinsic'
                        width={40}
                        height={40}
                        alt='download-animation'
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h1 className='text-[1.625rem] text-center lg:text-left lg:text-[3.125rem] text-white font-bold lg:leading-[3rem] px-10 mb-3'>Download your shows to watch offline.</h1>
              <h2 className='text-[1.125rem] text-center lg:text-left lg:text-[1.625rem] text-white font-medium px-10 lg:leading-8'>Save your favorites easily and always have something to watch.</h2>
            </div>
          </div>
        </div>
        <div className='bg-[#222222] h-2'></div>
      </section>

      {/* watch everywhere */}
      <section className='bg-black'>
        <div className="container mx-auto py-14">
          <div className='text-center lg:text-left'>
            <h1 className='text-[1.625rem] lg:text-[3.125rem] text-white font-bold lg:leading-[3rem] px-10 mb-3'>Watch everywhere.</h1>
            <h2 className='text-[1.125rem] mt-5 w-auto  lg:w-[36rem] lg:text-[1.625rem] text-white font-medium px-10 lg:leading-8'>
              Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </h2>
          </div>
        </div>
        <div className='bg-[#222222] h-2'></div>
      </section>

      {/* create profiles for kids */}
      <section className='bg-black'>
        <div className="container mx-auto py-14">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
            <div className='relative'>
              <Image
                src="/image-2.png"
                layout='intrinsic'
                height={379}
                width={505}
                alt='image-2'
              />
            </div>
            <div>
              <h1 className='text-[1.625rem] text-center lg:text-left lg:text-[3.125rem] text-white font-bold lg:leading-[3rem] px-10 mb-3'>Create profiles for kids.</h1>
              <h2 className='text-[1.125rem] text-center lg:text-left lg:text-[1.625rem] text-white font-medium px-10 lg:leading-8'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
            </div>
          </div>
        </div>
        <div className='bg-[#222222] h-2'></div>
      </section>

      {/* faq section */}
      <section className='bg-black'>
        <div className="container mx-auto py-20">
          <h1 className='text-[1.625rem] text-center lg:text-[3.125rem] text-white font-bold lg:leading-[3rem] px-10 mb-10'>Frequently Asked Questions</h1>
          {faqData && faqData.map((faq) => (
            <Accordion key={faq.id} faq={faq} />
          ))}

          <div className='mt-16'>
            <div className='w-auto lg:w-[51rem] mx-auto'>
              <h3 className='text-[1.2rem] text-white text-center mb-4'>Ready to watch? Enter your email to create or restart your membership.</h3>
              <div className='h-auto lg:h-[4.37rem] w-full flex flex-col lg:flex-row items-center'>
                <input type="text" className='focus:outline-none pl-5 h-[3.125rem] lg:h-full w-full lg:w-2/3 lg:rounded-none' placeholder='Email address' />
                <button type='button' className='bg-[#E50914] text-white text-base h-[2.5rem] lg:text-[1.8rem] mt-3 lg:mt-0 lg:h-full w-1/3 rounded lg:rounded-none'>Get Started <i className="bi bi-chevron-right"></i></button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}
