import React from "react";
import { Tile, TileWrapper, TileBackground, TileContent } from "./tile";
import { WorkBackground, WorkContainer, WorkLeft, WorkRight, WorkLink } from './work'
import Image from "next/image";
const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground><WorkBackground /></TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We Build </div>
              <div className='text-4xl md:text-5xl font-semibold tracking-tight '>
                <WorkLink href="https://github.com/zero4835/Software-Agency-Website">Shinto</WorkLink>&apos;s app
              </div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image src='/assets/works/shinto.png' layout="responsive" width={840} height={1620} alt="app logo" />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We Build </div>
              <div className='text-4xl md:text-5xl font-semibold tracking-tight '>Summer&apos;s app</div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image src='/assets/works/summer.png' layout="responsive" width={840} height={1620} alt="app logo" />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => (
          <WorkContainer>
            <WorkLeft progress={progress}>
              <div>We Show </div>
              <div className='text-4xl md:text-5xl font-semibold tracking-tight '>Fast-loading</div>
            </WorkLeft>
            <WorkRight progress={progress}>
              <Image src='/assets/works/Fast-loading.png' layout="responsive" width={840} height={1620} alt="app logo" />
            </WorkRight>
          </WorkContainer>
        )}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
