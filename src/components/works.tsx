import React from "react";
import { Tile, TileWrapper, TileBackground, TileContent } from "./tile";

const Works = () => (
  <TileWrapper numOfPages={3}>
    <TileBackground></TileBackground>
    <TileContent>
      <Tile
        page={0}
        renderContent={({ progress }) => <span className='text-9xl'>Foo {progress}</span>}
      ></Tile>
      <Tile
        page={1}
        renderContent={({ progress }) => <span className='text-9xl'>Bar {progress}</span>}
      ></Tile>
      <Tile
        page={2}
        renderContent={({ progress }) => <span className='text-9xl'>KKK {progress}</span>}
      ></Tile>
    </TileContent>
  </TileWrapper>
);

export default Works;
