import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import PlayButton from "y/components/PlayButton";
export default function Home() {
  const [audioPlaying, setAudioPlaying] = useState(false)
  function playAudio() {
    const audio_reference = document.querySelector("#audio_id")
    if (audio_reference instanceof HTMLAudioElement) {
      audioPlaying ? void audio_reference.play() : audio_reference.pause()
      setAudioPlaying(!audioPlaying)
      console.log(audio_reference)
      console.log(audioPlaying)
      
    }
    
    
  }
  
  return (
    <>
      <Head>
        <title>...</title>
        <meta name="description" content="Days until the end of school, forever." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-[--background-primary-obsidian]">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8 ">
            <div
              className="flex flex-col gap-4 rounded-xl border-style scale-[200%] p-2 w-full max-h-lg md:max-w-xl" onClick={playAudio}>
              <h3 className="text-2xl font-bold text-white"> <PlayButton classname="transition-all" isPlaying={audioPlaying} /> </h3>
              <audio src="icons/barbie.mp3" id="audio_id"className="hidden">
                <a href="AudioTest.ogg">Download OGG audio</a>.
              </audio>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
